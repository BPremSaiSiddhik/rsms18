// import React, { createContext, useState, useEffect, useContext } from "react";
// import { useStore } from "./StoreContext";
// import { useParams, useNavigate } from 'react-router-dom';
// import { useSupplier } from './SupplierContext'; // Assuming you have a SupplierContext
// import SupplierForm from './SupplierForm'; // Assuming you have a SupplierForm component
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// // Create Supplier Context
// export const SupplierContext = createContext();

// // Custom hook to use the Supplier Context
// export const useSupplier = () => {
//   const context = useContext(SupplierContext);
//   if (!context) {
//     throw new Error('useSupplier must be used within a SupplierProvider');
//   }
//   return context;
// };

// // Supplier Provider Component
// export const SupplierProvider = ({ children }) => {
//   const { storeId } = useStore();
//   const [suppliers, setSuppliers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Load suppliers from local storage or database when component mounts
//   useEffect(() => {
//     if (storeId) {
//       loadSuppliers();
//     }
//   }, [storeId]);

//   // Function to load suppliers
//   const loadSuppliers = async () => {
//     setLoading(true);
//     try {
//       // First try to get from local storage (for offline capability)
//       const storedSuppliers = localStorage.getItem(`suppliers_${storeId}`);
      
//       if (storedSuppliers) {
//         setSuppliers(JSON.parse(storedSuppliers));
//       } else {
//         // If not in local storage, fetch from your backend
//         // Replace with your actual API call
//         const response = await fetch(`/api/stores/${storeId}/suppliers`);
//         if (!response.ok) throw new Error('Failed to fetch suppliers');
//         const data = await response.json();
//         setSuppliers(data);
        
//         // Store in local storage for offline access
//         localStorage.setItem(`suppliers_${storeId}`, JSON.stringify(data));
//       }
//     } catch (err) {
//       setError(err.message);
//       console.error("Error loading suppliers:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Function to add a new supplier
//   const addSupplier = async (supplierData) => {
//     try {
//       // Add store ID reference
//       const newSupplier = {
//         ...supplierData,
//         storeId,
//         createdAt: new Date().toISOString(),
//       };
      
//       // Send to backend
//       // Replace with your actual API call
//       const response = await fetch(`/api/stores/${storeId}/suppliers`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newSupplier),
//       });
      
//       if (!response.ok) throw new Error('Failed to add supplier');
      
//       const savedSupplier = await response.json();
      
//       // Update state and local storage
//       const updatedSuppliers = [...suppliers, savedSupplier];
//       setSuppliers(updatedSuppliers);
//       localStorage.setItem(`suppliers_${storeId}`, JSON.stringify(updatedSuppliers));
      
//       return savedSupplier;
//     } catch (err) {
//       setError(err.message);
//       console.error("Error adding supplier:", err);
//       throw err;
//     }
//   };

//   // Function to update an existing supplier
//   const updateSupplier = async (supplierId, supplierData) => {
//     try {
//       // Send to backend
//       // Replace with your actual API call
//       const response = await fetch(`/api/stores/${storeId}/suppliers/${supplierId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           ...supplierData,
//           updatedAt: new Date().toISOString(),
//         }),
//       });
      
//       if (!response.ok) throw new Error('Failed to update supplier');
      
//       const updatedSupplier = await response.json();
      
//       // Update state and local storage
//       const updatedSuppliers = suppliers.map(supplier => 
//         supplier.id === supplierId ? updatedSupplier : supplier
//       );
//       setSuppliers(updatedSuppliers);
//       localStorage.setItem(`suppliers_${storeId}`, JSON.stringify(updatedSuppliers));
      
//       return updatedSupplier;
//     } catch (err) {
//       setError(err.message);
//       console.error("Error updating supplier:", err);
//       throw err;
//     }
//   };

//   // Function to delete a supplier
//   const deleteSupplier = async (supplierId) => {
//     try {
//       // Send to backend
//       // Replace with your actual API call
//       const response = await fetch(`/api/stores/${storeId}/suppliers/${supplierId}`, {
//         method: 'DELETE',
//       });
      
//       if (!response.ok) throw new Error('Failed to delete supplier');
      
//       // Update state and local storage
//       const updatedSuppliers = suppliers.filter(supplier => supplier.id !== supplierId);
//       setSuppliers(updatedSuppliers);
//       localStorage.setItem(`suppliers_${storeId}`, JSON.stringify(updatedSuppliers));
      
//       return true;
//     } catch (err) {
//       setError(err.message);
//       console.error("Error deleting supplier:", err);
//       throw err;
//     }
//   };

//   // Get a single supplier by ID
//   const getSupplier = (supplierId) => {
//     return suppliers.find(supplier => supplier.id === supplierId);
//   };

//   return (
//     <SupplierContext.Provider value={{
//       suppliers,
//       loading,
//       error,
//       addSupplier,
//       updateSupplier,
//       deleteSupplier,
//       getSupplier,
//       refreshSuppliers: loadSuppliers,
//     }}>
//       {children}
//     </SupplierContext.Provider>
//   );
// };

// // Supplier Form Component
// export const SupplierForm = ({ initialData = {}, onSubmit, buttonText = "Save Supplier" }) => {
//   // Default empty supplier model
//   const defaultSupplier = {
//     // Basic Information
//     name: "",
//     companyName: "",
//     supplierId: "",
    
//     // Contact Details
//     contactPerson: "",
//     phone: "",
//     email: "",
//     address: {
//       street: "",
//       city: "",
//       state: "",
//       zip: ""
//     },
//     website: "",
    
//     // Business & Payment Details
//     paymentTerms: "",
//     bankDetails: {
//       accountName: "",
//       accountNumber: "",
//       bankName: "",
//       ifscCode: ""
//     },
//     taxId: "",
//     billingAddress: {
//       street: "",
//       city: "",
//       state: "",
//       zip: ""
//     },
    
//     // Product & Inventory Details
//     productsSupplied: [],
//     minimumOrderQuantity: "",
//     leadTime: "",
//     restockFrequency: "",
    
//     // Performance Tracking
//     orderHistory: [],
//     averageDeliveryTime: "",
//     rating: 0,
//     reviews: []
//   };
  
