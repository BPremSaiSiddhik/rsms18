import React, { useContext, createContext, useState, useEffect } from 'react';

// Create the Supplier Context
const SupplierContext = createContext();

// Supplier Provider Component
export const SupplierProvider = ({ children }) => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate fetching data (replace with your actual data fetching logic)
  useEffect(() => {
    // Example data (replace with your actual data or API calls)
    const mockSuppliers = [
      { id: '1', name: 'Supplier A', companyName: 'Company A', rating: 4.5, averageDeliveryTime: 7, productsSupplied: ['Product 1', 'Product 2'], orderHistory: [{ id: 'o1', date: new Date(), orderNumber: '123', items: 2, amount: 100, status: 'Delivered' }] },
      { id: '2', name: 'Supplier B', companyName: 'Company B', rating: 3.8, averageDeliveryTime: 10, productsSupplied: ['Product 3', 'Product 4'], orderHistory: [{ id: 'o2', date: new Date(), orderNumber: '456', items: 1, amount: 50, status: 'Pending' }] },
      { id: '3', name: 'Supplier C', companyName: 'Company C', rating: 4.9, averageDeliveryTime: 5, productsSupplied: ['Product 5', 'Product 6'], orderHistory: [{ id: 'o3', date: new Date(), orderNumber: '789', items: 3, amount: 150, status: 'Processing' }] },
    ];

    setTimeout(() => {
      setSuppliers(mockSuppliers);
      setLoading(false);
    }, 1000);
  }, []);

  const getSupplier = (supplierId) => {
    return suppliers.find((supplier) => supplier.id === supplierId);
  };

  const addSupplier = (newSupplier) => {
    setSuppliers((prevSuppliers) => [...prevSuppliers, { ...newSupplier, id: Date.now().toString() }]);
  };

  const updateSupplier = (supplierId, updatedSupplier) => {
      setSuppliers(prevSuppliers => prevSuppliers.map(s => s.id === supplierId ? {...s, ...updatedSupplier} : s));
  };

  const value = {
    suppliers,
    loading,
    error,
    getSupplier,
    addSupplier,
    updateSupplier,
  };

  return (
    <SupplierContext.Provider value={value}>
      {children}
    </SupplierContext.Provider>
  );
};

// Custom hook to use the Supplier Context
export const useSupplier = () => {
  const context = useContext(SupplierContext);
  if (!context) {
    throw new Error('useSupplier must be used within a SupplierProvider');
  }
  return context;
};