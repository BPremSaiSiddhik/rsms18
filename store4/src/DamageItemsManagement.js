// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { useStore } from '../context/StoreContext';
// // // // // // import { PlusCircle, Trash2, Edit, FileX, CheckCircle, Search, Filter, RefreshCw } from 'lucide-react';

// // // // // // const DamageItemsManagement = () => {
// // // // // //   const { storeName, storeId, userDetails } = useStore();
// // // // // //   const [damageItems, setDamageItems] = useState([]);
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [error, setError] = useState(null);
// // // // // //   const [showForm, setShowForm] = useState(false);
// // // // // //   const [searchTerm, setSearchTerm] = useState('');
// // // // // //   const [filterStatus, setFilterStatus] = useState('all');
// // // // // //   const [currentPage, setCurrentPage] = useState(1);
// // // // // //   const [itemsPerPage] = useState(10);
// // // // // //   const [selectedItem, setSelectedItem] = useState(null);
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     itemName: '',
// // // // // //     itemCode: '',
// // // // // //     quantity: 1,
// // // // // //     damageType: 'physical',
// // // // // //     damageDescription: '',
// // // // // //     reportedBy: userDetails?.name || '',
// // // // // //     damageDate: new Date().toISOString().split('T')[0],
// // // // // //     status: 'pending',
// // // // // //     actionTaken: '',
// // // // // //     images: []
// // // // // //   });
  
// // // // // //   const damageTypes = [
// // // // // //     { value: 'physical', label: 'Physical Damage' },
// // // // // //     { value: 'expired', label: 'Expired Product' },
// // // // // //     { value: 'defective', label: 'Manufacturing Defect' },
// // // // // //     { value: 'packaging', label: 'Packaging Damage' },
// // // // // //     { value: 'other', label: 'Other' }
// // // // // //   ];
  
// // // // // //   const statusOptions = [
// // // // // //     { value: 'pending', label: 'Pending Review' },
// // // // // //     { value: 'approved', label: 'Approved for Disposal' },
// // // // // //     { value: 'returned', label: 'Returned to Vendor' },
// // // // // //     { value: 'repaired', label: 'Repaired/Restored' },
// // // // // //     { value: 'discounted', label: 'Marked for Discount Sale' },
// // // // // //     { value: 'resolved', label: 'Resolved' }
// // // // // //   ];

// // // // // //   useEffect(() => {
// // // // // //     fetchDamageItems();
// // // // // //   }, [storeId]);

