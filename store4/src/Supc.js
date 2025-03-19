// // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import { Search, Filter, Plus, Star, StarOff, X } from 'lucide-react';

// // // // // // // // // const Supc = () => {
// // // // // // // // //   // Sample supplier data
// // // // // // // // //   const [suppliers, setSuppliers] = useState([
// // // // // // // // //     { id: 1, name: 'Tech Solutions Inc.', location: 'San Francisco, USA', category: 'Electronics', rating: 4, active: true },
// // // // // // // // //     { id: 2, name: 'Fashion Forward Ltd.', location: 'Paris, France', category: 'Apparel', rating: 5, active: true },
// // // // // // // // //     { id: 3, name: 'Global Materials Co.', location: 'Tokyo, Japan', category: 'Raw Materials', rating: 3, active: true },
// // // // // // // // //     { id: 4, name: 'Quick Logistics', location: 'Berlin, Germany', category: 'Transportation', rating: 4, active: false },
// // // // // // // // //     { id: 5, name: 'Eco Packaging', location: 'Toronto, Canada', category: 'Packaging', rating: 2, active: true },
// // // // // // // // //   ]);
  
// // // // // // // // //   // States for search and filters
// // // // // // // // //   const [searchTerm, setSearchTerm] = useState('');
// // // // // // // // //   const [showFilters, setShowFilters] = useState(false);
// // // // // // // // //   const [filters, setFilters] = useState({
// // // // // // // // //     location: '',
// // // // // // // // //     category: '',
// // // // // // // // //     rating: 0,
// // // // // // // // //     active: null
// // // // // // // // //   });
  
// // // // // // // // //   // New supplier form state
// // // // // // // // //   const [showNewSupplierForm, setShowNewSupplierForm] = useState(false);
// // // // // // // // //   const [newSupplier, setNewSupplier] = useState({
// // // // // // // // //     name: '',
// // // // // // // // //     location: '',
// // // // // // // // //     category: '',
// // // // // // // // //     rating: 3,
// // // // // // // // //     active: true
// // // // // // // // //   });
  
// // // // // // // // //   // Categories for dropdown
// // // // // // // // //   const categories = ['Electronics', 'Apparel', 'Raw Materials', 'Transportation', 'Packaging', 'Food', 'Services'];
  
// // // // // // // // //   // Handle search
// // // // // // // // //   const handleSearch = (e) => {
// // // // // // // // //     setSearchTerm(e.target.value);
// // // // // // // // //   };
  
// // // // // // // // //   // Handle filter changes
// // // // // // // // //   const handleFilterChange = (field, value) => {
// // // // // // // // //     setFilters({
// // // // // // // // //       ...filters,
// // // // // // // // //       [field]: value
// // // // // // // // //     });
// // // // // // // // //   };
  
// // // // // // // // //   // Handle new supplier form changes
// // // // // // // // //   const handleNewSupplierChange = (field, value) => {
// // // // // // // // //     setNewSupplier({
// // // // // // // // //       ...newSupplier,
// // // // // // // // //       [field]: value
// // // // // // // // //     });
// // // // // // // // //   };
  
// // // // // // // // //   // Add new supplier
// // // // // // // // //   const handleAddSupplier = () => {
// // // // // // // // //     const id = suppliers.length > 0 ? Math.max(...suppliers.map(s => s.id)) + 1 : 1;
// // // // // // // // //     setSuppliers([...suppliers, { ...newSupplier, id }]);
// // // // // // // // //     setNewSupplier({
// // // // // // // // //       name: '',
// // // // // // // // //       location: '',
// // // // // // // // //       category: '',
// // // // // // // // //       rating: 3,
// // // // // // // // //       active: true
// // // // // // // // //     });
// // // // // // // // //     setShowNewSupplierForm(false);
// // // // // // // // //   };
  
// // // // // // // // //   // Filter suppliers based on search and filters
// // // // // // // // //   const filteredSuppliers = suppliers.filter(supplier => {
// // // // // // // // //     // Search filter
// // // // // // // // //     if (searchTerm && !supplier.name.toLowerCase().includes(searchTerm.toLowerCase())) {
// // // // // // // // //       return false;
// // // // // // // // //     }
    
// // // // // // // // //     // Location filter
// // // // // // // // //     if (filters.location && !supplier.location.toLowerCase().includes(filters.location.toLowerCase())) {
// // // // // // // // //       return false;
// // // // // // // // //     }
    
// // // // // // // // //     // Category filter
// // // // // // // // //     if (filters.category && supplier.category !== filters.category) {
// // // // // // // // //       return false;
// // // // // // // // //     }
    
// // // // // // // // //     // Rating filter
// // // // // // // // //     if (filters.rating > 0 && supplier.rating < filters.rating) {
// // // // // // // // //       return false;
// // // // // // // // //     }
    
// // // // // // // // //     // Active status filter
// // // // // // // // //     if (filters.active !== null && supplier.active !== filters.active) {
// // // // // // // // //       return false;
// // // // // // // // //     }
    
// // // // // // // // //     return true;
// // // // // // // // //   });
  
// // // // // // // // //   // Render star rating
// // // // // // // // //   const renderRating = (rating) => {
// // // // // // // // //     const stars = [];
// // // // // // // // //     for (let i = 1; i <= 5; i++) {
// // // // // // // // //       stars.push(
// // // // // // // // //         i <= rating ? 
// // // // // // // // //           <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" /> : 
// // // // // // // // //           <StarOff key={i} className="w-4 h-4 text-gray-300" />
// // // // // // // // //       );
// // // // // // // // //     }
// // // // // // // // //     return <div className="flex">{stars}</div>;
// // // // // // // // //   };
  
// // // // // // // // //   return (
// // // // // // // // //     <div className="bg-gray-50 min-h-screen p-6">
// // // // // // // // //       <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
// // // // // // // // //         <div className="p-6">
// // // // // // // // //           <h1 className="text-2xl font-bold text-gray-800 mb-6">Supplier Management</h1>
          
// // // // // // // // //           {/* Search and Action Bar */}
// // // // // // // // //           <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
// // // // // // // // //             <div className="relative flex-1">
// // // // // // // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // // // // // // //                 <Search className="h-5 w-5 text-gray-400" />
// // // // // // // // //               </div>
// // // // // // // // //               <input
// // // // // // // // //                 type="text"
// // // // // // // // //                 placeholder="Search suppliers..."
// // // // // // // // //                 className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
// // // // // // // // //                 value={searchTerm}
// // // // // // // // //                 onChange={handleSearch}
// // // // // // // // //               />
// // // // // // // // //             </div>
            
// // // // // // // // //             <div className="flex gap-2">
// // // // // // // // //               <button
// // // // // // // // //                 onClick={() => setShowFilters(!showFilters)}
// // // // // // // // //                 className="flex items-center gap-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors"
// // // // // // // // //               >
// // // // // // // // //                 <Filter className="h-5 w-5" />
// // // // // // // // //                 Filters
// // // // // // // // //               </button>
              
// // // // // // // // //               <button
// // // // // // // // //                 onClick={() => setShowNewSupplierForm(true)}
// // // // // // // // //                 className="flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
// // // // // // // // //               >
// // // // // // // // //                 <Plus className="h-5 w-5" />
// // // // // // // // //                 Add Supplier
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
          
// // // // // // // // //           {/* Filter Panel */}
// // // // // // // // //           {showFilters && (
// // // // // // // // //             <div className="bg-gray-50 p-4 rounded-lg mb-6">
// // // // // // // // //               <div className="flex justify-between items-center mb-4">
// // // // // // // // //                 <h2 className="text-lg font-semibold">Filters</h2>
// // // // // // // // //                 <button 
// // // // // // // // //                   onClick={() => setFilters({ location: '', category: '', rating: 0, active: null })}
// // // // // // // // //                   className="text-blue-600 hover:text-blue-800 text-sm font-medium"
// // // // // // // // //                 >
// // // // // // // // //                   Clear All
// // // // // // // // //                 </button>
// // // // // // // // //               </div>
              
// // // // // // // // //               <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// // // // // // // // //                 <div>
// // // // // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
// // // // // // // // //                   <input
// // // // // // // // //                     type="text"
// // // // // // // // //                     placeholder="City, Country"
// // // // // // // // //                     className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // // // //                     value={filters.location}
// // // // // // // // //                     onChange={(e) => handleFilterChange('location', e.target.value)}
// // // // // // // // //                   />
// // // // // // // // //                 </div>
                
// // // // // // // // //                 <div>
// // // // // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
// // // // // // // // //                   <select
// // // // // // // // //                     className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // // // //                     value={filters.category}
// // // // // // // // //                     onChange={(e) => handleFilterChange('category', e.target.value)}
// // // // // // // // //                   >
// // // // // // // // //                     <option value="">All Categories</option>
// // // // // // // // //                     {categories.map(category => (
// // // // // // // // //                       <option key={category} value={category}>{category}</option>
// // // // // // // // //                     ))}
// // // // // // // // //                   </select>
// // // // // // // // //                 </div>
                
// // // // // // // // //                 <div>
// // // // // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Rating</label>
// // // // // // // // //                   <select
// // // // // // // // //                     className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // // // //                     value={filters.rating}
// // // // // // // // //                     onChange={(e) => handleFilterChange('rating', parseInt(e.target.value))}
// // // // // // // // //                   >
// // // // // // // // //                     <option value="0">Any Rating</option>
// // // // // // // // //                     <option value="1">1+ Stars</option>
// // // // // // // // //                     <option value="2">2+ Stars</option>
// // // // // // // // //                     <option value="3">3+ Stars</option>
// // // // // // // // //                     <option value="4">4+ Stars</option>
// // // // // // // // //                     <option value="5">5 Stars</option>
// // // // // // // // //                   </select>
// // // // // // // // //                 </div>
                
// // // // // // // // //                 <div>
// // // // // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
// // // // // // // // //                   <select
// // // // // // // // //                     className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // // // //                     value={filters.active === null ? '' : filters.active ? 'active' : 'inactive'}
// // // // // // // // //                     onChange={(e) => {
// // // // // // // // //                       const value = e.target.value;
// // // // // // // // //                       handleFilterChange('active', value === '' ? null : value === 'active');
// // // // // // // // //                     }}
// // // // // // // // //                   >
// // // // // // // // //                     <option value="">All</option>
// // // // // // // // //                     <option value="active">Active</option>
// // // // // // // // //                     <option value="inactive">Inactive</option>
// // // // // // // // //                   </select>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           )}
          
// // // // // // // // //           {/* New Supplier Form */}
// // // // // // // // //           {showNewSupplierForm && (
// // // // // // // // //             <div className="border border-gray-200 rounded-lg p-4 mb-6">
// // // // // // // // //               <div className="flex justify-between items-center mb-4">
// // // // // // // // //                 <h2 className="text-lg font-semibold">Add New Supplier</h2>
// // // // // // // // //                 <button 
// // // // // // // // //                   onClick={() => setShowNewSupplierForm(false)}
// // // // // // // // //                   className="text-gray-500 hover:text-gray-700"
// // // // // // // // //                 >
// // // // // // // // //                   <X className="h-5 w-5" />
// // // // // // // // //                 </button>
// // // // // // // // //               </div>
              
// // // // // // // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// // // // // // // // //                 <div>
// // // // // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
// // // // // // // // //                   <input
// // // // // // // // //                     type="text"
// // // // // // // // //                     placeholder="Supplier name"
// // // // // // // // //                     className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // // // //                     value={newSupplier.name}
// // // // // // // // //                     onChange={(e) => handleNewSupplierChange('name', e.target.value)}
// // // // // // // // //                     required
// // // // // // // // //                   />
// // // // // // // // //                 </div>
                
// // // // // // // // //                 <div>
// // // // // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
// // // // // // // // //                   <input
// // // // // // // // //                     type="text"
// // // // // // // // //                     placeholder="City, Country"
// // // // // // // // //                     className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // // // //                     value={newSupplier.location}
// // // // // // // // //                     onChange={(e) => handleNewSupplierChange('location', e.target.value)}
// // // // // // // // //                     required
// // // // // // // // //                   />
// // // // // // // // //                 </div>
                
// // // // // // // // //                 <div>
// // // // // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
// // // // // // // // //                   <select
// // // // // // // // //                     className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // // // //                     value={newSupplier.category}
// // // // // // // // //                     onChange={(e) => handleNewSupplierChange('category', e.target.value)}
// // // // // // // // //                     required
// // // // // // // // //                   >
// // // // // // // // //                     <option value="" disabled>Select category</option>
// // // // // // // // //                     {categories.map(category => (
// // // // // // // // //                       <option key={category} value={category}>{category}</option>
// // // // // // // // //                     ))}
// // // // // // // // //                   </select>
// // // // // // // // //                 </div>
                
// // // // // // // // //                 <div>
// // // // // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
// // // // // // // // //                   <div className="flex items-center gap-2">
// // // // // // // // //                     {[1, 2, 3, 4, 5].map(rating => (
// // // // // // // // //                       <button
// // // // // // // // //                         key={rating}
// // // // // // // // //                         type="button"
// // // // // // // // //                         onClick={() => handleNewSupplierChange('rating', rating)}
// // // // // // // // //                         className="focus:outline-none"
// // // // // // // // //                       >
// // // // // // // // //                         {rating <= newSupplier.rating ? (
// // // // // // // // //                           <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
// // // // // // // // //                         ) : (
// // // // // // // // //                           <StarOff className="w-6 h-6 text-gray-300" />
// // // // // // // // //                         )}
// // // // // // // // //                       </button>
// // // // // // // // //                     ))}
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
                
// // // // // // // // //                 <div className="flex items-center">
// // // // // // // // //                   <label className="inline-flex items-center cursor-pointer">
// // // // // // // // //                     <input 
// // // // // // // // //                       type="checkbox" 
// // // // // // // // //                       checked={newSupplier.active}
// // // // // // // // //                       onChange={(e) => handleNewSupplierChange('active', e.target.checked)}
// // // // // // // // //                       className="sr-only peer"
// // // // // // // // //                     />
// // // // // // // // //                     <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
// // // // // // // // //                     <span className="ml-3 text-sm font-medium text-gray-700">Active Status</span>
// // // // // // // // //                   </label>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
              
// // // // // // // // //               <div className="flex justify-end">
// // // // // // // // //                 <button
// // // // // // // // //                   onClick={() => setShowNewSupplierForm(false)}
// // // // // // // // //                   className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg mr-2"
// // // // // // // // //                 >
// // // // // // // // //                   Cancel
// // // // // // // // //                 </button>
// // // // // // // // //                 <button
// // // // // // // // //                   onClick={handleAddSupplier}
// // // // // // // // //                   disabled={!newSupplier.name || !newSupplier.location || !newSupplier.category}
// // // // // // // // //                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
// // // // // // // // //                 >
// // // // // // // // //                   Add Supplier
// // // // // // // // //                 </button>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           )}
          
// // // // // // // // //           {/* Suppliers Table */}
// // // // // // // // //           <div className="overflow-x-auto">
// // // // // // // // //             <table className="min-w-full divide-y divide-gray-200">
// // // // // // // // //               <thead className="bg-gray-50">
// // // // // // // // //                 <tr>
// // // // // // // // //                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // // //                     Name
// // // // // // // // //                   </th>
// // // // // // // // //                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // // //                     Location
// // // // // // // // //                   </th>
// // // // // // // // //                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // // //                     Category
// // // // // // // // //                   </th>
// // // // // // // // //                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // // //                     Rating
// // // // // // // // //                   </th>
// // // // // // // // //                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // // //                     Status
// // // // // // // // //                   </th>
// // // // // // // // //                 </tr>
// // // // // // // // //               </thead>
// // // // // // // // //               <tbody className="bg-white divide-y divide-gray-200">
// // // // // // // // //                 {filteredSuppliers.length > 0 ? (
// // // // // // // // //                   filteredSuppliers.map(supplier => (
// // // // // // // // //                     <tr key={supplier.id} className="hover:bg-gray-50">
// // // // // // // // //                       <td className="px-6 py-4 whitespace-nowrap">
// // // // // // // // //                         <div className="text-sm font-medium text-gray-900">{supplier.name}</div>
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className="px-6 py-4 whitespace-nowrap">
// // // // // // // // //                         <div className="text-sm text-gray-500">{supplier.location}</div>
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className="px-6 py-4 whitespace-nowrap">
// // // // // // // // //                         <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
// // // // // // // // //                           {supplier.category}
// // // // // // // // //                         </span>
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className="px-6 py-4 whitespace-nowrap">
// // // // // // // // //                         {renderRating(supplier.rating)}
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className="px-6 py-4 whitespace-nowrap">
// // // // // // // // //                         <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${supplier.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
// // // // // // // // //                           {supplier.active ? 'Active' : 'Inactive'}
// // // // // // // // //                         </span>
// // // // // // // // //                       </td>
// // // // // // // // //                     </tr>
// // // // // // // // //                   ))
// // // // // // // // //                 ) : (
// // // // // // // // //                   <tr>
// // // // // // // // //                     <td colSpan="5" className="px-6 py-10 text-center text-sm text-gray-500">
// // // // // // // // //                       No suppliers found matching your criteria
// // // // // // // // //                     </td>
// // // // // // // // //                   </tr>
// // // // // // // // //                 )}
// // // // // // // // //               </tbody>
// // // // // // // // //             </table>
// // // // // // // // //           </div>
          
// // // // // // // // //           {/* Results Summary */}
// // // // // // // // //           <div className="mt-4 text-sm text-gray-500">
// // // // // // // // //             Showing {filteredSuppliers.length} of {suppliers.length} suppliers
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Supc;


// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import { Search, Filter, Plus, Star, StarOff, X, Edit, Trash2, AlertTriangle } from 'lucide-react';

// // // // // // // // const Supc = () => {
// // // // // // // //   // Sample supplier data
// // // // // // // //   const [suppliers, setSuppliers] = useState([
// // // // // // // //     { id: 1, name: 'Tech Solutions Inc.', location: 'San Francisco, USA', category: 'Electronics', rating: 4, active: true },
// // // // // // // //     { id: 2, name: 'Fashion Forward Ltd.', location: 'Paris, France', category: 'Apparel', rating: 5, active: true },
// // // // // // // //     { id: 3, name: 'Global Materials Co.', location: 'Tokyo, Japan', category: 'Raw Materials', rating: 3, active: true },
// // // // // // // //     { id: 4, name: 'Quick Logistics', location: 'Berlin, Germany', category: 'Transportation', rating: 4, active: false },
// // // // // // // //     { id: 5, name: 'Eco Packaging', location: 'Toronto, Canada', category: 'Packaging', rating: 2, active: true },
// // // // // // // //   ]);
  
// // // // // // // //   // States for search and filters
// // // // // // // //   const [searchTerm, setSearchTerm] = useState('');
// // // // // // // //   const [showFilters, setShowFilters] = useState(false);
// // // // // // // //   const [filters, setFilters] = useState({
// // // // // // // //     location: '',
// // // // // // // //     category: '',
// // // // // // // //     rating: 0,
// // // // // // // //     active: null
// // // // // // // //   });
  
// // // // // // // //   // New supplier form state
// // // // // // // //   const [showNewSupplierForm, setShowNewSupplierForm] = useState(false);
// // // // // // // //   const [newSupplier, setNewSupplier] = useState({
// // // // // // // //     name: '',
// // // // // // // //     location: '',
// // // // // // // //     category: '',
// // // // // // // //     rating: 3,
// // // // // // // //     active: true
// // // // // // // //   });
  
// // // // // // // //   // Edit supplier state
// // // // // // // //   const [editMode, setEditMode] = useState(false);
// // // // // // // //   const [editingSupplierId, setEditingSupplierId] = useState(null);
// // // // // // // //   const [editingSupplier, setEditingSupplier] = useState({
// // // // // // // //     name: '',
// // // // // // // //     location: '',
// // // // // // // //     category: '',
// // // // // // // //     rating: 3,
// // // // // // // //     active: true
// // // // // // // //   });
  
// // // // // // // //   // Delete confirmation state
// // // // // // // //   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
// // // // // // // //   const [supplierToDelete, setSupplierToDelete] = useState(null);
  
// // // // // // // //   // Categories for dropdown
// // // // // // // //   const categories = ['Electronics', 'Apparel', 'Raw Materials', 'Transportation', 'Packaging', 'Food', 'Services'];
  
// // // // // // // //   // Handle search
// // // // // // // //   const handleSearch = (e) => {
// // // // // // // //     setSearchTerm(e.target.value);
// // // // // // // //   };
  
// // // // // // // //   // Handle filter changes
// // // // // // // //   const handleFilterChange = (field, value) => {
// // // // // // // //     setFilters({
// // // // // // // //       ...filters,
// // // // // // // //       [field]: value
// // // // // // // //     });
// // // // // // // //   };
  
// // // // // // // //   // Handle new supplier form changes
// // // // // // // //   const handleNewSupplierChange = (field, value) => {
// // // // // // // //     setNewSupplier({
// // // // // // // //       ...newSupplier,
// // // // // // // //       [field]: value
// // // // // // // //     });
// // // // // // // //   };
  
// // // // // // // //   // Handle editing supplier form changes
// // // // // // // //   const handleEditSupplierChange = (field, value) => {
// // // // // // // //     setEditingSupplier({
// // // // // // // //       ...editingSupplier,
// // // // // // // //       [field]: value
// // // // // // // //     });
// // // // // // // //   };
  
// // // // // // // //   // Add new supplier
// // // // // // // //   const handleAddSupplier = () => {
// // // // // // // //     const id = suppliers.length > 0 ? Math.max(...suppliers.map(s => s.id)) + 1 : 1;
// // // // // // // //     setSuppliers([...suppliers, { ...newSupplier, id }]);
// // // // // // // //     setNewSupplier({
// // // // // // // //       name: '',
// // // // // // // //       location: '',
// // // // // // // //       category: '',
// // // // // // // //       rating: 3,
// // // // // // // //       active: true
// // // // // // // //     });
// // // // // // // //     setShowNewSupplierForm(false);
// // // // // // // //   };
  
// // // // // // // //   // Start editing a supplier
// // // // // // // //   const handleStartEdit = (supplier) => {
// // // // // // // //     setEditMode(true);
// // // // // // // //     setEditingSupplierId(supplier.id);
// // // // // // // //     setEditingSupplier({ ...supplier });
// // // // // // // //     setShowNewSupplierForm(false);
// // // // // // // //   };
  
// // // // // // // //   // Save edited supplier
// // // // // // // //   const handleSaveEdit = () => {
// // // // // // // //     setSuppliers(suppliers.map(supplier => 
// // // // // // // //       supplier.id === editingSupplierId ? { ...editingSupplier, id: editingSupplierId } : supplier
// // // // // // // //     ));
// // // // // // // //     setEditMode(false);
// // // // // // // //     setEditingSupplierId(null);
// // // // // // // //   };
  
// // // // // // // //   // Cancel editing
// // // // // // // //   const handleCancelEdit = () => {
// // // // // // // //     setEditMode(false);
// // // // // // // //     setEditingSupplierId(null);
// // // // // // // //   };
  
// // // // // // // //   // Confirm delete supplier
// // // // // // // //   const handleConfirmDelete = (supplier) => {
// // // // // // // //     setSupplierToDelete(supplier);
// // // // // // // //     setShowDeleteConfirm(true);
// // // // // // // //   };
  
// // // // // // // //   // Delete supplier
// // // // // // // //   const handleDeleteSupplier = () => {
// // // // // // // //     setSuppliers(suppliers.filter(supplier => supplier.id !== supplierToDelete.id));
// // // // // // // //     setShowDeleteConfirm(false);
// // // // // // // //     setSupplierToDelete(null);
// // // // // // // //   };
  
// // // // // // // //   // Cancel delete
// // // // // // // //   const handleCancelDelete = () => {
// // // // // // // //     setShowDeleteConfirm(false);
// // // // // // // //     setSupplierToDelete(null);
// // // // // // // //   };
  
// // // // // // // //   // Filter suppliers based on search and filters
// // // // // // // //   const filteredSuppliers = suppliers.filter(supplier => {
// // // // // // // //     // Search filter
// // // // // // // //     if (searchTerm && !supplier.name.toLowerCase().includes(searchTerm.toLowerCase())) {
// // // // // // // //       return false;
// // // // // // // //     }
    
// // // // // // // //     // Location filter
// // // // // // // //     if (filters.location && !supplier.location.toLowerCase().includes(filters.location.toLowerCase())) {
// // // // // // // //       return false;
// // // // // // // //     }
    
// // // // // // // //     // Category filter
// // // // // // // //     if (filters.category && supplier.category !== filters.category) {
// // // // // // // //       return false;
// // // // // // // //     }
    
// // // // // // // //     // Rating filter
// // // // // // // //     if (filters.rating > 0 && supplier.rating < filters.rating) {
// // // // // // // //       return false;
// // // // // // // //     }
    
// // // // // // // //     // Active status filter
// // // // // // // //     if (filters.active !== null && supplier.active !== filters.active) {
// // // // // // // //       return false;
// // // // // // // //     }
    
// // // // // // // //     return true;
// // // // // // // //   });
  
// // // // // // // //   // Render star rating
// // // // // // // //   const renderRating = (rating) => {
// // // // // // // //     const stars = [];
// // // // // // // //     for (let i = 1; i <= 5; i++) {
// // // // // // // //       stars.push(
// // // // // // // //         i <= rating ? 
// // // // // // // //           <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" /> : 
// // // // // // // //           <StarOff key={i} className="w-4 h-4 text-gray-300" />
// // // // // // // //       );
// // // // // // // //     }
// // // // // // // //     return <div className="flex">{stars}</div>;
// // // // // // // //   };
  
// // // // // // // //   const SupplierForm = ({ supplier, onChange, onCancel, onSave, title, submitLabel }) => (
// // // // // // // //     <div className="border border-gray-200 rounded-lg p-4 mb-6">
// // // // // // // //       <div className="flex justify-between items-center mb-4">
// // // // // // // //         <h2 className="text-lg font-semibold">{title}</h2>
// // // // // // // //         <button 
// // // // // // // //           onClick={onCancel}
// // // // // // // //           className="text-gray-500 hover:text-gray-700"
// // // // // // // //         >
// // // // // // // //           <X className="h-5 w-5" />
// // // // // // // //         </button>
// // // // // // // //       </div>
      
// // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// // // // // // // //         <div>
// // // // // // // //           <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
// // // // // // // //           <input
// // // // // // // //             type="text"
// // // // // // // //             placeholder="Supplier name"
// // // // // // // //             className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // // //             value={supplier.name}
// // // // // // // //             onChange={(e) => onChange('name', e.target.value)}
// // // // // // // //             required
// // // // // // // //           />
// // // // // // // //         </div>
        
// // // // // // // //         <div>
// // // // // // // //           <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
// // // // // // // //           <input
// // // // // // // //             type="text"
// // // // // // // //             placeholder="City, Country"
// // // // // // // //             className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // // //             value={supplier.location}
// // // // // // // //             onChange={(e) => onChange('location', e.target.value)}
// // // // // // // //             required
// // // // // // // //           />
// // // // // // // //         </div>
        
// // // // // // // //         <div>
// // // // // // // //           <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
// // // // // // // //           <select
// // // // // // // //             className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // // //             value={supplier.category}
// // // // // // // //             onChange={(e) => onChange('category', e.target.value)}
// // // // // // // //             required
// // // // // // // //           >
// // // // // // // //             <option value="" disabled>Select category</option>
// // // // // // // //             {categories.map(category => (
// // // // // // // //               <option key={category} value={category}>{category}</option>
// // // // // // // //             ))}
// // // // // // // //           </select>
// // // // // // // //         </div>
        
// // // // // // // //         <div>
// // // // // // // //           <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
// // // // // // // //           <div className="flex items-center gap-2">
// // // // // // // //             {[1, 2, 3, 4, 5].map(rating => (
// // // // // // // //               <button
// // // // // // // //                 key={rating}
// // // // // // // //                 type="button"
// // // // // // // //                 onClick={() => onChange('rating', rating)}
// // // // // // // //                 className="focus:outline-none"
// // // // // // // //               >
// // // // // // // //                 {rating <= supplier.rating ? (
// // // // // // // //                   <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
// // // // // // // //                 ) : (
// // // // // // // //                   <StarOff className="w-6 h-6 text-gray-300" />
// // // // // // // //                 )}
// // // // // // // //               </button>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
        
// // // // // // // //         <div className="flex items-center">
// // // // // // // //           <label className="inline-flex items-center cursor-pointer">
// // // // // // // //             <input 
// // // // // // // //               type="checkbox" 
// // // // // // // //               checked={supplier.active}
// // // // // // // //               onChange={(e) => onChange('active', e.target.checked)}
// // // // // // // //               className="sr-only peer"
// // // // // // // //             />
// // // // // // // //             <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
// // // // // // // //             <span className="ml-3 text-sm font-medium text-gray-700">Active Status</span>
// // // // // // // //           </label>
// // // // // // // //         </div>
// // // // // // // //       </div>
      
// // // // // // // //       <div className="flex justify-end">
// // // // // // // //         <button
// // // // // // // //           onClick={onCancel}
// // // // // // // //           className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg mr-2"
// // // // // // // //         >
// // // // // // // //           Cancel
// // // // // // // //         </button>
// // // // // // // //         <button
// // // // // // // //           onClick={onSave}
// // // // // // // //           disabled={!supplier.name || !supplier.location || !supplier.category}
// // // // // // // //           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
// // // // // // // //         >
// // // // // // // //           {submitLabel}
// // // // // // // //         </button>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
  
// // // // // // // //   // Delete confirmation modal
// // // // // // // //   const DeleteConfirmationModal = () => (
// // // // // // // //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// // // // // // // //       <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
// // // // // // // //         <div className="flex items-center text-red-500 mb-4">
// // // // // // // //           <AlertTriangle className="h-6 w-6 mr-2" />
// // // // // // // //           <h3 className="text-lg font-semibold">Confirm Delete</h3>
// // // // // // // //         </div>
        
// // // // // // // //         <p className="mb-6 text-gray-700">
// // // // // // // //           Are you sure you want to delete supplier <span className="font-semibold">{supplierToDelete?.name}</span>? 
// // // // // // // //           This action cannot be undone.
// // // // // // // //         </p>
        
// // // // // // // //         <div className="flex justify-end gap-2">
// // // // // // // //           <button
// // // // // // // //             onClick={handleCancelDelete}
// // // // // // // //             className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg"
// // // // // // // //           >
// // // // // // // //             Cancel
// // // // // // // //           </button>
// // // // // // // //           <button
// // // // // // // //             onClick={handleDeleteSupplier}
// // // // // // // //             className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
// // // // // // // //           >
// // // // // // // //             Delete
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
  
// // // // // // // //   return (
// // // // // // // //     <div className="bg-gray-50 min-h-screen p-6">
// // // // // // // //       <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
// // // // // // // //         <div className="p-6">
// // // // // // // //           <h1 className="text-2xl font-bold text-gray-800 mb-6">Supplier Management</h1>
          
// // // // // // // //           {/* Search and Action Bar */}
// // // // // // // //           <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
// // // // // // // //             <div className="relative flex-1">
// // // // // // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // // // // // //                 <Search className="h-5 w-5 text-gray-400" />
// // // // // // // //               </div>
// // // // // // // //               <input
// // // // // // // //                 type="text"
// // // // // // // //                 placeholder="Search suppliers..."
// // // // // // // //                 className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
// // // // // // // //                 value={searchTerm}
// // // // // // // //                 onChange={handleSearch}
// // // // // // // //               />
// // // // // // // //             </div>
            
// // // // // // // //             <div className="flex gap-2">
// // // // // // // //               <button
// // // // // // // //                 onClick={() => setShowFilters(!showFilters)}
// // // // // // // //                 className="flex items-center gap-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors"
// // // // // // // //               >
// // // // // // // //                 <Filter className="h-5 w-5" />
// // // // // // // //                 Filters
// // // // // // // //               </button>
              
// // // // // // // //               <button
// // // // // // // //                 onClick={() => {
// // // // // // // //                   setShowNewSupplierForm(true);
// // // // // // // //                   setEditMode(false);
// // // // // // // //                 }}
// // // // // // // //                 className="flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
// // // // // // // //               >
// // // // // // // //                 <Plus className="h-5 w-5" />
// // // // // // // //                 Add Supplier
// // // // // // // //               </button>
// // // // // // // //             </div>
// // // // // // // //           </div>
          
// // // // // // // //           {/* Filter Panel */}
// // // // // // // //           {showFilters && (
// // // // // // // //             <div className="bg-gray-50 p-4 rounded-lg mb-6">
// // // // // // // //               <div className="flex justify-between items-center mb-4">
// // // // // // // //                 <h2 className="text-lg font-semibold">Filters</h2>
// // // // // // // //                 <button 
// // // // // // // //                   onClick={() => setFilters({ location: '', category: '', rating: 0, active: null })}
// // // // // // // //                   className="text-blue-600 hover:text-blue-800 text-sm font-medium"
// // // // // // // //                 >
// // // // // // // //                   Clear All
// // // // // // // //                 </button>
// // // // // // // //               </div>
              
// // // // // // // //               <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// // // // // // // //                 <div>
// // // // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
// // // // // // // //                   <input
// // // // // // // //                     type="text"
// // // // // // // //                     placeholder="City, Country"
// // // // // // // //                     className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // // //                     value={filters.location}
// // // // // // // //                     onChange={(e) => handleFilterChange('location', e.target.value)}
// // // // // // // //                   />
// // // // // // // //                 </div>
                
// // // // // // // //                 <div>
// // // // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
// // // // // // // //                   <select
// // // // // // // //                     className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // // //                     value={filters.category}
// // // // // // // //                     onChange={(e) => handleFilterChange('category', e.target.value)}
// // // // // // // //                   >
// // // // // // // //                     <option value="">All Categories</option>
// // // // // // // //                     {categories.map(category => (
// // // // // // // //                       <option key={category} value={category}>{category}</option>
// // // // // // // //                     ))}
// // // // // // // //                   </select>
// // // // // // // //                 </div>
                
// // // // // // // //                 <div>
// // // // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Rating</label>
// // // // // // // //                   <select
// // // // // // // //                     className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // // //                     value={filters.rating}
// // // // // // // //                     onChange={(e) => handleFilterChange('rating', parseInt(e.target.value))}
// // // // // // // //                   >
// // // // // // // //                     <option value="0">Any Rating</option>
// // // // // // // //                     <option value="1">1+ Stars</option>
// // // // // // // //                     <option value="2">2+ Stars</option>
// // // // // // // //                     <option value="3">3+ Stars</option>
// // // // // // // //                     <option value="4">4+ Stars</option>
// // // // // // // //                     <option value="5">5 Stars</option>
// // // // // // // //                   </select>
// // // // // // // //                 </div>
                
// // // // // // // //                 <div>
// // // // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
// // // // // // // //                   <select
// // // // // // // //                     className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // // //                     value={filters.active === null ? '' : filters.active ? 'active' : 'inactive'}
// // // // // // // //                     onChange={(e) => {
// // // // // // // //                       const value = e.target.value;
// // // // // // // //                       handleFilterChange('active', value === '' ? null : value === 'active');
// // // // // // // //                     }}
// // // // // // // //                   >
// // // // // // // //                     <option value="">All</option>
// // // // // // // //                     <option value="active">Active</option>
// // // // // // // //                     <option value="inactive">Inactive</option>
// // // // // // // //                   </select>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           )}
          
// // // // // // // //           {/* New Supplier Form */}
// // // // // // // //           {showNewSupplierForm && (
// // // // // // // //             <SupplierForm 
// // // // // // // //               supplier={newSupplier}
// // // // // // // //               onChange={handleNewSupplierChange}
// // // // // // // //               onCancel={() => setShowNewSupplierForm(false)}
// // // // // // // //               onSave={handleAddSupplier}
// // // // // // // //               title="Add New Supplier"
// // // // // // // //               submitLabel="Add Supplier"
// // // // // // // //             />
// // // // // // // //           )}
          
// // // // // // // //           {/* Edit Supplier Form */}
// // // // // // // //           {editMode && (
// // // // // // // //             <SupplierForm 
// // // // // // // //               supplier={editingSupplier}
// // // // // // // //               onChange={handleEditSupplierChange}
// // // // // // // //               onCancel={handleCancelEdit}
// // // // // // // //               onSave={handleSaveEdit}
// // // // // // // //               title={`Edit Supplier: ${editingSupplier.name}`}
// // // // // // // //               submitLabel="Save Changes"
// // // // // // // //             />
// // // // // // // //           )}
          
// // // // // // // //           {/* Suppliers Table */}
// // // // // // // //           <div className="overflow-x-auto">
// // // // // // // //             <table className="min-w-full divide-y divide-gray-200">
// // // // // // // //               <thead className="bg-gray-50">
// // // // // // // //                 <tr>
// // // // // // // //                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // //                     Name
// // // // // // // //                   </th>
// // // // // // // //                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // //                     Location
// // // // // // // //                   </th>
// // // // // // // //                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // //                     Category
// // // // // // // //                   </th>
// // // // // // // //                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // //                     Rating
// // // // // // // //                   </th>
// // // // // // // //                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // //                     Status
// // // // // // // //                   </th>
// // // // // // // //                   <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // //                     Actions
// // // // // // // //                   </th>
// // // // // // // //                 </tr>
// // // // // // // //               </thead>
// // // // // // // //               <tbody className="bg-white divide-y divide-gray-200">
// // // // // // // //                 {filteredSuppliers.length > 0 ? (
// // // // // // // //                   filteredSuppliers.map(supplier => (
// // // // // // // //                     <tr key={supplier.id} className="hover:bg-gray-50">
// // // // // // // //                       <td className="px-6 py-4 whitespace-nowrap">
// // // // // // // //                         <div className="text-sm font-medium text-gray-900">{supplier.name}</div>
// // // // // // // //                       </td>
// // // // // // // //                       <td className="px-6 py-4 whitespace-nowrap">
// // // // // // // //                         <div className="text-sm text-gray-500">{supplier.location}</div>
// // // // // // // //                       </td>
// // // // // // // //                       <td className="px-6 py-4 whitespace-nowrap">
// // // // // // // //                         <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
// // // // // // // //                           {supplier.category}
// // // // // // // //                         </span>
// // // // // // // //                       </td>
// // // // // // // //                       <td className="px-6 py-4 whitespace-nowrap">
// // // // // // // //                         {renderRating(supplier.rating)}
// // // // // // // //                       </td>
// // // // // // // //                       <td className="px-6 py-4 whitespace-nowrap">
// // // // // // // //                         <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${supplier.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
// // // // // // // //                           {supplier.active ? 'Active' : 'Inactive'}
// // // // // // // //                         </span>
// // // // // // // //                       </td>
// // // // // // // //                       <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => handleStartEdit(supplier)}
// // // // // // // //                           className="text-blue-600 hover:text-blue-900 mr-3"
// // // // // // // //                         >
// // // // // // // //                           <Edit className="h-4 w-4 inline-block" />
// // // // // // // //                           <span className="ml-1">Edit</span>
// // // // // // // //                         </button>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => handleConfirmDelete(supplier)}
// // // // // // // //                           className="text-red-600 hover:text-red-900"
// // // // // // // //                         >
// // // // // // // //                           <Trash2 className="h-4 w-4 inline-block" />
// // // // // // // //                           <span className="ml-1">Delete</span>
// // // // // // // //                         </button>
// // // // // // // //                       </td>
// // // // // // // //                     </tr>
// // // // // // // //                   ))
// // // // // // // //                 ) : (
// // // // // // // //                   <tr>
// // // // // // // //                     <td colSpan="6" className="px-6 py-10 text-center text-sm text-gray-500">
// // // // // // // //                       No suppliers found matching your criteria
// // // // // // // //                     </td>
// // // // // // // //                   </tr>
// // // // // // // //                 )}
// // // // // // // //               </tbody>
// // // // // // // //             </table>
// // // // // // // //           </div>
          
// // // // // // // //           {/* Results Summary */}
// // // // // // // //           <div className="mt-4 text-sm text-gray-500">
// // // // // // // //             Showing {filteredSuppliers.length} of {suppliers.length} suppliers
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
      
// // // // // // // //       {/* Delete Confirmation Modal */}
// // // // // // // //       {showDeleteConfirm && <DeleteConfirmationModal />}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Supc;
// // // // // // // import React, { useState } from 'react';
// // // // // // // import { Search, Filter, Plus, Star, StarOff, X, Edit, Trash2, AlertTriangle, ArrowLeft, Eye } from 'lucide-react';

// // // // // // // const Supc = () => {
// // // // // // //   // Sample supplier data with expanded fields
// // // // // // //   const [suppliers, setSuppliers] = useState([
// // // // // // //     { 
// // // // // // //       id: 1, 
// // // // // // //       name: 'Tech Solutions Inc.', 
// // // // // // //       location: 'San Francisco, USA',
// // // // // // //       category: 'Electronics',
// // // // // // //       rating: 4,
// // // // // // //       active: true,
// // // // // // //       dealerInfo: {
// // // // // // //         dealerName: 'John Smith',
// // // // // // //         phone1: '123-456-7890',
// // // // // // //         phone2: '987-654-3210',
// // // // // // //         email: 'john@techsolutions.com',
// // // // // // //         position: 'Sales Manager'
// // // // // // //       },
// // // // // // //       shopAddress: '123 Tech Street, San Francisco, CA',
// // // // // // //       pincode: '94105',
// // // // // // //       gstNo: 'GST1234567890',
// // // // // // //       taxId: 'TAX987654321',
// // // // // // //       accountDetails: 'Bank of America - Acc #: XXXX1234',
// // // // // // //       paymentTerms: 'Net 30',
// // // // // // //       billingAddress: '123 Tech Street, San Francisco, CA',
// // // // // // //       website: 'www.techsolutions.com',
// // // // // // //       products: [
// // // // // // //         { id: 1, name: 'Laptops', description: 'High-end laptops' },
// // // // // // //         { id: 2, name: 'Smartphones', description: 'Mobile devices' }
// // // // // // //       ]
// // // // // // //     },
// // // // // // //     { 
// // // // // // //       id: 2, 
// // // // // // //       name: 'Fashion Forward Ltd.', 
// // // // // // //       location: 'Paris, France',
// // // // // // //       category: 'Apparel',
// // // // // // //       rating: 5,
// // // // // // //       active: true,
// // // // // // //       dealerInfo: {
// // // // // // //         dealerName: 'Marie Dupont',
// // // // // // //         phone1: '+33-1-2345-6789',
// // // // // // //         phone2: '',
// // // // // // //         email: 'marie@fashionforward.fr',
// // // // // // //         position: 'Owner'
// // // // // // //       },
// // // // // // //       shopAddress: '45 Rue de la Mode, Paris',
// // // // // // //       pincode: '75008',
// // // // // // //       gstNo: 'FR872345678',
// // // // // // //       taxId: 'FRTAX23456789',
// // // // // // //       accountDetails: 'BNP Paribas - Acc #: XXXX5678',
// // // // // // //       paymentTerms: 'Net 45',
// // // // // // //       billingAddress: '45 Rue de la Mode, Paris',
// // // // // // //       website: 'www.fashionforward.fr',
// // // // // // //       products: [
// // // // // // //         { id: 1, name: 'Designer Clothing', description: 'High fashion apparel' },
// // // // // // //         { id: 2, name: 'Accessories', description: 'Fashion accessories' }
// // // // // // //       ]
// // // // // // //     },
// // // // // // //     { 
// // // // // // //       id: 3, 
// // // // // // //       name: 'Global Materials Co.', 
// // // // // // //       location: 'Tokyo, Japan',
// // // // // // //       category: 'Raw Materials',
// // // // // // //       rating: 3,
// // // // // // //       active: true,
// // // // // // //       dealerInfo: {
// // // // // // //         dealerName: 'Takashi Yamamoto',
// // // // // // //         phone1: '+81-3-1234-5678',
// // // // // // //         phone2: '+81-3-8765-4321',
// // // // // // //         email: 'takashi@globalmaterials.jp',
// // // // // // //         position: 'Procurement Director'
// // // // // // //       },
// // // // // // //       shopAddress: '1-2-3 Marunouchi, Chiyoda-ku, Tokyo',
// // // // // // //       pincode: '100-0005',
// // // // // // //       gstNo: 'JP34567890',
// // // // // // //       taxId: 'JPTAX45678901',
// // // // // // //       accountDetails: 'MUFG Bank - Acc #: XXXX6789',
// // // // // // //       paymentTerms: 'Net 60',
// // // // // // //       billingAddress: '1-2-3 Marunouchi, Chiyoda-ku, Tokyo',
// // // // // // //       website: 'www.globalmaterials.jp',
// // // // // // //       products: [
// // // // // // //         { id: 1, name: 'Industrial Metals', description: 'Steel and aluminum' },
// // // // // // //         { id: 2, name: 'Plastics', description: 'Industrial grade polymers' }
// // // // // // //       ]
// // // // // // //     }
// // // // // // //   ]);
  
// // // // // // //   // State for viewing detailed supplier information
// // // // // // //   const [viewingSupplier, setViewingSupplier] = useState(null);
// // // // // // //   const [isViewingDetails, setIsViewingDetails] = useState(false);
  
// // // // // // //   // States for search and filters
// // // // // // //   const [searchTerm, setSearchTerm] = useState('');
// // // // // // //   const [showFilters, setShowFilters] = useState(false);
// // // // // // //   const [filters, setFilters] = useState({
// // // // // // //     location: '',
// // // // // // //     category: '',
// // // // // // //     rating: 0,
// // // // // // //     active: null
// // // // // // //   });
  
// // // // // // //   // New supplier form state
// // // // // // //   const [showNewSupplierForm, setShowNewSupplierForm] = useState(false);
// // // // // // //   const [newSupplier, setNewSupplier] = useState({
// // // // // // //     name: '',
// // // // // // //     location: '',
// // // // // // //     category: '',
// // // // // // //     rating: 3,
// // // // // // //     active: true,
// // // // // // //     dealerInfo: {
// // // // // // //       dealerName: '',
// // // // // // //       phone1: '',
// // // // // // //       phone2: '',
// // // // // // //       email: '',
// // // // // // //       position: ''
// // // // // // //     },
// // // // // // //     shopAddress: '',
// // // // // // //     pincode: '',
// // // // // // //     gstNo: '',
// // // // // // //     taxId: '',
// // // // // // //     accountDetails: '',
// // // // // // //     paymentTerms: 'Net 30',
// // // // // // //     billingAddress: '',
// // // // // // //     website: '',
// // // // // // //     products: []
// // // // // // //   });
  
// // // // // // //   // Edit supplier state
// // // // // // //   const [editMode, setEditMode] = useState(false);
// // // // // // //   const [editingSupplierId, setEditingSupplierId] = useState(null);
// // // // // // //   const [editingSupplier, setEditingSupplier] = useState({
// // // // // // //     name: '',
// // // // // // //     location: '',
// // // // // // //     category: '',
// // // // // // //     rating: 3,
// // // // // // //     active: true,
// // // // // // //     dealerInfo: {
// // // // // // //       dealerName: '',
// // // // // // //       phone1: '',
// // // // // // //       phone2: '',
// // // // // // //       email: '',
// // // // // // //       position: ''
// // // // // // //     },
// // // // // // //     shopAddress: '',
// // // // // // //     pincode: '',
// // // // // // //     gstNo: '',
// // // // // // //     taxId: '',
// // // // // // //     accountDetails: '',
// // // // // // //     paymentTerms: '',
// // // // // // //     billingAddress: '',
// // // // // // //     website: '',
// // // // // // //     products: []
// // // // // // //   });
  
// // // // // // //   // New product state
// // // // // // //   const [newProduct, setNewProduct] = useState({ name: '', description: '' });
  
// // // // // // //   // Delete confirmation state
// // // // // // //   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
// // // // // // //   const [supplierToDelete, setSupplierToDelete] = useState(null);
  
// // // // // // //   // Categories for dropdown
// // // // // // //   const categories = ['Electronics', 'Apparel', 'Raw Materials', 'Transportation', 'Packaging', 'Food', 'Services'];
  
// // // // // // //   // Handle search
// // // // // // //   const handleSearch = (e) => {
// // // // // // //     setSearchTerm(e.target.value);
// // // // // // //   };
  
// // // // // // //   // Handle filter changes
// // // // // // //   const handleFilterChange = (field, value) => {
// // // // // // //     setFilters({
// // // // // // //       ...filters,
// // // // // // //       [field]: value
// // // // // // //     });
// // // // // // //   };
  
// // // // // // //   // Handle new supplier form changes for basic fields
// // // // // // //   const handleNewSupplierChange = (field, value) => {
// // // // // // //     setNewSupplier({
// // // // // // //       ...newSupplier,
// // // // // // //       [field]: value
// // // // // // //     });
// // // // // // //   };
  
// // // // // // //   // Handle new supplier form changes for nested dealer info
// // // // // // //   const handleDealerInfoChange = (field, value, formType = 'new') => {
// // // // // // //     if (formType === 'new') {
// // // // // // //       setNewSupplier({
// // // // // // //         ...newSupplier,
// // // // // // //         dealerInfo: {
// // // // // // //           ...newSupplier.dealerInfo,
// // // // // // //           [field]: value
// // // // // // //         }
// // // // // // //       });
// // // // // // //     } else if (formType === 'edit') {
// // // // // // //       setEditingSupplier({
// // // // // // //         ...editingSupplier,
// // // // // // //         dealerInfo: {
// // // // // // //           ...editingSupplier.dealerInfo,
// // // // // // //           [field]: value
// // // // // // //         }
// // // // // // //       });
// // // // // // //     }
// // // // // // //   };
  
// // // // // // //   // Handle editing supplier form changes
// // // // // // //   const handleEditSupplierChange = (field, value) => {
// // // // // // //     setEditingSupplier({
// // // // // // //       ...editingSupplier,
// // // // // // //       [field]: value
// // // // // // //     });
// // // // // // //   };
  
// // // // // // //   // Handle new product changes
// // // // // // //   const handleNewProductChange = (field, value) => {
// // // // // // //     setNewProduct({
// // // // // // //       ...newProduct,
// // // // // // //       [field]: value
// // // // // // //     });
// // // // // // //   };
  
// // // // // // //   // Add new product to supplier
// // // // // // //   const handleAddProduct = (formType = 'new') => {
// // // // // // //     if (!newProduct.name) return;
    
// // // // // // //     const productId = Date.now();
// // // // // // //     const product = { ...newProduct, id: productId };
    
// // // // // // //     if (formType === 'new') {
// // // // // // //       setNewSupplier({
// // // // // // //         ...newSupplier,
// // // // // // //         products: [...newSupplier.products, product]
// // // // // // //       });
// // // // // // //     } else if (formType === 'edit') {
// // // // // // //       setEditingSupplier({
// // // // // // //         ...editingSupplier,
// // // // // // //         products: [...editingSupplier.products, product]
// // // // // // //       });
// // // // // // //     }
    
// // // // // // //     setNewProduct({ name: '', description: '' });
// // // // // // //   };
  
// // // // // // //   // Remove product from supplier
// // // // // // //   const handleRemoveProduct = (productId, formType = 'new') => {
// // // // // // //     if (formType === 'new') {
// // // // // // //       setNewSupplier({
// // // // // // //         ...newSupplier,
// // // // // // //         products: newSupplier.products.filter(p => p.id !== productId)
// // // // // // //       });
// // // // // // //     } else if (formType === 'edit') {
// // // // // // //       setEditingSupplier({
// // // // // // //         ...editingSupplier,
// // // // // // //         products: editingSupplier.products.filter(p => p.id !== productId)
// // // // // // //       });
// // // // // // //     }
// // // // // // //   };
  
// // // // // // //   // Add new supplier
// // // // // // //   const handleAddSupplier = () => {
// // // // // // //     const id = suppliers.length > 0 ? Math.max(...suppliers.map(s => s.id)) + 1 : 1;
// // // // // // //     setSuppliers([...suppliers, { ...newSupplier, id }]);
    
// // // // // // //     // Reset form
// // // // // // //     setNewSupplier({
// // // // // // //       name: '',
// // // // // // //       location: '',
// // // // // // //       category: '',
// // // // // // //       rating: 3,
// // // // // // //       active: true,
// // // // // // //       dealerInfo: {
// // // // // // //         dealerName: '',
// // // // // // //         phone1: '',
// // // // // // //         phone2: '',
// // // // // // //         email: '',
// // // // // // //         position: ''
// // // // // // //       },
// // // // // // //       shopAddress: '',
// // // // // // //       pincode: '',
// // // // // // //       gstNo: '',
// // // // // // //       taxId: '',
// // // // // // //       accountDetails: '',
// // // // // // //       paymentTerms: 'Net 30',
// // // // // // //       billingAddress: '',
// // // // // // //       website: '',
// // // // // // //       products: []
// // // // // // //     });
    
// // // // // // //     setShowNewSupplierForm(false);
// // // // // // //   };
  
// // // // // // //   // Start editing a supplier
// // // // // // //   const handleStartEdit = (supplier) => {
// // // // // // //     setEditMode(true);
// // // // // // //     setEditingSupplierId(supplier.id);
// // // // // // //     setEditingSupplier({ ...supplier });
// // // // // // //     setShowNewSupplierForm(false);
// // // // // // //     setIsViewingDetails(false);
// // // // // // //   };
  
// // // // // // //   // Save edited supplier
// // // // // // //   const handleSaveEdit = () => {
// // // // // // //     setSuppliers(suppliers.map(supplier => 
// // // // // // //       supplier.id === editingSupplierId ? { ...editingSupplier, id: editingSupplierId } : supplier
// // // // // // //     ));
// // // // // // //     setEditMode(false);
// // // // // // //     setEditingSupplierId(null);
// // // // // // //   };
  
// // // // // // //   // Cancel editing
// // // // // // //   const handleCancelEdit = () => {
// // // // // // //     setEditMode(false);
// // // // // // //     setEditingSupplierId(null);
// // // // // // //   };
  
// // // // // // //   // View supplier details
// // // // // // //   const handleViewDetails = (supplier) => {
// // // // // // //     setViewingSupplier(supplier);
// // // // // // //     setIsViewingDetails(true);
// // // // // // //   };
  
// // // // // // //   // Go back to suppliers list
// // // // // // //   const handleBackToList = () => {
// // // // // // //     setIsViewingDetails(false);
// // // // // // //     setViewingSupplier(null);
// // // // // // //   };
  
// // // // // // //   // Confirm delete supplier
// // // // // // //   const handleConfirmDelete = (supplier) => {
// // // // // // //     setSupplierToDelete(supplier);
// // // // // // //     setShowDeleteConfirm(true);
// // // // // // //   };
  
// // // // // // //   // Delete supplier
// // // // // // //   const handleDeleteSupplier = () => {
// // // // // // //     setSuppliers(suppliers.filter(supplier => supplier.id !== supplierToDelete.id));
// // // // // // //     setShowDeleteConfirm(false);
// // // // // // //     setSupplierToDelete(null);
    
// // // // // // //     // If viewing the deleted supplier, go back to list
// // // // // // //     if (viewingSupplier && viewingSupplier.id === supplierToDelete.id) {
// // // // // // //       handleBackToList();
// // // // // // //     }
// // // // // // //   };
  
// // // // // // //   // Cancel delete
// // // // // // //   const handleCancelDelete = () => {
// // // // // // //     setShowDeleteConfirm(false);
// // // // // // //     setSupplierToDelete(null);
// // // // // // //   };
  
// // // // // // //   // Filter suppliers based on search and filters
// // // // // // //   const filteredSuppliers = suppliers.filter(supplier => {
// // // // // // //     // Search filter
// // // // // // //     if (searchTerm && !supplier.name.toLowerCase().includes(searchTerm.toLowerCase())) {
// // // // // // //       return false;
// // // // // // //     }
    
// // // // // // //     // Location filter
// // // // // // //     if (filters.location && !supplier.location.toLowerCase().includes(filters.location.toLowerCase())) {
// // // // // // //       return false;
// // // // // // //     }
    
// // // // // // //     // Category filter
// // // // // // //     if (filters.category && supplier.category !== filters.category) {
// // // // // // //       return false;
// // // // // // //     }
    
// // // // // // //     // Rating filter
// // // // // // //     if (filters.rating > 0 && supplier.rating < filters.rating) {
// // // // // // //       return false;
// // // // // // //     }
    
// // // // // // //     // Active status filter
// // // // // // //     if (filters.active !== null && supplier.active !== filters.active) {
// // // // // // //       return false;
// // // // // // //     }
    
// // // // // // //     return true;
// // // // // // //   });
  
// // // // // // //   // Render star rating
// // // // // // //   const renderRating = (rating) => {
// // // // // // //     const stars = [];
// // // // // // //     for (let i = 1; i <= 5; i++) {
// // // // // // //       stars.push(
// // // // // // //         i <= rating ? 
// // // // // // //           <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" /> : 
// // // // // // //           <StarOff key={i} className="w-4 h-4 text-gray-300" />
// // // // // // //       );
// // // // // // //     }
// // // // // // //     return <div className="flex">{stars}</div>;
// // // // // // //   };
  
// // // // // // //   // Supplier Detail View Component
// // // // // // //   const SupplierDetailView = ({ supplier }) => (
// // // // // // //     <div className="space-y-6">
// // // // // // //       <div className="flex items-center">
// // // // // // //         <button 
// // // // // // //           onClick={handleBackToList}
// // // // // // //           className="mr-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
// // // // // // //         >
// // // // // // //           <ArrowLeft className="h-5 w-5 text-gray-600" />
// // // // // // //         </button>
// // // // // // //         <h2 className="text-2xl font-bold text-gray-800">{supplier.name}</h2>
// // // // // // //         <div className="ml-auto flex space-x-2">
// // // // // // //           <button 
// // // // // // //             onClick={() => handleStartEdit(supplier)}
// // // // // // //             className="flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
// // // // // // //           >
// // // // // // //             <Edit className="h-4 w-4" />
// // // // // // //             Edit
// // // // // // //           </button>
// // // // // // //           <button 
// // // // // // //             onClick={() => handleConfirmDelete(supplier)}
// // // // // // //             className="flex items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
// // // // // // //           >
// // // // // // //             <Trash2 className="h-4 w-4" />
// // // // // // //             Delete
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // // // //         {/* Basic Information */}
// // // // // // //         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // // // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h3>
          
// // // // // // //           <div className="space-y-3">
// // // // // // //             <div className="flex justify-between items-center">
// // // // // // //               <span className="text-gray-500">Category:</span>
// // // // // // //               <span className="font-medium text-gray-800">{supplier.category}</span>
// // // // // // //             </div>
// // // // // // //             <div className="flex justify-between items-center">
// // // // // // //               <span className="text-gray-500">Location:</span>
// // // // // // //               <span className="font-medium text-gray-800">{supplier.location}</span>
// // // // // // //             </div>
// // // // // // //             <div className="flex justify-between items-center">
// // // // // // //               <span className="text-gray-500">Rating:</span>
// // // // // // //               <div>{renderRating(supplier.rating)}</div>
// // // // // // //             </div>
// // // // // // //             <div className="flex justify-between items-center">
// // // // // // //               <span className="text-gray-500">Status:</span>
// // // // // // //               <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${supplier.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
// // // // // // //                 {supplier.active ? 'Active' : 'Inactive'}
// // // // // // //               </span>
// // // // // // //             </div>
// // // // // // //             <div className="flex justify-between items-center">
// // // // // // //               <span className="text-gray-500">Website:</span>
// // // // // // //               <span className="font-medium text-blue-600 hover:underline">{supplier.website || 'N/A'}</span>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Dealer Information */}
// // // // // // //         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // // // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Dealer Information</h3>
          
// // // // // // //           <div className="space-y-3">
// // // // // // //             <div className="flex justify-between items-center">
// // // // // // //               <span className="text-gray-500">Name:</span>
// // // // // // //               <span className="font-medium text-gray-800">{supplier.dealerInfo.dealerName || 'N/A'}</span>
// // // // // // //             </div>
// // // // // // //             <div className="flex justify-between items-center">
// // // // // // //               <span className="text-gray-500">Position:</span>
// // // // // // //               <span className="font-medium text-gray-800">{supplier.dealerInfo.position || 'N/A'}</span>
// // // // // // //             </div>
// // // // // // //             <div className="flex justify-between items-center">
// // // // // // //               <span className="text-gray-500">Primary Phone:</span>
// // // // // // //               <span className="font-medium text-gray-800">{supplier.dealerInfo.phone1 || 'N/A'}</span>
// // // // // // //             </div>
// // // // // // //             <div className="flex justify-between items-center">
// // // // // // //               <span className="text-gray-500">Secondary Phone:</span>
// // // // // // //               <span className="font-medium text-gray-800">{supplier.dealerInfo.phone2 || 'N/A'}</span>
// // // // // // //             </div>
// // // // // // //             <div className="flex justify-between items-center">
// // // // // // //               <span className="text-gray-500">Email:</span>
// // // // // // //               <span className="font-medium text-blue-600 hover:underline">{supplier.dealerInfo.email || 'N/A'}</span>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Business Information */}
// // // // // // //         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // // // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Business Information</h3>
          
// // // // // // //           <div className="space-y-3">
// // // // // // //             <div className="flex justify-between items-center">
// // // // // // //               <span className="text-gray-500">Shop Address:</span>
// // // // // // //               <span className="font-medium text-gray-800">{supplier.shopAddress || 'N/A'}</span>
// // // // // // //             </div>
// // // // // // //             <div className="flex justify-between items-center">
// // // // // // //               <span className="text-gray-500">Pincode:</span>
// // // // // // //               <span className="font-medium text-gray-800">{supplier.pincode || 'N/A'}</span>
// // // // // // //             </div>
// // // // // // //             <div className="flex justify-between items-center">
// // // // // // //               <span className="text-gray-500">GST Number:</span>
// // // // // // //               <span className="font-medium text-gray-800">{supplier.gstNo || 'N/A'}</span>
// // // // // // //             </div>
// // // // // // //             <div className="flex justify-between items-center">
// // // // // // //               <span className="text-gray-500">Tax ID:</span>
// // // // // // //               <span className="font-medium text-gray-800">{supplier.taxId || 'N/A'}</span>
// // // // // // //             </div>
// // // // // // //             <div className="flex justify-between items-center">
// // // // // // //               <span className="text-gray-500">Billing Address:</span>
// // // // // // //               <span className="font-medium text-gray-800">{supplier.billingAddress || 'N/A'}</span>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Financial Information */}
// // // // // // //         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // // // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Financial Information</h3>
          
// // // // // // //           <div className="space-y-3">
// // // // // // //             <div className="flex justify-between items-center">
// // // // // // //               <span className="text-gray-500">Account Details:</span>
// // // // // // //               <span className="font-medium text-gray-800">{supplier.accountDetails || 'N/A'}</span>
// // // // // // //             </div>
// // // // // // //             <div className="flex justify-between items-center">
// // // // // // //               <span className="text-gray-500">Payment Terms:</span>
// // // // // // //               <span className="font-medium text-gray-800">{supplier.paymentTerms || 'N/A'}</span>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       Products Section
// // // // // // //       <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // // // // //         <h3 className="text-lg font-semibold text-gray-800 mb-4">Products Supplied</h3>
        
// // // // // // //         {supplier.products && supplier.products.length > 0 ? (
// // // // // // //           <div className="divide-y divide-gray-200">
// // // // // // //             {supplier.products.map(product => (
// // // // // // //               <div key={product.id} className="py-3 flex justify-between items-center">
// // // // // // //                 <div>
// // // // // // //                   <h4 className="font-medium text-gray-800">{product.name}</h4>
// // // // // // //                   <p className="text-sm text-gray-500">{product.description}</p>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         ) : (
// // // // // // //           <p className="text-gray-500 italic">No products listed</p>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
  
// // // // // // //   // Detailed Supplier Form Component
// // // // // // //   const DetailedSupplierForm = ({ 
// // // // // // //     supplier, 
// // // // // // //     onBasicChange, 
// // // // // // //     onDealerChange, 
// // // // // // //     onCancel, 
// // // // // // //     onSave, 
// // // // // // //     title, 
// // // // // // //     submitLabel,
// // // // // // //     newProduct,
// // // // // // //     onProductChange,
// // // // // // //     onAddProduct,
// // // // // // //     onRemoveProduct,
// // // // // // //     formType
// // // // // // //   }) => (
// // // // // // //     <div className="border border-gray-200 rounded-lg p-6 mb-6 space-y-6">
// // // // // // //       <div className="flex justify-between items-center">
// // // // // // //         <h2 className="text-lg font-semibold">{title}</h2>
// // // // // // //         <button 
// // // // // // //           onClick={onCancel}
// // // // // // //           className="text-gray-500 hover:text-gray-700"
// // // // // // //         >
// // // // // // //           <X className="h-5 w-5" />
// // // // // // //         </button>
// // // // // // //       </div>
      
// // // // // // //       {/* Basic Information */}
// // // // // // //       <div>
// // // // // // //         <h3 className="font-medium text-gray-700 mb-3">Basic Information</h3>
// // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // //           <div>
// // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Supplier name"
// // // // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //               value={supplier.name}
// // // // // // //               onChange={(e) => onBasicChange('name', e.target.value)}
// // // // // // //               required
// // // // // // //             />
// // // // // // //           </div>
          
// // // // // // //           <div>
// // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="City, Country"
// // // // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //               value={supplier.location}
// // // // // // //               onChange={(e) => onBasicChange('location', e.target.value)}
// // // // // // //               required
// // // // // // //             />
// // // // // // //           </div>
          
// // // // // // //           <div>
// // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
// // // // // // //             <select
// // // // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //               value={supplier.category}
// // // // // // //               onChange={(e) => onBasicChange('category', e.target.value)}
// // // // // // //               required
// // // // // // //             >
// // // // // // //               <option value="" disabled>Select category</option>
// // // // // // //               {categories.map(category => (
// // // // // // //                 <option key={category} value={category}>{category}</option>
// // // // // // //               ))}
// // // // // // //             </select>
// // // // // // //           </div>
          
// // // // // // //           <div>
// // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="www.example.com"
// // // // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //               value={supplier.website}
// // // // // // //               onChange={(e) => onBasicChange('website', e.target.value)}
// // // // // // //             />
// // // // // // //           </div>
          
// // // // // // //           <div>
// // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
// // // // // // //             <div className="flex items-center gap-2">
// // // // // // //               {[1, 2, 3, 4, 5].map(rating => (
// // // // // // //                 <button
// // // // // // //                   key={rating}
// // // // // // //                   type="button"
// // // // // // //                   onClick={() => onBasicChange('rating', rating)}
// // // // // // //                   className="focus:outline-none"
// // // // // // //                 >
// // // // // // //                   {rating <= supplier.rating ? (
// // // // // // //                     <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
// // // // // // //                   ) : (
// // // // // // //                     <StarOff className="w-6 h-6 text-gray-300" />
// // // // // // //                   )}
// // // // // // //                 </button>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           </div>
          
// // // // // // //           <div className="flex items-center">
// // // // // // //             <label className="inline-flex items-center cursor-pointer">
// // // // // // //               <input 
// // // // // // //                 type="checkbox" 
// // // // // // //                 checked={supplier.active}
// // // // // // //                 onChange={(e) => onBasicChange('active', e.target.checked)}
// // // // // // //                 className="sr-only peer"
// // // // // // //               />
// // // // // // //               <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
// // // // // // //               <span className="ml-3 text-sm font-medium text-gray-700">Active Status</span>
// // // // // // //             </label>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
      
// // // // // // //       {/* Dealer Information */}
// // // // // // //       <div>
// // // // // // //         <h3 className="font-medium text-gray-700 mb-3">Dealer Information</h3>
// // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // //           <div>
// // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Dealer Name *</label>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Dealer's full name"
// // // // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //               value={supplier.dealerInfo.dealerName}
// // // // // // //               onChange={(e) => onDealerChange('dealerName', e.target.value, formType)}
// // // // // // //               required
// // // // // // //             />
// // // // // // //           </div>
          
// // // // // // //           <div>
// // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Sales Manager, Owner, etc."
// // // // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //               value={supplier.dealerInfo.position}
// // // // // // //               onChange={(e) => onDealerChange('position', e.target.value, formType)}
// // // // // // //             />
// // // // // // //           </div>
          
// // // // // // //           <div>
// // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Primary Phone *</label>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Primary contact number"
// // // // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //               value={supplier.dealerInfo.phone1}
// // // // // // //               onChange={(e) => onDealerChange('phone1', e.target.value, formType)}
// // // // // // //               required
// // // // // // //             />
// // // // // // //           </div>
          
// // // // // // //           <div>
// // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Phone</label>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Alternative contact number"
// // // // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //               value={supplier.dealerInfo.phone2}
// // // // // // //               onChange={(e) => onDealerChange('phone2', e.target.value, formType)}
// // // // // // //             />
// // // // // // //           </div>
          
// // // // // // //           <div>
// // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
// // // // // // //             <input
// // // // // // //               type="email"
// // // // // // //               placeholder="email@example.com"
// // // // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //               value={supplier.dealerInfo.email}
// // // // // // //               onChange={(e) => onDealerChange('email', e.target.value, formType)}
// // // // // // //               required
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
      
// // // // // // //       {/* Business Information */}
// // // // // // //       <div>
// // // // // // //         <h3 className="font-medium text-gray-700 mb-3">Business Information</h3>
// // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // //           <div className="md:col-span-2">
// // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Shop Address *</label>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Complete address"
// // // // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //               value={supplier.shopAddress}
// // // // // // //               onChange={(e) => onBasicChange('shopAddress', e.target.value)}
// // // // // // //               required
// // // // // // //             />
// // // // // // //           </div>
          
// // // // // // //           <div>
// // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Postal/ZIP code"
// // // // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"               value={supplier.pincode}
// // // // // // //               onChange={(e) => onBasicChange('pincode', e.target.value)}
// // // // // // //               required
// // // // // // //             />
// // // // // // //           </div>
          
// // // // // // //           <div>
// // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">GST Number *</label>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="GST number"
// // // // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //               value={supplier.gstNo}
// // // // // // //               onChange={(e) => onBasicChange('gstNo', e.target.value)}
// // // // // // //               required
// // // // // // //             />
// // // // // // //           </div>
          
// // // // // // //           <div>
// // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID *</label>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Tax identification number"
// // // // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //               value={supplier.taxId}
// // // // // // //               onChange={(e) => onBasicChange('taxId', e.target.value)}
// // // // // // //               required
// // // // // // //             />
// // // // // // //           </div>
          
// // // // // // //           <div className="md:col-span-2">
// // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Billing Address *</label>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Billing address"
// // // // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //               value={supplier.billingAddress}
// // // // // // //               onChange={(e) => onBasicChange('billingAddress', e.target.value)}
// // // // // // //               required
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
      
// // // // // // //       Financial Information
// // // // // // //       <div>
// // // // // // //         <h3 className="font-medium text-gray-700 mb-3">Financial Information</h3>
// // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // //           <div>
// // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Account Details *</label>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Bank name and account number"
// // // // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //               value={supplier.accountDetails}
// // // // // // //               onChange={(e) => onBasicChange('accountDetails', e.target.value)}
// // // // // // //               required
// // // // // // //             />
// // // // // // //           </div>
          
// // // // // // //           <div>
// // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Payment Terms *</label>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Net 30, Net 45, etc."
// // // // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //               value={supplier.paymentTerms}
// // // // // // //               onChange={(e) => onBasicChange('paymentTerms', e.target.value)}
// // // // // // //               required
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
      
// // // // // // //       {/* Products Supplied */}
// // // // // // //       <div>
// // // // // // //         <h3 className="font-medium text-gray-700 mb-3">Products Supplied</h3>
// // // // // // //         <div className="space-y-4">
// // // // // // //           {supplier.products.map((product) => (
// // // // // // //             <div key={product.id} className="flex items-center gap-4">
// // // // // // //               <div className="flex-1">
// // // // // // //                 <input
// // // // // // //                   type="text"
// // // // // // //                   placeholder="Product name"
// // // // // // //                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //                   value={product.name}
// // // // // // //                   onChange={(e) => onProductChange('name', e.target.value, product.id)}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //               <div className="flex-1">
// // // // // // //                 <input
// // // // // // //                   type="text"
// // // // // // //                   placeholder="Product description"
// // // // // // //                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //                   value={product.description}
// // // // // // //                   onChange={(e) => onProductChange('description', e.target.value, product.id)}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //               <button
// // // // // // //                 type="button"
// // // // // // //                 onClick={() => onRemoveProduct(product.id)}
// // // // // // //                 className="p-2 text-red-600 hover:text-red-700"
// // // // // // //               >
// // // // // // //                 <Trash2 className="h-5 w-5" />
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //           <div className="flex items-center gap-4">
// // // // // // //             <div className="flex-1">
// // // // // // //               <input
// // // // // // //                 type="text"
// // // // // // //                 placeholder="New product name"
// // // // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //                 value={newProduct.name}
// // // // // // //                 onChange={(e) => onProductChange('name', e.target.value)}
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //             <div className="flex-1">
// // // // // // //               <input
// // // // // // //                 type="text"
// // // // // // //                 placeholder="New product description"
// // // // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //                 value={newProduct.description}
// // // // // // //                 onChange={(e) => onProductChange('description', e.target.value)}
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //             <button
// // // // // // //               type="button"
// // // // // // //               onClick={onAddProduct}
// // // // // // //               className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
// // // // // // //             >
// // // // // // //               <Plus className="h-5 w-5" />
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
      
// // // // // // //       {/* Form Actions */}
// // // // // // //       <div className="flex justify-end gap-4">
// // // // // // //         <button
// // // // // // //           type="button"
// // // // // // //           onClick={onCancel}
// // // // // // //           className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
// // // // // // //         >
// // // // // // //           Cancel
// // // // // // //         </button>
// // // // // // //         <button
// // // // // // //           type="button"
// // // // // // //           onClick={onSave}
// // // // // // //           className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
// // // // // // //         >
// // // // // // //           {submitLabel}
// // // // // // //         </button>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
  
// // // // // // //   return (
// // // // // // //     <div className="p-6 bg-gray-100 min-h-screen">
// // // // // // //       {/* Header */}
// // // // // // //       <div className="flex justify-between items-center mb-6">
// // // // // // //         <h1 className="text-2xl font-bold">Supplier Management</h1>
// // // // // // //         <button
// // // // // // //           onClick={() => setShowNewSupplierForm(true)}
// // // // // // //           className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
// // // // // // //         >
// // // // // // //           <Plus className="h-5 w-5" />
// // // // // // //           Add Supplier
// // // // // // //         </button>
// // // // // // //       </div>
      
// // // // // // //       {/* Search and Filters */}
// // // // // // //       <div className="mb-6">
// // // // // // //         <div className="flex items-center gap-4">
// // // // // // //           <div className="flex-1">
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Search suppliers..."
// // // // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //               value={searchTerm}
// // // // // // //               onChange={handleSearch}
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //           <button
// // // // // // //             onClick={() => setShowFilters(!showFilters)}
// // // // // // //             className="p-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
// // // // // // //           >
// // // // // // //             <Filter className="h-5 w-5 text-gray-600" />
// // // // // // //           </button>
// // // // // // //         </div>
        
// // // // // // //         {showFilters && (
// // // // // // //           <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
// // // // // // //             <select
// // // // // // //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //               value={filters.location}
// // // // // // //               onChange={(e) => handleFilterChange('location', e.target.value)}
// // // // // // //             >
// // // // // // //               <option value="">Location</option>
// // // // // // //               <option value="San Francisco, USA">San Francisco, USA</option>
// // // // // // //               <option value="Paris, France">Paris, France</option>
// // // // // // //               <option value="Tokyo, Japan">Tokyo, Japan</option>
// // // // // // //             </select>
            
// // // // // // //             <select
// // // // // // //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //               value={filters.category}
// // // // // // //               onChange={(e) => handleFilterChange('category', e.target.value)}
// // // // // // //             >
// // // // // // //               <option value="">Category</option>
// // // // // // //               {categories.map((category) => (
// // // // // // //                 <option key={category} value={category}>{category}</option>
// // // // // // //               ))}
// // // // // // //             </select>
            
// // // // // // //             <select
// // // // // // //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //               value={filters.rating}
// // // // // // //               onChange={(e) => handleFilterChange('rating', parseInt(e.target.value))}
// // // // // // //             >
// // // // // // //               <option value="0">Rating</option>
// // // // // // //               <option value="1">1 Star</option>
// // // // // // //               <option value="2">2 Stars</option>
// // // // // // //               <option value="3">3 Stars</option>
// // // // // // //               <option value="4">4 Stars</option>
// // // // // // //               <option value="5">5 Stars</option>
// // // // // // //             </select>
            
// // // // // // //             <select
// // // // // // //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //               value={filters.active ?? ''}
// // // // // // //               onChange={(e) => handleFilterChange('active', e.target.value === 'true')}
// // // // // // //             >
// // // // // // //               <option value="">Status</option>
// // // // // // //               <option value="true">Active</option>
// // // // // // //               <option value="false">Inactive</option>
// // // // // // //             </select>
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>
      
// // // // // // //       {/* Supplier List or Detail View */}
// // // // // // //       {isViewingDetails ? (
// // // // // // //         <SupplierDetailView supplier={viewingSupplier} />
// // // // // // //       ) : (
// // // // // // //         <div className="space-y-4">
// // // // // // //           {filteredSuppliers.map((supplier) => (
// // // // // // //             <div
// // // // // // //               key={supplier.id}
// // // // // // //               className="p-4 bg-white border border-gray-200 rounded-md hover:shadow-md transition-shadow"
// // // // // // //             >
// // // // // // //               <div className="flex items-center justify-between">
// // // // // // //                 <div>
// // // // // // //                   <h2 className="font-semibold">{supplier.name}</h2>
// // // // // // //                   <p className="text-sm text-gray-500">{supplier.location}</p>
// // // // // // //                 </div>
// // // // // // //                 <div className="flex items-center gap-2">
// // // // // // //                   <button
// // // // // // //                     onClick={() => handleViewDetails(supplier)}
// // // // // // //                     className="p-2 text-gray-500 hover:text-blue-600"
// // // // // // //                   >
// // // // // // //                     <Eye className="h-5 w-5" />
// // // // // // //                   </button>
// // // // // // //                   <button
// // // // // // //                     onClick={() => handleStartEdit(supplier)}
// // // // // // //                     className="p-2 text-gray-500 hover:text-green-600"
// // // // // // //                   >
// // // // // // //                     <Edit className="h-5 w-5" />
// // // // // // //                   </button>
// // // // // // //                   <button
// // // // // // //                     onClick={() => handleConfirmDelete(supplier)}
// // // // // // //                     className="p-2 text-gray-500 hover:text-red-600"
// // // // // // //                   >
// // // // // // //                     <Trash2 className="h-5 w-5" />
// // // // // // //                   </button>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       )}
      
// // // // // // //       {/* New Supplier Form */}
// // // // // // //       {showNewSupplierForm && (
// // // // // // //         <DetailedSupplierForm
// // // // // // //           supplier={newSupplier}
// // // // // // //           onBasicChange={handleNewSupplierChange}
// // // // // // //           onDealerChange={handleDealerInfoChange}
// // // // // // //           onCancel={() => setShowNewSupplierForm(false)}
// // // // // // //           onSave={handleAddSupplier}
// // // // // // //           title="Add New Supplier"
// // // // // // //           submitLabel="Add Supplier"
// // // // // // //           newProduct={newProduct}
// // // // // // //           onProductChange={handleNewProductChange}
// // // // // // //           onAddProduct={() => handleAddProduct('new')}
// // // // // // //           onRemoveProduct={(id) => handleRemoveProduct(id, 'new')}
// // // // // // //           formType="new"
// // // // // // //         />
// // // // // // //       )}
      
// // // // // // //       {/* Edit Supplier Form */}
// // // // // // //       {editMode && (
// // // // // // //         <DetailedSupplierForm
// // // // // // //           supplier={editingSupplier}
// // // // // // //           onBasicChange={handleEditSupplierChange}
// // // // // // //           onDealerChange={handleDealerInfoChange}
// // // // // // //           onCancel={handleCancelEdit}
// // // // // // //           onSave={handleSaveEdit}
// // // // // // //           title="Edit Supplier"
// // // // // // //           submitLabel="Save Changes"
// // // // // // //           newProduct={newProduct}
// // // // // // //           onProductChange={handleNewProductChange}
// // // // // // //           onAddProduct={() => handleAddProduct('edit')}
// // // // // // //           onRemoveProduct={(id) => handleRemoveProduct(id, 'edit')}
// // // // // // //           formType="edit"
// // // // // // //         />
// // // // // // //       )}
      
// // // // // // //       {/* Delete Confirmation Modal */}
// // // // // // //       {showDeleteConfirm && (
// // // // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
// // // // // // //           <div className="bg-white p-6 rounded-md">
// // // // // // //             <h2 className="text-lg font-semibold mb-4">Delete Supplier</h2>
// // // // // // //             <p className="text-gray-600 mb-6">Are you sure you want to delete this supplier?</p>
// // // // // // //             <div className="flex justify-end gap-4">
// // // // // // //               <button
// // // // // // //                 onClick={handleCancelDelete}
// // // // // // //                 className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
// // // // // // //               >
// // // // // // //                 Cancel
// // // // // // //               </button>
// // // // // // //               <button
// // // // // // //                 onClick={handleDeleteSupplier}
// // // // // // //                 className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
// // // // // // //               >
// // // // // // //                 Delete
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Supc;


// // // // // //   import React, { useState } from 'react';
// // // // // //   import { Search, Filter, Plus, Star, StarOff, X, Edit, Trash2, AlertTriangle, ArrowLeft, Eye } from 'lucide-react';
// // // // // //   import SupplierOrderForm from './SupplierOrderForm';
// // // // // //   const Supc = () => {
// // // // // //     // Sample supplier data with expanded fields
// // // // // //     const [suppliers, setSuppliers] = useState([
// // // // // //       { 
// // // // // //         id: 1, 
// // // // // //         name: 'Tech Solutions Inc.', 
// // // // // //         location: 'San Francisco, USA',
// // // // // //         category: 'Electronics',
// // // // // //         rating: 4,
// // // // // //         active: true,
// // // // // //         dealerInfo: {
// // // // // //           dealerName: 'John Smith',
// // // // // //           phone1: '123-456-7890',
// // // // // //           phone2: '987-654-3210',
// // // // // //           email: 'john@techsolutions.com',
// // // // // //           position: 'Sales Manager'
// // // // // //         },
// // // // // //         shopAddress: '123 Tech Street, San Francisco, CA',
// // // // // //         pincode: '94105',
// // // // // //         gstNo: 'GST1234567890',
// // // // // //         taxId: 'TAX987654321',
// // // // // //         accountDetails: 'Bank of America - Acc #: XXXX1234',
// // // // // //         paymentTerms: 'Net 30',
// // // // // //         billingAddress: '123 Tech Street, San Francisco, CA',
// // // // // //         website: 'www.techsolutions.com',
// // // // // //         products: [
// // // // // //           { id: 1, name: 'Laptops', description: 'High-end laptops' },
// // // // // //           { id: 2, name: 'Smartphones', description: 'Mobile devices' }
// // // // // //         ]
// // // // // //       },
// // // // // //       { 
// // // // // //         id: 2, 
// // // // // //         name: 'Fashion Forward Ltd.', 
// // // // // //         location: 'Paris, France',
// // // // // //         category: 'Apparel',
// // // // // //         rating: 5,
// // // // // //         active: true,
// // // // // //         dealerInfo: {
// // // // // //           dealerName: 'Marie Dupont',
// // // // // //           phone1: '+33-1-2345-6789',
// // // // // //           phone2: '',
// // // // // //           email: 'marie@fashionforward.fr',
// // // // // //           position: 'Owner'
// // // // // //         },
// // // // // //         shopAddress: '45 Rue de la Mode, Paris',
// // // // // //         pincode: '75008',
// // // // // //         gstNo: 'FR872345678',
// // // // // //         taxId: 'FRTAX23456789',
// // // // // //         accountDetails: 'BNP Paribas - Acc #: XXXX5678',
// // // // // //         paymentTerms: 'Net 45',
// // // // // //         billingAddress: '45 Rue de la Mode, Paris',
// // // // // //         website: 'www.fashionforward.fr',
// // // // // //         products: [
// // // // // //           { id: 1, name: 'Designer Clothing', description: 'High fashion apparel' },
// // // // // //           { id: 2, name: 'Accessories', description: 'Fashion accessories' }
// // // // // //         ]
// // // // // //       },
// // // // // //       { 
// // // // // //         id: 3, 
// // // // // //         name: 'Global Materials Co.', 
// // // // // //         location: 'Tokyo, Japan',
// // // // // //         category: 'Raw Materials',
// // // // // //         rating: 3,
// // // // // //         active: true,
// // // // // //         dealerInfo: {
// // // // // //           dealerName: 'Takashi Yamamoto',
// // // // // //           phone1: '+81-3-1234-5678',
// // // // // //           phone2: '+81-3-8765-4321',
// // // // // //           email: 'takashi@globalmaterials.jp',
// // // // // //           position: 'Procurement Director'
// // // // // //         },
// // // // // //         shopAddress: '1-2-3 Marunouchi, Chiyoda-ku, Tokyo',
// // // // // //         pincode: '100-0005',
// // // // // //         gstNo: 'JP34567890',
// // // // // //         taxId: 'JPTAX45678901',
// // // // // //         accountDetails: 'MUFG Bank - Acc #: XXXX6789',
// // // // // //         paymentTerms: 'Net 60',
// // // // // //         billingAddress: '1-2-3 Marunouchi, Chiyoda-ku, Tokyo',
// // // // // //         website: 'www.globalmaterials.jp',
// // // // // //         products: [
// // // // // //           { id: 1, name: 'Industrial Metals', description: 'Steel and aluminum' },
// // // // // //           { id: 2, name: 'Plastics', description: 'Industrial grade polymers' }
// // // // // //         ]
// // // // // //       }
// // // // // //     ]);
    
// // // // // //     // State for viewing detailed supplier information
// // // // // //     const [viewingSupplier, setViewingSupplier] = useState(null);
// // // // // //     const [isViewingDetails, setIsViewingDetails] = useState(false);
    
// // // // // //     // States for search and filters
// // // // // //     const [searchTerm, setSearchTerm] = useState('');
// // // // // //     const [showFilters, setShowFilters] = useState(false);
// // // // // //     const [filters, setFilters] = useState({
// // // // // //       location: '',
// // // // // //       category: '',
// // // // // //       rating: 0,
// // // // // //       active: null
// // // // // //     });
    
// // // // // //     // New supplier form state
// // // // // //     const [showNewSupplierForm, setShowNewSupplierForm] = useState(false);
// // // // // //     const [newSupplier, setNewSupplier] = useState({
// // // // // //       name: '',
// // // // // //       location: '',
// // // // // //       category: '',
// // // // // //       rating: 3,
// // // // // //       active: true,
// // // // // //       dealerInfo: {
// // // // // //         dealerName: '',
// // // // // //         phone1: '',
// // // // // //         phone2: '',
// // // // // //         email: '',
// // // // // //         position: ''
// // // // // //       },
// // // // // //       shopAddress: '',
// // // // // //       pincode: '',
// // // // // //       gstNo: '',
// // // // // //       taxId: '',
// // // // // //       accountDetails: '',
// // // // // //       paymentTerms: 'Net 30',
// // // // // //       billingAddress: '',
// // // // // //       website: '',
// // // // // //       products: []
// // // // // //     });
    
// // // // // //     // Edit supplier state
// // // // // //     const [editMode, setEditMode] = useState(false);
// // // // // //     const [editingSupplierId, setEditingSupplierId] = useState(null);
// // // // // //     const [editingSupplier, setEditingSupplier] = useState({
// // // // // //       name: '',
// // // // // //       location: '',
// // // // // //       category: '',
// // // // // //       rating: 3,
// // // // // //       active: true,
// // // // // //       dealerInfo: {
// // // // // //         dealerName: '',
// // // // // //         phone1: '',
// // // // // //         phone2: '',
// // // // // //         email: '',
// // // // // //         position: ''
// // // // // //       },
// // // // // //       shopAddress: '',
// // // // // //       pincode: '',
// // // // // //       gstNo: '',
// // // // // //       taxId: '',
// // // // // //       accountDetails: '',
// // // // // //       paymentTerms: '',
// // // // // //       billingAddress: '',
// // // // // //       website: '',
// // // // // //       products: []
// // // // // //     });
    
// // // // // //     // New product state
// // // // // //     const [newProduct, setNewProduct] = useState({ name: '', description: '' });
    
// // // // // //     // Delete confirmation state
// // // // // //     const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
// // // // // //     const [supplierToDelete, setSupplierToDelete] = useState(null);
    
// // // // // //     // Categories for dropdown
// // // // // //     const categories = ['Electronics', 'Apparel', 'Raw Materials', 'Transportation', 'Packaging', 'Food', 'Services'];
    
// // // // // //     // Handle search
// // // // // //     const handleSearch = (e) => {
// // // // // //       setSearchTerm(e.target.value);
// // // // // //     };
    
// // // // // //     // Handle filter changes
// // // // // //     const handleFilterChange = (field, value) => {
// // // // // //       setFilters({
// // // // // //         ...filters,
// // // // // //         [field]: value
// // // // // //       });
// // // // // //     };
    
// // // // // //     // Handle new supplier form changes for basic fields
// // // // // //     const handleNewSupplierChange = (field, value) => {
// // // // // //       setNewSupplier({
// // // // // //         ...newSupplier,
// // // // // //         [field]: value
// // // // // //       });
// // // // // //     };
    
// // // // // //     // Handle new supplier form changes for nested dealer info
// // // // // //     const handleDealerInfoChange = (field, value, formType = 'new') => {
// // // // // //       if (formType === 'new') {
// // // // // //         setNewSupplier({
// // // // // //           ...newSupplier,
// // // // // //           dealerInfo: {
// // // // // //             ...newSupplier.dealerInfo,
// // // // // //             [field]: value
// // // // // //           }
// // // // // //         });
// // // // // //       } else if (formType === 'edit') {
// // // // // //         setEditingSupplier({
// // // // // //           ...editingSupplier,
// // // // // //           dealerInfo: {
// // // // // //             ...editingSupplier.dealerInfo,
// // // // // //             [field]: value
// // // // // //           }
// // // // // //         });
// // // // // //       }
// // // // // //     };
    
// // // // // //     // Handle editing supplier form changes
// // // // // //     const handleEditSupplierChange = (field, value) => {
// // // // // //       setEditingSupplier({
// // // // // //         ...editingSupplier,
// // // // // //         [field]: value
// // // // // //       });
// // // // // //     };
    
// // // // // //     // Handle new product changes
// // // // // //     const handleNewProductChange = (field, value) => {
// // // // // //       setNewProduct({
// // // // // //         ...newProduct,
// // // // // //         [field]: value
// // // // // //       });
// // // // // //     };
    
// // // // // //     // Add new product to supplier
// // // // // //     const handleAddProduct = (formType = 'new') => {
// // // // // //       if (!newProduct.name) return;
      
// // // // // //       const productId = Date.now();
// // // // // //       const product = { ...newProduct, id: productId };
      
// // // // // //       if (formType === 'new') {
// // // // // //         setNewSupplier({
// // // // // //           ...newSupplier,
// // // // // //           products: [...newSupplier.products, product]
// // // // // //         });
// // // // // //       } else if (formType === 'edit') {
// // // // // //         setEditingSupplier({
// // // // // //           ...editingSupplier,
// // // // // //           products: [...editingSupplier.products, product]
// // // // // //         });
// // // // // //       }
      
// // // // // //       setNewProduct({ name: '', description: '' });
// // // // // //     };
    
// // // // // //     // Remove product from supplier
// // // // // //     const handleRemoveProduct = (productId, formType = 'new') => {
// // // // // //       if (formType === 'new') {
// // // // // //         setNewSupplier({
// // // // // //           ...newSupplier,
// // // // // //           products: newSupplier.products.filter(p => p.id !== productId)
// // // // // //         });
// // // // // //       } else if (formType === 'edit') {
// // // // // //         setEditingSupplier({
// // // // // //           ...editingSupplier,
// // // // // //           products: editingSupplier.products.filter(p => p.id !== productId)
// // // // // //         });
// // // // // //       }
// // // // // //     };
    
// // // // // //     // Add new supplier
// // // // // //     const handleAddSupplier = () => {
// // // // // //       const id = suppliers.length > 0 ? Math.max(...suppliers.map(s => s.id)) + 1 : 1;
// // // // // //       setSuppliers([...suppliers, { ...newSupplier, id }]);
      
// // // // // //       // Reset form
// // // // // //       setNewSupplier({
// // // // // //         name: '',
// // // // // //         location: '',
// // // // // //         category: '',
// // // // // //         rating: 3,
// // // // // //         active: true,
// // // // // //         dealerInfo: {
// // // // // //           dealerName: '',
// // // // // //           phone1: '',
// // // // // //           phone2: '',
// // // // // //           email: '',
// // // // // //           position: ''
// // // // // //         },
// // // // // //         shopAddress: '',
// // // // // //         pincode: '',
// // // // // //         gstNo: '',
// // // // // //         taxId: '',
// // // // // //         accountDetails: '',
// // // // // //         paymentTerms: 'Net 30',
// // // // // //         billingAddress: '',
// // // // // //         website: '',
// // // // // //         products: []
// // // // // //       });
      
// // // // // //       setShowNewSupplierForm(false);
// // // // // //     };
    
// // // // // //     // Start editing a supplier
// // // // // //     const handleStartEdit = (supplier) => {
// // // // // //       setEditMode(true);
// // // // // //       setEditingSupplierId(supplier.id);
// // // // // //       setEditingSupplier({ ...supplier });
// // // // // //       setShowNewSupplierForm(false);
// // // // // //       setIsViewingDetails(false);
// // // // // //     };
    
// // // // // //     // Save edited supplier
// // // // // //     const handleSaveEdit = () => {
// // // // // //       setSuppliers(suppliers.map(supplier => 
// // // // // //         supplier.id === editingSupplierId ? { ...editingSupplier, id: editingSupplierId } : supplier
// // // // // //       ));
// // // // // //       setEditMode(false);
// // // // // //       setEditingSupplierId(null);
// // // // // //     };
    
// // // // // //     // Cancel editing
// // // // // //     const handleCancelEdit = () => {
// // // // // //       setEditMode(false);
// // // // // //       setEditingSupplierId(null);
// // // // // //     };
    
// // // // // //     // View supplier details
// // // // // //     const handleViewDetails = (supplier) => {
// // // // // //       setViewingSupplier(supplier);
// // // // // //       setIsViewingDetails(true);
// // // // // //     };
    
// // // // // //     // Go back to suppliers list
// // // // // //     const handleBackToList = () => {
// // // // // //       setIsViewingDetails(false);
// // // // // //       setViewingSupplier(null);
// // // // // //     };
    
// // // // // //     // Confirm delete supplier
// // // // // //     const handleConfirmDelete = (supplier) => {
// // // // // //       setSupplierToDelete(supplier);
// // // // // //       setShowDeleteConfirm(true);
// // // // // //     };
    
// // // // // //     // Delete supplier
// // // // // //     const handleDeleteSupplier = () => {
// // // // // //       setSuppliers(suppliers.filter(supplier => supplier.id !== supplierToDelete.id));
// // // // // //       setShowDeleteConfirm(false);
// // // // // //       setSupplierToDelete(null);
      
// // // // // //       // If viewing the deleted supplier, go back to list
// // // // // //       if (viewingSupplier && viewingSupplier.id === supplierToDelete.id) {
// // // // // //         handleBackToList();
// // // // // //       }
// // // // // //     };
    
// // // // // //     // Cancel delete
// // // // // //     const handleCancelDelete = () => {
// // // // // //       setShowDeleteConfirm(false);
// // // // // //       setSupplierToDelete(null);
// // // // // //     };
    
// // // // // //     // Filter suppliers based on search and filters
// // // // // //     const filteredSuppliers = suppliers.filter(supplier => {
// // // // // //       // Search filter
// // // // // //       if (searchTerm && !supplier.name.toLowerCase().includes(searchTerm.toLowerCase())) {
// // // // // //         return false;
// // // // // //       }
      
// // // // // //       // Location filter
// // // // // //       if (filters.location && !supplier.location.toLowerCase().includes(filters.location.toLowerCase())) {
// // // // // //         return false;
// // // // // //       }
      
// // // // // //       // Category filter
// // // // // //       if (filters.category && supplier.category !== filters.category) {
// // // // // //         return false;
// // // // // //       }
      
// // // // // //       // Rating filter
// // // // // //       if (filters.rating > 0 && supplier.rating < filters.rating) {
// // // // // //         return false;
// // // // // //       }
      
// // // // // //       // Active status filter
// // // // // //       if (filters.active !== null && supplier.active !== filters.active) {
// // // // // //         return false;
// // // // // //       }
      
// // // // // //       return true;
// // // // // //     });
    
// // // // // //     // Render star rating
// // // // // //     const renderRating = (rating) => {
// // // // // //       const stars = [];
// // // // // //       for (let i = 1; i <= 5; i++) {
// // // // // //         stars.push(
// // // // // //           i <= rating ? 
// // // // // //             <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" /> : 
// // // // // //             <StarOff key={i} className="w-4 h-4 text-gray-300" />
// // // // // //         );
// // // // // //       }
// // // // // //       return <div className="flex">{stars}</div>;
// // // // // //     };
    
// // // // // //     // Supplier Detail View Component
// // // // // //     const SupplierDetailView = ({ supplier }) => (
// // // // // //       <div className="space-y-6">
// // // // // //         <div className="flex items-center">
// // // // // //           <button 
// // // // // //             onClick={handleBackToList}
// // // // // //             className="mr-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
// // // // // //           >
// // // // // //             <ArrowLeft className="h-5 w-5 text-gray-600" />
// // // // // //           </button>
// // // // // //           <h2 className="text-2xl font-bold text-gray-800">{supplier.name}</h2>
// // // // // //           <div className="ml-auto flex space-x-2">
// // // // // //             <button 
// // // // // //               onClick={() => handleStartEdit(supplier)}
// // // // // //               className="flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
// // // // // //             >
// // // // // //               <Edit className="h-4 w-4" />
// // // // // //               Edit
// // // // // //             </button>
// // // // // //             <button 
// // // // // //               onClick={() => handleConfirmDelete(supplier)}
// // // // // //               className="flex items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
// // // // // //             >
// // // // // //               <Trash2 className="h-4 w-4" />
// // // // // //               Delete
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // // //           {/* Basic Information */}
// // // // // //           <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // // // //             <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h3>
            
// // // // // //             <div className="space-y-3">
// // // // // //               <div className="flex justify-between items-center">
// // // // // //                 <span className="text-gray-500">Category:</span>
// // // // // //                 <span className="font-medium text-gray-800">{supplier.category}</span>
// // // // // //               </div>
// // // // // //               <div className="flex justify-between items-center">
// // // // // //                 <span className="text-gray-500">Location:</span>
// // // // // //                 <span className="font-medium text-gray-800">{supplier.location}</span>
// // // // // //               </div>
// // // // // //               <div className="flex justify-between items-center">
// // // // // //                 <span className="text-gray-500">Rating:</span>
// // // // // //                 <div>{renderRating(supplier.rating)}</div>
// // // // // //               </div>
// // // // // //               <div className="flex justify-between items-center">
// // // // // //                 <span className="text-gray-500">Status:</span>
// // // // // //                 <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${supplier.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
// // // // // //                   {supplier.active ? 'Active' : 'Inactive'}
// // // // // //                 </span>
// // // // // //               </div>
// // // // // //               <div className="flex justify-between items-center">
// // // // // //                 <span className="text-gray-500">Website:</span>
// // // // // //                 <span className="font-medium text-blue-600 hover:underline">{supplier.website || 'N/A'}</span>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Dealer Information */}
// // // // // //           <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // // // //             <h3 className="text-lg font-semibold text-gray-800 mb-4">Dealer Information</h3>
            
// // // // // //             <div className="space-y-3">
// // // // // //               <div className="flex justify-between items-center">
// // // // // //                 <span className="text-gray-500">Name:</span>
// // // // // //                 <span className="font-medium text-gray-800">{supplier.dealerInfo.dealerName || 'N/A'}</span>
// // // // // //               </div>
// // // // // //               <div className="flex justify-between items-center">
// // // // // //                 <span className="text-gray-500">Position:</span>
// // // // // //                 <span className="font-medium text-gray-800">{supplier.dealerInfo.position || 'N/A'}</span>
// // // // // //               </div>
// // // // // //               <div className="flex justify-between items-center">
// // // // // //                 <span className="text-gray-500">Primary Phone:</span>
// // // // // //                 <span className="font-medium text-gray-800">{supplier.dealerInfo.phone1 || 'N/A'}</span>
// // // // // //               </div>
// // // // // //               <div className="flex justify-between items-center">
// // // // // //                 <span className="text-gray-500">Secondary Phone:</span>
// // // // // //                 <span className="font-medium text-gray-800">{supplier.dealerInfo.phone2 || 'N/A'}</span>
// // // // // //               </div>
// // // // // //               <div className="flex justify-between items-center">
// // // // // //                 <span className="text-gray-500">Email:</span>
// // // // // //                 <span className="font-medium text-blue-600 hover:underline">{supplier.dealerInfo.email || 'N/A'}</span>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Business Information */}
// // // // // //           <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // // // //             <h3 className="text-lg font-semibold text-gray-800 mb-4">Business Information</h3>
            
// // // // // //             <div className="space-y-3">
// // // // // //               <div className="flex justify-between items-center">
// // // // // //                 <span className="text-gray-500">Shop Address:</span>
// // // // // //                 <span className="font-medium text-gray-800">{supplier.shopAddress || 'N/A'}</span>
// // // // // //               </div>
// // // // // //               <div className="flex justify-between items-center">
// // // // // //                 <span className="text-gray-500">Pincode:</span>
// // // // // //                 <span className="font-medium text-gray-800">{supplier.pincode || 'N/A'}</span>
// // // // // //               </div>
// // // // // //               <div className="flex justify-between items-center">
// // // // // //                 <span className="text-gray-500">GST Number:</span>
// // // // // //                 <span className="font-medium text-gray-800">{supplier.gstNo || 'N/A'}</span>
// // // // // //               </div>
// // // // // //               <div className="flex justify-between items-center">
// // // // // //                 <span className="text-gray-500">Tax ID:</span>
// // // // // //                 <span className="font-medium text-gray-800">{supplier.taxId || 'N/A'}</span>
// // // // // //               </div>
// // // // // //               <div className="flex justify-between items-center">
// // // // // //                 <span className="text-gray-500">Billing Address:</span>
// // // // // //                 <span className="font-medium text-gray-800">{supplier.billingAddress || 'N/A'}</span>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Financial Information */}
// // // // // //           <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // // // //             <h3 className="text-lg font-semibold text-gray-800 mb-4">Financial Information</h3>
            
// // // // // //             <div className="space-y-3">
// // // // // //               <div className="flex justify-between items-center">
// // // // // //                 <span className="text-gray-500">Account Details:</span>
// // // // // //                 <span className="font-medium text-gray-800">{supplier.accountDetails || 'N/A'}</span>
// // // // // //               </div>
// // // // // //               <div className="flex justify-between items-center">
// // // // // //                 <span className="text-gray-500">Payment Terms:</span>
// // // // // //                 <span className="font-medium text-gray-800">{supplier.paymentTerms || 'N/A'}</span>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         Products Section
// // // // // //         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Products Supplied</h3>
          
// // // // // //           {supplier.products && supplier.products.length > 0 ? (
// // // // // //             <div className="divide-y divide-gray-200">
// // // // // //               {supplier.products.map(product => (
// // // // // //                 <div key={product.id} className="py-3 flex justify-between items-center">
// // // // // //                   <div>
// // // // // //                     <h4 className="font-medium text-gray-800">{product.name}</h4>
// // // // // //                     <p className="text-sm text-gray-500">{product.description}</p>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           ) : (
// // // // // //             <p className="text-gray-500 italic">No products listed</p>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     );
    
// // // // // //     // Detailed Supplier Form Component
// // // // // //     const DetailedSupplierForm = ({ 
// // // // // //       supplier, 
// // // // // //       onBasicChange, 
// // // // // //       onDealerChange, 
// // // // // //       onCancel, 
// // // // // //       onSave, 
// // // // // //       title, 
// // // // // //       submitLabel,
// // // // // //       newProduct,
// // // // // //       onProductChange,
// // // // // //       onAddProduct,
// // // // // //       onRemoveProduct,
// // // // // //       formType
// // // // // //     }) => (
// // // // // //       <div className="border border-gray-200 rounded-lg p-6 mb-6 space-y-6">
// // // // // //         <div className="flex justify-between items-center">
// // // // // //           <h2 className="text-lg font-semibold">{title}</h2>
// // // // // //           <button 
// // // // // //             onClick={onCancel}
// // // // // //             className="text-gray-500 hover:text-gray-700"
// // // // // //           >
// // // // // //             <X className="h-5 w-5" />
// // // // // //           </button>
// // // // // //         </div>
        
// // // // // //         {/* Basic Information */}
// // // // // //         <div>
// // // // // //           <h3 className="font-medium text-gray-700 mb-3">Basic Information</h3>
// // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Supplier name"
// // // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                 value={supplier.name}
// // // // // //                 onChange={(e) => onBasicChange('name', e.target.value)}
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>
            
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="City, Country"
// // // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                 value={supplier.location}
// // // // // //                 onChange={(e) => onBasicChange('location', e.target.value)}
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>
            
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
// // // // // //               <select
// // // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                 value={supplier.category}
// // // // // //                 onChange={(e) => onBasicChange('category', e.target.value)}
// // // // // //                 required
// // // // // //               >
// // // // // //                 <option value="" disabled>Select category</option>
// // // // // //                 {categories.map(category => (
// // // // // //                   <option key={category} value={category}>{category}</option>
// // // // // //                 ))}
// // // // // //               </select>
// // // // // //             </div>
            
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="www.example.com"
// // // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                 value={supplier.website}
// // // // // //                 onChange={(e) => onBasicChange('website', e.target.value)}
// // // // // //               />
// // // // // //             </div>
            
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
// // // // // //               <div className="flex items-center gap-2">
// // // // // //                 {[1, 2, 3, 4, 5].map(rating => (
// // // // // //                   <button
// // // // // //                     key={rating}
// // // // // //                     type="button"
// // // // // //                     onClick={() => onBasicChange('rating', rating)}
// // // // // //                     className="focus:outline-none"
// // // // // //                   >
// // // // // //                     {rating <= supplier.rating ? (
// // // // // //                       <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
// // // // // //                     ) : (
// // // // // //                       <StarOff className="w-6 h-6 text-gray-300" />
// // // // // //                     )}
// // // // // //                   </button>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </div>
            
// // // // // //             <div className="flex items-center">
// // // // // //               <label className="inline-flex items-center cursor-pointer">
// // // // // //                 <input 
// // // // // //                   type="checkbox" 
// // // // // //                   checked={supplier.active}
// // // // // //                   onChange={(e) => onBasicChange('active', e.target.checked)}
// // // // // //                   className="sr-only peer"
// // // // // //                 />
// // // // // //                 <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
// // // // // //                 <span className="ml-3 text-sm font-medium text-gray-700">Active Status</span>
// // // // // //               </label>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         {/* Dealer Information */}
// // // // // //         <div>
// // // // // //           <h3 className="font-medium text-gray-700 mb-3">Dealer Information</h3>
// // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Dealer Name *</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Dealer's full name"
// // // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                 value={supplier.dealerInfo.dealerName}
// // // // // //                 onChange={(e) => onDealerChange('dealerName', e.target.value, formType)}
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>
            
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Sales Manager, Owner, etc."
// // // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                 value={supplier.dealerInfo.position}
// // // // // //                 onChange={(e) => onDealerChange('position', e.target.value, formType)}
// // // // // //               />
// // // // // //             </div>
            
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Primary Phone *</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Primary contact number"
// // // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                 value={supplier.dealerInfo.phone1}
// // // // // //                 onChange={(e) => onDealerChange('phone1', e.target.value, formType)}
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>
            
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Phone</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Alternative contact number"
// // // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                 value={supplier.dealerInfo.phone2}
// // // // // //                 onChange={(e) => onDealerChange('phone2', e.target.value, formType)}
// // // // // //               />
// // // // // //             </div>
            
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
// // // // // //               <input
// // // // // //                 type="email"
// // // // // //                 placeholder="email@example.com"
// // // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                 value={supplier.dealerInfo.email}
// // // // // //                 onChange={(e) => onDealerChange('email', e.target.value, formType)}
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         {/* Business Information */}
// // // // // //         <div>
// // // // // //           <h3 className="font-medium text-gray-700 mb-3">Business Information</h3>
// // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // //             <div className="md:col-span-2">
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Shop Address *</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Complete address"
// // // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                 value={supplier.shopAddress}
// // // // // //                 onChange={(e) => onBasicChange('shopAddress', e.target.value)}
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>
            
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Postal/ZIP code"
// // // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"               value={supplier.pincode}
// // // // // //                 onChange={(e) => onBasicChange('pincode', e.target.value)}
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>
            
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-1">GST Number *</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="GST number"
// // // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                 value={supplier.gstNo}
// // // // // //                 onChange={(e) => onBasicChange('gstNo', e.target.value)}
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>
            
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID *</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Tax identification number"
// // // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                 value={supplier.taxId}
// // // // // //                 onChange={(e) => onBasicChange('taxId', e.target.value)}
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>
            
// // // // // //             <div className="md:col-span-2">
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Billing Address *</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Billing address"
// // // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                 value={supplier.billingAddress}
// // // // // //                 onChange={(e) => onBasicChange('billingAddress', e.target.value)}
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         Financial Information
// // // // // //         <div>
// // // // // //           <h3 className="font-medium text-gray-700 mb-3">Financial Information</h3>
// // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Account Details *</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Bank name and account number"
// // // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                 value={supplier.accountDetails}
// // // // // //                 onChange={(e) => onBasicChange('accountDetails', e.target.value)}
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>
            
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Payment Terms *</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Net 30, Net 45, etc."
// // // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                 value={supplier.paymentTerms}
// // // // // //                 onChange={(e) => onBasicChange('paymentTerms', e.target.value)}
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         {/* Products Supplied */}
// // // // // //         <div>
// // // // // //           <h3 className="font-medium text-gray-700 mb-3">Products Supplied</h3>
// // // // // //           <div className="space-y-4">
// // // // // //             {supplier.products.map((product) => (
// // // // // //               <div key={product.id} className="flex items-center gap-4">
// // // // // //                 <div className="flex-1">
// // // // // //                   <input
// // // // // //                     type="text"
// // // // // //                     placeholder="Product name"
// // // // // //                     className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                     value={product.name}
// // // // // //                     onChange={(e) => onProductChange('name', e.target.value, product.id)}
// // // // // //                   />
// // // // // //                 </div>
// // // // // //                 <div className="flex-1">
// // // // // //                   <input
// // // // // //                     type="text"
// // // // // //                     placeholder="Product description"
// // // // // //                     className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                     value={product.description}
// // // // // //                     onChange={(e) => onProductChange('description', e.target.value, product.id)}
// // // // // //                   />
// // // // // //                 </div>
// // // // // //                 <button
// // // // // //                   type="button"
// // // // // //                   onClick={() => onRemoveProduct(product.id)}
// // // // // //                   className="p-2 text-red-600 hover:text-red-700"
// // // // // //                 >
// // // // // //                   <Trash2 className="h-5 w-5" />
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //             <div className="flex items-center gap-4">
// // // // // //               <div className="flex-1">
// // // // // //                 <input
// // // // // //                   type="text"
// // // // // //                   placeholder="New product name"
// // // // // //                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                   value={newProduct.name}
// // // // // //                   onChange={(e) => onProductChange('name', e.target.value)}
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div className="flex-1">
// // // // // //                 <input
// // // // // //                   type="text"
// // // // // //                   placeholder="New product description"
// // // // // //                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                   value={newProduct.description}
// // // // // //                   onChange={(e) => onProductChange('description', e.target.value)}
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <button
// // // // // //                 type="button"
// // // // // //                 onClick={onAddProduct}
// // // // // //                 className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
// // // // // //               >
// // // // // //                 <Plus className="h-5 w-5" />
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         {/* Form Actions */}
// // // // // //         <div className="flex justify-end gap-4">
// // // // // //           <button
// // // // // //             type="button"
// // // // // //             onClick={onCancel}
// // // // // //             className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
// // // // // //           >
// // // // // //             Cancel
// // // // // //           </button>
// // // // // //           <button
// // // // // //             type="button"
// // // // // //             onClick={onSave}
// // // // // //             className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
// // // // // //           >
// // // // // //             {submitLabel}
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     );
    
// // // // // //     return (
// // // // // //       <div className="p-6 bg-gray-100 min-h-screen">
// // // // // //         {/* Header */}
// // // // // //         <div className="flex justify-between items-center mb-6">
// // // // // //           <h1 className="text-2xl font-bold">Supplier Management</h1>
// // // // // //           <button
// // // // // //             onClick={() => setShowNewSupplierForm(true)}
// // // // // //             className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
// // // // // //           >
// // // // // //             <Plus className="h-5 w-5" />
// // // // // //             Add Supplier
// // // // // //           </button>
// // // // // //         </div>
        
// // // // // //         {/* Search and Filters */}
// // // // // //         <div className="mb-6">
// // // // // //           <div className="flex items-center gap-4">
// // // // // //             <div className="flex-1">
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Search suppliers..."
// // // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                 value={searchTerm}
// // // // // //                 onChange={handleSearch}
// // // // // //               />
// // // // // //             </div>
// // // // // //             <button
// // // // // //               onClick={() => setShowFilters(!showFilters)}
// // // // // //               className="p-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
// // // // // //             >
// // // // // //               <Filter className="h-5 w-5 text-gray-600" />
// // // // // //             </button>
// // // // // //           </div>
          
// // // // // //           {showFilters && (
// // // // // //             <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
// // // // // //               <select
// // // // // //                 className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                 value={filters.location}
// // // // // //                 onChange={(e) => handleFilterChange('location', e.target.value)}
// // // // // //               >
// // // // // //                 <option value="">Location</option>
// // // // // //                 <option value="San Francisco, USA">San Francisco, USA</option>
// // // // // //                 <option value="Paris, France">Paris, France</option>
// // // // // //                 <option value="Tokyo, Japan">Tokyo, Japan</option>
// // // // // //               </select>
              
// // // // // //               <select
// // // // // //                 className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                 value={filters.category}
// // // // // //                 onChange={(e) => handleFilterChange('category', e.target.value)}
// // // // // //               >
// // // // // //                 <option value="">Category</option>
// // // // // //                 {categories.map((category) => (
// // // // // //                   <option key={category} value={category}>{category}</option>
// // // // // //                 ))}
// // // // // //               </select>
              
// // // // // //               <select
// // // // // //                 className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                 value={filters.rating}
// // // // // //                 onChange={(e) => handleFilterChange('rating', parseInt(e.target.value))}
// // // // // //               >
// // // // // //                 <option value="0">Rating</option>
// // // // // //                 <option value="1">1 Star</option>
// // // // // //                 <option value="2">2 Stars</option>
// // // // // //                 <option value="3">3 Stars</option>
// // // // // //                 <option value="4">4 Stars</option>
// // // // // //                 <option value="5">5 Stars</option>
// // // // // //               </select>
              
// // // // // //               <select
// // // // // //                 className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                 value={filters.active ?? ''}
// // // // // //                 onChange={(e) => handleFilterChange('active', e.target.value === 'true')}
// // // // // //               >
// // // // // //                 <option value="">Status</option>
// // // // // //                 <option value="true">Active</option>
// // // // // //                 <option value="false">Inactive</option>
// // // // // //               </select>
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>
        
// // // // // //         {/* Supplier List or Detail View */}
// // // // // //         {isViewingDetails ? (
// // // // // //           <SupplierDetailView supplier={viewingSupplier} />
// // // // // //         ) : (
// // // // // //           <div className="space-y-4">
// // // // // //             {filteredSuppliers.map((supplier) => (
// // // // // //               <div
// // // // // //                 key={supplier.id}
// // // // // //                 className="p-4 bg-white border border-gray-200 rounded-md hover:shadow-md transition-shadow"
// // // // // //               >
// // // // // //                 <div className="flex items-center justify-between">
// // // // // //                   <div>
// // // // // //                     <h2 className="font-semibold">{supplier.name}</h2>
// // // // // //                     <p className="text-sm text-gray-500">{supplier.location}</p>
// // // // // //                   </div>
// // // // // //                   <div className="flex items-center gap-2">
// // // // // //                     <button
// // // // // //                       onClick={() => handleViewDetails(supplier)}
// // // // // //                       className="p-2 text-gray-500 hover:text-blue-600"
// // // // // //                     >
// // // // // //                       <Eye className="h-5 w-5" />
// // // // // //                     </button>
// // // // // //                     <button
// // // // // //                       onClick={() => handleStartEdit(supplier)}
// // // // // //                       className="p-2 text-gray-500 hover:text-green-600"
// // // // // //                     >
// // // // // //                       <Edit className="h-5 w-5" />
// // // // // //                     </button>
// // // // // //                     <button
// // // // // //                       onClick={() => handleConfirmDelete(supplier)}
// // // // // //                       className="p-2 text-gray-500 hover:text-red-600"
// // // // // //                     >
// // // // // //                       <Trash2 className="h-5 w-5" />
// // // // // //                     </button>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         )}
        
// // // // // //         {/* New Supplier Form */}
// // // // // //         {showNewSupplierForm && (
// // // // // //           <DetailedSupplierForm
// // // // // //             supplier={newSupplier}
// // // // // //             onBasicChange={handleNewSupplierChange}
// // // // // //             onDealerChange={handleDealerInfoChange}
// // // // // //             onCancel={() => setShowNewSupplierForm(false)}
// // // // // //             onSave={handleAddSupplier}
// // // // // //             title="Add New Supplier"
// // // // // //             submitLabel="Add Supplier"
// // // // // //             newProduct={newProduct}
// // // // // //             onProductChange={handleNewProductChange}
// // // // // //             onAddProduct={() => handleAddProduct('new')}
// // // // // //             onRemoveProduct={(id) => handleRemoveProduct(id, 'new')}
// // // // // //             formType="new"
// // // // // //           />
// // // // // //         )}
        
// // // // // //         {/* Edit Supplier Form */}
// // // // // //         {editMode && (
// // // // // //           <DetailedSupplierForm
// // // // // //             supplier={editingSupplier}
// // // // // //             onBasicChange={handleEditSupplierChange}
// // // // // //             onDealerChange={handleDealerInfoChange}
// // // // // //             onCancel={handleCancelEdit}
// // // // // //             onSave={handleSaveEdit}
// // // // // //             title="Edit Supplier"
// // // // // //             submitLabel="Save Changes"
// // // // // //             newProduct={newProduct}
// // // // // //             onProductChange={handleNewProductChange}
// // // // // //             onAddProduct={() => handleAddProduct('edit')}
// // // // // //             onRemoveProduct={(id) => handleRemoveProduct(id, 'edit')}
// // // // // //             formType="edit"
// // // // // //           />
// // // // // //         )}
        
// // // // // //         {/* Delete Confirmation Modal */}
// // // // // //         {showDeleteConfirm && (
// // // // // //           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
// // // // // //             <div className="bg-white p-6 rounded-md">
// // // // // //               <h2 className="text-lg font-semibold mb-4">Delete Supplier</h2>
// // // // // //               <p className="text-gray-600 mb-6">Are you sure you want to delete this supplier?</p>
// // // // // //               <div className="flex justify-end gap-4">
// // // // // //                 <button
// // // // // //                   onClick={handleCancelDelete}
// // // // // //                   className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
// // // // // //                 >
// // // // // //                   Cancel
// // // // // //                 </button>
// // // // // //                 <button
// // // // // //                   onClick={handleDeleteSupplier}
// // // // // //                   className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
// // // // // //                 >
// // // // // //                   Delete
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}
// // // // // //         <SupplierOrderForm/>
// // // // // //       </div>
// // // // // //     );
// // // // // //   };

// // // // // //   export default Supc;



// // // // // import React, { useState } from 'react';
// // // // // import { Search, Filter, Plus, Star, StarOff, X, Edit, Trash2, AlertTriangle, ArrowLeft, Eye } from 'lucide-react';
// // // // // import SupplierOrderForm from './SupplierOrderForm'; // Ensure this import is correct

// // // // // const Supc = () => {
// // // // //   // ... (rest of your code)

// // // // //   const [suppliers, setSuppliers] = useState([
// // // // //     { 
// // // // //       id: 1, 
// // // // //       name: 'Tech Solutions Inc.', 
// // // // //       location: 'San Francisco, USA',
// // // // //       category: 'Electronics',
// // // // //       rating: 4,
// // // // //       active: true,
// // // // //       dealerInfo: {
// // // // //         dealerName: 'John Smith',
// // // // //         phone1: '123-456-7890',
// // // // //         phone2: '987-654-3210',
// // // // //         email: 'john@techsolutions.com',
// // // // //         position: 'Sales Manager'
// // // // //       },
// // // // //       shopAddress: '123 Tech Street, San Francisco, CA',
// // // // //       pincode: '94105',
// // // // //       gstNo: 'GST1234567890',
// // // // //       taxId: 'TAX987654321',
// // // // //       accountDetails: 'Bank of America - Acc #: XXXX1234',
// // // // //       paymentTerms: 'Net 30',
// // // // //       billingAddress: '123 Tech Street, San Francisco, CA',
// // // // //       website: 'www.techsolutions.com',
// // // // //       products: [
// // // // //         { id: 1, name: 'Laptops', description: 'High-end laptops' },
// // // // //         { id: 2, name: 'Smartphones', description: 'Mobile devices' }
// // // // //       ]
// // // // //     },
// // // // //     { 
// // // // //       id: 2, 
// // // // //       name: 'Fashion Forward Ltd.', 
// // // // //       location: 'Paris, France',
// // // // //       category: 'Apparel',
// // // // //       rating: 5,
// // // // //       active: true,
// // // // //       dealerInfo: {
// // // // //         dealerName: 'Marie Dupont',
// // // // //         phone1: '+33-1-2345-6789',
// // // // //         phone2: '',
// // // // //         email: 'marie@fashionforward.fr',
// // // // //         position: 'Owner'
// // // // //       },
// // // // //       shopAddress: '45 Rue de la Mode, Paris',
// // // // //       pincode: '75008',
// // // // //       gstNo: 'FR872345678',
// // // // //       taxId: 'FRTAX23456789',
// // // // //       accountDetails: 'BNP Paribas - Acc #: XXXX5678',
// // // // //       paymentTerms: 'Net 45',
// // // // //       billingAddress: '45 Rue de la Mode, Paris',
// // // // //       website: 'www.fashionforward.fr',
// // // // //       products: [
// // // // //         { id: 1, name: 'Designer Clothing', description: 'High fashion apparel' },
// // // // //         { id: 2, name: 'Accessories', description: 'Fashion accessories' }
// // // // //       ]
// // // // //     },
// // // // //     { 
// // // // //       id: 3, 
// // // // //       name: 'Global Materials Co.', 
// // // // //       location: 'Tokyo, Japan',
// // // // //       category: 'Raw Materials',
// // // // //       rating: 3,
// // // // //       active: true,
// // // // //       dealerInfo: {
// // // // //         dealerName: 'Takashi Yamamoto',
// // // // //         phone1: '+81-3-1234-5678',
// // // // //         phone2: '+81-3-8765-4321',
// // // // //         email: 'takashi@globalmaterials.jp',
// // // // //         position: 'Procurement Director'
// // // // //       },
// // // // //       shopAddress: '1-2-3 Marunouchi, Chiyoda-ku, Tokyo',
// // // // //       pincode: '100-0005',
// // // // //       gstNo: 'JP34567890',
// // // // //       taxId: 'JPTAX45678901',
// // // // //       accountDetails: 'MUFG Bank - Acc #: XXXX6789',
// // // // //       paymentTerms: 'Net 60',
// // // // //       billingAddress: '1-2-3 Marunouchi, Chiyoda-ku, Tokyo',
// // // // //       website: 'www.globalmaterials.jp',
// // // // //       products: [
// // // // //         { id: 1, name: 'Industrial Metals', description: 'Steel and aluminum' },
// // // // //         { id: 2, name: 'Plastics', description: 'Industrial grade polymers' }
// // // // //       ]
// // // // //     }
// // // // //   ]);
  
// // // // //   // State for viewing detailed supplier information
// // // // //   const [viewingSupplier, setViewingSupplier] = useState(null);
// // // // //   const [isViewingDetails, setIsViewingDetails] = useState(false);
  
// // // // //   // States for search and filters
// // // // //   const [searchTerm, setSearchTerm] = useState('');
// // // // //   const [showFilters, setShowFilters] = useState(false);
// // // // //   const [filters, setFilters] = useState({
// // // // //     location: '',
// // // // //     category: '',
// // // // //     rating: 0,
// // // // //     active: null
// // // // //   });
  
// // // // //   // New supplier form state
// // // // //   const [showNewSupplierForm, setShowNewSupplierForm] = useState(false);
// // // // //   const [newSupplier, setNewSupplier] = useState({
// // // // //     name: '',
// // // // //     location: '',
// // // // //     category: '',
// // // // //     rating: 3,
// // // // //     active: true,
// // // // //     dealerInfo: {
// // // // //       dealerName: '',
// // // // //       phone1: '',
// // // // //       phone2: '',
// // // // //       email: '',
// // // // //       position: ''
// // // // //     },
// // // // //     shopAddress: '',
// // // // //     pincode: '',
// // // // //     gstNo: '',
// // // // //     taxId: '',
// // // // //     accountDetails: '',
// // // // //     paymentTerms: 'Net 30',
// // // // //     billingAddress: '',
// // // // //     website: '',
// // // // //     products: []
// // // // //   });
  
// // // // //   // Edit supplier state
// // // // //   const [editMode, setEditMode] = useState(false);
// // // // //   const [editingSupplierId, setEditingSupplierId] = useState(null);
// // // // //   const [editingSupplier, setEditingSupplier] = useState({
// // // // //     name: '',
// // // // //     location: '',
// // // // //     category: '',
// // // // //     rating: 3,
// // // // //     active: true,
// // // // //     dealerInfo: {
// // // // //       dealerName: '',
// // // // //       phone1: '',
// // // // //       phone2: '',
// // // // //       email: '',
// // // // //       position: ''
// // // // //     },
// // // // //     shopAddress: '',
// // // // //     pincode: '',
// // // // //     gstNo: '',
// // // // //     taxId: '',
// // // // //     accountDetails: '',
// // // // //     paymentTerms: '',
// // // // //     billingAddress: '',
// // // // //     website: '',
// // // // //     products: []
// // // // //   });
  
// // // // //   // New product state
// // // // //   const [newProduct, setNewProduct] = useState({ name: '', description: '' });
  
// // // // //   // Delete confirmation state
// // // // //   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
// // // // //   const [supplierToDelete, setSupplierToDelete] = useState(null);
  
// // // // //   // Categories for dropdown
// // // // //   const categories = ['Electronics', 'Apparel', 'Raw Materials', 'Transportation', 'Packaging', 'Food', 'Services'];
  
// // // // //   // Handle search
// // // // //   const handleSearch = (e) => {
// // // // //     setSearchTerm(e.target.value);
// // // // //   };
  
// // // // //   // Handle filter changes
// // // // //   const handleFilterChange = (field, value) => {
// // // // //     setFilters({
// // // // //       ...filters,
// // // // //       [field]: value
// // // // //     });
// // // // //   };
  
// // // // //   // Handle new supplier form changes for basic fields
// // // // //   const handleNewSupplierChange = (field, value) => {
// // // // //     setNewSupplier({
// // // // //       ...newSupplier,
// // // // //       [field]: value
// // // // //     });
// // // // //   };
  
// // // // //   // Handle new supplier form changes for nested dealer info
// // // // //   const handleDealerInfoChange = (field, value, formType = 'new') => {
// // // // //     if (formType === 'new') {
// // // // //       setNewSupplier({
// // // // //         ...newSupplier,
// // // // //         dealerInfo: {
// // // // //           ...newSupplier.dealerInfo,
// // // // //           [field]: value
// // // // //         }
// // // // //       });
// // // // //     } else if (formType === 'edit') {
// // // // //       setEditingSupplier({
// // // // //         ...editingSupplier,
// // // // //         dealerInfo: {
// // // // //           ...editingSupplier.dealerInfo,
// // // // //           [field]: value
// // // // //         }
// // // // //       });
// // // // //     }
// // // // //   };
  
// // // // //   // Handle editing supplier form changes
// // // // //   const handleEditSupplierChange = (field, value) => {
// // // // //     setEditingSupplier({
// // // // //       ...editingSupplier,
// // // // //       [field]: value
// // // // //     });
// // // // //   };
  
// // // // //   // Handle new product changes
// // // // //   const handleNewProductChange = (field, value) => {
// // // // //     setNewProduct({
// // // // //       ...newProduct,
// // // // //       [field]: value
// // // // //     });
// // // // //   };
  
// // // // //   // Add new product to supplier
// // // // //   const handleAddProduct = (formType = 'new') => {
// // // // //     if (!newProduct.name) return;
    
// // // // //     const productId = Date.now();
// // // // //     const product = { ...newProduct, id: productId };
    
// // // // //     if (formType === 'new') {
// // // // //       setNewSupplier({
// // // // //         ...newSupplier,
// // // // //         products: [...newSupplier.products, product]
// // // // //       });
// // // // //     } else if (formType === 'edit') {
// // // // //       setEditingSupplier({
// // // // //         ...editingSupplier,
// // // // //         products: [...editingSupplier.products, product]
// // // // //       });
// // // // //     }
    
// // // // //     setNewProduct({ name: '', description: '' });
// // // // //   };
  
// // // // //   // Remove product from supplier
// // // // //   const handleRemoveProduct = (productId, formType = 'new') => {
// // // // //     if (formType === 'new') {
// // // // //       setNewSupplier({
// // // // //         ...newSupplier,
// // // // //         products: newSupplier.products.filter(p => p.id !== productId)
// // // // //       });
// // // // //     } else if (formType === 'edit') {
// // // // //       setEditingSupplier({
// // // // //         ...editingSupplier,
// // // // //         products: editingSupplier.products.filter(p => p.id !== productId)
// // // // //       });
// // // // //     }
// // // // //   };
  
// // // // //   // Add new supplier
// // // // //   const handleAddSupplier = () => {
// // // // //     const id = suppliers.length > 0 ? Math.max(...suppliers.map(s => s.id)) + 1 : 1;
// // // // //     setSuppliers([...suppliers, { ...newSupplier, id }]);
    
// // // // //     // Reset form
// // // // //     setNewSupplier({
// // // // //       name: '',
// // // // //       location: '',
// // // // //       category: '',
// // // // //       rating: 3,
// // // // //       active: true,
// // // // //       dealerInfo: {
// // // // //         dealerName: '',
// // // // //         phone1: '',
// // // // //         phone2: '',
// // // // //         email: '',
// // // // //         position: ''
// // // // //       },
// // // // //       shopAddress: '',
// // // // //       pincode: '',
// // // // //       gstNo: '',
// // // // //       taxId: '',
// // // // //       accountDetails: '',
// // // // //       paymentTerms: 'Net 30',
// // // // //       billingAddress: '',
// // // // //       website: '',
// // // // //       products: []
// // // // //     });
    
// // // // //     setShowNewSupplierForm(false);
// // // // //   };
  
// // // // //   // Start editing a supplier
// // // // //   const handleStartEdit = (supplier) => {
// // // // //     setEditMode(true);
// // // // //     setEditingSupplierId(supplier.id);
// // // // //     setEditingSupplier({ ...supplier });
// // // // //     setShowNewSupplierForm(false);
// // // // //     setIsViewingDetails(false);
// // // // //   };
  
// // // // //   // Save edited supplier
// // // // //   const handleSaveEdit = () => {
// // // // //     setSuppliers(suppliers.map(supplier => 
// // // // //       supplier.id === editingSupplierId ? { ...editingSupplier, id: editingSupplierId } : supplier
// // // // //     ));
// // // // //     setEditMode(false);
// // // // //     setEditingSupplierId(null);
// // // // //   };
  
// // // // //   // Cancel editing
// // // // //   const handleCancelEdit = () => {
// // // // //     setEditMode(false);
// // // // //     setEditingSupplierId(null);
// // // // //   };
  
// // // // //   // View supplier details
// // // // //   const handleViewDetails = (supplier) => {
// // // // //     setViewingSupplier(supplier);
// // // // //     setIsViewingDetails(true);
// // // // //   };
  
// // // // //   // Go back to suppliers list
// // // // //   const handleBackToList = () => {
// // // // //     setIsViewingDetails(false);
// // // // //     setViewingSupplier(null);
// // // // //   };
  
// // // // //   // Confirm delete supplier
// // // // //   const handleConfirmDelete = (supplier) => {
// // // // //     setSupplierToDelete(supplier);
// // // // //     setShowDeleteConfirm(true);
// // // // //   };
  
// // // // //   // Delete supplier
// // // // //   const handleDeleteSupplier = () => {
// // // // //     setSuppliers(suppliers.filter(supplier => supplier.id !== supplierToDelete.id));
// // // // //     setShowDeleteConfirm(false);
// // // // //     setSupplierToDelete(null);
    
// // // // //     // If viewing the deleted supplier, go back to list
// // // // //     if (viewingSupplier && viewingSupplier.id === supplierToDelete.id) {
// // // // //       handleBackToList();
// // // // //     }
// // // // //   };
  
// // // // //   // Cancel delete
// // // // //   const handleCancelDelete = () => {
// // // // //     setShowDeleteConfirm(false);
// // // // //     setSupplierToDelete(null);
// // // // //   };
  
// // // // //   // Filter suppliers based on search and filters
// // // // //   const filteredSuppliers = suppliers.filter(supplier => {
// // // // //     // Search filter
// // // // //     if (searchTerm && !supplier.name.toLowerCase().includes(searchTerm.toLowerCase())) {
// // // // //       return false;
// // // // //     }
    
// // // // //     // Location filter
// // // // //     if (filters.location && !supplier.location.toLowerCase().includes(filters.location.toLowerCase())) {
// // // // //       return false;
// // // // //     }
    
// // // // //     // Category filter
// // // // //     if (filters.category && supplier.category !== filters.category) {
// // // // //       return false;
// // // // //     }
    
// // // // //     // Rating filter
// // // // //     if (filters.rating > 0 && supplier.rating < filters.rating) {
// // // // //       return false;
// // // // //     }
    
// // // // //     // Active status filter
// // // // //     if (filters.active !== null && supplier.active !== filters.active) {
// // // // //       return false;
// // // // //     }
    
// // // // //     return true;
// // // // //   });
  
// // // // //   // Render star rating
// // // // //   const renderRating = (rating) => {
// // // // //     const stars = [];
// // // // //     for (let i = 1; i <= 5; i++) {
// // // // //       stars.push(
// // // // //         i <= rating ? 
// // // // //           <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" /> : 
// // // // //           <StarOff key={i} className="w-4 h-4 text-gray-300" />
// // // // //       );
// // // // //     }
// // // // //     return <div className="flex">{stars}</div>;
// // // // //   };
  
// // // // //   // Supplier Detail View Component
// // // // //   const SupplierDetailView = ({ supplier }) => (
// // // // //     <div className="space-y-6">
// // // // //       <div className="flex items-center">
// // // // //         <button 
// // // // //           onClick={handleBackToList}
// // // // //           className="mr-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
// // // // //         >
// // // // //           <ArrowLeft className="h-5 w-5 text-gray-600" />
// // // // //         </button>
// // // // //         <h2 className="text-2xl font-bold text-gray-800">{supplier.name}</h2>
// // // // //         <div className="ml-auto flex space-x-2">
// // // // //           <button 
// // // // //             onClick={() => handleStartEdit(supplier)}
// // // // //             className="flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
// // // // //           >
// // // // //             <Edit className="h-4 w-4" />
// // // // //             Edit
// // // // //           </button>
// // // // //           <button 
// // // // //             onClick={() => handleConfirmDelete(supplier)}
// // // // //             className="flex items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
// // // // //           >
// // // // //             <Trash2 className="h-4 w-4" />
// // // // //             Delete
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // //         {/* Basic Information */}
// // // // //         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h3>
          
// // // // //           <div className="space-y-3">
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Category:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.category}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Location:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.location}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Rating:</span>
// // // // //               <div>{renderRating(supplier.rating)}</div>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Status:</span>
// // // // //               <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${supplier.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
// // // // //                 {supplier.active ? 'Active' : 'Inactive'}
// // // // //               </span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Website:</span>
// // // // //               <span className="font-medium text-blue-600 hover:underline">{supplier.website || 'N/A'}</span>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Dealer Information */}
// // // // //         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Dealer Information</h3>
          
// // // // //           <div className="space-y-3">
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Name:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.dealerInfo.dealerName || 'N/A'}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Position:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.dealerInfo.position || 'N/A'}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Primary Phone:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.dealerInfo.phone1 || 'N/A'}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Secondary Phone:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.dealerInfo.phone2 || 'N/A'}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Email:</span>
// // // // //               <span className="font-medium text-blue-600 hover:underline">{supplier.dealerInfo.email || 'N/A'}</span>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Business Information */}
// // // // //         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Business Information</h3>
          
// // // // //           <div className="space-y-3">
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Shop Address:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.shopAddress || 'N/A'}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Pincode:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.pincode || 'N/A'}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">GST Number:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.gstNo || 'N/A'}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Tax ID:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.taxId || 'N/A'}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Billing Address:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.billingAddress || 'N/A'}</span>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Financial Information */}
// // // // //         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Financial Information</h3>
          
// // // // //           <div className="space-y-3">
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Account Details:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.accountDetails || 'N/A'}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Payment Terms:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.paymentTerms || 'N/A'}</span>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       Products Section
// // // // //       <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // // //         <h3 className="text-lg font-semibold text-gray-800 mb-4">Products Supplied</h3>
        
// // // // //         {supplier.products && supplier.products.length > 0 ? (
// // // // //           <div className="divide-y divide-gray-200">
// // // // //             {supplier.products.map(product => (
// // // // //               <div key={product.id} className="py-3 flex justify-between items-center">
// // // // //                 <div>
// // // // //                   <h4 className="font-medium text-gray-800">{product.name}</h4>
// // // // //                   <p className="text-sm text-gray-500">{product.description}</p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         ) : (
// // // // //           <p className="text-gray-500 italic">No products listed</p>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
  
// // // // //   // Detailed Supplier Form Component
// // // // //   const DetailedSupplierForm = ({ 
// // // // //     supplier, 
// // // // //     onBasicChange, 
// // // // //     onDealerChange, 
// // // // //     onCancel, 
// // // // //     onSave, 
// // // // //     title, 
// // // // //     submitLabel,
// // // // //     newProduct,
// // // // //     onProductChange,
// // // // //     onAddProduct,
// // // // //     onRemoveProduct,
// // // // //     formType
// // // // //   }) => (
// // // // //     <div className="border border-gray-200 rounded-lg p-6 mb-6 space-y-6">
// // // // //       <div className="flex justify-between items-center">
// // // // //         <h2 className="text-lg font-semibold">{title}</h2>
// // // // //         <button 
// // // // //           onClick={onCancel}
// // // // //           className="text-gray-500 hover:text-gray-700"
// // // // //         >
// // // // //           <X className="h-5 w-5" />
// // // // //         </button>
// // // // //       </div>
      
// // // // //       {/* Basic Information */}
// // // // //       <div>
// // // // //         <h3 className="font-medium text-gray-700 mb-3">Basic Information</h3>
// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Supplier name"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.name}
// // // // //               onChange={(e) => onBasicChange('name', e.target.value)}
// // // // //               required
// // // // //             />
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="City, Country"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.location}
// // // // //               onChange={(e) => onBasicChange('location', e.target.value)}
// // // // //               required
// // // // //             />
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
// // // // //             <select
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.category}
// // // // //               onChange={(e) => onBasicChange('category', e.target.value)}
// // // // //               required
// // // // //             >
// // // // //               <option value="" disabled>Select category</option>
// // // // //               {categories.map(category => (
// // // // //                 <option key={category} value={category}>{category}</option>
// // // // //               ))}
// // // // //             </select>
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="www.example.com"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.website}
// // // // //               onChange={(e) => onBasicChange('website', e.target.value)}
// // // // //             />
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
// // // // //             <div className="flex items-center gap-2">
// // // // //               {[1, 2, 3, 4, 5].map(rating => (
// // // // //                 <button
// // // // //                   key={rating}
// // // // //                   type="button"
// // // // //                   onClick={() => onBasicChange('rating', rating)}
// // // // //                   className="focus:outline-none"
// // // // //                 >
// // // // //                   {rating <= supplier.rating ? (
// // // // //                     <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
// // // // //                   ) : (
// // // // //                     <StarOff className="w-6 h-6 text-gray-300" />
// // // // //                   )}
// // // // //                 </button>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
          
// // // // //           <div className="flex items-center">
// // // // //             <label className="inline-flex items-center cursor-pointer">
// // // // //               <input 
// // // // //                 type="checkbox" 
// // // // //                 checked={supplier.active}
// // // // //                 onChange={(e) => onBasicChange('active', e.target.checked)}
// // // // //                 className="sr-only peer"
// // // // //               />
// // // // //               <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
// // // // //               <span className="ml-3 text-sm font-medium text-gray-700">Active Status</span>
// // // // //             </label>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
      
// // // // //       {/* Dealer Information */}
// // // // //       <div>
// // // // //         <h3 className="font-medium text-gray-700 mb-3">Dealer Information</h3>
// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Dealer Name *</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Dealer's full name"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.dealerInfo.dealerName}
// // // // //               onChange={(e) => onDealerChange('dealerName', e.target.value, formType)}
// // // // //               required
// // // // //             />
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Sales Manager, Owner, etc."
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.dealerInfo.position}
// // // // //               onChange={(e) => onDealerChange('position', e.target.value, formType)}
// // // // //             />
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Primary Phone *</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Primary contact number"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.dealerInfo.phone1}
// // // // //               onChange={(e) => onDealerChange('phone1', e.target.value, formType)}
// // // // //               required
// // // // //             />
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Phone</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Alternative contact number"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.dealerInfo.phone2}
// // // // //               onChange={(e) => onDealerChange('phone2', e.target.value, formType)}
// // // // //             />
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
// // // // //             <input
// // // // //               type="email"
// // // // //               placeholder="email@example.com"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.dealerInfo.email}
// // // // //               onChange={(e) => onDealerChange('email', e.target.value, formType)}
// // // // //               required
// // // // //             />
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
      
// // // // //       {/* Business Information */}
// // // // //       <div>
// // // // //         <h3 className="font-medium text-gray-700 mb-3">Business Information</h3>
// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // //           <div className="md:col-span-2">
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Shop Address *</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Complete address"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.shopAddress}
// // // // //               onChange={(e) => onBasicChange('shopAddress', e.target.value)}
// // // // //               required
// // // // //             />
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Postal/ZIP code"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"               value={supplier.pincode}
// // // // //               onChange={(e) => onBasicChange('pincode', e.target.value)}
// // // // //               required
// // // // //             />
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">GST Number *</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="GST number"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.gstNo}
// // // // //               onChange={(e) => onBasicChange('gstNo', e.target.value)}
// // // // //               required
// // // // //             />
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID *</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Tax identification number"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.taxId}
// // // // //               onChange={(e) => onBasicChange('taxId', e.target.value)}
// // // // //               required
// // // // //             />
// // // // //           </div>
          
// // // // //           <div className="md:col-span-2">
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Billing Address *</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Billing address"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.billingAddress}
// // // // //               onChange={(e) => onBasicChange('billingAddress', e.target.value)}
// // // // //               required
// // // // //             />
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
      
// // // // //       Financial Information
// // // // //       <div>
// // // // //         <h3 className="font-medium text-gray-700 mb-3">Financial Information</h3>
// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Account Details *</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Bank name and account number"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.accountDetails}
// // // // //               onChange={(e) => onBasicChange('accountDetails', e.target.value)}
// // // // //               required
// // // // //             />
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Payment Terms *</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Net 30, Net 45, etc."
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.paymentTerms}
// // // // //               onChange={(e) => onBasicChange('paymentTerms', e.target.value)}
// // // // //               required
// // // // //             />
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
      
// // // // //       {/* Products Supplied */}
// // // // //       <div>
// // // // //         <h3 className="font-medium text-gray-700 mb-3">Products Supplied</h3>
// // // // //         <div className="space-y-4">
// // // // //           {supplier.products.map((product) => (
// // // // //             <div key={product.id} className="flex items-center gap-4">
// // // // //               <div className="flex-1">
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   placeholder="Product name"
// // // // //                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //                   value={product.name}
// // // // //                   onChange={(e) => onProductChange('name', e.target.value, product.id)}
// // // // //                 />
// // // // //               </div>
// // // // //               <div className="flex-1">
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   placeholder="Product description"
// // // // //                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //                   value={product.description}
// // // // //                   onChange={(e) => onProductChange('description', e.target.value, product.id)}
// // // // //                 />
// // // // //               </div>
// // // // //               <button
// // // // //                 type="button"
// // // // //                 onClick={() => onRemoveProduct(product.id)}
// // // // //                 className="p-2 text-red-600 hover:text-red-700"
// // // // //               >
// // // // //                 <Trash2 className="h-5 w-5" />
// // // // //               </button>
// // // // //             </div>
// // // // //           ))}
// // // // //           <div className="flex items-center gap-4">
// // // // //             <div className="flex-1">
// // // // //               <input
// // // // //                 type="text"
// // // // //                 placeholder="New product name"
// // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //                 value={newProduct.name}
// // // // //                 onChange={(e) => onProductChange('name', e.target.value)}
// // // // //               />
// // // // //             </div>
// // // // //             <div className="flex-1">
// // // // //               <input
// // // // //                 type="text"
// // // // //                 placeholder="New product description"
// // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //                 value={newProduct.description}
// // // // //                 onChange={(e) => onProductChange('description', e.target.value)}
// // // // //               />
// // // // //             </div>
// // // // //             <button
// // // // //               type="button"
// // // // //               onClick={onAddProduct}
// // // // //               className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
// // // // //             >
// // // // //               <Plus className="h-5 w-5" />
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
      
// // // // //       {/* Form Actions */}
// // // // //       <div className="flex justify-end gap-4">
// // // // //         <button
// // // // //           type="button"
// // // // //           onClick={onCancel}
// // // // //           className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
// // // // //         >
// // // // //           Cancel
// // // // //         </button>
// // // // //         <button
// // // // //           type="button"
// // // // //           onClick={onSave}
// // // // //           className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
// // // // //         >
// // // // //           {submitLabel}
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
  

// // // // //   return (
// // // // //     <div className="p-6 bg-gray-100 min-h-screen">
// // // // //       {/* Header */}
// // // // //       <div className="flex justify-between items-center mb-6">
// // // // //         <h1 className="text-2xl font-bold">Supplier Management</h1>
// // // // //         <button
// // // // //           onClick={() => setShowNewSupplierForm(true)}
// // // // //           className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
// // // // //         >
// // // // //           <Plus className="h-5 w-5" />
// // // // //           Add Supplier
// // // // //         </button>
// // // // //       </div>

// // // // //       {/* Search and Filters */}
// // // // //       <div className="mb-6">
// // // // //         <div className="flex items-center gap-4">
// // // // //           <div className="flex-1">
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Search suppliers..."
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={searchTerm}
// // // // //               onChange={handleSearch}
// // // // //             />
// // // // //           </div>
// // // // //           <button
// // // // //             onClick={() => setShowFilters(!showFilters)}
// // // // //             className="p-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
// // // // //           >
// // // // //             <Filter className="h-5 w-5 text-gray-600" />
// // // // //           </button>
// // // // //         </div>

// // // // //         {showFilters && (
// // // // //           <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
// // // // //             <select
// // // // //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={filters.location}
// // // // //               onChange={(e) => handleFilterChange('location', e.target.value)}
// // // // //             >
// // // // //               <option value="">Location</option>
// // // // //               <option value="San Francisco, USA">San Francisco, USA</option>
// // // // //               <option value="Paris, France">Paris, France</option>
// // // // //               <option value="Tokyo, Japan">Tokyo, Japan</option>
// // // // //             </select>

// // // // //             <select
// // // // //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={filters.category}
// // // // //               onChange={(e) => handleFilterChange('category', e.target.value)}
// // // // //             >
// // // // //               <option value="">Category</option>
// // // // //               {categories.map((category) => (
// // // // //                 <option key={category} value={category}>{category}</option>
// // // // //               ))}
// // // // //             </select>

// // // // //             <select
// // // // //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={filters.rating}
// // // // //               onChange={(e) => handleFilterChange('rating', parseInt(e.target.value))}
// // // // //             >
// // // // //               <option value="0">Rating</option>
// // // // //               <option value="1">1 Star</option>
// // // // //               <option value="2">2 Stars</option>
// // // // //               <option value="3">3 Stars</option>
// // // // //               <option value="4">4 Stars</option>
// // // // //               <option value="5">5 Stars</option>
// // // // //             </select>

// // // // //             <select
// // // // //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={filters.active ?? ''}
// // // // //               onChange={(e) => handleFilterChange('active', e.target.value === 'true')}
// // // // //             >
// // // // //               <option value="">Status</option>
// // // // //               <option value="true">Active</option>
// // // // //               <option value="false">Inactive</option>
// // // // //             </select>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>

// // // // //       {/* Supplier List or Detail View */}
// // // // //       {isViewingDetails ? (
// // // // //         <SupplierDetailView supplier={viewingSupplier} />
// // // // //       ) : (
// // // // //         <div className="space-y-4">
// // // // //           {filteredSuppliers.map((supplier) => (
// // // // //             <div
// // // // //               key={supplier.id}
// // // // //               className="p-4 bg-white border border-gray-200 rounded-md hover:shadow-md transition-shadow"
// // // // //             >
// // // // //               <div className="flex items-center justify-between">
// // // // //                 <div>
// // // // //                   <h2 className="font-semibold">{supplier.name}</h2>
// // // // //                   <p className="text-sm text-gray-500">{supplier.location}</p>
// // // // //                 </div>
// // // // //                 <div className="flex items-center gap-2">
// // // // //                   <button
// // // // //                     onClick={() => handleViewDetails(supplier)}
// // // // //                     className="p-2 text-gray-500 hover:text-blue-600"
// // // // //                   >
// // // // //                     <Eye className="h-5 w-5" />
// // // // //                   </button>
// // // // //                   <button
// // // // //                     onClick={() => handleStartEdit(supplier)}
// // // // //                     className="p-2 text-gray-500 hover:text-green-600"
// // // // //                   >
// // // // //                     <Edit className="h-5 w-5" />
// // // // //                   </button>
// // // // //                   <button
// // // // //                     onClick={() => handleConfirmDelete(supplier)}
// // // // //                     className="p-2 text-gray-500 hover:text-red-600"
// // // // //                   >
// // // // //                     <Trash2 className="h-5 w-5" />
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       )}

// // // // //       {/* New Supplier Form */}
// // // // //       {showNewSupplierForm && (
// // // // //         <DetailedSupplierForm
// // // // //           supplier={newSupplier}
// // // // //           onBasicChange={handleNewSupplierChange}
// // // // //           onDealerChange={handleDealerInfoChange}
// // // // //           onCancel={() => setShowNewSupplierForm(false)}
// // // // //           onSave={handleAddSupplier}
// // // // //           title="Add New Supplier"
// // // // //           submitLabel="Add Supplier"
// // // // //           newProduct={newProduct}
// // // // //           onProductChange={handleNewProductChange}
// // // // //           onAddProduct={() => handleAddProduct('new')}
// // // // //           onRemoveProduct={(id) => handleRemoveProduct(id, 'new')}
// // // // //           formType="new"
// // // // //         />
// // // // //       )}

// // // // //       {/* Edit Supplier Form */}
// // // // //       {editMode && (
// // // // //         <DetailedSupplierForm
// // // // //           supplier={editingSupplier}
// // // // //           onBasicChange={handleEditSupplierChange}
// // // // //           onDealerChange={handleDealerInfoChange}
// // // // //           onCancel={handleCancelEdit}
// // // // //           onSave={handleSaveEdit}
// // // // //           title="Edit Supplier"
// // // // //           submitLabel="Save Changes"
// // // // //           newProduct={newProduct}
// // // // //           onProductChange={handleNewProductChange}
// // // // //           onAddProduct={() => handleAddProduct('edit')}
// // // // //           onRemoveProduct={(id) => handleRemoveProduct(id, 'edit')}
// // // // //           formType="edit"
// // // // //         />
// // // // //       )}

// // // // //       {/* Delete Confirmation Modal */}
// // // // //       {showDeleteConfirm && (
// // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
// // // // //           <div className="bg-white p-6 rounded-md">
// // // // //             <h2 className="text-lg font-semibold mb-4">Delete Supplier</h2>
// // // // //             <p className="text-gray-600 mb-6">Are you sure you want to delete this supplier?</p>
// // // // //             <div className="flex justify-end gap-4">
// // // // //               <button
// // // // //                 onClick={handleCancelDelete}
// // // // //                 className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
// // // // //               >
// // // // //                 Cancel
// // // // //               </button>
// // // // //               <button
// // // // //                 onClick={handleDeleteSupplier}
// // // // //                 className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
// // // // //               >
// // // // //                 Delete
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       {/* Render SupplierOrderForm */}
// // // // //       <SupplierOrderForm />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Supc;

// // // // // import React, { useState, useEffect, useContext } from 'react';
// // // // // import { Search, Filter, Plus, Star, StarOff, X, Edit, Trash2, AlertTriangle, ArrowLeft, Eye } from 'lucide-react';
// // // // // import SupplierOrderForm from './SupplierOrderForm';
// // // // // import { useStore } from './StoreContext'; // Import the useStore hook

// // // // // const Supc = () => {
// // // // //   const { storeId } = useStore(); // Get storeId from context
// // // // //   const [suppliers, setSuppliers] = useState([]);
// // // // //   const [viewingSupplier, setViewingSupplier] = useState(null);
// // // // //   const [isViewingDetails, setIsViewingDetails] = useState(false);
// // // // //   const [searchTerm, setSearchTerm] = useState('');
// // // // //   const [showFilters, setShowFilters] = useState(false);
// // // // //   const [filters, setFilters] = useState({
// // // // //     location: '',
// // // // //     category: '',
// // // // //     rating: 0,
// // // // //     active: null
// // // // //   });
// // // // //   const [showNewSupplierForm, setShowNewSupplierForm] = useState(false);
// // // // //   const [newSupplier, setNewSupplier] = useState({
// // // // //     name: '',
// // // // //     location: '',
// // // // //     category: '',
// // // // //     rating: 3,
// // // // //     active: true,
// // // // //     dealerInfo: {
// // // // //       dealerName: '',
// // // // //       phone1: '',
// // // // //       phone2: '',
// // // // //       email: '',
// // // // //       position: ''
// // // // //     },
// // // // //     shopAddress: '',
// // // // //     pincode: '',
// // // // //     gstNo: '',
// // // // //     taxId: '',
// // // // //     accountDetails: '',
// // // // //     paymentTerms: 'Net 30',
// // // // //     billingAddress: '',
// // // // //     website: '',
// // // // //     products: []
// // // // //   });
// // // // //   const [editMode, setEditMode] = useState(false);
// // // // //   const [editingSupplierId, setEditingSupplierId] = useState(null);
// // // // //   const [editingSupplier, setEditingSupplier] = useState({
// // // // //     name: '',
// // // // //     location: '',
// // // // //     category: '',
// // // // //     rating: 3,
// // // // //     active: true,
// // // // //     dealerInfo: {
// // // // //       dealerName: '',
// // // // //       phone1: '',
// // // // //       phone2: '',
// // // // //       email: '',
// // // // //       position: ''
// // // // //     },
// // // // //     shopAddress: '',
// // // // //     pincode: '',
// // // // //     gstNo: '',
// // // // //     taxId: '',
// // // // //     accountDetails: '',
// // // // //     paymentTerms: '',
// // // // //     billingAddress: '',
// // // // //     website: '',
// // // // //     products: []
// // // // //   });
// // // // //   const [newProduct, setNewProduct] = useState({ name: '', description: '' });
// // // // //   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
// // // // //   const [supplierToDelete, setSupplierToDelete] = useState(null);
// // // // //   const categories = ['Electronics', 'Apparel', 'Raw Materials', 'Transportation', 'Packaging', 'Food', 'Services'];

// // // // //   // Fetch suppliers from backend
// // // // //   useEffect(() => {
// // // // //     if (storeId) {
// // // // //       fetch(`http://127.0.0.1:5015/suppliers?storeId=${storeId}`)
// // // // //         .then(response => response.json())
// // // // //         .then(data => setSuppliers(data))
// // // // //         .catch(error => console.error('Error fetching suppliers:', error));
// // // // //     }
// // // // //   }, [storeId]);

// // // // //   const handleSearch = (e) => {
// // // // //     setSearchTerm(e.target.value);
// // // // //   };

// // // // //   const handleFilterChange = (field, value) => {
// // // // //     setFilters({
// // // // //       ...filters,
// // // // //       [field]: value
// // // // //     });
// // // // //   };

// // // // //   const handleNewSupplierChange = (field, value) => {
// // // // //     setNewSupplier({
// // // // //       ...newSupplier,
// // // // //       [field]: value
// // // // //     });
// // // // //   };

// // // // //   const handleDealerInfoChange = (field, value, formType = 'new') => {
// // // // //     if (formType === 'new') {
// // // // //       setNewSupplier({
// // // // //         ...newSupplier,
// // // // //         dealerInfo: {
// // // // //           ...newSupplier.dealerInfo,
// // // // //           [field]: value
// // // // //         }
// // // // //       });
// // // // //     } else if (formType === 'edit') {
// // // // //       setEditingSupplier({
// // // // //         ...editingSupplier,
// // // // //         dealerInfo: {
// // // // //           ...editingSupplier.dealerInfo,
// // // // //           [field]: value
// // // // //         }
// // // // //       });
// // // // //     }
// // // // //   };

// // // // //   const handleEditSupplierChange = (field, value) => {
// // // // //     setEditingSupplier({
// // // // //       ...editingSupplier,
// // // // //       [field]: value
// // // // //     });
// // // // //   };

// // // // //   const handleNewProductChange = (field, value) => {
// // // // //     setNewProduct({
// // // // //       ...newProduct,
// // // // //       [field]: value
// // // // //     });
// // // // //   };

// // // // //   const handleAddProduct = (formType = 'new') => {
// // // // //     if (!newProduct.name) return;

// // // // //     const productId = Date.now();
// // // // //     const product = { ...newProduct, id: productId };

// // // // //     if (formType === 'new') {
// // // // //       setNewSupplier({
// // // // //         ...newSupplier,
// // // // //         products: [...newSupplier.products, product]
// // // // //       });
// // // // //     } else if (formType === 'edit') {
// // // // //       setEditingSupplier({
// // // // //         ...editingSupplier,
// // // // //         products: [...editingSupplier.products, product]
// // // // //       });
// // // // //     }

// // // // //     setNewProduct({ name: '', description: '' });
// // // // //   };

// // // // //   const handleRemoveProduct = (productId, formType = 'new') => {
// // // // //     if (formType === 'new') {
// // // // //       setNewSupplier({
// // // // //         ...newSupplier,
// // // // //         products: newSupplier.products.filter(p => p.id !== productId)
// // // // //       });
// // // // //     } else if (formType === 'edit') {
// // // // //       setEditingSupplier({
// // // // //         ...editingSupplier,
// // // // //         products: editingSupplier.products.filter(p => p.id !== productId)
// // // // //       });
// // // // //     }
// // // // //   };

// // // // //   const handleAddSupplier = () => {
// // // // //     fetch(`http://127.0.0.1:5015/suppliers?storeId=${storeId}`, {
// // // // //       method: 'POST',
// // // // //       headers: {
// // // // //         'Content-Type': 'application/json',
// // // // //       },
// // // // //       body: JSON.stringify(newSupplier),
// // // // //     })
// // // // //       .then(response => response.json())
// // // // //       .then(data => {
// // // // //         setSuppliers([...suppliers, data]);
// // // // //         setShowNewSupplierForm(false);
// // // // //       })
// // // // //       .catch(error => console.error('Error adding supplier:', error));
// // // // //   };

// // // // //   const handleStartEdit = (supplier) => {
// // // // //     setEditMode(true);
// // // // //     setEditingSupplierId(supplier._id);
// // // // //     setEditingSupplier({ ...supplier });
// // // // //     setShowNewSupplierForm(false);
// // // // //     setIsViewingDetails(false);
// // // // //   };

// // // // //   const handleSaveEdit = () => {
// // // // //     fetch(`http://127.0.0.1:5015/suppliers/${editingSupplierId}?storeId=${storeId}`, {
// // // // //       method: 'PUT',
// // // // //       headers: {
// // // // //         'Content-Type': 'application/json',
// // // // //       },
// // // // //       body: JSON.stringify(editingSupplier),
// // // // //     })
// // // // //       .then(response => response.json())
// // // // //       .then(data => {
// // // // //         setSuppliers(suppliers.map(supplier => 
// // // // //           supplier._id === editingSupplierId ? data : supplier
// // // // //         ));
// // // // //         setEditMode(false);
// // // // //         setEditingSupplierId(null);
// // // // //       })
// // // // //       .catch(error => console.error('Error updating supplier:', error));
// // // // //   };

// // // // //   const handleCancelEdit = () => {
// // // // //     setEditMode(false);
// // // // //     setEditingSupplierId(null);
// // // // //   };

// // // // //   const handleViewDetails = (supplier) => {
// // // // //     setViewingSupplier(supplier);
// // // // //     setIsViewingDetails(true);
// // // // //   };

// // // // //   const handleBackToList = () => {
// // // // //     setIsViewingDetails(false);
// // // // //     setViewingSupplier(null);
// // // // //   };

// // // // //   const handleConfirmDelete = (supplier) => {
// // // // //     setSupplierToDelete(supplier);
// // // // //     setShowDeleteConfirm(true);
// // // // //   };

// // // // //   const handleDeleteSupplier = () => {
// // // // //     fetch(`http://127.0.0.1:5015/suppliers/${supplierToDelete._id}?storeId=${storeId}`, {
// // // // //       method: 'DELETE',
// // // // //     })
// // // // //       .then(response => {
// // // // //         if (response.ok) {
// // // // //           setSuppliers(suppliers.filter(supplier => supplier._id !== supplierToDelete._id));
// // // // //           setShowDeleteConfirm(false);
// // // // //           setSupplierToDelete(null);

// // // // //           if (viewingSupplier && viewingSupplier._id === supplierToDelete._id) {
// // // // //             handleBackToList();
// // // // //           }
// // // // //         }
// // // // //       })
// // // // //       .catch(error => console.error('Error deleting supplier:', error));
// // // // //   };

// // // // //   const handleCancelDelete = () => {
// // // // //     setShowDeleteConfirm(false);
// // // // //     setSupplierToDelete(null);
// // // // //   };

// // // // //   const filteredSuppliers = suppliers.filter(supplier => {
// // // // //     if (searchTerm && !supplier.name.toLowerCase().includes(searchTerm.toLowerCase())) {
// // // // //       return false;
// // // // //     }
// // // // //     if (filters.location && !supplier.location.toLowerCase().includes(filters.location.toLowerCase())) {
// // // // //       return false;
// // // // //     }
// // // // //     if (filters.category && supplier.category !== filters.category) {
// // // // //       return false;
// // // // //     }
// // // // //     if (filters.rating > 0 && supplier.rating < filters.rating) {
// // // // //       return false;
// // // // //     }
// // // // //     if (filters.active !== null && supplier.active !== filters.active) {
// // // // //       return false;
// // // // //     }
// // // // //     return true;
// // // // //   });

// // // // //   const renderRating = (rating) => {
// // // // //     const stars = [];
// // // // //     for (let i = 1; i <= 5; i++) {
// // // // //       stars.push(
// // // // //         i <= rating ? 
// // // // //           <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" /> : 
// // // // //           <StarOff key={i} className="w-4 h-4 text-gray-300" />
// // // // //       );
// // // // //     }
// // // // //     return <div className="flex">{stars}</div>;
// // // // //   };

// // // // //   const SupplierDetailView = ({ supplier }) => (
// // // // //     <div className="space-y-6">
// // // // //       <div className="flex items-center">
// // // // //         <button 
// // // // //           onClick={handleBackToList}
// // // // //           className="mr-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
// // // // //         >
// // // // //           <ArrowLeft className="h-5 w-5 text-gray-600" />
// // // // //         </button>
// // // // //         <h2 className="text-2xl font-bold text-gray-800">{supplier.name}</h2>
// // // // //         <div className="ml-auto flex space-x-2">
// // // // //           <button 
// // // // //             onClick={() => handleStartEdit(supplier)}
// // // // //             className="flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
// // // // //           >
// // // // //             <Edit className="h-4 w-4" />
// // // // //             Edit
// // // // //           </button>
// // // // //           <button 
// // // // //             onClick={() => handleConfirmDelete(supplier)}
// // // // //             className="flex items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
// // // // //           >
// // // // //             <Trash2 className="h-4 w-4" />
// // // // //             Delete
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // //         {/* Basic Information */}
// // // // //         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h3>
          
// // // // //           <div className="space-y-3">
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Category:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.category}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Location:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.location}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Rating:</span>
// // // // //               <div>{renderRating(supplier.rating)}</div>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Status:</span>
// // // // //               <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${supplier.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
// // // // //                 {supplier.active ? 'Active' : 'Inactive'}
// // // // //               </span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Website:</span>
// // // // //               <span className="font-medium text-blue-600 hover:underline">{supplier.website || 'N/A'}</span>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Dealer Information */}
// // // // //         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Dealer Information</h3>
          
// // // // //           <div className="space-y-3">
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Name:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.dealerInfo.dealerName || 'N/A'}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Position:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.dealerInfo.position || 'N/A'}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Primary Phone:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.dealerInfo.phone1 || 'N/A'}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Secondary Phone:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.dealerInfo.phone2 || 'N/A'}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Email:</span>
// // // // //               <span className="font-medium text-blue-600 hover:underline">{supplier.dealerInfo.email || 'N/A'}</span>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Business Information */}
// // // // //         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Business Information</h3>
          
// // // // //           <div className="space-y-3">
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Shop Address:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.shopAddress || 'N/A'}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Pincode:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.pincode || 'N/A'}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">GST Number:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.gstNo || 'N/A'}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Tax ID:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.taxId || 'N/A'}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Billing Address:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.billingAddress || 'N/A'}</span>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Financial Information */}
// // // // //         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Financial Information</h3>
          
// // // // //           <div className="space-y-3">
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Account Details:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.accountDetails || 'N/A'}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-gray-500">Payment Terms:</span>
// // // // //               <span className="font-medium text-gray-800">{supplier.paymentTerms || 'N/A'}</span>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Products Section */}
// // // // //       <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // // //         <h3 className="text-lg font-semibold text-gray-800 mb-4">Products Supplied</h3>
        
// // // // //         {supplier.products && supplier.products.length > 0 ? (
// // // // //           <div className="divide-y divide-gray-200">
// // // // //             {supplier.products.map(product => (
// // // // //               <div key={product.id} className="py-3 flex justify-between items-center">
// // // // //                 <div>
// // // // //                   <h4 className="font-medium text-gray-800">{product.name}</h4>
// // // // //                   <p className="text-sm text-gray-500">{product.description}</p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         ) : (
// // // // //           <p className="text-gray-500 italic">No products listed</p>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );

// // // // //   const DetailedSupplierForm = ({ 
// // // // //     supplier, 
// // // // //     onBasicChange, 
// // // // //     onDealerChange, 
// // // // //     onCancel, 
// // // // //     onSave, 
// // // // //     title, 
// // // // //     submitLabel,
// // // // //     newProduct,
// // // // //     onProductChange,
// // // // //     onAddProduct,
// // // // //     onRemoveProduct,
// // // // //     formType
// // // // //   }) => (
// // // // //     <div className="border border-gray-200 rounded-lg p-6 mb-6 space-y-6">
// // // // //       <div className="flex justify-between items-center">
// // // // //         <h2 className="text-lg font-semibold">{title}</h2>
// // // // //         <button 
// // // // //           onClick={onCancel}
// // // // //           className="text-gray-500 hover:text-gray-700"
// // // // //         >
// // // // //           <X className="h-5 w-5" />
// // // // //         </button>
// // // // //       </div>
      
// // // // //       {/* Basic Information */}
// // // // //       <div>
// // // // //         <h3 className="font-medium text-gray-700 mb-3">Basic Information</h3>
// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Supplier name"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.name}
// // // // //               onChange={(e) => onBasicChange('name', e.target.value)}
// // // // //               required
// // // // //             />
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="City, Country"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.location}
// // // // //               onChange={(e) => onBasicChange('location', e.target.value)}
// // // // //               required
// // // // //             />
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
// // // // //             <select
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.category}
// // // // //               onChange={(e) => onBasicChange('category', e.target.value)}
// // // // //               required
// // // // //             >
// // // // //               <option value="" disabled>Select category</option>
// // // // //               {categories.map(category => (
// // // // //                 <option key={category} value={category}>{category}</option>
// // // // //               ))}
// // // // //             </select>
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="www.example.com"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.website}
// // // // //               onChange={(e) => onBasicChange('website', e.target.value)}
// // // // //             />
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
// // // // //             <div className="flex items-center gap-2">
// // // // //               {[1, 2, 3, 4, 5].map(rating => (
// // // // //                 <button
// // // // //                   key={rating}
// // // // //                   type="button"
// // // // //                   onClick={() => onBasicChange('rating', rating)}
// // // // //                   className="focus:outline-none"
// // // // //                 >
// // // // //                   {rating <= supplier.rating ? (
// // // // //                     <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
// // // // //                   ) : (
// // // // //                     <StarOff className="w-6 h-6 text-gray-300" />
// // // // //                   )}
// // // // //                 </button>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
          
// // // // //           <div className="flex items-center">
// // // // //             <label className="inline-flex items-center cursor-pointer">
// // // // //               <input 
// // // // //                 type="checkbox" 
// // // // //                 checked={supplier.active}
// // // // //                 onChange={(e) => onBasicChange('active', e.target.checked)}
// // // // //                 className="sr-only peer"
// // // // //               />
// // // // //               <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
// // // // //               <span className="ml-3 text-sm font-medium text-gray-700">Active Status</span>
// // // // //             </label>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
      
// // // // //       {/* Dealer Information */}
// // // // //       <div>
// // // // //         <h3 className="font-medium text-gray-700 mb-3">Dealer Information</h3>
// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Dealer Name *</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Dealer's full name"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.dealerInfo.dealerName}
// // // // //               onChange={(e) => onDealerChange('dealerName', e.target.value, formType)}
// // // // //               required
// // // // //             />
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Sales Manager, Owner, etc."
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.dealerInfo.position}
// // // // //               onChange={(e) => onDealerChange('position', e.target.value, formType)}
// // // // //             />
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Primary Phone *</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Primary contact number"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.dealerInfo.phone1}
// // // // //               onChange={(e) => onDealerChange('phone1', e.target.value, formType)}
// // // // //               required
// // // // //             />
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Phone</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Alternative contact number"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.dealerInfo.phone2}
// // // // //               onChange={(e) => onDealerChange('phone2', e.target.value, formType)}
// // // // //             />
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
// // // // //             <input
// // // // //               type="email"
// // // // //               placeholder="email@example.com"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.dealerInfo.email}
// // // // //               onChange={(e) => onDealerChange('email', e.target.value, formType)}
// // // // //               required
// // // // //             />
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
      
// // // // //       {/* Business Information */}
// // // // //       <div>
// // // // //         <h3 className="font-medium text-gray-700 mb-3">Business Information</h3>
// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // //           <div className="md:col-span-2">
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Shop Address *</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Complete address"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.shopAddress}
// // // // //               onChange={(e) => onBasicChange('shopAddress', e.target.value)}
// // // // //               required
// // // // //             />
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Postal/ZIP code"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"               value={supplier.pincode}
// // // // //               onChange={(e) => onBasicChange('pincode', e.target.value)}
// // // // //               required
// // // // //             />
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">GST Number *</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="GST number"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.gstNo}
// // // // //               onChange={(e) => onBasicChange('gstNo', e.target.value)}
// // // // //               required
// // // // //             />
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID *</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Tax identification number"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.taxId}
// // // // //               onChange={(e) => onBasicChange('taxId', e.target.value)}
// // // // //               required
// // // // //             />
// // // // //           </div>
          
// // // // //           <div className="md:col-span-2">
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Billing Address *</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Billing address"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.billingAddress}
// // // // //               onChange={(e) => onBasicChange('billingAddress', e.target.value)}
// // // // //               required
// // // // //             />
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
      
// // // // //       {/* Financial Information */}
// // // // //       <div>
// // // // //         <h3 className="font-medium text-gray-700 mb-3">Financial Information</h3>
// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Account Details *</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Bank name and account number"
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.accountDetails}
// // // // //               onChange={(e) => onBasicChange('accountDetails', e.target.value)}
// // // // //               required
// // // // //             />
// // // // //           </div>
          
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Payment Terms *</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Net 30, Net 45, etc."
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={supplier.paymentTerms}
// // // // //               onChange={(e) => onBasicChange('paymentTerms', e.target.value)}
// // // // //               required
// // // // //             />
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
      
// // // // //       {/* Products Supplied */}
// // // // //       <div>
// // // // //         <h3 className="font-medium text-gray-700 mb-3">Products Supplied</h3>
// // // // //         <div className="space-y-4">
// // // // //           {supplier.products.map((product) => (
// // // // //             <div key={product.id} className="flex items-center gap-4">
// // // // //               <div className="flex-1">
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   placeholder="Product name"
// // // // //                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //                   value={product.name}
// // // // //                   onChange={(e) => onProductChange('name', e.target.value, product.id)}
// // // // //                 />
// // // // //               </div>
// // // // //               <div className="flex-1">
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   placeholder="Product description"
// // // // //                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //                   value={product.description}
// // // // //                   onChange={(e) => onProductChange('description', e.target.value, product.id)}
// // // // //                 />
// // // // //               </div>
// // // // //               <button
// // // // //                 type="button"
// // // // //                 onClick={() => onRemoveProduct(product.id)}
// // // // //                 className="p-2 text-red-600 hover:text-red-700"
// // // // //               >
// // // // //                 <Trash2 className="h-5 w-5" />
// // // // //               </button>
// // // // //             </div>
// // // // //           ))}
// // // // //           <div className="flex items-center gap-4">
// // // // //             <div className="flex-1">
// // // // //               <input
// // // // //                 type="text"
// // // // //                 placeholder="New product name"
// // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //                 value={newProduct.name}
// // // // //                 onChange={(e) => onProductChange('name', e.target.value)}
// // // // //               />
// // // // //             </div>
// // // // //             <div className="flex-1">
// // // // //               <input
// // // // //                 type="text"
// // // // //                 placeholder="New product description"
// // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //                 value={newProduct.description}
// // // // //                 onChange={(e) => onProductChange('description', e.target.value)}
// // // // //               />
// // // // //             </div>
// // // // //             <button
// // // // //               type="button"
// // // // //               onClick={onAddProduct}
// // // // //               className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
// // // // //             >
// // // // //               <Plus className="h-5 w-5" />
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
      
// // // // //       {/* Form Actions */}
// // // // //       <div className="flex justify-end gap-4">
// // // // //         <button
// // // // //           type="button"
// // // // //           onClick={onCancel}
// // // // //           className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
// // // // //         >
// // // // //           Cancel
// // // // //         </button>
// // // // //         <button
// // // // //           type="button"
// // // // //           onClick={onSave}
// // // // //           className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
// // // // //         >
// // // // //           {submitLabel}
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );

// // // // //   return (
// // // // //     <div className="p-6 bg-gray-100 min-h-screen">
// // // // //       {/* Header */}
// // // // //       <div className="flex justify-between items-center mb-6">
// // // // //         <h1 className="text-2xl font-bold">Supplier Management</h1>
// // // // //         <button
// // // // //           onClick={() => setShowNewSupplierForm(true)}
// // // // //           className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
// // // // //         >
// // // // //           <Plus className="h-5 w-5" />
// // // // //           Add Supplier
// // // // //         </button>
// // // // //       </div>

// // // // //       {/* Search and Filters */}
// // // // //       <div className="mb-6">
// // // // //         <div className="flex items-center gap-4">
// // // // //           <div className="flex-1">
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Search suppliers..."
// // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={searchTerm}
// // // // //               onChange={handleSearch}
// // // // //             />
// // // // //           </div>
// // // // //           <button
// // // // //             onClick={() => setShowFilters(!showFilters)}
// // // // //             className="p-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
// // // // //           >
// // // // //             <Filter className="h-5 w-5 text-gray-600" />
// // // // //           </button>
// // // // //         </div>

// // // // //         {showFilters && (
// // // // //           <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
// // // // //             <select
// // // // //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={filters.location}
// // // // //               onChange={(e) => handleFilterChange('location', e.target.value)}
// // // // //             >
// // // // //               <option value="">Location</option>
// // // // //               <option value="San Francisco, USA">San Francisco, USA</option>
// // // // //               <option value="Paris, France">Paris, France</option>
// // // // //               <option value="Tokyo, Japan">Tokyo, Japan</option>
// // // // //             </select>

// // // // //             <select
// // // // //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={filters.category}
// // // // //               onChange={(e) => handleFilterChange('category', e.target.value)}
// // // // //             >
// // // // //               <option value="">Category</option>
// // // // //               {categories.map((category) => (
// // // // //                 <option key={category} value={category}>{category}</option>
// // // // //               ))}
// // // // //             </select>

// // // // //             <select
// // // // //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={filters.rating}
// // // // //               onChange={(e) => handleFilterChange('rating', parseInt(e.target.value))}
// // // // //             >
// // // // //               <option value="0">Rating</option>
// // // // //               <option value="1">1 Star</option>
// // // // //               <option value="2">2 Stars</option>
// // // // //               <option value="3">3 Stars</option>
// // // // //               <option value="4">4 Stars</option>
// // // // //               <option value="5">5 Stars</option>
// // // // //             </select>

// // // // //             <select
// // // // //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // //               value={filters.active ?? ''}
// // // // //               onChange={(e) => handleFilterChange('active', e.target.value === 'true')}
// // // // //             >
// // // // //               <option value="">Status</option>
// // // // //               <option value="true">Active</option>
// // // // //               <option value="false">Inactive</option>
// // // // //             </select>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>

// // // // //       {/* Supplier List or Detail View */}
// // // // //       {isViewingDetails ? (
// // // // //         <SupplierDetailView supplier={viewingSupplier} />
// // // // //       ) : (
// // // // //         <div className="space-y-4">
// // // // //           {filteredSuppliers.map((supplier) => (
// // // // //             <div
// // // // //               key={supplier._id}
// // // // //               className="p-4 bg-white border border-gray-200 rounded-md hover:shadow-md transition-shadow"
// // // // //             >
// // // // //               <div className="flex items-center justify-between">
// // // // //                 <div>
// // // // //                   <h2 className="font-semibold">{supplier.name}</h2>
// // // // //                   <p className="text-sm text-gray-500">{supplier.location}</p>
// // // // //                 </div>
// // // // //                 <div className="flex items-center gap-2">
// // // // //                   <button
// // // // //                     onClick={() => handleViewDetails(supplier)}
// // // // //                     className="p-2 text-gray-500 hover:text-blue-600"
// // // // //                   >
// // // // //                     <Eye className="h-5 w-5" />
// // // // //                   </button>
// // // // //                   <button
// // // // //                     onClick={() => handleStartEdit(supplier)}
// // // // //                     className="p-2 text-gray-500 hover:text-green-600"
// // // // //                   >
// // // // //                     <Edit className="h-5 w-5" />
// // // // //                   </button>
// // // // //                   <button
// // // // //                     onClick={() => handleConfirmDelete(supplier)}
// // // // //                     className="p-2 text-gray-500 hover:text-red-600"
// // // // //                   >
// // // // //                     <Trash2 className="h-5 w-5" />
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       )}

// // // // //       {/* New Supplier Form */}
// // // // //       {showNewSupplierForm && (
// // // // //         <DetailedSupplierForm
// // // // //           supplier={newSupplier}
// // // // //           onBasicChange={handleNewSupplierChange}
// // // // //           onDealerChange={handleDealerInfoChange}
// // // // //           onCancel={() => setShowNewSupplierForm(false)}
// // // // //           onSave={handleAddSupplier}
// // // // //           title="Add New Supplier"
// // // // //           submitLabel="Add Supplier"
// // // // //           newProduct={newProduct}
// // // // //           onProductChange={handleNewProductChange}
// // // // //           onAddProduct={() => handleAddProduct('new')}
// // // // //           onRemoveProduct={(id) => handleRemoveProduct(id, 'new')}
// // // // //           formType="new"
// // // // //         />
// // // // //       )}

// // // // //       {/* Edit Supplier Form */}
// // // // //       {editMode && (
// // // // //         <DetailedSupplierForm
// // // // //           supplier={editingSupplier}
// // // // //           onBasicChange={handleEditSupplierChange}
// // // // //           onDealerChange={handleDealerInfoChange}
// // // // //           onCancel={handleCancelEdit}
// // // // //           onSave={handleSaveEdit}
// // // // //           title="Edit Supplier"
// // // // //           submitLabel="Save Changes"
// // // // //           newProduct={newProduct}
// // // // //           onProductChange={handleNewProductChange}
// // // // //           onAddProduct={() => handleAddProduct('edit')}
// // // // //           onRemoveProduct={(id) => handleRemoveProduct(id, 'edit')}
// // // // //           formType="edit"
// // // // //         />
// // // // //       )}

// // // // //       {/* Delete Confirmation Modal */}
// // // // //       {showDeleteConfirm && (
// // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
// // // // //           <div className="bg-white p-6 rounded-md">
// // // // //             <h2 className="text-lg font-semibold mb-4">Delete Supplier</h2>
// // // // //             <p className="text-gray-600 mb-6">Are you sure you want to delete this supplier?</p>
// // // // //             <div className="flex justify-end gap-4">
// // // // //               <button
// // // // //                 onClick={handleCancelDelete}
// // // // //                 className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
// // // // //               >
// // // // //                 Cancel
// // // // //               </button>
// // // // //               <button
// // // // //                 onClick={handleDeleteSupplier}
// // // // //                 className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
// // // // //               >
// // // // //                 Delete
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       {/* Render SupplierOrderForm */}
// // // // //       <SupplierOrderForm />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Supc;
// // // // import React, { useState, useEffect, useContext, useCallback, useMemo } from 'react';
// // // // import { Search, Filter, Plus, Star, StarOff, X, Edit, Trash2, AlertTriangle, ArrowLeft, Eye } from 'lucide-react';
// // // // import SupplierOrderForm from './SupplierOrderForm';
// // // // import { useStore } from './StoreContext'; // Import the useStore hook

// // // // const Supc = () => {
// // // //   const { storeId } = useStore(); // Get storeId from context
// // // //   const [suppliers, setSuppliers] = useState([]);
// // // //   const [viewingSupplier, setViewingSupplier] = useState(null);
// // // //   const [isViewingDetails, setIsViewingDetails] = useState(false);
// // // //   const [searchTerm, setSearchTerm] = useState('');
// // // //   const [showFilters, setShowFilters] = useState(false);
// // // //   const [filters, setFilters] = useState({
// // // //     location: '',
// // // //     category: '',
// // // //     rating: 0,
// // // //     active: null
// // // //   });
// // // //   const [showNewSupplierForm, setShowNewSupplierForm] = useState(false);
// // // //   const [newSupplier, setNewSupplier] = useState({
// // // //     name: '',
// // // //     location: '',
// // // //     category: '',
// // // //     rating: 3,
// // // //     active: true,
// // // //     dealerInfo: {
// // // //       dealerName: '',
// // // //       phone1: '',
// // // //       phone2: '',
// // // //       email: '',
// // // //       position: ''
// // // //     },
// // // //     shopAddress: '',
// // // //     pincode: '',
// // // //     gstNo: '',
// // // //     taxId: '',
// // // //     accountDetails: '',
// // // //     paymentTerms: 'Net 30',
// // // //     billingAddress: '',
// // // //     website: '',
// // // //     products: []
// // // //   });
// // // //   const [editMode, setEditMode] = useState(false);
// // // //   const [editingSupplierId, setEditingSupplierId] = useState(null);
// // // //   const [editingSupplier, setEditingSupplier] = useState({
// // // //     name: '',
// // // //     location: '',
// // // //     category: '',
// // // //     rating: 3,
// // // //     active: true,
// // // //     dealerInfo: {
// // // //       dealerName: '',
// // // //       phone1: '',
// // // //       phone2: '',
// // // //       email: '',
// // // //       position: ''
// // // //     },
// // // //     shopAddress: '',
// // // //     pincode: '',
// // // //     gstNo: '',
// // // //     taxId: '',
// // // //     accountDetails: '',
// // // //     paymentTerms: '',
// // // //     billingAddress: '',
// // // //     website: '',
// // // //     products: []
// // // //   });
// // // //   const [newProduct, setNewProduct] = useState({ name: '', description: '' });
// // // //   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
// // // //   const [supplierToDelete, setSupplierToDelete] = useState(null);
// // // //   const categories = ['Electronics', 'Apparel', 'Raw Materials', 'Transportation', 'Packaging', 'Food', 'Services'];

// // // //   // Fetch suppliers from backend
// // // //   useEffect(() => {
// // // //     if (storeId) {
// // // //       fetch(`http://127.0.0.1:5015/suppliers?storeId=${storeId}`)
// // // //         .then(response => response.json())
// // // //         .then(data => setSuppliers(data))
// // // //         .catch(error => console.error('Error fetching suppliers:', error));
// // // //     }
// // // //   }, [storeId]);

// // // //   const handleSearch = (e) => {
// // // //     setSearchTerm(e.target.value);
// // // //   };

// // // //   const handleFilterChange = useCallback((field, value) => {
// // // //     setFilters(prevFilters => ({
// // // //       ...prevFilters,
// // // //       [field]: value
// // // //     }));
// // // //   }, []);

// // // //   const handleNewSupplierChange = useCallback((field, value) => {
// // // //     setNewSupplier(prevSupplier => ({
// // // //       ...prevSupplier,
// // // //       [field]: value
// // // //     }));
// // // //   }, []);

// // // //   const handleDealerInfoChange = useCallback((field, value, formType = 'new') => {
// // // //     if (formType === 'new') {
// // // //       setNewSupplier(prevSupplier => ({
// // // //         ...prevSupplier,
// // // //         dealerInfo: {
// // // //           ...prevSupplier.dealerInfo,
// // // //           [field]: value
// // // //         }
// // // //       }));
// // // //     } else if (formType === 'edit') {
// // // //       setEditingSupplier(prevSupplier => ({
// // // //         ...prevSupplier,
// // // //         dealerInfo: {
// // // //           ...prevSupplier.dealerInfo,
// // // //           [field]: value
// // // //         }
// // // //       }));
// // // //     }
// // // //   }, []);

// // // //   const handleEditSupplierChange = useCallback((field, value) => {
// // // //     setEditingSupplier(prevSupplier => ({
// // // //       ...prevSupplier,
// // // //       [field]: value
// // // //     }));
// // // //   }, []);

// // // //   const handleNewProductChange = useCallback((field, value) => {
// // // //     setNewProduct(prevProduct => ({
// // // //       ...prevProduct,
// // // //       [field]: value
// // // //     }));
// // // //   }, []);

// // // //   const handleAddProduct = useCallback((formType = 'new') => {
// // // //     if (!newProduct.name) return;

// // // //     const productId = Date.now();
// // // //     const product = { ...newProduct, id: productId };

// // // //     if (formType === 'new') {
// // // //       setNewSupplier(prevSupplier => ({
// // // //         ...prevSupplier,
// // // //         products: [...prevSupplier.products, product]
// // // //       }));
// // // //     } else if (formType === 'edit') {
// // // //       setEditingSupplier(prevSupplier => ({
// // // //         ...prevSupplier,
// // // //         products: [...prevSupplier.products, product]
// // // //       }));
// // // //     }

// // // //     setNewProduct({ name: '', description: '' });
// // // //   }, [newProduct]);

// // // //   const handleRemoveProduct = useCallback((productId, formType = 'new') => {
// // // //     if (formType === 'new') {
// // // //       setNewSupplier(prevSupplier => ({
// // // //         ...prevSupplier,
// // // //         products: prevSupplier.products.filter(p => p.id !== productId)
// // // //       }));
// // // //     } else if (formType === 'edit') {
// // // //       setEditingSupplier(prevSupplier => ({
// // // //         ...prevSupplier,
// // // //         products: prevSupplier.products.filter(p => p.id !== productId)
// // // //       }));
// // // //     }
// // // //   }, []);

// // // //   const handleAddSupplier = useCallback(() => {
// // // //     fetch(`http://127.0.0.1:5015/suppliers?storeId=${storeId}`, {
// // // //       method: 'POST',
// // // //       headers: {
// // // //         'Content-Type': 'application/json',
// // // //       },
// // // //       body: JSON.stringify(newSupplier),
// // // //     })
// // // //       .then(response => response.json())
// // // //       .then(data => {
// // // //         setSuppliers(prevSuppliers => [...prevSuppliers, data]);
// // // //         setShowNewSupplierForm(false);
// // // //       })
// // // //       .catch(error => console.error('Error adding supplier:', error));
// // // //   }, [newSupplier, storeId]);

// // // //   const handleStartEdit = useCallback((supplier) => {
// // // //     setEditMode(true);
// // // //     setEditingSupplierId(supplier._id);
// // // //     setEditingSupplier({ ...supplier });
// // // //     setShowNewSupplierForm(false);
// // // //     setIsViewingDetails(false);
// // // //   }, []);

// // // //   const handleSaveEdit = useCallback(() => {
// // // //     fetch(`http://127.0.0.1:5015/suppliers/${editingSupplierId}?storeId=${storeId}`, {
// // // //       method: 'PUT',
// // // //       headers: {
// // // //         'Content-Type': 'application/json',
// // // //       },
// // // //       body: JSON.stringify(editingSupplier),
// // // //     })
// // // //       .then(response => response.json())
// // // //       .then(data => {
// // // //         setSuppliers(prevSuppliers =>
// // // //           prevSuppliers.map(supplier =>
// // // //             supplier._id === editingSupplierId ? data : supplier
// // // //           )
// // // //         );
// // // //         setEditMode(false);
// // // //         setEditingSupplierId(null);
// // // //       })
// // // //       .catch(error => console.error('Error updating supplier:', error));
// // // //   }, [editingSupplier, editingSupplierId, storeId]);

// // // //   const handleCancelEdit = useCallback(() => {
// // // //     setEditMode(false);
// // // //     setEditingSupplierId(null);
// // // //   }, []);

// // // //   const handleViewDetails = useCallback((supplier) => {
// // // //     setViewingSupplier(supplier);
// // // //     setIsViewingDetails(true);
// // // //   }, []);

// // // //   const handleBackToList = useCallback(() => {
// // // //     setIsViewingDetails(false);
// // // //     setViewingSupplier(null);
// // // //   }, []);

// // // //   const handleConfirmDelete = useCallback((supplier) => {
// // // //     setSupplierToDelete(supplier);
// // // //     setShowDeleteConfirm(true);
// // // //   }, []);

// // // //   const handleDeleteSupplier = useCallback(() => {
// // // //     fetch(`http://127.0.0.1:5015/suppliers/${supplierToDelete._id}?storeId=${storeId}`, {
// // // //       method: 'DELETE',
// // // //     })
// // // //       .then(response => {
// // // //         if (response.ok) {
// // // //           setSuppliers(prevSuppliers =>
// // // //             prevSuppliers.filter(supplier => supplier._id !== supplierToDelete._id)
// // // //           );
// // // //           setShowDeleteConfirm(false);
// // // //           setSupplierToDelete(null);

// // // //           if (viewingSupplier && viewingSupplier._id === supplierToDelete._id) {
// // // //             handleBackToList();
// // // //           }
// // // //         }
// // // //       })
// // // //       .catch(error => console.error('Error deleting supplier:', error));
// // // //   }, [supplierToDelete, storeId, viewingSupplier, handleBackToList]);

// // // //   const handleCancelDelete = useCallback(() => {
// // // //     setShowDeleteConfirm(false);
// // // //     setSupplierToDelete(null);
// // // //   }, []);

// // // //   const filteredSuppliers = useMemo(() => {
// // // //     return suppliers.filter(supplier => {
// // // //       if (searchTerm && !supplier.name.toLowerCase().includes(searchTerm.toLowerCase())) {
// // // //         return false;
// // // //       }
// // // //       if (filters.location && !supplier.location.toLowerCase().includes(filters.location.toLowerCase())) {
// // // //         return false;
// // // //       }
// // // //       if (filters.category && supplier.category !== filters.category) {
// // // //         return false;
// // // //       }
// // // //       if (filters.rating > 0 && supplier.rating < filters.rating) {
// // // //         return false;
// // // //       }
// // // //       if (filters.active !== null && supplier.active !== filters.active) {
// // // //         return false;
// // // //       }
// // // //       return true;
// // // //     });
// // // //   }, [suppliers, searchTerm, filters]);

// // // //   const renderRating = (rating) => {
// // // //     const stars = [];
// // // //     for (let i = 1; i <= 5; i++) {
// // // //       stars.push(
// // // //         i <= rating ?
// // // //           <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" /> :
// // // //           <StarOff key={i} className="w-4 h-4 text-gray-300" />
// // // //       );
// // // //     }
// // // //     return <div className="flex">{stars}</div>;
// // // //   };

// // // //   const SupplierDetailView = ({ supplier }) => (
// // // //     <div className="space-y-6">
// // // //       <div className="flex items-center">
// // // //         <button
// // // //           onClick={handleBackToList}
// // // //           className="mr-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
// // // //         >
// // // //           <ArrowLeft className="h-5 w-5 text-gray-600" />
// // // //         </button>
// // // //         <h2 className="text-2xl font-bold text-gray-800">{supplier.name}</h2>
// // // //         <div className="ml-auto flex space-x-2">
// // // //           <button
// // // //             onClick={() => handleStartEdit(supplier)}
// // // //             className="flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
// // // //           >
// // // //             <Edit className="h-4 w-4" />
// // // //             Edit
// // // //           </button>
// // // //           <button
// // // //             onClick={() => handleConfirmDelete(supplier)}
// // // //             className="flex items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
// // // //           >
// // // //             <Trash2 className="h-4 w-4" />
// // // //             Delete
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //         {/* Basic Information */}
// // // //         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h3>

// // // //           <div className="space-y-3">
// // // //             <div className="flex justify-between items-center">
// // // //               <span className="text-gray-500">Category:</span>
// // // //               <span className="font-medium text-gray-800">{supplier.category}</span>
// // // //             </div>
// // // //             <div className="flex justify-between items-center">
// // // //               <span className="text-gray-500">Location:</span>
// // // //               <span className="font-medium text-gray-800">{supplier.location}</span>
// // // //             </div>
// // // //             <div className="flex justify-between items-center">
// // // //               <span className="text-gray-500">Rating:</span>
// // // //               <div>{renderRating(supplier.rating)}</div>
// // // //             </div>
// // // //             <div className="flex justify-between items-center">
// // // //               <span className="text-gray-500">Status:</span>
// // // //               <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${supplier.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
// // // //                 {supplier.active ? 'Active' : 'Inactive'}
// // // //               </span>
// // // //             </div>
// // // //             <div className="flex justify-between items-center">
// // // //               <span className="text-gray-500">Website:</span>
// // // //               <span className="font-medium text-blue-600 hover:underline">{supplier.website || 'N/A'}</span>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Dealer Information */}
// // // //         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Dealer Information</h3>

// // // //           <div className="space-y-3">
// // // //             <div className="flex justify-between items-center">
// // // //               <span className="text-gray-500">Name:</span>
// // // //               <span className="font-medium text-gray-800">{supplier.dealerInfo.dealerName || 'N/A'}</span>
// // // //             </div>
// // // //             <div className="flex justify-between items-center">
// // // //               <span className="text-gray-500">Position:</span>
// // // //               <span className="font-medium text-gray-800">{supplier.dealerInfo.position || 'N/A'}</span>
// // // //             </div>
// // // //             <div className="flex justify-between items-center">
// // // //               <span className="text-gray-500">Primary Phone:</span>
// // // //               <span className="font-medium text-gray-800">{supplier.dealerInfo.phone1 || 'N/A'}</span>
// // // //             </div>
// // // //             <div className="flex justify-between items-center">
// // // //               <span className="text-gray-500">Secondary Phone:</span>
// // // //               <span className="font-medium text-gray-800">{supplier.dealerInfo.phone2 || 'N/A'}</span>
// // // //             </div>
// // // //             <div className="flex justify-between items-center">
// // // //               <span className="text-gray-500">Email:</span>
// // // //               <span className="font-medium text-blue-600 hover:underline">{supplier.dealerInfo.email || 'N/A'}</span>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Business Information */}
// // // //         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Business Information</h3>

// // // //           <div className="space-y-3">
// // // //             <div className="flex justify-between items-center">
// // // //               <span className="text-gray-500">Shop Address:</span>
// // // //               <span className="font-medium text-gray-800">{supplier.shopAddress || 'N/A'}</span>
// // // //             </div>
// // // //             <div className="flex justify-between items-center">
// // // //               <span className="text-gray-500">Pincode:</span>
// // // //               <span className="font-medium text-gray-800">{supplier.pincode || 'N/A'}</span>
// // // //             </div>
// // // //             <div className="flex justify-between items-center">
// // // //               <span className="text-gray-500">GST Number:</span>
// // // //               <span className="font-medium text-gray-800">{supplier.gstNo || 'N/A'}</span>
// // // //             </div>
// // // //             <div className="flex justify-between items-center">
// // // //               <span className="text-gray-500">Tax ID:</span>
// // // //               <span className="font-medium text-gray-800">{supplier.taxId || 'N/A'}</span>
// // // //             </div>
// // // //             <div className="flex justify-between items-center">
// // // //               <span className="text-gray-500">Billing Address:</span>
// // // //               <span className="font-medium text-gray-800">{supplier.billingAddress || 'N/A'}</span>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Financial Information */}
// // // //         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Financial Information</h3>

// // // //           <div className="space-y-3">
// // // //             <div className="flex justify-between items-center">
// // // //               <span className="text-gray-500">Account Details:</span>
// // // //               <span className="font-medium text-gray-800">{supplier.accountDetails || 'N/A'}</span>
// // // //             </div>
// // // //             <div className="flex justify-between items-center">
// // // //               <span className="text-gray-500">Payment Terms:</span>
// // // //               <span className="font-medium text-gray-800">{supplier.paymentTerms || 'N/A'}</span>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Products Section */}
// // // //       <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // // //         <h3 className="text-lg font-semibold text-gray-800 mb-4">Products Supplied</h3>

// // // //         {supplier.products && supplier.products.length > 0 ? (
// // // //           <div className="divide-y divide-gray-200">
// // // //             {supplier.products.map(product => (
// // // //               <div key={product.id} className="py-3 flex justify-between items-center">
// // // //                 <div>
// // // //                   <h4 className="font-medium text-gray-800">{product.name}</h4>
// // // //                   <p className="text-sm text-gray-500">{product.description}</p>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         ) : (
// // // //           <p className="text-gray-500 italic">No products listed</p>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );

// // // //   const DetailedSupplierForm = ({
// // // //     supplier,
// // // //     onBasicChange,
// // // //     onDealerChange,
// // // //     onCancel,
// // // //     onSave,
// // // //     title,
// // // //     submitLabel,
// // // //     newProduct,
// // // //     onProductChange,
// // // //     onAddProduct,
// // // //     onRemoveProduct,
// // // //     formType
// // // //   }) => (
// // // //     <div className="border border-gray-200 rounded-lg p-6 mb-6 space-y-6">
// // // //       <div className="flex justify-between items-center">
// // // //         <h2 className="text-lg font-semibold">{title}</h2>
// // // //         <button
// // // //           onClick={onCancel}
// // // //           className="text-gray-500 hover:text-gray-700"
// // // //         >
// // // //           <X className="h-5 w-5" />
// // // //         </button>
// // // //       </div>

// // // //       {/* Basic Information */}
// // // //       <div>
// // // //         <h3 className="font-medium text-gray-700 mb-3">Basic Information</h3>
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Supplier name"
// // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //               value={supplier.name}
// // // //               onChange={(e) => onBasicChange('name', e.target.value)}
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="City, Country"
// // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //               value={supplier.location}
// // // //               onChange={(e) => onBasicChange('location', e.target.value)}
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
// // // //             <select
// // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //               value={supplier.category}
// // // //               onChange={(e) => onBasicChange('category', e.target.value)}
// // // //               required
// // // //             >
// // // //               <option value="" disabled>Select category</option>
// // // //               {categories.map(category => (
// // // //                 <option key={category} value={category}>{category}</option>
// // // //               ))}
// // // //             </select>
// // // //           </div>

// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="www.example.com"
// // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //               value={supplier.website}
// // // //               onChange={(e) => onBasicChange('website', e.target.value)}
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
// // // //             <div className="flex items-center gap-2">
// // // //               {[1, 2, 3, 4, 5].map(rating => (
// // // //                 <button
// // // //                   key={rating}
// // // //                   type="button"
// // // //                   onClick={() => onBasicChange('rating', rating)}
// // // //                   className="focus:outline-none"
// // // //                 >
// // // //                   {rating <= supplier.rating ? (
// // // //                     <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
// // // //                   ) : (
// // // //                     <StarOff className="w-6 h-6 text-gray-300" />
// // // //                   )}
// // // //                 </button>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           <div className="flex items-center">
// // // //             <label className="inline-flex items-center cursor-pointer">
// // // //               <input
// // // //                 type="checkbox"
// // // //                 checked={supplier.active}
// // // //                 onChange={(e) => onBasicChange('active', e.target.checked)}
// // // //                 className="sr-only peer"
// // // //               />
// // // //               <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
// // // //               <span className="ml-3 text-sm font-medium text-gray-700">Active Status</span>
// // // //             </label>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Dealer Information */}
// // // //       <div>
// // // //         <h3 className="font-medium text-gray-700 mb-3">Dealer Information</h3>
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Dealer Name *</label>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Dealer's full name"
// // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //               value={supplier.dealerInfo.dealerName}
// // // //               onChange={(e) => onDealerChange('dealerName', e.target.value, formType)}
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Sales Manager, Owner, etc."
// // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //               value={supplier.dealerInfo.position}
// // // //               onChange={(e) => onDealerChange('position', e.target.value, formType)}
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Primary Phone *</label>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Primary contact number"
// // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //               value={supplier.dealerInfo.phone1}
// // // //               onChange={(e) => onDealerChange('phone1', e.target.value, formType)}
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Phone</label>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Alternative contact number"
// // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //               value={supplier.dealerInfo.phone2}
// // // //               onChange={(e) => onDealerChange('phone2', e.target.value, formType)}
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
// // // //             <input
// // // //               type="email"
// // // //               placeholder="email@example.com"
// // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //               value={supplier.dealerInfo.email}
// // // //               onChange={(e) => onDealerChange('email', e.target.value, formType)}
// // // //               required
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Business Information */}
// // // //       <div>
// // // //         <h3 className="font-medium text-gray-700 mb-3">Business Information</h3>
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //           <div className="md:col-span-2">
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Shop Address *</label>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Complete address"
// // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //               value={supplier.shopAddress}
// // // //               onChange={(e) => onBasicChange('shopAddress', e.target.value)}
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Postal/ZIP code"
// // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //               value={supplier.pincode}
// // // //               onChange={(e) => onBasicChange('pincode', e.target.value)}
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">GST Number *</label>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="GST number"
// // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //               value={supplier.gstNo}
// // // //               onChange={(e) => onBasicChange('gstNo', e.target.value)}
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID *</label>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Tax identification number"
// // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //               value={supplier.taxId}
// // // //               onChange={(e) => onBasicChange('taxId', e.target.value)}
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div className="md:col-span-2">
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Billing Address *</label>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Billing address"
// // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //               value={supplier.billingAddress}
// // // //               onChange={(e) => onBasicChange('billingAddress', e.target.value)}
// // // //               required
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Financial Information */}
// // // //       <div>
// // // //         <h3 className="font-medium text-gray-700 mb-3">Financial Information</h3>
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Account Details *</label>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Bank name and account number"
// // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //               value={supplier.accountDetails}
// // // //               onChange={(e) => onBasicChange('accountDetails', e.target.value)}
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Payment Terms *</label>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Net 30, Net 45, etc."
// // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //               value={supplier.paymentTerms}
// // // //               onChange={(e) => onBasicChange('paymentTerms', e.target.value)}
// // // //               required
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Products Supplied */}
// // // //       <div>
// // // //         <h3 className="font-medium text-gray-700 mb-3">Products Supplied</h3>
// // // //         <div className="space-y-4">
// // // //           {supplier.products.map((product) => (
// // // //             <div key={product.id} className="flex items-center gap-4">
// // // //               <div className="flex-1">
// // // //                 <input
// // // //                   type="text"
// // // //                   placeholder="Product name"
// // // //                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //                   value={product.name}
// // // //                   onChange={(e) => onProductChange('name', e.target.value, product.id)}
// // // //                 />
// // // //               </div>
// // // //               <div className="flex-1">
// // // //                 <input
// // // //                   type="text"
// // // //                   placeholder="Product description"
// // // //                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //                   value={product.description}
// // // //                   onChange={(e) => onProductChange('description', e.target.value, product.id)}
// // // //                 />
// // // //               </div>
// // // //               <button
// // // //                 type="button"
// // // //                 onClick={() => onRemoveProduct(product.id)}
// // // //                 className="p-2 text-red-600 hover:text-red-700"
// // // //               >
// // // //                 <Trash2 className="h-5 w-5" />
// // // //               </button>
// // // //             </div>
// // // //           ))}
// // // //           <div className="flex items-center gap-4">
// // // //             <div className="flex-1">
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="New product name"
// // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //                 value={newProduct.name}
// // // //                 onChange={(e) => onProductChange('name', e.target.value)}
// // // //               />
// // // //             </div>
// // // //             <div className="flex-1">
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="New product description"
// // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //                 value={newProduct.description}
// // // //                 onChange={(e) => onProductChange('description', e.target.value)}
// // // //               />
// // // //             </div>
// // // //             <button
// // // //               type="button"
// // // //               onClick={onAddProduct}
// // // //               className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
// // // //             >
// // // //               <Plus className="h-5 w-5" />
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Form Actions */}
// // // //       <div className="flex justify-end gap-4">
// // // //         <button
// // // //           type="button"
// // // //           onClick={onCancel}
// // // //           className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
// // // //         >
// // // //           Cancel
// // // //         </button>
// // // //         <button
// // // //           type="button"
// // // //           onClick={onSave}
// // // //           className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
// // // //         >
// // // //           {submitLabel}
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );

// // // //   return (
// // // //     <div className="p-6 bg-gray-100 min-h-screen">
// // // //       {/* Header */}
// // // //       <div className="flex justify-between items-center mb-6">
// // // //         <h1 className="text-2xl font-bold">Supplier Management</h1>
// // // //         <button
// // // //           onClick={() => setShowNewSupplierForm(true)}
// // // //           className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
// // // //         >
// // // //           <Plus className="h-5 w-5" />
// // // //           Add Supplier
// // // //         </button>
// // // //       </div>

// // // //       {/* Search and Filters */}
// // // //       <div className="mb-6">
// // // //         <div className="flex items-center gap-4">
// // // //           <div className="flex-1">
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Search suppliers..."
// // // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //               value={searchTerm}
// // // //               onChange={handleSearch}
// // // //             />
// // // //           </div>
// // // //           <button
// // // //             onClick={() => setShowFilters(!showFilters)}
// // // //             className="p-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
// // // //           >
// // // //             <Filter className="h-5 w-5 text-gray-600" />
// // // //           </button>
// // // //         </div>

// // // //         {showFilters && (
// // // //           <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
// // // //             <select
// // // //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //               value={filters.location}
// // // //               onChange={(e) => handleFilterChange('location', e.target.value)}
// // // //             >
// // // //               <option value="">Location</option>
// // // //               <option value="San Francisco, USA">San Francisco, USA</option>
// // // //               <option value="Paris, France">Paris, France</option>
// // // //               <option value="Tokyo, Japan">Tokyo, Japan</option>
// // // //             </select>

// // // //             <select
// // // //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //               value={filters.category}
// // // //               onChange={(e) => handleFilterChange('category', e.target.value)}
// // // //             >
// // // //               <option value="">Category</option>
// // // //               {categories.map((category) => (
// // // //                 <option key={category} value={category}>{category}</option>
// // // //               ))}
// // // //             </select>

// // // //             <select
// // // //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //               value={filters.rating}
// // // //               onChange={(e) => handleFilterChange('rating', parseInt(e.target.value))}
// // // //             >
// // // //               <option value="0">Rating</option>
// // // //               <option value="1">1 Star</option>
// // // //               <option value="2">2 Stars</option>
// // // //               <option value="3">3 Stars</option>
// // // //               <option value="4">4 Stars</option>
// // // //               <option value="5">5 Stars</option>
// // // //             </select>

// // // //             <select
// // // //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // //               value={filters.active ?? ''}
// // // //               onChange={(e) => handleFilterChange('active', e.target.value === 'true')}
// // // //             >
// // // //               <option value="">Status</option>
// // // //               <option value="true">Active</option>
// // // //               <option value="false">Inactive</option>
// // // //             </select>
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       {/* Supplier List or Detail View */}
// // // //       {isViewingDetails ? (
// // // //         <SupplierDetailView supplier={viewingSupplier} />
// // // //       ) : (
// // // //         <div className="space-y-4">
// // // //           {filteredSuppliers.map((supplier) => (
// // // //             <div
// // // //               key={supplier._id}
// // // //               className="p-4 bg-white border border-gray-200 rounded-md hover:shadow-md transition-shadow"
// // // //             >
// // // //               <div className="flex items-center justify-between">
// // // //                 <div>
// // // //                   <h2 className="font-semibold">{supplier.name}</h2>
// // // //                   <p className="text-sm text-gray-500">{supplier.location}</p>
// // // //                 </div>
// // // //                 <div className="flex items-center gap-2">
// // // //                   <button
// // // //                     onClick={() => handleViewDetails(supplier)}
// // // //                     className="p-2 text-gray-500 hover:text-blue-600"
// // // //                   >
// // // //                     <Eye className="h-5 w-5" />
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={() => handleStartEdit(supplier)}
// // // //                     className="p-2 text-gray-500 hover:text-green-600"
// // // //                   >
// // // //                     <Edit className="h-5 w-5" />
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={() => handleConfirmDelete(supplier)}
// // // //                     className="p-2 text-gray-500 hover:text-red-600"
// // // //                   >
// // // //                     <Trash2 className="h-5 w-5" />
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       )}

// // // //       {/* New Supplier Form */}
// // // //       {showNewSupplierForm && (
// // // //         <DetailedSupplierForm
// // // //           supplier={newSupplier}
// // // //           onBasicChange={handleNewSupplierChange}
// // // //           onDealerChange={handleDealerInfoChange}
// // // //           onCancel={() => setShowNewSupplierForm(false)}
// // // //           onSave={handleAddSupplier}
// // // //           title="Add New Supplier"
// // // //           submitLabel="Add Supplier"
// // // //           newProduct={newProduct}
// // // //           onProductChange={handleNewProductChange}
// // // //           onAddProduct={() => handleAddProduct('new')}
// // // //           onRemoveProduct={(id) => handleRemoveProduct(id, 'new')}
// // // //           formType="new"
// // // //         />
// // // //       )}

// // // //       {/* Edit Supplier Form */}
// // // //       {editMode && (
// // // //         <DetailedSupplierForm
// // // //           supplier={editingSupplier}
// // // //           onBasicChange={handleEditSupplierChange}
// // // //           onDealerChange={handleDealerInfoChange}
// // // //           onCancel={handleCancelEdit}
// // // //           onSave={handleSaveEdit}
// // // //           title="Edit Supplier"
// // // //           submitLabel="Save Changes"
// // // //           newProduct={newProduct}
// // // //           onProductChange={handleNewProductChange}
// // // //           onAddProduct={() => handleAddProduct('edit')}
// // // //           onRemoveProduct={(id) => handleRemoveProduct(id, 'edit')}
// // // //           formType="edit"
// // // //         />
// // // //       )}

// // // //       {/* Delete Confirmation Modal */}
// // // //       {showDeleteConfirm && (
// // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
// // // //           <div className="bg-white p-6 rounded-md">
// // // //             <h2 className="text-lg font-semibold mb-4">Delete Supplier</h2>
// // // //             <p className="text-gray-600 mb-6">Are you sure you want to delete this supplier?</p>
// // // //             <div className="flex justify-end gap-4">
// // // //               <button
// // // //                 onClick={handleCancelDelete}
// // // //                 className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
// // // //               >
// // // //                 Cancel
// // // //               </button>
// // // //               <button
// // // //                 onClick={handleDeleteSupplier}
// // // //                 className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
// // // //               >
// // // //                 Delete
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {/* Render SupplierOrderForm */}
// // // //       <SupplierOrderForm />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Supc;
// // // import React, { useState, useEffect, useContext, useCallback, useMemo } from 'react';
// // // import { Search, Filter, Plus, Star, StarOff, X, Edit, Trash2, AlertTriangle, ArrowLeft, Eye } from 'lucide-react';
// // // import SupplierOrderForm from './SupplierOrderForm';
// // // import { useStore } from './StoreContext'; // Import the useStore hook

// // // const Supc = () => {
// // //   const { storeId } = useStore(); // Get storeId from context
// // //   const [suppliers, setSuppliers] = useState([]);
// // //   const [viewingSupplier, setViewingSupplier] = useState(null);
// // //   const [isViewingDetails, setIsViewingDetails] = useState(false);
// // //   const [searchTerm, setSearchTerm] = useState('');
// // //   const [showFilters, setShowFilters] = useState(false);
// // //   const [filters, setFilters] = useState({
// // //     location: '',
// // //     category: '',
// // //     rating: 0,
// // //     active: null
// // //   });
// // //   const [showNewSupplierForm, setShowNewSupplierForm] = useState(false);
// // //   const [newSupplier, setNewSupplier] = useState({
// // //     name: '',
// // //     location: '',
// // //     category: '',
// // //     rating: 3,
// // //     active: true,
// // //     dealerInfo: {
// // //       dealerName: '',
// // //       phone1: '',
// // //       phone2: '',
// // //       email: '',
// // //       position: ''
// // //     },
// // //     shopAddress: '',
// // //     pincode: '',
// // //     gstNo: '',
// // //     taxId: '',
// // //     accountDetails: '',
// // //     paymentTerms: 'Net 30',
// // //     billingAddress: '',
// // //     website: '',
// // //     products: []
// // //   });
// // //   const [editMode, setEditMode] = useState(false);
// // //   const [editingSupplierId, setEditingSupplierId] = useState(null);
// // //   const [editingSupplier, setEditingSupplier] = useState({
// // //     name: '',
// // //     location: '',
// // //     category: '',
// // //     rating: 3,
// // //     active: true,
// // //     dealerInfo: {
// // //       dealerName: '',
// // //       phone1: '',
// // //       phone2: '',
// // //       email: '',
// // //       position: ''
// // //     },
// // //     shopAddress: '',
// // //     pincode: '',
// // //     gstNo: '',
// // //     taxId: '',
// // //     accountDetails: '',
// // //     paymentTerms: '',
// // //     billingAddress: '',
// // //     website: '',
// // //     products: []
// // //   });
// // //   const [newProduct, setNewProduct] = useState({ name: '', description: '' });
// // //   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
// // //   const [supplierToDelete, setSupplierToDelete] = useState(null);
// // //   const categories = ['Electronics', 'Apparel', 'Raw Materials', 'Transportation', 'Packaging', 'Food', 'Services'];

// // //   // Fetch suppliers from backend
// // //   useEffect(() => {
// // //     if (storeId) {
// // //       fetch(`http://127.0.0.1:5015/suppliers?storeId=${storeId}`)
// // //         .then(response => response.json())
// // //         .then(data => setSuppliers(data))
// // //         .catch(error => console.error('Error fetching suppliers:', error));
// // //     }
// // //   }, [storeId]);

// // //   const handleSearch = (e) => {
// // //     setSearchTerm(e.target.value);
// // //   };

// // //   const handleFilterChange = useCallback((field, value) => {
// // //     setFilters(prevFilters => ({
// // //       ...prevFilters,
// // //       [field]: value
// // //     }));
// // //   }, []);

// // //   const handleNewSupplierChange = useCallback((field, value) => {
// // //     setNewSupplier(prevSupplier => ({
// // //       ...prevSupplier,
// // //       [field]: value
// // //     }));
// // //   }, []);

// // //   const handleDealerInfoChange = useCallback((field, value, formType = 'new') => {
// // //     if (formType === 'new') {
// // //       setNewSupplier(prevSupplier => ({
// // //         ...prevSupplier,
// // //         dealerInfo: {
// // //           ...prevSupplier.dealerInfo,
// // //           [field]: value
// // //         }
// // //       }));
// // //     } else if (formType === 'edit') {
// // //       setEditingSupplier(prevSupplier => ({
// // //         ...prevSupplier,
// // //         dealerInfo: {
// // //           ...prevSupplier.dealerInfo,
// // //           [field]: value
// // //         }
// // //       }));
// // //     }
// // //   }, []);

// // //   const handleEditSupplierChange = useCallback((field, value) => {
// // //     setEditingSupplier(prevSupplier => ({
// // //       ...prevSupplier,
// // //       [field]: value
// // //     }));
// // //   }, []);

// // //   const handleNewProductChange = useCallback((field, value) => {
// // //     setNewProduct(prevProduct => ({
// // //       ...prevProduct,
// // //       [field]: value
// // //     }));
// // //   }, []);

// // //   const handleAddProduct = useCallback((formType = 'new') => {
// // //     if (!newProduct.name) return;

// // //     const productId = Date.now();
// // //     const product = { ...newProduct, id: productId };

// // //     if (formType === 'new') {
// // //       setNewSupplier(prevSupplier => ({
// // //         ...prevSupplier,
// // //         products: [...prevSupplier.products, product]
// // //       }));
// // //     } else if (formType === 'edit') {
// // //       setEditingSupplier(prevSupplier => ({
// // //         ...prevSupplier,
// // //         products: [...prevSupplier.products, product]
// // //       }));
// // //     }

// // //     setNewProduct({ name: '', description: '' });
// // //   }, [newProduct]);

// // //   const handleRemoveProduct = useCallback((productId, formType = 'new') => {
// // //     if (formType === 'new') {
// // //       setNewSupplier(prevSupplier => ({
// // //         ...prevSupplier,
// // //         products: prevSupplier.products.filter(p => p.id !== productId)
// // //       }));
// // //     } else if (formType === 'edit') {
// // //       setEditingSupplier(prevSupplier => ({
// // //         ...prevSupplier,
// // //         products: prevSupplier.products.filter(p => p.id !== productId)
// // //       }));
// // //     }
// // //   }, []);

// // //   const handleAddSupplier = useCallback(() => {
// // //     fetch(`http://127.0.0.1:5015/suppliers?storeId=${storeId}`, {
// // //       method: 'POST',
// // //       headers: {
// // //         'Content-Type': 'application/json',
// // //       },
// // //       body: JSON.stringify(newSupplier),
// // //     })
// // //       .then(response => response.json())
// // //       .then(data => {
// // //         setSuppliers(prevSuppliers => [...prevSuppliers, data]);
// // //         setShowNewSupplierForm(false);
// // //       })
// // //       .catch(error => console.error('Error adding supplier:', error));
// // //   }, [newSupplier, storeId]);

// // //   const handleStartEdit = useCallback((supplier) => {
// // //     setEditMode(true);
// // //     setEditingSupplierId(supplier._id);
// // //     setEditingSupplier({ ...supplier });
// // //     setShowNewSupplierForm(false);
// // //     setIsViewingDetails(false);
// // //   }, []);

// // //   const handleSaveEdit = useCallback(() => {
// // //     fetch(`http://127.0.0.1:5015/suppliers/${editingSupplierId}?storeId=${storeId}`, {
// // //       method: 'PUT',
// // //       headers: {
// // //         'Content-Type': 'application/json',
// // //       },
// // //       body: JSON.stringify(editingSupplier),
// // //     })
// // //       .then(response => response.json())
// // //       .then(data => {
// // //         setSuppliers(prevSuppliers =>
// // //           prevSuppliers.map(supplier =>
// // //             supplier._id === editingSupplierId ? data : supplier
// // //           )
// // //         );
// // //         setEditMode(false);
// // //         setEditingSupplierId(null);
// // //       })
// // //       .catch(error => console.error('Error updating supplier:', error));
// // //   }, [editingSupplier, editingSupplierId, storeId]);

// // //   const handleCancelEdit = useCallback(() => {
// // //     setEditMode(false);
// // //     setEditingSupplierId(null);
// // //   }, []);

// // //   const handleViewDetails = useCallback((supplier) => {
// // //     setViewingSupplier(supplier);
// // //     setIsViewingDetails(true);
// // //   }, []);

// // //   const handleBackToList = useCallback(() => {
// // //     setIsViewingDetails(false);
// // //     setViewingSupplier(null);
// // //   }, []);

// // //   const handleConfirmDelete = useCallback((supplier) => {
// // //     setSupplierToDelete(supplier);
// // //     setShowDeleteConfirm(true);
// // //   }, []);

// // //   const handleDeleteSupplier = useCallback(() => {
// // //     fetch(`http://127.0.0.1:5015/suppliers/${supplierToDelete._id}?storeId=${storeId}`, {
// // //       method: 'DELETE',
// // //     })
// // //       .then(response => {
// // //         if (response.ok) {
// // //           setSuppliers(prevSuppliers =>
// // //             prevSuppliers.filter(supplier => supplier._id !== supplierToDelete._id)
// // //           );
// // //           setShowDeleteConfirm(false);
// // //           setSupplierToDelete(null);

// // //           if (viewingSupplier && viewingSupplier._id === supplierToDelete._id) {
// // //             handleBackToList();
// // //           }
// // //         }
// // //       })
// // //       .catch(error => console.error('Error deleting supplier:', error));
// // //   }, [supplierToDelete, storeId, viewingSupplier, handleBackToList]);

// // //   const handleCancelDelete = useCallback(() => {
// // //     setShowDeleteConfirm(false);
// // //     setSupplierToDelete(null);
// // //   }, []);

// // //   const filteredSuppliers = useMemo(() => {
// // //     return suppliers.filter(supplier => {
// // //       if (searchTerm && !supplier.name.toLowerCase().includes(searchTerm.toLowerCase())) {
// // //         return false;
// // //       }
// // //       if (filters.location && !supplier.location.toLowerCase().includes(filters.location.toLowerCase())) {
// // //         return false;
// // //       }
// // //       if (filters.category && supplier.category !== filters.category) {
// // //         return false;
// // //       }
// // //       if (filters.rating > 0 && supplier.rating < filters.rating) {
// // //         return false;
// // //       }
// // //       if (filters.active !== null && supplier.active !== filters.active) {
// // //         return false;
// // //       }
// // //       return true;
// // //     });
// // //   }, [suppliers, searchTerm, filters]);

// // //   const renderRating = (rating) => {
// // //     const stars = [];
// // //     for (let i = 1; i <= 5; i++) {
// // //       stars.push(
// // //         i <= rating ?
// // //           <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" /> :
// // //           <StarOff key={i} className="w-4 h-4 text-gray-300" />
// // //       );
// // //     }
// // //     return <div className="flex">{stars}</div>;
// // //   };

// // //   const SupplierDetailView = ({ supplier }) => (
// // //     <div className="space-y-6">
// // //       <div className="flex items-center">
// // //         <button
// // //           onClick={handleBackToList}
// // //           className="mr-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
// // //         >
// // //           <ArrowLeft className="h-5 w-5 text-gray-600" />
// // //         </button>
// // //         <h2 className="text-2xl font-bold text-gray-800">{supplier.name}</h2>
// // //         <div className="ml-auto flex space-x-2">
// // //           <button
// // //             onClick={() => handleStartEdit(supplier)}
// // //             className="flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
// // //           >
// // //             <Edit className="h-4 w-4" />
// // //             Edit
// // //           </button>
// // //           <button
// // //             onClick={() => handleConfirmDelete(supplier)}
// // //             className="flex items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
// // //           >
// // //             <Trash2 className="h-4 w-4" />
// // //             Delete
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //         {/* Basic Information */}
// // //         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h3>

// // //           <div className="space-y-3">
// // //             <div className="flex justify-between items-center">
// // //               <span className="text-gray-500">Category:</span>
// // //               <span className="font-medium text-gray-800">{supplier.category}</span>
// // //             </div>
// // //             <div className="flex justify-between items-center">
// // //               <span className="text-gray-500">Location:</span>
// // //               <span className="font-medium text-gray-800">{supplier.location}</span>
// // //             </div>
// // //             <div className="flex justify-between items-center">
// // //               <span className="text-gray-500">Rating:</span>
// // //               <div>{renderRating(supplier.rating)}</div>
// // //             </div>
// // //             <div className="flex justify-between items-center">
// // //               <span className="text-gray-500">Status:</span>
// // //               <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${supplier.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
// // //                 {supplier.active ? 'Active' : 'Inactive'}
// // //               </span>
// // //             </div>
// // //             <div className="flex justify-between items-center">
// // //               <span className="text-gray-500">Website:</span>
// // //               <span className="font-medium text-blue-600 hover:underline">{supplier.website || 'N/A'}</span>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Dealer Information */}
// // //         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Dealer Information</h3>

// // //           <div className="space-y-3">
// // //             <div className="flex justify-between items-center">
// // //               <span className="text-gray-500">Name:</span>
// // //               <span className="font-medium text-gray-800">{supplier.dealerInfo.dealerName || 'N/A'}</span>
// // //             </div>
// // //             <div className="flex justify-between items-center">
// // //               <span className="text-gray-500">Position:</span>
// // //               <span className="font-medium text-gray-800">{supplier.dealerInfo.position || 'N/A'}</span>
// // //             </div>
// // //             <div className="flex justify-between items-center">
// // //               <span className="text-gray-500">Primary Phone:</span>
// // //               <span className="font-medium text-gray-800">{supplier.dealerInfo.phone1 || 'N/A'}</span>
// // //             </div>
// // //             <div className="flex justify-between items-center">
// // //               <span className="text-gray-500">Secondary Phone:</span>
// // //               <span className="font-medium text-gray-800">{supplier.dealerInfo.phone2 || 'N/A'}</span>
// // //             </div>
// // //             <div className="flex justify-between items-center">
// // //               <span className="text-gray-500">Email:</span>
// // //               <span className="font-medium text-blue-600 hover:underline">{supplier.dealerInfo.email || 'N/A'}</span>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Business Information */}
// // //         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Business Information</h3>

// // //           <div className="space-y-3">
// // //             <div className="flex justify-between items-center">
// // //               <span className="text-gray-500">Shop Address:</span>
// // //               <span className="font-medium text-gray-800">{supplier.shopAddress || 'N/A'}</span>
// // //             </div>
// // //             <div className="flex justify-between items-center">
// // //               <span className="text-gray-500">Pincode:</span>
// // //               <span className="font-medium text-gray-800">{supplier.pincode || 'N/A'}</span>
// // //             </div>
// // //             <div className="flex justify-between items-center">
// // //               <span className="text-gray-500">GST Number:</span>
// // //               <span className="font-medium text-gray-800">{supplier.gstNo || 'N/A'}</span>
// // //             </div>
// // //             <div className="flex justify-between items-center">
// // //               <span className="text-gray-500">Tax ID:</span>
// // //               <span className="font-medium text-gray-800">{supplier.taxId || 'N/A'}</span>
// // //             </div>
// // //             <div className="flex justify-between items-center">
// // //               <span className="text-gray-500">Billing Address:</span>
// // //               <span className="font-medium text-gray-800">{supplier.billingAddress || 'N/A'}</span>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Financial Information */}
// // //         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Financial Information</h3>

// // //           <div className="space-y-3">
// // //             <div className="flex justify-between items-center">
// // //               <span className="text-gray-500">Account Details:</span>
// // //               <span className="font-medium text-gray-800">{supplier.accountDetails || 'N/A'}</span>
// // //             </div>
// // //             <div className="flex justify-between items-center">
// // //               <span className="text-gray-500">Payment Terms:</span>
// // //               <span className="font-medium text-gray-800">{supplier.paymentTerms || 'N/A'}</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Products Section */}
// // //       <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// // //         <h3 className="text-lg font-semibold text-gray-800 mb-4">Products Supplied</h3>

// // //         {supplier.products && supplier.products.length > 0 ? (
// // //           <div className="divide-y divide-gray-200">
// // //             {supplier.products.map(product => (
// // //               <div key={product.id} className="py-3 flex justify-between items-center">
// // //                 <div>
// // //                   <h4 className="font-medium text-gray-800">{product.name}</h4>
// // //                   <p className="text-sm text-gray-500">{product.description}</p>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         ) : (
// // //           <p className="text-gray-500 italic">No products listed</p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );

// // //   const DetailedSupplierForm = ({
// // //     supplier,
// // //     onBasicChange,
// // //     onDealerChange,
// // //     onCancel,
// // //     onSave,
// // //     title,
// // //     submitLabel,
// // //     newProduct,
// // //     onProductChange,
// // //     onAddProduct,
// // //     onRemoveProduct,
// // //     formType
// // //   }) => (
// // //     <div className="border border-gray-200 rounded-lg p-6 mb-6 space-y-6">
// // //       <div className="flex justify-between items-center">
// // //         <h2 className="text-lg font-semibold">{title}</h2>
// // //         <button
// // //           onClick={onCancel}
// // //           className="text-gray-500 hover:text-gray-700"
// // //         >
// // //           <X className="h-5 w-5" />
// // //         </button>
// // //       </div>

// // //       {/* Basic Information */}
// // //       <div>
// // //         <h3 className="font-medium text-gray-700 mb-3">Basic Information</h3>
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
// // //             <input
// // //               type="text"
// // //               placeholder="Supplier name"
// // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //               value={supplier.name}
// // //               onChange={(e) => onBasicChange('name', e.target.value)}
// // //               required
// // //             />
// // //           </div>

// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
// // //             <input
// // //               type="text"
// // //               placeholder="City, Country"
// // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //               value={supplier.location}
// // //               onChange={(e) => onBasicChange('location', e.target.value)}
// // //               required
// // //             />
// // //           </div>

// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
// // //             <select
// // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //               value={supplier.category}
// // //               onChange={(e) => onBasicChange('category', e.target.value)}
// // //               required
// // //             >
// // //               <option value="" disabled>Select category</option>
// // //               {categories.map(category => (
// // //                 <option key={category} value={category}>{category}</option>
// // //               ))}
// // //             </select>
// // //           </div>

// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
// // //             <input
// // //               type="text"
// // //               placeholder="www.example.com"
// // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //               value={supplier.website}
// // //               onChange={(e) => onBasicChange('website', e.target.value)}
// // //             />
// // //           </div>

// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
// // //             <div className="flex items-center gap-2">
// // //               {[1, 2, 3, 4, 5].map(rating => (
// // //                 <button
// // //                   key={rating}
// // //                   type="button"
// // //                   onClick={() => onBasicChange('rating', rating)}
// // //                   className="focus:outline-none"
// // //                 >
// // //                   {rating <= supplier.rating ? (
// // //                     <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
// // //                   ) : (
// // //                     <StarOff className="w-6 h-6 text-gray-300" />
// // //                   )}
// // //                 </button>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           <div className="flex items-center">
// // //             <label className="inline-flex items-center cursor-pointer">
// // //               <input
// // //                 type="checkbox"
// // //                 checked={supplier.active}
// // //                 onChange={(e) => onBasicChange('active', e.target.checked)}
// // //                 className="sr-only peer"
// // //               />
// // //               <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
// // //               <span className="ml-3 text-sm font-medium text-gray-700">Active Status</span>
// // //             </label>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Dealer Information */}
// // //       <div>
// // //         <h3 className="font-medium text-gray-700 mb-3">Dealer Information</h3>
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700 mb-1">Dealer Name *</label>
// // //             <input
// // //               type="text"
// // //               placeholder="Dealer's full name"
// // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //               value={supplier.dealerInfo.dealerName}
// // //               onChange={(e) => onDealerChange('dealerName', e.target.value, formType)}
// // //               required
// // //             />
// // //           </div>

// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
// // //             <input
// // //               type="text"
// // //               placeholder="Sales Manager, Owner, etc."
// // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //               value={supplier.dealerInfo.position}
// // //               onChange={(e) => onDealerChange('position', e.target.value, formType)}
// // //             />
// // //           </div>

// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700 mb-1">Primary Phone *</label>
// // //             <input
// // //               type="text"
// // //               placeholder="Primary contact number"
// // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //               value={supplier.dealerInfo.phone1}
// // //               onChange={(e) => onDealerChange('phone1', e.target.value, formType)}
// // //               required
// // //             />
// // //           </div>

// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Phone</label>
// // //             <input
// // //               type="text"
// // //               placeholder="Alternative contact number"
// // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //               value={supplier.dealerInfo.phone2}
// // //               onChange={(e) => onDealerChange('phone2', e.target.value, formType)}
// // //             />
// // //           </div>

// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
// // //             <input
// // //               type="email"
// // //               placeholder="email@example.com"
// // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //               value={supplier.dealerInfo.email}
// // //               onChange={(e) => onDealerChange('email', e.target.value, formType)}
// // //               required
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Business Information */}
// // //       <div>
// // //         <h3 className="font-medium text-gray-700 mb-3">Business Information</h3>
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //           <div className="md:col-span-2">
// // //             <label className="block text-sm font-medium text-gray-700 mb-1">Shop Address *</label>
// // //             <input
// // //               type="text"
// // //               placeholder="Complete address"
// // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //               value={supplier.shopAddress}
// // //               onChange={(e) => onBasicChange('shopAddress', e.target.value)}
// // //               required
// // //             />
// // //           </div>

// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
// // //             <input
// // //               type="text"
// // //               placeholder="Postal/ZIP code"
// // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //               value={supplier.pincode}
// // //               onChange={(e) => onBasicChange('pincode', e.target.value)}
// // //               required
// // //             />
// // //           </div>

// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700 mb-1">GST Number *</label>
// // //             <input
// // //               type="text"
// // //               placeholder="GST number"
// // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //               value={supplier.gstNo}
// // //               onChange={(e) => onBasicChange('gstNo', e.target.value)}
// // //               required
// // //             />
// // //           </div>

// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID *</label>
// // //             <input
// // //               type="text"
// // //               placeholder="Tax identification number"
// // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //               value={supplier.taxId}
// // //               onChange={(e) => onBasicChange('taxId', e.target.value)}
// // //               required
// // //             />
// // //           </div>

// // //           <div className="md:col-span-2">
// // //             <label className="block text-sm font-medium text-gray-700 mb-1">Billing Address *</label>
// // //             <input
// // //               type="text"
// // //               placeholder="Billing address"
// // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //               value={supplier.billingAddress}
// // //               onChange={(e) => onBasicChange('billingAddress', e.target.value)}
// // //               required
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Financial Information */}
// // //       <div>
// // //         <h3 className="font-medium text-gray-700 mb-3">Financial Information</h3>
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700 mb-1">Account Details *</label>
// // //             <input
// // //               type="text"
// // //               placeholder="Bank name and account number"
// // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //               value={supplier.accountDetails}
// // //               onChange={(e) => onBasicChange('accountDetails', e.target.value)}
// // //               required
// // //             />
// // //           </div>

// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700 mb-1">Payment Terms *</label>
// // //             <input
// // //               type="text"
// // //               placeholder="Net 30, Net 45, etc."
// // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //               value={supplier.paymentTerms}
// // //               onChange={(e) => onBasicChange('paymentTerms', e.target.value)}
// // //               required
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Products Supplied */}
// // //       <div>
// // //         <h3 className="font-medium text-gray-700 mb-3">Products Supplied</h3>
// // //         <div className="space-y-4">
// // //           {supplier.products.map((product) => (
// // //             <div key={product.id} className="flex items-center gap-4">
// // //               <div className="flex-1">
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Product name"
// // //                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //                   value={product.name}
// // //                   onChange={(e) => onProductChange('name', e.target.value, product.id)}
// // //                 />
// // //               </div>
// // //               <div className="flex-1">
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Product description"
// // //                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //                   value={product.description}
// // //                   onChange={(e) => onProductChange('description', e.target.value, product.id)}
// // //                 />
// // //               </div>
// // //               <button
// // //                 type="button"
// // //                 onClick={() => onRemoveProduct(product.id)}
// // //                 className="p-2 text-red-600 hover:text-red-700"
// // //               >
// // //                 <Trash2 className="h-5 w-5" />
// // //               </button>
// // //             </div>
// // //           ))}
// // //           <div className="flex items-center gap-4">
// // //             <div className="flex-1">
// // //               <input
// // //                 type="text"
// // //                 placeholder="New product name"
// // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //                 value={newProduct.name}
// // //                 onChange={(e) => onProductChange('name', e.target.value)}
// // //               />
// // //             </div>
// // //             <div className="flex-1">
// // //               <input
// // //                 type="text"
// // //                 placeholder="New product description"
// // //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //                 value={newProduct.description}
// // //                 onChange={(e) => onProductChange('description', e.target.value)}
// // //               />
// // //             </div>
// // //             <button
// // //               type="button"
// // //               onClick={onAddProduct}
// // //               className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
// // //             >
// // //               <Plus className="h-5 w-5" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Form Actions */}
// // //       <div className="flex justify-end gap-4">
// // //         <button
// // //           type="button"
// // //           onClick={onCancel}
// // //           className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
// // //         >
// // //           Cancel
// // //         </button>
// // //         <button
// // //           type="button"
// // //           onClick={onSave}
// // //           className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
// // //         >
// // //           {submitLabel}
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );

// // //   return (
// // //     <div className="p-6 bg-gray-100 min-h-screen">
// // //       {/* Header */}
// // //       <div className="flex justify-between items-center mb-6">
// // //         <h1 className="text-2xl font-bold">Supplier Management</h1>
// // //         <button
// // //           onClick={() => setShowNewSupplierForm(true)}
// // //           className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
// // //         >
// // //           <Plus className="h-5 w-5" />
// // //           Add Supplier
// // //         </button>
// // //       </div>

// // //       {/* Search and Filters */}
// // //       <div className="mb-6">
// // //         <div className="flex items-center gap-4">
// // //           <div className="flex-1">
// // //             <input
// // //               type="text"
// // //               placeholder="Search suppliers..."
// // //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //               value={searchTerm}
// // //               onChange={handleSearch}
// // //             />
// // //           </div>
// // //           <button
// // //             onClick={() => setShowFilters(!showFilters)}
// // //             className="p-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
// // //           >
// // //             <Filter className="h-5 w-5 text-gray-600" />
// // //           </button>
// // //         </div>

// // //         {showFilters && (
// // //           <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
// // //             <select
// // //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //               value={filters.location}
// // //               onChange={(e) => handleFilterChange('location', e.target.value)}
// // //             >
// // //               <option value="">Location</option>
// // //               <option value="San Francisco, USA">San Francisco, USA</option>
// // //               <option value="Paris, France">Paris, France</option>
// // //               <option value="Tokyo, Japan">Tokyo, Japan</option>
// // //             </select>

// // //             <select
// // //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //               value={filters.category}
// // //               onChange={(e) => handleFilterChange('category', e.target.value)}
// // //             >
// // //               <option value="">Category</option>
// // //               {categories.map((category) => (
// // //                 <option key={category} value={category}>{category}</option>
// // //               ))}
// // //             </select>

// // //             <select
// // //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //               value={filters.rating}
// // //               onChange={(e) => handleFilterChange('rating', parseInt(e.target.value))}
// // //             >
// // //               <option value="0">Rating</option>
// // //               <option value="1">1 Star</option>
// // //               <option value="2">2 Stars</option>
// // //               <option value="3">3 Stars</option>
// // //               <option value="4">4 Stars</option>
// // //               <option value="5">5 Stars</option>
// // //             </select>

// // //             <select
// // //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //               value={filters.active ?? ''}
// // //               onChange={(e) => handleFilterChange('active', e.target.value === 'true')}
// // //             >
// // //               <option value="">Status</option>
// // //               <option value="true">Active</option>
// // //               <option value="false">Inactive</option>
// // //             </select>
// // //           </div>
// // //         )}
// // //       </div>

// // //       {/* Supplier List or Detail View */}
// // //       {isViewingDetails ? (
// // //         <SupplierDetailView supplier={viewingSupplier} />
// // //       ) : (
// // //         <div className="space-y-4">
// // //           {filteredSuppliers.map((supplier) => (
// // //             <div
// // //               key={supplier._id}
// // //               className="p-4 bg-white border border-gray-200 rounded-md hover:shadow-md transition-shadow"
// // //             >
// // //               <div className="flex items-center justify-between">
// // //                 <div>
// // //                   <h2 className="font-semibold">{supplier.name}</h2>
// // //                   <p className="text-sm text-gray-500">{supplier.location}</p>
// // //                 </div>
// // //                 <div className="flex items-center gap-2">
// // //                   <button
// // //                     onClick={() => handleViewDetails(supplier)}
// // //                     className="p-2 text-gray-500 hover:text-blue-600"
// // //                   >
// // //                     <Eye className="h-5 w-5" />
// // //                   </button>
// // //                   <button
// // //                     onClick={() => handleStartEdit(supplier)}
// // //                     className="p-2 text-gray-500 hover:text-green-600"
// // //                   >
// // //                     <Edit className="h-5 w-5" />
// // //                   </button>
// // //                   <button
// // //                     onClick={() => handleConfirmDelete(supplier)}
// // //                     className="p-2 text-gray-500 hover:text-red-600"
// // //                   >
// // //                     <Trash2 className="h-5 w-5" />
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}

// // //       {/* New Supplier Form */}
// // //       {showNewSupplierForm && (
// // //         <DetailedSupplierForm
// // //           supplier={newSupplier}
// // //           onBasicChange={handleNewSupplierChange}
// // //           onDealerChange={handleDealerInfoChange}
// // //           onCancel={() => setShowNewSupplierForm(false)}
// // //           onSave={handleAddSupplier}
// // //           title="Add New Supplier"
// // //           submitLabel="Add Supplier"
// // //           newProduct={newProduct}
// // //           onProductChange={handleNewProductChange}
// // //           onAddProduct={() => handleAddProduct('new')}
// // //           onRemoveProduct={(id) => handleRemoveProduct(id, 'new')}
// // //           formType="new"
// // //         />
// // //       )}

// // //       {/* Edit Supplier Form */}
// // //       {editMode && (
// // //         <DetailedSupplierForm
// // //           supplier={editingSupplier}
// // //           onBasicChange={handleEditSupplierChange}
// // //           onDealerChange={handleDealerInfoChange}
// // //           onCancel={handleCancelEdit}
// // //           onSave={handleSaveEdit}
// // //           title="Edit Supplier"
// // //           submitLabel="Save Changes"
// // //           newProduct={newProduct}
// // //           onProductChange={handleNewProductChange}
// // //           onAddProduct={() => handleAddProduct('edit')}
// // //           onRemoveProduct={(id) => handleRemoveProduct(id, 'edit')}
// // //           formType="edit"
// // //         />
// // //       )}
      
// // //       {/* Delete Confirmation Modal */}
// // //       {showDeleteConfirm && (
// // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
// // //           <div className="bg-white p-6 rounded-md">
// // //             <h2 className="text-lg font-semibold mb-4">Delete Supplier</h2>
// // //             <p className="text-gray-600 mb-6">Are you sure you want to delete this supplier?</p>
// // //             <div className="flex justify-end gap-4">
// // //               <button
// // //                 onClick={handleCancelDelete}
// // //                 className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
// // //               >
// // //                 Cancel
// // //               </button>
// // //               <button
// // //                 onClick={handleDeleteSupplier}
// // //                 className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
// // //               >
// // //                 Delete
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Render SupplierOrderForm */}
// // //       <SupplierOrderForm />
// // //     </div>
// // //   );
// // // };

// // // export default Supc;
// // import React, { useState, useEffect, useCallback, useMemo } from 'react';
// // import { Filter, Plus, Star, StarOff, X, Edit, Trash2, Eye,ArrowLeft } from 'lucide-react';
// // import SupplierOrderForm from './SupplierOrderForm';
// // import { useStore } from './StoreContext';

// // // DetailedSupplierForm Component (Memoized)
// // const DetailedSupplierForm = React.memo(({
// //   supplier,
// //   onBasicChange,
// //   onDealerChange,
// //   onCancel,
// //   onSave,
// //   title,
// //   submitLabel,
// //   newProduct,
// //   onProductChange,
// //   onAddProduct,
// //   onRemoveProduct,
// //   formType,
// // }) => {
// //   return (
// //     <div className="border border-gray-200 rounded-lg p-6 mb-6 space-y-6">
// //       <div className="flex justify-between items-center">
// //         <h2 className="text-lg font-semibold">{title}</h2>
// //         <button
// //           onClick={onCancel}
// //           className="text-gray-500 hover:text-gray-700"
// //         >
// //           <X className="h-5 w-5" />
// //         </button>
// //       </div>

// //       {/* Basic Information */}
// //       <div>
// //         <h3 className="font-medium text-gray-700 mb-3">Basic Information</h3>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           <div>
// //             <label htmlFor={`${formType}-name`} className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
// //             <input
// //               id={`${formType}-name`}
// //               type="text"
// //               placeholder="Supplier name"
// //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
// //               value={supplier.name || ''}
// //               onChange={(e) => onBasicChange('name', e.target.value)}
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label htmlFor={`${formType}-location`} className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
// //             <input
// //               id={`${formType}-location`}
// //               type="text"
// //               placeholder="City, Country"
// //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
// //               value={supplier.location || ''}
// //               onChange={(e) => onBasicChange('location', e.target.value)}
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label htmlFor={`${formType}-category`} className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
// //             <select
// //               id={`${formType}-category`}
// //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
// //               value={supplier.category || ''}
// //               onChange={(e) => onBasicChange('category', e.target.value)}
// //               required
// //             >
// //               <option value="" disabled>Select category</option>
// //               {['Electronics', 'Apparel', 'Raw Materials', 'Transportation', 'Packaging', 'Food', 'Services'].map((category) => (
// //                 <option key={category} value={category}>{category}</option>
// //               ))}
// //             </select>
// //           </div>

// //           <div>
// //             <label htmlFor={`${formType}-website`} className="block text-sm font-medium text-gray-700 mb-1">Website</label>
// //             <input
// //               id={`${formType}-website`}
// //               type="text"
// //               placeholder="www.example.com"
// //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
// //               value={supplier.website || ''}
// //               onChange={(e) => onBasicChange('website', e.target.value)}
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
// //             <div className="flex items-center gap-2">
// //               {[1, 2, 3, 4, 5].map((rating) => (
// //                 <button
// //                   key={rating}
// //                   type="button"
// //                   onClick={() => onBasicChange('rating', rating)}
// //                   className="focus:outline-none transition-transform hover:scale-110"
// //                   aria-label={`Rate ${rating} stars`}
// //                 >
// //                   {rating <= supplier.rating ? (
// //                     <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
// //                   ) : (
// //                     <StarOff className="w-6 h-6 text-gray-300" />
// //                   )}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="flex items-center">
// //             <label className="inline-flex items-center cursor-pointer">
// //               <input
// //                 type="checkbox"
// //                 checked={supplier.active || false}
// //                 onChange={(e) => onBasicChange('active', e.target.checked)}
// //                 className="sr-only peer"
// //               />
// //               <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
// //               <span className="ml-3 text-sm font-medium text-gray-700">Active Status</span>
// //             </label>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Dealer Information */}
// //       <div>
// //         <h3 className="font-medium text-gray-700 mb-3">Dealer Information</h3>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           <div>
// //             <label htmlFor={`${formType}-dealer-name`} className="block text-sm font-medium text-gray-700 mb-1">Dealer Name *</label>
// //             <input
// //               id={`${formType}-dealer-name`}
// //               type="text"
// //               placeholder="Dealer's full name"
// //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
// //               value={supplier.dealerInfo.dealerName || ''}
// //               onChange={(e) => onDealerChange('dealerName', e.target.value, formType)}
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label htmlFor={`${formType}-position`} className="block text-sm font-medium text-gray-700 mb-1">Position</label>
// //             <input
// //               id={`${formType}-position`}
// //               type="text"
// //               placeholder="Sales Manager, Owner, etc."
// //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
// //               value={supplier.dealerInfo.position || ''}
// //               onChange={(e) => onDealerChange('position', e.target.value, formType)}
// //             />
// //           </div>

// //           <div>
// //             <label htmlFor={`${formType}-phone1`} className="block text-sm font-medium text-gray-700 mb-1">Primary Phone *</label>
// //             <input
// //               id={`${formType}-phone1`}
// //               type="text"
// //               placeholder="Primary contact number"
// //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
// //               value={supplier.dealerInfo.phone1 || ''}
// //               onChange={(e) => onDealerChange('phone1', e.target.value, formType)}
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label htmlFor={`${formType}-phone2`} className="block text-sm font-medium text-gray-700 mb-1">Secondary Phone</label>
// //             <input
// //               id={`${formType}-phone2`}
// //               type="text"
// //               placeholder="Alternative contact number"
// //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
// //               value={supplier.dealerInfo.phone2 || ''}
// //               onChange={(e) => onDealerChange('phone2', e.target.value, formType)}
// //             />
// //           </div>

// //           <div>
// //             <label htmlFor={`${formType}-email`} className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
// //             <input
// //               id={`${formType}-email`}
// //               type="email"
// //               placeholder="email@example.com"
// //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
// //               value={supplier.dealerInfo.email || ''}
// //               onChange={(e) => onDealerChange('email', e.target.value, formType)}
// //               required
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       {/* Business Information */}
// //       <div>
// //         <h3 className="font-medium text-gray-700 mb-3">Business Information</h3>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           <div className="md:col-span-2">
// //             <label htmlFor={`${formType}-shopAddress`} className="block text-sm font-medium text-gray-700 mb-1">Shop Address *</label>
// //             <input
// //               id={`${formType}-shopAddress`}
// //               type="text"
// //               placeholder="Complete address"
// //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
// //               value={supplier.shopAddress || ''}
// //               onChange={(e) => onBasicChange('shopAddress', e.target.value)}
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label htmlFor={`${formType}-pincode`} className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
// //             <input
// //               id={`${formType}-pincode`}
// //               type="text"
// //               placeholder="Postal/ZIP code"
// //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
// //               value={supplier.pincode || ''}
// //               onChange={(e) => onBasicChange('pincode', e.target.value)}
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label htmlFor={`${formType}-gstNo`} className="block text-sm font-medium text-gray-700 mb-1">GST Number *</label>
// //             <input
// //               id={`${formType}-gstNo`}
// //               type="text"
// //               placeholder="GST number"
// //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
// //               value={supplier.gstNo || ''}
// //               onChange={(e) => onBasicChange('gstNo', e.target.value)}
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label htmlFor={`${formType}-taxId`} className="block text-sm font-medium text-gray-700 mb-1">Tax ID *</label>
// //             <input
// //               id={`${formType}-taxId`}
// //               type="text"
// //               placeholder="Tax identification number"
// //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
// //               value={supplier.taxId || ''}
// //               onChange={(e) => onBasicChange('taxId', e.target.value)}
// //               required
// //             />
// //           </div>

// //           <div className="md:col-span-2">
// //             <label htmlFor={`${formType}-billingAddress`} className="block text-sm font-medium text-gray-700 mb-1">Billing Address *</label>
// //             <input
// //               id={`${formType}-billingAddress`}
// //               type="text"
// //               placeholder="Billing address"
// //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
// //               value={supplier.billingAddress || ''}
// //               onChange={(e) => onBasicChange('billingAddress', e.target.value)}
// //               required
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       {/* Financial Information */}
// //       <div>
// //         <h3 className="font-medium text-gray-700 mb-3">Financial Information</h3>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           <div>
// //             <label htmlFor={`${formType}-accountDetails`} className="block text-sm font-medium text-gray-700 mb-1">Account Details *</label>
// //             <input
// //               id={`${formType}-accountDetails`}
// //               type="text"
// //               placeholder="Bank name and account number"
// //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
// //               value={supplier.accountDetails || ''}
// //               onChange={(e) => onBasicChange('accountDetails', e.target.value)}
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label htmlFor={`${formType}-paymentTerms`} className="block text-sm font-medium text-gray-700 mb-1">Payment Terms *</label>
// //             <input
// //               id={`${formType}-paymentTerms`}
// //               type="text"
// //               placeholder="Net 30, Net 45, etc."
// //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
// //               value={supplier.paymentTerms || ''}
// //               onChange={(e) => onBasicChange('paymentTerms', e.target.value)}
// //               required
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       {/* Products Supplied */}
// //       <div>
// //         <h3 className="font-medium text-gray-700 mb-3">Products Supplied</h3>
// //         <div className="space-y-4">
// //           {supplier.products.map((product) => (
// //             <div key={product.id} className="flex items-center gap-4">
// //               <div className="flex-1">
// //                 <input
// //                   type="text"
// //                   placeholder="Product name"
// //                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
// //                   value={product.name || ''}
// //                   onChange={(e) => onProductChange('name', e.target.value, product.id)}
// //                 />
// //               </div>
// //               <div className="flex-1">
// //                 <input
// //                   type="text"
// //                   placeholder="Product description"
// //                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
// //                   value={product.description || ''}
// //                   onChange={(e) => onProductChange('description', e.target.value, product.id)}
// //                 />
// //               </div>
// //               <button
// //                 type="button"
// //                 onClick={() => onRemoveProduct(product.id)}
// //                 className="p-2 text-red-600 hover:text-red-700"
// //               >
// //                 <Trash2 className="h-5 w-5" />
// //               </button>
// //             </div>
// //           ))}
// //           <div className="flex items-center gap-4">
// //             <div className="flex-1">
// //               <input
// //                 type="text"
// //                 placeholder="New product name"
// //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
// //                 value={newProduct.name || ''}
// //                 onChange={(e) => onProductChange('name', e.target.value)}
// //               />
// //             </div>
// //             <div className="flex-1">
// //               <input
// //                 type="text"
// //                 placeholder="New product description"
// //                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
// //                 value={newProduct.description || ''}
// //                 onChange={(e) => onProductChange('description', e.target.value)}
// //               />
// //             </div>
// //             <button
// //               type="button"
// //               onClick={onAddProduct}
// //               className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
// //             >
// //               <Plus className="h-5 w-5" />
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Form Actions */}
// //       <div className="flex justify-end gap-4">
// //         <button
// //           type="button"
// //           onClick={onCancel}
// //           className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
// //         >
// //           Cancel
// //         </button>
// //         <button
// //           type="button"
// //           onClick={onSave}
// //           className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
// //         >
// //           {submitLabel}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // });

// // // SupplierDetailView Component
// // const SupplierDetailView = ({ supplier, handleBackToList, handleStartEdit, handleConfirmDelete }) => (
// //   <div className="space-y-6">
// //     <div className="flex items-center">
// //       <button
// //         onClick={handleBackToList}
// //         className="mr-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
// //       >
// //         <ArrowLeft className="h-5 w-5 text-gray-600" />
// //       </button>
// //       <h2 className="text-2xl font-bold text-gray-800">{supplier.name}</h2>
// //       <div className="ml-auto flex space-x-2">
// //         <button
// //           onClick={() => handleStartEdit(supplier)}
// //           className="flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
// //         >
// //           <Edit className="h-4 w-4" />
// //           Edit
// //         </button>
// //         <button
// //           onClick={() => handleConfirmDelete(supplier)}
// //           className="flex items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
// //         >
// //           <Trash2 className="h-4 w-4" />
// //           Delete
// //         </button>
// //       </div>
// //     </div>

// //     {/* Render supplier details here */}
// //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //       {/* Basic Information */}
// //       <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// //         <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h3>
// //         <div className="space-y-3">
// //           <div className="flex justify-between items-center">
// //             <span className="text-gray-500">Category:</span>
// //             <span className="font-medium text-gray-800">{supplier.category}</span>
// //           </div>
// //           <div className="flex justify-between items-center">
// //             <span className="text-gray-500">Location:</span>
// //             <span className="font-medium text-gray-800">{supplier.location}</span>
// //           </div>
// //           <div className="flex justify-between items-center">
// //             <span className="text-gray-500">Rating:</span>
// //             <div>
// //               {[1, 2, 3, 4, 5].map((star) => (
// //                 <Star
// //                   key={star}
// //                   className={`w-4 h-4 ${
// //                     star <= supplier.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
// //                   }`}
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //           <div className="flex justify-between items-center">
// //             <span className="text-gray-500">Status:</span>
// //             <span
// //               className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
// //                 supplier.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
// //               }`}
// //             >
// //               {supplier.active ? 'Active' : 'Inactive'}
// //             </span>
// //           </div>
// //           <div className="flex justify-between items-center">
// //             <span className="text-gray-500">Website:</span>
// //             <span className="font-medium text-blue-600 hover:underline">
// //               {supplier.website || 'N/A'}
// //             </span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Dealer Information */}
// //       <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// //         <h3 className="text-lg font-semibold text-gray-800 mb-4">Dealer Information</h3>
// //         <div className="space-y-3">
// //           <div className="flex justify-between items-center">
// //             <span className="text-gray-500">Name:</span>
// //             <span className="font-medium text-gray-800">{supplier.dealerInfo.dealerName || 'N/A'}</span>
// //           </div>
// //           <div className="flex justify-between items-center">
// //             <span className="text-gray-500">Position:</span>
// //             <span className="font-medium text-gray-800">{supplier.dealerInfo.position || 'N/A'}</span>
// //           </div>
// //           <div className="flex justify-between items-center">
// //             <span className="text-gray-500">Primary Phone:</span>
// //             <span className="font-medium text-gray-800">{supplier.dealerInfo.phone1 || 'N/A'}</span>
// //           </div>
// //           <div className="flex justify-between items-center">
// //             <span className="text-gray-500">Secondary Phone:</span>
// //             <span className="font-medium text-gray-800">{supplier.dealerInfo.phone2 || 'N/A'}</span>
// //           </div>
// //           <div className="flex justify-between items-center">
// //             <span className="text-gray-500">Email:</span>
// //             <span className="font-medium text-blue-600 hover:underline">
// //               {supplier.dealerInfo.email || 'N/A'}
// //             </span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Business Information */}
// //       <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// //         <h3 className="text-lg font-semibold text-gray-800 mb-4">Business Information</h3>
// //         <div className="space-y-3">
// //           <div className="flex justify-between items-center">
// //             <span className="text-gray-500">Shop Address:</span>
// //             <span className="font-medium text-gray-800">{supplier.shopAddress || 'N/A'}</span>
// //           </div>
// //           <div className="flex justify-between items-center">
// //             <span className="text-gray-500">Pincode:</span>
// //             <span className="font-medium text-gray-800">{supplier.pincode || 'N/A'}</span>
// //           </div>
// //           <div className="flex justify-between items-center">
// //             <span className="text-gray-500">GST Number:</span>
// //             <span className="font-medium text-gray-800">{supplier.gstNo || 'N/A'}</span>
// //           </div>
// //           <div className="flex justify-between items-center">
// //             <span className="text-gray-500">Tax ID:</span>
// //             <span className="font-medium text-gray-800">{supplier.taxId || 'N/A'}</span>
// //           </div>
// //           <div className="flex justify-between items-center">
// //             <span className="text-gray-500">Billing Address:</span>
// //             <span className="font-medium text-gray-800">{supplier.billingAddress || 'N/A'}</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Financial Information */}
// //       <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// //         <h3 className="text-lg font-semibold text-gray-800 mb-4">Financial Information</h3>
// //         <div className="space-y-3">
// //           <div className="flex justify-between items-center">
// //             <span className="text-gray-500">Account Details:</span>
// //             <span className="font-medium text-gray-800">{supplier.accountDetails || 'N/A'}</span>
// //           </div>
// //           <div className="flex justify-between items-center">
// //             <span className="text-gray-500">Payment Terms:</span>
// //             <span className="font-medium text-gray-800">{supplier.paymentTerms || 'N/A'}</span>
// //           </div>
// //         </div>
// //       </div>
// //     </div>

// //     {/* Products Section */}
// //     <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
// //       <h3 className="text-lg font-semibold text-gray-800 mb-4">Products Supplied</h3>
// //       {supplier.products && supplier.products.length > 0 ? (
// //         <div className="divide-y divide-gray-200">
// //           {supplier.products.map((product) => (
// //             <div key={product.id} className="py-3 flex justify-between items-center">
// //               <div>
// //                 <h4 className="font-medium text-gray-800">{product.name}</h4>
// //                 <p className="text-sm text-gray-500">{product.description}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       ) : (
// //         <p className="text-gray-500 italic">No products listed</p>
// //       )}
// //     </div>
// //   </div>
// // );

// // // Supc Component
// // const Supc = () => {
// //   const { storeId } = useStore();
// //   const [suppliers, setSuppliers] = useState([]);
// //   const [viewingSupplier, setViewingSupplier] = useState(null);
// //   const [isViewingDetails, setIsViewingDetails] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [showFilters, setShowFilters] = useState(false);
// //   const [filters, setFilters] = useState({
// //     location: '',
// //     category: '',
// //     rating: 0,
// //     active: null,
// //   });
// //   const [showNewSupplierForm, setShowNewSupplierForm] = useState(false);
// //   const [newSupplier, setNewSupplier] = useState({
// //     name: '',
// //     location: '',
// //     category: '',
// //     rating: 3,
// //     active: true,
// //     dealerInfo: {
// //       dealerName: '',
// //       phone1: '',
// //       phone2: '',
// //       email: '',
// //       position: '',
// //     },
// //     shopAddress: '',
// //     pincode: '',
// //     gstNo: '',
// //     taxId: '',
// //     accountDetails: '',
// //     paymentTerms: 'Net 30',
// //     billingAddress: '',
// //     website: '',
// //     products: [],
// //   });
// //   const [editMode, setEditMode] = useState(false);
// //   const [editingSupplierId, setEditingSupplierId] = useState(null);
// //   const [editingSupplier, setEditingSupplier] = useState({
// //     name: '',
// //     location: '',
// //     category: '',
// //     rating: 3,
// //     active: true,
// //     dealerInfo: {
// //       dealerName: '',
// //       phone1: '',
// //       phone2: '',
// //       email: '',
// //       position: '',
// //     },
// //     shopAddress: '',
// //     pincode: '',
// //     gstNo: '',
// //     taxId: '',
// //     accountDetails: '',
// //     paymentTerms: '',
// //     billingAddress: '',
// //     website: '',
// //     products: [],
// //   });
// //   const [newProduct, setNewProduct] = useState({ name: '', description: '' });
// //   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
// //   const [supplierToDelete, setSupplierToDelete] = useState(null);
// //   const categories = ['Electronics', 'Apparel', 'Raw Materials', 'Transportation', 'Packaging', 'Food', 'Services'];

// //   // Fetch suppliers from backend
// //   useEffect(() => {
// //     if (storeId) {
// //       fetch(`http://127.0.0.1:5015/suppliers?storeId=${storeId}`)
// //         .then((response) => response.json())
// //         .then((data) => setSuppliers(data))
// //         .catch((error) => console.error('Error fetching suppliers:', error));
// //     }
// //   }, [storeId]);

// //   const handleSearch = useCallback((e) => {
// //     setSearchTerm(e.target.value);
// //   }, []);

// //   const handleFilterChange = useCallback((field, value) => {
// //     setFilters((prevFilters) => ({
// //       ...prevFilters,
// //       [field]: value,
// //     }));
// //   }, []);

// //   const handleNewSupplierChange = useCallback((field, value) => {
// //     setNewSupplier((prevSupplier) => ({
// //       ...prevSupplier,
// //       [field]: value,
// //     }));
// //   }, []);

// //   const handleDealerInfoChange = useCallback((field, value, formType = 'new') => {
// //     if (formType === 'new') {
// //       setNewSupplier((prevSupplier) => ({
// //         ...prevSupplier,
// //         dealerInfo: {
// //           ...prevSupplier.dealerInfo,
// //           [field]: value,
// //         },
// //       }));
// //     } else if (formType === 'edit') {
// //       setEditingSupplier((prevSupplier) => ({
// //         ...prevSupplier,
// //         dealerInfo: {
// //           ...prevSupplier.dealerInfo,
// //           [field]: value,
// //         },
// //       }));
// //     }
// //   }, []);

// //   const handleEditSupplierChange = useCallback((field, value) => {
// //     setEditingSupplier((prevSupplier) => ({
// //       ...prevSupplier,
// //       [field]: value,
// //     }));
// //   }, []);

// //   const handleNewProductChange = useCallback((field, value) => {
// //     setNewProduct((prevProduct) => ({
// //       ...prevProduct,
// //       [field]: value,
// //     }));
// //   }, []);

// //   const handleAddProduct = useCallback(
// //     (formType = 'new') => {
// //       if (!newProduct.name) return;

// //       const productId = Date.now();
// //       const product = { ...newProduct, id: productId };

// //       if (formType === 'new') {
// //         setNewSupplier((prevSupplier) => ({
// //           ...prevSupplier,
// //           products: [...prevSupplier.products, product],
// //         }));
// //       } else if (formType === 'edit') {
// //         setEditingSupplier((prevSupplier) => ({
// //           ...prevSupplier,
// //           products: [...prevSupplier.products, product],
// //         }));
// //       }

// //       setNewProduct({ name: '', description: '' });
// //     },
// //     [newProduct]
// //   );

// //   const handleRemoveProduct = useCallback((productId, formType = 'new') => {
// //     if (formType === 'new') {
// //       setNewSupplier((prevSupplier) => ({
// //         ...prevSupplier,
// //         products: prevSupplier.products.filter((p) => p.id !== productId),
// //       }));
// //     } else if (formType === 'edit') {
// //       setEditingSupplier((prevSupplier) => ({
// //         ...prevSupplier,
// //         products: prevSupplier.products.filter((p) => p.id !== productId),
// //       }));
// //     }
// //   }, []);

// //   // const handleAddSupplier = useCallback(() => {
// //   //   fetch(`http://127.0.0.1:5015/suppliers?storeId=${storeId}`, {
// //   //     method: 'POST',
// //   //     headers: {
// //   //       'Content-Type': 'application/json',
// //   //     },
// //   //     body: JSON.stringify(newSupplier),
// //   //   })
// //   //     .then((response) => response.json())
// //   //     .then((data) => {
// //   //       setSuppliers((prevSuppliers) => [...prevSuppliers, data]);
// //   //       setShowNewSupplierForm(false);
// //   //     })
// //   //     .catch((error) => console.error('Error adding supplier:', error));
// //   // }, [newSupplier, storeId]);
// //   const handleAddSupplier = useCallback(() => {
// //     // Validate required fields
// //     if (
// //       !newSupplier.name ||
// //       !newSupplier.location ||
// //       !newSupplier.category ||
// //       !newSupplier.dealerInfo.dealerName ||
// //       !newSupplier.dealerInfo.phone1 ||
// //       !newSupplier.dealerInfo.email
// //     ) {
// //       alert("Please fill in all required fields.");
// //       return;
// //     }
  
// //     fetch(`http://127.0.0.1:5015/suppliers?storeId=${storeId}`, {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(newSupplier),
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setSuppliers((prevSuppliers) => [...prevSuppliers, data]);
// //         setShowNewSupplierForm(false);
// //         setNewSupplier({
// //           name: '',
// //           location: '',
// //           category: '',
// //           rating: 3,
// //           active: true,
// //           dealerInfo: {
// //             dealerName: '',
// //             phone1: '',
// //             phone2: '',
// //             email: '',
// //             position: '',
// //           },
// //           shopAddress: '',
// //           pincode: '',
// //           gstNo: '',
// //           taxId: '',
// //           accountDetails: '',
// //           paymentTerms: 'Net 30',
// //           billingAddress: '',
// //           website: '',
// //           products: [],
// //         });
// //       })
// //       .catch((error) => console.error('Error adding supplier:', error));
// //   }, [newSupplier, storeId]);
// //   const handleStartEdit = useCallback((supplier) => {
// //     setEditMode(true);
// //     setEditingSupplierId(supplier._id);
// //     setEditingSupplier({ ...supplier });
// //     setShowNewSupplierForm(false);
// //     setIsViewingDetails(false);
// //   }, []);

// //   // const handleSaveEdit = useCallback(() => {
// //   //   fetch(`http://127.0.0.1:5015/suppliers/${editingSupplierId}?storeId=${storeId}`, {
// //   //     method: 'PUT',
// //   //     headers: {
// //   //       'Content-Type': 'application/json',
// //   //     },
// //   //     body: JSON.stringify(editingSupplier),
// //   //   })
// //   //     .then((response) => response.json())
// //   //     .then((data) => {
// //   //       setSuppliers((prevSuppliers) =>
// //   //         prevSuppliers.map((supplier) =>
// //   //           supplier._id === editingSupplierId ? data : supplier
// //   //         )
// //   //       );
// //   //       setEditMode(false);
// //   //       setEditingSupplierId(null);
// //   //     })
// //   //     .catch((error) => console.error('Error updating supplier:', error));
// //   // }, [editingSupplier, editingSupplierId, storeId]);
// //   const handleSaveEdit = useCallback(() => {
// //     if (!editingSupplierId || !editingSupplier) {
// //       alert("No supplier selected for editing.");
// //       return;
// //     }
  
// //     fetch(`http://127.0.0.1:5015/suppliers/${editingSupplierId}?storeId=${storeId}`, {
// //       method: 'PUT',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(editingSupplier),
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setSuppliers((prevSuppliers) =>
// //           prevSuppliers.map((supplier) =>
// //             supplier._id === editingSupplierId ? data : supplier
// //           )
// //         );
// //         setEditMode(false);
// //         setEditingSupplierId(null);
// //       })
// //       .catch((error) => {
// //         console.error('Error updating supplier:', error);
// //         alert("Failed to update supplier. Please try again.");
// //       });
// //   }, [editingSupplier, editingSupplierId, storeId]);
// //   const handleCancelEdit = useCallback(() => {
// //     setEditMode(false);
// //     setEditingSupplierId(null);
// //   }, []);

// //   const handleViewDetails = useCallback((supplier) => {
// //     setViewingSupplier(supplier);
// //     setIsViewingDetails(true);
// //   }, []);

// //   const handleBackToList = useCallback(() => {
// //     setIsViewingDetails(false);
// //     setViewingSupplier(null);
// //   }, []);

// //   const handleConfirmDelete = useCallback((supplier) => {
// //     setSupplierToDelete(supplier);
// //     setShowDeleteConfirm(true);
// //   }, []);

// //   // const handleDeleteSupplier = useCallback(() => {
// //   //   fetch(`http://127.0.0.1:5015/suppliers/${supplierToDelete._id}?storeId=${storeId}`, {
// //   //     method: 'DELETE',
// //   //   })
// //   //     .then((response) => {
// //   //       if (response.ok) {
// //   //         setSuppliers((prevSuppliers) =>
// //   //           prevSuppliers.filter((supplier) => supplier._id !== supplierToDelete._id)
// //   //         );
// //   //         setShowDeleteConfirm(false);
// //   //         setSupplierToDelete(null);

// //   //         if (viewingSupplier && viewingSupplier._id === supplierToDelete._id) {
// //   //           handleBackToList();
// //   //         }
// //   //       }
// //   //     })
// //   //     .catch((error) => console.error('Error deleting supplier:', error));
// //   // }, [supplierToDelete, storeId, viewingSupplier, handleBackToList]);
// //   const handleDeleteSupplier = useCallback(() => {
// //     if (!supplierToDelete || !supplierToDelete._id) {
// //       alert("No supplier selected for deletion.");
// //       return;
// //     }
  
// //     fetch(`http://127.0.0.1:5015/suppliers/${supplierToDelete._id}?storeId=${storeId}`, {
// //       method: 'DELETE',
// //     })
// //       .then((response) => {
// //         if (response.ok) {
// //           setSuppliers((prevSuppliers) =>
// //             prevSuppliers.filter((supplier) => supplier._id !== supplierToDelete._id)
// //           );
// //           setShowDeleteConfirm(false);
// //           setSupplierToDelete(null);
  
// //           if (viewingSupplier && viewingSupplier._id === supplierToDelete._id) {
// //             handleBackToList();
// //           }
// //         } else {
// //           throw new Error("Failed to delete supplier.");
// //         }
// //       })
// //       .catch((error) => {
// //         console.error('Error deleting supplier:', error);
// //         alert("Failed to delete supplier. Please try again.");
// //       });
// //   }, [supplierToDelete, storeId, viewingSupplier, handleBackToList]);
// //   const handleCancelDelete = useCallback(() => {
// //     setShowDeleteConfirm(false);
// //     setSupplierToDelete(null);
// //   }, []);

// //   // const filteredSuppliers = useMemo(() => {
// //   //   return suppliers.filter((supplier) => {
// //   //     if (searchTerm && !supplier.name.toLowerCase().includes(searchTerm.toLowerCase())) {
// //   //       return false;
// //   //     }
// //   //     if (filters.location && !supplier.location.toLowerCase().includes(filters.location.toLowerCase())) {
// //   //       return false;
// //   //     }
// //   //     if (filters.category && supplier.category !== filters.category) {
// //   //       return false;
// //   //     }
// //   //     if (filters.rating > 0 && supplier.rating < filters.rating) {
// //   //       return false;
// //   //     }
// //   //     if (filters.active !== null && supplier.active !== filters.active) {
// //   //       return false;
// //   //     }
// //   //     return true;
// //   //   });
// //   // }, [suppliers, searchTerm, filters]);
// //   const filteredSuppliers = useMemo(() => {
// //     return suppliers.filter((supplier) => {
// //       // Check if the supplier object exists
// //       if (!supplier) return false;
  
// //       // Filter by search term (name)
// //       if (
// //         searchTerm &&
// //         (!supplier.name || !supplier.name.toLowerCase().includes(searchTerm.toLowerCase()))
// //       ) {
// //         return false;
// //       }
  
// //       // Filter by location
// //       if (
// //         filters.location &&
// //         (!supplier.location || !supplier.location.toLowerCase().includes(filters.location.toLowerCase()))
// //       ) {
// //         return false;
// //       }
  
// //       // Filter by category
// //       if (filters.category && supplier.category !== filters.category) {
// //         return false;
// //       }
  
// //       // Filter by rating
// //       if (filters.rating > 0 && (!supplier.rating || supplier.rating < filters.rating)) {
// //         return false;
// //       }
  
// //       // Filter by active status
// //       if (filters.active !== null && supplier.active !== filters.active) {
// //         return false;
// //       }
  
// //       // If all filters pass, include the supplier
// //       return true;
// //     });
// //   }, [suppliers, searchTerm, filters]);
// //   return (
// //     <div className="p-6 bg-gray-100 min-h-screen">
// //       {/* Header */}
// //       <div className="flex justify-between items-center mb-6">
// //         <h1 className="text-2xl font-bold">Supplier Management</h1>
// //         <button
// //           onClick={() => setShowNewSupplierForm(true)}
// //           className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
// //         >
// //           <Plus className="h-5 w-5" />
// //           Add Supplier
// //         </button>
// //       </div>

// //       {/* Search and Filters */}
// //       <div className="mb-6">
// //         <div className="flex items-center gap-4">
// //           <div className="flex-1">
// //             <input
// //               type="text"
// //               placeholder="Search suppliers..."
// //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// //               value={searchTerm}
// //               onChange={handleSearch}
// //             />
// //           </div>
// //           <button
// //             onClick={() => setShowFilters(!showFilters)}
// //             className="p-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
// //           >
// //             <Filter className="h-5 w-5 text-gray-600" />
// //           </button>
// //         </div>

// //         {showFilters && (
// //           <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
// //             <select
// //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// //               value={filters.location}
// //               onChange={(e) => handleFilterChange('location', e.target.value)}
// //             >
// //               <option value="">Location</option>
// //               <option value="San Francisco, USA">San Francisco, USA</option>
// //               <option value="Paris, France">Paris, France</option>
// //               <option value="Tokyo, Japan">Tokyo, Japan</option>
// //             </select>

// //             <select
// //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// //               value={filters.category}
// //               onChange={(e) => handleFilterChange('category', e.target.value)}
// //             >
// //               <option value="">Category</option>
// //               {categories.map((category) => (
// //                 <option key={category} value={category}>{category}</option>
// //               ))}
// //             </select>

// //             <select
// //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// //               value={filters.rating}
// //               onChange={(e) => handleFilterChange('rating', parseInt(e.target.value))}
// //             >
// //               <option value="0">Rating</option>
// //               <option value="1">1 Star</option>
// //               <option value="2">2 Stars</option>
// //               <option value="3">3 Stars</option>
// //               <option value="4">4 Stars</option>
// //               <option value="5">5 Stars</option>
// //             </select>

// //             <select
// //               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// //               value={filters.active ?? ''}
// //               onChange={(e) => handleFilterChange('active', e.target.value === 'true')}
// //             >
// //               <option value="">Status</option>
// //               <option value="true">Active</option>
// //               <option value="false">Inactive</option>
// //             </select>
// //           </div>
// //         )}
// //       </div>

// //       {/* Supplier List or Detail View */}
// //       {isViewingDetails ? (
// //         <SupplierDetailView
// //           supplier={viewingSupplier}
// //           handleBackToList={handleBackToList}
// //           handleStartEdit={handleStartEdit}
// //           handleConfirmDelete={handleConfirmDelete}
// //         />
// //       ) : (
// //         <div className="space-y-4">
// //           {filteredSuppliers.map((supplier) => (
// //             <div
// //               key={supplier._id}
// //               className="p-4 bg-white border border-gray-200 rounded-md hover:shadow-md transition-shadow"
// //             >
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <h2 className="font-semibold">{supplier.name}</h2>
// //                   <p className="text-sm text-gray-500">{supplier.location}</p>
// //                 </div>
// //                 <div className="flex items-center gap-2">
// //                   <button
// //                     onClick={() => handleViewDetails(supplier)}
// //                     className="p-2 text-gray-500 hover:text-blue-600"
// //                   >
// //                     <Eye className="h-5 w-5" />
// //                   </button>
// //                   <button
// //                     onClick={() => handleStartEdit(supplier)}
// //                     className="p-2 text-gray-500 hover:text-green-600"
// //                   >
// //                     <Edit className="h-5 w-5" />
// //                   </button>
// //                   <button
// //                     onClick={() => handleConfirmDelete(supplier)}
// //                     className="p-2 text-gray-500 hover:text-red-600"
// //                   >
// //                     <Trash2 className="h-5 w-5" />
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //       {/* New Supplier Form */}
// //       {showNewSupplierForm && (
// //         <DetailedSupplierForm
// //           supplier={newSupplier}
// //           onBasicChange={handleNewSupplierChange}
// //           onDealerChange={handleDealerInfoChange}
// //           onCancel={() => setShowNewSupplierForm(false)}
// //           onSave={handleAddSupplier}
// //           title="Add New Supplier"
// //           submitLabel="Add Supplier"
// //           newProduct={newProduct}
// //           onProductChange={handleNewProductChange}
// //           onAddProduct={() => handleAddProduct('new')}
// //           onRemoveProduct={(id) => handleRemoveProduct(id, 'new')}
// //           formType="new"
// //         />
// //       )}

// //       {/* Edit Supplier Form */}
// //       {editMode && (
// //         <DetailedSupplierForm
// //           supplier={editingSupplier}
// //           onBasicChange={handleEditSupplierChange}
// //           onDealerChange={handleDealerInfoChange}
// //           onCancel={handleCancelEdit}
// //           onSave={handleSaveEdit}
// //           title="Edit Supplier"
// //           submitLabel="Save Changes"
// //           newProduct={newProduct}
// //           onProductChange={handleNewProductChange}
// //           onAddProduct={() => handleAddProduct('edit')}
// //           onRemoveProduct={(id) => handleRemoveProduct(id, 'edit')}
// //           formType="edit"
// //         />
// //       )}

// //       {/* Delete Confirmation Modal */}
// //       {showDeleteConfirm && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
// //           <div className="bg-white p-6 rounded-md">
// //             <h2 className="text-lg font-semibold mb-4">Delete Supplier</h2>
// //             <p className="text-gray-600 mb-6">Are you sure you want to delete this supplier?</p>
// //             <div className="flex justify-end gap-4">
// //               <button
// //                 onClick={handleCancelDelete}
// //                 className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleDeleteSupplier}
// //                 className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Render SupplierOrderForm */}
// //       <SupplierOrderForm />
// //     </div>
// //   );
// // };

// // export default Supc;
// import React, { useState, useEffect, useCallback, useMemo } from 'react';
// import { Filter, Plus, Star, StarOff, X, Edit, Trash2, Eye, ArrowLeft } from 'lucide-react';
// import SupplierOrderForm from './SupplierOrderForm';
// import { useStore } from './StoreContext';

// // DetailedSupplierForm Component (Memoized)
// const DetailedSupplierForm = React.memo(({
//   supplier,
//   onBasicChange,
//   onDealerChange,
//   onCancel,
//   onSave,
//   title,
//   submitLabel,
//   newProduct,
//   onProductChange,
//   onAddProduct,
//   onRemoveProduct,
//   formType,
// }) => {
//   return (
//     <div className="border border-gray-200 rounded-lg p-6 mb-6 space-y-6">
//       {/* Form Header */}
//       <div className="flex justify-between items-center">
//         <h2 className="text-lg font-semibold">{title}</h2>
//         <button
//           onClick={onCancel}
//           className="text-gray-500 hover:text-gray-700"
//         >
//           <X className="h-5 w-5" />
//         </button>
//       </div>

//       {/* Basic Information */}
//       <div>
//         <h3 className="font-medium text-gray-700 mb-3">Basic Information</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Name */}
//           <div>
//             <label htmlFor={`${formType}-name`} className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
//             <input
//               id={`${formType}-name`}
//               type="text"
//               placeholder="Supplier name"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.name || ''}
//               onChange={(e) => onBasicChange('name', e.target.value)}
//               required
//             />
//           </div>

//           {/* Location */}
//           <div>
//             <label htmlFor={`${formType}-location`} className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
//             <input
//               id={`${formType}-location`}
//               type="text"
//               placeholder="City, Country"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.location || ''}
//               onChange={(e) => onBasicChange('location', e.target.value)}
//               required
//             />
//           </div>

//           {/* Category */}
//           <div>
//             <label htmlFor={`${formType}-category`} className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
//             <select
//               id={`${formType}-category`}
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.category || ''}
//               onChange={(e) => onBasicChange('category', e.target.value)}
//               required
//             >
//               <option value="" disabled>Select category</option>
//               {['Electronics', 'Apparel', 'Raw Materials', 'Transportation', 'Packaging', 'Food', 'Services'].map((category) => (
//                 <option key={category} value={category}>{category}</option>
//               ))}
//             </select>
//           </div>

//           {/* Website */}
//           <div>
//             <label htmlFor={`${formType}-website`} className="block text-sm font-medium text-gray-700 mb-1">Website</label>
//             <input
//               id={`${formType}-website`}
//               type="text"
//               placeholder="www.example.com"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.website || ''}
//               onChange={(e) => onBasicChange('website', e.target.value)}
//             />
//           </div>

//           {/* Rating */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
//             <div className="flex items-center gap-2">
//               {[1, 2, 3, 4, 5].map((rating) => (
//                 <button
//                   key={rating}
//                   type="button"
//                   onClick={() => onBasicChange('rating', rating)}
//                   className="focus:outline-none transition-transform hover:scale-110"
//                   aria-label={`Rate ${rating} stars`}
//                 >
//                   {rating <= supplier.rating ? (
//                     <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
//                   ) : (
//                     <StarOff className="w-6 h-6 text-gray-300" />
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Active Status */}
//           <div className="flex items-center">
//             <label className="inline-flex items-center cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={supplier.active || false}
//                 onChange={(e) => onBasicChange('active', e.target.checked)}
//                 className="sr-only peer"
//               />
//               <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//               <span className="ml-3 text-sm font-medium text-gray-700">Active Status</span>
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Dealer Information */}
//       <div>
//         <h3 className="font-medium text-gray-700 mb-3">Dealer Information</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Dealer Name */}
//           <div>
//             <label htmlFor={`${formType}-dealer-name`} className="block text-sm font-medium text-gray-700 mb-1">Dealer Name *</label>
//             <input
//               id={`${formType}-dealer-name`}
//               type="text"
//               placeholder="Dealer's full name"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.dealerInfo?.dealerName || ''}
//               onChange={(e) => onDealerChange('dealerName', e.target.value, formType)}
//               required
//             />
//           </div>

//           {/* Position */}
//           <div>
//             <label htmlFor={`${formType}-position`} className="block text-sm font-medium text-gray-700 mb-1">Position</label>
//             <input
//               id={`${formType}-position`}
//               type="text"
//               placeholder="Sales Manager, Owner, etc."
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.dealerInfo?.position || ''}
//               onChange={(e) => onDealerChange('position', e.target.value, formType)}
//             />
//           </div>

//           {/* Primary Phone */}
//           <div>
//             <label htmlFor={`${formType}-phone1`} className="block text-sm font-medium text-gray-700 mb-1">Primary Phone *</label>
//             <input
//               id={`${formType}-phone1`}
//               type="text"
//               placeholder="Primary contact number"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.dealerInfo?.phone1 || ''}
//               onChange={(e) => onDealerChange('phone1', e.target.value, formType)}
//               required
//             />
//           </div>

//           {/* Secondary Phone */}
//           <div>
//             <label htmlFor={`${formType}-phone2`} className="block text-sm font-medium text-gray-700 mb-1">Secondary Phone</label>
//             <input
//               id={`${formType}-phone2`}
//               type="text"
//               placeholder="Alternative contact number"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.dealerInfo?.phone2 || ''}
//               onChange={(e) => onDealerChange('phone2', e.target.value, formType)}
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label htmlFor={`${formType}-email`} className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
//             <input
//               id={`${formType}-email`}
//               type="email"
//               placeholder="email@example.com"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.dealerInfo?.email || ''}
//               onChange={(e) => onDealerChange('email', e.target.value, formType)}
//               required
//             />
//           </div>
//         </div>
//       </div>

//       {/* Business Information */}
//       <div>
//         <h3 className="font-medium text-gray-700 mb-3">Business Information</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Shop Address */}
//           <div className="md:col-span-2">
//             <label htmlFor={`${formType}-shopAddress`} className="block text-sm font-medium text-gray-700 mb-1">Shop Address *</label>
//             <input
//               id={`${formType}-shopAddress`}
//               type="text"
//               placeholder="Complete address"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.shopAddress || ''}
//               onChange={(e) => onBasicChange('shopAddress', e.target.value)}
//               required
//             />
//           </div>

//           {/* Pincode */}
//           <div>
//             <label htmlFor={`${formType}-pincode`} className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
//             <input
//               id={`${formType}-pincode`}
//               type="text"
//               placeholder="Postal/ZIP code"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.pincode || ''}
//               onChange={(e) => onBasicChange('pincode', e.target.value)}
//               required
//             />
//           </div>

//           {/* GST Number */}
//           <div>
//             <label htmlFor={`${formType}-gstNo`} className="block text-sm font-medium text-gray-700 mb-1">GST Number *</label>
//             <input
//               id={`${formType}-gstNo`}
//               type="text"
//               placeholder="GST number"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.gstNo || ''}
//               onChange={(e) => onBasicChange('gstNo', e.target.value)}
//               required
//             />
//           </div>

//           {/* Tax ID */}
//           <div>
//             <label htmlFor={`${formType}-taxId`} className="block text-sm font-medium text-gray-700 mb-1">Tax ID *</label>
//             <input
//               id={`${formType}-taxId`}
//               type="text"
//               placeholder="Tax identification number"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.taxId || ''}
//               onChange={(e) => onBasicChange('taxId', e.target.value)}
//               required
//             />
//           </div>

//           {/* Billing Address */}
//           <div className="md:col-span-2">
//             <label htmlFor={`${formType}-billingAddress`} className="block text-sm font-medium text-gray-700 mb-1">Billing Address *</label>
//             <input
//               id={`${formType}-billingAddress`}
//               type="text"
//               placeholder="Billing address"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.billingAddress || ''}
//               onChange={(e) => onBasicChange('billingAddress', e.target.value)}
//               required
//             />
//           </div>
//         </div>
//       </div>

//       {/* Financial Information */}
//       <div>
//         <h3 className="font-medium text-gray-700 mb-3">Financial Information</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Account Details */}
//           <div>
//             <label htmlFor={`${formType}-accountDetails`} className="block text-sm font-medium text-gray-700 mb-1">Account Details *</label>
//             <input
//               id={`${formType}-accountDetails`}
//               type="text"
//               placeholder="Bank name and account number"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.accountDetails || ''}
//               onChange={(e) => onBasicChange('accountDetails', e.target.value)}
//               required
//             />
//           </div>

//           {/* Payment Terms */}
//           <div>
//             <label htmlFor={`${formType}-paymentTerms`} className="block text-sm font-medium text-gray-700 mb-1">Payment Terms *</label>
//             <input
//               id={`${formType}-paymentTerms`}
//               type="text"
//               placeholder="Net 30, Net 45, etc."
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.paymentTerms || ''}
//               onChange={(e) => onBasicChange('paymentTerms', e.target.value)}
//               required
//             />
//           </div>
//         </div>
//       </div>

//       {/* Products Supplied */}
//       <div>
//         <h3 className="font-medium text-gray-700 mb-3">Products Supplied</h3>
//         <div className="space-y-4">
//           {supplier.products.map((product) => (
//             <div key={product.id} className="flex items-center gap-4">
//               <div className="flex-1">
//                 <input
//                   type="text"
//                   placeholder="Product name"
//                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//                   value={product.name || ''}
//                   onChange={(e) => onProductChange('name', e.target.value, product.id)}
//                 />
//               </div>
//               <div className="flex-1">
//                 <input
//                   type="text"
//                   placeholder="Product description"
//                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//                   value={product.description || ''}
//                   onChange={(e) => onProductChange('description', e.target.value, product.id)}
//                 />
//               </div>
//               <button
//                 type="button"
//                 onClick={() => onRemoveProduct(product.id)}
//                 className="p-2 text-red-600 hover:text-red-700"
//               >
//                 <Trash2 className="h-5 w-5" />
//               </button>
//             </div>
//           ))}
//           <div className="flex items-center gap-4">
//             <div className="flex-1">
//               <input
//                 type="text"
//                 placeholder="New product name"
//                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//                 value={newProduct.name || ''}
//                 onChange={(e) => onProductChange('name', e.target.value)}
//               />
//             </div>
//             <div className="flex-1">
//               <input
//                 type="text"
//                 placeholder="New product description"
//                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//                 value={newProduct.description || ''}
//                 onChange={(e) => onProductChange('description', e.target.value)}
//               />
//             </div>
//             <button
//               type="button"
//               onClick={onAddProduct}
//               className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
//             >
//               <Plus className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Form Actions */}
//       <div className="flex justify-end gap-4">
//         <button
//           type="button"
//           onClick={onCancel}
//           className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
//         >
//           Cancel
//         </button>
//         <button
//           type="button"
//           onClick={onSave}
//           className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
//         >
//           {submitLabel}
//         </button>
//       </div>
//     </div>
//   );
// });

// // SupplierDetailView Component
// const SupplierDetailView = ({ supplier, handleBackToList, handleStartEdit, handleConfirmDelete }) => (
//   <div className="space-y-6">
//     <div className="flex items-center">
//       <button
//         onClick={handleBackToList}
//         className="mr-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
//       >
//         <ArrowLeft className="h-5 w-5 text-gray-600" />
//       </button>
//       <h2 className="text-2xl font-bold text-gray-800">{supplier.name}</h2>
//       <div className="ml-auto flex space-x-2">
//         <button
//           onClick={() => handleStartEdit(supplier)}
//           className="flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
//         >
//           <Edit className="h-4 w-4" />
//           Edit
//         </button>
//         <button
//           onClick={() => handleConfirmDelete(supplier)}
//           className="flex items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
//         >
//           <Trash2 className="h-4 w-4" />
//           Delete
//         </button>
//       </div>
//     </div>

//     {/* Render supplier details here */}
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       {/* Basic Information */}
//       <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h3>
//         <div className="space-y-3">
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Category:</span>
//             <span className="font-medium text-gray-800">{supplier.category}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Location:</span>
//             <span className="font-medium text-gray-800">{supplier.location}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Rating:</span>
//             <div>
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <Star
//                   key={star}
//                   className={`w-4 h-4 ${
//                     star <= supplier.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Status:</span>
//             <span
//               className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                 supplier.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//               }`}
//             >
//               {supplier.active ? 'Active' : 'Inactive'}
//             </span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Website:</span>
//             <span className="font-medium text-blue-600 hover:underline">
//               {supplier.website || 'N/A'}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Dealer Information */}
//       <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Dealer Information</h3>
//         <div className="space-y-3">
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Name:</span>
//             <span className="font-medium text-gray-800">{supplier.dealerInfo?.dealerName || 'N/A'}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Position:</span>
//             <span className="font-medium text-gray-800">{supplier.dealerInfo?.position || 'N/A'}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Primary Phone:</span>
//             <span className="font-medium text-gray-800">{supplier.dealerInfo?.phone1 || 'N/A'}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Secondary Phone:</span>
//             <span className="font-medium text-gray-800">{supplier.dealerInfo?.phone2 || 'N/A'}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Email:</span>
//             <span className="font-medium text-blue-600 hover:underline">
//               {supplier.dealerInfo?.email || 'N/A'}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Business Information */}
//       <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Business Information</h3>
//         <div className="space-y-3">
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Shop Address:</span>
//             <span className="font-medium text-gray-800">{supplier.shopAddress || 'N/A'}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Pincode:</span>
//             <span className="font-medium text-gray-800">{supplier.pincode || 'N/A'}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">GST Number:</span>
//             <span className="font-medium text-gray-800">{supplier.gstNo || 'N/A'}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Tax ID:</span>
//             <span className="font-medium text-gray-800">{supplier.taxId || 'N/A'}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Billing Address:</span>
//             <span className="font-medium text-gray-800">{supplier.billingAddress || 'N/A'}</span>
//           </div>
//         </div>
//       </div>

//       {/* Financial Information */}
//       <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Financial Information</h3>
//         <div className="space-y-3">
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Account Details:</span>
//             <span className="font-medium text-gray-800">{supplier.accountDetails || 'N/A'}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Payment Terms:</span>
//             <span className="font-medium text-gray-800">{supplier.paymentTerms || 'N/A'}</span>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Products Section */}
//     <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
//       <h3 className="text-lg font-semibold text-gray-800 mb-4">Products Supplied</h3>
//       {supplier.products && supplier.products.length > 0 ? (
//         <div className="divide-y divide-gray-200">
//           {supplier.products.map((product) => (
//             <div key={product.id} className="py-3 flex justify-between items-center">
//               <div>
//                 <h4 className="font-medium text-gray-800">{product.name}</h4>
//                 <p className="text-sm text-gray-500">{product.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-500 italic">No products listed</p>
//       )}
//     </div>
//   </div>
// );

// // Supc Component
// const Supc = () => {
//   const { storeId } = useStore();
//   const [suppliers, setSuppliers] = useState([]);
//   const [viewingSupplier, setViewingSupplier] = useState(null);
//   const [isViewingDetails, setIsViewingDetails] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showFilters, setShowFilters] = useState(false);
//   const [filters, setFilters] = useState({
//     location: '',
//     category: '',
//     rating: 0,
//     active: null,
//   });
//   const [showNewSupplierForm, setShowNewSupplierForm] = useState(false);
//   const [newSupplier, setNewSupplier] = useState({
//     name: '',
//     location: '',
//     category: '',
//     rating: 3,
//     active: true,
//     dealerInfo: {
//       dealerName: '',
//       phone1: '',
//       phone2: '',
//       email: '',
//       position: '',
//     },
//     shopAddress: '',
//     pincode: '',
//     gstNo: '',
//     taxId: '',
//     accountDetails: '',
//     paymentTerms: 'Net 30',
//     billingAddress: '',
//     website: '',
//     products: [],
//   });
//   const [editMode, setEditMode] = useState(false);
//   const [editingSupplierId, setEditingSupplierId] = useState(null);
//   const [editingSupplier, setEditingSupplier] = useState({
//     name: '',
//     location: '',
//     category: '',
//     rating: 3,
//     active: true,
//     dealerInfo: {
//       dealerName: '',
//       phone1: '',
//       phone2: '',
//       email: '',
//       position: '',
//     },
//     shopAddress: '',
//     pincode: '',
//     gstNo: '',
//     taxId: '',
//     accountDetails: '',
//     paymentTerms: '',
//     billingAddress: '',
//     website: '',
//     products: [],
//   });
//   const [newProduct, setNewProduct] = useState({ name: '', description: '' });
//   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
//   const [supplierToDelete, setSupplierToDelete] = useState(null);
//   const categories = ['Electronics', 'Apparel', 'Raw Materials', 'Transportation', 'Packaging', 'Food', 'Services'];

//   // Fetch suppliers from backend
//   useEffect(() => {
//     if (storeId) {
//       fetch(`http://127.0.0.1:5015/suppliers?storeId=${storeId}`)
//         .then((response) => response.json())
//         .then((data) => setSuppliers(data))
//         .catch((error) => console.error('Error fetching suppliers:', error));
//     }
//   }, [storeId]);

//   const handleSearch = useCallback((e) => {
//     setSearchTerm(e.target.value);
//   }, []);

//   const handleFilterChange = useCallback((field, value) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [field]: value,
//     }));
//   }, []);

//   const handleNewSupplierChange = useCallback((field, value) => {
//     setNewSupplier((prevSupplier) => ({
//       ...prevSupplier,
//       [field]: value,
//     }));
//   }, []);

//   const handleDealerInfoChange = useCallback((field, value, formType = 'new') => {
//     if (formType === 'new') {
//       setNewSupplier((prevSupplier) => ({
//         ...prevSupplier,
//         dealerInfo: {
//           ...prevSupplier.dealerInfo,
//           [field]: value,
//         },
//       }));
//     } else if (formType === 'edit') {
//       setEditingSupplier((prevSupplier) => ({
//         ...prevSupplier,
//         dealerInfo: {
//           ...prevSupplier.dealerInfo,
//           [field]: value,
//         },
//       }));
//     }
//   }, []);

//   const handleEditSupplierChange = useCallback((field, value) => {
//     setEditingSupplier((prevSupplier) => ({
//       ...prevSupplier,
//       [field]: value,
//     }));
//   }, []);

//   const handleNewProductChange = useCallback((field, value) => {
//     setNewProduct((prevProduct) => ({
//       ...prevProduct,
//       [field]: value,
//     }));
//   }, []);

//   const handleAddProduct = useCallback(
//     (formType = 'new') => {
//       if (!newProduct.name) return;

//       const productId = Date.now();
//       const product = { ...newProduct, id: productId };

//       if (formType === 'new') {
//         setNewSupplier((prevSupplier) => ({
//           ...prevSupplier,
//           products: [...prevSupplier.products, product],
//         }));
//       } else if (formType === 'edit') {
//         setEditingSupplier((prevSupplier) => ({
//           ...prevSupplier,
//           products: [...prevSupplier.products, product],
//         }));
//       }

//       setNewProduct({ name: '', description: '' });
//     },
//     [newProduct]
//   );

//   const handleRemoveProduct = useCallback((productId, formType = 'new') => {
//     if (formType === 'new') {
//       setNewSupplier((prevSupplier) => ({
//         ...prevSupplier,
//         products: prevSupplier.products.filter((p) => p.id !== productId),
//       }));
//     } else if (formType === 'edit') {
//       setEditingSupplier((prevSupplier) => ({
//         ...prevSupplier,
//         products: prevSupplier.products.filter((p) => p.id !== productId),
//       }));
//     }
//   }, []);

//   // const handleAddSupplier = useCallback(() => {
//   //   // Validate required fields
//   //   if (
//   //     !newSupplier.name ||
//   //     !newSupplier.location ||
//   //     !newSupplier.category ||
//   //     !newSupplier.dealerInfo.dealerName ||
//   //     !newSupplier.dealerInfo.phone1 ||
//   //     !newSupplier.dealerInfo.email
//   //   ) {
//   //     alert("Please fill in all required fields.");
//   //     return;
//   //   }
  
//   //   fetch(`http://127.0.0.1:5015/suppliers?storeId=${storeId}`, {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //     body: JSON.stringify(newSupplier),
//   //   })
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       setSuppliers((prevSuppliers) => [...prevSuppliers, data]);
//   //       setShowNewSupplierForm(false);
//   //       setNewSupplier({
//   //         name: '',
//   //         location: '',
//   //         category: '',
//   //         rating: 3,
//   //         active: true,
//   //         dealerInfo: {
//   //           dealerName: '',
//   //           phone1: '',
//   //           phone2: '',
//   //           email: '',
//   //           position: '',
//   //         },
//   //         shopAddress: '',
//   //         pincode: '',
//   //         gstNo: '',
//   //         taxId: '',
//   //         accountDetails: '',
//   //         paymentTerms: 'Net 30',
//   //         billingAddress: '',
//   //         website: '',
//   //         products: [],
//   //       });
//   //     })
//   //     .catch((error) => console.error('Error adding supplier:', error));
//   // }, [newSupplier, storeId]);
//   // const handleAddSupplier = useCallback(() => {
//   //   // Validate required fields
//   //   if (
//   //     !newSupplier.name ||
//   //     !newSupplier.location ||
//   //     !newSupplier.category ||
//   //     !newSupplier.dealerInfo.dealerName ||
//   //     !newSupplier.dealerInfo.phone1 ||
//   //     !newSupplier.dealerInfo.email
//   //   ) {
//   //     alert("Please fill in all required fields.");
//   //     return;
//   //   }
  
//   //   fetch(`http://127.0.0.1:5015/suppliers?storeId=${storeId}`, {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //     body: JSON.stringify(newSupplier),
//   //   })
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       setSuppliers((prevSuppliers) => [...prevSuppliers, data]);
//   //       setShowNewSupplierForm(false);
//   //       setNewSupplier({
//   //         name: '',
//   //         location: '',
//   //         category: '',
//   //         rating: 3,
//   //         active: true,
//   //         dealerInfo: {
//   //           dealerName: '',
//   //           phone1: '',
//   //           phone2: '',
//   //           email: '',
//   //           position: '',
//   //         },
//   //         shopAddress: '',
//   //         pincode: '',
//   //         gstNo: '',
//   //         taxId: '',
//   //         accountDetails: '',
//   //         paymentTerms: 'Net 30',
//   //         billingAddress: '',
//   //         website: '',
//   //         products: [],
//   //       });
//   //     })
//   //     .catch((error) => console.error('Error adding supplier:', error));
//   // }, [newSupplier, storeId]);
//   const handleAddSupplier = useCallback(() => {
//     // Validate required fields
//     const requiredFields = [
//       newSupplier.name,
//       newSupplier.location,
//       newSupplier.category,
//       newSupplier.dealerInfo.dealerName,
//       newSupplier.dealerInfo.phone1,
//       newSupplier.dealerInfo.email,
//       newSupplier.shopAddress,
//       newSupplier.pincode,
//       newSupplier.gstNo,
//       newSupplier.taxId,
//       newSupplier.accountDetails,
//       newSupplier.paymentTerms,
//       newSupplier.billingAddress,
//     ];
  
//     if (requiredFields.some((field) => !field)) {
//       alert("Please fill in all required fields.");
//       return;
//     }
  
//     // Make the API call
//     fetch(`http://127.0.0.1:5015/suppliers?storeId=${storeId}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newSupplier),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setSuppliers((prevSuppliers) => [...prevSuppliers, data]);
//         setShowNewSupplierForm(false);
//         setNewSupplier({
//           name: '',
//           location: '',
//           category: '',
//           rating: 3,
//           active: true,
//           dealerInfo: {
//             dealerName: '',
//             phone1: '',
//             phone2: '',
//             email: '',
//             position: '',
//           },
//           shopAddress: '',
//           pincode: '',
//           gstNo: '',
//           taxId: '',
//           accountDetails: '',
//           paymentTerms: 'Net 30',
//           billingAddress: '',
//           website: '',
//           products: [],
//         });
//       })
//       .catch((error) => console.error('Error adding supplier:', error));
//   }, [newSupplier, storeId]);
//   const handleStartEdit = useCallback((supplier) => {
//     setEditMode(true);
//     setEditingSupplierId(supplier._id);
//     setEditingSupplier({ ...supplier });
//     setShowNewSupplierForm(false);
//     setIsViewingDetails(false);
//   }, []);

//   // const handleSaveEdit = useCallback(() => {
//   //   if (!editingSupplierId || !editingSupplier) {
//   //     alert("No supplier selected for editing.");
//   //     return;
//   //   }
  
//   //   fetch(`http://127.0.0.1:5015/suppliers/${editingSupplierId}?storeId=${storeId}`, {
//   //     method: 'PUT',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //     body: JSON.stringify(editingSupplier),
//   //   })
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       setSuppliers((prevSuppliers) =>
//   //         prevSuppliers.map((supplier) =>
//   //           supplier._id === editingSupplierId ? data : supplier
//   //         )
//   //       );
//   //       setEditMode(false);
//   //       setEditingSupplierId(null);
//   //     })
//   //     .catch((error) => {
//   //       console.error('Error updating supplier:', error);
//   //       alert("Failed to update supplier. Please try again.");
//   //     });
//   // }, [editingSupplier, editingSupplierId, storeId]);
//   const handleSaveEdit = useCallback(() => {
//     if (!editingSupplierId || !editingSupplier) {
//       alert("No supplier selected for editing.");
//       return;
//     }
  
//     fetch(`http://127.0.0.1:5015/suppliers/${editingSupplierId}?storeId=${storeId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(editingSupplier),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setSuppliers((prevSuppliers) =>
//           prevSuppliers.map((supplier) =>
//             supplier._id === editingSupplierId ? data : supplier
//           )
//         );
//         setEditMode(false);
//         setEditingSupplierId(null);
//       })
//       .catch((error) => {
//         console.error('Error updating supplier:', error);
//         alert("Failed to update supplier. Please try again.");
//       });
//   }, [editingSupplier, editingSupplierId, storeId]);
//   const handleCancelEdit = useCallback(() => {
//     setEditMode(false);
//     setEditingSupplierId(null);
//   }, []);

//   const handleViewDetails = useCallback((supplier) => {
//     setViewingSupplier(supplier);
//     setIsViewingDetails(true);
//   }, []);

//   const handleBackToList = useCallback(() => {
//     setIsViewingDetails(false);
//     setViewingSupplier(null);
//   }, []);

//   const handleConfirmDelete = useCallback((supplier) => {
//     setSupplierToDelete(supplier);
//     setShowDeleteConfirm(true);
//   }, []);

//   // const handleDeleteSupplier = useCallback(() => {
//   //   if (!supplierToDelete || !supplierToDelete._id) {
//   //     alert("No supplier selected for deletion.");
//   //     return;
//   //   }
  
//   //   fetch(`http://127.0.0.1:5015/suppliers/${supplierToDelete._id}?storeId=${storeId}`, {
//   //     method: 'DELETE',
//   //   })
//   //     .then((response) => {
//   //       if (response.ok) {
//   //         setSuppliers((prevSuppliers) =>
//   //           prevSuppliers.filter((supplier) => supplier._id !== supplierToDelete._id)
//   //         );
//   //         setShowDeleteConfirm(false);
//   //         setSupplierToDelete(null);
  
//   //         if (viewingSupplier && viewingSupplier._id === supplierToDelete._id) {
//   //           handleBackToList();
//   //         }
//   //       } else {
//   //         throw new Error("Failed to delete supplier.");
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       console.error('Error deleting supplier:', error);
//   //       alert("Failed to delete supplier. Please try again.");
//   //     });
//   // }, [supplierToDelete, storeId, viewingSupplier, handleBackToList]);
//   const handleDeleteSupplier = useCallback(() => {
//     if (!supplierToDelete || !supplierToDelete._id) {
//       alert("No supplier selected for deletion.");
//       return;
//     }
  
//     fetch(`http://127.0.0.1:5015/suppliers/${supplierToDelete._id}?storeId=${storeId}`, {
//       method: 'DELETE',
//     })
//       .then((response) => {
//         if (response.ok) {
//           setSuppliers((prevSuppliers) =>
//             prevSuppliers.filter((supplier) => supplier._id !== supplierToDelete._id)
//           );
//           setShowDeleteConfirm(false);
//           setSupplierToDelete(null);
  
//           if (viewingSupplier && viewingSupplier._id === supplierToDelete._id) {
//             handleBackToList();
//           }
//         } else {
//           throw new Error("Failed to delete supplier.");
//         }
//       })
//       .catch((error) => {
//         console.error('Error deleting supplier:', error);
//         alert("Failed to delete supplier. Please try again.");
//       });
//   }, [supplierToDelete, storeId, viewingSupplier, handleBackToList]);
//   const handleCancelDelete = useCallback(() => {
//     setShowDeleteConfirm(false);
//     setSupplierToDelete(null);
//   }, []);

//   const filteredSuppliers = useMemo(() => {
//     return suppliers.filter((supplier) => {
//       // Check if the supplier object exists
//       if (!supplier) return false;
  
//       // Filter by search term (name)
//       if (
//         searchTerm &&
//         (!supplier.name || !supplier.name.toLowerCase().includes(searchTerm.toLowerCase()))
//       ) {
//         return false;
//       }
  
//       // Filter by location
//       if (
//         filters.location &&
//         (!supplier.location || !supplier.location.toLowerCase().includes(filters.location.toLowerCase()))
//       ) {
//         return false;
//       }
  
//       // Filter by category
//       if (filters.category && supplier.category !== filters.category) {
//         return false;
//       }
  
//       // Filter by rating
//       if (filters.rating > 0 && (!supplier.rating || supplier.rating < filters.rating)) {
//         return false;
//       }
  
//       // Filter by active status
//       if (filters.active !== null && supplier.active !== filters.active) {
//         return false;
//       }

//       // If all filters pass, include the supplier
//       return true;
//     });
//   }, [suppliers, searchTerm, filters]);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Supplier Management</h1>
//         <button
//           onClick={() => setShowNewSupplierForm(true)}
//           className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
//         >
//           <Plus className="h-5 w-5" />
//           Add Supplier
//         </button>
//       </div>

//       {/* Search and Filters */}
//       <div className="mb-6">
//         <div className="flex items-center gap-4">
//           <div className="flex-1">
//             <input
//               type="text"
//               placeholder="Search suppliers..."
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </div>
//           <button
//             onClick={() => setShowFilters(!showFilters)}
//             className="p-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
//           >
//             <Filter className="h-5 w-5 text-gray-600" />
//           </button>
//         </div>

//         {showFilters && (
//           <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
//             <select
//               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               value={filters.location}
//               onChange={(e) => handleFilterChange('location', e.target.value)}
//             >
//               <option value="">Location</option>
//               <option value="San Francisco, USA">San Francisco, USA</option>
//               <option value="Paris, France">Paris, France</option>
//               <option value="Tokyo, Japan">Tokyo, Japan</option>
//             </select>

//             <select
//               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               value={filters.category}
//               onChange={(e) => handleFilterChange('category', e.target.value)}
//             >
//               <option value="">Category</option>
//               {categories.map((category) => (
//                 <option key={category} value={category}>{category}</option>
//               ))}
//             </select>

//             <select
//               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               value={filters.rating}
//               onChange={(e) => handleFilterChange('rating', parseInt(e.target.value))}
//             >
//               <option value="0">Rating</option>
//               <option value="1">1 Star</option>
//               <option value="2">2 Stars</option>
//               <option value="3">3 Stars</option>
//               <option value="4">4 Stars</option>
//               <option value="5">5 Stars</option>
//             </select>

//             <select
//               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               value={filters.active ?? ''}
//               onChange={(e) => handleFilterChange('active', e.target.value === 'true')}
//             >
//               <option value="">Status</option>
//               <option value="true">Active</option>
//               <option value="false">Inactive</option>
//             </select>
//           </div>
//         )}
//       </div>

//       {/* Supplier List or Detail View */}
//       {isViewingDetails ? (
//         <SupplierDetailView
//           supplier={viewingSupplier}
//           handleBackToList={handleBackToList}
//           handleStartEdit={handleStartEdit}
//           handleConfirmDelete={handleConfirmDelete}
//         />
//       ) : (
//         <div className="space-y-4">
//           {filteredSuppliers.map((supplier) => (
//             <div
//               key={supplier._id}
//               className="p-4 bg-white border border-gray-200 rounded-md hover:shadow-md transition-shadow"
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h2 className="font-semibold">{supplier.name}</h2>
//                   <p className="text-sm text-gray-500">{supplier.location}</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <button
//                     onClick={() => handleViewDetails(supplier)}
//                     className="p-2 text-gray-500 hover:text-blue-600"
//                   >
//                     <Eye className="h-5 w-5" />
//                   </button>
//                   <button
//                     onClick={() => handleStartEdit(supplier)}
//                     className="p-2 text-gray-500 hover:text-green-600"
//                   >
//                     <Edit className="h-5 w-5" />
//                   </button>
//                   <button
//                     onClick={() => handleConfirmDelete(supplier)}
//                     className="p-2 text-gray-500 hover:text-red-600"
//                   >
//                     <Trash2 className="h-5 w-5" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* New Supplier Form */}
//       {showNewSupplierForm && (
//         <DetailedSupplierForm
//           supplier={newSupplier}
//           onBasicChange={handleNewSupplierChange}
//           onDealerChange={handleDealerInfoChange}
//           onCancel={() => setShowNewSupplierForm(false)}
//           onSave={handleAddSupplier}
//           title="Add New Supplier"
//           submitLabel="Add Supplier"
//           newProduct={newProduct}
//           onProductChange={handleNewProductChange}
//           onAddProduct={() => handleAddProduct('new')}
//           onRemoveProduct={(id) => handleRemoveProduct(id, 'new')}
//           formType="new"
//         />
//       )}

//       {/* Edit Supplier Form */}
//       {editMode && (
//         <DetailedSupplierForm
//           supplier={editingSupplier}
//           onBasicChange={handleEditSupplierChange}
//           onDealerChange={handleDealerInfoChange}
//           onCancel={handleCancelEdit}
//           onSave={handleSaveEdit}
//           title="Edit Supplier"
//           submitLabel="Save Changes"
//           newProduct={newProduct}
//           onProductChange={handleNewProductChange}
//           onAddProduct={() => handleAddProduct('edit')}
//           onRemoveProduct={(id) => handleRemoveProduct(id, 'edit')}
//           formType="edit"
//         />
//       )}

//       {/* Delete Confirmation Modal */}
//       {showDeleteConfirm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-md">
//             <h2 className="text-lg font-semibold mb-4">Delete Supplier</h2>
//             <p className="text-gray-600 mb-6">Are you sure you want to delete this supplier?</p>
//             <div className="flex justify-end gap-4">
//               <button
//                 onClick={handleCancelDelete}
//                 className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleDeleteSupplier}
//                 className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Render SupplierOrderForm */}
//       <SupplierOrderForm />
//     </div>
//   );
// };

// export default Supc;
// import React, { useState, useEffect, useCallback, useMemo } from 'react';
// import { Filter, Plus, Star, StarOff, X, Edit, Trash2, Eye, ArrowLeft } from 'lucide-react';
// import SupplierOrderForm from './SupplierOrderForm';
// import { useStore } from './StoreContext';

// // DetailedSupplierForm Component (Memoized)
// const DetailedSupplierForm = React.memo(({
//   supplier,
//   onBasicChange,
//   onDealerChange,
//   onCancel,
//   onSave,
//   title,
//   submitLabel,
//   newProduct,
//   onProductChange,
//   onAddProduct,
//   onRemoveProduct,
//   formType,
// }) => {
//   return (
//     <div className="border border-gray-200 rounded-lg p-6 mb-6 space-y-6">
//       {/* Form Header */}
//       <div className="flex justify-between items-center">
//         <h2 className="text-lg font-semibold">{title}</h2>
//         <button
//           onClick={onCancel}
//           className="text-gray-500 hover:text-gray-700"
//         >
//           <X className="h-5 w-5" />
//         </button>
//       </div>

//       {/* Basic Information */}
//       <div>
//         <h3 className="font-medium text-gray-700 mb-3">Basic Information</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Name */}
//           <div>
//             <label htmlFor={`${formType}-name`} className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
//             <input
//               id={`${formType}-name`}
//               type="text"
//               placeholder="Supplier name"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.name || ''}
//               onChange={(e) => onBasicChange('name', e.target.value)}
//               required
//             />
//           </div>

//           {/* Location */}
//           <div>
//             <label htmlFor={`${formType}-location`} className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
//             <input
//               id={`${formType}-location`}
//               type="text"
//               placeholder="City, Country"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.location || ''}
//               onChange={(e) => onBasicChange('location', e.target.value)}
//               required
//             />
//           </div>

//           {/* Category */}
//           <div>
//             <label htmlFor={`${formType}-category`} className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
//             <select
//               id={`${formType}-category`}
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.category || ''}
//               onChange={(e) => onBasicChange('category', e.target.value)}
//               required
//             >
//               <option value="" disabled>Select category</option>
//               {['Electronics', 'Apparel', 'Raw Materials', 'Transportation', 'Packaging', 'Food', 'Services'].map((category) => (
//                 <option key={category} value={category}>{category}</option>
//               ))}
//             </select>
//           </div>

//           {/* Website */}
//           <div>
//             <label htmlFor={`${formType}-website`} className="block text-sm font-medium text-gray-700 mb-1">Website</label>
//             <input
//               id={`${formType}-website`}
//               type="text"
//               placeholder="www.example.com"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.website || ''}
//               onChange={(e) => onBasicChange('website', e.target.value)}
//             />
//           </div>

//           {/* Rating */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
//             <div className="flex items-center gap-2">
//               {[1, 2, 3, 4, 5].map((rating) => (
//                 <button
//                   key={rating}
//                   type="button"
//                   onClick={() => onBasicChange('rating', rating)}
//                   className="focus:outline-none transition-transform hover:scale-110"
//                   aria-label={`Rate ${rating} stars`}
//                 >
//                   {rating <= supplier.rating ? (
//                     <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
//                   ) : (
//                     <StarOff className="w-6 h-6 text-gray-300" />
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Active Status */}
//           <div className="flex items-center">
//             <label className="inline-flex items-center cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={supplier.active || false}
//                 onChange={(e) => onBasicChange('active', e.target.checked)}
//                 className="sr-only peer"
//               />
//               <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//               <span className="ml-3 text-sm font-medium text-gray-700">Active Status</span>
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Dealer Information */}
//       <div>
//         <h3 className="font-medium text-gray-700 mb-3">Dealer Information</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Dealer Name */}
//           <div>
//             <label htmlFor={`${formType}-dealer-name`} className="block text-sm font-medium text-gray-700 mb-1">Dealer Name *</label>
//             <input
//               id={`${formType}-dealer-name`}
//               type="text"
//               placeholder="Dealer's full name"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.dealerInfo?.dealerName || ''}
//               onChange={(e) => onDealerChange('dealerName', e.target.value, formType)}
//               required
//             />
//           </div>

//           {/* Position */}
//           <div>
//             <label htmlFor={`${formType}-position`} className="block text-sm font-medium text-gray-700 mb-1">Position</label>
//             <input
//               id={`${formType}-position`}
//               type="text"
//               placeholder="Sales Manager, Owner, etc."
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.dealerInfo?.position || ''}
//               onChange={(e) => onDealerChange('position', e.target.value, formType)}
//             />
//           </div>

//           {/* Primary Phone */}
//           <div>
//             <label htmlFor={`${formType}-phone1`} className="block text-sm font-medium text-gray-700 mb-1">Primary Phone *</label>
//             <input
//               id={`${formType}-phone1`}
//               type="text"
//               placeholder="Primary contact number"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.dealerInfo?.phone1 || ''}
//               onChange={(e) => onDealerChange('phone1', e.target.value, formType)}
//               required
//             />
//           </div>

//           {/* Secondary Phone */}
//           <div>
//             <label htmlFor={`${formType}-phone2`} className="block text-sm font-medium text-gray-700 mb-1">Secondary Phone</label>
//             <input
//               id={`${formType}-phone2`}
//               type="text"
//               placeholder="Alternative contact number"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.dealerInfo?.phone2 || ''}
//               onChange={(e) => onDealerChange('phone2', e.target.value, formType)}
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label htmlFor={`${formType}-email`} className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
//             <input
//               id={`${formType}-email`}
//               type="email"
//               placeholder="email@example.com"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.dealerInfo?.email || ''}
//               onChange={(e) => onDealerChange('email', e.target.value, formType)}
//               required
//             />
//           </div>
//         </div>
//       </div>

//       {/* Business Information */}
//       <div>
//         <h3 className="font-medium text-gray-700 mb-3">Business Information</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Shop Address */}
//           <div className="md:col-span-2">
//             <label htmlFor={`${formType}-shopAddress`} className="block text-sm font-medium text-gray-700 mb-1">Shop Address *</label>
//             <input
//               id={`${formType}-shopAddress`}
//               type="text"
//               placeholder="Complete address"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.shopAddress || ''}
//               onChange={(e) => onBasicChange('shopAddress', e.target.value)}
//               required
//             />
//           </div>

//           {/* Pincode */}
//           <div>
//             <label htmlFor={`${formType}-pincode`} className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
//             <input
//               id={`${formType}-pincode`}
//               type="text"
//               placeholder="Postal/ZIP code"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.pincode || ''}
//               onChange={(e) => onBasicChange('pincode', e.target.value)}
//               required
//             />
//           </div>

//           {/* GST Number */}
//           <div>
//             <label htmlFor={`${formType}-gstNo`} className="block text-sm font-medium text-gray-700 mb-1">GST Number *</label>
//             <input
//               id={`${formType}-gstNo`}
//               type="text"
//               placeholder="GST number"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.gstNo || ''}
//               onChange={(e) => onBasicChange('gstNo', e.target.value)}
//               required
//             />
//           </div>

//           {/* Tax ID */}
//           <div>
//             <label htmlFor={`${formType}-taxId`} className="block text-sm font-medium text-gray-700 mb-1">Tax ID *</label>
//             <input
//               id={`${formType}-taxId`}
//               type="text"
//               placeholder="Tax identification number"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.taxId || ''}
//               onChange={(e) => onBasicChange('taxId', e.target.value)}
//               required
//             />
//           </div>

//           {/* Billing Address */}
//           <div className="md:col-span-2">
//             <label htmlFor={`${formType}-billingAddress`} className="block text-sm font-medium text-gray-700 mb-1">Billing Address *</label>
//             <input
//               id={`${formType}-billingAddress`}
//               type="text"
//               placeholder="Billing address"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.billingAddress || ''}
//               onChange={(e) => onBasicChange('billingAddress', e.target.value)}
//               required
//             />
//           </div>
//         </div>
//       </div>

//       {/* Financial Information */}
//       <div>
//         <h3 className="font-medium text-gray-700 mb-3">Financial Information</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Account Details */}
//           <div>
//             <label htmlFor={`${formType}-accountDetails`} className="block text-sm font-medium text-gray-700 mb-1">Account Details *</label>
//             <input
//               id={`${formType}-accountDetails`}
//               type="text"
//               placeholder="Bank name and account number"
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.accountDetails || ''}
//               onChange={(e) => onBasicChange('accountDetails', e.target.value)}
//               required
//             />
//           </div>

//           {/* Payment Terms */}
//           <div>
//             <label htmlFor={`${formType}-paymentTerms`} className="block text-sm font-medium text-gray-700 mb-1">Payment Terms *</label>
//             <input
//               id={`${formType}-paymentTerms`}
//               type="text"
//               placeholder="Net 30, Net 45, etc."
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//               value={supplier.paymentTerms || ''}
//               onChange={(e) => onBasicChange('paymentTerms', e.target.value)}
//               required
//             />
//           </div>
//         </div>
//       </div>

//       {/* Products Supplied */}
//       <div>
//         <h3 className="font-medium text-gray-700 mb-3">Products Supplied</h3>
//         <div className="space-y-4">
//           {supplier.products.map((product) => (
//             <div key={product.id} className="flex items-center gap-4">
//               <div className="flex-1">
//                 <input
//                   type="text"
//                   placeholder="Product name"
//                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//                   value={product.name || ''}
//                   onChange={(e) => onProductChange('name', e.target.value, product.id)}
//                 />
//               </div>
//               <div className="flex-1">
//                 <input
//                   type="text"
//                   placeholder="Product description"
//                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//                   value={product.description || ''}
//                   onChange={(e) => onProductChange('description', e.target.value, product.id)}
//                 />
//               </div>
//               <button
//                 type="button"
//                 onClick={() => onRemoveProduct(product.id)}
//                 className="p-2 text-red-600 hover:text-red-700"
//               >
//                 <Trash2 className="h-5 w-5" />
//               </button>
//             </div>
//           ))}
//           <div className="flex items-center gap-4">
//             <div className="flex-1">
//               <input
//                 type="text"
//                 placeholder="New product name"
//                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//                 value={newProduct.name || ''}
//                 onChange={(e) => onProductChange('name', e.target.value)}
//               />
//             </div>
//             <div className="flex-1">
//               <input
//                 type="text"
//                 placeholder="New product description"
//                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
//                 value={newProduct.description || ''}
//                 onChange={(e) => onProductChange('description', e.target.value)}
//               />
//             </div>
//             <button
//               type="button"
//               onClick={onAddProduct}
//               className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
//             >
//               <Plus className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Form Actions */}
//       <div className="flex justify-end gap-4">
//         <button
//           type="button"
//           onClick={onCancel}
//           className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
//         >
//           Cancel
//         </button>
//         <button
//           type="button"
//           onClick={onSave}
//           className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
//         >
//           {submitLabel}
//         </button>
//       </div>
//     </div>
//   );
// });

// // SupplierDetailView Component
// const SupplierDetailView = ({ supplier, handleBackToList, handleStartEdit, handleConfirmDelete }) => (
//   <div className="space-y-6">
//     <div className="flex items-center">
//       <button
//         onClick={handleBackToList}
//         className="mr-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
//       >
//         <ArrowLeft className="h-5 w-5 text-gray-600" />
//       </button>
//       <h2 className="text-2xl font-bold text-gray-800">{supplier.name}</h2>
//       <div className="ml-auto flex space-x-2">
//         <button
//           onClick={() => handleStartEdit(supplier)}
//           className="flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
//         >
//           <Edit className="h-4 w-4" />
//           Edit
//         </button>
//         <button
//           onClick={() => handleConfirmDelete(supplier)}
//           className="flex items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
//         >
//           <Trash2 className="h-4 w-4" />
//           Delete
//         </button>
//       </div>
//     </div>

//     {/* Render supplier details here */}
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       {/* Basic Information */}
//       <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h3>
//         <div className="space-y-3">
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Category:</span>
//             <span className="font-medium text-gray-800">{supplier.category}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Location:</span>
//             <span className="font-medium text-gray-800">{supplier.location}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Rating:</span>
//             <div>
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <Star
//                   key={star}
//                   className={`w-4 h-4 ${
//                     star <= supplier.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Status:</span>
//             <span
//               className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                 supplier.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//               }`}
//             >
//               {supplier.active ? 'Active' : 'Inactive'}
//             </span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Website:</span>
//             <span className="font-medium text-blue-600 hover:underline">
//               {supplier.website || 'N/A'}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Dealer Information */}
//       <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Dealer Information</h3>
//         <div className="space-y-3">
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Name:</span>
//             <span className="font-medium text-gray-800">{supplier.dealerInfo?.dealerName || 'N/A'}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Position:</span>
//             <span className="font-medium text-gray-800">{supplier.dealerInfo?.position || 'N/A'}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Primary Phone:</span>
//             <span className="font-medium text-gray-800">{supplier.dealerInfo?.phone1 || 'N/A'}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Secondary Phone:</span>
//             <span className="font-medium text-gray-800">{supplier.dealerInfo?.phone2 || 'N/A'}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Email:</span>
//             <span className="font-medium text-blue-600 hover:underline">
//               {supplier.dealerInfo?.email || 'N/A'}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Business Information */}
//       <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Business Information</h3>
//         <div className="space-y-3">
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Shop Address:</span>
//             <span className="font-medium text-gray-800">{supplier.shopAddress || 'N/A'}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Pincode:</span>
//             <span className="font-medium text-gray-800">{supplier.pincode || 'N/A'}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">GST Number:</span>
//             <span className="font-medium text-gray-800">{supplier.gstNo || 'N/A'}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Tax ID:</span>
//             <span className="font-medium text-gray-800">{supplier.taxId || 'N/A'}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Billing Address:</span>
//             <span className="font-medium text-gray-800">{supplier.billingAddress || 'N/A'}</span>
//           </div>
//         </div>
//       </div>

//       {/* Financial Information */}
//       <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Financial Information</h3>
//         <div className="space-y-3">
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Account Details:</span>
//             <span className="font-medium text-gray-800">{supplier.accountDetails || 'N/A'}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-500">Payment Terms:</span>
//             <span className="font-medium text-gray-800">{supplier.paymentTerms || 'N/A'}</span>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Products Section */}
//     <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
//       <h3 className="text-lg font-semibold text-gray-800 mb-4">Products Supplied</h3>
//       {supplier.products && supplier.products.length > 0 ? (
//         <div className="divide-y divide-gray-200">
//           {supplier.products.map((product) => (
//             <div key={product.id} className="py-3 flex justify-between items-center">
//               <div>
//                 <h4 className="font-medium text-gray-800">{product.name}</h4>
//                 <p className="text-sm text-gray-500">{product.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-500 italic">No products listed</p>
//       )}
//     </div>
//   </div>
// );

// // Supc Component
// const Supc = () => {
//   const { storeId } = useStore();
//   const [suppliers, setSuppliers] = useState([]);
//   const [viewingSupplier, setViewingSupplier] = useState(null);
//   const [isViewingDetails, setIsViewingDetails] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showFilters, setShowFilters] = useState(false);
//   const [filters, setFilters] = useState({
//     location: '',
//     category: '',
//     rating: 0,
//     active: null,
//   });
//   const [showNewSupplierForm, setShowNewSupplierForm] = useState(false);
//   const [newSupplier, setNewSupplier] = useState({
//     name: '',
//     location: '',
//     category: '',
//     rating: 3,
//     active: true,
//     dealerInfo: {
//       dealerName: '',
//       phone1: '',
//       phone2: '',
//       email: '',
//       position: '',
//     },
//     shopAddress: '',
//     pincode: '',
//     gstNo: '',
//     taxId: '',
//     accountDetails: '',
//     paymentTerms: 'Net 30',
//     billingAddress: '',
//     website: '',
//     products: [],
//   });
//   const [editMode, setEditMode] = useState(false);
//   const [editingSupplierId, setEditingSupplierId] = useState(null);
//   const [editingSupplier, setEditingSupplier] = useState({
//     name: '',
//     location: '',
//     category: '',
//     rating: 3,
//     active: true,
//     dealerInfo: {
//       dealerName: '',
//       phone1: '',
//       phone2: '',
//       email: '',
//       position: '',
//     },
//     shopAddress: '',
//     pincode: '',
//     gstNo: '',
//     taxId: '',
//     accountDetails: '',
//     paymentTerms: '',
//     billingAddress: '',
//     website: '',
//     products: [],
//   });
//   const [newProduct, setNewProduct] = useState({ name: '', description: '' });
//   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
//   const [supplierToDelete, setSupplierToDelete] = useState(null);
//   const categories = ['Electronics', 'Apparel', 'Raw Materials', 'Transportation', 'Packaging', 'Food', 'Services'];

//   // Fetch suppliers from backend
//   useEffect(() => {
//     if (storeId) {
//       fetch(`http://127.0.0.1:5015/suppliers?storeId=${storeId}`)
//         .then((response) => response.json())
//         .then((data) => setSuppliers(data))
//         .catch((error) => console.error('Error fetching suppliers:', error));
//     }
//   }, [storeId]);

//   const handleSearch = useCallback((e) => {
//     setSearchTerm(e.target.value);
//   }, []);

//   const handleFilterChange = useCallback((field, value) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [field]: value,
//     }));
//   }, []);

//   const handleNewSupplierChange = useCallback((field, value) => {
//     setNewSupplier((prevSupplier) => ({
//       ...prevSupplier,
//       [field]: value,
//     }));
//   }, []);

//   const handleDealerInfoChange = useCallback((field, value, formType = 'new') => {
//     if (formType === 'new') {
//       setNewSupplier((prevSupplier) => ({
//         ...prevSupplier,
//         dealerInfo: {
//           ...prevSupplier.dealerInfo,
//           [field]: value,
//         },
//       }));
//     } else if (formType === 'edit') {
//       setEditingSupplier((prevSupplier) => ({
//         ...prevSupplier,
//         dealerInfo: {
//           ...prevSupplier.dealerInfo,
//           [field]: value,
//         },
//       }));
//     }
//   }, []);

//   const handleEditSupplierChange = useCallback((field, value) => {
//     setEditingSupplier((prevSupplier) => ({
//       ...prevSupplier,
//       [field]: value,
//     }));
//   }, []);

//   const handleNewProductChange = useCallback((field, value) => {
//     setNewProduct((prevProduct) => ({
//       ...prevProduct,
//       [field]: value,
//     }));
//   }, []);

//   const handleAddProduct = useCallback(
//     (formType = 'new') => {
//       if (!newProduct.name) return;

//       const productId = Date.now();
//       const product = { ...newProduct, id: productId };

//       if (formType === 'new') {
//         setNewSupplier((prevSupplier) => ({
//           ...prevSupplier,
//           products: [...prevSupplier.products, product],
//         }));
//       } else if (formType === 'edit') {
//         setEditingSupplier((prevSupplier) => ({
//           ...prevSupplier,
//           products: [...prevSupplier.products, product],
//         }));
//       }

//       setNewProduct({ name: '', description: '' });
//     },
//     [newProduct]
//   );

//   const handleRemoveProduct = useCallback((productId, formType = 'new') => {
//     if (formType === 'new') {
//       setNewSupplier((prevSupplier) => ({
//         ...prevSupplier,
//         products: prevSupplier.products.filter((p) => p.id !== productId),
//       }));
//     } else if (formType === 'edit') {
//       setEditingSupplier((prevSupplier) => ({
//         ...prevSupplier,
//         products: prevSupplier.products.filter((p) => p.id !== productId),
//       }));
//     }
//   }, []);

//   const handleAddSupplier = useCallback(() => {
//     // Validate required fields
//     const requiredFields = [
//       newSupplier.name,
//       newSupplier.location,
//       newSupplier.category,
//       newSupplier.dealerInfo.dealerName,
//       newSupplier.dealerInfo.phone1,
//       newSupplier.dealerInfo.email,
//       newSupplier.shopAddress,
//       newSupplier.pincode,
//       newSupplier.gstNo,
//       newSupplier.taxId,
//       newSupplier.accountDetails,
//       newSupplier.paymentTerms,
//       newSupplier.billingAddress,
//     ];

//     if (requiredFields.some((field) => !field)) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     // Make the API call
//     fetch(`http://127.0.0.1:5015/suppliers?storeId=${storeId}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newSupplier),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setSuppliers((prevSuppliers) => [...prevSuppliers, data]);
//         setShowNewSupplierForm(false);
//         setNewSupplier({
//           name: '',
//           location: '',
//           category: '',
//           rating: 3,
//           active: true,
//           dealerInfo: {
//             dealerName: '',
//             phone1: '',
//             phone2: '',
//             email: '',
//             position: '',
//           },
//           shopAddress: '',
//           pincode: '',
//           gstNo: '',
//           taxId: '',
//           accountDetails: '',
//           paymentTerms: 'Net 30',
//           billingAddress: '',
//           website: '',
//           products: [],
//         });
//       })
//       .catch((error) => console.error('Error adding supplier:', error));
//   }, [newSupplier, storeId]);

//   const handleStartEdit = useCallback((supplier) => {
//     setEditMode(true);
//     setEditingSupplierId(supplier._id);
//     setEditingSupplier({ ...supplier });
//     setShowNewSupplierForm(false);
//     setIsViewingDetails(false);
//   }, []);

//   const handleSaveEdit = useCallback(() => {
//     if (!editingSupplierId || !editingSupplier) {
//       alert("No supplier selected for editing.");
//       return;
//     }

//     fetch(`http://127.0.0.1:5015/suppliers/${editingSupplierId}?storeId=${storeId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(editingSupplier),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setSuppliers((prevSuppliers) =>
//           prevSuppliers.map((supplier) =>
//             supplier._id === editingSupplierId ? data : supplier
//           )
//         );
//         setEditMode(false);
//         setEditingSupplierId(null);
//       })
//       .catch((error) => {
//         console.error('Error updating supplier:', error);
//         alert("Failed to update supplier. Please try again.");
//       });
//   }, [editingSupplier, editingSupplierId, storeId]);

//   const handleCancelEdit = useCallback(() => {
//     setEditMode(false);
//     setEditingSupplierId(null);
//   }, []);

//   const handleViewDetails = useCallback((supplier) => {
//     setViewingSupplier(supplier);
//     setIsViewingDetails(true);
//   }, []);

//   const handleBackToList = useCallback(() => {
//     setIsViewingDetails(false);
//     setViewingSupplier(null);
//   }, []);

//   const handleConfirmDelete = useCallback((supplier) => {
//     setSupplierToDelete(supplier);
//     setShowDeleteConfirm(true);
//   }, []);

//   const handleDeleteSupplier = useCallback(() => {
//     if (!supplierToDelete || !supplierToDelete._id) {
//       alert("No supplier selected for deletion.");
//       return;
//     }

//     fetch(`http://127.0.0.1:5015/suppliers/${supplierToDelete._id}?storeId=${storeId}`, {
//       method: 'DELETE',
//     })
//       .then((response) => {
//         if (response.ok) {
//           setSuppliers((prevSuppliers) =>
//             prevSuppliers.filter((supplier) => supplier._id !== supplierToDelete._id)
//           );
//           setShowDeleteConfirm(false);
//           setSupplierToDelete(null);

//           if (viewingSupplier && viewingSupplier._id === supplierToDelete._id) {
//             handleBackToList();
//           }
//         } else {
//           throw new Error("Failed to delete supplier.");
//         }
//       })
//       .catch((error) => {
//         console.error('Error deleting supplier:', error);
//         alert("Failed to delete supplier. Please try again.");
//       });
//   }, [supplierToDelete, storeId, viewingSupplier, handleBackToList]);

//   const handleCancelDelete = useCallback(() => {
//     setShowDeleteConfirm(false);
//     setSupplierToDelete(null);
//   }, []);

//   const filteredSuppliers = useMemo(() => {
//     return suppliers.filter((supplier) => {
//       // Check if the supplier object exists
//       if (!supplier) return false;

//       // Filter by search term (name)
//       if (
//         searchTerm &&
//         (!supplier.name || !supplier.name.toLowerCase().includes(searchTerm.toLowerCase()))
//       ) {
//         return false;
//       }      // Filter by location
//       if (
//         filters.location &&
//         (!supplier.location || !supplier.location.toLowerCase().includes(filters.location.toLowerCase()))
//       ) {
//         return false;
//       }

//       // Filter by category
//       if (filters.category && supplier.category !== filters.category) {
//         return false;
//       }

//       // Filter by rating
//       if (filters.rating > 0 && (!supplier.rating || supplier.rating < filters.rating)) {
//         return false;
//       }

//       // Filter by active status
//       if (filters.active !== null && supplier.active !== filters.active) {
//         return false;
//       }

//       // If all filters pass, include the supplier
//       return true;
//     });
//   }, [suppliers, searchTerm, filters]);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Supplier Management</h1>
//         <button
//           onClick={() => setShowNewSupplierForm(true)}
//           className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
//         >
//           <Plus className="h-5 w-5" />
//           Add Supplier
//         </button>
//       </div>

//       {/* Search and Filters */}
//       <div className="mb-6">
//         <div className="flex items-center gap-4">
//           <div className="flex-1">
//             <input
//               type="text"
//               placeholder="Search suppliers..."
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </div>
//           <button
//             onClick={() => setShowFilters(!showFilters)}
//             className="p-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
//           >
//             <Filter className="h-5 w-5 text-gray-600" />
//           </button>
//         </div>

//         {showFilters && (
//           <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
//             <select
//               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               value={filters.location}
//               onChange={(e) => handleFilterChange('location', e.target.value)}
//             >
//               <option value="">Location</option>
//               <option value="San Francisco, USA">San Francisco, USA</option>
//               <option value="Paris, France">Paris, France</option>
//               <option value="Tokyo, Japan">Tokyo, Japan</option>
//             </select>

//             <select
//               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               value={filters.category}
//               onChange={(e) => handleFilterChange('category', e.target.value)}
//             >
//               <option value="">Category</option>
//               {categories.map((category) => (
//                 <option key={category} value={category}>{category}</option>
//               ))}
//             </select>

//             <select
//               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               value={filters.rating}
//               onChange={(e) => handleFilterChange('rating', parseInt(e.target.value))}
//             >
//               <option value="0">Rating</option>
//               <option value="1">1 Star</option>
//               <option value="2">2 Stars</option>
//               <option value="3">3 Stars</option>
//               <option value="4">4 Stars</option>
//               <option value="5">5 Stars</option>
//             </select>

//             <select
//               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               value={filters.active ?? ''}
//               onChange={(e) => handleFilterChange('active', e.target.value === 'true')}
//             >
//               <option value="">Status</option>
//               <option value="true">Active</option>
//               <option value="false">Inactive</option>
//             </select>
//           </div>
//         )}
//       </div>

//       {/* Supplier List or Detail View */}
//       {isViewingDetails ? (
//         <SupplierDetailView
//           supplier={viewingSupplier}
//           handleBackToList={handleBackToList}
//           handleStartEdit={handleStartEdit}
//           handleConfirmDelete={handleConfirmDelete}
//         />
//       ) : (
//         <div className="space-y-4">
//           {filteredSuppliers.map((supplier) => (
//             <div
//               key={supplier._id}
//               className="p-4 bg-white border border-gray-200 rounded-md hover:shadow-md transition-shadow"
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h2 className="font-semibold">{supplier.name}</h2>
//                   <p className="text-sm text-gray-500">{supplier.location}</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <button
//                     onClick={() => handleViewDetails(supplier)}
//                     className="p-2 text-gray-500 hover:text-blue-600"
//                   >
//                     <Eye className="h-5 w-5" />
//                   </button>
//                   <button
//                     onClick={() => handleStartEdit(supplier)}
//                     className="p-2 text-gray-500 hover:text-green-600"
//                   >
//                     <Edit className="h-5 w-5" />
//                   </button>
//                   <button
//                     onClick={() => handleConfirmDelete(supplier)}
//                     className="p-2 text-gray-500 hover:text-red-600"
//                   >
//                     <Trash2 className="h-5 w-5" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* New Supplier Form */}
//       {showNewSupplierForm && (
//         <DetailedSupplierForm
//           supplier={newSupplier}
//           onBasicChange={handleNewSupplierChange}
//           onDealerChange={handleDealerInfoChange}
//           onCancel={() => setShowNewSupplierForm(false)}
//           onSave={handleAddSupplier}
//           title="Add New Supplier"
//           submitLabel="Add Supplier"
//           newProduct={newProduct}
//           onProductChange={handleNewProductChange}
//           onAddProduct={() => handleAddProduct('new')}
//           onRemoveProduct={(id) => handleRemoveProduct(id, 'new')}
//           formType="new"
//         />
//       )}

//       {/* Edit Supplier Form */}
//       {editMode && (
//         <DetailedSupplierForm
//           supplier={editingSupplier}
//           onBasicChange={handleEditSupplierChange}
//           onDealerChange={handleDealerInfoChange}
//           onCancel={handleCancelEdit}
//           onSave={handleSaveEdit}
//           title="Edit Supplier"
//           submitLabel="Save Changes"
//           newProduct={newProduct}
//           onProductChange={handleNewProductChange}
//           onAddProduct={() => handleAddProduct('edit')}
//           onRemoveProduct={(id) => handleRemoveProduct(id, 'edit')}
//           formType="edit"
//         />
//       )}

//       {/* Delete Confirmation Modal */}
//       {showDeleteConfirm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-md">
//             <h2 className="text-lg font-semibold mb-4">Delete Supplier</h2>
//             <p className="text-gray-600 mb-6">Are you sure you want to delete this supplier?</p>
//             <div className="flex justify-end gap-4">
//               <button
//                 onClick={handleCancelDelete}
//                 className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleDeleteSupplier}
//                 className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Render SupplierOrderForm */}
//       <SupplierOrderForm />
//     </div>
//   );
// };

// export default Supc;

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Filter, Plus, Star, StarOff, X, Edit, Trash2, Eye, ArrowLeft } from 'lucide-react';
import SupplierOrderForm from './SupplierOrderForm';
import { useStore } from './StoreContext';

// Currency formatting function for Indian Rupees (₹)
const formatCurrency = (amount) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount || 0);

// DetailedSupplierForm Component (Memoized)
const DetailedSupplierForm = React.memo(({
  supplier,
  onBasicChange,
  onDealerChange,
  onCancel,
  onSave,
  title,
  submitLabel,
  newProduct,
  onProductChange,
  onAddProduct,
  onRemoveProduct,
  formType,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 mb-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button onClick={onCancel} className="text-gray-500 hover:text-gray-700">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Basic Information */}
      <div>
        <h3 className="font-medium text-gray-700 mb-3">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`${formType}-name`} className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
            <input
              id={`${formType}-name`}
              type="text"
              placeholder="Supplier name"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              value={supplier.name || ''}
              onChange={(e) => onBasicChange('name', e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor={`${formType}-location`} className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
            <input
              id={`${formType}-location`}
              type="text"
              placeholder="City, Country"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              value={supplier.location || ''}
              onChange={(e) => onBasicChange('location', e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor={`${formType}-category`} className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
            <select
              id={`${formType}-category`}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              value={supplier.category || ''}
              onChange={(e) => onBasicChange('category', e.target.value)}
              required
            >
              <option value="" disabled>Select category</option>
              {['Electronics', 'Apparel', 'Raw Materials', 'Transportation', 'Packaging', 'Food', 'Services'].map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={`${formType}-website`} className="block text-sm font-medium text-gray-700 mb-1">Website</label>
            <input
              id={`${formType}-website`}
              type="text"
              placeholder="www.example.com"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              value={supplier.website || ''}
              onChange={(e) => onBasicChange('website', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => onBasicChange('rating', rating)}
                  className="focus:outline-none transition-transform hover:scale-110"
                  aria-label={`Rate ${rating} stars`}
                >
                  {rating <= (supplier.rating || 0) ? (
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ) : (
                    <StarOff className="w-6 h-6 text-gray-300" />
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={supplier.active || false}
                onChange={(e) => onBasicChange('active', e.target.checked)}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-700">Active Status</span>
            </label>
          </div>
        </div>
      </div>

      {/* Dealer Information */}
      <div>
        <h3 className="font-medium text-gray-700 mb-3">Dealer Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`${formType}-dealer-name`} className="block text-sm font-medium text-gray-700 mb-1">Dealer Name *</label>
            <input
              id={`${formType}-dealer-name`}
              type="text"
              placeholder="Dealer's full name"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              value={supplier.dealerInfo?.dealerName || ''}
              onChange={(e) => onDealerChange('dealerName', e.target.value, formType)}
              required
            />
          </div>
          <div>
            <label htmlFor={`${formType}-position`} className="block text-sm font-medium text-gray-700 mb-1">Position</label>
            <input
              id={`${formType}-position`}
              type="text"
              placeholder="Sales Manager, Owner, etc."
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              value={supplier.dealerInfo?.position || ''}
              onChange={(e) => onDealerChange('position', e.target.value, formType)}
            />
          </div>
          <div>
            <label htmlFor={`${formType}-phone1`} className="block text-sm font-medium text-gray-700 mb-1">Primary Phone *</label>
            <input
              id={`${formType}-phone1`}
              type="text"
              placeholder="Primary contact number"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              value={supplier.dealerInfo?.phone1 || ''}
              onChange={(e) => onDealerChange('phone1', e.target.value, formType)}
              required
            />
          </div>
          <div>
            <label htmlFor={`${formType}-phone2`} className="block text-sm font-medium text-gray-700 mb-1">Secondary Phone</label>
            <input
              id={`${formType}-phone2`}
              type="text"
              placeholder="Alternative contact number"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              value={supplier.dealerInfo?.phone2 || ''}
              onChange={(e) => onDealerChange('phone2', e.target.value, formType)}
            />
          </div>
          <div>
            <label htmlFor={`${formType}-email`} className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input
              id={`${formType}-email`}
              type="email"
              placeholder="email@example.com"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              value={supplier.dealerInfo?.email || ''}
              onChange={(e) => onDealerChange('email', e.target.value, formType)}
              required
            />
          </div>
        </div>
      </div>

      {/* Business Information */}
      <div>
        <h3 className="font-medium text-gray-700 mb-3">Business Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label htmlFor={`${formType}-shopAddress`} className="block text-sm font-medium text-gray-700 mb-1">Shop Address *</label>
            <input
              id={`${formType}-shopAddress`}
              type="text"
              placeholder="Complete address"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              value={supplier.shopAddress || ''}
              onChange={(e) => onBasicChange('shopAddress', e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor={`${formType}-pincode`} className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
            <input
              id={`${formType}-pincode`}
              type="text"
              placeholder="Postal/ZIP code"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              value={supplier.pincode || ''}
              onChange={(e) => onBasicChange('pincode', e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor={`${formType}-gstNo`} className="block text-sm font-medium text-gray-700 mb-1">GST Number *</label>
            <input
              id={`${formType}-gstNo`}
              type="text"
              placeholder="GST number"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              value={supplier.gstNo || ''}
              onChange={(e) => onBasicChange('gstNo', e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor={`${formType}-taxId`} className="block text-sm font-medium text-gray-700 mb-1">Tax ID *</label>
            <input
              id={`${formType}-taxId`}
              type="text"
              placeholder="Tax identification number"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              value={supplier.taxId || ''}
              onChange={(e) => onBasicChange('taxId', e.target.value)}
              required
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor={`${formType}-billingAddress`} className="block text-sm font-medium text-gray-700 mb-1">Billing Address *</label>
            <input
              id={`${formType}-billingAddress`}
              type="text"
              placeholder="Billing address"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              value={supplier.billingAddress || ''}
              onChange={(e) => onBasicChange('billingAddress', e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      {/* Financial Information */}
      <div>
        <h3 className="font-medium text-gray-700 mb-3">Financial Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`${formType}-accountDetails`} className="block text-sm font-medium text-gray-700 mb-1">Account Details *</label>
            <input
              id={`${formType}-accountDetails`}
              type="text"
              placeholder="Bank name and account number"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              value={supplier.accountDetails || ''}
              onChange={(e) => onBasicChange('accountDetails', e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor={`${formType}-paymentTerms`} className="block text-sm font-medium text-gray-700 mb-1">Payment Terms *</label>
            <input
              id={`${formType}-paymentTerms`}
              type="text"
              placeholder="Net 30, Net 45, etc."
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              value={supplier.paymentTerms || ''}
              onChange={(e) => onBasicChange('paymentTerms', e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      {/* Products Supplied */}
      <div>
        <h3 className="font-medium text-gray-700 mb-3">Products Supplied</h3>
        <div className="space-y-4">
          {supplier.products.map((product) => (
            <div key={product.id} className="flex items-center gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Product name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                  value={product.name || ''}
                  onChange={(e) => onProductChange('name', e.target.value, product.id)}
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Product description"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                  value={product.description || ''}
                  onChange={(e) => onProductChange('description', e.target.value, product.id)}
                />
              </div>
              <button
                type="button"
                onClick={() => onRemoveProduct(product.id)}
                className="p-2 text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="New product name"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                value={newProduct.name || ''}
                onChange={(e) => onProductChange('name', e.target.value)}
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="New product description"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                value={newProduct.description || ''}
                onChange={(e) => onProductChange('description', e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={onAddProduct}
              className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onSave}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
        >
          {submitLabel}
        </button>
      </div>
    </div>
  );
});

// SupplierDetailView Component
const SupplierDetailView = ({ supplier, handleBackToList, handleStartEdit, handleConfirmDelete }) => (
  <div className="space-y-6">
    <div className="flex items-center">
      <button
        onClick={handleBackToList}
        className="mr-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
      >
        <ArrowLeft className="h-5 w-5 text-gray-600" />
      </button>
      <h2 className="text-2xl font-bold text-gray-800">{supplier.name}</h2>
      <div className="ml-auto flex space-x-2">
        <button
          onClick={() => handleStartEdit(supplier)}
          className="flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <Edit className="h-4 w-4" />
          Edit
        </button>
        <button
          onClick={() => handleConfirmDelete(supplier)}
          className="flex items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Category:</span>
            <span className="font-medium text-gray-800">{supplier.category}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Location:</span>
            <span className="font-medium text-gray-800">{supplier.location}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Rating:</span>
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${star <= supplier.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Status:</span>
            <span
              className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${supplier.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
            >
              {supplier.active ? 'Active' : 'Inactive'}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Website:</span>
            <span className="font-medium text-blue-600 hover:underline">{supplier.website || 'N/A'}</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dealer Information</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Name:</span>
            <span className="font-medium text-gray-800">{supplier.dealerInfo?.dealerName || 'N/A'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Position:</span>
            <span className="font-medium text-gray-800">{supplier.dealerInfo?.position || 'N/A'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Primary Phone:</span>
            <span className="font-medium text-gray-800">{supplier.dealerInfo?.phone1 || 'N/A'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Secondary Phone:</span>
            <span className="font-medium text-gray-800">{supplier.dealerInfo?.phone2 || 'N/A'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Email:</span>
            <span className="font-medium text-blue-600 hover:underline">{supplier.dealerInfo?.email || 'N/A'}</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Business Information</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Shop Address:</span>
            <span className="font-medium text-gray-800">{supplier.shopAddress || 'N/A'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Pincode:</span>
            <span className="font-medium text-gray-800">{supplier.pincode || 'N/A'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">GST Number:</span>
            <span className="font-medium text-gray-800">{supplier.gstNo || 'N/A'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Tax ID:</span>
            <span className="font-medium text-gray-800">{supplier.taxId || 'N/A'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Billing Address:</span>
            <span className="font-medium text-gray-800">{supplier.billingAddress || 'N/A'}</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Financial Information</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Account Details:</span>
            <span className="font-medium text-gray-800">{supplier.accountDetails || 'N/A'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Payment Terms:</span>
            <span className="font-medium text-gray-800">{supplier.paymentTerms || 'N/A'}</span>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Products Supplied</h3>
      {supplier.products && supplier.products.length > 0 ? (
        <div className="divide-y divide-gray-200">
          {supplier.products.map((product) => (
            <div key={product.id} className="py-3 flex justify-between items-center">
              <div>
                <h4 className="font-medium text-gray-800">{product.name}</h4>
                <p className="text-sm text-gray-500">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic">No products listed</p>
      )}
    </div>
  </div>
);

// Supc Component
const Supc = () => {
  const { storeId } = useStore();
  const [suppliers, setSuppliers] = useState([]);
  const [viewingSupplier, setViewingSupplier] = useState(null);
  const [isViewingDetails, setIsViewingDetails] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    location: '',
    category: '',
    rating: 0,
    active: null,
  });
  const [showNewSupplierForm, setShowNewSupplierForm] = useState(false);
  const [newSupplier, setNewSupplier] = useState({
    name: '',
    location: '',
    category: '',
    rating: 3,
    active: true,
    dealerInfo: {
      dealerName: '',
      phone1: '',
      phone2: '',
      email: '',
      position: '',
    },
    shopAddress: '',
    pincode: '',
    gstNo: '',
    taxId: '',
    accountDetails: '',
    paymentTerms: 'Net 30',
    billingAddress: '',
    website: '',
    products: [],
  });
  const [editMode, setEditMode] = useState(false);
  const [editingSupplierId, setEditingSupplierId] = useState(null);
  const [editingSupplier, setEditingSupplier] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: '', description: '' });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [supplierToDelete, setSupplierToDelete] = useState(null);
  const categories = ['Electronics', 'Apparel', 'Raw Materials', 'Transportation', 'Packaging', 'Food', 'Services'];

  useEffect(() => {
    if (storeId) {
      fetch(`http://127.0.0.1:5015/suppliers?storeId=${storeId}`)
        .then((response) => {
          if (!response.ok) throw new Error('Failed to fetch suppliers');
          return response.json();
        })
        .then((data) => setSuppliers(data))
        .catch((error) => console.error('Error fetching suppliers:', error));
    }
  }, [storeId]);

  const handleSearch = useCallback((e) => setSearchTerm(e.target.value), []);

  const handleFilterChange = useCallback((field, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  }, []);

  const handleNewSupplierChange = useCallback((field, value) => {
    setNewSupplier((prevSupplier) => ({
      ...prevSupplier,
      [field]: value,
    }));
  }, []);

  const handleDealerInfoChange = useCallback((field, value, formType = 'new') => {
    const updateSupplier = formType === 'new' ? setNewSupplier : setEditingSupplier;
    updateSupplier((prevSupplier) => ({
      ...prevSupplier,
      dealerInfo: {
        ...prevSupplier.dealerInfo,
        [field]: value,
      },
    }));
  }, []);

  const handleEditSupplierChange = useCallback((field, value) => {
    setEditingSupplier((prevSupplier) => ({
      ...prevSupplier,
      [field]: value,
    }));
  }, []);

  const handleProductChange = useCallback((field, value, productId = null) => {
    if (productId) {
      setEditingSupplier((prevSupplier) => ({
        ...prevSupplier,
        products: prevSupplier.products.map((p) =>
          p.id === productId ? { ...p, [field]: value } : p
        ),
      }));
      setNewSupplier((prevSupplier) => ({
        ...prevSupplier,
        products: prevSupplier.products.map((p) =>
          p.id === productId ? { ...p, [field]: value } : p
        ),
      }));
    } else {
      setNewProduct((prevProduct) => ({
        ...prevProduct,
        [field]: value,
      }));
    }
  }, []);

  const handleAddProduct = useCallback((formType = 'new') => {
    if (!newProduct.name) return;
    const productId = Date.now();
    const product = { ...newProduct, id: productId };
    if (formType === 'new') {
      setNewSupplier((prevSupplier) => ({
        ...prevSupplier,
        products: [...prevSupplier.products, product],
      }));
    } else {
      setEditingSupplier((prevSupplier) => ({
        ...prevSupplier,
        products: [...prevSupplier.products, product],
      }));
    }
    setNewProduct({ name: '', description: '' });
  }, [newProduct]);

  const handleRemoveProduct = useCallback((productId, formType = 'new') => {
    if (formType === 'new') {
      setNewSupplier((prevSupplier) => ({
        ...prevSupplier,
        products: prevSupplier.products.filter((p) => p.id !== productId),
      }));
    } else {
      setEditingSupplier((prevSupplier) => ({
        ...prevSupplier,
        products: prevSupplier.products.filter((p) => p.id !== productId),
      }));
    }
  }, []);

  const handleAddSupplier = useCallback(() => {
    const requiredFields = [
      'name', 'location', 'category', 'shopAddress', 'pincode', 'gstNo', 'taxId',
      'accountDetails', 'paymentTerms', 'billingAddress',
    ];
    const dealerRequiredFields = ['dealerName', 'phone1', 'email'];
    if (
      requiredFields.some((field) => !newSupplier[field]) ||
      dealerRequiredFields.some((field) => !newSupplier.dealerInfo[field])
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    fetch(`http://127.0.0.1:5015/suppliers?storeId=${storeId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSupplier),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Failed to add supplier');
        return response.json();
      })
      .then((data) => {
        setSuppliers((prevSuppliers) => [...prevSuppliers, { ...newSupplier, _id: data.supplier_id }]);
        setShowNewSupplierForm(false);
        setNewSupplier({
          name: '',
          location: '',
          category: '',
          rating: 3,
          active: true,
          dealerInfo: { dealerName: '', phone1: '', phone2: '', email: '', position: '' },
          shopAddress: '',
          pincode: '',
          gstNo: '',
          taxId: '',
          accountDetails: '',
          paymentTerms: 'Net 30',
          billingAddress: '',
          website: '',
          products: [],
        });
      })
      .catch((error) => console.error('Error adding supplier:', error));
  }, [newSupplier, storeId]);

  const handleStartEdit = useCallback((supplier) => {
    setEditMode(true);
    setEditingSupplierId(supplier._id);
    setEditingSupplier({ ...supplier });
    setShowNewSupplierForm(false);
    setIsViewingDetails(false);
  }, []);

  // const handleSaveEdit = useCallback(() => {
  //   if (!editingSupplierId || !editingSupplier) {
  //     alert('No supplier selected for editing.');
  //     return;
  //   }

  //   const requiredFields = [
  //     'name', 'location', 'category', 'shopAddress', 'pincode', 'gstNo', 'taxId',
  //     'accountDetails', 'paymentTerms', 'billingAddress',
  //   ];
  //   const dealerRequiredFields = ['dealerName', 'phone1', 'email'];
  //   if (
  //     requiredFields.some((field) => !editingSupplier[field]) ||
  //     dealerRequiredFields.some((field) => !editingSupplier.dealerInfo[field])
  //   ) {
  //     alert('Please fill in all required fields.');
  //     return;
  //   }

  //   fetch(`http://127.0.0.1:5015/suppliers/${editingSupplierId}?storeId=${storeId}`, {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(editingSupplier),
  //   })
  //     .then((response) => {
  //       if (!response.ok) throw new Error('Failed to update supplier');
  //       return response.json();
  //     })
  //     .then(() => {
  //       setSuppliers((prevSuppliers) =>
  //         prevSuppliers.map((supplier) =>
  //           supplier._id === editingSupplierId ? { ...editingSupplier } : supplier
  //         )
  //       );
  //       setEditMode(false);
  //       setEditingSupplierId(null);
  //       setEditingSupplier(null);
  //     })
  //     .catch((error) => {
  //       console.error('Error updating supplier:', error);
  //       alert('Failed to update supplier. Please try again.');
  //     });
  // }, [editingSupplier, editingSupplierId, storeId]);
  const handleSaveEdit = useCallback(() => {
    if (!editingSupplierId || !editingSupplier) {
      alert('No supplier selected for editing.');
      return;
    }
  
    const requiredFields = [
      'name', 'location', 'category', 'shopAddress', 'pincode', 'gstNo', 'taxId',
      'accountDetails', 'paymentTerms', 'billingAddress',
    ];
    const dealerRequiredFields = ['dealerName', 'phone1', 'email'];
    if (
      requiredFields.some((field) => !editingSupplier[field]) ||
      dealerRequiredFields.some((field) => !editingSupplier.dealerInfo[field])
    ) {
      alert('Please fill in all required fields.');
      return;
    }
  
    console.log('Sending supplier data for update:', JSON.stringify(editingSupplier));
  
    fetch(`http://127.0.0.1:5015/suppliers/${editingSupplierId}?storeId=${storeId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingSupplier),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => {
            throw new Error(err.error || 'Unknown server error');
          });
        }
        return response.json();
      })
      .then(() => {
        setSuppliers((prevSuppliers) =>
          prevSuppliers.map((supplier) =>
            supplier._id === editingSupplierId ? { ...editingSupplier } : supplier
          )
        );
        setEditMode(false);
        setEditingSupplierId(null);
        setEditingSupplier(null);
      })
      .catch((error) => {
        console.error('Error updating supplier:', error.message);
        alert(`Failed to update supplier: ${error.message}`);
      });
  }, [editingSupplier, editingSupplierId, storeId]);
  const handleCancelEdit = useCallback(() => {
    setEditMode(false);
    setEditingSupplierId(null);
    setEditingSupplier(null);
  }, []);

  const handleViewDetails = useCallback((supplier) => {
    setViewingSupplier(supplier);
    setIsViewingDetails(true);
  }, []);

  const handleBackToList = useCallback(() => {
    setIsViewingDetails(false);
    setViewingSupplier(null);
  }, []);

  const handleConfirmDelete = useCallback((supplier) => {
    setSupplierToDelete(supplier);
    setShowDeleteConfirm(true);
  }, []);

  const handleDeleteSupplier = useCallback(() => {
    if (!supplierToDelete || !supplierToDelete._id) {
      alert('No supplier selected for deletion.');
      return;
    }

    fetch(`http://127.0.0.1:5015/suppliers/${supplierToDelete._id}?storeId=${storeId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) throw new Error('Failed to delete supplier');
        setSuppliers((prevSuppliers) =>
          prevSuppliers.filter((supplier) => supplier._id !== supplierToDelete._id)
        );
        setShowDeleteConfirm(false);
        setSupplierToDelete(null);
        if (viewingSupplier && viewingSupplier._id === supplierToDelete._id) {
          handleBackToList();
        }
      })
      .catch((error) => {
        console.error('Error deleting supplier:', error);
        alert('Failed to delete supplier. Please try again.');
      });
  }, [supplierToDelete, storeId, viewingSupplier, handleBackToList]);

  const handleCancelDelete = useCallback(() => {
    setShowDeleteConfirm(false);
    setSupplierToDelete(null);
  }, []);

  const filteredSuppliers = useMemo(() => {
    return suppliers.filter((supplier) => {
      if (!supplier) return false;
      if (searchTerm && !supplier.name?.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      if (filters.location && !supplier.location?.toLowerCase().includes(filters.location.toLowerCase())) return false;
      if (filters.category && supplier.category !== filters.category) return false;
      if (filters.rating > 0 && (supplier.rating || 0) < filters.rating) return false;
      if (filters.active !== null && supplier.active !== filters.active) return false;
      return true;
    });
  }, [suppliers, searchTerm, filters]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Supplier Management</h1>
        <button
          onClick={() => setShowNewSupplierForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
        >
          <Plus className="h-5 w-5" />
          Add Supplier
        </button>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search suppliers..."
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="p-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
          >
            <Filter className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {showFilters && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
            <select
              className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
            >
              <option value="">Location</option>
              <option value="Mumbai, India">Mumbai, India</option>
              <option value="Delhi, India">Delhi, India</option>
              <option value="Bangalore, India">Bangalore, India</option>
            </select>
            <select
              className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              <option value="">Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select
              className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={filters.rating}
              onChange={(e) => handleFilterChange('rating', parseInt(e.target.value))}
            >
              <option value="0">Rating</option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
            <select
              className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={filters.active ?? ''}
              onChange={(e) => handleFilterChange('active', e.target.value === '' ? null : e.target.value === 'true')}
            >
              <option value="">Status</option>
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>
        )}
      </div>

      {isViewingDetails ? (
        <SupplierDetailView
          supplier={viewingSupplier}
          handleBackToList={handleBackToList}
          handleStartEdit={handleStartEdit}
          handleConfirmDelete={handleConfirmDelete}
        />
      ) : (
        <div className="space-y-4">
          {filteredSuppliers.map((supplier) => (
            <div
              key={supplier._id}
              className="p-4 bg-white border border-gray-200 rounded-md hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-semibold">{supplier.name}</h2>
                  <p className="text-sm text-gray-500">{supplier.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleViewDetails(supplier)}
                    className="p-2 text-gray-500 hover:text-blue-600"
                  >
                    <Eye className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleStartEdit(supplier)}
                    className="p-2 text-gray-500 hover:text-green-600"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleConfirmDelete(supplier)}
                    className="p-2 text-gray-500 hover:text-red-600"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showNewSupplierForm && (
        <DetailedSupplierForm
          supplier={newSupplier}
          onBasicChange={handleNewSupplierChange}
          onDealerChange={handleDealerInfoChange}
          onCancel={() => setShowNewSupplierForm(false)}
          onSave={handleAddSupplier}
          title="Add New Supplier"
          submitLabel="Add Supplier"
          newProduct={newProduct}
          onProductChange={handleProductChange}
          onAddProduct={() => handleAddProduct('new')}
          onRemoveProduct={(id) => handleRemoveProduct(id, 'new')}
          formType="new"
        />
      )}

      {editMode && editingSupplier && (
        <DetailedSupplierForm
          supplier={editingSupplier}
          onBasicChange={handleEditSupplierChange}
          onDealerChange={handleDealerInfoChange}
          onCancel={handleCancelEdit}
          onSave={handleSaveEdit}
          title="Edit Supplier"
          submitLabel="Save Changes"
          newProduct={newProduct}
          onProductChange={handleProductChange}
          onAddProduct={() => handleAddProduct('edit')}
          onRemoveProduct={(id) => handleRemoveProduct(id, 'edit')}
          formType="edit"
        />
      )}

      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-lg font-semibold mb-4">Delete Supplier</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to delete {supplierToDelete?.name}?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteSupplier}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* <SupplierOrderForm /> */}
    </div>
  );
};

export default Supc;