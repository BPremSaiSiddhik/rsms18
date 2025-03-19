import React, { useState, useEffect } from 'react';

const SupplierForm = ({ initialData, onSubmit, buttonText }) => {
  const [formData, setFormData] = useState(initialData || {
    name: '',
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    website: '',
    address: { street: '', city: '', state: '', zip: '' },
    paymentTerms: '',
    taxId: '',
    bankDetails: { accountName: '', accountNumber: '', bankName: '', ifscCode: '' },
    billingAddress: { street: '', city: '', state: '', zip: '' },
    productsSupplied: [],
    minimumOrderQuantity: 0,
    leadTime: 0,
    restockFrequency: '',
    averageDeliveryTime: 0,
    rating: 0,
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: { ...formData[parent], [child]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Input fields for all supplier properties */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.keys(formData).map(key => {
          if (typeof formData[key] !== 'object' || Array.isArray(formData[key])) {
            return (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700">{key}</label>
                <input
                  type="text"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            );
          } else {
            return Object.keys(formData[key]).map(childKey => (
              <div key={`${key}.${childKey}`}>
                <label className="block text-sm font-medium text-gray-700">{`${key}.${childKey}`}</label>
                <input
                  type="text"
                  name={`${key}.${childKey}`}
                  value={formData[key][childKey]}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            ));
          }
        })}
      </div>
      <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {buttonText}
      </button>
    </form>
  );
};

export default SupplierForm;