// // // // // //   const fetchDamageItems = async () => {
// // // // // //     try {
// // // // // //       setLoading(true);
// // // // // //       const response = await fetch(`/api/damage-items?storeId=${storeId}`);
// // // // // //       if (!response.ok) {
// // // // // //         throw new Error('Failed to fetch damage items');
// // // // // //       }
// // // // // //       const data = await response.json();
// // // // // //       setDamageItems(data);
// // // // // //       setLoading(false);
// // // // // //     } catch (err) {
// // // // // //       setError(err.message);
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleInputChange = (e) => {
// // // // // //     const { name, value } = e.target;
// // // // // //     setFormData({ ...formData, [name]: value });
// // // // // //   };

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
    
// // // // // //     try {
// // // // // //       const method = selectedItem ? 'PUT' : 'POST';
// // // // // //       const url = selectedItem 
// // // // // //         ? `/api/damage-items/${selectedItem.id}` 
// // // // // //         : '/api/damage-items';
      
// // // // // //       const response = await fetch(url, {
// // // // // //         method,
// // // // // //         headers: {
// // // // // //           'Content-Type': 'application/json',
// // // // // //         },
// // // // // //         body: JSON.stringify({
// // // // // //           ...formData,
// // // // // //           storeId,
// // // // // //           updatedBy: userDetails?.id
// // // // // //         }),
// // // // // //       });

// // // // // //       if (!response.ok) {
// // // // // //         throw new Error('Failed to save damage item');
// // // // // //       }

// // // // // //       // Refresh damage items list
// // // // // //       fetchDamageItems();
// // // // // //       resetForm();
// // // // // //     } catch (err) {
// // // // // //       setError(err.message);
// // // // // //     }
// // // // // //   };

// // // // // //   const resetForm = () => {
// // // // // //     setFormData({
// // // // // //       itemName: '',
// // // // // //       itemCode: '',
// // // // // //       quantity: 1,
// // // // // //       damageType: 'physical',
// // // // // //       damageDescription: '',
// // // // // //       reportedBy: userDetails?.name || '',
// // // // // //       damageDate: new Date().toISOString().split('T')[0],
// // // // // //       status: 'pending',
// // // // // //       actionTaken: '',
// // // // // //       images: []
// // // // // //     });
// // // // // //     setSelectedItem(null);
// // // // // //     setShowForm(false);
// // // // // //   };

// // // // // //   const handleEdit = (item) => {
// // // // // //     setSelectedItem(item);
// // // // // //     setFormData({
// // // // // //       itemName: item.itemName,
// // // // // //       itemCode: item.itemCode,
// // // // // //       quantity: item.quantity,
// // // // // //       damageType: item.damageType,
// // // // // //       damageDescription: item.damageDescription,
// // // // // //       reportedBy: item.reportedBy,
// // // // // //       damageDate: item.damageDate,
// // // // // //       status: item.status,
// // // // // //       actionTaken: item.actionTaken || '',
// // // // // //       images: item.images || []
// // // // // //     });
// // // // // //     setShowForm(true);
// // // // // //   };

// // // // // //   const handleDelete = async (id) => {
// // // // // //     if (!window.confirm('Are you sure you want to delete this item?')) {
// // // // // //       return;
// // // // // //     }
    
// // // // // //     try {
// // // // // //       const response = await fetch(`/api/damage-items/${id}`, {
// // // // // //         method: 'DELETE',
// // // // // //       });

// // // // // //       if (!response.ok) {
// // // // // //         throw new Error('Failed to delete damage item');
// // // // // //       }

// // // // // //       // Refresh damage items list
// // // // // //       fetchDamageItems();
// // // // // //     } catch (err) {
// // // // // //       setError(err.message);
// // // // // //     }
// // // // // //   };

// // // // // //   // Filter and search
// // // // // //   const filteredItems = damageItems.filter(item => {
// // // // // //     const matchesSearch = item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) || 
// // // // // //                          item.itemCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // //                          item.damageDescription.toLowerCase().includes(searchTerm.toLowerCase());
    
// // // // // //     const matchesFilter = filterStatus === 'all' || item.status === filterStatus;
    
// // // // // //     return matchesSearch && matchesFilter;
// // // // // //   });

// // // // // //   // Pagination
// // // // // //   const indexOfLastItem = currentPage * itemsPerPage;
// // // // // //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// // // // // //   const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
// // // // // //   const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

// // // // // //   const getStatusColor = (status) => {
// // // // // //     switch(status) {
// // // // // //       case 'pending': return 'bg-yellow-100 text-yellow-800';
// // // // // //       case 'approved': return 'bg-red-100 text-red-800';
// // // // // //       case 'returned': return 'bg-blue-100 text-blue-800';
// // // // // //       case 'repaired': return 'bg-green-100 text-green-800';
// // // // // //       case 'discounted': return 'bg-purple-100 text-purple-800';
// // // // // //       case 'resolved': return 'bg-gray-100 text-gray-800';
// // // // // //       default: return 'bg-gray-100 text-gray-800';
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow-lg">
// // // // // //       <div className="flex justify-between items-center mb-6">
// // // // // //         <h1 className="text-2xl font-bold text-gray-800">
// // // // // //           Damage Items Management - {storeName}
// // // // // //         </h1>
// // // // // //         <button 
// // // // // //           onClick={() => setShowForm(!showForm)} 
// // // // // //           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
// // // // // //         >
// // // // // //           {showForm ? (
// // // // // //             <>Cancel <FileX size={18} /></>
// // // // // //           ) : (
// // // // // //             <>Report Damaged Item <PlusCircle size={18} /></>
// // // // // //           )}
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {error && (
// // // // // //         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
// // // // // //           {error}
// // // // // //           <button 
// // // // // //             onClick={() => setError(null)} 
// // // // // //             className="float-right font-bold"
// // // // // //           >
// // // // // //             &times;
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {showForm && (
// // // // // //         <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
// // // // // //           <h2 className="text-xl font-semibold mb-4">
// // // // // //             {selectedItem ? 'Update Damaged Item' : 'Report New Damaged Item'}
// // // // // //           </h2>
// // // // // //           <form onSubmit={handleSubmit}>
// // // // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// // // // // //               <div>
// // // // // //                 <label className="block text-gray-700 font-medium mb-2">
// // // // // //                   Item Name
// // // // // //                 </label>
// // // // // //                 <input
// // // // // //                   type="text"
// // // // // //                   name="itemName"
// // // // // //                   value={formData.itemName}
// // // // // //                   onChange={handleInputChange}
// // // // // //                   required
// // // // // //                   className="w-full p-2 border border-gray-300 rounded"
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <label className="block text-gray-700 font-medium mb-2">
// // // // // //                   Item Code/SKU
// // // // // //                 </label>
// // // // // //                 <input
// // // // // //                   type="text"
// // // // // //                   name="itemCode"
// // // // // //                   value={formData.itemCode}
// // // // // //                   onChange={handleInputChange}
// // // // // //                   required
// // // // // //                   className="w-full p-2 border border-gray-300 rounded"
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <label className="block text-gray-700 font-medium mb-2">
// // // // // //                   Quantity
// // // // // //                 </label>
// // // // // //                 <input
// // // // // //                   type="number"
// // // // // //                   name="quantity"
// // // // // //                   min="1"
// // // // // //                   value={formData.quantity}
// // // // // //                   onChange={handleInputChange}
// // // // // //                   required
// // // // // //                   className="w-full p-2 border border-gray-300 rounded"
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <label className="block text-gray-700 font-medium mb-2">
// // // // // //                   Damage Type
// // // // // //                 </label>
// // // // // //                 <select
// // // // // //                   name="damageType"
// // // // // //                   value={formData.damageType}
// // // // // //                   onChange={handleInputChange}
// // // // // //                   className="w-full p-2 border border-gray-300 rounded"
// // // // // //                 >
// // // // // //                   {damageTypes.map(type => (
// // // // // //                     <option key={type.value} value={type.value}>
// // // // // //                       {type.label}
// // // // // //                     </option>
// // // // // //                   ))}
// // // // // //                 </select>
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <label className="block text-gray-700 font-medium mb-2">
// // // // // //                   Date Identified
// // // // // //                 </label>
// // // // // //                 <input
// // // // // //                   type="date"
// // // // // //                   name="damageDate"
// // // // // //                   value={formData.damageDate}
// // // // // //                   onChange={handleInputChange}
// // // // // //                   required
// // // // // //                   className="w-full p-2 border border-gray-300 rounded"
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <label className="block text-gray-700 font-medium mb-2">
// // // // // //                   Status
// // // // // //                 </label>
// // // // // //                 <select
// // // // // //                   name="status"
// // // // // //                   value={formData.status}
// // // // // //                   onChange={handleInputChange}
// // // // // //                   className="w-full p-2 border border-gray-300 rounded"
// // // // // //                 >
// // // // // //                   {statusOptions.map(option => (
// // // // // //                     <option key={option.value} value={option.value}>
// // // // // //                       {option.label}
// // // // // //                     </option>
// // // // // //                   ))}
// // // // // //                 </select>
// // // // // //               </div>
// // // // // //               <div className="md:col-span-2">
// // // // // //                 <label className="block text-gray-700 font-medium mb-2">
// // // // // //                   Damage Description
// // // // // //                 </label>
// // // // // //                 <textarea
// // // // // //                   name="damageDescription"
// // // // // //                   value={formData.damageDescription}
// // // // // //                   onChange={handleInputChange}
// // // // // //                   required
// // // // // //                   rows="3"
// // // // // //                   className="w-full p-2 border border-gray-300 rounded"
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div className="md:col-span-2">
// // // // // //                 <label className="block text-gray-700 font-medium mb-2">
// // // // // //                   Action Taken/Notes
// // // // // //                 </label>
// // // // // //                 <textarea
// // // // // //                   name="actionTaken"
// // // // // //                   value={formData.actionTaken}
// // // // // //                   onChange={handleInputChange}
// // // // // //                   rows="2"
// // // // // //                   className="w-full p-2 border border-gray-300 rounded"
// // // // // //                 />
// // // // // //               </div>
// // // // // //             </div>
// // // // // //             <div className="flex justify-end gap-3">
// // // // // //               <button
// // // // // //                 type="button"
// // // // // //                 onClick={resetForm}
// // // // // //                 className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
// // // // // //               >
// // // // // //                 Cancel
// // // // // //               </button>
// // // // // //               <button
// // // // // //                 type="submit"
// // // // // //                 className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2"
// // // // // //               >
// // // // // //                 <CheckCircle size={18} /> 
// // // // // //                 {selectedItem ? 'Update Item' : 'Save Item'}
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </form>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       <div className="mb-6 flex flex-col sm:flex-row gap-4">
// // // // // //         <div className="relative flex-1">
// // // // // //           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // // // //             <Search className="h-5 w-5 text-gray-400" />
// // // // // //           </div>
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             placeholder="Search by name, code or description..."
// // // // // //             value={searchTerm}
// // // // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // // // //             className="pl-10 p-2 border border-gray-300 rounded w-full"
// // // // // //           />
// // // // // //         </div>
// // // // // //         <div className="flex items-center gap-2">
// // // // // //           <Filter className="h-5 w-5 text-gray-500" />
// // // // // //           <select
// // // // // //             value={filterStatus}
// // // // // //             onChange={(e) => setFilterStatus(e.target.value)}
// // // // // //             className="p-2 border border-gray-300 rounded"
// // // // // //           >
// // // // // //             <option value="all">All Statuses</option>
// // // // // //             {statusOptions.map(option => (
// // // // // //               <option key={option.value} value={option.value}>
// // // // // //                 {option.label}
// // // // // //               </option>
// // // // // //             ))}
// // // // // //           </select>
// // // // // //         </div>
// // // // // //         <button 
// // // // // //           onClick={fetchDamageItems}
// // // // // //           className="p-2 bg-gray-200 hover:bg-gray-300 rounded flex items-center gap-1"
// // // // // //         >
// // // // // //           <RefreshCw size={16} /> Refresh
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {loading ? (
// // // // // //         <div className="flex justify-center py-8">
// // // // // //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// // // // // //         </div>
// // // // // //       ) : damageItems.length === 0 ? (
// // // // // //         <div className="bg-gray-50 p-8 text-center rounded-lg border border-gray-200">
// // // // // //           <FileX size={48} className="mx-auto text-gray-400 mb-4" />
// // // // // //           <h3 className="text-lg font-medium text-gray-900">No damage items reported</h3>
// // // // // //           <p className="text-gray-500 mt-1">Start by reporting a new damaged item using the button above.</p>
// // // // // //         </div>
// // // // // //       ) : (
// // // // // //         <>
// // // // // //           <div className="overflow-x-auto rounded-lg border border-gray-200">
// // // // // //             <table className="min-w-full divide-y divide-gray-200">
// // // // // //               <thead className="bg-gray-50">
// // // // // //                 <tr>
// // // // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // //                     Item Details
// // // // // //                   </th>
// // // // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // //                     Damage Info
// // // // // //                   </th>
// // // // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // //                     Status
// // // // // //                   </th>
// // // // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // //                     Actions
// // // // // //                   </th>
// // // // // //                 </tr>
// // // // // //               </thead>
// // // // // //               <tbody className="bg-white divide-y divide-gray-200">
// // // // // //                 {currentItems.map((item, index) => (
// // // // // //                   <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
// // // // // //                     <td className="px-6 py-4">
// // // // // //                       <div className="text-sm font-medium text-gray-900">{item.itemName}</div>
// // // // // //                       <div className="text-sm text-gray-500">Code: {item.itemCode}</div>
// // // // // //                       <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
// // // // // //                     </td>
// // // // // //                     <td className="px-6 py-4">
// // // // // //                       <div className="text-sm text-gray-900">
// // // // // //                         {damageTypes.find(t => t.value === item.damageType)?.label}
// // // // // //                       </div>
// // // // // //                       <div className="text-sm text-gray-500 max-w-xs truncate">
// // // // // //                         {item.damageDescription}
// // // // // //                       </div>
// // // // // //                       <div className="text-sm text-gray-500">
// // // // // //                         Reported: {new Date(item.damageDate).toLocaleDateString()}
// // // // // //                       </div>
// // // // // //                     </td>
// // // // // //                     <td className="px-6 py-4">
// // // // // //                       <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(item.status)}`}>
// // // // // //                         {statusOptions.find(s => s.value === item.status)?.label}
// // // // // //                       </span>
// // // // // //                       {item.actionTaken && (
// // // // // //                         <div className="text-sm text-gray-500 mt-1 max-w-xs truncate">
// // // // // //                           {item.actionTaken}
// // // // // //                         </div>
// // // // // //                       )}
// // // // // //                     </td>
// // // // // //                     <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
// // // // // //                       <button
// // // // // //                         onClick={() => handleEdit(item)}
// // // // // //                         className="text-blue-600 hover:text-blue-900 mr-3"
// // // // // //                       >
// // // // // //                         <Edit size={18} />
// // // // // //                       </button>
// // // // // //                       <button
// // // // // //                         onClick={() => handleDelete(item.id)}
// // // // // //                         className="text-red-600 hover:text-red-900"
// // // // // //                       >
// // // // // //                         <Trash2 size={18} />
// // // // // //                       </button>
// // // // // //                     </td>
// // // // // //                   </tr>
// // // // // //                 ))}
// // // // // //               </tbody>
// // // // // //             </table>
// // // // // //           </div>

// // // // // //           {/* Pagination */}
// // // // // //           {totalPages > 1 && (
// // // // // //             <div className="flex justify-between items-center mt-4">
// // // // // //               <div className="text-sm text-gray-700">
// // // // // //                 Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
// // // // // //                 <span className="font-medium">
// // // // // //                   {Math.min(indexOfLastItem, filteredItems.length)}
// // // // // //                 </span>{" "}
// // // // // //                 of <span className="font-medium">{filteredItems.length}</span> items
// // // // // //               </div>
// // // // // //               <div className="flex gap-2">
// // // // // //                 <button
// // // // // //                   onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
// // // // // //                   disabled={currentPage === 1}
// // // // // //                   className={`px-3 py-1 rounded ${
// // // // // //                     currentPage === 1
// // // // // //                       ? "bg-gray-100 text-gray-400 cursor-not-allowed"
// // // // // //                       : "bg-gray-200 hover:bg-gray-300 text-gray-800"
// // // // // //                   }`}
// // // // // //                 >
// // // // // //                   Previous
// // // // // //                 </button>
// // // // // //                 <button
// // // // // //                   onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
// // // // // //                   disabled={currentPage === totalPages}
// // // // // //                   className={`px-3 py-1 rounded ${
// // // // // //                     currentPage === totalPages
// // // // // //                       ? "bg-gray-100 text-gray-400 cursor-not-allowed"
// // // // // //                       : "bg-gray-200 hover:bg-gray-300 text-gray-800"
// // // // // //                   }`}
// // // // // //                 >
// // // // // //                   Next
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default DamageItemsManagement;



// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { useStore } from '../context/StoreContext';
// // // // // // import { PlusCircle, Trash2, Edit, FileX, CheckCircle, Search, Filter, RefreshCw } from 'lucide-react';

// // // // // // const DamageItemsManagement = () => {
// // // // // // //   const { storeName, storeId, userDetails } = useStore();
// // // // // //   const [damageItems, setDamageItems] = useState([]);
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [error, setError] = useState(null);
// // // // // //   const [showForm, setShowForm] = useState(false);
// // // // // //   const [searchTerm, setSearchTerm] = useState('');
// // // // // //   const [filterStatus, setFilterStatus] = useState('all');
// // // // // //   const [currentPage, setCurrentPage] = useState(1);
// // // // // //   const [itemsPerPage] = useState(10);
// // // // // //   const [selectedItem, setSelectedItem] = useState(null);
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     id: '',
// // // // // //     itemName: '',
// // // // // //     itemCode: '',
// // // // // //     quantity: 1,
// // // // // //     damageType: 'physical',
// // // // // //     damageDescription: '',
// // // // // //     reportedBy: userDetails?.name || '',
// // // // // //     damageDate: new Date().toISOString().split('T')[0],
// // // // // //     status: 'pending',
// // // // // //     actionTaken: '',
// // // // // //     images: []
// // // // // //   });
  
// // // // // //   const damageTypes = [
// // // // // //     { value: 'physical', label: 'Physical Damage' },
// // // // // //     { value: 'expired', label: 'Expired Product' },
// // // // // //     { value: 'defective', label: 'Manufacturing Defect' },
// // // // // //     { value: 'packaging', label: 'Packaging Damage' },
// // // // // //     { value: 'other', label: 'Other' }
// // // // // //   ];
  
// // // // // //   const statusOptions = [
// // // // // //     { value: 'pending', label: 'Pending Review' },
// // // // // //     { value: 'approved', label: 'Approved for Disposal' },
// // // // // //     { value: 'returned', label: 'Returned to Vendor' },
// // // // // //     { value: 'repaired', label: 'Repaired/Restored' },
// // // // // //     { value: 'discounted', label: 'Marked for Discount Sale' },
// // // // // //     { value: 'resolved', label: 'Resolved' }
// // // // // //   ];

// // // // // //   // Load sample data for demonstration
// // // // // //   useEffect(() => {
// // // // // //     const sampleData = [
// // // // // //       {
// // // // // //         id: '1',
// // // // // //         itemName: 'Cotton T-Shirt (Medium)',
// // // // // //         itemCode: 'TS-CTN-M-001',
// // // // // //         quantity: 3,
// // // // // //         damageType: 'physical',
// // // // // //         damageDescription: 'Torn seam on the right sleeve, fabric discoloration on collar',
// // // // // //         reportedBy: 'John Doe',
// // // // // //         damageDate: '2025-02-28',
// // // // // //         status: 'pending',
// // // // // //         actionTaken: '',
// // // // // //         createdAt: '2025-02-28T14:22:00Z'
// // // // // //       },
// // // // // //       {
// // // // // //         id: '2',
// // // // // //         itemName: 'Ceramic Coffee Mug',
// // // // // //         itemCode: 'HG-MUG-CER-002',
// // // // // //         quantity: 5,
// // // // // //         damageType: 'physical',
// // // // // //         damageDescription: 'Chipped rim and cracked handle on multiple units from delivery',
// // // // // //         reportedBy: 'Sarah Johnson',
// // // // // //         damageDate: '2025-02-27',
// // // // // //         status: 'approved',
// // // // // //         actionTaken: 'Marked for disposal, vendor contacted for replacement',
// // // // // //         createdAt: '2025-02-27T10:15:00Z'
// // // // // //       },
// // // // // //       {
// // // // // //         id: '3',
// // // // // //         itemName: 'Organic Apple Juice',
// // // // // //         itemCode: 'GR-JCE-APP-250',
// // // // // //         quantity: 12,
// // // // // //         damageType: 'expired',
// // // // // //         damageDescription: 'Expiration date passed 2 days ago, bottles still sealed',
// // // // // //         reportedBy: 'Mike Wilson',
// // // // // //         damageDate: '2025-02-26',
// // // // // //         status: 'discounted',
// // // // // //         actionTaken: 'Marked down 50% for quick sale, placed on clearance shelf',
// // // // // //         createdAt: '2025-02-26T09:30:00Z'
// // // // // //       },
// // // // // //       {
// // // // // //         id: '4',
// // // // // //         itemName: 'Wireless Headphones',
// // // // // //         itemCode: 'EL-AUD-WL-001',
// // // // // //         quantity: 2,
// // // // // //         damageType: 'defective',
// // // // // //         damageDescription: 'Right earpiece not producing sound, charging issues reported',
// // // // // //         reportedBy: 'Alex Lee',
// // // // // //         damageDate: '2025-02-25',
// // // // // //         status: 'returned',
// // // // // //         actionTaken: 'Returned to manufacturer for warranty replacement',
// // // // // //         createdAt: '2025-02-25T15:45:00Z'
// // // // // //       },
// // // // // //       {
// // // // // //         id: '5',
// // // // // //         itemName: 'Desk Lamp',
// // // // // //         itemCode: 'HM-LGT-DSK-003',
// // // // // //         quantity: 1,
// // // // // //         damageType: 'packaging',
// // // // // //         damageDescription: 'Box crushed during transit, product appears intact but needs inspection',
// // // // // //         reportedBy: 'Emily Chen',
// // // // // //         damageDate: '2025-02-24',
// // // // // //         status: 'repaired',
// // // // // //         actionTaken: 'Product tested and confirmed working, repackaged for sale',
// // // // // //         createdAt: '2025-02-24T11:20:00Z'
// // // // // //       },
// // // // // //       {
// // // // // //         id: '6',
// // // // // //         itemName: 'Protein Powder - Vanilla',
// // // // // //         itemCode: 'NU-PRO-VAN-500',
// // // // // //         quantity: 3,
// // // // // //         damageType: 'packaging',
// // // // // //         damageDescription: 'Containers dented, seals intact',
// // // // // //         reportedBy: 'Jason Black',
// // // // // //         damageDate: '2025-02-23',
// // // // // //         status: 'resolved',
// // // // // //         actionTaken: 'Containers replaced with new packaging, product quality confirmed',
// // // // // //         createdAt: '2025-02-23T13:10:00Z'
// // // // // //       }
// // // // // //     ];
    
// // // // // //     setLoading(true);
// // // // // //     // Simulate API call delay
// // // // // //     setTimeout(() => {
// // // // // //       setDamageItems(sampleData);
// // // // // //       setLoading(false);
// // // // // //     }, 800);
// // // // // //   }, []);

// // // // // //   const handleInputChange = (e) => {
// // // // // //     const { name, value } = e.target;
// // // // // //     setFormData({ ...formData, [name]: value });
// // // // // //   };

// // // // // //   const handleSubmit = (e) => {
// // // // // //     e.preventDefault();
    
// // // // // //     try {
// // // // // //       if (selectedItem) {
// // // // // //         // Update existing item
// // // // // //         const updatedItems = damageItems.map(item => 
// // // // // //           item.id === selectedItem.id ? { ...formData, id: item.id } : item
// // // // // //         );
// // // // // //         setDamageItems(updatedItems);
// // // // // //       } else {
// // // // // //         // Add new item
// // // // // //         const newItem = {
// // // // // //           ...formData,
// // // // // //           id: Date.now().toString(), // Generate a simple unique ID
// // // // // //           createdAt: new Date().toISOString()
// // // // // //         };
// // // // // //         setDamageItems([newItem, ...damageItems]);
// // // // // //       }
      
// // // // // //       resetForm();
// // // // // //     } catch (err) {
// // // // // //       setError("Failed to save item. Please try again.");
// // // // // //     }
// // // // // //   };

// // // // // //   const resetForm = () => {
// // // // // //     setFormData({
// // // // // //       id: '',
// // // // // //       itemName: '',
// // // // // //       itemCode: '',
// // // // // //       quantity: 1,
// // // // // //       damageType: 'physical',
// // // // // //       damageDescription: '',
// // // // // //       reportedBy: userDetails?.name || '',
// // // // // //       damageDate: new Date().toISOString().split('T')[0],
// // // // // //       status: 'pending',
// // // // // //       actionTaken: '',
// // // // // //       images: []
// // // // // //     });
// // // // // //     setSelectedItem(null);
// // // // // //     setShowForm(false);
// // // // // //   };

// // // // // //   const handleEdit = (item) => {
// // // // // //     setSelectedItem(item);
// // // // // //     setFormData({
// // // // // //       ...item,
// // // // // //       // Ensure date format is correct for the date input
// // // // // //       damageDate: item.damageDate || new Date().toISOString().split('T')[0]
// // // // // //     });
// // // // // //     setShowForm(true);
// // // // // //   };

// // // // // //   const handleDelete = (id) => {
// // // // // //     if (window.confirm('Are you sure you want to delete this item?')) {
// // // // // //       setDamageItems(damageItems.filter(item => item.id !== id));
// // // // // //     }
// // // // // //   };

// // // // // //   // Filter and search
// // // // // //   const filteredItems = damageItems.filter(item => {
// // // // // //     const matchesSearch = 
// // // // // //       item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) || 
// // // // // //       item.itemCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // //       item.damageDescription.toLowerCase().includes(searchTerm.toLowerCase());
    
// // // // // //     const matchesFilter = filterStatus === 'all' || item.status === filterStatus;
    
// // // // // //     return matchesSearch && matchesFilter;
// // // // // //   });

// // // // // //   // Pagination
// // // // // //   const indexOfLastItem = currentPage * itemsPerPage;
// // // // // //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// // // // // //   const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
// // // // // //   const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

// // // // // //   const getStatusColor = (status) => {
// // // // // //     switch(status) {
// // // // // //       case 'pending': return 'bg-yellow-100 text-yellow-800';
// // // // // //       case 'approved': return 'bg-red-100 text-red-800';
// // // // // //       case 'returned': return 'bg-blue-100 text-blue-800';
// // // // // //       case 'repaired': return 'bg-green-100 text-green-800';
// // // // // //       case 'discounted': return 'bg-purple-100 text-purple-800';
// // // // // //       case 'resolved': return 'bg-gray-100 text-gray-800';
// // // // // //       default: return 'bg-gray-100 text-gray-800';
// // // // // //     }
// // // // // //   };

// // // // // //   // Refresh data - in a real app this would fetch from API
// // // // // //   const refreshData = () => {
// // // // // //     setLoading(true);
// // // // // //     setTimeout(() => {
// // // // // //       setLoading(false);
// // // // // //     }, 500);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow-lg">
// // // // // //       <div className="flex justify-between items-center mb-6">
// // // // // //         <h1 className="text-2xl font-bold text-gray-800">
// // // // // //           Damage Items Management - {"My Store"}
// // // // // //         </h1>
// // // // // //         <button 
// // // // // //           onClick={() => setShowForm(!showForm)} 
// // // // // //           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
// // // // // //         >
// // // // // //           {showForm ? (
// // // // // //             <>Cancel <FileX size={18} /></>
// // // // // //           ) : (
// // // // // //             <>Report Damaged Item <PlusCircle size={18} /></>
// // // // // //           )}
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {error && (
// // // // // //         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
// // // // // //           {error}
// // // // // //           <button 
// // // // // //             onClick={() => setError(null)} 
// // // // // //             className="float-right font-bold"
// // // // // //           >
// // // // // //             &times;
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {showForm && (
// // // // // //         <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
// // // // // //           <h2 className="text-xl font-semibold mb-4">
// // // // // //             {selectedItem ? 'Update Damaged Item' : 'Report New Damaged Item'}
// // // // // //           </h2>
// // // // // //           <form onSubmit={handleSubmit}>
// // // // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// // // // // //               <div>
// // // // // //                 <label className="block text-gray-700 font-medium mb-2">
// // // // // //                   Item Name
// // // // // //                 </label>
// // // // // //                 <input
// // // // // //                   type="text"
// // // // // //                   name="itemName"
// // // // // //                   value={formData.itemName}
// // // // // //                   onChange={handleInputChange}
// // // // // //                   required
// // // // // //                   className="w-full p-2 border border-gray-300 rounded"
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <label className="block text-gray-700 font-medium mb-2">
// // // // // //                   Item Code/SKU
// // // // // //                 </label>
// // // // // //                 <input
// // // // // //                   type="text"
// // // // // //                   name="itemCode"
// // // // // //                   value={formData.itemCode}
// // // // // //                   onChange={handleInputChange}
// // // // // //                   required
// // // // // //                   className="w-full p-2 border border-gray-300 rounded"
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <label className="block text-gray-700 font-medium mb-2">
// // // // // //                   Quantity
// // // // // //                 </label>
// // // // // //                 <input
// // // // // //                   type="number"
// // // // // //                   name="quantity"
// // // // // //                   min="1"
// // // // // //                   value={formData.quantity}
// // // // // //                   onChange={handleInputChange}
// // // // // //                   required
// // // // // //                   className="w-full p-2 border border-gray-300 rounded"
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <label className="block text-gray-700 font-medium mb-2">
// // // // // //                   Damage Type
// // // // // //                 </label>
// // // // // //                 <select
// // // // // //                   name="damageType"
// // // // // //                   value={formData.damageType}
// // // // // //                   onChange={handleInputChange}
// // // // // //                   className="w-full p-2 border border-gray-300 rounded"
// // // // // //                 >
// // // // // //                   {damageTypes.map(type => (
// // // // // //                     <option key={type.value} value={type.value}>
// // // // // //                       {type.label}
// // // // // //                     </option>
// // // // // //                   ))}
// // // // // //                 </select>
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <label className="block text-gray-700 font-medium mb-2">
// // // // // //                   Date Identified
// // // // // //                 </label>
// // // // // //                 <input
// // // // // //                   type="date"
// // // // // //                   name="damageDate"
// // // // // //                   value={formData.damageDate}
// // // // // //                   onChange={handleInputChange}
// // // // // //                   required
// // // // // //                   className="w-full p-2 border border-gray-300 rounded"
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <label className="block text-gray-700 font-medium mb-2">
// // // // // //                   Status
// // // // // //                 </label>
// // // // // //                 <select
// // // // // //                   name="status"
// // // // // //                   value={formData.status}
// // // // // //                   onChange={handleInputChange}
// // // // // //                   className="w-full p-2 border border-gray-300 rounded"
// // // // // //                 >
// // // // // //                   {statusOptions.map(option => (
// // // // // //                     <option key={option.value} value={option.value}>
// // // // // //                       {option.label}
// // // // // //                     </option>
// // // // // //                   ))}
// // // // // //                 </select>
// // // // // //               </div>
// // // // // //               <div className="md:col-span-2">
// // // // // //                 <label className="block text-gray-700 font-medium mb-2">
// // // // // //                   Damage Description
// // // // // //                 </label>
// // // // // //                 <textarea
// // // // // //                   name="damageDescription"
// // // // // //                   value={formData.damageDescription}
// // // // // //                   onChange={handleInputChange}
// // // // // //                   required
// // // // // //                   rows="3"
// // // // // //                   className="w-full p-2 border border-gray-300 rounded"
// // // // // //                   placeholder="Describe the damage in detail..."
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div className="md:col-span-2">
// // // // // //                 <label className="block text-gray-700 font-medium mb-2">
// // // // // //                   Action Taken/Notes
// // // // // //                 </label>
// // // // // //                 <textarea
// // // // // //                   name="actionTaken"
// // // // // //                   value={formData.actionTaken}
// // // // // //                   onChange={handleInputChange}
// // // // // //                   rows="2"
// // // // // //                   className="w-full p-2 border border-gray-300 rounded"
// // // // // //                   placeholder="Document any actions taken or planned..."
// // // // // //                 />
// // // // // //               </div>
// // // // // //             </div>
// // // // // //             <div className="flex justify-end gap-3">
// // // // // //               <button
// // // // // //                 type="button"
// // // // // //                 onClick={resetForm}
// // // // // //                 className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
// // // // // //               >
// // // // // //                 Cancel
// // // // // //               </button>
// // // // // //               <button
// // // // // //                 type="submit"
// // // // // //                 className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2"
// // // // // //               >
// // // // // //                 <CheckCircle size={18} /> 
// // // // // //                 {selectedItem ? 'Update Item' : 'Save Item'}
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </form>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       <div className="mb-6 flex flex-col sm:flex-row gap-4">
// // // // // //         <div className="relative flex-1">
// // // // // //           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // // // //             <Search className="h-5 w-5 text-gray-400" />
// // // // // //           </div>
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             placeholder="Search by name, code or description..."
// // // // // //             value={searchTerm}
// // // // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // // // //             className="pl-10 p-2 border border-gray-300 rounded w-full"
// // // // // //           />
// // // // // //         </div>
// // // // // //         <div className="flex items-center gap-2">
// // // // // //           <Filter className="h-5 w-5 text-gray-500" />
// // // // // //           <select
// // // // // //             value={filterStatus}
// // // // // //             onChange={(e) => setFilterStatus(e.target.value)}
// // // // // //             className="p-2 border border-gray-300 rounded"
// // // // // //           >
// // // // // //             <option value="all">All Statuses</option>
// // // // // //             {statusOptions.map(option => (
// // // // // //               <option key={option.value} value={option.value}>
// // // // // //                 {option.label}
// // // // // //               </option>
// // // // // //             ))}
// // // // // //           </select>
// // // // // //         </div>
// // // // // //         <button 
// // // // // //           onClick={refreshData}
// // // // // //           className="p-2 bg-gray-200 hover:bg-gray-300 rounded flex items-center gap-1"
// // // // // //         >
// // // // // //           <RefreshCw size={16} /> Refresh
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {loading ? (
// // // // // //         <div className="flex justify-center py-8">
// // // // // //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// // // // // //         </div>
// // // // // //       ) : damageItems.length === 0 ? (
// // // // // //         <div className="bg-gray-50 p-8 text-center rounded-lg border border-gray-200">
// // // // // //           <FileX size={48} className="mx-auto text-gray-400 mb-4" />
// // // // // //           <h3 className="text-lg font-medium text-gray-900">No damage items reported</h3>
// // // // // //           <p className="text-gray-500 mt-1">Start by reporting a new damaged item using the button above.</p>
// // // // // //         </div>
// // // // // //       ) : (
// // // // // //         <>
// // // // // //           <div className="overflow-x-auto rounded-lg border border-gray-200">
// // // // // //             <table className="min-w-full divide-y divide-gray-200">
// // // // // //               <thead className="bg-gray-50">
// // // // // //                 <tr>
// // // // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // //                     Item Details
// // // // // //                   </th>
// // // // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // //                     Damage Info
// // // // // //                   </th>
// // // // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // //                     Status
// // // // // //                   </th>
// // // // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // //                     Actions
// // // // // //                   </th>
// // // // // //                 </tr>
// // // // // //               </thead>
// // // // // //               <tbody className="bg-white divide-y divide-gray-200">
// // // // // //                 {currentItems.map((item, index) => (
// // // // // //                   <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
// // // // // //                     <td className="px-6 py-4">
// // // // // //                       <div className="text-sm font-medium text-gray-900">{item.itemName}</div>
// // // // // //                       <div className="text-sm text-gray-500">Code: {item.itemCode}</div>
// // // // // //                       <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
// // // // // //                     </td>
// // // // // //                     <td className="px-6 py-4">
// // // // // //                       <div className="text-sm text-gray-900">
// // // // // //                         {damageTypes.find(t => t.value === item.damageType)?.label}
// // // // // //                       </div>
// // // // // //                       <div className="text-sm text-gray-500 max-w-xs truncate">
// // // // // //                         {item.damageDescription}
// // // // // //                       </div>
// // // // // //                       <div className="text-sm text-gray-500">
// // // // // //                         Reported: {new Date(item.damageDate).toLocaleDateString()}
// // // // // //                       </div>
// // // // // //                     </td>
// // // // // //                     <td className="px-6 py-4">
// // // // // //                       <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(item.status)}`}>
// // // // // //                         {statusOptions.find(s => s.value === item.status)?.label}
// // // // // //                       </span>
// // // // // //                       {item.actionTaken && (
// // // // // //                         <div className="text-sm text-gray-500 mt-1 max-w-xs truncate">
// // // // // //                           {item.actionTaken}
// // // // // //                         </div>
// // // // // //                       )}
// // // // // //                     </td>
// // // // // //                     <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
// // // // // //                       <button
// // // // // //                         onClick={() => handleEdit(item)}
// // // // // //                         className="text-blue-600 hover:text-blue-900 mr-3"
// // // // // //                       >
// // // // // //                         <Edit size={18} />
// // // // // //                       </button>
// // // // // //                       <button
// // // // // //                         onClick={() => handleDelete(item.id)}
// // // // // //                         className="text-red-600 hover:text-red-900"
// // // // // //                       >
// // // // // //                         <Trash2 size={18} />
// // // // // //                       </button>
// // // // // //                     </td>
// // // // // //                   </tr>
// // // // // //                 ))}
// // // // // //               </tbody>
// // // // // //             </table>
// // // // // //           </div>

// // // // // //           {/* Pagination */}
// // // // // //           {totalPages > 1 && (
// // // // // //             <div className="flex justify-between items-center mt-4">
// // // // // //               <div className="text-sm text-gray-700">
// // // // // //                 Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
// // // // // //                 <span className="font-medium">
// // // // // //                   {Math.min(indexOfLastItem, filteredItems.length)}
// // // // // //                 </span>{" "}
// // // // // //                 of <span className="font-medium">{filteredItems.length}</span> items
// // // // // //               </div>
// // // // // //               <div className="flex gap-2">
// // // // // //                 <button
// // // // // //                   onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
// // // // // //                   disabled={currentPage === 1}
// // // // // //                   className={`px-3 py-1 rounded ${
// // // // // //                     currentPage === 1
// // // // // //                       ? "bg-gray-100 text-gray-400 cursor-not-allowed"
// // // // // //                       : "bg-gray-200 hover:bg-gray-300 text-gray-800"
// // // // // //                   }`}
// // // // // //                 >
// // // // // //                   Previous
// // // // // //                 </button>
// // // // // //                 <button
// // // // // //                   onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
// // // // // //                   disabled={currentPage === totalPages}
// // // // // //                   className={`px-3 py-1 rounded ${
// // // // // //                     currentPage === totalPages
// // // // // //                       ? "bg-gray-100 text-gray-400 cursor-not-allowed"
// // // // // //                       : "bg-gray-200 hover:bg-gray-300 text-gray-800"
// // // // // //                   }`}
// // // // // //                 >
// // // // // //                   Next
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default DamageItemsManagement;
// // // // // import React from 'react';
// // // // // import { PlusCircle, Trash2, Edit, FileX, CheckCircle, Search, Filter, RefreshCw } from 'lucide-react';

// // // // // const DamageItemsManagement = () => {
// // // // //   const damageTypes = [
// // // // //     { value: 'physical', label: 'Physical Damage' },
// // // // //     { value: 'expired', label: 'Expired Product' },
// // // // //     { value: 'defective', label: 'Manufacturing Defect' },
// // // // //     { value: 'packaging', label: 'Packaging Damage' },
// // // // //     { value: 'other', label: 'Other' }
// // // // //   ];

// // // // //   const statusOptions = [
// // // // //     { value: 'pending', label: 'Pending Review' },
// // // // //     { value: 'approved', label: 'Approved for Disposal' },
// // // // //     { value: 'returned', label: 'Returned to Vendor' },
// // // // //     { value: 'repaired', label: 'Repaired/Restored' },
// // // // //     { value: 'discounted', label: 'Marked for Discount Sale' },
// // // // //     { value: 'resolved', label: 'Resolved' }
// // // // //   ];

// // // // //   const sampleData = [
// // // // //     {
// // // // //       id: '1',
// // // // //       itemName: 'Cotton T-Shirt (Medium)',
// // // // //       itemCode: 'TS-CTN-M-001',
// // // // //       quantity: 3,
// // // // //       damageType: 'physical',
// // // // //       damageDescription: 'Torn seam on the right sleeve, fabric discoloration on collar',
// // // // //       reportedBy: 'John Doe',
// // // // //       damageDate: '2025-02-28',
// // // // //       status: 'pending',
// // // // //       actionTaken: '',
// // // // //       createdAt: '2025-02-28T14:22:00Z'
// // // // //     },
// // // // //     {
// // // // //       id: '2',
// // // // //       itemName: 'Ceramic Coffee Mug',
// // // // //       itemCode: 'HG-MUG-CER-002',
// // // // //       quantity: 5,
// // // // //       damageType: 'physical',
// // // // //       damageDescription: 'Chipped rim and cracked handle on multiple units from delivery',
// // // // //       reportedBy: 'Sarah Johnson',
// // // // //       damageDate: '2025-02-27',
// // // // //       status: 'approved',
// // // // //       actionTaken: 'Marked for disposal, vendor contacted for replacement',
// // // // //       createdAt: '2025-02-27T10:15:00Z'
// // // // //     }
// // // // //   ];

// // // // //   const getStatusColor = (status) => {
// // // // //     switch (status) {
// // // // //       case 'pending': return 'bg-yellow-100 text-yellow-800';
// // // // //       case 'approved': return 'bg-red-100 text-red-800';
// // // // //       case 'returned': return 'bg-blue-100 text-blue-800';
// // // // //       case 'repaired': return 'bg-green-100 text-green-800';
// // // // //       case 'discounted': return 'bg-purple-100 text-purple-800';
// // // // //       case 'resolved': return 'bg-gray-100 text-gray-800';
// // // // //       default: return 'bg-gray-100 text-gray-800';
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow-lg">
// // // // //       <div className="flex justify-between items-center mb-6">
// // // // //         <h1 className="text-2xl font-bold text-gray-800">
// // // // //           Damage Items Management - My Store
// // // // //         </h1>
// // // // //         <button
// // // // //           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
// // // // //         >
// // // // //           Report Damaged Item <PlusCircle size={18} />
// // // // //         </button>
// // // // //       </div>

// // // // //       <div className="mb-6 flex flex-col sm:flex-row gap-4">
// // // // //         <div className="relative flex-1">
// // // // //           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // // //             <Search className="h-5 w-5 text-gray-400" />
// // // // //           </div>
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Search by name, code or description..."
// // // // //             className="pl-10 p-2 border border-gray-300 rounded w-full"
// // // // //           />
// // // // //         </div>
// // // // //         <div className="flex items-center gap-2">
// // // // //           <Filter className="h-5 w-5 text-gray-500" />
// // // // //           <select
// // // // //             className="p-2 border border-gray-300 rounded"
// // // // //           >
// // // // //             <option value="all">All Statuses</option>
// // // // //             {statusOptions.map(option => (
// // // // //               <option key={option.value} value={option.value}>
// // // // //                 {option.label}
// // // // //               </option>
// // // // //             ))}
// // // // //           </select>
// // // // //         </div>
// // // // //         <button
// // // // //           className="p-2 bg-gray-200 hover:bg-gray-300 rounded flex items-center gap-1"
// // // // //         >
// // // // //           <RefreshCw size={16} /> Refresh
// // // // //         </button>
// // // // //       </div>

// // // // //       <div className="overflow-x-auto rounded-lg border border-gray-200">
// // // // //         <table className="min-w-full divide-y divide-gray-200">
// // // // //           <thead className="bg-gray-50">
// // // // //             <tr>
// // // // //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // //                 Item Details
// // // // //               </th>
// // // // //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // //                 Damage Info
// // // // //               </th>
// // // // //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // //                 Status
// // // // //               </th>
// // // // //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // //                 Actions
// // // // //               </th>
// // // // //             </tr>
// // // // //           </thead>
// // // // //           <tbody className="bg-white divide-y divide-gray-200">
// // // // //             {sampleData.map((item) => (
// // // // //               <tr key={item.id}>
// // // // //                 <td className="px-6 py-4">
// // // // //                   <div className="text-sm font-medium text-gray-900">{item.itemName}</div>
// // // // //                   <div className="text-sm text-gray-500">Code: {item.itemCode}</div>
// // // // //                   <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
// // // // //                 </td>
// // // // //                 <td className="px-6 py-4">
// // // // //                   <div className="text-sm text-gray-900">
// // // // //                     {damageTypes.find(t => t.value === item.damageType)?.label}
// // // // //                   </div>
// // // // //                   <div className="text-sm text-gray-500 max-w-xs truncate">
// // // // //                     {item.damageDescription}
// // // // //                   </div>
// // // // //                   <div className="text-sm text-gray-500">
// // // // //                     Reported: {new Date(item.damageDate).toLocaleDateString()}
// // // // //                   </div>
// // // // //                 </td>
// // // // //                 <td className="px-6 py-4">
// // // // //                   <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(item.status)}`}>
// // // // //                     {statusOptions.find(s => s.value === item.status)?.label}
// // // // //                   </span>
// // // // //                   {item.actionTaken && (
// // // // //                     <div className="text-sm text-gray-500 mt-1 max-w-xs truncate">
// // // // //                       {item.actionTaken}
// // // // //                     </div>
// // // // //                   )}
// // // // //                 </td>
// // // // //                 <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
// // // // //                   <button
// // // // //                     className="text-blue-600 hover:text-blue-900 mr-3"
// // // // //                   >
// // // // //                     <Edit size={18} />
// // // // //                   </button>
// // // // //                   <button
// // // // //                     className="text-red-600 hover:text-red-900"
// // // // //                   >
// // // // //                     <Trash2 size={18} />
// // // // //                   </button>
// // // // //                 </td>
// // // // //               </tr>
// // // // //             ))}
// // // // //           </tbody>
// // // // //         </table>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default DamageItemsManagement;


// // // // import React, { useState, useEffect } from "react";
// // // // import axios from "axios";
// // // // import { Card, CardContent } from "@/components/ui";
// // // // import { Button } from "@/components/ui";
// // // // import { Input } from "@/components/ui";
// // // // import { Select, SelectItem } from "@/components/ui";
// // // // import { Textarea } from "@/components/ui";

// // // // const DamageItemManagement = () => {
// // // //   const storeId = localStorage.getItem("storeId");
// // // //   const [products, setProducts] = useState([]);
// // // //   const [selectedProduct, setSelectedProduct] = useState(null);
// // // //   const [damageDetails, setDamageDetails] = useState({
// // // //     damageType: "",
// // // //     cause: "",
// // // //     severity: "",
// // // //     quantity: "",
// // // //     notes: "",
// // // //   });

// // // //   useEffect(() => {
// // // //     if (storeId) {
// // // //       axios
// // // //         .get(`http://localhost:5000/products?storeId=${storeId}`)
// // // //         .then((res) => setProducts(res.data))
// // // //         .catch((err) => console.error("Error fetching products", err));
// // // //     }
// // // //   }, [storeId]);

// // // //   const handleProductSelect = (productId) => {
// // // //     const product = products.find((p) => p._id === productId);
// // // //     setSelectedProduct(product);
// // // //   };

// // // //   const handleChange = (e) => {
// // // //     setDamageDetails({ ...damageDetails, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     if (!selectedProduct || !damageDetails.quantity) {
// // // //       alert("Please select a product and enter damage details.");
// // // //       return;
// // // //     }

// // // //     const damageData = {
// // // //       storeId,
// // // //       productId: selectedProduct._id,
// // // //       productName: selectedProduct.product_name,
// // // //       category: selectedProduct.category,
// // // //       supplier: selectedProduct.supplier,
// // // //       costPrice: selectedProduct.cost_price,
// // // //       sellingPrice: selectedProduct.selling_price,
// // // //       damagedQuantity: parseInt(damageDetails.quantity, 10),
// // // //       damageType: damageDetails.damageType,
// // // //       cause: damageDetails.cause,
// // // //       severity: damageDetails.severity,
// // // //       notes: damageDetails.notes,
// // // //       damageDate: new Date().toISOString(),
// // // //     };

// // // //     try {
// // // //       await axios.post(`http://localhost:5000/damage-items?storeId=${storeId}`, damageData);
// // // //       alert("Damage record added successfully.");
// // // //     } catch (error) {
// // // //       console.error("Error saving damage record", error);
// // // //       alert("Failed to save damage record.");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <Card>
// // // //       <CardContent>
// // // //         <h2 className="text-xl font-bold mb-4">Manage Damaged Items</h2>
// // // //         <Select onChange={(e) => handleProductSelect(e.target.value)}>
// // // //           <option value="">Select a Product</option>
// // // //           {products.map((product) => (
// // // //             <SelectItem key={product._id} value={product._id}>
// // // //               {product.product_name} ({product.category})
// // // //             </SelectItem>
// // // //           ))}
// // // //         </Select>

// // // //         {selectedProduct && (
// // // //           <div className="mt-4 p-4 border rounded">
// // // //             <p><strong>Supplier:</strong> {selectedProduct.supplier}</p>
// // // //             <p><strong>Cost Price:</strong> ${selectedProduct.cost_price}</p>
// // // //             <p><strong>Stock Available:</strong> {selectedProduct.quantity}</p>
// // // //           </div>
// // // //         )}

// // // //         <Input name="quantity" placeholder="Damaged Quantity" type="number" onChange={handleChange} />
// // // //         <Select name="damageType" onChange={handleChange}>
// // // //           <option value="">Select Damage Type</option>
// // // //           <SelectItem value="broken">Broken</SelectItem>
// // // //           <SelectItem value="expired">Expired</SelectItem>
// // // //           <SelectItem value="defective">Defective</SelectItem>
// // // //         </Select>

// // // //         <Input name="cause" placeholder="Cause of Damage" onChange={handleChange} />
// // // //         <Select name="severity" onChange={handleChange}>
// // // //           <option value="">Select Severity</option>
// // // //           <SelectItem value="minor">Minor</SelectItem>
// // // //           <SelectItem value="moderate">Moderate</SelectItem>
// // // //           <SelectItem value="severe">Severe</SelectItem>
// // // //         </Select>
// // // //         <Textarea name="notes" placeholder="Additional Notes" onChange={handleChange} />

// // // //         <Button className="mt-4" onClick={handleSubmit}>Submit</Button>
// // // //       </CardContent>
// // // //     </Card>
// // // //   );
// // // // };

// // // // export default DamageItemManagement;
// // // // import React, { useEffect, useState } from "react";

// // // // const DamageItemsManagement = () => {
// // // //   const [products, setProducts] = useState([]);
// // // //   const [damageItem, setDamageItem] = useState({
// // // //     productId: "",
// // // //     quantity: "",
// // // //     reason: "",
// // // //     date: new Date().toISOString().split("T")[0],
// // // //   });

// // // //   const storeId = localStorage.getItem("storeId"); // Get store ID from localStorage
// // // //   const API_BASE_URL = "http://localhost:5000";

// // // //   // Fetch products from backend
// // // //   useEffect(() => {
// // // //     if (!storeId) return;

// // // //     fetch(`${API_BASE_URL}/products?storeId=${storeId}`)
// // // //       .then((res) => res.json())
// // // //       .then((data) => setProducts(data))
// // // //       .catch((error) => console.error("Error fetching products:", error));
// // // //   }, [storeId]);

// // // //   // Handle input changes
// // // //   const handleChange = (e) => {
// // // //     setDamageItem({ ...damageItem, [e.target.name]: e.target.value });
// // // //   };

// // // //   // Handle form submission
// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     if (!damageItem.productId || !damageItem.quantity || !damageItem.reason) {
// // // //       alert("Please fill all fields.");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const response = await fetch(`${API_BASE_URL}/damage-items?storeId=${storeId}`, {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify(damageItem),
// // // //       });

// // // //       if (response.ok) {
// // // //         alert("Damage item recorded successfully!");
// // // //         setDamageItem({ productId: "", quantity: "", reason: "", date: new Date().toISOString().split("T")[0] });
// // // //       } else {
// // // //         alert("Error saving damage item.");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Error:", error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
// // // //       <h2 className="text-xl font-bold mb-4">Damage Items Management</h2>
// // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // //         {/* Product Selection */}
// // // //         <div>
// // // //           <label className="block text-gray-700">Select Product:</label>
// // // //           <select
// // // //             name="productId"
// // // //             value={damageItem.productId}
// // // //             onChange={handleChange}
// // // //             className="w-full p-2 border rounded"
// // // //             required
// // // //           >
// // // //             <option value="">-- Select a Product --</option>
// // // //             {products.map((product) => (
// // // //               <option key={product._id} value={product._id}>
// // // //                 {product.product_name} (Stock: {product.quantity})
// // // //               </option>
// // // //             ))}
// // // //           </select>
// // // //         </div>

// // // //         {/* Quantity */}
// // // //         <div>
// // // //           <label className="block text-gray-700">Damage Quantity:</label>
// // // //           <input
// // // //             type="number"
// // // //             name="quantity"
// // // //             value={damageItem.quantity}
// // // //             onChange={handleChange}
// // // //             className="w-full p-2 border rounded"
// // // //             min="1"
// // // //             required
// // // //           />
// // // //         </div>

// // // //         {/* Reason */}
// // // //         <div>
// // // //           <label className="block text-gray-700">Reason for Damage:</label>
// // // //           <textarea
// // // //             name="reason"
// // // //             value={damageItem.reason}
// // // //             onChange={handleChange}
// // // //             className="w-full p-2 border rounded"
// // // //             required
// // // //           ></textarea>
// // // //         </div>

// // // //         {/* Date */}
// // // //         <div>
// // // //           <label className="block text-gray-700">Damage Date:</label>
// // // //           <input
// // // //             type="date"
// // // //             name="date"
// // // //             value={damageItem.date}
// // // //             onChange={handleChange}
// // // //             className="w-full p-2 border rounded"
// // // //             required
// // // //           />
// // // //         </div>

// // // //         {/* Submit Button */}
// // // //         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
// // // //           Submit Damage Report
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DamageItemsManagement;
// // // import React, { useEffect, useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // const DamageItemsManagement = () => {
// // //   const [products, setProducts] = useState([]);
// // //   const [damageItems, setDamageItems] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [activeTab, setActiveTab] = useState("report");
// // //   const [damageItem, setDamageItem] = useState({
// // //     productId: "",
// // //     quantity: "",
// // //     reason: "",
// // //     date: new Date().toISOString().split("T")[0],
// // //   });
// // //   const [submitStatus, setSubmitStatus] = useState({ show: false, success: false, message: "" });
// // //   const [selectedProduct, setSelectedProduct] = useState(null);

// // //   const storeId = localStorage.getItem("storeId");
// // //   const API_BASE_URL = "http://localhost:5000";

// // //   // Fetch data (products and damage items) from backend
// // //   useEffect(() => {
// // //     if (!storeId) return;
// // //     setLoading(true);
    
// // //     Promise.all([
// // //       fetch(`${API_BASE_URL}/products?storeId=${storeId}`).then(res => res.json()),
// // //       fetch(`${API_BASE_URL}/damage-items?storeId=${storeId}`).then(res => res.json())
// // //     ])
// // //     .then(([productsData, damageData]) => {
// // //       setProducts(productsData);
// // //       setDamageItems(damageData || []);
// // //       setLoading(false);
// // //     })
// // //     .catch(error => {
// // //       console.error("Error fetching data:", error);
// // //       setLoading(false);
// // //     });
// // //   }, [storeId]);

// // //   // Handle input changes
// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setDamageItem({ ...damageItem, [name]: value });
    
// // //     if (name === "productId" && value) {
// // //       const product = products.find(p => p._id === value);
// // //       setSelectedProduct(product);
// // //     }
// // //   };

// // //   // Handle form submission
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
    
// // //     if (!damageItem.productId || !damageItem.quantity || !damageItem.reason) {
// // //       showStatus(false, "Please fill all required fields");
// // //       return;
// // //     }

// // //     if (selectedProduct && parseInt(damageItem.quantity) > parseInt(selectedProduct.quantity)) {
// // //       showStatus(false, "Cannot record damage quantity greater than available stock");
// // //       return;
// // //     }

// // //     try {
// // //       setLoading(true);
// // //       const response = await fetch(`${API_BASE_URL}/damage-items?storeId=${storeId}`, {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify(damageItem),
// // //       });

// // //       const data = await response.json();

// // //       if (response.ok) {
// // //         showStatus(true, "Damage item recorded successfully!");
        
// // //         // Refresh data
// // //         const [productsData, damageData] = await Promise.all([
// // //           fetch(`${API_BASE_URL}/products?storeId=${storeId}`).then(res => res.json()),
// // //           fetch(`${API_BASE_URL}/damage-items?storeId=${storeId}`).then(res => res.json())
// // //         ]);
        
// // //         setProducts(productsData);
// // //         setDamageItems(damageData || []);
        
// // //         // Reset form
// // //         setDamageItem({ 
// // //           productId: "", 
// // //           quantity: "", 
// // //           reason: "", 
// // //           date: new Date().toISOString().split("T")[0] 
// // //         });
// // //         setSelectedProduct(null);
// // //       } else {
// // //         showStatus(false, data.error || "Error saving damage item");
// // //       }
// // //     } catch (error) {
// // //       console.error("Error:", error);
// // //       showStatus(false, "Network error. Please try again.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const showStatus = (success, message) => {
// // //     setSubmitStatus({ show: true, success, message });
// // //     setTimeout(() => setSubmitStatus({ show: false, success: false, message: "" }), 4000);
// // //   };

// // //   // Format date for display
// // //   const formatDate = (dateString) => {
// // //     const options = { year: 'numeric', month: 'long', day: 'numeric' };
// // //     return new Date(dateString).toLocaleDateString(undefined, options);
// // //   };

// // //   // Calculate total damaged items value
// // //   const calculateTotalDamageValue = () => {
// // //     return damageItems.reduce((total, item) => {
// // //       const product = products.find(p => p._id === item.productId);
// // //       if (product) {
// // //         return total + (parseInt(item.quantity) * parseFloat(product.price || 0));
// // //       }
// // //       return total;
// // //     }, 0).toFixed(2);
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 py-8">
// // //       {/* Main Container */}
// // //       <div className="max-w-6xl mx-auto">
// // //         {/* Header Section */}
// // //         <motion.div 
// // //           initial={{ opacity: 0, y: -20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.5 }}
// // //           className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-6 mb-8 text-white"
// // //         >
// // //           <h1 className="text-3xl font-bold">Damage Items Management</h1>
// // //           <p className="mt-2 opacity-90">Track and manage damaged inventory items</p>
// // //         </motion.div>

// // //         {/* Status Notification */}
// // //         <AnimatePresence>
// // //           {submitStatus.show && (
// // //             <motion.div
// // //               initial={{ opacity: 0, y: -20 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               exit={{ opacity: 0, y: -20 }}
// // //               className={`mb-6 p-4 rounded-lg shadow ${
// // //                 submitStatus.success ? "bg-green-100 border-l-4 border-green-500" : "bg-red-100 border-l-4 border-red-500"
// // //               }`}
// // //             >
// // //               <div className="flex items-center">
// // //                 {submitStatus.success ? (
// // //                   <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
// // //                   </svg>
// // //                 ) : (
// // //                   <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
// // //                   </svg>
// // //                 )}
// // //                 <p className={submitStatus.success ? "text-green-700" : "text-red-700"}>
// // //                   {submitStatus.message}
// // //                 </p>
// // //               </div>
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>

// // //         {/* Tabs Navigation */}
// // //         <div className="mb-6 flex border-b">
// // //           <button
// // //             onClick={() => setActiveTab("report")}
// // //             className={`px-4 py-2 font-medium ${
// // //               activeTab === "report"
// // //                 ? "text-blue-600 border-b-2 border-blue-600"
// // //                 : "text-gray-500 hover:text-blue-500"
// // //             }`}
// // //           >
// // //             Report Damage
// // //           </button>
// // //           <button
// // //             onClick={() => setActiveTab("history")}
// // //             className={`px-4 py-2 font-medium ${
// // //               activeTab === "history"
// // //                 ? "text-blue-600 border-b-2 border-blue-600"
// // //                 : "text-gray-500 hover:text-blue-500"
// // //             }`}
// // //           >
// // //             Damage History
// // //           </button>
// // //           <button
// // //             onClick={() => setActiveTab("stats")}
// // //             className={`px-4 py-2 font-medium ${
// // //               activeTab === "stats"
// // //                 ? "text-blue-600 border-b-2 border-blue-600"
// // //                 : "text-gray-500 hover:text-blue-500"
// // //             }`}
// // //           >
// // //             Statistics
// // //           </button>
// // //         </div>

// // //         {/* Loading Indicator */}
// // //         {loading && (
// // //           <div className="flex justify-center my-12">
// // //             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// // //           </div>
// // //         )}

// // //         {/* Tab Content */}
// // //         <AnimatePresence mode="wait">
// // //           {!loading && activeTab === "report" && (
// // //             <motion.div
// // //               key="report"
// // //               initial={{ opacity: 0, x: 20 }}
// // //               animate={{ opacity: 1, x: 0 }}
// // //               exit={{ opacity: 0, x: -20 }}
// // //               transition={{ duration: 0.3 }}
// // //               className="bg-white rounded-lg shadow-lg p-6"
// // //             >
// // //               <h2 className="text-xl font-semibold mb-6 text-gray-800">Report Damaged Items</h2>
// // //               <form onSubmit={handleSubmit} className="space-y-6">
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                   {/* Product Selection */}
// // //                   <div className="space-y-2">
// // //                     <label className="block text-gray-700 font-medium">Select Product *</label>
// // //                     <select
// // //                       name="productId"
// // //                       value={damageItem.productId}
// // //                       onChange={handleChange}
// // //                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// // //                       required
// // //                     >
// // //                       <option value="">-- Select a Product --</option>
// // //                       {products.map((product) => (
// // //                         <option key={product._id} value={product._id}>
// // //                           {product.product_name} (Stock: {product.quantity})
// // //                         </option>
// // //                       ))}
// // //                     </select>
// // //                   </div>

// // //                   {/* Quantity */}
// // //                   <div className="space-y-2">
// // //                     <label className="block text-gray-700 font-medium">Damage Quantity *</label>
// // //                     <input
// // //                       type="number"
// // //                       name="quantity"
// // //                       value={damageItem.quantity}
// // //                       onChange={handleChange}
// // //                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// // //                       min="1"
// // //                       required
// // //                     />
// // //                     {selectedProduct && damageItem.quantity && parseInt(damageItem.quantity) > parseInt(selectedProduct.quantity) && (
// // //                       <p className="text-red-500 text-sm mt-1">
// // //                         Quantity exceeds available stock ({selectedProduct.quantity})
// // //                       </p>
// // //                     )}
// // //                   </div>

// // //                   {/* Date */}
// // //                   <div className="space-y-2">
// // //                     <label className="block text-gray-700 font-medium">Damage Date *</label>
// // //                     <input
// // //                       type="date"
// // //                       name="date"
// // //                       value={damageItem.date}
// // //                       onChange={handleChange}
// // //                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// // //                       required
// // //                     />
// // //                   </div>
                  
// // //                   {/* Product Info Card - shows when product is selected */}
// // //                   {selectedProduct && (
// // //                     <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
// // //                       <h3 className="font-medium text-blue-800">Selected Product</h3>
// // //                       <div className="mt-2 space-y-1">
// // //                         <p><span className="font-medium">Name:</span> {selectedProduct.product_name}</p>
// // //                         <p><span className="font-medium">Current Stock:</span> {selectedProduct.quantity}</p>
// // //                         {selectedProduct.price && (
// // //                           <p><span className="font-medium">Price:</span> ${parseFloat(selectedProduct.price).toFixed(2)}</p>
// // //                         )}
// // //                       </div>
// // //                     </div>
// // //                   )}
// // //                 </div>

// // //                 {/* Reason */}
// // //                 <div className="space-y-2">
// // //                   <label className="block text-gray-700 font-medium">Reason for Damage *</label>
// // //                   <textarea
// // //                     name="reason"
// // //                     value={damageItem.reason}
// // //                     onChange={handleChange}
// // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// // //                     rows="4"
// // //                     required
// // //                   ></textarea>
// // //                 </div>

// // //                 {/* Submit Button */}
// // //                 <motion.button
// // //                   type="submit"
// // //                   whileHover={{ scale: 1.02 }}
// // //                   whileTap={{ scale: 0.98 }}
// // //                   className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-lg font-medium shadow hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
// // //                 >
// // //                   Submit Damage Report
// // //                 </motion.button>
// // //               </form>
// // //             </motion.div>
// // //           )}

// // //           {!loading && activeTab === "history" && (
// // //             <motion.div
// // //               key="history"
// // //               initial={{ opacity: 0, x: 20 }}
// // //               animate={{ opacity: 1, x: 0 }}
// // //               exit={{ opacity: 0, x: -20 }}
// // //               transition={{ duration: 0.3 }}
// // //               className="bg-white rounded-lg shadow-lg p-6"
// // //             >
// // //               <h2 className="text-xl font-semibold mb-6 text-gray-800">Damage History</h2>
              
// // //               {damageItems.length === 0 ? (
// // //                 <div className="text-center py-8">
// // //                   <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
// // //                   </svg>
// // //                   <p className="mt-4 text-gray-600">No damage reports found</p>
// // //                 </div>
// // //               ) : (
// // //                 <div className="overflow-x-auto">
// // //                   <table className="min-w-full divide-y divide-gray-200">
// // //                     <thead className="bg-gray-50">
// // //                       <tr>
// // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
// // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
// // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
// // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
// // //                       </tr>
// // //                     </thead>
// // //                     <tbody className="bg-white divide-y divide-gray-200">
// // //                       {damageItems.map((item, index) => (
// // //                         <motion.tr 
// // //                           key={item._id}
// // //                           initial={{ opacity: 0, y: 10 }}
// // //                           animate={{ opacity: 1, y: 0 }}
// // //                           transition={{ duration: 0.3, delay: index * 0.05 }}
// // //                           className="hover:bg-gray-50"
// // //                         >
// // //                           <td className="px-6 py-4 whitespace-nowrap">
// // //                             <div className="font-medium text-gray-900">{item.product_name}</div>
// // //                           </td>
// // //                           <td className="px-6 py-4 whitespace-nowrap">
// // //                             <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
// // //                               {item.quantity}
// // //                             </span>
// // //                           </td>
// // //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // //                             {formatDate(item.date)}
// // //                           </td>
// // //                           <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
// // //                             {item.reason}
// // //                           </td>
// // //                         </motion.tr>
// // //                       ))}
// // //                     </tbody>
// // //                   </table>
// // //                 </div>
// // //               )}
// // //             </motion.div>
// // //           )}

// // //           {!loading && activeTab === "stats" && (
// // //             <motion.div
// // //               key="stats"
// // //               initial={{ opacity: 0, x: 20 }}
// // //               animate={{ opacity: 1, x: 0 }}
// // //               exit={{ opacity: 0, x: -20 }}
// // //               transition={{ duration: 0.3 }}
// // //               className="bg-white rounded-lg shadow-lg p-6"
// // //             >
// // //               <h2 className="text-xl font-semibold mb-6 text-gray-800">Damage Statistics</h2>
              
// // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //                 <motion.div 
// // //                   initial={{ opacity: 0, y: 20 }}
// // //                   animate={{ opacity: 1, y: 0 }}
// // //                   transition={{ duration: 0.5, delay: 0.1 }}
// // //                   className="bg-blue-50 border border-blue-100 rounded-lg p-4 shadow-sm"
// // //                 >
// // //                   <h3 className="text-blue-800 font-medium mb-2">Total Items Damaged</h3>
// // //                   <p className="text-3xl font-bold text-blue-600">
// // //                     {damageItems.reduce((total, item) => total + parseInt(item.quantity), 0)}
// // //                   </p>
// // //                 </motion.div>
                
// // //                 <motion.div 
// // //                   initial={{ opacity: 0, y: 20 }}
// // //                   animate={{ opacity: 1, y: 0 }}
// // //                   transition={{ duration: 0.5, delay: 0.2 }}
// // //                   className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 shadow-sm"
// // //                 >
// // //                   <h3 className="text-indigo-800 font-medium mb-2">Products Affected</h3>
// // //                   <p className="text-3xl font-bold text-indigo-600">
// // //                     {new Set(damageItems.map(item => item.productId)).size}
// // //                   </p>
// // //                 </motion.div>
                
// // //                 <motion.div 
// // //                   initial={{ opacity: 0, y: 20 }}
// // //                   animate={{ opacity: 1, y: 0 }}
// // //                   transition={{ duration: 0.5, delay: 0.3 }}
// // //                   className="bg-purple-50 border border-purple-100 rounded-lg p-4 shadow-sm"
// // //                 >
// // //                   <h3 className="text-purple-800 font-medium mb-2">Estimated Value Loss</h3>
// // //                   <p className="text-3xl font-bold text-purple-600">
// // //                     ${calculateTotalDamageValue()}
// // //                   </p>
// // //                 </motion.div>
// // //               </div>
              
// // //               {damageItems.length > 0 && (
// // //                 <div className="mt-8">
// // //                   <h3 className="text-lg font-medium mb-4 text-gray-800">Most Damaged Products</h3>
// // //                   <div className="overflow-x-auto">
// // //                     <table className="min-w-full divide-y divide-gray-200">
// // //                       <thead className="bg-gray-50">
// // //                         <tr>
// // //                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
// // //                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Damaged</th>
// // //                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Incidents</th>
// // //                         </tr>
// // //                       </thead>
// // //                       <tbody className="bg-white divide-y divide-gray-200">
// // //                         {Object.entries(damageItems.reduce((acc, item) => {
// // //                           if (!acc[item.productId]) {
// // //                             acc[item.productId] = {
// // //                               name: item.product_name,
// // //                               total: 0,
// // //                               incidents: 0
// // //                             };
// // //                           }
// // //                           acc[item.productId].total += parseInt(item.quantity);
// // //                           acc[item.productId].incidents += 1;
// // //                           return acc;
// // //                         }, {}))
// // //                         .sort((a, b) => b[1].total - a[1].total)
// // //                         .slice(0, 5)
// // //                         .map(([id, data], index) => (
// // //                           <motion.tr 
// // //                             key={id}
// // //                             initial={{ opacity: 0 }}
// // //                             animate={{ opacity: 1 }}
// // //                             transition={{ duration: 0.3, delay: index * 0.1 }}
// // //                             className="hover:bg-gray-50"
// // //                           >
// // //                             <td className="px-6 py-4 whitespace-nowrap">
// // //                               <div className="font-medium text-gray-900">{data.name}</div>
// // //                             </td>
// // //                             <td className="px-6 py-4 whitespace-nowrap">
// // //                               <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
// // //                                 {data.total}
// // //                               </span>
// // //                             </td>
// // //                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // //                               {data.incidents}
// // //                             </td>
// // //                           </motion.tr>
// // //                         ))}
// // //                       </tbody>
// // //                     </table>
// // //                   </div>
// // //                 </div>
// // //               )}
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default DamageItemsManagement;

// // import React, { useEffect, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";

// // const DamageItemsManagement = () => {
// //   const [products, setProducts] = useState([]);
// //   const [damageItems, setDamageItems] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [activeTab, setActiveTab] = useState("report");
// //   const [damageItem, setDamageItem] = useState({
// //     productId: "",
// //     quantity: "",
// //     reason: "",
// //     date: new Date().toISOString().split("T")[0],
// //   });
// //   const [submitStatus, setSubmitStatus] = useState({ show: false, success: false, message: "" });
// //   const [selectedProduct, setSelectedProduct] = useState(null);

// //   const storeId = localStorage.getItem("storeId");
// //   const API_BASE_URL = "http://localhost:5000";

// //   // Fetch data (products and damage items) from backend
// //   useEffect(() => {
// //     if (!storeId) return;
// //     fetchData();
// //   }, [storeId]);

// //   const fetchData = async () => {
// //     try {
// //       setLoading(true);
      
// //       // Fetch products
// //       const productsResponse = await fetch(`${API_BASE_URL}/products?storeId=${storeId}`);
// //       const productsData = await productsResponse.json();
// //       setProducts(productsData);
      
// //       // Fetch damage items
// //       const damageResponse = await fetch(`${API_BASE_URL}/damage-items?storeId=${storeId}`);
// //       const damageData = await damageResponse.json();
      
// //       // Ensure damageItems is always an array
// //       if (Array.isArray(damageData)) {
// //         setDamageItems(damageData);
// //       } else {
// //         console.warn("Damage items response is not an array:", damageData);
// //         setDamageItems([]);
// //       }
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //       setDamageItems([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Handle input changes
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setDamageItem({ ...damageItem, [name]: value });
    
// //     if (name === "productId" && value) {
// //       const product = products.find(p => p._id === value);
// //       setSelectedProduct(product);
// //     }
// //   };

// //   // Handle form submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
    
// //     if (!damageItem.productId || !damageItem.quantity || !damageItem.reason) {
// //       showStatus(false, "Please fill all required fields");
// //       return;
// //     }

// //     if (selectedProduct && parseInt(damageItem.quantity) > parseInt(selectedProduct.quantity)) {
// //       showStatus(false, "Cannot record damage quantity greater than available stock");
// //       return;
// //     }

// //     try {
// //       setLoading(true);
// //       const response = await fetch(`${API_BASE_URL}/damage-items?storeId=${storeId}`, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(damageItem),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         showStatus(true, "Damage item recorded successfully!");
        
// //         // Refresh data
// //         await fetchData();
        
// //         // Reset form
// //         setDamageItem({ 
// //           productId: "", 
// //           quantity: "", 
// //           reason: "", 
// //           date: new Date().toISOString().split("T")[0] 
// //         });
// //         setSelectedProduct(null);
// //       } else {
// //         showStatus(false, data.error || "Error saving damage item");
// //       }
// //     } catch (error) {
// //       console.error("Error:", error);
// //       showStatus(false, "Network error. Please try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const showStatus = (success, message) => {
// //     setSubmitStatus({ show: true, success, message });
// //     setTimeout(() => setSubmitStatus({ show: false, success: false, message: "" }), 4000);
// //   };

// //   // Format date for display
// //   const formatDate = (dateString) => {
// //     const options = { year: 'numeric', month: 'long', day: 'numeric' };
// //     return new Date(dateString).toLocaleDateString(undefined, options);
// //   };

// //   // Calculate total damaged items value
// //   const calculateTotalDamageValue = () => {
// //     if (!Array.isArray(damageItems) || damageItems.length === 0) return "0.00";
    
// //     return damageItems.reduce((total, item) => {
// //       const product = products.find(p => p._id === item.productId);
// //       if (product) {
// //         return total + (parseInt(item.quantity) * parseFloat(product.price || 0));
// //       }
// //       return total;
// //     }, 0).toFixed(2);
// //   };

// //   // Calculate total damaged items
// //   const calculateTotalDamagedItems = () => {
// //     if (!Array.isArray(damageItems) || damageItems.length === 0) return 0;
    
// //     return damageItems.reduce((total, item) => {
// //       return total + parseInt(item.quantity || 0);
// //     }, 0);
// //   };

// //   // Get unique products affected
// //   const getProductsAffectedCount = () => {
// //     if (!Array.isArray(damageItems) || damageItems.length === 0) return 0;
    
// //     const uniqueProductIds = new Set(damageItems.map(item => item.productId));
// //     return uniqueProductIds.size;
// //   };

// //   // Generate most damaged products summary
// //   const getMostDamagedProducts = () => {
// //     if (!Array.isArray(damageItems) || damageItems.length === 0) return [];
    
// //     const productSummary = damageItems.reduce((acc, item) => {
// //       if (!acc[item.productId]) {
// //         acc[item.productId] = {
// //           name: item.product_name,
// //           total: 0,
// //           incidents: 0
// //         };
// //       }
// //       acc[item.productId].total += parseInt(item.quantity || 0);
// //       acc[item.productId].incidents += 1;
// //       return acc;
// //     }, {});
    
// //     return Object.entries(productSummary)
// //       .sort((a, b) => b[1].total - a[1].total)
// //       .slice(0, 5);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-8">
// //       {/* Main Container */}
// //       <div className="max-w-6xl mx-auto">
// //         {/* Header Section */}
// //         <motion.div 
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //           className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-6 mb-8 text-white"
// //         >
// //           <h1 className="text-3xl font-bold">Damage Items Management</h1>
// //           <p className="mt-2 opacity-90">Track and manage damaged inventory items</p>
// //         </motion.div>

// //         {/* Status Notification */}
// //         <AnimatePresence>
// //           {submitStatus.show && (
// //             <motion.div
// //               initial={{ opacity: 0, y: -20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -20 }}
// //               className={`mb-6 p-4 rounded-lg shadow ${
// //                 submitStatus.success ? "bg-green-100 border-l-4 border-green-500" : "bg-red-100 border-l-4 border-red-500"
// //               }`}
// //             >
// //               <div className="flex items-center">
// //                 {submitStatus.success ? (
// //                   <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
// //                   </svg>
// //                 ) : (
// //                   <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
// //                   </svg>
// //                 )}
// //                 <p className={submitStatus.success ? "text-green-700" : "text-red-700"}>
// //                   {submitStatus.message}
// //                 </p>
// //               </div>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>

// //         {/* Tabs Navigation */}
// //         <div className="mb-6 flex border-b">
// //           <button
// //             onClick={() => setActiveTab("report")}
// //             className={`px-4 py-2 font-medium ${
// //               activeTab === "report"
// //                 ? "text-blue-600 border-b-2 border-blue-600"
// //                 : "text-gray-500 hover:text-blue-500"
// //             }`}
// //           >
// //             Report Damage
// //           </button>
// //           <button
// //             onClick={() => setActiveTab("history")}
// //             className={`px-4 py-2 font-medium ${
// //               activeTab === "history"
// //                 ? "text-blue-600 border-b-2 border-blue-600"
// //                 : "text-gray-500 hover:text-blue-500"
// //             }`}
// //           >
// //             Damage History
// //           </button>
// //           <button
// //             onClick={() => setActiveTab("stats")}
// //             className={`px-4 py-2 font-medium ${
// //               activeTab === "stats"
// //                 ? "text-blue-600 border-b-2 border-blue-600"
// //                 : "text-gray-500 hover:text-blue-500"
// //             }`}
// //           >
// //             Statistics
// //           </button>
// //         </div>

// //         {/* Loading Indicator */}
// //         {loading && (
// //           <div className="flex justify-center my-12">
// //             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// //           </div>
// //         )}

// //         {/* Tab Content */}
// //         <AnimatePresence mode="wait">
// //           {!loading && activeTab === "report" && (
// //             <motion.div
// //               key="report"
// //               initial={{ opacity: 0, x: 20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               exit={{ opacity: 0, x: -20 }}
// //               transition={{ duration: 0.3 }}
// //               className="bg-white rounded-lg shadow-lg p-6"
// //             >
// //               <h2 className="text-xl font-semibold mb-6 text-gray-800">Report Damaged Items</h2>
// //               <form onSubmit={handleSubmit} className="space-y-6">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                   {/* Product Selection */}
// //                   <div className="space-y-2">
// //                     <label className="block text-gray-700 font-medium">Select Product *</label>
// //                     <select
// //                       name="productId"
// //                       value={damageItem.productId}
// //                       onChange={handleChange}
// //                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// //                       required
// //                     >
// //                       <option value="">-- Select a Product --</option>
// //                       {products.map((product) => (
// //                         <option key={product._id} value={product._id}>
// //                           {product.product_name} (Stock: {product.quantity})
// //                         </option>
// //                       ))}
// //                     </select>
// //                   </div>

// //                   {/* Quantity */}
// //                   <div className="space-y-2">
// //                     <label className="block text-gray-700 font-medium">Damage Quantity *</label>
// //                     <input
// //                       type="number"
// //                       name="quantity"
// //                       value={damageItem.quantity}
// //                       onChange={handleChange}
// //                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// //                       min="1"
// //                       required
// //                     />
// //                     {selectedProduct && damageItem.quantity && parseInt(damageItem.quantity) > parseInt(selectedProduct.quantity) && (
// //                       <p className="text-red-500 text-sm mt-1">
// //                         Quantity exceeds available stock ({selectedProduct.quantity})
// //                       </p>
// //                     )}
// //                   </div>

// //                   {/* Date */}
// //                   <div className="space-y-2">
// //                     <label className="block text-gray-700 font-medium">Damage Date *</label>
// //                     <input
// //                       type="date"
// //                       name="date"
// //                       value={damageItem.date}
// //                       onChange={handleChange}
// //                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// //                       required
// //                     />
// //                   </div>
                  
// //                   {/* Product Info Card - shows when product is selected */}
// //                   {selectedProduct && (
// //                     <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
// //                       <h3 className="font-medium text-blue-800">Selected Product</h3>
// //                       <div className="mt-2 space-y-1">
// //                         <p><span className="font-medium">Name:</span> {selectedProduct.product_name}</p>
// //                         <p><span className="font-medium">Current Stock:</span> {selectedProduct.quantity}</p>
// //                         {selectedProduct.price && (
// //                           <p><span className="font-medium">Price:</span> ${parseFloat(selectedProduct.price).toFixed(2)}</p>
// //                         )}
// //                       </div>
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* Reason */}
// //                 <div className="space-y-2">
// //                   <label className="block text-gray-700 font-medium">Reason for Damage *</label>
// //                   <textarea
// //                     name="reason"
// //                     value={damageItem.reason}
// //                     onChange={handleChange}
// //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// //                     rows="4"
// //                     required
// //                   ></textarea>
// //                 </div>

// //                 {/* Submit Button */}
// //                 <motion.button
// //                   type="submit"
// //                   whileHover={{ scale: 1.02 }}
// //                   whileTap={{ scale: 0.98 }}
// //                   className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-lg font-medium shadow hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
// //                 >
// //                   Submit Damage Report
// //                 </motion.button>
// //               </form>
// //             </motion.div>
// //           )}

// //           {!loading && activeTab === "history" && (
// //             <motion.div
// //               key="history"
// //               initial={{ opacity: 0, x: 20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               exit={{ opacity: 0, x: -20 }}
// //               transition={{ duration: 0.3 }}
// //               className="bg-white rounded-lg shadow-lg p-6"
// //             >
// //               <h2 className="text-xl font-semibold mb-6 text-gray-800">Damage History</h2>
              
// //               {!Array.isArray(damageItems) || damageItems.length === 0 ? (
// //                 <div className="text-center py-8">
// //                   <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
// //                   </svg>
// //                   <p className="mt-4 text-gray-600">No damage reports found</p>
// //                 </div>
// //               ) : (
// //                 <div className="overflow-x-auto">
// //                   <table className="min-w-full divide-y divide-gray-200">
// //                     <thead className="bg-gray-50">
// //                       <tr>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
// //                       </tr>
// //                     </thead>
// //                     <tbody className="bg-white divide-y divide-gray-200">
// //                       {damageItems.map((item, index) => (
// //                         <motion.tr 
// //                           key={item._id || index}
// //                           initial={{ opacity: 0, y: 10 }}
// //                           animate={{ opacity: 1, y: 0 }}
// //                           transition={{ duration: 0.3, delay: index * 0.05 }}
// //                           className="hover:bg-gray-50"
// //                         >
// //                           <td className="px-6 py-4 whitespace-nowrap">
// //                             <div className="font-medium text-gray-900">{item.product_name}</div>
// //                           </td>
// //                           <td className="px-6 py-4 whitespace-nowrap">
// //                             <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
// //                               {item.quantity}
// //                             </span>
// //                           </td>
// //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// //                             {formatDate(item.date)}
// //                           </td>
// //                           <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
// //                             {item.reason}
// //                           </td>
// //                         </motion.tr>
// //                       ))}
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               )}
// //             </motion.div>
// //           )}

// //           {!loading && activeTab === "stats" && (
// //             <motion.div
// //               key="stats"
// //               initial={{ opacity: 0, x: 20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               exit={{ opacity: 0, x: -20 }}
// //               transition={{ duration: 0.3 }}
// //               className="bg-white rounded-lg shadow-lg p-6"
// //             >
// //               <h2 className="text-xl font-semibold mb-6 text-gray-800">Damage Statistics</h2>
              
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //                 <motion.div 
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ duration: 0.5, delay: 0.1 }}
// //                   className="bg-blue-50 border border-blue-100 rounded-lg p-4 shadow-sm"
// //                 >
// //                   <h3 className="text-blue-800 font-medium mb-2">Total Items Damaged</h3>
// //                   <p className="text-3xl font-bold text-blue-600">
// //                     {calculateTotalDamagedItems()}
// //                   </p>
// //                 </motion.div>
                
// //                 <motion.div 
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ duration: 0.5, delay: 0.2 }}
// //                   className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 shadow-sm"
// //                 >
// //                   <h3 className="text-indigo-800 font-medium mb-2">Products Affected</h3>
// //                   <p className="text-3xl font-bold text-indigo-600">
// //                     {getProductsAffectedCount()}
// //                   </p>
// //                 </motion.div>
                
// //                 <motion.div 
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ duration: 0.5, delay: 0.3 }}
// //                   className="bg-purple-50 border border-purple-100 rounded-lg p-4 shadow-sm"
// //                 >
// //                   <h3 className="text-purple-800 font-medium mb-2">Estimated Value Loss</h3>
// //                   <p className="text-3xl font-bold text-purple-600">
// //                     ${calculateTotalDamageValue()}
// //                   </p>
// //                 </motion.div>
// //               </div>
              
// //               {Array.isArray(damageItems) && damageItems.length > 0 && (
// //                 <div className="mt-8">
// //                   <h3 className="text-lg font-medium mb-4 text-gray-800">Most Damaged Products</h3>
// //                   <div className="overflow-x-auto">
// //                     <table className="min-w-full divide-y divide-gray-200">
// //                       <thead className="bg-gray-50">
// //                         <tr>
// //                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
// //                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Damaged</th>
// //                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Incidents</th>
// //                         </tr>
// //                       </thead>
// //                       <tbody className="bg-white divide-y divide-gray-200">
// //                         {getMostDamagedProducts().map(([id, data], index) => (
// //                           <motion.tr 
// //                             key={id}
// //                             initial={{ opacity: 0 }}
// //                             animate={{ opacity: 1 }}
// //                             transition={{ duration: 0.3, delay: index * 0.1 }}
// //                             className="hover:bg-gray-50"
// //                           >
// //                             <td className="px-6 py-4 whitespace-nowrap">
// //                               <div className="font-medium text-gray-900">{data.name}</div>
// //                             </td>
// //                             <td className="px-6 py-4 whitespace-nowrap">
// //                               <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
// //                                 {data.total}
// //                               </span>
// //                             </td>
// //                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// //                               {data.incidents}
// //                             </td>
// //                           </motion.tr>
// //                         ))}
// //                       </tbody>
// //                     </table>
// //                   </div>
// //                 </div>
// //               )}
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DamageItemsManagement;
// // import React, { useEffect, useState, useMemo } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// // const DamageItemsManagement = () => {
// //   const [products, setProducts] = useState([]);
// //   const [damageItems, setDamageItems] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [activeTab, setActiveTab] = useState("report");
// //   const [damageItem, setDamageItem] = useState({
// //     productId: "",
// //     quantity: "",
// //     reason: "",
// //     date: new Date().toISOString().split("T")[0],
// //   });
// //   const [submitStatus, setSubmitStatus] = useState({ show: false, success: false, message: "" });
// //   const [selectedProduct, setSelectedProduct] = useState(null);
// //   const [timeframe, setTimeframe] = useState("all"); // all, month, week

// //   const storeId = localStorage.getItem("storeId");
// //   const API_BASE_URL = "http://localhost:5000";

// //   // Fetch data (products and damage items) from backend
// //   useEffect(() => {
// //     if (!storeId) return;
// //     fetchData();
// //   }, [storeId]);

// //   const fetchData = async () => {
// //     try {
// //       setLoading(true);

// //       // Fetch products
// //       const productsResponse = await fetch(`${API_BASE_URL}/products?storeId=${storeId}`);
// //       const productsData = await productsResponse.json();
// //       setProducts(productsData);

// //       // Fetch damage items
// //       const damageResponse = await fetch(`${API_BASE_URL}/damage-items?storeId=${storeId}`);
// //       const damageData = await damageResponse.json();

// //       // Ensure damageItems is always an array
// //       if (Array.isArray(damageData)) {
// //         setDamageItems(damageData);
// //       } else {
// //         console.warn("Damage items response is not an array:", damageData);
// //         setDamageItems([]);
// //       }
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //       setDamageItems([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Handle input changes
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setDamageItem({ ...damageItem, [name]: value });

// //     if (name === "productId" && value) {
// //       const product = products.find((p) => p._id === value);
// //       setSelectedProduct(product);
// //     }
// //   };

// //   // Handle form submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!damageItem.productId || !damageItem.quantity || !damageItem.reason) {
// //       showStatus(false, "Please fill all required fields");
// //       return;
// //     }

// //     if (selectedProduct && parseInt(damageItem.quantity) > parseInt(selectedProduct.quantity)) {
// //       showStatus(false, "Cannot record damage quantity greater than available stock");
// //       return;
// //     }

// //     try {
// //       setLoading(true);
// //       const response = await fetch(`${API_BASE_URL}/damage-items?storeId=${storeId}`, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(damageItem),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         showStatus(true, "Damage item recorded successfully!");

// //         // Refresh data
// //         await fetchData();

// //         // Reset form
// //         setDamageItem({
// //           productId: "",
// //           quantity: "",
// //           reason: "",
// //           date: new Date().toISOString().split("T")[0],
// //         });
// //         setSelectedProduct(null);
// //       } else {
// //         showStatus(false, data.error || "Error saving damage item");
// //       }
// //     } catch (error) {
// //       console.error("Error:", error);
// //       showStatus(false, "Network error. Please try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const showStatus = (success, message) => {
// //     setSubmitStatus({ show: true, success, message });
// //     setTimeout(() => setSubmitStatus({ show: false, success: false, message: "" }), 4000);
// //   };

// //   // Format date for display
// //   const formatDate = (dateString) => {
// //     const options = { year: "numeric", month: "long", day: "numeric" };
// //     return new Date(dateString).toLocaleDateString(undefined, options);
// //   };

// //   // Filter damage items based on timeframe
// //   const filteredDamageItems = useMemo(() => {
// //     if (!Array.isArray(damageItems) || damageItems.length === 0) return [];
// //     if (timeframe === "all") return damageItems;

// //     const now = new Date();
// //     let startDate;

// //     if (timeframe === "week") {
// //       startDate = new Date(now);
// //       startDate.setDate(now.getDate() - 7);
// //     } else if (timeframe === "month") {
// //       startDate = new Date(now);
// //       startDate.setMonth(now.getMonth() - 1);
// //     }

// //     return damageItems.filter((item) => {
// //       const itemDate = new Date(item.date);
// //       return itemDate >= startDate;
// //     });
// //   }, [damageItems, timeframe]);

// //   // Calculate total damaged items value
// //   // const calculateTotalDamageValue = () => {
// //   //   if (!Array.isArray(filteredDamageItems) || filteredDamageItems.length === 0) return "0.00";

// //   //   return filteredDamageItems
// //   //     .reduce((total, item) => {
// //   //       const product = products.find((p) => p._id === item.productId);
// //   //       if (product) {
// //   //         const valuePerUnit = parseFloat(product.cost_price || product.price || 0);
// //   //         return total + parseInt(item.quantity) * valuePerUnit;
// //   //       }
// //   //       return total;
// //   //     }, 0)
// //   //     .toFixed(2);
// //   // };
// //   const calculateTotalDamageValue = () => {
// //     if (!Array.isArray(filteredDamageItems) || filteredDamageItems.length === 0) return "0.00";
  
// //     return filteredDamageItems
// //       .reduce((total, item) => {
// //         const product = products.find((p) => p._id === item.productId);
// //         if (product) {
// //           // Use cost_price if available, otherwise fallback to price
// //           const costPrice = parseFloat(product.cost_price || product.price || 0);
// //           return total + parseInt(item.quantity) * costPrice;
// //         }
// //         return total;
// //       }, 0)
// //       .toFixed(2);
// //   };
// //   // Calculate total damaged items
// //   const calculateTotalDamagedItems = () => {
// //     if (!Array.isArray(filteredDamageItems) || filteredDamageItems.length === 0) return 0;

// //     return filteredDamageItems.reduce((total, item) => {
// //       return total + parseInt(item.quantity || 0);
// //     }, 0);
// //   };

// //   // Get unique products affected
// //   const getProductsAffectedCount = () => {
// //     if (!Array.isArray(filteredDamageItems) || filteredDamageItems.length === 0) return 0;

// //     const uniqueProductIds = new Set(filteredDamageItems.map((item) => item.productId));
// //     return uniqueProductIds.size;
// //   };

// //   // Generate most damaged products summary
// //   const getMostDamagedProducts = () => {
// //     if (!Array.isArray(filteredDamageItems) || filteredDamageItems.length === 0) return [];

// //     const productSummary = filteredDamageItems.reduce((acc, item) => {
// //       if (!acc[item.productId]) {
// //         acc[item.productId] = {
// //           name: item.product_name,
// //           id: item.productId,
// //           total: 0,
// //           incidents: 0,
// //           value: 0,
// //         };
// //       }

// //       const quantity = parseInt(item.quantity || 0);
// //       acc[item.productId].total += quantity;
// //       acc[item.productId].incidents += 1;

// //       // Calculate value loss
// //       const product = products.find((p) => p._id === item.productId);
// //       if (product) {
// //         const valuePerUnit = parseFloat(product.cost_price || product.price || 0);
// //         acc[item.productId].value += quantity * valuePerUnit;
// //       }

// //       return acc;
// //     }, {});

// //     return Object.values(productSummary)
// //       .sort((a, b) => b.total - a.total)
// //       .slice(0, 5);
// //   };

// //   // Generate data for damage reasons chart
// //   const getDamageReasonData = () => {
// //     if (!Array.isArray(filteredDamageItems) || filteredDamageItems.length === 0) return [];

// //     const reasonSummary = filteredDamageItems.reduce((acc, item) => {
// //       const reason = item.reason.trim();
// //       if (!acc[reason]) {
// //         acc[reason] = {
// //           reason: reason.length > 20 ? reason.substring(0, 20) + "..." : reason,
// //           count: 0,
// //           quantity: 0,
// //         };
// //       }

// //       acc[reason].count += 1;
// //       acc[reason].quantity += parseInt(item.quantity || 0);

// //       return acc;
// //     }, {});

// //     return Object.values(reasonSummary)
// //       .sort((a, b) => b.quantity - a.quantity)
// //       .slice(0, 6);
// //   };

// //   // Generate damage trend data by month
// //   const getDamageTrendData = () => {
// //     if (!Array.isArray(damageItems) || damageItems.length === 0) return [];

// //     const monthlyData = {};

// //     damageItems.forEach((item) => {
// //       const date = new Date(item.date);
// //       const monthYear = `${date.getFullYear()}-${date.getMonth() + 1}`;

// //       if (!monthlyData[monthYear]) {
// //         monthlyData[monthYear] = {
// //           month: new Date(date.getFullYear(), date.getMonth(), 1).toLocaleDateString("en-US", {
// //             month: "short",
// //             year: "numeric",
// //           }),
// //           count: 0,
// //           quantity: 0,
// //           value: 0,
// //         };
// //       }

// //       const quantity = parseInt(item.quantity || 0);
// //       monthlyData[monthYear].count += 1;
// //       monthlyData[monthYear].quantity += quantity;

// //       // Calculate value
// //       const product = products.find((p) => p._id === item.productId);
// //       if (product) {
// //         const valuePerUnit = parseFloat(product.cost_price || product.price || 0);
// //         monthlyData[monthYear].value += quantity * valuePerUnit;
// //       }
// //     });

// //     return Object.values(monthlyData).sort((a, b) => {
// //       const [aMonth, aYear] = a.month.split(" ");
// //       const [bMonth, bYear] = b.month.split(" ");
// //       if (aYear !== bYear) return aYear - bYear;

// //       const months = [
// //         "Jan",
// //         "Feb",
// //         "Mar",
// //         "Apr",
// //         "May",
// //         "Jun",
// //         "Jul",
// //         "Aug",
// //         "Sep",
// //         "Oct",
// //         "Nov",
// //         "Dec",
// //       ];
// //       return months.indexOf(aMonth) - months.indexOf(bMonth);
// //     });
// //   };

// //   // Chart colors
// //   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"];

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-8">
// //       {/* Main Container */}
// //       <div className="max-w-6xl mx-auto">
// //         {/* Header Section */}
// //         <motion.div
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //           className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-6 mb-8 text-white"
// //         >
// //           <h1 className="text-3xl font-bold">Damage Items Management</h1>
// //           <p className="mt-2 opacity-90">Track and manage damaged inventory items</p>
// //         </motion.div>

// //         {/* Status Notification */}
// //         <AnimatePresence>
// //           {submitStatus.show && (
// //             <motion.div
// //               initial={{ opacity: 0, y: -20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -20 }}
// //               className={`mb-6 p-4 rounded-lg shadow ${
// //                 submitStatus.success ? "bg-green-100 border-l-4 border-green-500" : "bg-red-100 border-l-4 border-red-500"
// //               }`}
// //             >
// //               <div className="flex items-center">
// //                 {submitStatus.success ? (
// //                   <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
// //                   </svg>
// //                 ) : (
// //                   <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
// //                   </svg>
// //                 )}
// //                 <p className={submitStatus.success ? "text-green-700" : "text-red-700"}>{submitStatus.message}</p>
// //               </div>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>

// //         {/* Tabs Navigation */}
// //         <div className="mb-6 flex border-b">
// //           <button
// //             onClick={() => setActiveTab("report")}
// //             className={`px-4 py-2 font-medium ${
// //               activeTab === "report" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-500"
// //             }`}
// //           >
// //             Report Damage
// //           </button>
// //           <button
// //             onClick={() => setActiveTab("history")}
// //             className={`px-4 py-2 font-medium ${
// //               activeTab === "history" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-500"
// //             }`}
// //           >
// //             Damage History
// //           </button>
// //           <button
// //             onClick={() => setActiveTab("stats")}
// //             className={`px-4 py-2 font-medium ${
// //               activeTab === "stats" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-500"
// //             }`}
// //           >
// //             Statistics
// //           </button>
// //           <button
// //             onClick={() => setActiveTab("analytics")}
// //             className={`px-4 py-2 font-medium ${
// //               activeTab === "analytics" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-500"
// //             }`}
// //           >
// //             Analytics
// //           </button>
// //         </div>

// //         {/* Loading Indicator */}
// //         {loading && (
// //           <div className="flex justify-center my-12">
// //             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// //           </div>
// //         )}

// //         {/* Tab Content */}
// //         <AnimatePresence mode="wait">
// //           {!loading && activeTab === "report" && (
// //             <motion.div
// //               key="report"
// //               initial={{ opacity: 0, x: 20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               exit={{ opacity: 0, x: -20 }}
// //               transition={{ duration: 0.3 }}
// //               className="bg-white rounded-lg shadow-lg p-6"
// //             >
// //               <h2 className="text-xl font-semibold mb-6 text-gray-800">Report Damaged Items</h2>
// //               <form onSubmit={handleSubmit} className="space-y-6">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                   {/* Product Selection */}
// //                   <div className="space-y-2">
// //                     <label className="block text-gray-700 font-medium">Select Product *</label>
// //                     <select
// //                       name="productId"
// //                       value={damageItem.productId}
// //                       onChange={handleChange}
// //                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// //                       required
// //                     >
// //                       <option value="">-- Select a Product --</option>
// //                       {products.map((product) => (
// //                         <option key={product._id} value={product._id}>
// //                           {product.product_name} (Stock: {product.quantity})
// //                         </option>
// //                       ))}
// //                     </select>
// //                   </div>

// //                   {/* Quantity */}
// //                   <div className="space-y-2">
// //                     <label className="block text-gray-700 font-medium">Damage Quantity *</label>
// //                     <input
// //                       type="number"
// //                       name="quantity"
// //                       value={damageItem.quantity}
// //                       onChange={handleChange}
// //                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// //                       min="1"
// //                       required
// //                     />
// //                     {selectedProduct && damageItem.quantity && parseInt(damageItem.quantity) > parseInt(selectedProduct.quantity) && (
// //                       <p className="text-red-500 text-sm mt-1">
// //                         Quantity exceeds available stock ({selectedProduct.quantity})
// //                       </p>
// //                     )}
// //                   </div>

// //                   {/* Date */}
// //                   <div className="space-y-2">
// //                     <label className="block text-gray-700 font-medium">Damage Date *</label>
// //                     <input
// //                       type="date"
// //                       name="date"
// //                       value={damageItem.date}
// //                       onChange={handleChange}
// //                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// //                       required
// //                     />
// //                   </div>

// //                   {/* Product Info Card - shows when product is selected */}
// //                   {selectedProduct && (
// //                     <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
// //                       <h3 className="font-medium text-blue-800">Selected Product</h3>
// //                       <div className="mt-2 space-y-1">
// //                         <p>
// //                           <span className="font-medium">Name:</span> {selectedProduct.product_name}
// //                         </p>
// //                         <p>
// //                           <span className="font-medium">Current Stock:</span> {selectedProduct.quantity}
// //                         </p>
// //                         {selectedProduct.cost_price && (
// //                           <p>
// //                             <span className="font-medium">Cost Price:</span> ${parseFloat(selectedProduct.cost_price).toFixed(2)}
// //                           </p>
// //                         )}
// //                         {selectedProduct.price && (
// //                           <p>
// //                             <span className="font-medium">Selling Price:</span> ${parseFloat(selectedProduct.price).toFixed(2)}
// //                           </p>
// //                         )}
// //                         {selectedProduct.cost_price && selectedProduct.price && (
// //                           <p>
// //                             <span className="font-medium">Profit Margin:</span>{" "}
// //                             {(((parseFloat(selectedProduct.price) - parseFloat(selectedProduct.cost_price)) /
// //                               parseFloat(selectedProduct.price)) *
// //                               100).toFixed(2)}
// //                             %
// //                           </p>
// //                         )}
// //                       </div>
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* Reason */}
// //                 <div className="space-y-2">
// //                   <label className="block text-gray-700 font-medium">Reason for Damage *</label>
// //                   <textarea
// //                     name="reason"
// //                     value={damageItem.reason}
// //                     onChange={handleChange}
// //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// //                     rows="4"
// //                     required
// //                   ></textarea>
// //                 </div>

// //                 {/* Submit Button */}
// //                 <motion.button
// //                   type="submit"
// //                   whileHover={{ scale: 1.02 }}
// //                   whileTap={{ scale: 0.98 }}
// //                   className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-lg font-medium shadow hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
// //                 >
// //                   Submit Damage Report
// //                 </motion.button>
// //               </form>
// //             </motion.div>
// //           )}

// //           {!loading && activeTab === "history" && (
// //             <motion.div
// //               key="history"
// //               initial={{ opacity: 0, x: 20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               exit={{ opacity: 0, x: -20 }}
// //               transition={{ duration: 0.3 }}
// //               className="bg-white rounded-lg shadow-lg p-6"
// //             >
// //               <div className="flex justify-between items-center mb-6">
// //                 <h2 className="text-xl font-semibold text-gray-800">Damage History</h2>
// //                 <div className="flex space-x-2">
// //                   <button
// //                     onClick={() => setTimeframe("all")}
// //                     className={`px-3 py-1 rounded-md text-sm ${
// //                       timeframe === "all" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
// //                     }`}
// //                   >
// //                     All Time
// //                   </button>
// //                   <button
// //                     onClick={() => setTimeframe("month")}
// //                     className={`px-3 py-1 rounded-md text-sm ${
// //                       timeframe === "month" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
// //                     }`}
// //                   >
// //                     Last Month
// //                   </button>
// //                   <button
// //                     onClick={() => setTimeframe("week")}
// //                     className={`px-3 py-1 rounded-md text-sm ${
// //                       timeframe === "week" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
// //                     }`}
// //                   >
// //                     Last Week
// //                   </button>
// //                 </div>
// //               </div>

// //               {!Array.isArray(filteredDamageItems) || filteredDamageItems.length === 0 ? (
// //                 <div className="text-center py-8">
// //                   <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
// //                   </svg>
// //                   <p className="mt-4 text-gray-600">No damage reports found</p>
// //                 </div>
// //               ) : (
// //                 <div className="overflow-x-auto">
// //                   <table className="min-w-full divide-y divide-gray-200">
// //                     <thead className="bg-gray-50">
// //                       <tr>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value Loss</th>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
// //                       </tr>
// //                     </thead>
// //                     <tbody className="bg-white divide-y divide-gray-200">
// //                       {filteredDamageItems.map((item, index) => {
// //                         // Calculate value loss
// //                         const product = products.find((p) => p._id === item.productId);
// //                         const valuePerUnit = product ? parseFloat(product.cost_price || product.price || 0) : 0;
// //                         const valueLoss = parseInt(item.quantity || 0) * valuePerUnit;

// //                         return (
// //                           <motion.tr
// //                             key={item._id || index}
// //                             initial={{ opacity: 0, y: 10 }}
// //                             animate={{ opacity: 1, y: 0 }}
// //                             transition={{ duration: 0.3, delay: index * 0.05 }}
// //                             className="hover:bg-gray-50"
// //                           >
// //                             <td className="px-6 py-4 whitespace-nowrap">
// //                               <div className="font-medium text-gray-900">{item.product_name}</div>
// //                             </td>
// //                             <td className="px-6 py-4 whitespace-nowrap">
// //                               <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
// //                                 {item.quantity}
// //                               </span>
// //                             </td>
// //                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${valueLoss.toFixed(2)}</td>
// //                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(item.date)}</td>
// //                             <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{item.reason}</td>
// //                           </motion.tr>
// //                         );
// //                       })}
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               )}
// //             </motion.div>
// //           )}

// //           {!loading && activeTab === "stats" && (
// //             <motion.div
// //               key="stats"
// //               initial={{ opacity: 0, x: 20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               exit={{ opacity: 0, x: -20 }}
// //               transition={{ duration: 0.3 }}
// //               className="bg-white rounded-lg shadow-lg p-6"
// //             >
// //               <div className="flex justify-between items-center mb-6">
// //                 <h2 className="text-xl font-semibold text-gray-800">Damage Statistics</h2>
// //                 <div className="flex space-x-2">
// //                   <button
// //                     onClick={() => setTimeframe("all")}
// //                     className={`px-3 py-1 rounded-md text-sm ${
// //                       timeframe === "all" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
// //                     }`}
// //                   >
// //                     All Time
// //                   </button>
// //                   <button
// //                     onClick={() => setTimeframe("month")}
// //                     className={`px-3 py-1 rounded-md text-sm ${
// //                       timeframe === "month" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
// //                     }`}
// //                   >
// //                     Last Month
// //                   </button>
// //                   <button
// //                     onClick={() => setTimeframe("week")}
// //                     className={`px-3 py-1 rounded-md text-sm ${
// //                       timeframe === "week" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
// //                     }`}
// //                   >
// //                     Last Week
// //                   </button>
// //                 </div>
// //               </div>

// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //                 <motion.div
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ duration: 0.5, delay: 0.1 }}
// //                   className="bg-blue-50 border border-blue-100 rounded-lg p-4 shadow-sm"
// //                 >
// //                   <h3 className="text-blue-800 font-medium mb-2">Total Items Damaged</h3>
// //                   <p className="text-3xl font-bold text-blue-600">{calculateTotalDamagedItems()}</p>
// //                 </motion.div>

