import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Star, StarOff } from 'lucide-react'; // Add this import
const DetailedSupplierForm = ({
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
  formType
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 mb-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button onClick={onCancel} className="text-gray-500 hover:text-gray-700">
          <Trash2 className="h-5 w-5" />
        </button>
      </div>

      {/* Basic Information */}
      <div>
        <h3 className="font-medium text-gray-700 mb-3">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
            <input
              type="text"
              placeholder="Supplier name"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={supplier.name}
              onChange={(e) => onBasicChange('name', e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
            <input
              type="text"
              placeholder="City, Country"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={supplier.location}
              onChange={(e) => onBasicChange('location', e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={supplier.category}
              onChange={(e) => onBasicChange('category', e.target.value)}
              required
            >
              <option value="" disabled>Select category</option>
              {['Electronics', 'Apparel', 'Raw Materials', 'Transportation', 'Packaging', 'Food', 'Services'].map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
            <input
              type="text"
              placeholder="www.example.com"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={supplier.website}
              onChange={(e) => onBasicChange('website', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map(rating => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => onBasicChange('rating', rating)}
                  className="focus:outline-none"
                >
                  {rating <= supplier.rating ? (
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
                checked={supplier.active}
                onChange={(e) => onBasicChange('active', e.target.checked)}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Dealer Name *</label>
            <input
              type="text"
              placeholder="Dealer's full name"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={supplier.dealerInfo.dealerName}
              onChange={(e) => onDealerChange('dealerName', e.target.value, formType)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
            <input
              type="text"
              placeholder="Sales Manager, Owner, etc."
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={supplier.dealerInfo.position}
              onChange={(e) => onDealerChange('position', e.target.value, formType)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Primary Phone *</label>
            <input
              type="text"
              placeholder="Primary contact number"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={supplier.dealerInfo.phone1}
              onChange={(e) => onDealerChange('phone1', e.target.value, formType)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Phone</label>
            <input
              type="text"
              placeholder="Alternative contact number"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={supplier.dealerInfo.phone2}
              onChange={(e) => onDealerChange('phone2', e.target.value, formType)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={supplier.dealerInfo.email}
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Shop Address *</label>
            <input
              type="text"
              placeholder="Complete address"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={supplier.shopAddress}
              onChange={(e) => onBasicChange('shopAddress', e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
            <input
              type="text"
              placeholder="Postal/ZIP code"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={supplier.pincode}
              onChange={(e) => onBasicChange('pincode', e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">GST Number *</label>
            <input
              type="text"
              placeholder="GST number"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={supplier.gstNo}
              onChange={(e) => onBasicChange('gstNo', e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID *</label>
            <input
              type="text"
              placeholder="Tax identification number"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={supplier.taxId}
              onChange={(e) => onBasicChange('taxId', e.target.value)}
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Billing Address *</label>
            <input
              type="text"
              placeholder="Billing address"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={supplier.billingAddress}
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Account Details *</label>
            <input
              type="text"
              placeholder="Bank name and account number"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={supplier.accountDetails}
              onChange={(e) => onBasicChange('accountDetails', e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Terms *</label>
            <input
              type="text"
              placeholder="Net 30, Net 45, etc."
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={supplier.paymentTerms}
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
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={product.name}
                  onChange={(e) => onProductChange('name', e.target.value, product.id)}
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Product description"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={product.description}
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
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={newProduct.name}
                onChange={(e) => onProductChange('name', e.target.value)}
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="New product description"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={newProduct.description}
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

      {/* Form Actions */}
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
};

export default DetailedSupplierForm;