//   const [formData, setFormData] = useState({...defaultSupplier, ...initialData});
//   const [formErrors, setFormErrors] = useState({});
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
    
//     // Handle nested objects
//     if (name.includes(".")) {
//       const [parent, child] = name.split(".");
//       setFormData({
//         ...formData,
//         [parent]: {
//           ...formData[parent],
//           [child]: value
//         }
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     }
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Basic validation
//     const errors = {};
//     if (!formData.name) errors.name = "Supplier name is required";
//     if (!formData.email) errors.email = "Email is required";
    
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }
    
//     onSubmit(formData);
//   };
  
//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-bold mb-4">1️⃣ Basic Supplier Information</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Supplier Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//             {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700">🏢 Company Name</label>
//             <input
//               type="text"
//               name="companyName"
//               value={formData.companyName}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700">🏭 Supplier ID</label>
//             <input
//               type="text"
//               name="supplierId"
//               value={formData.supplierId}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//           </div>
//         </div>
//       </div>
      
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-bold mb-4">2️⃣ Contact Details</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Primary Contact Person</label>
//             <input
//               type="text"
//               name="contactPerson"
//               value={formData.contactPerson}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700">📞 Phone Number</label>
//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700">📧 Email Address</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//             {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700">🌐 Website</label>
//             <input
//               type="text"
//               name="website"
//               value={formData.website}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//           </div>
          
//           <div className="col-span-2">
//             <label className="block text-sm font-medium text-gray-700">Address</label>
//             <input
//               type="text"
//               name="address.street"
//               placeholder="Street"
//               value={formData.address.street}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//             <div className="grid grid-cols-3 gap-4 mt-2">
//               <input
//                 type="text"
//                 name="address.city"
//                 placeholder="City"
//                 value={formData.address.city}
//                 onChange={handleChange}
//                 className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//               <input
//                 type="text"
//                 name="address.state"
//                 placeholder="State"
//                 value={formData.address.state}
//                 onChange={handleChange}
//                 className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//               <input
//                 type="text"
//                 name="address.zip"
//                 placeholder="ZIP Code"
//                 value={formData.address.zip}
//                 onChange={handleChange}
//                 className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-bold mb-4">3️⃣ Business & Payment Details</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">💰 Payment Terms</label>
//             <select
//               name="paymentTerms"
//               value={formData.paymentTerms}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             >
//               <option value="">Select Payment Terms</option>
//               <option value="Net 15">Net 15</option>
//               <option value="Net 30">Net 30</option>
//               <option value="Net 45">Net 45</option>
//               <option value="Net 60">Net 60</option>
//               <option value="COD">COD (Cash on Delivery)</option>
//               <option value="Advance">Advance Payment</option>
//             </select>
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700">🧾 Tax ID / GST Number</label>
//             <input
//               type="text"
//               name="taxId"
//               value={formData.taxId}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//           </div>
          
//           <div className="col-span-2">
//             <label className="block text-sm font-medium text-gray-700">🏦 Bank Account Details</label>
//             <div className="grid grid-cols-2 gap-4 mt-2">
//               <input
//                 type="text"
//                 name="bankDetails.accountName"
//                 placeholder="Account Name"
//                 value={formData.bankDetails.accountName}
//                 onChange={handleChange}
//                 className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//               <input
//                 type="text"
//                 name="bankDetails.accountNumber"
//                 placeholder="Account Number"
//                 value={formData.bankDetails.accountNumber}
//                 onChange={handleChange}
//                 className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//               <input
//                 type="text"
//                 name="bankDetails.bankName"
//                 placeholder="Bank Name"
//                 value={formData.bankDetails.bankName}
//                 onChange={handleChange}
//                 className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//               <input
//                 type="text"
//                 name="bankDetails.ifscCode"
//                 placeholder="IFSC Code"
//                 value={formData.bankDetails.ifscCode}
//                 onChange={handleChange}
//                 className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//             </div>
//           </div>
          
//           <div className="col-span-2">
//             <label className="block text-sm font-medium text-gray-700">📑 Billing Address</label>
//             <div className="flex items-center mb-2">
//               <input
//                 type="checkbox"
//                 id="sameAsAddress"
//                 onChange={(e) => {
//                   if (e.target.checked) {
//                     setFormData({
//                       ...formData,
//                       billingAddress: {...formData.address}
//                     });
//                   }
//                 }}
//                 className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//               />
//               <label htmlFor="sameAsAddress" className="ml-2 block text-sm text-gray-900">
//                 Same as Address
//               </label>
//             </div>
//             <input
//               type="text"
//               name="billingAddress.street"
//               placeholder="Street"
//               value={formData.billingAddress.street}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//             <div className="grid grid-cols-3 gap-4 mt-2">
//               <input
//                 type="text"
//                 name="billingAddress.city"
//                 placeholder="City"
//                 value={formData.billingAddress.city}
//                 onChange={handleChange}
//                 className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//               <input
//                 type="text"
//                 name="billingAddress.state"
//                 placeholder="State"
//                 value={formData.billingAddress.state}
//                 onChange={handleChange}
//                 className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//               <input
//                 type="text"
//                 name="billingAddress.zip"
//                 placeholder="ZIP Code"
//                 value={formData.billingAddress.zip}
//                 onChange={handleChange}
//                 className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-bold mb-4">4️⃣ Product & Inventory Details</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">📊 Minimum Order Quantity (MOQ)</label>
//             <input
//               type="text"
//               name="minimumOrderQuantity"
//               value={formData.minimumOrderQuantity}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700">⏳ Lead Time for Orders (days)</label>
//             <input
//               type="number"
//               name="leadTime"
//               value={formData.leadTime}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700">📆 Restock Frequency</label>
//             <select
//               name="restockFrequency"
//               value={formData.restockFrequency}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             >
//               <option value="">Select Frequency</option>
//               <option value="Daily">Daily</option>
//               <option value="Weekly">Weekly</option>
//               <option value="Bi-weekly">Bi-weekly</option>
//               <option value="Monthly">Monthly</option>
//               <option value="Quarterly">Quarterly</option>
//               <option value="On-demand">On-demand</option>
//             </select>
//           </div>
          