// //                 <motion.div
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ duration: 0.5, delay: 0.2 }}
// //                   className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 shadow-sm"
// //                 >
// //                   <h3 className="text-indigo-800 font-medium mb-2">Products Affected</h3>
// //                   <p className="text-3xl font-bold text-indigo-600">{getProductsAffectedCount()}</p>
// //                 </motion.div>

// //                 <motion.div
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ duration: 0.5, delay: 0.3 }}
// //                   className="bg-purple-50 border border-purple-100 rounded-lg p-4 shadow-sm"
// //                 >
// //                   <h3 className="text-purple-800 font-medium mb-2">Estimated Cost Loss</h3>
// //                   <p className="text-3xl font-bold text-purple-600">${calculateTotalDamageValue()}</p>
// //                 </motion.div>
// //               </div>

// //               {Array.isArray(filteredDamageItems) && filteredDamageItems.length > 0 && (
// //                 <div className="mt-8">
// //                   <h3 className="text-lg font-medium mb-4 text-gray-800">Most Damaged Products</h3>
// //                   <div className="overflow-x-auto">
// //                     <table className="min-w-full divide-y divide-gray-200">
// //                       <thead className="bg-gray-50">
// //                         <tr>
// //                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
// //                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Damaged</th>
// //                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Incidents</th>
// //                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value Loss</th>
// //                         </tr>
// //                       </thead>
// //                       <tbody className="bg-white divide-y divide-gray-200">
// //                         {getMostDamagedProducts().map((product, index) => (
// //                           <motion.tr
// //                             key={product.id}
// //                             initial={{ opacity: 0 }}
// //                             animate={{ opacity: 1 }}
// //                             transition={{ duration: 0.3, delay: index * 0.1 }}
// //                             className="hover:bg-gray-50"
// //                           >
// //                             <td className="px-6 py-4 whitespace-nowrap">
// //                               <div className="font-medium text-gray-900">{product.name}</div>
// //                             </td>
// //                             <td className="px-6 py-4 whitespace-nowrap">
// //                               <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
// //                                 {product.total}
// //                               </span>
// //                             </td>
// //                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.incidents}</td>
// //                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${product.value.toFixed(2)}</td>
// //                           </motion.tr>
// //                         ))}
// //                       </tbody>
// //                     </table>
// //                   </div>
// //                 </div>
// //               )}
// //             </motion.div>
// //           )}

