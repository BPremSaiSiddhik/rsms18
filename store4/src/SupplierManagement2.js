import React, { useState, useContext } from "react";
import { useStore } from "./StoreContext"; // Adjust the import path as needed

const SupplierManagement2 = () => {
  const { storeId } = useStore(); // Get storeId from context
  const [formData, setFormData] = useState({
    supplierName: "",
    companyName: "",
    supplierId: "",
    primaryContactPerson: "",
    phoneNumber: "",
    email: "",
    address: "",
    website: "",
    paymentTerms: "",
    bankAccountDetails: "",
    taxId: "",
    billingAddress: "",
    productsSupplied: "",
    minimumOrderQuantity: "",
    leadTime: "",
    restockFrequency: "",
    orderHistory: "",
    averageDeliveryTime: "",
    supplierRating: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.supplierName) newErrors.supplierName = "Supplier Name is required";
    if (!formData.companyName) newErrors.companyName = "Company Name is required";
    if (!formData.supplierId) newErrors.supplierId = "Supplier ID is required";
    if (!formData.primaryContactPerson) newErrors.primaryContactPerson = "Primary Contact Person is required";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.paymentTerms) newErrors.paymentTerms = "Payment Terms are required";
    if (!formData.bankAccountDetails) newErrors.bankAccountDetails = "Bank Account Details are required";
    if (!formData.taxId) newErrors.taxId = "Tax ID is required";
    if (!formData.billingAddress) newErrors.billingAddress = "Billing Address is required";
    if (!formData.productsSupplied) newErrors.productsSupplied = "Products Supplied are required";
    if (!formData.minimumOrderQuantity) newErrors.minimumOrderQuantity = "Minimum Order Quantity is required";
    if (!formData.leadTime) newErrors.leadTime = "Lead Time is required";
    if (!formData.restockFrequency) newErrors.restockFrequency = "Restock Frequency is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:5003/store/${storeId}/suppliers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setSuccessMessage("Supplier information saved successfully!");
        setFormData({
          supplierName: "",
          companyName: "",
          supplierId: "",
          primaryContactPerson: "",
          phoneNumber: "",
          email: "",
          address: "",
          website: "",
          paymentTerms: "",
          bankAccountDetails: "",
          taxId: "",
          billingAddress: "",
          productsSupplied: "",
          minimumOrderQuantity: "",
          leadTime: "",
          restockFrequency: "",
          orderHistory: "",
          averageDeliveryTime: "",
          supplierRating: "",
        });
        setErrors({});
      } else {
        console.error("Error saving supplier:", data.error);
        alert("Error saving supplier. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Failed to save supplier. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Add Supplier Information</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Supplier Information */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">1️⃣ Basic Supplier Information</h2>
          <InputField label="Supplier Name 🏢" name="supplierName" value={formData.supplierName} onChange={handleChange} error={errors.supplierName} />
          <InputField label="Company Name 🏭" name="companyName" value={formData.companyName} onChange={handleChange} error={errors.companyName} />
          <InputField label="Supplier ID" name="supplierId" value={formData.supplierId} onChange={handleChange} error={errors.supplierId} />
        </div>

        {/* Contact Details */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">2️⃣ Contact Details</h2>
          <InputField label="Primary Contact Person 📞" name="primaryContactPerson" value={formData.primaryContactPerson} onChange={handleChange} error={errors.primaryContactPerson} />
          <InputField label="Phone Number ☎" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} error={errors.phoneNumber} />
          <InputField label="Email Address 📧" name="email" value={formData.email} onChange={handleChange} error={errors.email} />
          <InputField label="Address" name="address" value={formData.address} onChange={handleChange} error={errors.address} />
          <InputField label="Website 🌐" name="website" value={formData.website} onChange={handleChange} error={errors.website} />
        </div>

        {/* Business & Payment Details */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">3️⃣ Business & Payment Details</h2>
          <InputField label="Payment Terms 💰" name="paymentTerms" value={formData.paymentTerms} onChange={handleChange} error={errors.paymentTerms} />
          <InputField label="Bank Account Details 🏦" name="bankAccountDetails" value={formData.bankAccountDetails} onChange={handleChange} error={errors.bankAccountDetails} />
          <InputField label="Tax ID / GST Number 🧾" name="taxId" value={formData.taxId} onChange={handleChange} error={errors.taxId} />
          <InputField label="Billing Address 📑" name="billingAddress" value={formData.billingAddress} onChange={handleChange} error={errors.billingAddress} />
        </div>

        {/* Product & Inventory Details */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">4️⃣ Product & Inventory Details</h2>
          <InputField label="Products Supplied 📦" name="productsSupplied" value={formData.productsSupplied} onChange={handleChange} error={errors.productsSupplied} />
          <InputField label="Minimum Order Quantity (MOQ) 📊" name="minimumOrderQuantity" value={formData.minimumOrderQuantity} onChange={handleChange} error={errors.minimumOrderQuantity} />
          <InputField label="Lead Time for Orders ⏳" name="leadTime" value={formData.leadTime} onChange={handleChange} error={errors.leadTime} />
          <InputField label="Restock Frequency 📆" name="restockFrequency" value={formData.restockFrequency} onChange={handleChange} error={errors.restockFrequency} />
        </div>

        {/* Performance Tracking & History */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">5️⃣ Performance Tracking & History</h2>
          <InputField label="Order History 📜" name="orderHistory" value={formData.orderHistory} onChange={handleChange} error={errors.orderHistory} />
          <InputField label="Average Delivery Time 🚚" name="averageDeliveryTime" value={formData.averageDeliveryTime} onChange={handleChange} error={errors.averageDeliveryTime} />
          <InputField label="Supplier Rating & Reviews ⭐" name="supplierRating" value={formData.supplierRating} onChange={handleChange} error={errors.supplierRating} />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Saving..." : "Save Supplier Information"}
        </button>
      </form>

      {successMessage && (
        <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg">
          {successMessage}
        </div>
      )}
    </div>
  );
};

const InputField = ({ label, name, value, onChange, error }) => (
  <div className="space-y-1 mb-4">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default SupplierManagement2;