//           <div className="col-span-2">
//             <label className="block text-sm font-medium text-gray-700">📦 Products Supplied</label>
//             <textarea
//               name="productsSupplied"
//               value={Array.isArray(formData.productsSupplied) ? formData.productsSupplied.join(", ") : formData.productsSupplied}
//               onChange={(e) => {
//                 setFormData({
//                   ...formData,
//                   productsSupplied: e.target.value.split(",").map(item => item.trim())
//                 });
//               }}
//               placeholder="Enter products separated by commas"
//               rows="3"
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             ></textarea>
//           </div>
//         </div>
//       </div>
      
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-bold mb-4">5️⃣ Performance Tracking</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">🚚 Average Delivery Time (days)</label>
//             <input
//               type="number"
//               name="averageDeliveryTime"
//               value={formData.averageDeliveryTime}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700">⭐ Supplier Rating (1-5)</label>
//             <input
//               type="number"
//               name="rating"
//               min="0"
//               max="5"
//               step="0.1"
//               value={formData.rating}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//           </div>
//         </div>
//       </div>
      
//       <div className="flex justify-end">
//         <button
//           type="submit"
//           className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           {buttonText}
//         </button>
//       </div>
//     </form>
//   );
// };

// // Supplier List Component
// export const SupplierList = () => {
//   const { suppliers, loading, error, deleteSupplier } = useSupplier();
  
//   if (loading) return <div className="text-center py-4">Loading suppliers...</div>;
//   if (error) return <div className="text-red-500 py-4">Error: {error}</div>;
//   if (suppliers.length === 0) return <div className="text-center py-4">No suppliers found. Add your first supplier!</div>;
  
//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {suppliers.map((supplier) => (
//             <tr key={supplier.id}>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="flex items-center">
//                   <div>
//                     <div className="text-sm font-medium text-gray-900">{supplier.name}</div>
//                     <div className="text-sm text-gray-500">{supplier.companyName}</div>
//                   </div>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="text-sm text-gray-900">{supplier.contactPerson}</div>
//                 <div className="text-sm text-gray-500">{supplier.email}</div>
//                 <div className="text-sm text-gray-500">{supplier.phone}</div>
//               </td>
//               <td className="px-6 py-4">
//                 <div className="text-sm text-gray-900">
//                   {Array.isArray(supplier.productsSupplied) ? supplier.productsSupplied.slice(0, 3).join(", ") : supplier.productsSupplied}
//                   {Array.isArray(supplier.productsSupplied) && supplier.productsSupplied.length > 3 && "..."}
//                 </div>
//                 <div className="text-sm text-gray-500">MOQ: {supplier.minimumOrderQuantity}</div>
//                 <div className="text-sm text-gray-500">Lead time: {supplier.leadTime} days</div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="text-sm text-gray-900">Rating: {supplier.rating} ⭐</div>
//                 <div className="text-sm text-gray-500">Avg. delivery: {supplier.averageDeliveryTime} days</div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                 <a href={`/suppliers/${supplier.id}`} className="text-indigo-600 hover:text-indigo-900 mr-3">View</a>
//                 <a href={`/suppliers/${supplier.id}/edit`} className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</a>
//                 <button
//                   onClick={() => {
//                     if (window.confirm("Are you sure you want to delete this supplier?")) {
//                       deleteSupplier(supplier.id);
//                     }
//                   }}
//                   className="text-red-600 hover:text-red-900"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// // Supplier Detail Component
// export const SupplierDetail = ({ supplierId }) => {
//   const { getSupplier } = useSupplier();
//   const supplier = getSupplier(supplierId);
  
//   if (!supplier) return <div className="text-center py-4">Supplier not found</div>;
  
// export const SupplierDetailsPage = () => {
//   const { supplierId } = useParams();
//   const { getSupplier } = useSupplier();
//   const supplier = getSupplier(supplierId);

//   if (!supplier) {
//     return <div className="text-center py-4">Supplier not found</div>;
//   }

//   return (
//     <div className="space-y-6">
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-bold mb-4">Basic Information</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <div className="text-sm font-medium text-gray-500">Supplier Name</div>
//             <div className="text-lg">{supplier.name}</div>
//           </div>
//           <div>
//             <div className="text-sm font-medium text-gray-500">Company Name</div>
//             <div className="text-lg">{supplier.companyName}</div>
//           </div>
//           <div>
//             <div className="text-sm font-medium text-gray-500">Supplier ID</div>
//             <div className="text-lg">{supplier.supplierId}</div>
//           </div>
//         </div>
//       </div>