// //           {!loading && activeTab === "analytics" && (
// //             <motion.div
// //               key="analytics"
// //               initial={{ opacity: 0, x: 20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               exit={{ opacity: 0, x: -20 }}
// //               transition={{ duration: 0.3 }}
// //               className="bg-white rounded-lg shadow-lg p-6"
// //             >
// //               <h2 className="text-xl font-semibold mb-6 text-gray-800">Damage Analytics</h2>

// //               {/* Damage Trend Chart */}
// //               <div className="mb-8">
// //                 <h3 className="text-lg font-medium mb-4 text-gray-800">Damage Trend Over Time</h3>
// //                 <ResponsiveContainer width="100%" height={300}>
// //                   <BarChart data={getDamageTrendData()}>
// //                     <CartesianGrid strokeDasharray="3 3" />
// //                     <XAxis dataKey="month" />
// //                     <YAxis />
// //                     <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
// //                     <Legend />
// //                     <Bar dataKey="value" name="Value Loss" fill="#8884d8" />
// //                     <Bar dataKey="quantity" name="Damaged Quantity" fill="#82ca9d" />
// //                   </BarChart>
// //                 </ResponsiveContainer>
// //               </div>

// //               {/* Damage Reasons Pie Chart */}
// //               <div className="mb-8">
// //                 <h3 className="text-lg font-medium mb-4 text-gray-800">Damage Reasons</h3>
// //                 <ResponsiveContainer width="100%" height={300}>
// //                   <PieChart>
// //                     <Pie
// //                       data={getDamageReasonData()}
// //                       dataKey="quantity"
// //                       nameKey="reason"
// //                       cx="50%"
// //                       cy="50%"
// //                       outerRadius={100}
// //                       fill="#8884d8"
// //                       label
// //                     >
// //                       {getDamageReasonData().map((entry, index) => (
// //                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// //                       ))}
// //                     </Pie>
// //                     <Tooltip formatter={(value) => `${value} units`} />
// //                     <Legend />
// //                   </PieChart>
// //                 </ResponsiveContainer>
// //               </div>

