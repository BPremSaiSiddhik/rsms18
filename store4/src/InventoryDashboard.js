import React, { useState, useEffect, useContext } from "react";
import { StoreContext } from "./StoreContext";

const InventoryDashboard = () => {
  const [inventory, setInventory] = useState([]);
  const { storeName, storeId } = useContext(StoreContext);
  const [restockProduct, setRestockProduct] = useState({
    product_name: "",
    quantity: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const API_URL = "http://127.0.0.1:5013/inventory";

  useEffect(() => {
    if (storeId) {
      fetch(`${API_URL}?storeId=${storeId}`)
        .then((res) => {
          if (!res.ok) throw new Error(`Error: ${res.status}`);
          return res.json();
        })
        .then((data) => setInventory(data))
        .catch((err) => {
          console.error("Error fetching inventory:", err);
          setErrorMessage("Failed to fetch inventory. Please try again.");
        });
    }
  }, [storeId]);

  const handleRestockChange = (e) => {
    const { name, value } = e.target;
    setRestockProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleRestockProduct = (productId) => {
    const { quantity } = restockProduct;
    if (!quantity || isNaN(quantity) || quantity <= 0) {
      alert("Please provide a valid quantity to restock.");
      return;
    }

    const updatedInventory = inventory.map((product) =>
      product._id === productId
        ? { ...product, quantity: product.quantity + parseInt(quantity) }
        : product
    );

    setInventory(updatedInventory);
    resetRestockForm();
  };

  const resetRestockForm = () => {
    setRestockProduct({ product_name: "", quantity: "" });
  };

  const filteredInventory = inventory.filter((product) =>
    product.product_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="font-poppins bg-[#f4f7fa] p-5 text-[#333] max-w-[1200px] mx-auto">
      <header className="bg-white text-[#1d4ed8] py-8 text-center text-3xl font-bold shadow-lg rounded-lg mb-10">
        <h1>Inventory Dashboard - {storeName}</h1>
      </header>
      {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

      <section className="flex justify-center mb-10">
        <div className="bg-white rounded-lg p-8 w-full max-w-[600px] shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
          <h2 className="text-[#1d4ed8] text-2xl text-center mb-6">Restock Product</h2>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity to Restock"
            value={restockProduct.quantity}
            onChange={handleRestockChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]"
          />
          <button
            onClick={() => handleRestockProduct(restockProduct.product_id)}
            className="w-full p-3 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition-all"
          >
            Restock Product
          </button>
        </div>
      </section>

      <section className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search by Product Name or Category"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-[350px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]"
        />
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-3">
        {filteredInventory.length > 0 ? (
          filteredInventory.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-bold text-[#1d4ed8] mb-4">{product.product_name}</h3>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Current Quantity:</strong> {product.quantity}</p>
              <p><strong>Restock Level:</strong> {product.restock_level}</p>
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => {
                    setRestockProduct({ ...restockProduct, product_id: product._id });
                  }}
                  className="px-4 py-2 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition-all"
                >
                  Restock
                </button>
                <button
                  onClick={() => {
                    alert("Track stock movement (Not yet implemented)");
                  }}
                  className="px-4 py-2 bg-[#e11d48] text-white rounded-lg hover:bg-[#9b1c1c] transition-all"
                >
                  Track Movement
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No inventory available. Start adding products!</p>
        )}
      </section>
    </div>
  );
};

export default InventoryDashboard;