//       {/* <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-bold mb-4">Contact Details</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <div className="text-sm font-medium text-gray-500">Contact Person</div>
//             <div className="text-lg">{supplier.contactPerson}</div>
//           </div>
//           <div>
//             <div className="text-sm font-medium text-gray-500">Phone</div>
//             <div className="text-lg">{supplier.phone}</div>
//           </div>
//           <div>
//             <div className="text-sm font-medium text-gray-500">Email</div>
//             <div className="text-lg">{supplier.email}</div>
//           </div>
//           <div>
//             <div className="text-sm font-medium text-gray-500">Website</div>
//             <div className="text-lg">{supplier.website}</div>
//           </div>
//           <div className="col-span-2">
//             <div className="text-sm font-medium text-gray-500">Address</div>
//             <div className="text-lg">
//               {supplier.address.street}, {supplier.address.city}, {supplier.address.state} {supplier.address.zip}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-bold mb-4">Business & Payment Details</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <div className="text-sm font-medium text-gray-500">Payment Terms</div>
//             <div className="text-lg">{supplier.paymentTerms}</div>
//           </div>
//           <div>
//             <div className="text-sm font-medium text-gray-500">Tax ID / GST</div>
//             <div className="text-lg">{supplier.taxId}</div>
//           </div>
//           <div className="col-span-2">
//             <div className="text-sm font-medium text-gray-500">Bank Details</div>
//             <div className="grid grid-cols-2 gap-2">
//               <div>
//                 <span className="text-xs text-gray-500">Account Name:</span>
//                 <span className="ml-1">{supplier.bankDetails.accountName}</span>
//               </div>
//               <div>
//                 <span className="text-xs text-gray-500">Account Number:</span>
//                 <span className="ml-1">{supplier.bankDetails.accountNumber}</span>
//               </div>
//               <div>
//                 <span className="text-xs text-gray-500">Bank Name:</span>
//                 <span className="ml-1">{supplier.bankDetails.bankName}</span>
//               </div>
//               <div>
//                 <span className="text-xs text-gray-500">IFSC Code:</span>
//                 <span className="ml-1">{supplier.bankDetails.ifscCode}</span>
//               </div>
//             </div>
//           </div>
//           <div className="col-span-2">
//             <div className="text-sm font-medium text-gray-500">Billing Address</div>
//             <div className="text-lg">
//               {supplier.billingAddress.street}, {supplier.billingAddress.city}, {supplier.billingAddress.state} {supplier.billingAddress.zip}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-bold mb-4">Product & Inventory Details</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <div className="text-sm font-medium text-gray-500">Products Supplied</div>
//             <div className="text-lg">
//               {Array.isArray(supplier.productsSupplied)
//                 ? supplier.productsSupplied.join(", ")
//                 : supplier.productsSupplied}
//             </div>
//           </div>
//           <div>
//             <div className="text-sm font-medium text-gray-500">Minimum Order Quantity</div>
//             <div className="text-lg">{supplier.minimumOrderQuantity}</div>
//           </div>
//           <div>
//             <div className="text-sm font-medium text-gray-500">Lead Time</div>
//             <div className="text-lg">{supplier.leadTime} days</div>
//           </div>
//           <div>
//             <div className="text-sm font-medium text-gray-500">Restock Frequency</div>
//             <div className="text-lg">{supplier.restockFrequency}</div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-bold mb-4">Performance & History</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <div className="text-sm font-medium text-gray-500">Average Delivery Time</div>
//             <div className="text-lg">{supplier.averageDeliveryTime} days</div>
//           </div>
//           <div>
//             <div className="text-sm font-medium text-gray-500">Supplier Rating</div>
//             <div className="text-lg">{supplier.rating} / 5 ⭐</div>
//           </div>
//           {supplier.reviews && supplier.reviews.length > 0 && (
//             <div className="col-span-2">
//               <div className="text-sm font-medium text-gray-500">Reviews</div>
//               <div className="mt-2 space-y-2">
//                 {supplier.reviews.map((review, index) => (
//                   <div key={index} className="bg-gray-50 p-3 rounded">
//                     <div className="text-sm">{review.comment}</div>
//                     <div className="text-xs text-gray-500 mt-1">
//                       {review.author} - {new Date(review.date).toLocaleDateString()}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//           {supplier.orderHistory && supplier.orderHistory.length > 0 && (
//             <div className="col-span-2">
//               <div className="text-sm font-medium text-gray-500">Order History</div>
//               <div className="mt-2">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Order Date</th>
//                       <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Order #</th>
//                       <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Items</th>
//                       <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Amount</th>
//                       <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Status</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {supplier.orderHistory.map((order) => (<tr key={order.id}>
//                         <td className="px-4 py-2 text-sm text-gray-900">
//                           {new Date(order.date).toLocaleDateString()}
//                         </td>
//                         <td className="px-4 py-2 text-sm text-gray-900">{order.orderNumber}</td>
//                         <td className="px-4 py-2 text-sm text-gray-900">{order.items} items</td>
//                         <td className="px-4 py-2 text-sm text-gray-900">${order.amount.toFixed(2)}</td>
//                         <td className="px-4 py-2 text-sm">
//                           <span className={`px-2 py-1 rounded-full text-xs font-medium
//                             ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
//                               order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
//                               order.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
//                               'bg-gray-100 text-gray-800'}`}>
//                             {order.status}
//                           </span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="flex justify-end space-x-4">
//         <a 
//           href={`/suppliers/${supplier.id}/edit`}
//           className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Edit Supplier
//         </a>
//         <a 
//           href={`/suppliers/${supplier.id}/orders/new`}
//           className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Place New Order
//         </a>
//       </div>
//     </div>
//   );
// };

// // Add Supplier Page Component
// export const AddSupplierPage = () => {
//   const { addSupplier } = useSupplier();
//   const navigate = useNavigate(); // Assuming you're using react-router for navigation

//   const handleSubmit = async (formData) => {
//     try {
//       await addSupplier(formData);
//       navigate('/suppliers'); // Redirect to suppliers list
//     } catch (error) {
//       alert(`Error adding supplier: ${error.message}`);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold text-gray-900">Add New Supplier</h1>
//         <p className="mt-1 text-sm text-gray-500">
//           Add details about your new supplier to help manage your inventory and ordering.
//         </p>
//       </div>

//       <SupplierForm onSubmit={handleSubmit} buttonText="Add Supplier" />
//     </div>
//   );
// };

// // Edit Supplier Page Component
// export const EditSupplierPage = () => {
//   const { supplierId } = useParams(); // Assuming you're using react-router
//   const { getSupplier, updateSupplier } = useSupplier();
//   const navigate = useNavigate();
//   const [supplier, setSupplier] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSupplier = () => {
//       const supplierData = getSupplier(supplierId);
//       if (supplierData) {
//         setSupplier(supplierData);
//       }
//       setLoading(false);
//     };

//     fetchSupplier();
//   }, [supplierId, getSupplier]);

//   const handleSubmit = async (formData) => {
//     try {
//       await updateSupplier(supplierId, formData);
//       navigate(`/suppliers/${supplierId}`); // Redirect to supplier details
//     } catch (error) {
//       alert(`Error updating supplier: ${error.message}`);
//     }
//   };

//   if (loading) return <div className="text-center py-4">Loading supplier details...</div>;
//   if (!supplier) return <div className="text-center py-4">Supplier not found</div>;

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold text-gray-900">Edit Supplier</h1>
//         <p className="mt-1 text-sm text-gray-500">
//           Update the details of {supplier.name}.
//         </p>
//       </div>

//       <SupplierForm initialData={supplier} onSubmit={handleSubmit} buttonText="Update Supplier" />
//     </div>
//   );
// };

// // Supplier Dashboard Component
// export const SupplierDashboard = () => {
//   const { suppliers, loading, error } = useSupplier();