// //               {/* Most Damaged Products Bar Chart */}
// //               <div>
// //                 <h3 className="text-lg font-medium mb-4 text-gray-800">Most Damaged Products</h3>
// //                 <ResponsiveContainer width="100%" height={300}>
// //                   <BarChart data={getMostDamagedProducts()}>
// //                     <CartesianGrid strokeDasharray="3 3" />
// //                     <XAxis dataKey="name" />
// //                     <YAxis />
// //                     <Tooltip formatter={(value) => `${value} units`} />
// //                     <Legend />
// //                     <Bar dataKey="total" name="Total Damaged" fill="#0088FE" />
// //                     <Bar dataKey="value" name="Value Loss" fill="#00C49F" />
// //                   </BarChart>
// //                 </ResponsiveContainer>
// //               </div>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DamageItemsManagement;
// import React, { useEffect, useState, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// const DamageItemsManagement = () => {
//   const [products, setProducts] = useState([]);
//   const [damageItems, setDamageItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState("report");
//   const [damageItem, setDamageItem] = useState({
//     productId: "",
//     quantity: "",
//     reason: "",
//     date: new Date().toISOString().split("T")[0],
//   });
//   const [submitStatus, setSubmitStatus] = useState({ show: false, success: false, message: "" });
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [timeframe, setTimeframe] = useState("all"); // all, month, week

