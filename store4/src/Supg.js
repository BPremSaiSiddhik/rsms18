import React, { useState } from 'react';

const Supg = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suppliers, setSuppliers] = useState([
    {
      id: 1,
      name: 'Global Electronics Inc.',
      location: { city: 'New York', country: 'USA' },
      productCategory: 'Electronics',
      rating: 4,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Fashion Hub Ltd.',
      location: { city: 'London', country: 'UK' },
      productCategory: 'Apparel',
      rating: 5,
      status: 'Active',
    },
    {
      id: 3,
      name: 'Local Goods Co.',
      location: { city: 'Tokyo', country: 'Japan' },
      productCategory: 'Home Goods',
      rating: 3,
      status: 'Inactive',
    },
    {
      id: 4,
      name: 'Tech Solutions',
      location: { city: 'San Francisco', country: 'USA' },
      productCategory: 'Electronics',
      rating: 4,
      status: 'Active',
    },
    {
      id: 5,
      name: 'Clothing Line',
      location: { city: 'Paris', country: 'France' },
      productCategory: 'Apparel',
      rating: 5,
      status: 'Active',
    },
  ]);

  const [filters, setFilters] = useState({
    location: { city: '', country: '' },
    productCategory: '',
    rating: '',
    status: '',
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: value,
    }));
  };

  const filteredSuppliers = suppliers.filter((supplier) => {
    const searchMatch = supplier.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const locationMatch =
      (filters.location.city === '' ||
        supplier.location.city
          .toLowerCase()
          .includes(filters.location.city.toLowerCase())) &&
      (filters.location.country === '' ||
        supplier.location.country
          .toLowerCase()
          .includes(filters.location.country.toLowerCase()));

    const categoryMatch =
      filters.productCategory === '' ||
      supplier.productCategory.toLowerCase() ===
        filters.productCategory.toLowerCase();

    const ratingMatch =
      filters.rating === '' || supplier.rating === parseInt(filters.rating);

    const statusMatch =
      filters.status === '' || supplier.status.toLowerCase() === filters.status.toLowerCase();

    return searchMatch && locationMatch && categoryMatch && ratingMatch && statusMatch;
  });

  const handleAddSupplier = () => {
    // Implement your add supplier logic here (e.g., open a modal).
    alert("Add supplier feature not implemented in this example.");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Supplier Management</h1>

      <div className="mb-4 flex flex-col md:flex-row gap-2">
        <input
          type="text"
          placeholder="Search suppliers..."
          value={searchTerm}
          onChange={handleSearch}
          className="border rounded p-2 w-full md:w-1/3"
        />
        <button
            onClick={handleAddSupplier}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-1/6"
        >
            Add Supplier
        </button>
      </div>

      <div className="mb-4 border rounded p-4">
        <h2 className="text-lg font-semibold mb-2">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              value={filters.location.city}
              onChange={(e) => handleFilterChange('location', { ...filters.location, city: e.target.value })}
              className="mt-1 block w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Country</label>
            <input
              type="text"
              value={filters.location.country}
              onChange={(e) => handleFilterChange('location', { ...filters.location, country: e.target.value })}
              className="mt-1 block w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              value={filters.productCategory}
              onChange={(e) => handleFilterChange('productCategory', e.target.value)}
              className="mt-1 block w-full border rounded p-2"
            >
              <option value="">All</option>
              <option value="Electronics">Electronics</option>
              <option value="Apparel">Apparel</option>
              <option value="Home Goods">Home Goods</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <select
              value={filters.rating}
              onChange={(e) => handleFilterChange('rating', e.target.value)}
              className="mt-1 block w-full border rounded p-2"
            >
              <option value="">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select value={filters.status} onChange={(e) => handleFilterChange('status', e.target.value)} className="mt-1 block w-full border rounded p-2">
                  <option value="">All</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
              </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredSuppliers.map((supplier) => (
              <tr key={supplier.id}>
                <td className="px-6 py-4 whitespace-nowrap">{supplier.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {supplier.location.city}, {supplier.location.country}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{supplier.productCategory}</td>
                <td className="px-6 py-4 whitespace-nowrap">{supplier.rating}</td>
                <td className="px-6 py-4 whitespace-nowrap">{supplier.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Supg;