//   // Calculate stats
//   const totalSuppliers = suppliers.length;
//   const avgRating = suppliers.length > 0 
//     ? suppliers.reduce((acc, curr) => acc + Number(curr.rating || 0), 0) / totalSuppliers 
//     : 0;
//   const topSuppliers = [...suppliers]
//     .sort((a, b) => (b.rating || 0) - (a.rating || 0))
//     .slice(0, 5);

//   if (loading) return <div className="text-center py-4">Loading suppliers...</div>;
//   if (error) return <div className="text-red-500 py-4">Error: {error}</div>;

//   return (
//     <div className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Stats Cards */}
//         <div className="bg-white p-6 rounded-lg shadow">
//           <div className="text-sm font-medium text-gray-500">Total Suppliers</div>
//           <div className="mt-1 text-3xl font-semibold">{totalSuppliers}</div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow">
//           <div className="text-sm font-medium text-gray-500">Average Supplier Rating</div>
//           <div className="mt-1 text-3xl font-semibold">{avgRating.toFixed(1)} ⭐</div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow">
//           <div className="text-sm font-medium text-gray-500">Pending Orders</div>
//           <div className="mt-1 text-3xl font-semibold">
//             {suppliers.reduce((acc, curr) => {
//               const pendingOrders = curr.orderHistory?.filter(order => 
//                 order.status === 'Pending' || order.status === 'Processing'
//               ) || [];
//               return acc + pendingOrders.length;
//             }, 0)}
//           </div>
//         </div>
//       </div>