//   const storeId = localStorage.getItem("storeId") || "STORE-1737889146-4514"; // Default to your store ID
//   const API_BASE_URL = "http://localhost:5000";

//   // Fetch data (products and damage items) from backend
//   useEffect(() => {
//     if (!storeId) return;
//     fetchData();
//   }, [storeId]);

//   const fetchData = async () => {
//     try {
//       setLoading(true);

//       // Fetch products
//       const productsResponse = await fetch(`${API_BASE_URL}/products?storeId=${storeId}`);
//       const productsData = await productsResponse.json();
//       setProducts(productsData);

//       // Fetch damage items
//       const damageResponse = await fetch(`${API_BASE_URL}/damage-items?storeId=${storeId}`);
//       const damageData = await damageResponse.json();

//       // Ensure damageItems is always an array
//       if (Array.isArray(damageData)) {
//         setDamageItems(damageData);
//       } else {
//         console.warn("Damage items response is not an array:", damageData);
//         setDamageItems([]);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setDamageItems([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDamageItem({ ...damageItem, [name]: value });

//     if (name === "productId" && value) {
//       const product = products.find((p) => p._id === value);
//       setSelectedProduct(product);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!damageItem.productId || !damageItem.quantity || !damageItem.reason) {
//       showStatus(false, "Please fill all required fields");
//       return;
//     }

