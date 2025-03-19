import React, { useState } from "react";

const Supd = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    productCategory: "",
    rating: "",
    status: "",
  });

  const handleAddSupplier = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newSupplier = {
      id: suppliers.length + 1,
      name: formData.get("name"),
      location: formData.get("location"),
      productCategory: formData.get("productCategory"),
      rating: formData.get("rating"),
      status: formData.get("status"),
    };
    setSuppliers([...suppliers, newSupplier]);
    event.target.reset();
  };

  const filteredSuppliers = suppliers.filter((supplier) => {
    return (
      supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filters.location ? supplier.location === filters.location : true) &&
      (filters.productCategory
        ? supplier.productCategory === filters.productCategory
        : true) &&
      (filters.rating ? supplier.rating === filters.rating : true) &&
      (filters.status ? supplier.status === filters.status : true)
    );
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Suppliers Dashboard</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search suppliers by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filters */}
      <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <select
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Location</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
            <option value="Tokyo">Tokyo</option>
          </select>

          <select
            value={filters.productCategory}
            onChange={(e) =>
              setFilters({ ...filters, productCategory: e.target.value })
            }
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Product Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Apparel">Apparel</option>
            <option value="Home Goods">Home Goods</option>
          </select>

          <select
            value={filters.rating}
            onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>

          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Add New Supplier Form */}
      <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Add New Supplier</h2>
        <form onSubmit={handleAddSupplier} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Supplier Name"
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="productCategory"
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Product Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Apparel">Apparel</option>
            <option value="Home Goods">Home Goods</option>
          </select>
          <select
            name="rating"
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
          <select
            name="status"
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add Supplier
          </button>
        </form>
      </div>

      {/* Suppliers List */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Suppliers List</h2>
        <div className="space-y-4">
          {filteredSuppliers.map((supplier) => (
            <div
              key={supplier.id}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold">{supplier.name}</h3>
              <p>Location: {supplier.location}</p>
              <p>Product Category: {supplier.productCategory}</p>
              <p>Rating: {supplier.rating} Stars</p>
              <p>Status: {supplier.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supd;