//       {/* Top Suppliers */}
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-bold mb-4">Top Rated Suppliers</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Time</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {topSuppliers.map((supplier) => (
//                 <tr key={supplier.id}>
//                   <td className="px-6 py-4 whitespace-nowrap"><div className="flex items-center">
//                       <div>
//                         <div className="text-sm font-medium text-gray-900">{supplier.name}</div>
//                         <div className="text-sm text-gray-500">{supplier.companyName}</div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="text-sm text-gray-900">
//                       {Array.isArray(supplier.productsSupplied) 
//                         ? supplier.productsSupplied.slice(0, 2).join(", ") + (supplier.productsSupplied.length > 2 ? "..." : "")
//                         : supplier.productsSupplied}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">{supplier.rating} ⭐</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">{supplier.averageDeliveryTime} days</div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Quick Actions */}
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <a
//             href="/suppliers/new"
//             className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Add New Supplier
//           </a>
//           <a
//             href="/orders/new"
//             className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Place New Order
//           </a>
//           <a
//             href="/suppliers/import"
//             className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Import Suppliers
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Supplier Review Component
// export const SupplierReviewForm = ({ supplierId, onReviewSubmit }) => {
//   const [formData, setFormData] = useState({
//     rating: 5,
//     comment: '',
//     date: new Date().toISOString(),
//     author: '' // This could be populated from user context if available
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onReviewSubmit(supplierId, formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
//       <h2 className="text-xl font-bold mb-4">Add Supplier Review</h2>

//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Your Name</label>
//         <input
//           type="text"
//           name="author"
//           value={formData.author}
//           onChange={handleChange}
//           required
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Rating</label>
//         <select
//           name="rating"
//           value={formData.rating}
//           onChange={handleChange}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//         >
//           {[1, 2, 3, 4, 5].map(num => (
//             <option key={num} value={num}>{num} Star{num !== 1 ? 's' : ''}</option>
//           ))}
//         </select>
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Review Comments</label>
//         <textarea
//           name="comment"
//           value={formData.comment}
//           onChange={handleChange}
//           required
//           rows="4"
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//           placeholder="Share your experience with this supplier..."
//         ></textarea>
//       </div>

//       <div className="flex justify-end">
//         <button
//           type="submit"
//           className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Submit Review
//         </button>
//       </div>
//     </form>
//   );
// };

// // Order Form Component for Suppliers
// export const SupplierOrderForm = ({ supplierId }) => {
//   const { getSupplier } = useSupplier();
//   const supplier = getSupplier(supplierId);
//   const [formData, setFormData] = useState({
//     supplierId,
//     orderDate: new Date().toISOString().split('T')[0],
//     expectedDeliveryDate: '',
//     items: [{ name: '', quantity: 1, unitPrice: 0 }],
//     notes: '',
//     status: 'Pending'
//   });

//   useEffect(() => {
//     // Calculate expected delivery date based on supplier's lead time
//     if (supplier && supplier.leadTime) {
//       const deliveryDate = new Date();
//       deliveryDate.setDate(deliveryDate.getDate() + parseInt(supplier.leadTime, 10));
//       setFormData(prev => ({
//         ...prev,
//         expectedDeliveryDate: deliveryDate.toISOString().split('T')[0]
//       }));
//     }
//   }, [supplier]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleItemChange = (index, field, value) => {
//     const updatedItems = [...formData.items];
//     updatedItems[index][field] = value;
//     setFormData({
//       ...formData,
//       items: updatedItems
//     });
//   };

//   const addItem = () => {
//     setFormData({
//       ...formData,
//       items: [...formData.items, { name: '', quantity: 1, unitPrice: 0 }]
//     });
//   };

//   const removeItem = (index) => {
//     const updatedItems = [...formData.items];
//     updatedItems.splice(index, 1);
//     setFormData({
//       ...formData,
//       items: updatedItems
//     });
//   };

//   const calculateTotal = () => {
//     return formData.items.reduce((sum, item) => 
//       sum + (parseFloat(item.quantity) * parseFloat(item.unitPrice) || 0), 0);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Submit order logic here
//     // This would typically call an API to create a new order
//     alert('Order placed successfully!');
//   };

//   if (!supplier) return <div className="text-center py-4">Supplier not found</div>;

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-bold mb-4">New Order for {supplier.name}</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Corrected line */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Order Date</label>
//             <input
//               type="date"
//               name="orderDate"
//               value={formData.orderDate}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//           </div>
  
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Expected Delivery Date</label>
//             <input
//               type="date"
//               name="expectedDeliveryDate"
//               value={formData.expectedDeliveryDate}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//           </div>
  
//           <div className="col-span-2">
//             <label className="block text-sm font-medium text-gray-700">Order Status</label>
//             <select
//               name="status"
//               value={formData.status}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             >
//               <option value="Pending">Pending</option>
//               <option value="Processing">Processing</option>
//               <option value="Shipped">Shipped</option>
//               <option value="Delivered">Delivered</option>
//               <option value="Cancelled">Cancelled</option>
//             </select>
//           </div>
//         </div>
//       </div>
  
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-bold mb-4">Order Items</h2>
  
//         {formData.items.map((item, index) => (
//           <div key={index} className="grid grid-cols-12 gap-4 mb-4 items-end">
//             <div className="col-span-5">
//               <label className="block text-sm font-medium text-gray-700">Item Name</label>
//               <input
//                 type="text"
//                 value={item.name}
//                 onChange={(e) => handleItemChange(index, 'name', e.target.value)}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//             </div>
  
//             <div className="col-span-2">
//               <label className="block text-sm font-medium text-gray-700">Quantity</label>
//               <input
//                 type="number"
//                 min="1"
//                 value={item.quantity}
//                 onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//             </div>
  
//             <div className="col-span-3">
//               <label className="block text-sm font-medium text-gray-700">Unit Price</label>
//               <input
//                 type="number"
//                 min="0"
//                 step="0.01"
//                 value={item.unitPrice}
//                 onChange={(e) => handleItemChange(index, 'unitPrice', e.target.value)}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//             </div>
  
//             <div className="col-span-2">
//               <button
//                 type="button"
//                 onClick={() => removeItem(index)}
//                 disabled={formData.items.length === 1}
//                 className={`mt-1 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white
//                   ${formData.items.length === 1
//                     ? 'bg-gray-400 cursor-not-allowed'
//                     : 'bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'}`}
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
  
//         <div className="flex justify-between items-center mt-4">
//           <button
//             type="button"
//             onClick={addItem}
//             className="inline-flex items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Add Item
//           </button>
  
//           <div className="text-right">
//             <span className="text-sm font-medium text-gray-500">Total Amount:</span>
//             <span className="ml-2 text-lg font-bold">${calculateTotal().toFixed(2)}</span>
//           </div>
//         </div>
//       </div>
  
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-bold mb-4">Additional Information</h2>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Notes</label>
//           <textarea
//             name="notes"
//             value={formData.notes}
//             onChange={handleChange}
//             rows="4"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             placeholder="Add any special instructions or notes for this order..."
//           ></textarea>
//         </div>
//       </div>
  
//       <div className="flex justify-end">
//         <button
//           type="submit"
//           className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Place Order
//         </button>
//       </div>
//     </form>
//   );};
// // Supplier Stats Component

// export const SupplierStats = () => {
//   const { suppliers } = useSupplier();

//   // Prepare data for charts
//   const suppliersByRating = suppliers.reduce((acc, supplier) => {
//     const rating = Math.floor(supplier.rating || 0);
//     acc[rating] = (acc[rating] || 0) + 1;
//     return acc;
//   }, {});

//   const ratingLabels = Object.keys(suppliersByRating).sort((a, b) => a - b);
//   const ratingData = ratingLabels.map((rating) => ({
//     rating: `<span class="math-inline">\{rating\} Star</span>{rating !== "1" ? "s" : ""}`,
//     count: suppliersByRating[rating],
//   }));

//   // Calculate average delivery time
//   const avgDeliveryTime =
//     suppliers.reduce((acc, curr) => acc + Number(curr.averageDeliveryTime || 0), 0) /
//     suppliers.length;

//   return (
//     <div className="space-y-6">
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-bold mb-4">Supplier Analysis</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Supplier Ratings Chart */}
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Supplier Ratings Distribution</h3>
//             <div style={{ width: "100%", height: 300 }}>
//               <ResponsiveContainer>
//                 <BarChart data={ratingData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="rating" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="count" fill="#8884d8" name="Number of Suppliers" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Average Delivery Time */}
//           <div>
//             <h3className="text-lg font-semibold mb-2"
//             >
//               Average Delivery Time
//             </h3className=>
//             <div className="text-4xl font-bold text-indigo-600">
//               {avgDeliveryTime.toFixed(1)} days
//             </div>
//             <p className="text-sm text-gray-500 mt-2">
//               Average delivery time across all suppliers.
//             </p>
//           </div>
//         </div>

//       {/* Additional Stats */}
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-bold mb-4">Additional Metrics</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div>
//             <div className="text-sm font-medium text-gray-500">Total Suppliers</div>
//             <div className="text-2xl font-bold">{suppliers.length}</div>
//           </div>
//           <div>
//             <div className="text-sm font-medium text-gray-500">Top Rated Supplier</div>
//             <div className="text-2xl font-bold">
//               {suppliers.length > 0
//                 ? suppliers.sort((a, b) => b.rating - a.rating)[0].name
//                 : "N/A"}
//             </div>
//           </div>
//           <div>
//             <div className="text-sm font-medium text-gray-500">Most Ordered Product</div>
//             <div className="text-2xl font-bold">
//               {suppliers.length > 0
//                 ? suppliers
//                     .flatMap((s) => s.productsSupplied)
//                     .reduce((acc, product) => {
//                       acc[product] = (acc[product] || 0) + 1;
//                       return acc;
//                     }, {})
//                     .sort((a, b) => b - a)[0] || "N/A"
//                 : "N/A"}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }; */}





import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSupplier } from './SupplierContext';
import SupplierForm from './SupplierForm';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Supplier Details Page Component
export const SupplierDetailsPage = () => {
  const { supplierId } = useParams();
  const { getSupplier } = useSupplier();
  const supplier = getSupplier(supplierId);

  if (!supplier) {
    return <div className="text-center py-4">Supplier not found</div>;
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Basic Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm font-medium text-gray-500">Supplier Name</div>
            <div className="text-lg">{supplier.name}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Company Name</div>
            <div className="text-lg">{supplier.companyName}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Supplier ID</div>
            <div className="text-lg">{supplier.id}</div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Contact Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm font-medium text-gray-500">Contact Person</div>
            <div className="text-lg">{supplier.contactPerson}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Phone</div>
            <div className="text-lg">{supplier.phone}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Email</div>
            <div className="text-lg">{supplier.email}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Website</div>
            <div className="text-lg">{supplier.website}</div>
          </div>
          <div className="col-span-2">
            <div className="text-sm font-medium text-gray-500">Address</div>
            <div className="text-lg">
              {supplier.address.street}, {supplier.address.city}, {supplier.address.state} {supplier.address.zip}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Business & Payment Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm font-medium text-gray-500">Payment Terms</div>
            <div className="text-lg">{supplier.paymentTerms}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Tax ID / GST</div>
            <div className="text-lg">{supplier.taxId}</div>
          </div>
          <div className="col-span-2">
            <div className="text-sm font-medium text-gray-500">Bank Details</div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-xs text-gray-500">Account Name:</span>
                <span className="ml-1">{supplier.bankDetails.accountName}</span>
              </div>
              <div>
                <span className="text-xs text-gray-500">Account Number:</span>
                <span className="ml-1">{supplier.bankDetails.accountNumber}</span>
              </div>
              <div>
                <span className="text-xs text-gray-500">Bank Name:</span>
                <span className="ml-1">{supplier.bankDetails.bankName}</span>
              </div>
              <div>
                <span className="text-xs text-gray-500">IFSC Code:</span>
                <span className="ml-1">{supplier.bankDetails.ifscCode}</span>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="text-sm font-medium text-gray-500">Billing Address</div>
            <div className="text-lg">
              {supplier.billingAddress.street}, {supplier.billingAddress.city}, {supplier.billingAddress.state} {supplier.billingAddress.zip}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Product & Inventory Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm font-medium text-gray-500">Products Supplied</div>
            <div className="text-lg">
              {Array.isArray(supplier.productsSupplied)
                ? supplier.productsSupplied.join(", ")
                : supplier.productsSupplied}
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Minimum Order Quantity</div>
            <div className="text-lg">{supplier.minimumOrderQuantity}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Lead Time</div>
            <div className="text-lg">{supplier.leadTime} days</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Restock Frequency</div>
            <div className="text-lg">{supplier.restockFrequency}</div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Performance & History</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm font-medium text-gray-500">Average Delivery Time</div>
            <div className="text-lg">{supplier.averageDeliveryTime} days</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Supplier Rating</div>
            <div className="text-lg">{supplier.rating} / 5 ⭐</div>
          </div>
          {supplier.reviews && supplier.reviews.length > 0 && (
            <div className="col-span-2">
              <div className="text-sm font-medium text-gray-500">Reviews</div>
              <div className="mt-2 space-y-2">
                {supplier.reviews.map((review, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded">
                    <div className="text-sm">{review.comment}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {review.author} - {new Date(review.date).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {supplier.orderHistory && supplier.orderHistory.length > 0 && (
            <div className="col-span-2">
              <div className="text-sm font-medium text-gray-500">Order History</div>
              <div className="mt-2">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Order Date</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Order #</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Items</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Amount</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">{supplier.orderHistory.map((order) => (
                      <tr key={order.id}>
                        <td className="px-4 py-2 text-sm text-gray-900">
                          {new Date(order.date).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-900">{order.orderNumber}</td>
                        <td className="px-4 py-2 text-sm text-gray-900">{order.items} items</td>
                        <td className="px-4 py-2 text-sm text-gray-900">${order.amount.toFixed(2)}</td>
                        <td className="px-4 py-2 text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium
                            ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                              order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                              order.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
                              'bg-gray-100 text-gray-800'}`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <a 
          href={`/suppliers/${supplier.id}/edit`}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Edit Supplier
        </a>
        <a 
          href={`/suppliers/${supplier.id}/orders/new`}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Place New Order
        </a>
      </div>
    </div>
  );
};

// Add Supplier Page Component
export const AddSupplierPage = () => {
  const { addSupplier } = useSupplier();
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      await addSupplier(formData);
      navigate('/suppliers');
    } catch (error) {
      alert(`Error adding supplier: ${error.message}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Add New Supplier</h1>
        <p className="mt-1 text-sm text-gray-500">
          Add details about your new supplier to help manage your inventory and ordering.
        </p>
      </div>

      <SupplierForm onSubmit={handleSubmit} buttonText="Add Supplier" />
    </div>
  );
};

// Edit Supplier Page Component
export const EditSupplierPage = () => {
  const { supplierId } = useParams();
  const { getSupplier, updateSupplier } = useSupplier();
  const navigate = useNavigate();
  const [supplier, setSupplier] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSupplier = () => {
      const supplierData = getSupplier(supplierId);
      if (supplierData) {
        setSupplier(supplierData);
      }
      setLoading(false);
    };

    fetchSupplier();
  }, [supplierId, getSupplier]);

  const handleSubmit = async (formData) => {
    try {
      await updateSupplier(supplierId, formData);
      navigate(`/suppliers/${supplierId}`);
    } catch (error) {
      alert(`Error updating supplier: ${error.message}`);
    }
  };

  if (loading) return <div className="text-center py-4">Loading supplier details...</div>;
  if (!supplier) return <div className="text-center py-4">Supplier not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Edit Supplier</h1>
        <p className="mt-1 text-sm text-gray-500">
          Update the details of {supplier.name}.
        </p>
      </div>

      <SupplierForm initialData={supplier} onSubmit={handleSubmit} buttonText="Update Supplier" />
    </div>
  );
};

// Supplier Dashboard Component
export const SupplierDashboard = () => {
  const { suppliers, loading, error } = useSupplier();

  const totalSuppliers = suppliers.length;
  const avgRating = suppliers.length > 0 
    ? suppliers.reduce((acc, curr) => acc + Number(curr.rating || 0), 0) / totalSuppliers 
    : 0;
  const topSuppliers = [...suppliers]
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 5);

  if (loading) return <div className="text-center py-4">Loading suppliers...</div>;
  if (error) return <div className="text-red-500 py-4">Error: {error}</div>;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500">Total Suppliers</div>
          <div className="mt-1 text-3xl font-semibold">{totalSuppliers}</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500">Average Supplier Rating</div>
          <div className="mt-1 text-3xl font-semibold">{avgRating.toFixed(1)} ⭐</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500">Pending Orders</div>
          <div className="mt-1 text-3xl font-semibold">
            {suppliers.reduce((acc, curr) => {
              const pendingOrders = curr.orderHistory?.filter(order => 
                order.status === 'Pending' || order.status === 'Processing'
              ) || [];
              return acc + pendingOrders.length;
            }, 0)}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Top Rated Suppliers</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Time</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topSuppliers.map((supplier) => (
                <tr key={supplier.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{supplier.name}</div>
                        <div className="text-sm text-gray-500">{supplier.companyName}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {Array.isArray(supplier.productsSupplied) 
                        ? supplier.productsSupplied.slice(0, 2).join(", ") + (supplier.productsSupplied.length > 2 ? "..." : "")
                        : supplier.productsSupplied}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{supplier.rating} ⭐</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{supplier.averageDeliveryTime} days</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/suppliers/new"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add New Supplier
          </a>
          <a
            href="/orders/new"
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Place New Order
          </a>
          <a
            href="/suppliers/import"
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Import Suppliers
          </a>
        </div>
      </div>
    </div>
  );
};

// Supplier Review Component
export const SupplierReviewForm = ({ supplierId, onReviewSubmit }) => {
  const [formData, setFormData] = useState({
    rating: 5,
    comment: '',
    date: new Date().toISOString(),
    author: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onReviewSubmit(supplierId, formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Add Supplier Review</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Your Name</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Rating</label>
        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num} Star{num !== 1 ? 's' : ''}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Review Comments</label>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          required
          rows="4"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Share your experience with this supplier..."
        ></textarea>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Review
        </button>
      </div>
    </form>
  );
};

// Order Form Component for Suppliers
export const SupplierOrderForm = ({ supplierId }) => {
  const { getSupplier } = useSupplier();
  const supplier = getSupplier(supplierId);
  const [formData, setFormData] = useState({
    supplierId,
    orderDate: new Date().toISOString().split('T')[0],
    expectedDeliveryDate: '',
    items: [{ name: '', quantity: 1, unitPrice: 0 }],
    notes: '',
    status: 'Pending'
  });

  useEffect(() => {
    if (supplier && supplier.leadTime) {
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + parseInt(supplier.leadTime, 10));
      setFormData(prev => ({
        ...prev,
        expectedDeliveryDate: deliveryDate.toISOString().split('T')[0]
      }));
    }
  }, [supplier]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...formData.items];
    updatedItems[index][field] = value;
    setFormData({
      ...formData,
      items: updatedItems
    });
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { name: '', quantity: 1, unitPrice: 0 }]
    });
  };

  const removeItem = (index) => {
    const updatedItems = [...formData.items];
    updatedItems.splice(index, 1);
    setFormData({
      ...formData,
      items: updatedItems
    });
  };

  const calculateTotal = () => {
    return formData.items.reduce((sum, item) => 
      sum + (parseFloat(item.quantity) * parseFloat(item.unitPrice) || 0), 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
  };

  if (!supplier) return <div className="text-center py-4">Supplier not found</div>;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">New Order for {supplier.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Order Date</label>
            <input
              type="date"
              name="orderDate"
              value={formData.orderDate}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Expected Delivery Date</label>
            <input
              type="date"
              name="expectedDeliveryDate"
              value={formData.expectedDeliveryDate}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Order Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Order Items</h2>

        {formData.items.map((item, index) => (
          <div key={index} className="grid grid-cols-12 gap-4 mb-4 items-end">
            <div className="col-span-5">
              <label className="block text-sm font-medium text-gray-700">Item Name</label>
              <input
                type="text"
                value={item.name}
                onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">Quantity</label>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div className="col-span-3">
              <label className="block text-sm font-medium text-gray-700">Unit Price</label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={item.unitPrice}
                onChange={(e) => handleItemChange(index, 'unitPrice', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div className="col-span-2">
              <button
                type="button"
                onClick={() => removeItem(index)}
                disabled={formData.items.length === 1}
                className={`mt-1 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white
                  ${formData.items.length === 1
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'}`}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center mt-4">
          <button
            type="button"
            onClick={addItem}
            className="inline-flex items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Item
          </button>

          <div className="text-right">
            <span className="text-sm font-medium text-gray-500">Total Amount:</span>
            <span className="ml-2 text-lg font-bold">${calculateTotal().toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Additional Information</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Add any special instructions or notes for this order..."
          ></textarea>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Place Order
        </button>
      </div>
    </form>
  );
};

// Supplier Stats Component
export const SupplierStats = () => {
  const { suppliers } = useSupplier();

  const suppliersByRating = suppliers.reduce((acc, supplier) => {
    const rating = Math.floor(supplier.rating || 0);
    acc[rating] = (acc[rating] || 0) + 1;
    return acc;
  }, {});

  const ratingLabels = Object.keys(suppliersByRating).sort((a, b) => a - b);
  const ratingData = ratingLabels.map((rating) => ({
    rating: `<span class="math-inline">\{rating\} Star</span>{rating !== "1" ? "s" : ""}`,
    count: suppliersByRating[rating],
  }));

  const avgDeliveryTime =
    suppliers.reduce((acc, curr) => acc + Number(curr.averageDeliveryTime || 0), 0) /
    suppliers.length;

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Supplier Analysis</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Supplier Ratings Distribution</h3>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <BarChart data={ratingData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="rating" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#8884d8" name="Number of Suppliers" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Average Delivery Time</h3>
            <div className="text-4xl font-bold text-indigo-600">
              {avgDeliveryTime.toFixed(1)} days
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Average delivery time across all suppliers.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Additional Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="text-sm font-medium text-gray-500">Total Suppliers</div>
            <div className="text-2xl font-bold">{suppliers.length}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Top Rated Supplier</div>
            <div className="text-2xl font-bold">
              {suppliers.length > 0
                ? suppliers.sort((a, b) => b.rating - a.rating)[0].name
                : "N/A"}
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Most Ordered Product</div>
            <div className="text-2xl font-bold">
              {suppliers.length > 0
                ? suppliers
                    .flatMap((s) => s.productsSupplied)
                    .reduce((acc, product) => {
                      acc[product] = (acc[product] || 0) + 1;
                      return acc;
                    }, {})
                    .sort((a, b) => b - a)[0] || "N/A"
                : "N/A"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};