//     if (selectedProduct && parseInt(damageItem.quantity) > parseInt(selectedProduct.quantity)) {
//       showStatus(false, "Cannot record damage quantity greater than available stock");
//       return;
//     }

//     try {
//       setLoading(true);
//       const response = await fetch(`${API_BASE_URL}/damage-items?storeId=${storeId}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(damageItem),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         showStatus(true, "Damage item recorded successfully!");
//         await fetchData();
//         setDamageItem({
//           productId: "",
//           quantity: "",
//           reason: "",
//           date: new Date().toISOString().split("T")[0],
//         });
//         setSelectedProduct(null);
//       } else {
//         showStatus(false, data.error || "Error saving damage item");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       showStatus(false, "Network error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const showStatus = (success, message) => {
//     setSubmitStatus({ show: true, success, message });
//     setTimeout(() => setSubmitStatus({ show: false, success: false, message: "" }), 4000);
//   };

//   // Format date for display
//   const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "long", day: "numeric" };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   // Filter damage items based on timeframe
//   const filteredDamageItems = useMemo(() => {
//     if (!Array.isArray(damageItems) || damageItems.length === 0) return [];
//     if (timeframe === "all") return damageItems;

//     const now = new Date();
//     let startDate;

//     if (timeframe === "week") {
//       startDate = new Date(now);
//       startDate.setDate(now.getDate() - 7);
//     } else if (timeframe === "month") {
//       startDate = new Date(now);
//       startDate.setMonth(now.getMonth() - 1);
//     }

//     return damageItems.filter((item) => {
//       const itemDate = new Date(item.date);
//       return itemDate >= startDate;
//     });
//   }, [damageItems, timeframe]);

//   // Calculate total damaged items value using purchase_price
//   const calculateTotalDamageValue = () => {
//     if (!Array.isArray(filteredDamageItems) || filteredDamageItems.length === 0) return "0.00";

//     return filteredDamageItems
//       .reduce((total, item) => {
//         const product = products.find((p) => p._id === item.productId);
//         if (product) {
//           // Use purchase_price if available, fallback to sale_price, then 0
//           const price = parseFloat(product.purchase_price || product.sale_price || 0);
//           return total + parseInt(item.quantity) * price;
//         }
//         return total;
//       }, 0)
//       .toFixed(2);
//   };

//   // Calculate total damaged items
//   const calculateTotalDamagedItems = () => {
//     if (!Array.isArray(filteredDamageItems) || filteredDamageItems.length === 0) return 0;
//     return filteredDamageItems.reduce((total, item) => total + parseInt(item.quantity || 0), 0);
//   };

//   // Get unique products affected
//   const getProductsAffectedCount = () => {
//     if (!Array.isArray(filteredDamageItems) || filteredDamageItems.length === 0) return 0;
//     const uniqueProductIds = new Set(filteredDamageItems.map((item) => item.productId));
//     return uniqueProductIds.size;
//   };

//   // Generate most damaged products summary
//   const getMostDamagedProducts = () => {
//     if (!Array.isArray(filteredDamageItems) || filteredDamageItems.length === 0) return [];

//     const productSummary = filteredDamageItems.reduce((acc, item) => {
//       if (!acc[item.productId]) {
//         acc[item.productId] = {
//           name: item.product_name,
//           id: item.productId,
//           total: 0,
//           incidents: 0,
//           value: 0,
//         };
//       }

//       const quantity = parseInt(item.quantity || 0);
//       acc[item.productId].total += quantity;
//       acc[item.productId].incidents += 1;

//       const product = products.find((p) => p._id === item.productId);
//       if (product) {
//         const price = parseFloat(product.purchase_price || product.sale_price || 0);
//         acc[item.productId].value += quantity * price;
//       }

//       return acc;
//     }, {});

//     return Object.values(productSummary)
//       .sort((a, b) => b.total - a.total)
//       .slice(0, 5);
//   };

//   // Generate data for damage reasons chart
//   const getDamageReasonData = () => {
//     if (!Array.isArray(filteredDamageItems) || filteredDamageItems.length === 0) return [];

//     const reasonSummary = filteredDamageItems.reduce((acc, item) => {
//       const reason = item.reason.trim();
//       if (!acc[reason]) {
//         acc[reason] = {
//           reason: reason.length > 20 ? reason.substring(0, 20) + "..." : reason,
//           count: 0,
//           quantity: 0,
//         };
//       }

//       acc[reason].count += 1;
//       acc[reason].quantity += parseInt(item.quantity || 0);
//       return acc;
//     }, {});

//     return Object.values(reasonSummary)
//       .sort((a, b) => b.quantity - a.quantity)
//       .slice(0, 6);
//   };

//   // Generate damage trend data by month
//   const getDamageTrendData = () => {
//     if (!Array.isArray(damageItems) || damageItems.length === 0) return [];

//     const monthlyData = {};

//     damageItems.forEach((item) => {
//       const date = new Date(item.date);
//       const monthYear = `${date.getFullYear()}-${date.getMonth() + 1}`;

//       if (!monthlyData[monthYear]) {
//         monthlyData[monthYear] = {
//           month: new Date(date.getFullYear(), date.getMonth(), 1).toLocaleDateString("en-US", {
//             month: "short",
//             year: "numeric",
//           }),
//           count: 0,
//           quantity: 0,
//           value: 0,
//         };
//       }

//       const quantity = parseInt(item.quantity || 0);
//       monthlyData[monthYear].count += 1;
//       monthlyData[monthYear].quantity += quantity;

//       const product = products.find((p) => p._id === item.productId);
//       if (product) {
//         const price = parseFloat(product.purchase_price || product.sale_price || 0);
//         monthlyData[monthYear].value += quantity * price;
//       }
//     });

//     return Object.values(monthlyData).sort((a, b) => {
//       const [aMonth, aYear] = a.month.split(" ");
//       const [bMonth, bYear] = b.month.split(" ");
//       if (aYear !== bYear) return aYear - bYear;

//       const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//       return months.indexOf(aMonth) - months.indexOf(bMonth);
//     });
//   };

//   // Chart colors
//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"];

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       {/* Main Container */}
//       <div className="max-w-6xl mx-auto">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-6 mb-8 text-white"
//         >
//           <h1 className="text-3xl font-bold">Damage Items Management</h1>
//           <p className="mt-2 opacity-90">Track and manage damaged inventory items</p>
//         </motion.div>

//         {/* Status Notification */}
//         <AnimatePresence>
//           {submitStatus.show && (
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className={`mb-6 p-4 rounded-lg shadow ${
//                 submitStatus.success ? "bg-green-100 border-l-4 border-green-500" : "bg-red-100 border-l-4 border-red-500"
//               }`}
//             >
//               <div className="flex items-center">
//                 {submitStatus.success ? (
//                   <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                 ) : (
//                   <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                   </svg>
//                 )}
//                 <p className={submitStatus.success ? "text-green-700" : "text-red-700"}>{submitStatus.message}</p>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Tabs Navigation */}
//         <div className="mb-6 flex border-b">
//           <button
//             onClick={() => setActiveTab("report")}
//             className={`px-4 py-2 font-medium ${
//               activeTab === "report" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-500"
//             }`}
//           >
//             Report Damage
//           </button>
//           <button
//             onClick={() => setActiveTab("history")}
//             className={`px-4 py-2 font-medium ${
//               activeTab === "history" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-500"
//             }`}
//           >
//             Damage History
//           </button>
//           <button
//             onClick={() => setActiveTab("stats")}
//             className={`px-4 py-2 font-medium ${
//               activeTab === "stats" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-500"
//             }`}
//           >
//             Statistics
//           </button>
//           <button
//             onClick={() => setActiveTab("analytics")}
//             className={`px-4 py-2 font-medium ${
//               activeTab === "analytics" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-500"
//             }`}
//           >
//             Analytics
//           </button>
//         </div>

//         {/* Loading Indicator */}
//         {loading && (
//           <div className="flex justify-center my-12">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//           </div>
//         )}

//         {/* Tab Content */}
//         <AnimatePresence mode="wait">
//           {!loading && activeTab === "report" && (
//             <motion.div
//               key="report"
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-lg shadow-lg p-6"
//             >
//               <h2 className="text-xl font-semibold mb-6 text-gray-800">Report Damaged Items</h2>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {/* Product Selection */}
//                   <div className="space-y-2">
//                     <label className="block text-gray-700 font-medium">Select Product *</label>
//                     <select
//                       name="productId"
//                       value={damageItem.productId}
//                       onChange={handleChange}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                       required
//                     >
//                       <option value="">-- Select a Product --</option>
//                       {products.map((product) => (
//                         <option key={product._id} value={product._id}>
//                           {product.product_name} (Stock: {product.quantity})
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   {/* Quantity */}
//                   <div className="space-y-2">
//                     <label className="block text-gray-700 font-medium">Damage Quantity *</label>
//                     <input
//                       type="number"
//                       name="quantity"
//                       value={damageItem.quantity}
//                       onChange={handleChange}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                       min="1"
//                       required
//                     />
//                     {selectedProduct && damageItem.quantity && parseInt(damageItem.quantity) > parseInt(selectedProduct.quantity) && (
//                       <p className="text-red-500 text-sm mt-1">
//                         Quantity exceeds available stock ({selectedProduct.quantity})
//                       </p>
//                     )}
//                   </div>

//                   {/* Date */}
//                   <div className="space-y-2">
//                     <label className="block text-gray-700 font-medium">Damage Date *</label>
//                     <input
//                       type="date"
//                       name="date"
//                       value={damageItem.date}
//                       onChange={handleChange}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                       required
//                     />
//                   </div>

//                   {/* Product Info Card */}
//                   {selectedProduct && (
//                     <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
//                       <h3 className="font-medium text-blue-800">Selected Product</h3>
//                       <div className="mt-2 space-y-1">
//                         <p><span className="font-medium">Name:</span> {selectedProduct.product_name}</p>
//                         <p><span className="font-medium">Current Stock:</span> {selectedProduct.quantity}</p>
//                         {selectedProduct.purchase_price && (
//                           <p><span className="font-medium">Purchase Price:</span> ₹{parseFloat(selectedProduct.purchase_price).toFixed(2)}</p>
//                         )}
//                         {selectedProduct.sale_price && (
//                           <p><span className="font-medium">Selling Price:</span> ₹{parseFloat(selectedProduct.sale_price).toFixed(2)}</p>
//                         )}
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Reason */}
//                 <div className="space-y-2">
//                   <label className="block text-gray-700 font-medium">Reason for Damage *</label>
//                   <textarea
//                     name="reason"
//                     value={damageItem.reason}
//                     onChange={handleChange}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                     rows="4"
//                     required
//                   ></textarea>
//                 </div>

//                 {/* Submit Button */}
//                 <motion.button
//                   type="submit"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-lg font-medium shadow hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//                 >
//                   Submit Damage Report
//                 </motion.button>
//               </form>
//             </motion.div>
//           )}

//           {!loading && activeTab === "history" && (
//             <motion.div
//               key="history"
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-lg shadow-lg p-6"
//             >
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-xl font-semibold text-gray-800">Damage History</h2>
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={() => setTimeframe("all")}
//                     className={`px-3 py-1 rounded-md text-sm ${
//                       timeframe === "all" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
//                     }`}
//                   >
//                     All Time
//                   </button>
//                   <button
//                     onClick={() => setTimeframe("month")}
//                     className={`px-3 py-1 rounded-md text-sm ${
//                       timeframe === "month" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
//                     }`}
//                   >
//                     Last Month
//                   </button>
//                   <button
//                     onClick={() => setTimeframe("week")}
//                     className={`px-3 py-1 rounded-md text-sm ${
//                       timeframe === "week" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
//                     }`}
//                   >
//                     Last Week
//                   </button>
//                 </div>
//               </div>

