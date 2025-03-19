import React, { useState, useEffect, useContext } from "react";
import { StoreContext } from "./StoreContext";
import { Plus, Trash, Edit } from "lucide-react";

const SupplierManagement = () => {
  const { storeId } = useContext(StoreContext); // Get storeId from context
  const API_URL = `http://127.0.0.1:5000/suppliers?storeId=${storeId}`;

  const [suppliers, setSuppliers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    contactPerson: "",
    phone: "",
    email: "",
    address: "",
    website: "",
    paymentTerms: "",
    bankDetails: "",
    taxId: "",
    billingAddress: "",
    productsSupplied: "",
    minOrderQty: "",
    leadTime: "",
    restockFrequency: "",
    averageDeliveryTime: "",
    rating: "",
  });

  const [editingSupplierId, setEditingSupplierId] = useState(null);

  // Fetch suppliers from backend
  useEffect(() => {
    if (storeId) {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => setSuppliers(data))
        .catch((err) => console.error("Error fetching suppliers:", err));
    }
  }, [storeId]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or update supplier
  const handleSubmit = (e) => {
    e.preventDefault();

    const method = editingSupplierId ? "PUT" : "POST";
    const endpoint = editingSupplierId ? `${API_URL}/${editingSupplierId}` : API_URL;

    fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, storeId }),
    })
      .then((res) => res.json())
      .then((newSupplier) => {
        if (editingSupplierId) {
          setSuppliers(suppliers.map((s) => (s._id === editingSupplierId ? newSupplier : s)));
          setEditingSupplierId(null);
        } else {
          setSuppliers([...suppliers, newSupplier]);
        }
        setFormData({
          name: "",
          company: "",
          contactPerson: "",
          phone: "",
          email: "",
          address: "",
          website: "",
          paymentTerms: "",
          bankDetails: "",
          taxId: "",
          billingAddress: "",
          productsSupplied: "",
          minOrderQty: "",
          leadTime: "",
          restockFrequency: "",
          averageDeliveryTime: "",
          rating: "",
        });
      })
      .catch((err) => console.error("Error saving supplier:", err));
  };

  // Delete supplier
  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => setSuppliers(suppliers.filter((s) => s._id !== id)))
      .catch((err) => console.error("Error deleting supplier:", err));
  };

  // Edit supplier
  const handleEdit = (supplier) => {
    setFormData(supplier);
    setEditingSupplierId(supplier._id);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Supplier Management</h1>

      {/* Supplier Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg mb-6 grid grid-cols-2 gap-4">
        <input name="name" placeholder="Supplier Name" value={formData.name} onChange={handleChange} className="border p-2 rounded" required />
        <input name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} className="border p-2 rounded" />
        <input name="contactPerson" placeholder="Contact Person" value={formData.contactPerson} onChange={handleChange} className="border p-2 rounded" />
        <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="border p-2 rounded" required />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-2 rounded" />
        <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="border p-2 rounded" />
        <input name="website" placeholder="Website" value={formData.website} onChange={handleChange} className="border p-2 rounded" />
        <input name="paymentTerms" placeholder="Payment Terms" value={formData.paymentTerms} onChange={handleChange} className="border p-2 rounded" />
        <input name="bankDetails" placeholder="Bank Details" value={formData.bankDetails} onChange={handleChange} className="border p-2 rounded" />
        <input name="taxId" placeholder="Tax ID" value={formData.taxId} onChange={handleChange} className="border p-2 rounded" />
        <input name="billingAddress" placeholder="Billing Address" value={formData.billingAddress} onChange={handleChange} className="border p-2 rounded" />
        <input name="productsSupplied" placeholder="Products Supplied" value={formData.productsSupplied} onChange={handleChange} className="border p-2 rounded" />
        <input name="minOrderQty" placeholder="Min Order Quantity" value={formData.minOrderQty} onChange={handleChange} className="border p-2 rounded" />
        <input name="leadTime" placeholder="Lead Time (days)" value={formData.leadTime} onChange={handleChange} className="border p-2 rounded" />
        <input name="restockFrequency" placeholder="Restock Frequency" value={formData.restockFrequency} onChange={handleChange} className="border p-2 rounded" />
        <input name="averageDeliveryTime" placeholder="Avg Delivery Time (days)" value={formData.averageDeliveryTime} onChange={handleChange} className="border p-2 rounded" />
        <input name="rating" placeholder="Supplier Rating" value={formData.rating} onChange={handleChange} className="border p-2 rounded" />
        
        <button type="submit" className="bg-blue-500 text-white p-2 rounded col-span-2">
          {editingSupplierId ? "Update Supplier" : "Add Supplier"}
        </button>
      </form>

      {/* Supplier List */}
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Existing Suppliers</h2>
        {suppliers.length > 0 ? (
          suppliers.map((supplier) => (
            <div key={supplier._id} className="border-b py-3 flex justify-between items-center">
              <p>{supplier.name} - {supplier.phone}</p>
              <div>
                <button onClick={() => handleEdit(supplier)} className="text-yellow-500 mr-2"><Edit size={18} /></button>
                <button onClick={() => handleDelete(supplier._id)} className="text-red-500"><Trash size={18} /></button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No suppliers added yet.</p>
        )}
      </div>
    </div>
  );
};

export default SupplierManagement;