//               {!Array.isArray(filteredDamageItems) || filteredDamageItems.length === 0 ? (
//                 <div className="text-center py-8">
//                   <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
//                   </svg>
//                   <p className="mt-4 text-gray-600">No damage reports found</p>
//                 </div>
//               ) : (
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value Loss</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {filteredDamageItems.map((item, index) => {
//                         const product = products.find((p) => p._id === item.productId);
//                         const valuePerUnit = product ? parseFloat(product.purchase_price || product.sale_price || 0) : 0;
//                         const valueLoss = parseInt(item.quantity || 0) * valuePerUnit;

//                         return (
//                           <motion.tr
//                             key={item._id || index}
//                             initial={{ opacity: 0, y: 10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.3, delay: index * 0.05 }}
//                             className="hover:bg-gray-50"
//                           >
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <div className="font-medium text-gray-900">{item.product_name}</div>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
//                                 {item.quantity}
//                               </span>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{valueLoss.toFixed(2)}</td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(item.date)}</td>
//                             <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{item.reason}</td>
//                           </motion.tr>
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </motion.div>
//           )}

//           {!loading && activeTab === "stats" && (
//             <motion.div
//               key="stats"
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-lg shadow-lg p-6"
//             >
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-xl font-semibold text-gray-800">Damage Statistics</h2>
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={() => setTimeframe("all")}
//                     className={`px-3 py-1 rounded-md text-sm ${
//                       timeframe === "all" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
//                     }`}
//                   >
//                     All Time
//                   </button>
//                   <button
//                     onClick={() => setTimeframe("month")}
//                     className={`px-3 py-1 rounded-md text-sm ${
//                       timeframe === "month" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
//                     }`}
//                   >
//                     Last Month
//                   </button>
//                   <button
//                     onClick={() => setTimeframe("week")}
//                     className={`px-3 py-1 rounded-md text-sm ${
//                       timeframe === "week" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
//                     }`}
//                   >
//                     Last Week
//                   </button>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.1 }}
//                   className="bg-blue-50 border border-blue-100 rounded-lg p-4 shadow-sm"
//                 >
//                   <h3 className="text-blue-800 font-medium mb-2">Total Items Damaged</h3>
//                   <p className="text-3xl font-bold text-blue-600">{calculateTotalDamagedItems()}</p>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                   className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 shadow-sm"
//                 >
//                   <h3 className="text-indigo-800 font-medium mb-2">Products Affected</h3>
//                   <p className="text-3xl font-bold text-indigo-600">{getProductsAffectedCount()}</p>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.3 }}
//                   className="bg-purple-50 border border-purple-100 rounded-lg p-4 shadow-sm"
//                 >
//                   <h3 className="text-purple-800 font-medium mb-2">Estimated Cost Loss</h3>
//                   <p className="text-3xl font-bold text-purple-600">₹{calculateTotalDamageValue()}</p>
//                 </motion.div>
//               </div>

//               {Array.isArray(filteredDamageItems) && filteredDamageItems.length > 0 && (
//                 <div className="mt-8">
//                   <h3 className="text-lg font-medium mb-4 text-gray-800">Most Damaged Products</h3>
//                   <div className="overflow-x-auto">
//                     <table className="min-w-full divide-y divide-gray-200">
//                       <thead className="bg-gray-50">
//                         <tr>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Damaged</th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Incidents</th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value Loss</th>
//                         </tr>
//                       </thead>
//                       <tbody className="bg-white divide-y divide-gray-200">
//                         {getMostDamagedProducts().map((product, index) => (
//                           <motion.tr
//                             key={product.id}
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ duration: 0.3, delay: index * 0.1 }}
//                             className="hover:bg-gray-50"
//                           >
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <div className="font-medium text-gray-900">{product.name}</div>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
//                                 {product.total}
//                               </span>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.incidents}</td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{product.value.toFixed(2)}</td>
//                           </motion.tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               )}
//             </motion.div>
//           )}

//           {!loading && activeTab === "analytics" && (
//             <motion.div
//               key="analytics"
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-lg shadow-lg p-6"
//             >
//               <h2 className="text-xl font-semibold mb-6 text-gray-800">Damage Analytics</h2>

//               {/* Damage Trend Chart */}
//               <div className="mb-8">
//                 <h3 className="text-lg font-medium mb-4 text-gray-800">Damage Trend Over Time</h3>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <BarChart data={getDamageTrendData()}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="month" />
//                     <YAxis />
//                     <Tooltip formatter={(value) => `₹${value.toFixed(2)}`} />
//                     <Legend />
//                     <Bar dataKey="value" name="Value Loss" fill="#8884d8" />
//                     <Bar dataKey="quantity" name="Damaged Quantity" fill="#82ca9d" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>

//               {/* Damage Reasons Pie Chart */}
//               <div className="mb-8">
//                 <h3 className="text-lg font-medium mb-4 text-gray-800">Damage Reasons</h3>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <PieChart>
//                     <Pie
//                       data={getDamageReasonData()}
//                       dataKey="quantity"
//                       nameKey="reason"
//                       cx="50%"
//                       cy="50%"
//                       outerRadius={100}
//                       fill="#8884d8"
//                       label
//                     >
//                       {getDamageReasonData().map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                       ))}
//                     </Pie>
//                     <Tooltip formatter={(value) => `${value} units`} />
//                     <Legend />
//                   </PieChart>
//                 </ResponsiveContainer>
//               </div>

//               {/* Most Damaged Products Bar Chart */}
//               <div>
//                 <h3 className="text-lg font-medium mb-4 text-gray-800">Most Damaged Products</h3>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <BarChart data={getMostDamagedProducts()}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip formatter={(value) => `₹${value.toFixed(2)}`} />
//                     <Legend />
//                     <Bar dataKey="total" name="Total Damaged" fill="#0088FE" />
//                     <Bar dataKey="value" name="Value Loss" fill="#00C49F" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default DamageItemsManagement;

import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const DamageItemsManagement = () => {
  const [products, setProducts] = useState([]);
  const [damageItems, setDamageItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("report");
  const [damageItem, setDamageItem] = useState({
    productId: "",
    quantity: "",
    reason: "",
    date: new Date().toISOString().split("T")[0],
  });
  const [submitStatus, setSubmitStatus] = useState({ show: false, success: false, message: "" });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [timeframe, setTimeframe] = useState("all");

  const storeId = localStorage.getItem("storeId") || "STORE-1737889146-4514";
  const API_BASE_URL = "http://localhost:5000";

  useEffect(() => {
    if (!storeId) return;
    fetchData();
  }, [storeId]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const productsResponse = await fetch(`${API_BASE_URL}/products?storeId=${storeId}`);
      const productsData = await productsResponse.json();
      setProducts(productsData);

      const damageResponse = await fetch(`${API_BASE_URL}/damage-items?storeId=${storeId}`);
      const damageData = await damageResponse.json();
      if (Array.isArray(damageData)) {
        setDamageItems(damageData);
      } else {
        console.warn("Damage items response is not an array:", damageData);
        setDamageItems([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setDamageItems([]);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDamageItem({ ...damageItem, [name]: value });
    if (name === "productId" && value) {
      const product = products.find((p) => p._id === value);
      setSelectedProduct(product);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!damageItem.productId || !damageItem.quantity || !damageItem.reason) {
      showStatus(false, "Please fill all required fields");
      return;
    }
    if (selectedProduct && parseInt(damageItem.quantity) > parseInt(selectedProduct.quantity)) {
      showStatus(false, "Cannot record damage quantity greater than available stock");
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/damage-items?storeId=${storeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(damageItem),
      });
      const data = await response.json();
      if (response.ok) {
        showStatus(true, "Damage item recorded successfully!");
        await fetchData();
        setDamageItem({
          productId: "",
          quantity: "",
          reason: "",
          date: new Date().toISOString().split("T")[0],
        });
        setSelectedProduct(null);
      } else {
        showStatus(false, data.error || "Error saving damage item");
      }
    } catch (error) {
      console.error("Error:", error);
      showStatus(false, "Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const showStatus = (success, message) => {
    setSubmitStatus({ show: true, success, message });
    setTimeout(() => setSubmitStatus({ show: false, success: false, message: "" }), 4000);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const filteredDamageItems = useMemo(() => {
    if (!Array.isArray(damageItems) || damageItems.length === 0) return [];
    if (timeframe === "all") return damageItems;

    const now = new Date();
    let startDate;
    if (timeframe === "week") {
      startDate = new Date(now);
      startDate.setDate(now.getDate() - 7);
    } else if (timeframe === "month") {
      startDate = new Date(now);
      startDate.setMonth(now.getMonth() - 1);
    }
    return damageItems.filter((item) => new Date(item.date) >= startDate);
  }, [damageItems, timeframe]);

  const calculateTotalDamageValue = () => {
    if (!Array.isArray(filteredDamageItems) || filteredDamageItems.length === 0) return "0.00";
    return filteredDamageItems
      .reduce((total, item) => {
        const product = products.find((p) => p._id === item.productId);
        const price = product ? parseFloat(product.purchase_price || product.sale_price || 0) : 0;
        return total + parseInt(item.quantity) * price;
      }, 0)
      .toFixed(2);
  };

  const calculateTotalDamagedItems = () => {
    if (!Array.isArray(filteredDamageItems) || filteredDamageItems.length === 0) return 0;
    return filteredDamageItems.reduce((total, item) => total + parseInt(item.quantity || 0), 0);
  };

  const getProductsAffectedCount = () => {
    if (!Array.isArray(filteredDamageItems) || filteredDamageItems.length === 0) return 0;
    const uniqueProductIds = new Set(filteredDamageItems.map((item) => item.productId));
    return uniqueProductIds.size;
  };

  // Fixed: Most Damaged Products
  const getMostDamagedProducts = () => {
    if (!Array.isArray(filteredDamageItems) || filteredDamageItems.length === 0) return [];

    const productSummary = filteredDamageItems.reduce((acc, item) => {
      const productId = item.productId;
      const product = products.find((p) => p._id === productId);
      const productName = item.product_name || (product ? product.product_name : "Unknown Product");

      if (!acc[productId]) {
        acc[productId] = {
          name: productName,
          id: productId,
          total: 0,
          incidents: 0,
          value: 0,
        };
      }

      const quantity = parseInt(item.quantity || 0);
      acc[productId].total += quantity;
      acc[productId].incidents += 1;

      const price = product ? parseFloat(product.purchase_price || product.sale_price || 0) : 0;
      acc[productId].value += quantity * price;

      return acc;
    }, {});

    return Object.values(productSummary)
      .sort((a, b) => b.total - a.total) // Sort by total damaged quantity
      .slice(0, 5); // Top 5
  };

  const getDamageReasonData = () => {
    if (!Array.isArray(filteredDamageItems) || filteredDamageItems.length === 0) return [];
    const reasonSummary = filteredDamageItems.reduce((acc, item) => {
      const reason = item.reason.trim();
      if (!acc[reason]) {
        acc[reason] = {
          reason: reason.length > 20 ? reason.substring(0, 20) + "..." : reason,
          count: 0,
          quantity: 0,
        };
      }
      acc[reason].count += 1;
      acc[reason].quantity += parseInt(item.quantity || 0);
      return acc;
    }, {});
    return Object.values(reasonSummary)
      .sort((a, b) => b.quantity - a.quantity)
      .slice(0, 6);
  };

  const getDamageTrendData = () => {
    if (!Array.isArray(damageItems) || damageItems.length === 0) return [];
    const monthlyData = {};
    damageItems.forEach((item) => {
      const date = new Date(item.date);
      const monthYear = `${date.getFullYear()}-${date.getMonth() + 1}`;
      if (!monthlyData[monthYear]) {
        monthlyData[monthYear] = {
          month: new Date(date.getFullYear(), date.getMonth(), 1).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          }),
          count: 0,
          quantity: 0,
          value: 0,
        };
      }
      const quantity = parseInt(item.quantity || 0);
      monthlyData[monthYear].count += 1;
      monthlyData[monthYear].quantity += quantity;
      const product = products.find((p) => p._id === item.productId);
      const price = product ? parseFloat(product.purchase_price || product.sale_price || 0) : 0;
      monthlyData[monthYear].value += quantity * price;
    });
    return Object.values(monthlyData).sort((a, b) => {
      const [aMonth, aYear] = a.month.split(" ");
      const [bMonth, bYear] = b.month.split(" ");
      if (aYear !== bYear) return aYear - bYear;
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return months.indexOf(aMonth) - months.indexOf(bMonth);
    });
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-6 mb-8 text-white"
        >
          <h1 className="text-3xl font-bold">Damage Items Management</h1>
          <p className="mt-2 opacity-90">Track and manage damaged inventory items</p>
        </motion.div>

        <AnimatePresence>
          {submitStatus.show && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`mb-6 p-4 rounded-lg shadow ${
                submitStatus.success ? "bg-green-100 border-l-4 border-green-500" : "bg-red-100 border-l-4 border-red-500"
              }`}
            >
              <div className="flex items-center">
                {submitStatus.success ? (
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                )}
                <p className={submitStatus.success ? "text-green-700" : "text-red-700"}>{submitStatus.message}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mb-6 flex border-b">
          <button
            onClick={() => setActiveTab("report")}
            className={`px-4 py-2 font-medium ${
              activeTab === "report" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-500"
            }`}
          >
            Report Damage
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`px-4 py-2 font-medium ${
              activeTab === "history" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-500"
            }`}
          >
            Damage History
          </button>
          <button
            onClick={() => setActiveTab("stats")}
            className={`px-4 py-2 font-medium ${
              activeTab === "stats" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-500"
            }`}
          >
            Statistics
          </button>
          <button
            onClick={() => setActiveTab("analytics")}
            className={`px-4 py-2 font-medium ${
              activeTab === "analytics" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-500"
            }`}
          >
            Analytics
          </button>
        </div>

        {loading && (
          <div className="flex justify-center my-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {!loading && activeTab === "report" && (
            <motion.div
              key="report"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Report Damaged Items</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Select Product *</label>
                    <select
                      name="productId"
                      value={damageItem.productId}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    >
                      <option value="">-- Select a Product --</option>
                      {products.map((product) => (
                        <option key={product._id} value={product._id}>
                          {product.product_name} (Stock: {product.quantity})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Damage Quantity *</label>
                    <input
                      type="number"
                      name="quantity"
                      value={damageItem.quantity}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      min="1"
                      required
                    />
                    {selectedProduct && damageItem.quantity && parseInt(damageItem.quantity) > parseInt(selectedProduct.quantity) && (
                      <p className="text-red-500 text-sm mt-1">
                        Quantity exceeds available stock ({selectedProduct.quantity})
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Damage Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={damageItem.date}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    />
                  </div>
                  {selectedProduct && (
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h3 className="font-medium text-blue-800">Selected Product</h3>
                      <div className="mt-2 space-y-1">
                        <p><span className="font-medium">Name:</span> {selectedProduct.product_name}</p>
                        <p><span className="font-medium">Current Stock:</span> {selectedProduct.quantity}</p>
                        {selectedProduct.purchase_price && (
                          <p><span className="font-medium">Purchase Price:</span> ₹{parseFloat(selectedProduct.purchase_price).toFixed(2)}</p>
                        )}
                        {selectedProduct.sale_price && (
                          <p><span className="font-medium">Selling Price:</span> ₹{parseFloat(selectedProduct.sale_price).toFixed(2)}</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Reason for Damage *</label>
                  <textarea
                    name="reason"
                    value={damageItem.reason}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-lg font-medium shadow hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Submit Damage Report
                </motion.button>
              </form>
            </motion.div>
          )}

          {!loading && activeTab === "history" && (
            <motion.div
              key="history"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Damage History</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setTimeframe("all")}
                    className={`px-3 py-1 rounded-md text-sm ${
                      timeframe === "all" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    All Time
                  </button>
                  <button
                    onClick={() => setTimeframe("month")}
                    className={`px-3 py-1 rounded-md text-sm ${
                      timeframe === "month" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    Last Month
                  </button>
                  <button
                    onClick={() => setTimeframe("week")}
                    className={`px-3 py-1 rounded-md text-sm ${
                      timeframe === "week" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    Last Week
                  </button>
                </div>
              </div>
              {!Array.isArray(filteredDamageItems) || filteredDamageItems.length === 0 ? (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                  </svg>
                  <p className="mt-4 text-gray-600">No damage reports found</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value Loss</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredDamageItems.map((item, index) => {
                        const product = products.find((p) => p._id === item.productId);
                        const valuePerUnit = product ? parseFloat(product.purchase_price || product.sale_price || 0) : 0;
                        const valueLoss = parseInt(item.quantity || 0) * valuePerUnit;
                        return (
                          <motion.tr
                            key={item._id || index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="hover:bg-gray-50"
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="font-medium text-gray-900">{item.product_name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                {item.quantity}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{valueLoss.toFixed(2)}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(item.date)}</td>
                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{item.reason}</td>
                          </motion.tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </motion.div>
          )}

          {!loading && activeTab === "stats" && (
            <motion.div
              key="stats"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Damage Statistics</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setTimeframe("all")}
                    className={`px-3 py-1 rounded-md text-sm ${
                      timeframe === "all" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    All Time
                  </button>
                  <button
                    onClick={() => setTimeframe("month")}
                    className={`px-3 py-1 rounded-md text-sm ${
                      timeframe === "month" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    Last Month
                  </button>
                  <button
                    onClick={() => setTimeframe("week")}
                    className={`px-3 py-1 rounded-md text-sm ${
                      timeframe === "week" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    Last Week
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-blue-50 border border-blue-100 rounded-lg p-4 shadow-sm"
                >
                  <h3 className="text-blue-800 font-medium mb-2">Total Items Damaged</h3>
                  <p className="text-3xl font-bold text-blue-600">{calculateTotalDamagedItems()}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 shadow-sm"
                >
                  <h3 className="text-indigo-800 font-medium mb-2">Products Affected</h3>
                  <p className="text-3xl font-bold text-indigo-600">{getProductsAffectedCount()}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-purple-50 border border-purple-100 rounded-lg p-4 shadow-sm"
                >
                  <h3 className="text-purple-800 font-medium mb-2">Estimated Cost Loss</h3>
                  <p className="text-3xl font-bold text-purple-600">₹{calculateTotalDamageValue()}</p>
                </motion.div>
              </div>
              {Array.isArray(filteredDamageItems) && filteredDamageItems.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4 text-gray-800">Most Damaged Products</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Damaged</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Incidents</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value Loss</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {getMostDamagedProducts().map((product, index) => (
                          <motion.tr
                            key={product.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="hover:bg-gray-50"
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="font-medium text-gray-900">{product.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                {product.total}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.incidents}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{product.value.toFixed(2)}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {!loading && activeTab === "analytics" && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Damage Analytics</h2>
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4 text-gray-800">Damage Trend Over Time</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={getDamageTrendData()}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => `₹${value.toFixed(2)}`} />
                    <Legend />
                    <Bar dataKey="value" name="Value Loss" fill="#8884d8" />
                    <Bar dataKey="quantity" name="Damaged Quantity" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4 text-gray-800">Damage Reasons</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={getDamageReasonData()}
                      dataKey="quantity"
                      nameKey="reason"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      label
                    >
                      {getDamageReasonData().map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value} units`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4 text-gray-800">Most Damaged Products</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={getMostDamagedProducts()}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => `₹${value.toFixed(2)}`} />
                    <Legend />
                    <Bar dataKey="total" name="Total Damaged" fill="#0088FE" />
                    <Bar dataKey="value" name="Value Loss" fill="#00C49F" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DamageItemsManagement;