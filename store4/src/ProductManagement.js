  // // // // // // import React, { useState, useEffect, useContext } from "react";
  // // // // // // import { StoreContext } from "./StoreContext";

  // // // // // // const ProductDashboard = () => {
  // // // // // //   const [products, setProducts] = useState([]);
  // // // // // //   const { storeName, storeId } = useContext(StoreContext);
  // // // // // //   const [newProduct, setNewProduct] = useState({
  // // // // // //     product_name: "",
  // // // // // //     quantity: "",
  // // // // // //     units: "",
  // // // // // //     category: "",
  // // // // // //     purchase_price: "",
  // // // // // //     sale_price: "",
  // // // // // //     tax: "",
  // // // // // //     discount: "",
  // // // // // //     image: "",
  // // // // // //     stock_level: "",
  // // // // // //     supplier: "",
  // // // // // //   });

  // // // // // //   const [editIndex, setEditIndex] = useState(null);
  // // // // // //   const [editId, setEditId] = useState(null);
  // // // // // //   const [searchQuery, setSearchQuery] = useState("");
  // // // // // //   const [errorMessage, setErrorMessage] = useState(null);
  // // // // // //   const API_URL = "http://127.0.0.1:5000/products";

  // // // // // //   useEffect(() => {
  // // // // // //     if (storeId) {
  // // // // // //       fetch(`${API_URL}?storeId=${storeId}`)
  // // // // // //         .then((res) => {
  // // // // // //           if (!res.ok) throw new Error(`Error: ${res.status}`);
  // // // // // //           return res.json();
  // // // // // //         })
  // // // // // //         .then((data) => setProducts(data))
  // // // // // //         .catch((err) => {
  // // // // // //           console.error("Error fetching products:", err);
  // // // // // //           setErrorMessage("Failed to fetch products. Please try again.");
  // // // // // //         });
  // // // // // //     }
  // // // // // //   }, [storeId]);

  // // // // // //   const resetForm = () => {
  // // // // // //     setNewProduct({
  // // // // // //       product_name: "",
  // // // // // //       quantity: "",
  // // // // // //       units: "",
  // // // // // //       category: "",
  // // // // // //       purchase_price: "",
  // // // // // //       sale_price: "",
  // // // // // //       tax: "",
  // // // // // //       discount: "",
  // // // // // //       image: "",
  // // // // // //       stock_level: "",
  // // // // // //       supplier: "",
  // // // // // //     });
  // // // // // //     setEditIndex(null);
  // // // // // //     setEditId(null);
  // // // // // //   };

  // // // // // //   const handleInputChange = (e) => {
  // // // // // //     const { name, value } = e.target;
  // // // // // //     setNewProduct((prev) => ({ ...prev, [name]: value }));
  // // // // // //   };

  // // // // // //   const handleSearchChange = (e) => {
  // // // // // //     setSearchQuery(e.target.value);
  // // // // // //   };

  // // // // // //   const calculateTotalValue = () => {
  // // // // // //     const { sale_price, quantity, discount } = newProduct;
  // // // // // //     const totalValue =
  // // // // // //       sale_price * quantity - (discount > 0 ? (sale_price * quantity * discount) / 100 : 0);
  // // // // // //     return totalValue.toFixed(2);
  // // // // // //   };

  // // // // // //   const isFormValid = () => {
  // // // // // //     const { product_name, quantity, units, category, purchase_price, sale_price } = newProduct;
  // // // // // //     return product_name && quantity > 0 && units && category && purchase_price > 0 && sale_price > 0;
  // // // // // //   };

  // // // // // //   const handleAddOrEditProduct = () => {
  // // // // // //     if (!isFormValid()) return;

  // // // // // //     const totalValue = calculateTotalValue();
  // // // // // //     const dateAdded = new Date().toISOString().split("T")[0];
  // // // // // //     const updatedProduct = { ...newProduct, total_value: totalValue, dateAdded };

  // // // // // //     const url = editIndex !== null ? `${API_URL}/${editId}?storeId=${storeId}` : `${API_URL}?storeId=${storeId}`;
  // // // // // //     const method = editIndex !== null ? "PUT" : "POST";

  // // // // // //     fetch(url, {
  // // // // // //       method,
  // // // // // //       headers: { "Content-Type": "application/json" },
  // // // // // //       body: JSON.stringify(updatedProduct),
  // // // // // //     })
  // // // // // //       .then((res) => res.json())
  // // // // // //       .then((data) => {
  // // // // // //         if (data.message.includes("successfully")) {
  // // // // // //           const updatedProducts = editIndex !== null
  // // // // // //             ? products.map((p, idx) => (idx === editIndex ? { ...updatedProduct, _id: editId } : p))
  // // // // // //             : [...products, { ...updatedProduct, _id: data.product_id }];
  // // // // // //           setProducts(updatedProducts);
  // // // // // //           resetForm();
  // // // // // //         } else {
  // // // // // //           alert("Failed to process product. Please try again.");
  // // // // // //         }
  // // // // // //       })
  // // // // // //       .catch((err) => {
  // // // // // //         console.error(`Error ${method === "POST" ? "adding" : "updating"} product:`, err);
  // // // // // //         alert("An error occurred. Please try again.");
  // // // // // //       });
  // // // // // //   };

  // // // // // //   const handleEditProduct = (index) => {
  // // // // // //     const selectedProduct = products[index];
  // // // // // //     setNewProduct(selectedProduct);
  // // // // // //     setEditIndex(index);
  // // // // // //     setEditId(selectedProduct._id);
  // // // // // //     document.getElementById("imageInput").value = "";
  // // // // // //   };

  // // // // // //   const handleFileChange = (e) => {
  // // // // // //     const file = e.target.files[0];
  // // // // // //     if (!file) return;

  // // // // // //     const formData = new FormData();
  // // // // // //     formData.append("file", file);
  // // // // // //     formData.append("upload_preset", "your_preset_name");

  // // // // // //     fetch("https://api.cloudinary.com/v1_1/your_cloud_name/upload", {
  // // // // // //       method: "POST",
  // // // // // //       body: formData,
  // // // // // //     })
  // // // // // //       .then((res) => res.json())
  // // // // // //       .then((data) => {
  // // // // // //         setNewProduct((prev) => ({ ...prev, image: data.secure_url }));
  // // // // // //       })
  // // // // // //       .catch((err) => {
  // // // // // //         console.error("Error uploading image:", err);
  // // // // // //       });
  // // // // // //   };

  // // // // // //   const handleDeleteProduct = (id, index) => {
  // // // // // //     fetch(`${API_URL}/${id}?storeId=${storeId}`, { method: "DELETE" })
  // // // // // //       .then((res) => {
  // // // // // //         if (!res.ok) throw new Error("Failed to delete product.");
  // // // // // //         setProducts((prev) => prev.filter((_, i) => i !== index));
  // // // // // //       })
  // // // // // //       .catch((err) => {
  // // // // // //         console.error("Error deleting product:", err);
  // // // // // //         alert("Failed to delete product. Please try again.");
  // // // // // //       });
  // // // // // //   };

  // // // // // //   const filteredProducts = products.filter((product) =>
  // // // // // //     product.category?.toLowerCase().includes(searchQuery.toLowerCase())
  // // // // // //   );

  // // // // // //   return (
  // // // // // //     <div className="font-poppins bg-[#f4f7fa] p-5 text-[#333] max-w-[1200px] mx-auto">
  // // // // // //       <header className="bg-white text-[#1d4ed8] py-8 text-center text-3xl font-bold shadow-lg rounded-lg mb-10">
  // // // // // //         <h1>Product Dashboard - {storeName}</h1>
  // // // // // //       </header>
  // // // // // //       {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

  // // // // // //       <section className="flex justify-center mb-10">
  // // // // // //         <div className="bg-white rounded-lg p-8 w-full max-w-[600px] shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
  // // // // // //           <h2 className="text-[#1d4ed8] text-2xl text-center mb-6">
  // // // // // //             {editIndex !== null ? "Edit Product" : "Add New Product"}
  // // // // // //           </h2>
  // // // // // //           <input
  // // // // // //             type="text"
  // // // // // //             name="product_name"
  // // // // // //             placeholder="Product Name"
  // // // // // //             value={newProduct.product_name}
  // // // // // //             onChange={handleInputChange}
  // // // // // //             className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]"
  // // // // // //           />
  // // // // // //           <input
  // // // // // //             type="number"
  // // // // // //             name="quantity"
  // // // // // //             placeholder="Quantity"
  // // // // // //             value={newProduct.quantity}
  // // // // // //             onChange={handleInputChange}
  // // // // // //             className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]"
  // // // // // //           />
  // // // // // //           <select
  // // // // // //             name="units"
  // // // // // //             value={newProduct.units}
  // // // // // //             onChange={handleInputChange}
  // // // // // //             className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]"
  // // // // // //           >
  // // // // // //             <option value="">None</option>
  // // // // // //             <option value="Bag">BAGS (Bag)</option>
  // // // // // //             <option value="Btl">BOTTLES (Btl)</option>
  // // // // // //             <option value="Box">BOX (Box)</option>
  // // // // // //           </select>
  // // // // // //           <input
  // // // // // //             type="text"
  // // // // // //             name="category"
  // // // // // //             placeholder="Category"
  // // // // // //             value={newProduct.category}
  // // // // // //             onChange={handleInputChange}
  // // // // // //             className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]"
  // // // // // //           />
  // // // // // //           <input
  // // // // // //             type="number"
  // // // // // //             name="purchase_price"
  // // // // // //             placeholder="Purchase Price"
  // // // // // //             value={newProduct.purchase_price}
  // // // // // //             onChange={handleInputChange}
  // // // // // //             className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]"
  // // // // // //           />
  // // // // // //           <input
  // // // // // //             type="number"
  // // // // // //             name="sale_price"
  // // // // // //             placeholder="Sale Price"
  // // // // // //             value={newProduct.sale_price}
  // // // // // //             onChange={handleInputChange}
  // // // // // //             className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]"
  // // // // // //           />
  // // // // // //           <input
  // // // // // //             type="number"
  // // // // // //             name="tax"
  // // // // // //             placeholder="Tax (%)"
  // // // // // //             value={newProduct.tax}
  // // // // // //             onChange={handleInputChange}
  // // // // // //             className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]"
  // // // // // //           />
  // // // // // //           <input
  // // // // // //             type="number"
  // // // // // //             name="discount"
  // // // // // //             placeholder="Discount (%)"
  // // // // // //             value={newProduct.discount}
  // // // // // //             onChange={handleInputChange}
  // // // // // //             className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]"
  // // // // // //           />
  // // // // // //           <input
  // // // // // //             type="file"
  // // // // // //             name="image"
  // // // // // //             id="imageInput"
  // // // // // //             onChange={handleFileChange}
  // // // // // //             className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]"
  // // // // // //           />
  // // // // // //           {newProduct.image && (
  // // // // // //             <div className="mb-4">
  // // // // // //               <img src={newProduct.image} alt="Product" className="w-24 h-24 rounded-full object-cover mx-auto" />
  // // // // // //             </div>
  // // // // // //           )}
  // // // // // //           <input
  // // // // // //             type="number"
  // // // // // //             name="stock_level"
  // // // // // //             placeholder="Stock Level"
  // // // // // //             value={newProduct.stock_level}
  // // // // // //             onChange={handleInputChange}
  // // // // // //             className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]"
  // // // // // //           />
  // // // // // //           <input
  // // // // // //             type="text"
  // // // // // //             name="supplier"
  // // // // // //             placeholder="Supplier"
  // // // // // //             value={newProduct.supplier}
  // // // // // //             onChange={handleInputChange}
  // // // // // //             className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]"
  // // // // // //           />
  // // // // // //           <button
  // // // // // //             onClick={handleAddOrEditProduct}
  // // // // // //             disabled={!isFormValid()}
  // // // // // //             className="w-full p-3 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
  // // // // // //           >
  // // // // // //             {editIndex !== null ? "Update Product" : "Add Product"}
  // // // // // //           </button>
  // // // // // //           {editIndex !== null && (
  // // // // // //             <button
  // // // // // //               onClick={resetForm}
  // // // // // //               className="w-full p-3 bg-[#e2e8f0] text-[#1f2937] rounded-lg mt-4 hover:bg-[#d1d5db] transition-all"
  // // // // // //             >
  // // // // // //               Cancel Edit
  // // // // // //             </button>
  // // // // // //           )}
  // // // // // //         </div>
  // // // // // //       </section>

  // // // // // //       <section className="flex justify-center mb-8">
  // // // // // //         <input
  // // // // // //           type="text"
  // // // // // //           placeholder="Search by category"
  // // // // // //           value={searchQuery}
  // // // // // //           onChange={handleSearchChange}
  // // // // // //           className="w-full max-w-[350px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]"
  // // // // // //         />
  // // // // // //       </section>

  // // // // // //       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-3">
  // // // // // //         {filteredProducts.length > 0 ? (
  // // // // // //           filteredProducts.map((product, index) => (
  // // // // // //             <div key={product._id} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
  // // // // // //               <h3 className="text-xl font-bold text-[#1d4ed8] mb-4">{product.product_name}</h3>
  // // // // // //               <p><strong>Category:</strong> {product.category}</p>
  // // // // // //               <p><strong>Purchase Price:</strong> ₹{product.purchase_price}</p>
  // // // // // //               <p><strong>Sale Price:</strong> ₹{product.sale_price}</p>
  // // // // // //               <p><strong>Quantity:</strong> {product.quantity} {product.units}</p>
  // // // // // //               <p><strong>Tax:</strong> {product.tax || "N/A"}%</p>
  // // // // // //               <p><strong>Discount:</strong> {product.discount || "N/A"}%</p>
  // // // // // //               <p><strong>Total Value:</strong> ₹{product.total_value}</p>
  // // // // // //               {product.image && (
  // // // // // //                 <div className="my-4">
  // // // // // //                   <img src={product.image} alt={product.product_name} className="w-24 h-24 rounded-full object-cover mx-auto" />
  // // // // // //                 </div>
  // // // // // //               )}
  // // // // // //               <p><strong>Stock Level:</strong> {product.stock_level || "N/A"}</p>
  // // // // // //               <p><strong>Supplier:</strong> {product.supplier || "N/A"}</p>
  // // // // // //               <div className="flex justify-around mt-6">
  // // // // // //                 <button
  // // // // // //                   onClick={() => handleEditProduct(index)}
  // // // // // //                   className="px-4 py-2 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition-all"
  // // // // // //                 >
  // // // // // //                   Edit
  // // // // // //                 </button>
  // // // // // //                 <button
  // // // // // //                   onClick={() => handleDeleteProduct(product._id, index)}
  // // // // // //                   className="px-4 py-2 bg-[#e11d48] text-white rounded-lg hover:bg-[#9b1c1c] transition-all"
  // // // // // //                 >
  // // // // // //                   Delete
  // // // // // //                 </button>
  // // // // // //               </div>
  // // // // // //             </div>
  // // // // // //           ))
  // // // // // //         ) : (
  // // // // // //           <p className="text-center">No products available. Start adding some!</p>
  // // // // // //         )}
  // // // // // //       </section>
  // // // // // //     </div>
  // // // // // //   );
  // // // // // // };

  // // // // // // export default ProductDashboard;




  // // // // // import React, { useState, useEffect, useContext } from "react";
  // // // // // import { StoreContext } from "./StoreContext";
  // // // // // import { motion, AnimatePresence } from "framer-motion";

  // // // // // const ProductDashboard = () => {
  // // // // //   const [products, setProducts] = useState([]);
  // // // // //   const { storeName, storeId } = useContext(StoreContext);
  // // // // //   const [newProduct, setNewProduct] = useState({
  // // // // //     product_name: "",
  // // // // //     quantity: "",
  // // // // //     units: "",
  // // // // //     category: "",
  // // // // //     purchase_price: "",
  // // // // //     sale_price: "",
  // // // // //     tax: "",
  // // // // //     discount: "",
  // // // // //     image: "",
  // // // // //     stock_level: "",
  // // // // //     supplier: "",
  // // // // //   });

  // // // // //   const [editIndex, setEditIndex] = useState(null);
  // // // // //   const [editId, setEditId] = useState(null);
  // // // // //   const [searchQuery, setSearchQuery] = useState("");
  // // // // //   const [filterCategory, setFilterCategory] = useState("all");
  // // // // //   const [errorMessage, setErrorMessage] = useState(null);
  // // // // //   const [successMessage, setSuccessMessage] = useState(null);
  // // // // //   const [isLoading, setIsLoading] = useState(true);
  // // // // //   const API_URL = "http://127.0.0.1:5000/products";

  // // // // //   useEffect(() => {
  // // // // //     if (storeId) {
  // // // // //       setIsLoading(true);
  // // // // //       fetch(`${API_URL}?storeId=${storeId}`)
  // // // // //         .then((res) => {
  // // // // //           if (!res.ok) throw new Error(`Error: ${res.status}`);
  // // // // //           return res.json();
  // // // // //         })
  // // // // //         .then((data) => {
  // // // // //           setProducts(data);
  // // // // //           setIsLoading(false);
  // // // // //         })
  // // // // //         .catch((err) => {
  // // // // //           console.error("Error fetching products:", err);
  // // // // //           setErrorMessage("Failed to fetch products. Please try again.");
  // // // // //           setIsLoading(false);
  // // // // //         });
  // // // // //     }
  // // // // //   }, [storeId]);

  // // // // //   useEffect(() => {
  // // // // //     // Clear success message after 3 seconds
  // // // // //     if (successMessage) {
  // // // // //       const timer = setTimeout(() => {
  // // // // //         setSuccessMessage(null);
  // // // // //       }, 3000);
  // // // // //       return () => clearTimeout(timer);
  // // // // //     }
  // // // // //   }, [successMessage]);

  // // // // //   const resetForm = () => {
  // // // // //     setNewProduct({
  // // // // //       product_name: "",
  // // // // //       quantity: "",
  // // // // //       units: "",
  // // // // //       category: "",
  // // // // //       purchase_price: "",
  // // // // //       sale_price: "",
  // // // // //       tax: "",
  // // // // //       discount: "",
  // // // // //       image: "",
  // // // // //       stock_level: "",
  // // // // //       supplier: "",
  // // // // //     });
  // // // // //     setEditIndex(null);
  // // // // //     setEditId(null);
  // // // // //   };

  // // // // //   const handleInputChange = (e) => {
  // // // // //     const { name, value } = e.target;
  // // // // //     setNewProduct((prev) => ({ ...prev, [name]: value }));
  // // // // //   };

  // // // // //   const handleSearchChange = (e) => {
  // // // // //     setSearchQuery(e.target.value);
  // // // // //   };

  // // // // //   const handleCategoryFilter = (category) => {
  // // // // //     setFilterCategory(category);
  // // // // //   };

  // // // // //   const calculateTotalValue = () => {
  // // // // //     const { sale_price, quantity, discount } = newProduct;
  // // // // //     const totalValue =
  // // // // //       sale_price * quantity - (discount > 0 ? (sale_price * quantity * discount) / 100 : 0);
  // // // // //     return totalValue.toFixed(2);
  // // // // //   };

  // // // // //   const isFormValid = () => {
  // // // // //     const { product_name, quantity, units, category, purchase_price, sale_price } = newProduct;
  // // // // //     return product_name && quantity > 0 && units && category && purchase_price > 0 && sale_price > 0;
  // // // // //   };

  // // // // //   const handleAddOrEditProduct = () => {
  // // // // //     if (!isFormValid()) return;

  // // // // //     setIsLoading(true);
  // // // // //     const totalValue = calculateTotalValue();
  // // // // //     const dateAdded = new Date().toISOString().split("T")[0];
  // // // // //     const updatedProduct = { ...newProduct, total_value: totalValue, dateAdded };

  // // // // //     const url = editIndex !== null ? `${API_URL}/${editId}?storeId=${storeId}` : `${API_URL}?storeId=${storeId}`;
  // // // // //     const method = editIndex !== null ? "PUT" : "POST";

  // // // // //     fetch(url, {
  // // // // //       method,
  // // // // //       headers: { "Content-Type": "application/json" },
  // // // // //       body: JSON.stringify(updatedProduct),
  // // // // //     })
  // // // // //       .then((res) => res.json())
  // // // // //       .then((data) => {
  // // // // //         if (data.message.includes("successfully")) {
  // // // // //           const updatedProducts = editIndex !== null
  // // // // //             ? products.map((p, idx) => (idx === editIndex ? { ...updatedProduct, _id: editId } : p))
  // // // // //             : [...products, { ...updatedProduct, _id: data.product_id }];
  // // // // //           setProducts(updatedProducts);
  // // // // //           resetForm();
  // // // // //           setSuccessMessage(`Product ${editIndex !== null ? "updated" : "added"} successfully!`);
  // // // // //         } else {
  // // // // //           setErrorMessage("Failed to process product. Please try again.");
  // // // // //         }
  // // // // //         setIsLoading(false);
  // // // // //       })
  // // // // //       .catch((err) => {
  // // // // //         console.error(`Error ${method === "POST" ? "adding" : "updating"} product:`, err);
  // // // // //         setErrorMessage("An error occurred. Please try again.");
  // // // // //         setIsLoading(false);
  // // // // //       });
  // // // // //   };

  // // // // //   const handleEditProduct = (index) => {
  // // // // //     const selectedProduct = products[index];
  // // // // //     setNewProduct(selectedProduct);
  // // // // //     setEditIndex(index);
  // // // // //     setEditId(selectedProduct._id);
  // // // // //     document.getElementById("imageInput").value = "";
      
  // // // // //     // Scroll to form
  // // // // //     document.querySelector(".product-form-section").scrollIntoView({ 
  // // // // //       behavior: "smooth",
  // // // // //       block: "start"
  // // // // //     });
  // // // // //   };

  // // // // //   const handleFileChange = (e) => {
  // // // // //     const file = e.target.files[0];
  // // // // //     if (!file) return;

  // // // // //     const formData = new FormData();
  // // // // //     formData.append("file", file);
  // // // // //     formData.append("upload_preset", "your_preset_name");

  // // // // //     setIsLoading(true);
  // // // // //     fetch("https://api.cloudinary.com/v1_1/your_cloud_name/upload", {
  // // // // //       method: "POST",
  // // // // //       body: formData,
  // // // // //     })
  // // // // //       .then((res) => res.json())
  // // // // //       .then((data) => {
  // // // // //         setNewProduct((prev) => ({ ...prev, image: data.secure_url }));
  // // // // //         setIsLoading(false);
  // // // // //       })
  // // // // //       .catch((err) => {
  // // // // //         console.error("Error uploading image:", err);
  // // // // //         setErrorMessage("Failed to upload image. Please try again.");
  // // // // //         setIsLoading(false);
  // // // // //       });
  // // // // //   };

  // // // // //   const handleDeleteProduct = (id, index) => {
  // // // // //     if (window.confirm("Are you sure you want to delete this product?")) {
  // // // // //       setIsLoading(true);
  // // // // //       fetch(`${API_URL}/${id}?storeId=${storeId}`, { method: "DELETE" })
  // // // // //         .then((res) => {
  // // // // //           if (!res.ok) throw new Error("Failed to delete product.");
  // // // // //           setProducts((prev) => prev.filter((_, i) => i !== index));
  // // // // //           setSuccessMessage("Product deleted successfully!");
  // // // // //           setIsLoading(false);
  // // // // //         })
  // // // // //         .catch((err) => {
  // // // // //           console.error("Error deleting product:", err);
  // // // // //           setErrorMessage("Failed to delete product. Please try again.");
  // // // // //           setIsLoading(false);
  // // // // //         });
  // // // // //     }
  // // // // //   };

  // // // // //   // Get unique categories for filter
  // // // // //   const categories = ["all", ...new Set(products.map(product => product.category))];

  // // // // //   const filteredProducts = products.filter((product) => {
  // // // // //     const matchesSearch = product.product_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
  // // // // //                          product.category?.toLowerCase().includes(searchQuery.toLowerCase());
  // // // // //     const matchesCategory = filterCategory === "all" || product.category === filterCategory;
  // // // // //     return matchesSearch && matchesCategory;
  // // // // //   });

  // // // // //   return (
  // // // // //     <div className="font-poppins bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen p-6 text-gray-800">
  // // // // //       {/* Notification system */}
  // // // // //       <AnimatePresence>
  // // // // //         {successMessage && (
  // // // // //           <motion.div 
  // // // // //             initial={{ opacity: 0, y: -50 }}
  // // // // //             animate={{ opacity: 1, y: 0 }}
  // // // // //             exit={{ opacity: 0, y: -50 }}
  // // // // //             className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
  // // // // //           >
  // // // // //             {successMessage}
  // // // // //           </motion.div>
  // // // // //         )}
          
  // // // // //         {errorMessage && (
  // // // // //           <motion.div 
  // // // // //             initial={{ opacity: 0, y: -50 }}
  // // // // //             animate={{ opacity: 1, y: 0 }}
  // // // // //             exit={{ opacity: 0, y: -50 }}
  // // // // //             className="fixed top-6 right-6 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
  // // // // //             onClick={() => setErrorMessage(null)}
  // // // // //           >
  // // // // //             {errorMessage}
  // // // // //           </motion.div>
  // // // // //         )}
  // // // // //       </AnimatePresence>
        
  // // // // //       {/* Loading overlay */}
  // // // // //       <AnimatePresence>
  // // // // //         {isLoading && (
  // // // // //           <motion.div 
  // // // // //             initial={{ opacity: 0 }}
  // // // // //             animate={{ opacity: 1 }}
  // // // // //             exit={{ opacity: 0 }}
  // // // // //             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  // // // // //           >
  // // // // //             <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
  // // // // //               <div className="loader w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
  // // // // //               <p className="mt-4 text-gray-700">Loading...</p>
  // // // // //             </div>
  // // // // //           </motion.div>
  // // // // //         )}
  // // // // //       </AnimatePresence>

  // // // // //       {/* Header */}
  // // // // //       <motion.header 
  // // // // //         initial={{ y: -100, opacity: 0 }}
  // // // // //         animate={{ y: 0, opacity: 1 }}
  // // // // //         transition={{ duration: 0.5 }}
  // // // // //         className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 px-8 rounded-2xl shadow-xl mb-10"
  // // // // //       >
  // // // // //         <div className="container mx-auto">
  // // // // //           <h1 className="text-4xl font-extrabold tracking-tight">
  // // // // //             <span className="block text-xl mb-1 text-blue-200">Welcome to</span>
  // // // // //             {storeName}'s Product Dashboard
  // // // // //           </h1>
  // // // // //           <p className="mt-2 text-blue-200 max-w-xl">
  // // // // //             Manage your inventory, track sales, and optimize your product offerings all in one place.
  // // // // //           </p>
  // // // // //         </div>
  // // // // //       </motion.header>

  // // // // //       {/* Statistics Overview */}
  // // // // //       <motion.section 
  // // // // //         initial={{ opacity: 0, y: 20 }}
  // // // // //         animate={{ opacity: 1, y: 0 }}
  // // // // //         transition={{ delay: 0.2 }}
  // // // // //         className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10"
  // // // // //       >
  // // // // //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
  // // // // //           <h3 className="text-gray-500 text-sm font-medium">Total Products</h3>
  // // // // //           <p className="text-3xl font-bold text-gray-800 mt-2">{products.length}</p>
  // // // // //         </div>
          
  // // // // //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500">
  // // // // //           <h3 className="text-gray-500 text-sm font-medium">Categories</h3>
  // // // // //           <p className="text-3xl font-bold text-gray-800 mt-2">{categories.length - 1}</p>
  // // // // //         </div>
          
  // // // // //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
  // // // // //           <h3 className="text-gray-500 text-sm font-medium">Total Value</h3>
  // // // // //           <p className="text-3xl font-bold text-gray-800 mt-2">
  // // // // //             ₹{products.reduce((sum, product) => sum + Number(product.total_value || 0), 0).toFixed(2)}
  // // // // //           </p>
  // // // // //         </div>
          
  // // // // //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
  // // // // //           <h3 className="text-gray-500 text-sm font-medium">Low Stock Items</h3>
  // // // // //           <p className="text-3xl font-bold text-gray-800 mt-2">
  // // // // //             {products.filter(product => Number(product.stock_level) < 10).length}
  // // // // //           </p>
  // // // // //         </div>
  // // // // //       </motion.section>

  // // // // //       <div className="flex flex-col lg:flex-row gap-10">
  // // // // //         {/* Add/Edit Product Form */}
  // // // // //         <motion.section 
  // // // // //           initial={{ opacity: 0, x: -50 }}
  // // // // //           animate={{ opacity: 1, x: 0 }}
  // // // // //           transition={{ delay: 0.3 }}
  // // // // //           className="product-form-section lg:w-1/3"
  // // // // //         >
  // // // // //           <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
  // // // // //             <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
  // // // // //               {editIndex !== null ? "Edit Product" : "Add New Product"}
  // // // // //             </h2>
              
  // // // // //             <div className="space-y-4">
  // // // // //               <div>
  // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
  // // // // //                 <input
  // // // // //                   type="text"
  // // // // //                   name="product_name"
  // // // // //                   placeholder="Enter product name"
  // // // // //                   value={newProduct.product_name}
  // // // // //                   onChange={handleInputChange}
  // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // // //                 />
  // // // // //               </div>
                
  // // // // //               <div className="grid grid-cols-2 gap-4">
  // // // // //                 <div>
  // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
  // // // // //                   <input
  // // // // //                     type="number"
  // // // // //                     name="quantity"
  // // // // //                     placeholder="0"
  // // // // //                     value={newProduct.quantity}
  // // // // //                     onChange={handleInputChange}
  // // // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // // //                   />
  // // // // //                 </div>
                  
  // // // // //                 <div>
  // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Units</label>
  // // // // //                   <select
  // // // // //                     name="units"
  // // // // //                     value={newProduct.units}
  // // // // //                     onChange={handleInputChange}
  // // // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-white"
  // // // // //                   >
  // // // // //                     <option value="">Select Unit</option>
  // // // // //                     <option value="Bag">BAGS (Bag)</option>
  // // // // //                     <option value="Btl">BOTTLES (Btl)</option>
  // // // // //                     <option value="Box">BOX (Box)</option>
  // // // // //                     <option value="Bdl">BUNDLES (Bdl)</option>
  // // // // //               <option value="Can">CANS (Can)</option>
  // // // // //               <option value="Ctn">CARTONS (Ctn)</option>
  // // // // //               <option value="Dzn">DOZENS (Dzn)</option>
  // // // // //               <option value="Kg">KILOGRAMS (Kg)</option>
  // // // // //               <option value="Gm">GRAMMES (Gm)</option>
  // // // // //               <option value="Ltr">LITRE (Ltr)</option>
  // // // // //               <option value="Mtr">METERS (Mtr)</option>
  // // // // //               <option value="Ml">MILLILITRE (Ml)</option>
  // // // // //               <option value="Nos">NUMBERS (Nos)</option>
  // // // // //               <option value="Pac">PACKS (Pac)</option>
  // // // // //               <option value="Prs">PAIRS (Prs)</option>
  // // // // //               <option value="Pcs">PIECES (Pcs)</option>
  // // // // //               <option value="Qt">QUINTAL (Qt)</option>
  // // // // //               <option value="Rol">ROLLS (Rol)</option>
  // // // // //               <option value="Sqf">SQUARE FEET (Sqf)</option>
  // // // // //                   </select>
  // // // // //                 </div>
  // // // // //               </div>
                
  // // // // //               <div>
  // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
  // // // // //                 <input
  // // // // //                   type="text"
  // // // // //                   name="category"
  // // // // //                   placeholder="Enter category"
  // // // // //                   value={newProduct.category}
  // // // // //                   onChange={handleInputChange}
  // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // // //                 />
  // // // // //               </div>
                
  // // // // //               <div className="grid grid-cols-2 gap-4">
  // // // // //                 <div>
  // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Purchase Price (₹)</label>
  // // // // //                   <input
  // // // // //                     type="number"
  // // // // //                     name="purchase_price"
  // // // // //                     placeholder="0.00"
  // // // // //                     value={newProduct.purchase_price}
  // // // // //                     onChange={handleInputChange}
  // // // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // // //                   />
  // // // // //                 </div>
                  
  // // // // //                 <div>
  // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Sale Price (₹)</label>
  // // // // //                   <input
  // // // // //                     type="number"
  // // // // //                     name="sale_price"
  // // // // //                     placeholder="0.00"
  // // // // //                     value={newProduct.sale_price}
  // // // // //                     onChange={handleInputChange}
  // // // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // // //                   />
  // // // // //                 </div>
  // // // // //               </div>
                
  // // // // //               <div className="grid grid-cols-2 gap-4">
  // // // // //                 <div>
  // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Tax (%)</label>
  // // // // //                   <input
  // // // // //                     type="number"
  // // // // //                     name="tax"
  // // // // //                     placeholder="0"
  // // // // //                     value={newProduct.tax}
  // // // // //                     onChange={handleInputChange}
  // // // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // // //                   />
  // // // // //                 </div>
                  
  // // // // //                 <div>
  // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Discount (%)</label>
  // // // // //                   <input
  // // // // //                     type="number"
  // // // // //                     name="discount"
  // // // // //                     placeholder="0"
  // // // // //                     value={newProduct.discount}
  // // // // //                     onChange={handleInputChange}
  // // // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // // //                   />
  // // // // //                 </div>
  // // // // //               </div>
                
  // // // // //               <div>
  // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
  // // // // //                 <input
  // // // // //                   type="file"
  // // // // //                   name="image"
  // // // // //                   id="imageInput"
  // // // // //                   onChange={handleFileChange}
  // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // // //                 />
  // // // // //                 {newProduct.image && (
  // // // // //                   <div className="mt-4 flex justify-center">
  // // // // //                     <img 
  // // // // //                       src={newProduct.image} 
  // // // // //                       alt="Product" 
  // // // // //                       className="w-32 h-32 rounded-lg object-cover border-4 border-white shadow-lg" 
  // // // // //                     />
  // // // // //                   </div>
  // // // // //                 )}
  // // // // //               </div>
                
  // // // // //               <div>
  // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Stock Level</label>
  // // // // //                 <input
  // // // // //                   type="number"
  // // // // //                   name="stock_level"
  // // // // //                   placeholder="Current stock quantity"
  // // // // //                   value={newProduct.stock_level}
  // // // // //                   onChange={handleInputChange}
  // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // // //                 />
  // // // // //               </div>
                
  // // // // //               <div>
  // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Supplier</label>
  // // // // //                 <input
  // // // // //                   type="text"
  // // // // //                   name="supplier"
  // // // // //                   placeholder="Supplier name"
  // // // // //                   value={newProduct.supplier}
  // // // // //                   onChange={handleInputChange}
  // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // // //                 />
  // // // // //               </div>
                
  // // // // //               {newProduct.sale_price && newProduct.quantity && (
  // // // // //                 <div className="p-4 bg-blue-50 rounded-lg">
  // // // // //                   <p className="text-sm text-gray-600">Total Value: <span className="font-bold text-blue-700">₹{calculateTotalValue()}</span></p>
  // // // // //                 </div>
  // // // // //               )}
                
  // // // // //               <motion.button
  // // // // //                 whileHover={{ scale: 1.03 }}
  // // // // //                 whileTap={{ scale: 0.98 }}
  // // // // //                 onClick={handleAddOrEditProduct}
  // // // // //                 disabled={!isFormValid()}
  // // // // //                 className={`w-full p-4 rounded-lg font-medium text-white shadow-lg transition-all duration-300 
  // // // // //                   ${!isFormValid() 
  // // // // //                     ? 'bg-gray-300 cursor-not-allowed' 
  // // // // //                     : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800'}`}
  // // // // //               >
  // // // // //                 {editIndex !== null ? "Update Product" : "Add Product"}
  // // // // //               </motion.button>
                
  // // // // //               {editIndex !== null && (
  // // // // //                 <motion.button
  // // // // //                   whileHover={{ scale: 1.03 }}
  // // // // //                   whileTap={{ scale: 0.98 }}
  // // // // //                   onClick={resetForm}
  // // // // //                   className="w-full p-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300"
  // // // // //                 >
  // // // // //                   Cancel Edit
  // // // // //                 </motion.button>
  // // // // //               )}
  // // // // //             </div>
  // // // // //           </div>
  // // // // //         </motion.section>

  // // // // //         {/* Products Display Section */}
  // // // // //         <motion.section 
  // // // // //           initial={{ opacity: 0, x: 50 }}
  // // // // //           animate={{ opacity: 1, x: 0 }}
  // // // // //           transition={{ delay: 0.4 }}
  // // // // //           className="lg:w-2/3"
  // // // // //         >
  // // // // //           {/* Search and Filters */}
  // // // // //           <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
  // // // // //             <div className="flex flex-col md:flex-row gap-4">
  // // // // //               <div className="md:w-2/3">
  // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Search Products</label>
  // // // // //                 <div className="relative">
  // // // // //                   <input
  // // // // //                     type="text"
  // // // // //                     placeholder="Search by name or category..."
  // // // // //                     value={searchQuery}
  // // // // //                     onChange={handleSearchChange}
  // // // // //                     className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // // //                   />
  // // // // //                   <div className="absolute left-3 top-3.5 text-gray-400">
  // // // // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  // // // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  // // // // //                     </svg>
  // // // // //                   </div>
  // // // // //                 </div>
  // // // // //               </div>
                
  // // // // //               <div className="md:w-1/3">
  // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Category</label>
  // // // // //                 <select
  // // // // //                   value={filterCategory}
  // // // // //                   onChange={(e) => handleCategoryFilter(e.target.value)}
  // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-white"
  // // // // //                 >
  // // // // //                   {categories.map((category) => (
  // // // // //                     <option key={category} value={category}>
  // // // // //                       {category === "all" ? "All Categories" : category}
  // // // // //                     </option>
  // // // // //                   ))}
  // // // // //                 </select>
  // // // // //               </div>
  // // // // //             </div>
  // // // // //           </div>
            
  // // // // //           {/* Products Grid */}
  // // // // //           <div className="space-y-6">
  // // // // //             <div className="flex justify-between items-center">
  // // // // //               <h2 className="text-2xl font-bold text-gray-800">
  // // // // //                 Products {searchQuery || filterCategory !== "all" ? "(Filtered)" : ""}
  // // // // //               </h2>
  // // // // //               <p className="text-gray-500">{filteredProducts.length} items</p>
  // // // // //             </div>
              
  // // // // //             <AnimatePresence>
  // // // // //               {filteredProducts.length > 0 ? (
  // // // // //                 <motion.div 
  // // // // //                   layout
  // // // // //                   className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
  // // // // //                 >
  // // // // //                   {filteredProducts.map((product, index) => (
  // // // // //                     <motion.div
  // // // // //                       key={product._id}
  // // // // //                       layout
  // // // // //                       initial={{ opacity: 0, scale: 0.9 }}
  // // // // //                       animate={{ opacity: 1, scale: 1 }}
  // // // // //                       exit={{ opacity: 0, scale: 0.9 }}
  // // // // //                       whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
  // // // // //                       transition={{ duration: 0.2 }}
  // // // // //                       className="bg-white rounded-2xl overflow-hidden shadow-lg"
  // // // // //                     >
  // // // // //                       <div className={`h-2 ${product.stock_level < 10 ? 'bg-red-500' : 'bg-green-500'}`}></div>
  // // // // //                       <div className="p-6">
  // // // // //                         <div className="flex justify-between items-start mb-4">
  // // // // //                           <h3 className="text-xl font-bold text-gray-800 line-clamp-2">{product.product_name}</h3>
  // // // // //                           {product.image ? (
  // // // // //                             <img 
  // // // // //                               src={product.image} 
  // // // // //                               alt={product.product_name} 
  // // // // //                               className="w-16 h-16 rounded-lg object-cover ml-2 border-2 border-white shadow-md" 
  // // // // //                             />
  // // // // //                           ) : (
  // // // // //                             <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center ml-2 text-gray-400">
  // // // // //                               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  // // // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  // // // // //                               </svg>
  // // // // //                             </div>
  // // // // //                           )}
  // // // // //                         </div>
                          
  // // // // //                         <div className="grid grid-cols-2 gap-4 mb-4">
  // // // // //                           <div className="text-sm">
  // // // // //                             <p className="text-gray-500">Category</p>
  // // // // //                             <p className="font-medium">{product.category}</p>
  // // // // //                           </div>
  // // // // //                           <div className="text-sm">
  // // // // //                             <p className="text-gray-500">Supplier</p>
  // // // // //                             <p className="font-medium">{product.supplier || "N/A"}</p>
  // // // // //                           </div>
  // // // // //                         </div>
                          
  // // // // //                         <div className="grid grid-cols-2 gap-4 mb-4">
  // // // // //                           <div className="text-sm">
  // // // // //                             <p className="text-gray-500">Purchase Price</p>
  // // // // //                             <p className="font-medium">₹{product.purchase_price}</p>
  // // // // //                           </div>
  // // // // //                           <div className="text-sm">
  // // // // //                             <p className="text-gray-500">Sale Price</p>
  // // // // //                             <p className="font-medium">₹{product.sale_price}</p>
  // // // // //                           </div>
  // // // // //                         </div>
                          
  // // // // //                         <div className="grid grid-cols-2 gap-4 mb-4">
  // // // // //                           <div className="text-sm">
  // // // // //                             <p className="text-gray-500">Quantity</p>
  // // // // //                             <p className="font-medium">{product.quantity} {product.units}</p>
  // // // // //                           </div>
  // // // // //                           <div className="text-sm">
  // // // // //                             <p className="text-gray-500">Stock Level</p>
  // // // // //                             <p className={`font-medium ${product.stock_level < 10 ? 'text-red-600' : 'text-green-600'}`}>
  // // // // //                               {product.stock_level || "0"}
  // // // // //                             </p>
  // // // // //                           </div>
  // // // // //                         </div>
                          
  // // // // //                         <div className="grid grid-cols-2 gap-4 mb-4">
  // // // // //                           <div className="text-sm">
  // // // // //                             <p className="text-gray-500">Tax</p>
  // // // // //                             <p className="font-medium">{product.tax || "0"}%</p>
  // // // // //                           </div>
  // // // // //                           <div className="text-sm">
  // // // // //                             <p className="text-gray-500">Discount</p>
  // // // // //                             <p className="font-medium">{product.discount || "0"}%</p>
  // // // // //                           </div>
  // // // // //                         </div>
                          
  // // // // //                         <div className="bg-blue-50 p-3 rounded-lg mb-4">
  // // // // //                           <div className="flex justify-between">
  // // // // //                             <p className="text-gray-600 font-medium">Total Value:</p>
  // // // // //                             <p className="text-blue-700 font-bold">₹{product.total_value}</p>
  // // // // //                           </div>
  // // // // //                         </div>
                          
  // // // // //                         <div className="flex gap-3 mt-4">
  // // // // //                           <motion.button
  // // // // //                             whileHover={{ scale: 1.05 }}
  // // // // //                             whileTap={{ scale: 0.95 }}
  // // // // //                             onClick={() => handleEditProduct(index)}
  // // // // //                             className="flex-1 py-2.5 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-all duration-300 flex items-center justify-center"
  // // // // //                           >
  // // // // //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  // // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  // // // // //                             </svg>
  // // // // //                             Edit
  // // // // //                           </motion.button>
                            
  // // // // //                           <motion.button
  // // // // //                             whileHover={{ scale: 1.05 }}
  // // // // //                             whileTap={{ scale: 0.95 }}
  // // // // //                             onClick={() => handleDeleteProduct(product._id, index)}
  // // // // //                             className="flex-1 py-2.5 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition-all duration-300 flex items-center justify-center"
  // // // // //                           >
  // // // // //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  // // // // //                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  // // // // //                             </svg>
  // // // // //                             Delete
  // // // // //                           </motion.button>
  // // // // //                         </div>
  // // // // //                       </div>
  // // // // //                     </motion.div>
  // // // // //                   ))}
  // // // // //                 </motion.div>
  // // // // //               ) : (
  // // // // //                 <motion.div
  // // // // //                   initial={{ opacity: 0, y: 20 }}
  // // // // //                   animate={{ opacity: 1, y: 0 }}
  // // // // //                   exit={{ opacity: 0, y: 20 }}
  // // // // //                   className="bg-white rounded-2xl p-8 shadow-lg text-center"
  // // // // //                 >
  // // // // //                   <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  // // // // //                   </svg>
  // // // // //                   <p className="mt-4 text-gray-600">No products found. Start adding some!</p>
  // // // // //                 </motion.div>
  // // // // //               )}
  // // // // //             </AnimatePresence>
  // // // // //           </div>
  // // // // //         </motion.section>
  // // // // //       </div>
  // // // // //     </div>
  // // // // //   );
  // // // // // };

  // // // // // export default ProductDashboard;





  // // // // import React, { useState, useEffect, useContext } from "react";
  // // // // import { StoreContext } from "./StoreContext";
  // // // // import { motion, AnimatePresence } from "framer-motion";

  // // // // const ProductDashboard = () => {
  // // // //   const [products, setProducts] = useState([]);
  // // // //   const { storeName, storeId } = useContext(StoreContext);
  // // // //   const [newProduct, setNewProduct] = useState({
  // // // //     product_name: "",
  // // // //     quantity: "",
  // // // //     units: "",
  // // // //     category: "",
  // // // //     purchase_price: "",
  // // // //     sale_price: "",
  // // // //     tax: "",
  // // // //     discount: "",
  // // // //     image: "",
  // // // //     stock_level: "",
  // // // //     supplier: "",
  // // // //     date_of_manufacturing: "",
  // // // //     valid_till: "",
  // // // //   });

  // // // //   const [editIndex, setEditIndex] = useState(null);
  // // // //   const [editId, setEditId] = useState(null);
  // // // //   const [searchQuery, setSearchQuery] = useState("");
  // // // //   const [filterCategory, setFilterCategory] = useState("all");
  // // // //   const [errorMessage, setErrorMessage] = useState(null);
  // // // //   const [successMessage, setSuccessMessage] = useState(null);
  // // // //   const [isLoading, setIsLoading] = useState(true);
  // // // //   const API_URL = "http://127.0.0.1:5000/products";

  // // // //   useEffect(() => {
  // // // //     if (storeId) {
  // // // //       setIsLoading(true);
  // // // //       fetch(`${API_URL}?storeId=${storeId}`)
  // // // //         .then((res) => {
  // // // //           if (!res.ok) throw new Error(`Error: ${res.status}`);
  // // // //           return res.json();
  // // // //         })
  // // // //         .then((data) => {
  // // // //           setProducts(data);
  // // // //           setIsLoading(false);
  // // // //         })
  // // // //         .catch((err) => {
  // // // //           console.error("Error fetching products:", err);
  // // // //           setErrorMessage("Failed to fetch products. Please try again.");
  // // // //           setIsLoading(false);
  // // // //         });
  // // // //     }
  // // // //   }, [storeId]);

  // // // //   useEffect(() => {
  // // // //     if (successMessage) {
  // // // //       const timer = setTimeout(() => {
  // // // //         setSuccessMessage(null);
  // // // //       }, 3000);
  // // // //       return () => clearTimeout(timer);
  // // // //     }
  // // // //   }, [successMessage]);

  // // // //   const resetForm = () => {
  // // // //     setNewProduct({
  // // // //       product_name: "",
  // // // //       quantity: "",
  // // // //       units: "",
  // // // //       category: "",
  // // // //       purchase_price: "",
  // // // //       sale_price: "",
  // // // //       tax: "",
  // // // //       discount: "",
  // // // //       image: "",
  // // // //       stock_level: "",
  // // // //       supplier: "",
  // // // //       date_of_manufacturing: "",
  // // // //       valid_till: "",
  // // // //     });
  // // // //     setEditIndex(null);
  // // // //     setEditId(null);
  // // // //   };

  // // // //   const handleInputChange = (e) => {
  // // // //     const { name, value } = e.target;
  // // // //     setNewProduct((prev) => ({ ...prev, [name]: value }));
  // // // //   };

  // // // //   const handleSearchChange = (e) => {
  // // // //     setSearchQuery(e.target.value);
  // // // //   };

  // // // //   const handleCategoryFilter = (category) => {
  // // // //     setFilterCategory(category);
  // // // //   };

  // // // //   const calculateTotalValue = () => {
  // // // //     const { sale_price, quantity, discount } = newProduct;
  // // // //     const totalValue =
  // // // //       sale_price * quantity - (discount > 0 ? (sale_price * quantity * discount) / 100 : 0);
  // // // //     return totalValue.toFixed(2);
  // // // //   };

  // // // //   const isFormValid = () => {
  // // // //     const { product_name, quantity, units, category, purchase_price, sale_price } = newProduct;
  // // // //     return product_name && quantity > 0 && units && category && purchase_price > 0 && sale_price > 0;
  // // // //   };

  // // // //   const handleAddOrEditProduct = () => {
  // // // //     if (!isFormValid()) return;

  // // // //     setIsLoading(true);
  // // // //     const totalValue = calculateTotalValue();
  // // // //     const dateAdded = new Date().toISOString().split("T")[0];
  // // // //     const updatedProduct = { ...newProduct, total_value: totalValue, dateAdded };

  // // // //     const url = editIndex !== null ? `${API_URL}/${editId}?storeId=${storeId}` : `${API_URL}?storeId=${storeId}`;
  // // // //     const method = editIndex !== null ? "PUT" : "POST";

  // // // //     fetch(url, {
  // // // //       method,
  // // // //       headers: { "Content-Type": "application/json" },
  // // // //       body: JSON.stringify(updatedProduct),
  // // // //     })
  // // // //       .then((res) => res.json())
  // // // //       .then((data) => {
  // // // //         if (data.message.includes("successfully")) {
  // // // //           const updatedProducts = editIndex !== null
  // // // //             ? products.map((p, idx) => (idx === editIndex ? { ...updatedProduct, _id: editId } : p))
  // // // //             : [...products, { ...updatedProduct, _id: data.product_id }];
  // // // //           setProducts(updatedProducts);
  // // // //           resetForm();
  // // // //           setSuccessMessage(`Product ${editIndex !== null ? "updated" : "added"}successfully!`);
  // // // //         } else {
  // // // //           setErrorMessage("Failed to process product. Please try again.");
  // // // //         }
  // // // //         setIsLoading(false);
  // // // //       })
  // // // //       .catch((err) => {
  // // // //         console.error(`Error ${method === "POST" ? "adding" : "updating"} product:`, err);
  // // // //         setErrorMessage("An error occurred. Please try again.");
  // // // //         setIsLoading(false);
  // // // //       });
  // // // //   };

  // // // //   const handleEditProduct = (index) => {
  // // // //     const selectedProduct = products[index];
  // // // //     setNewProduct(selectedProduct);
  // // // //     setEditIndex(index);
  // // // //     setEditId(selectedProduct._id);
  // // // //     document.getElementById("imageInput").value = "";
      
  // // // //     // Scroll to form
  // // // //     document.querySelector(".product-form-section").scrollIntoView({ 
  // // // //       behavior: "smooth",
  // // // //       block: "start"
  // // // //     });
  // // // //   };

  // // // //   const handleFileChange = (e) => {
  // // // //     const file = e.target.files[0];
  // // // //     if (!file) return;

  // // // //     const formData = new FormData();
  // // // //     formData.append("file", file);
  // // // //     formData.append("upload_preset", "your_preset_name");

  // // // //     setIsLoading(true);
  // // // //     fetch("https://api.cloudinary.com/v1_1/your_cloud_name/upload", {
  // // // //       method: "POST",
  // // // //       body: formData,
  // // // //     })
  // // // //       .then((res) => res.json())
  // // // //       .then((data) => {
  // // // //         setNewProduct((prev) => ({ ...prev, image: data.secure_url }));
  // // // //         setIsLoading(false);
  // // // //       })
  // // // //       .catch((err) => {
  // // // //         console.error("Error uploading image:", err);
  // // // //         setErrorMessage("Failed to upload image. Please try again.");
  // // // //         setIsLoading(false);
  // // // //       });
  // // // //   };

  // // // //   const handleValidityTypeChange = (e) => {
  // // // //     const { value } = e.target;
  // // // //     setNewProduct((prev) => ({ ...prev, validity_type: value, valid_till: "" })); // Reset valid_till when changing type
  // // // //   };  

  // // // //   const handleDeleteProduct = (id, index) => {
  // // // //     if (window.confirm("Are you sure you want to delete this product?")) {
  // // // //       setIsLoading(true);
  // // // //       fetch(`${API_URL}/${id}?storeId=${storeId}`, { method: "DELETE" })
  // // // //         .then((res) => {
  // // // //           if (!res.ok) throw new Error("Failed to delete product.");
  // // // //           setProducts((prev) => prev.filter((_, i) => i !== index));
  // // // //           setSuccessMessage("Product deleted successfully!");
  // // // //           setIsLoading(false);
  // // // //         })
  // // // //         .catch((err) => {
  // // // //           console.error("Error deleting product:", err);
  // // // //           setErrorMessage("Failed to delete product. Please try again.");
  // // // //           setIsLoading(false);
  // // // //         });
  // // // //     }
  // // // //   };

  // // // //   // Get unique categories for filter
  // // // //   const categories = ["all", ...new Set(products.map(product => product.category))];

  // // // //   const filteredProducts = products.filter((product) => {
  // // // //     const matchesSearch = product.product_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
  // // // //                          product.category?.toLowerCase().includes(searchQuery.toLowerCase());
  // // // //     const matchesCategory = filterCategory === "all" || product.category === filterCategory;
  // // // //     return matchesSearch && matchesCategory;
  // // // //   });

  // // // //   return (
  // // // //     <div className="font-poppins bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen p-6 text-gray-800">
  // // // //       {/* Notification system */}
  // // // //       <AnimatePresence>
  // // // //         {successMessage && (
  // // // //           <motion.div 
  // // // //             initial={{ opacity: 0, y: -50 }}
  // // // //             animate={{ opacity: 1, y: 0 }}
  // // // //             exit={{ opacity: 0, y: -50 }}
  // // // //             className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
  // // // //           >
  // // // //             {successMessage}
  // // // //           </motion.div>
  // // // //         )}
          
  // // // //         {errorMessage && (
  // // // //           <motion.div 
  // // // //             initial={{ opacity: 0, y: -50 }}
  // // // //             animate={{ opacity: 1, y: 0 }}
  // // // //             exit={{ opacity: 0, y: -50 }}
  // // // //             className="fixed top-6 right-6 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
  // // // //             onClick={() => setErrorMessage(null)}
  // // // //           >
  // // // //             {errorMessage}
  // // // //           </motion.div>
  // // // //         )}
  // // // //       </AnimatePresence>
        
  // // // //       {/* Loading overlay */}
  // // // //       <AnimatePresence>
  // // // //         {isLoading && (
  // // // //           <motion.div 
  // // // //             initial={{ opacity: 0 }}
  // // // //             animate={{ opacity: 1 }}
  // // // //             exit={{ opacity: 0 }}
  // // // //             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  // // // //           >
  // // // //             <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
  // // // //               <div className="loader w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
  // // // //               <p className="mt-4 text-gray-700">Loading...</p>
  // // // //             </div>
  // // // //           </motion.div>
  // // // //         )}
  // // // //       </AnimatePresence>

  // // // //       {/* Header */}
  // // // //       <motion.header 
  // // // //         initial={{ y: -100, opacity: 0 }}
  // // // //         animate={{ y: 0, opacity: 1 }}
  // // // //         transition={{ duration: 0.5 }}
  // // // //         className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 px-8 rounded-2xl shadow-xl mb-10"
  // // // //       >
  // // // //         <div className="container mx-auto">
  // // // //           <h1 className="text-4xl font-extrabold tracking-tight">
  // // // //             <span className="block text-xl mb-1 text-blue-200">Welcome to</span>
  // // // //             {storeName}'s Product Dashboard
  // // // //           </h1>
  // // // //           <p className="mt-2 text-blue-200 max-w-xl">
  // // // //             Manage your inventory, track sales, and optimize your product offerings all in one place.
  // // // //           </p>
  // // // //         </div>
  // // // //       </motion.header>

  // // // //       {/* Statistics Overview */}
  // // // //       <motion.section 
  // // // //         initial={{ opacity: 0, y: 20 }}
  // // // //         animate={{ opacity: 1, y: 0 }}
  // // // //         transition={{ delay: 0.2 }}
  // // // //         className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10"
  // // // //       >
  // // // //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
  // // // //           <h3 className="text-gray-500 text-sm font-medium">Total Products</h3>
  // // // //           <p className="text-3xl font-bold text-gray-800 mt-2">{products.length}</p>
  // // // //         </div>
          
  // // // //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500">
  // // // //           <h3 className="text-gray-500 text-sm font-medium">Categories</h3>
  // // // //           <p className="text-3xl font-bold text-gray-800 mt-2">{categories.length - 1}</p>
  // // // //         </div>
          
  // // // //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
  // // // //           <h3 className="text-gray-500 text-sm font-medium">Total Value</h3>
  // // // //           <p className="text-3xl font-bold text-gray-800 mt-2">
  // // // //             ₹{products.reduce((sum, product) => sum + Number(product.total_value || 0), 0).toFixed(2)}
  // // // //           </p>
  // // // //         </div>
          
  // // // //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
  // // // //           <h3 className="text-gray-500 text-sm font-medium">Low Stock Items</h3>
  // // // //           <p className="text-3xl font-bold text-gray-800 mt-2">
  // // // //             {products.filter(product => Number(product.stock_level) < 10).length}
  // // // //           </p>
  // // // //         </div>
  // // // //       </motion.section>

  // // // //       <div className="flex flex-col lg:flex-row gap-10">
  // // // //         {/* Add/Edit Product Form */}
  // // // //         <motion.section 
  // // // //           initial={{ opacity: 0, x: -50 }}
  // // // //           animate={{ opacity: 1, x: 0 }}
  // // // //           transition={{ delay: 0.3 }}
  // // // //           className="product-form-section lg:w-1/3"
  // // // //         >
  // // // //           <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
  // // // //             <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
  // // // //               {editIndex !== null ? "Edit Product" : "Add New Product"}
  // // // //             </h2>
              
  // // // //             <div className="space-y-4">
  // // // //               <div>
  // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
  // // // //                 <input
  // // // //                   type="text"
  // // // //                   name="product_name"
  // // // //                   placeholder="Enter product name"
  // // // //                   value={newProduct.product_name}
  // // // //                   onChange={handleInputChange}
  // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // //                 />
  // // // //               </div>
                
  // // // //               <div className="grid grid-cols-2 gap-4">
  // // // //                 <div>
  // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
  // // // //                   <input
  // // // //                     type="number"
  // // // //                     name="quantity"
  // // // //                     placeholder="0"
  // // // //                     value={newProduct.quantity}
  // // // //                     onChange={handleInputChange}
  // // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // //                   />
  // // // //                 </div>
                  
  // // // //                 <div>
  // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Units</label>
  // // // //                   <select
  // // // //                     name="units"
  // // // //                     value={newProduct.units}
  // // // //                     onChange={handleInputChange}
  // // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-white"
  // // // //                   >
  // // // //                     <option value="">Select Unit</option>
  // // // //                     <option value="Bag">BAGS (Bag)</option>
  // // // //                     <option value="Btl">BOTTLES (Btl)</option>
  // // // //                     <option value="Box">BOX (Box)</option>
  // // // //                     <option value="Bdl">BUNDLES (Bdl)</option>
  // // // //                     <option value="Can">CANS (Can)</option>
  // // // //                     <option value="Ctn">CARTONS (Ctn)</option>
  // // // //                     <option value="Dzn">DOZENS (Dzn)</option>
  // // // //                     <option value="Kg">KILOGRAMS (Kg)</option>
  // // // //                     <option value="Gm">GRAMMES (Gm)</option>
  // // // //                     <option value="Ltr">LITRE (Ltr)</option>
  // // // //                     <option value="Mtr">METERS (Mtr)</option>
  // // // //                     <option value="Ml">MILLILITRE (Ml)</option>
  // // // //                     <option value="Nos">NUMBERS (Nos)</option>
  // // // //                     <option value="Pac">PACKS (Pac)</option>
  // // // //                     <option value="Prs">PAIRS (Prs)</option>
  // // // //                     <option value="Pcs">PIECES (Pcs)</option>
  // // // //                     <option value="Qt">QUINTAL (Qt)</option>
  // // // //                     <option value="Rol">ROLLS (Rol)</option>
  // // // //                     <option value="Sqf">SQUARE FEET (Sqf)</option>
  // // // //                   </select>
  // // // //                 </div>
  // // // //               </div>
                
  // // // //               <div>
  // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
  // // // //                 <input
  // // // //                   type="text"
  // // // //                   name="category"
  // // // //                   placeholder="Enter category"
  // // // //                   value={newProduct.category}
  // // // //                   onChange={handleInputChange}
  // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // //                 />
  // // // //               </div>
                
  // // // //               <div className="grid grid-cols-2 gap-4">
  // // // //                 <div>
  // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Purchase Price (₹)</label>
  // // // //                   <input
  // // // //                     type="number"
  // // // //                     name="purchase_price"
  // // // //                     placeholder="0.00"
  // // // //                     value={newProduct.purchase_price}
  // // // //                     onChange={handleInputChange}
  // // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // //                   />
  // // // //                 </div>
                  
  // // // //                 <div>
  // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Sale Price (₹)</label>
  // // // //                   <input
  // // // //                     type="number"
  // // // //                     name="sale_price"
  // // // //                     placeholder="0.00"
  // // // //                     value={newProduct.sale_price}
  // // // //                     onChange={handleInputChange}
  // // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // //                   />
  // // // //                 </div>
  // // // //               </div>
                
  // // // //               <div className="grid grid-cols-2 gap-4">
  // // // //                 <div>
  // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Tax (%)</label>
  // // // //                   <input
  // // // //                     type="number"
  // // // //                     name="tax"
  // // // //                     placeholder="0"
  // // // //                     value={newProduct.tax}
  // // // //                     onChange={handleInputChange}
  // // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // //                   />
  // // // //                 </div>
                  
  // // // //                 <div>
  // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Discount (%)</label>
  // // // //                   <input
  // // // //                     type="number"
  // // // //                     name="discount"
  // // // //                     placeholder="0"
  // // // //                     value={newProduct.discount}
  // // // //                     onChange={handleInputChange}
  // // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // //                   />
  // // // //                 </div>
  // // // //               </div>
                
  // // // //               <div>
  // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
  // // // //                 <input
  // // // //                   type="file"
  // // // //                   name="image"
  // // // //                   id="imageInput"
  // // // //                   onChange={handleFileChange}
  // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // //                 />
  // // // //                 {newProduct.image && (
  // // // //                   <div className="mt-4 flex justify-center">
  // // // //                     <img 
  // // // //                       src={newProduct.image} 
  // // // //                       alt="Product" 
  // // // //                       className="w-32 h-32 rounded-lg object-cover border-4 border-white shadow-lg" 
  // // // //                     />
  // // // //                   </div>
  // // // //                 )}
  // // // //               </div>
                
  // // // //               <div>
  // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Stock Level</label>
  // // // //                 <input
  // // // //                   type="number"
  // // // //                   name="stock_level"
  // // // //                   placeholder="Current stock quantity"
  // // // //                   value={newProduct.stock_level}
  // // // //                   onChange={handleInputChange}
  // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // //                 />
  // // // //               </div>
                
  // // // //               <div>
  // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Supplier</label>
  // // // //                 <input
  // // // //                   type="text"
  // // // //                   name="supplier"
  // // // //                   placeholder="Supplier name"
  // // // //                   value={newProduct.supplier}
  // // // //                   onChange={handleInputChange}
  // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // //                 />
  // // // //               </div>

  // // // //               <div>
  // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Date of Manufacturing</label>
  // // // //                 <input
  // // // //                   type="date"
  // // // //                   name="date_of_manufacturing"
  // // // //                   value={newProduct.date_of_manufacturing}
  // // // //                   onChange={handleInputChange}
  // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // //                 />
  // // // //               </div>

  // // // //               {/* <div>
  // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Valid Till</label>
  // // // //                 <input
  // // // //                   type="date"
  // // // //                   name="valid_till"
  // // // //                   value={newProduct.valid_till}
  // // // //                   onChange={handleInputChange}
  // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // //                 />
  // // // //               </div> */}
  // // // //               <div>
  // // // //   <label className="block text-sm font-medium text-gray-700 mb-1">Valid Till</label>
  // // // //   <div className="flex items-center mb-2">
  // // // //     <label className="mr-4">
  // // // //       <input
  // // // //         type="radio"
  // // // //         name="validity_type"
  // // // //         value="date"
  // // // //         checked={newProduct.validity_type === "date"}
  // // // //         onChange={handleValidityTypeChange}
  // // // //         className="mr-2"
  // // // //       />
  // // // //       Specific Date
  // // // //     </label>
  // // // //     <label>
  // // // //       <input
  // // // //         type="radio"
  // // // //         name="validity_type"
  // // // //         value="period"
  // // // //         checked={newProduct.validity_type === "period"}
  // // // //         onChange={handleValidityTypeChange}
  // // // //         className="mr-2"
  // // // //       />
  // // // //       Validity Period
  // // // //     </label>
  // // // //   </div>
  // // // //   {newProduct.validity_type === "date" && (
  // // // //     <input
  // // // //       type="date"
  // // // //       name="valid_till"
  // // // //       value={newProduct.valid_till}
  // // // //       onChange={handleInputChange}
  // // // //       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // //     />
  // // // //   )}
  // // // //   {newProduct.validity_type === "period" && (
  // // // //     <input
  // // // //       type="text"
  // // // //       name="valid_till"
  // // // //       placeholder="e.g., 6 months, 1 year"
  // // // //       value={newProduct.valid_till}
  // // // //       onChange={handleInputChange}
  // // // //       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // //     />
  // // // //   )}
  // // // // </div>
                
  // // // //               {newProduct.sale_price && newProduct.quantity && (
  // // // //                 <div className="p-4 bg-blue-50 rounded-lg">
  // // // //                   <p className="text-sm text-gray-600">Total Value: <span className="font-bold text-blue-700">₹{calculateTotalValue()}</span></p>
  // // // //                 </div>
  // // // //               )}
                
  // // // //               <motion.button
  // // // //                 whileHover={{ scale: 1.03 }}
  // // // //                 whileTap={{ scale: 0.98 }}
  // // // //                 onClick={handleAddOrEditProduct}
  // // // //                 disabled={!isFormValid()}
  // // // //                 className={`w-full p-4 rounded-lg font-medium text-white shadow-lg transition-all duration-300 
  // // // //                   ${!isFormValid() 
  // // // //                     ? 'bg-gray-300 cursor-not-allowed' 
  // // // //                     : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800'}`}
  // // // //               >
  // // // //                 {editIndex !== null ? "Update Product" : "Add Product"}
  // // // //               </motion.button>
                
  // // // //               {editIndex !== null && (
  // // // //                 <motion.button
  // // // //                   whileHover={{ scale: 1.03 }}
  // // // //                   whileTap={{ scale: 0.98 }}
  // // // //                   onClick={resetForm}
  // // // //                   className="w-full p-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300"
  // // // //                 >
  // // // //                   Cancel Edit
  // // // //                 </motion.button>
  // // // //               )}
  // // // //             </div>
  // // // //           </div>
  // // // //         </motion.section>

  // // // //         {/* Products Display Section */}
  // // // //         <motion.section 
  // // // //           initial={{ opacity: 0, x: 50 }}
  // // // //           animate={{ opacity: 1, x: 0 }}
  // // // //           transition={{ delay: 0.4 }}
  // // // //           className="lg:w-2/3"
  // // // //         >
  // // // //           {/* Search and Filters */}
  // // // //           <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
  // // // //             <div className="flex flex-col md:flex-row gap-4">
  // // // //               <div className="md:w-2/3">
  // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Search Products</label>
  // // // //                 <div className="relative">
  // // // //                   <input
  // // // //                     type="text"
  // // // //                     placeholder="Search by name or category..."
  // // // //                     value={searchQuery}
  // // // //                     onChange={handleSearchChange}
  // // // //                     className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // // //                   />
  // // // //                   <div className="absolute left-3 top-3.5 text-gray-400">
  // // // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  // // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  // // // //                     </svg>
  // // // //                   </div>
  // // // //                 </div>
  // // // //               </div>
                
  // // // //               <div className="md:w-1/3">
  // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Category</label>
  // // // //                 <select
  // // // //                   value={filterCategory}
  // // // //                   onChange={(e) => handleCategoryFilter(e.target.value)}
  // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-white"
  // // // //                 >
  // // // //                   {categories.map((category) => (
  // // // //                     <option key={category} value={category}>
  // // // //                       {category === "all" ? "All Categories" : category}
  // // // //                     </option>
  // // // //                   ))}
  // // // //                 </select>
  // // // //               </div>
  // // // //             </div>
  // // // //           </div>
            
  // // // //           {/* Products Grid */}
  // // // //           <div className="space-y-6">
  // // // //             <div className="flex justify-between items-center">
  // // // //               <h2 className="text-2xl font-bold text-gray-800">
  // // // //                 Products {searchQuery || filterCategory !== "all" ? "(Filtered)" : ""}
  // // // //               </h2>
  // // // //               <p className="text-gray-500">{filteredProducts.length} items</p>
  // // // //             </div>
              
  // // // //             <AnimatePresence>
  // // // //               {filteredProducts.length > 0 ? (
  // // // //                 <motion.div 
  // // // //                   layout
  // // // //                   className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
  // // // //                 >
  // // // //                   {filteredProducts.map((product, index) => (
  // // // //                     <motion.div
  // // // //                       key={product._id}
  // // // //                       layout
  // // // //                       initial={{ opacity: 0, scale: 0.9 }}
  // // // //                       animate={{ opacity: 1, scale: 1 }}
  // // // //                       exit={{ opacity: 0, scale: 0.9 }}
  // // // //                       whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
  // // // //                       transition={{ duration: 0.2 }}
  // // // //                       className="bg-white rounded-2xl overflow-hidden shadow-lg"
  // // // //                     >
  // // // //                       <div className={`h-2 ${product.stock_level < 10 ? 'bg-red-500' : 'bg-green-500'}`}></div>
  // // // //                       <div className="p-6">
  // // // //                         <div className="flex justify-between items-start mb-4">
  // // // //                           <h3 className="text-xl font-bold text-gray-800 line-clamp-2">{product.product_name}</h3>
  // // // //                           {product.image ? (
  // // // //                             <img 
  // // // //                               src={product.image} 
  // // // //                               alt={product.product_name} 
  // // // //                               className="w-16 h-16 rounded-lg object-cover ml-2 border-2 border-white shadow-md" 
  // // // //                             />
  // // // //                           ) : (
  // // // //                             <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center ml-2 text-gray-400">
  // // // //                               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  // // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  // // // //                               </svg>
  // // // //                             </div>
  // // // //                           )}
  // // // //                         </div>
                          
  // // // //                         <div className="grid grid-cols-2 gap-4 mb-4">
  // // // //                           <div className="text-sm">
  // // // //                             <p className="text-gray-500">Category</p>
  // // // //                             <p className="font-medium">{product.category}</p>
  // // // //                           </div>
  // // // //                           <div className="text-sm">
  // // // //                             <p className="text-gray-500">Supplier</p>
  // // // //                             <p className="font-medium">{product.supplier || "N/A"}</p>
  // // // //                           </div>
  // // // //                         </div>
                          
  // // // //                         <div className="grid grid-cols-2 gap-4 mb-4">
  // // // //                           <div className="text-sm">
  // // // //                             <p className="text-gray-500">Purchase Price</p>
  // // // //                             <p className="font-medium">₹{product.purchase_price}</p>
  // // // //                           </div>
  // // // //                           <div className="text-sm">
  // // // //                             <p className="text-gray-500">Sale Price</p>
  // // // //                             <p className="font-medium">₹{product.sale_price}</p>
  // // // //                           </div>
  // // // //                         </div>
                          
  // // // //                         <div className="grid grid-cols-2 gap-4 mb-4">
  // // // //                           <div className="text-sm">
  // // // //                             <p className="text-gray-500">Quantity</p>
  // // // //                             <p className="font-medium">{product.quantity} {product.units}</p>
  // // // //                           </div>
  // // // //                           <div className="text-sm">
  // // // //                             <p className="text-gray-500">Stock Level</p>
  // // // //                             <p className={`font-medium ${product.stock_level < 10 ? 'text-red-600' : 'text-green-600'}`}>
  // // // //                               {product.stock_level || "0"}
  // // // //                             </p>
  // // // //                           </div>
  // // // //                         </div>
                          
  // // // //                         <div className="grid grid-cols-2 gap-4 mb-4">
  // // // //                           <div className="text-sm">
  // // // //                             <p className="text-gray-500">Tax</p>
  // // // //                             <p className="font-medium">{product.tax || "0"}%</p>
  // // // //                           </div>
  // // // //                           <div className="text-sm">
  // // // //                             <p className="text-gray-500">Discount</p>
  // // // //                             <p className="font-medium">{product.discount || "0"}%</p>
  // // // //                           </div>
  // // // //                         </div>
                          
  // // // //                         <div className="grid grid-cols-2 gap-4 mb-4">
  // // // //                           <div className="text-sm">
  // // // //                             <p className="text-gray-500">Date of Manufacturing</p>
  // // // //                             <p className="font-medium">{product.date_of_manufacturing || "N/A"}</p>
  // // // //                           </div>
  // // // //                           <div className="text-sm">
  // // // //                             <p className="text-gray-500">Valid Till</p>
  // // // //                             <p className="font-medium">{product.valid_till || "N/A"}</p>
  // // // //                           </div>
  // // // //                         </div>
                          
  // // // //                         <div className="bg-blue-50 p-3 rounded-lg mb-4">
  // // // //                           <div className="flex justify-between">
  // // // //                             <p className="text-gray-600 font-medium">Total Value:</p>
  // // // //                             <p className="text-blue-700 font-bold">₹{product.total_value}</p>
  // // // //                           </div>
  // // // //                         </div>
                          
  // // // //                         <div className="flex gap-3 mt-4">
  // // // //                           <motion.button
  // // // //                             whileHover={{ scale: 1.05 }}
  // // // //                             whileTap={{ scale: 0.95 }}
  // // // //                             onClick={() => handleEditProduct(index)}
  // // // //                             className="flex-1 py-2.5 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-all duration-300 flex items-center justify-center"
  // // // //                           >
  // // // //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  // // // //                             </svg>
  // // // //                             Edit
  // // // //                           </motion.button>
                            
  // // // //                           <motion.button
  // // // //                             whileHover={{ scale: 1.05 }}
  // // // //                             whileTap={{ scale: 0.95 }}
  // // // //                             onClick={() => handleDeleteProduct(product._id, index)}
  // // // //                             className="flex-1 py-2.5 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition-all duration-300 flex items-center justify-center"
  // // // //                           >
  // // // //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  // // // //                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  // // // //                             </svg>
  // // // //                             Delete
  // // // //                           </motion.button>
  // // // //                         </div>
  // // // //                       </div>
  // // // //                     </motion.div>
  // // // //                   ))}
  // // // //                 </motion.div>
  // // // //               ) : (
  // // // //                 <motion.div
  // // // //                   initial={{ opacity: 0, y: 20 }}
  // // // //                   animate={{ opacity: 1, y: 0 }}
  // // // //                   exit={{ opacity: 0, y: 20 }}
  // // // //                   className="bg-white rounded-2xl p-8 shadow-lg text-center"
  // // // //                 >
  // // // //                   <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  // // // //                   </svg>
  // // // //                   <p className="mt-4 text-gray-600">No products found. Start adding some!</p>
  // // // //                 </motion.div>
  // // // //               )}
  // // // //             </AnimatePresence>
  // // // //           </div>
  // // // //         </motion.section>
  // // // //       </div>
  // // // //     </div>
  // // // //   );
  // // // // };

  // // // // export default ProductDashboard;

  // // // import React, { useState, useEffect, useContext } from "react";
  // // // import { StoreContext } from "./StoreContext";
  // // // import { motion, AnimatePresence } from "framer-motion";

  // // // const ProductDashboard = () => {
  // // //   const [products, setProducts] = useState([]);
  // // //   const { storeName, storeId } = useContext(StoreContext);
  // // //   const [newProduct, setNewProduct] = useState({
  // // //     product_name: "",
  // // //     quantity: "",
  // // //     units: "",
  // // //     category: "",
  // // //     purchase_price: "",
  // // //     sale_price: "",
  // // //     tax: "",
  // // //     discount: "",
  // // //     image: "",
  // // //     stock_level: "",
  // // //     supplier: "",
  // // //     date_of_manufacturing: "",
  // // //     valid_till: "",
  // // //   });

  // // //   const [editIndex, setEditIndex] = useState(null);
  // // //   const [editId, setEditId] = useState(null);
  // // //   const [searchQuery, setSearchQuery] = useState("");
  // // //   const [filterCategory, setFilterCategory] = useState("all");
  // // //   const [errorMessage, setErrorMessage] = useState(null);
  // // //   const [successMessage, setSuccessMessage] = useState(null);
  // // //   const [isLoading, setIsLoading] = useState(true);
  // // //   const API_URL = "http://127.0.0.1:5000/products";

  // // //   useEffect(() => {
  // // //     if (storeId) {
  // // //       setIsLoading(true);
  // // //       fetch(`${API_URL}?storeId=${storeId}`)
  // // //         .then((res) => {
  // // //           if (!res.ok) throw new Error(`Error: ${res.status}`);
  // // //           return res.json();
  // // //         })
  // // //         .then((data) => {
  // // //           setProducts(data);
  // // //           setIsLoading(false);
  // // //         })
  // // //         .catch((err) => {
  // // //           console.error("Error fetching products:", err);
  // // //           setErrorMessage("Failed to fetch products. Please try again.");
  // // //           setIsLoading(false);
  // // //         });
  // // //     }
  // // //   }, [storeId]);

  // // //   useEffect(() => {
  // // //     if (successMessage) {
  // // //       const timer = setTimeout(() => {
  // // //         setSuccessMessage(null);
  // // //       }, 3000);
  // // //       return () => clearTimeout(timer);
  // // //     }
  // // //   }, [successMessage]);

  // // //   const resetForm = () => {
  // // //     setNewProduct({
  // // //       product_name: "",
  // // //       quantity: "",
  // // //       units: "",
  // // //       category: "",
  // // //       purchase_price: "",
  // // //       sale_price: "",
  // // //       tax: "",
  // // //       discount: "",
  // // //       image: "",
  // // //       stock_level: "",
  // // //       supplier: "",
  // // //       date_of_manufacturing: "",
  // // //       valid_till: "",
  // // //     });
  // // //     setEditIndex(null);
  // // //     setEditId(null);
  // // //   };

  // // //   const handleInputChange = (e) => {
  // // //     const { name, value } = e.target;
  // // //     setNewProduct((prev) => ({ ...prev, [name]: value }));
  // // //   };

  // // //   const handleSearchChange = (e) => {
  // // //     setSearchQuery(e.target.value);
  // // //   };

  // // //   const handleCategoryFilter = (category) => {
  // // //     setFilterCategory(category);
  // // //   };

  // // //   const calculateTotalValue = () => {
  // // //     const { sale_price, quantity, discount } = newProduct;
  // // //     const totalValue =
  // // //       sale_price * quantity - (discount > 0 ? (sale_price * quantity * discount) / 100 : 0);
  // // //     return totalValue.toFixed(2);
  // // //   };

  // // //   const isFormValid = () => {
  // // //     const { product_name, quantity, units, category, purchase_price, sale_price } = newProduct;
  // // //     return product_name && quantity > 0 && units && category && purchase_price > 0 && sale_price > 0;
  // // //   };

  // // //   const handleAddOrEditProduct = () => {
  // // //     if (!isFormValid()) return;

  // // //     setIsLoading(true);
  // // //     const totalValue = calculateTotalValue();
  // // //     const dateAdded = new Date().toISOString().split("T")[0];
  // // //     const updatedProduct = { ...newProduct, total_value: totalValue, dateAdded };

  // // //     const url = editIndex !== null ? `${API_URL}/${editId}?storeId=${storeId}` : `${API_URL}?storeId=${storeId}`;
  // // //     const method = editIndex !== null ? "PUT" : "POST";

  // // //     fetch(url, {
  // // //       method,
  // // //       headers: { "Content-Type": "application/json" },
  // // //       body: JSON.stringify(updatedProduct),
  // // //     })
  // // //       .then((res) => res.json())
  // // //       .then((data) => {
  // // //         if (data.message.includes("successfully")) {
  // // //           const updatedProducts = editIndex !== null
  // // //             ? products.map((p, idx) => (idx === editIndex ? { ...updatedProduct, _id: editId } : p))
  // // //             : [...products, { ...updatedProduct, _id: data.product_id }];
  // // //           setProducts(updatedProducts);
  // // //           resetForm();
  // // //           setSuccessMessage(`Product ${editIndex !== null ? "updated" : "added"} successfully!`);
  // // //         } else {
  // // //           setErrorMessage("Failed to process product. Please try again.");
  // // //         }
  // // //         setIsLoading(false);
  // // //       })
  // // //       .catch((err) => {
  // // //         console.error(`Error ${method === "POST" ? "adding" : "updating"} product:`, err);
  // // //         setErrorMessage("An error occurred. Please try again.");
  // // //         setIsLoading(false);
  // // //       });
  // // //   };

  // // //   const handleEditProduct = (index) => {
  // // //     const selectedProduct = products[index];
  // // //     setNewProduct(selectedProduct);
  // // //     setEditIndex(index);
  // // //     setEditId(selectedProduct._id);
  // // //     document.getElementById("imageInput").value = "";
      
  // // //     // Scroll to form
  // // //     document.querySelector(".product-form-section").scrollIntoView({ 
  // // //       behavior: "smooth",
  // // //       block: "start"
  // // //     });
  // // //   };

  // // //   const handleFileChange = (e) => {
  // // //     const file = e.target.files[0];
  // // //     if (!file) return;

  // // //     const formData = new FormData();
  // // //     formData.append("file", file);
  // // //     formData.append("upload_preset", "your_preset_name");

  // // //     setIsLoading(true);
  // // //     fetch("https://api.cloudinary.com/v1_1/your_cloud_name/upload", {
  // // //       method: "POST",
  // // //       body: formData,
  // // //     })
  // // //       .then((res) => res.json())
  // // //       .then((data) => {
  // // //         setNewProduct((prev) => ({ ...prev, image: data.secure_url }));
  // // //         setIsLoading(false);
  // // //       })
  // // //       .catch((err) => {
  // // //         console.error("Error uploading image:", err);
  // // //         setErrorMessage("Failed to upload image. Please try again.");
  // // //         setIsLoading(false);
  // // //       });
  // // //   };

  // // //   const handleValidityTypeChange = (e) => {
  // // //     const { value } = e.target;
  // // //     setNewProduct((prev) => ({ ...prev, validity_type: value, valid_till: "" })); // Reset valid_till when changing type
  // // //   };  

  // // //   const handleDeleteProduct = (id, index) => {
  // // //     if (window.confirm("Are you sure you want to delete this product?")) {
  // // //       setIsLoading(true);
  // // //       fetch(`${API_URL}/${id}?storeId=${storeId}`, { method: "DELETE" })
  // // //         .then((res) => {
  // // //           if (!res.ok) throw new Error("Failed to delete product.");
  // // //           setProducts((prev) => prev.filter((_, i) => i !== index));
  // // //           setSuccessMessage("Product deleted successfully!");
  // // //           setIsLoading(false);
  // // //         })
  // // //         .catch((err) => {
  // // //           console.error("Error deleting product:", err);
  // // //           setErrorMessage("Failed to delete product. Please try again.");
  // // //           setIsLoading(false);
  // // //         });
  // // //     }
  // // //   };

  // // //   // Get unique categories for filter
  // // //   const categories = ["all", ...new Set(products.map(product => product.category))];

  // // //   const filteredProducts = products.filter((product) => {
  // // //     const matchesSearch = product.product_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
  // // //                          product.category?.toLowerCase().includes(searchQuery.toLowerCase());
  // // //     const matchesCategory = filterCategory === "all" || product.category === filterCategory;
  // // //     return matchesSearch && matchesCategory;
  // // //   });

  // // //   return (
  // // //     <div className="font-poppins bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen p-6 text-gray-800">
  // // //       {/* Notification system */}
  // // //       <AnimatePresence>
  // // //         {successMessage && (
  // // //           <motion.div 
  // // //             initial={{ opacity: 0, y: -50 }}
  // // //             animate={{ opacity: 1, y: 0 }}
  // // //             exit={{ opacity: 0, y: -50 }}
  // // //             className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
  // // //           >
  // // //             {successMessage}
  // // //           </motion.div>
  // // //         )}
          
  // // //         {errorMessage && (
  // // //           <motion.div 
  // // //             initial={{ opacity: 0, y: -50 }}
  // // //             animate={{ opacity: 1, y: 0 }}
  // // //             exit={{ opacity: 0, y: -50 }}
  // // //             className="fixed top-6 right-6 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
  // // //             onClick={() => setErrorMessage(null)}
  // // //           >
  // // //             {errorMessage}
  // // //           </motion.div>
  // // //         )}
  // // //       </AnimatePresence>
        
  // // //       {/* Loading overlay */}
  // // //       <AnimatePresence>
  // // //         {isLoading && (
  // // //           <motion.div 
  // // //             initial={{ opacity: 0 }}
  // // //             animate={{ opacity: 1 }}
  // // //             exit={{ opacity: 0 }}
  // // //             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  // // //           >
  // // //             <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
  // // //               <div className="loader w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
  // // //               <p className="mt-4 text-gray-700">Loading...</p>
  // // //             </div>
  // // //           </motion.div>
  // // //         )}
  // // //       </AnimatePresence>

  // // //       {/* Header */}
  // // //       <motion.header 
  // // //         initial={{ y: -100, opacity: 0 }}
  // // //         animate={{ y: 0, opacity: 1 }}
  // // //         transition={{ duration: 0.5 }}
  // // //         className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 px-8 rounded-2xl shadow-xl mb-10"
  // // //       >
  // // //         <div className="container mx-auto">
  // // //           <h1 className="text-4xl font-extrabold tracking-tight">
  // // //             <span className="block text-xl mb-1 text-blue-200">Welcome to</span>
  // // //             {storeName}'s Product Dashboard
  // // //           </h1>
  // // //           <p className="mt-2 text-blue-200 max-w-xl">
  // // //             Manage your inventory, track sales, and optimize your product offerings all in one place.
  // // //           </p>
  // // //         </div>
  // // //       </motion.header>

  // // //       {/* Statistics Overview */}
  // // //       <motion.section 
  // // //         initial={{ opacity: 0, y: 20 }}
  // // //         animate={{ opacity: 1, y: 0 }}
  // // //         transition={{ delay: 0.2 }}
  // // //         className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10"
  // // //       >
  // // //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
  // // //           <h3 className="text-gray-500 text-sm font-medium">Total Products</h3>
  // // //           <p className="text-3xl font-bold text-gray-800 mt-2">{products.length}</p>
  // // //         </div>
          
  // // //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500">
  // // //           <h3 className="text-gray-500 text-sm font-medium">Categories</h3>
  // // //           <p className="text-3xl font-bold text-gray-800 mt-2">{categories.length - 1}</p>
  // // //         </div>
          
  // // //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
  // // //           <h3 className="text-gray-500 text-sm font-medium">Total Value</h3>
  // // //           <p className="text-3xl font-bold text-gray-800 mt-2">
  // // //             ₹{products.reduce((sum, product) => sum + Number(product.total_value || 0), 0).toFixed(2)}
  // // //           </p>
  // // //         </div>
          
  // // //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
  // // //           <h3 className="text-gray-500 text-sm font-medium">Low Stock Items</h3>
  // // //           <p className="text-3xl font-bold text-gray-800 mt-2">
  // // //             {products.filter(product => Number(product.stock_level) < 10).length}
  // // //           </p>
  // // //         </div>
  // // //       </motion.section>

  // // //       <div className="flex flex-col lg:flex-row gap-10">
  // // //         {/* Add/Edit Product Form */}
  // // //         <motion.section 
  // // //           initial={{ opacity: 0, x: -50 }}
  // // //           animate={{ opacity: 1, x: 0 }}
  // // //           transition={{ delay: 0.3 }}
  // // //           className="product-form-section lg:w-1/3"
  // // //         >
  // // //           <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
  // // //             <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
  // // //               {editIndex !== null ? "Edit Product" : "Add New Product"}
  // // //             </h2>
              
  // // //             <div className="space-y-4">
  // // //               <div>
  // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
  // // //                 <input
  // // //                   type="text"
  // // //                   name="product_name"
  // // //                   placeholder="Enter product name"
  // // //                   value={newProduct.product_name}
  // // //                   onChange={handleInputChange}
  // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // //                 />
  // // //               </div>
                
  // // //               <div className="grid grid-cols-2 gap-4">
  // // //                 <div>
  // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
  // // //                   <input
  // // //                     type="number"
  // // //                     name="quantity"
  // // //                     placeholder="0"
  // // //                     value={newProduct.quantity}
  // // //                     onChange={handleInputChange}
  // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // //                   />
  // // //                 </div>
                  
  // // //                 <div>
  // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Units</label>
  // // //                   <select
  // // //                     name="units"
  // // //                     value={newProduct.units}
  // // //                     onChange={handleInputChange}
  // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-white"
  // // //                   >
  // // //                     <option value="">Select Unit</option>
  // // //                     <option value="Bag">BAGS (Bag)</option>
  // // //                     <option value="Btl">BOTTLES (Btl)</option>
  // // //                     <option value="Box">BOX (Box)</option>
  // // //                     <option value="Bdl">BUNDLES (Bdl)</option>
  // // //                     <option value="Can">CANS (Can)</option>
  // // //                     <option value="Ctn">CARTONS (Ctn)</option>
  // // //                     <option value="Dzn">DOZENS (Dzn)</option>
  // // //                     <option value="Kg">KILOGRAMS (Kg)</option>
  // // //                     <option value="Gm">GRAMMES (Gm)</option>
  // // //                     <option value="Ltr">LITRE (Ltr)</option>
  // // //                     <option value="Mtr">METERS (Mtr)</option>
  // // //                     <option value="Ml">MILLILITRE (Ml)</option>
  // // //                     <option value="Nos">NUMBERS (Nos)</option>
  // // //                     <option value="Pac">PACKS (Pac)</option>
  // // //                     <option value="Prs">PAIRS (Prs)</option>
  // // //                     <option value="Pcs">PIECES (Pcs)</option>
  // // //                     <option value="Qt">QUINTAL (Qt)</option>
  // // //                     <option value="Rol">ROLLS (Rol)</option>
  // // //                     <option value="Sqf">SQUARE FEET (Sqf)</option>
  // // //                   </select>
  // // //                 </div>
  // // //               </div>
                
  // // //               <div>
  // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
  // // //                 <input
  // // //                   type="text"
  // // //                   name="category"
  // // //                   placeholder="Enter category"
  // // //                   value={newProduct.category}
  // // //                   onChange={handleInputChange}
  // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // //                 />
  // // //               </div>
                
  // // //               <div className="grid grid-cols-2 gap-4">
  // // //                 <div>
  // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Purchase Price (₹)</label>
  // // //                   <input
  // // //                     type="number"
  // // //                     name="purchase_price"
  // // //                     placeholder="0.00"
  // // //                     value={newProduct.purchase_price}
  // // //                     onChange={handleInputChange}
  // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // //                   />
  // // //                 </div>
                  
  // // //                 <div>
  // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Sale Price (₹)</label>
  // // //                   <input
  // // //                     type="number"
  // // //                     name="sale_price"
  // // //                     placeholder="0.00"
  // // //                     value={newProduct.sale_price}
  // // //                     onChange={handleInputChange}
  // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // //                   />
  // // //                 </div>
  // // //               </div>
                
  // // //               <div className="grid grid-cols-2 gap-4">
  // // //                 <div>
  // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Tax (%)</label>
  // // //                   <input
  // // //                     type="number"
  // // //                     name="tax"
  // // //                     placeholder="0"
  // // //                     value={newProduct.tax}
  // // //                     onChange={handleInputChange}
  // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // //                   />
  // // //                 </div>
                  
  // // //                 <div>
  // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Discount (%)</label>
  // // //                   <input
  // // //                     type="number"
  // // //                     name="discount"
  // // //                     placeholder="0"
  // // //                     value={newProduct.discount}
  // // //                     onChange={handleInputChange}
  // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // //                   />
  // // //                 </div>
  // // //               </div>
                
  // // //               <div>
  // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
  // // //                 <input
  // // //                   type="file"
  // // //                   name="image"
  // // //                   id="imageInput"
  // // //                   onChange={handleFileChange}
  // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // //                 />
  // // //                 {newProduct.image && (
  // // //                   <div className="mt-4 flex justify-center">
  // // //                     <img 
  // // //                       src={newProduct.image} 
  // // //                       alt="Product" 
  // // //                       className="w-32 h-32 rounded-lg object-cover border-4 border-white shadow-lg" 
  // // //                     />
  // // //                   </div>
  // // //                 )}
  // // //               </div>
                
  // // //               <div>
  // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Stock Level</label>
  // // //                 <input
  // // //                   type="number"
  // // //                   name="stock_level"
  // // //                   placeholder="Current stock quantity"
  // // //                   value={newProduct.stock_level}
  // // //                   onChange={handleInputChange}
  // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // //                 />
  // // //               </div>
                
  // // //               <div>
  // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Supplier</label>
  // // //                 <input
  // // //                   type="text"
  // // //                   name="supplier"
  // // //                   placeholder="Supplier name"
  // // //                   value={newProduct.supplier}
  // // //                   onChange={handleInputChange}
  // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // //                 />
  // // //               </div>

  // // //               <div>
  // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Date of Manufacturing</label>
  // // //                 <input
  // // //                   type="date"
  // // //                   name="date_of_manufacturing"
  // // //                   value={newProduct.date_of_manufacturing}
  // // //                   onChange={handleInputChange}
  // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // //                 />
  // // //               </div>

  // // //               <div>
  // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Valid Till</label>
  // // //                 <div className="flex items-center mb-2">
  // // //                   <label className="mr-4">
  // // //                     <input
  // // //                       type="radio"
  // // //                       name="validity_type"
  // // //                       value="date"
  // // //                       checked={newProduct.validity_type === "date"}
  // // //                       onChange={handleValidityTypeChange}
  // // //                       className="mr-2"
  // // //                     />
  // // //                     Specific Date
  // // //                   </label>
  // // //                   <label>
  // // //                     <input
  // // //                       type="radio"
  // // //                       name="validity_type"
  // // //                       value="period"
  // // //                       checked={newProduct.validity_type === "period"}
  // // //                       onChange={handleValidityTypeChange}
  // // //                       className="mr-2"
  // // //                     />
  // // //                     Validity Period
  // // //                   </label>
  // // //                 </div>
  // // //                 {newProduct.validity_type === "date" && (
  // // //                   <input
  // // //                     type="date"
  // // //                     name="valid_till"
  // // //                     value={newProduct.valid_till}
  // // //                     onChange={handleInputChange}
  // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // //                   />
  // // //                 )}
  // // //                 {newProduct.validity_type === "period" && (
  // // //                   <input
  // // //                     type="text"
  // // //                     name="valid_till"
  // // //                     placeholder="e.g., 6 months, 1 year"
  // // //                     value={newProduct.valid_till}
  // // //                     onChange={handleInputChange}
  // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // //                   />
  // // //                 )}
  // // //               </div>
                
  // // //               {newProduct.sale_price && newProduct.quantity && (
  // // //                 <div className="p-4 bg-blue-50 rounded-lg">
  // // //                   <p className="text-sm text-gray-600">Total Value: <span className="font-bold text-blue-700">₹{calculateTotalValue()}</span></p>
  // // //                 </div>
  // // //               )}
                
  // // //               <motion.button
  // // //                 whileHover={{ scale: 1.03 }}
  // // //                 whileTap={{ scale: 0.98 }}
  // // //                 onClick={handleAddOrEditProduct}
  // // //                 disabled={!isFormValid()}
  // // //                 className={`w-full p-4 rounded-lg font-medium text-white shadow-lg transition-all duration-300 
  // // //                   ${!isFormValid() 
  // // //                     ? 'bg-gray-300 cursor-not-allowed' 
  // // //                     : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800'}`}
  // // //               >
  // // //                 {editIndex !== null ? "Update Product" : "Add Product"}
  // // //               </motion.button>
                
  // // //               {editIndex !== null && (
  // // //                 <motion.button
  // // //                   whileHover={{ scale: 1.03 }}
  // // //                   whileTap={{ scale: 0.98 }}
  // // //                   onClick={resetForm}
  // // //                   className="w-full p-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300"
  // // //                 >
  // // //                   Cancel Edit
  // // //                 </motion.button>
  // // //               )}
  // // //             </div>
  // // //           </div>
  // // //         </motion.section>

  // // //         {/* Products Display Section */}
  // // //         <motion.section 
  // // //           initial={{ opacity: 0, x: 50 }}
  // // //           animate={{ opacity: 1, x: 0 }}
  // // //           transition={{ delay: 0.4 }}
  // // //           className="lg:w-2/3"
  // // //         >
  // // //           {/* Search and Filters */}
  // // //           <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
  // // //             <div className="flex flex-col md:flex-row gap-4">
  // // //               <div className="md:w-2/3">
  // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Search Products</label>
  // // //                 <div className="relative">
  // // //                   <input
  // // //                     type="text"
  // // //                     placeholder="Search by name or category..."
  // // //                     value={searchQuery}
  // // //                     onChange={handleSearchChange}
  // // //                     className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // // //                   />
  // // //                   <div className="absolute left-3 top-3.5 text-gray-400">
  // // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  // // //                     </svg>
  // // //                   </div>
  // // //                 </div>
  // // //               </div>
                
  // // //               <div className="md:w-1/3">
  // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Category</label>
  // // //                 <select
  // // //                   value={filterCategory}
  // // //                   onChange={(e) => handleCategoryFilter(e.target.value)}
  // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-white"
  // // //                 >
  // // //                   {categories.map((category) => (
  // // //                     <option key={category} value={category}>
  // // //                       {category === "all" ? "All Categories" : category}
  // // //                     </option>
  // // //                   ))}
  // // //                 </select>
  // // //               </div>
  // // //             </div>
  // // //           </div>
            
  // // //           {/* Products Grid */}
  // // //           <div className="space-y-6">
  // // //             <div className="flex justify-between items-center">
  // // //               <h2 className="text-2xl font-bold text-gray-800">
  // // //                 Products {searchQuery || filterCategory !== "all" ? "(Filtered)" : ""}
  // // //               </h2>
  // // //               <p className="text-gray-500">{filteredProducts.length} items</p>
  // // //             </div>
              
  // // //             <AnimatePresence>
  // // //               {filteredProducts.length > 0 ? (
  // // //                 <motion.div 
  // // //                   layout
  // // //                   className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
  // // //                 >
  // // //                   {filteredProducts.map((product, index) => (
  // // //                     <motion.div
  // // //                       key={product._id}
  // // //                       layout
  // // //                       initial={{ scale: 1 }} // Ensured 100% opacity
  // // //                       animate={{ scale: 1 }} // Keep scale at 1
  // // //                       exit={{ scale: 0.9 }} // Slightly reduce scale on exit
  // // //                       whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }} // Add shadow effect on hover
  // // //                       className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200" // Add border for clarity
  // // //                     >
  // // //                       <div className={`h-2 ${product.stock_level < 10 ? 'bg-red-500' : 'bg-green-500'}`}></div>
  // // //                       <div className="p-6">
  // // //                         <div className="flex justify-between items-start mb-4">
  // // //                           <h3 className="text-xl font-bold text-gray-800 line-clamp-2">{product.product_name}</h3>
  // // //                           {product.image ? (
  // // //                             <img 
  // // //                               src={product.image} 
  // // //                               alt={product.product_name} 
  // // //                               className="w-16 h-16 rounded-lg object-cover ml-2 border-2 border-white shadow-md" 
  // // //                             />
  // // //                           ) : (
  // // //                             <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center ml-2 text-gray-400">
  // // //                               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  // // //                               </svg>
  // // //                             </div>
  // // //                           )}
  // // //                         </div>
                          
  // // //                         <div className="grid grid-cols-2 gap-4 mb-4">
  // // //                           <div className="text-sm">
  // // //                             <p className="text-gray-500">Category</p>
  // // //                             <p className="font-medium">{product.category}</p>
  // // //                           </div>
  // // //                           <div className="text-sm">
  // // //                             <p className="text-gray-500">Supplier</p>
  // // //                             <p className="font-medium">{product.supplier || "N/A"}</p>
  // // //                           </div>
  // // //                         </div>
                          
  // // //                         <div className="grid grid-cols-2 gap-4 mb-4">
  // // //                           <div className="text-sm">
  // // //                             <p className="text-gray-500">Purchase Price</p>
  // // //                             <p className="font-medium">₹{product.purchase_price}</p>
  // // //                           </div>
  // // //                           <div className="text-sm">
  // // //                             <p className="text-gray-500">Sale Price</p>
  // // //                             <p className="font-medium">₹{product.sale_price}</p>
  // // //                           </div>
  // // //                         </div>
                          
  // // //                         <div className="grid grid-cols-2 gap-4 mb-4">
  // // //                           <div className="text-sm">
  // // //                             <p className="text-gray-500">Quantity</p>
  // // //                             <p className="font-medium">{product.quantity} {product.units}</p>
  // // //                           </div>
  // // //                           <div className="text-sm">
  // // //                             <p className="text-gray-500">Stock Level</p>
  // // //                             <p className={`font-medium ${product.stock_level < 10 ? 'text-red-600' : 'text-green-600'}`}>
  // // //                               {product.stock_level || "0"}
  // // //                             </p>
  // // //                           </div>
  // // //                         </div>
                          
  // // //                         <div className="grid grid-cols-2 gap-4 mb-4">
  // // //                           <div className="text-sm">
  // // //                             <p className="text-gray-500">Tax</p>
  // // //                             <p className="font-medium">{product.tax || "0"}%</p>
  // // //                           </div>
  // // //                           <div className="text-sm">
  // // //                             <p className="text-gray-500">Discount</p>
  // // //                             <p className="font-medium">{product.discount || "0"}%</p>
  // // //                           </div>
  // // //                         </div>
                          
  // // //                         <div className="grid grid-cols-2 gap-4 mb-4">
  // // //                           <div className="text-sm">
  // // //                             <p className="text-gray-500">Date of Manufacturing</p>
  // // //                             <p className="font-medium">{product.date_of_manufacturing || "N/A"}</p>
  // // //                           </div>
  // // //                           <div className="text-sm">
  // // //                             <p className="text-gray-500">Valid Till</p>
  // // //                             <p className="font-medium">{product.valid_till || "N/A"}</p>
  // // //                           </div>
  // // //                         </div>
                          
  // // //                         <div className="bg-blue-50 p-3 rounded-lg mb-4">
  // // //                           <div className="flex justify-between">
  // // //                             <p className="text-gray-600 font-medium">Total Value:</p>
  // // //                             <p className="text-blue-700 font-bold">₹{product.total_value}</p>
  // // //                           </div>
  // // //                         </div>
                          
  // // //                         <div className="flex gap-3 mt-4">
  // // //                           <motion.button
  // // //                             whileHover={{ scale: 1.05 }}
  // // //                             whileTap={{ scale: 0.95 }}
  // // //                             onClick={() => handleEditProduct(index)}
  // // //                             className="flex-1 py-2.5 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-all duration-300 flex items-center justify-center"
  // // //                           >
  // // //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  // // //                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  // // //                             </svg>
  // // //                             Edit
  // // //                           </motion.button>
                            
  // // //                           <motion.button
  // // //                             whileHover={{ scale: 1.05 }}
  // // //                             whileTap={{ scale: 0.95 }}
  // // //                             onClick={() => handleDeleteProduct(product._id, index)}
  // // //                             className="flex-1 py-2.5 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition-all duration-300 flex items-center justify-center"
  // // //                           >
  // // //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  // // //                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  // // //                             </svg>
  // // //                             Delete
  // // //                           </motion.button>
  // // //                         </div>
  // // //                       </div>
  // // //                     </motion.div>
  // // //                   ))}
  // // //                 </motion.div>
  // // //               ) : (
  // // //                 <motion.div
  // // //                   initial={{ opacity: 0, y: 20 }}
  // // //                   animate={{ opacity: 1, y: 0 }}
  // // //                   exit={{ opacity: 0, y: 20 }}
  // // //                   className="bg-white rounded-2xl p-8 shadow-lg text-center"
  // // //                 >
  // // //                   <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8                     4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  // // //                   </svg>
  // // //                   <p className="mt-4 text-gray-600">No products found. Start adding some!</p>
  // // //                 </motion.div>
  // // //               )}
  // // //             </AnimatePresence>
  // // //           </div>
  // // //         </motion.section>
  // // //       </div>
  // // //     </div>
  // // //   );
  // // // };

  // // // export default ProductDashboard;

  // // import React, { useState, useEffect, useContext } from "react";
  // // import { StoreContext } from "./StoreContext";
  // // import { motion, AnimatePresence } from "framer-motion";

  // // const ProductDashboard = () => {
  // //   const [products, setProducts] = useState([]);
  // //   const { storeName, storeId } = useContext(StoreContext);
  // //   const [newProduct, setNewProduct] = useState({
  // //     product_name: "",
  // //     quantity: "",
  // //     units: "",
  // //     category: "",
  // //     purchase_price: "",
  // //     sale_price: "",
  // //     tax: "",
  // //     discount: "",
  // //     image: "",
  // //     stock_level: "",
  // //     supplier: "",
  // //     date_of_manufacturing: "",
  // //     valid_till: "",
  // //   });

  // //   const [editIndex, setEditIndex] = useState(null);
  // //   const [editId, setEditId] = useState(null);
  // //   const [searchQuery, setSearchQuery] = useState("");
  // //   const [filterCategory, setFilterCategory] = useState("all");
  // //   const [errorMessage, setErrorMessage] = useState(null);
  // //   const [successMessage, setSuccessMessage] = useState(null);
  // //   const [isLoading, setIsLoading] = useState(true);
  // //   const [viewAsTable, setViewAsTable] = useState(false); // State for view toggle
  // //   const API_URL = "http://127.0.0.1:5000/products";

  // //   useEffect(() => {
  // //     if (storeId) {
  // //       setIsLoading(true);
  // //       fetch(`${API_URL}?storeId=${storeId}`)
  // //         .then((res) => {
  // //           if (!res.ok) throw new Error(`Error: ${res.status}`);
  // //           return res.json();
  // //         })
  // //         .then((data) => {
  // //           setProducts(data);
  // //           setIsLoading(false);
  // //         })
  // //         .catch((err) => {
  // //           console.error("Error fetching products:", err);
  // //           setErrorMessage("Failed to fetch products. Please try again.");
  // //           setIsLoading(false);
  // //         });
  // //     }
  // //   }, [storeId]);

  // //   useEffect(() => {
  // //     if (successMessage) {
  // //       const timer = setTimeout(() => {
  // //         setSuccessMessage(null);
  // //       }, 3000);
  // //       return () => clearTimeout(timer);
  // //     }
  // //   }, [successMessage]);

  // //   const resetForm = () => {
  // //     setNewProduct({
  // //       product_name: "",
  // //       quantity: "",
  // //       units: "",
  // //       category: "",
  // //       purchase_price: "",
  // //       sale_price: "",
  // //       tax: "",
  // //       discount: "",
  // //       image: "",
  // //       stock_level: "",
  // //       supplier: "",
  // //       date_of_manufacturing: "",
  // //       valid_till: "",
  // //     });
  // //     setEditIndex(null);
  // //     setEditId(null);
  // //   };

  // //   const handleInputChange = (e) => {
  // //     const { name, value } = e.target;
  // //     setNewProduct((prev) => ({ ...prev, [name]: value }));
  // //   };

  // //   const handleSearchChange = (e) => {
  // //     setSearchQuery(e.target.value);
  // //   };

  // //   const handleCategoryFilter = (category) => {
  // //     setFilterCategory(category);
  // //   };

  // //   const calculateTotalValue = () => {
  // //     const { sale_price, quantity, discount } = newProduct;
  // //     const totalValue =
  // //       sale_price * quantity - (discount > 0 ? (sale_price * quantity * discount) / 100 : 0);
  // //     return totalValue.toFixed(2);
  // //   };

  // //   const isFormValid = () => {
  // //     const { product_name, quantity, units, category, purchase_price, sale_price } = newProduct;
  // //     return product_name && quantity > 0 && units && category && purchase_price > 0 && sale_price > 0;
  // //   };

  // //   const handleAddOrEditProduct = () => {
  // //     if (!isFormValid()) return;

  // //     setIsLoading(true);
  // //     const totalValue = calculateTotalValue();
  // //     const dateAdded = new Date().toISOString().split("T")[0];
  // //     const updatedProduct = { ...newProduct, total_value: totalValue, dateAdded };

  // //     const url = editIndex !== null ? `${API_URL}/${editId}?storeId=${storeId}` : `${API_URL}?storeId=${storeId}`;
  // //     const method = editIndex !== null ? "PUT" : "POST";

  // //     fetch(url, {
  // //       method,
  // //       headers: { "Content-Type": "application/json" },
  // //       body: JSON.stringify(updatedProduct),
  // //     })
  // //       .then((res) => res.json())
  // //       .then((data) => {
  // //         if (data.message.includes("successfully")) {
  // //           const updatedProducts = editIndex !== null
  // //             ? products.map((p, idx) => (idx === editIndex ? { ...updatedProduct, _id: editId } : p))
  // //             : [...products, { ...updatedProduct, _id: data.product_id }];
  // //           setProducts(updatedProducts);
  // //           resetForm();
  // //           setSuccessMessage(`Product ${editIndex !== null ? "updated" : "added"} successfully!`);
  // //         } else {
  // //           setErrorMessage("Failed to process product. Please try again.");
  // //         }
  // //         setIsLoading(false);
  // //       })
  // //       .catch((err) => {
  // //         console.error(`Error ${method === "POST" ? "adding" : "updating"} product:`, err);
  // //         setErrorMessage("An error occurred. Please try again.");
  // //         setIsLoading(false);
  // //       });
  // //   };

  // //   const handleEditProduct = (index) => {
  // //     const selectedProduct = products[index];
  // //     setNewProduct(selectedProduct);
  // //     setEditIndex(index);
  // //     setEditId(selectedProduct._id);
  // //     document.getElementById("imageInput").value = "";
      
  // //     // Scroll to form
  // //     document.querySelector(".product-form-section").scrollIntoView({ 
  // //       behavior: "smooth",
  // //       block: "start"
  // //     });
  // //   };

  // //   const handleFileChange = (e) => {
  // //     const file = e.target.files[0];
  // //     if (!file) return;

  // //     const formData = new FormData();
  // //     formData.append("file", file);
  // //     formData.append("upload_preset", "your_preset_name");

  // //     setIsLoading(true);
  // //     fetch("https://api.cloudinary.com/v1_1/your_cloud_name/upload", {
  // //       method: "POST",
  // //       body: formData,
  // //     })
  // //       .then((res) => res.json())
  // //       .then((data) => {
  // //         setNewProduct((prev) => ({ ...prev, image: data.secure_url }));
  // //         setIsLoading(false);
  // //       })
  // //       .catch((err) => {
  // //         console.error("Error uploading image:", err);
  // //         setErrorMessage("Failed to upload image. Please try again.");
  // //         setIsLoading(false);
  // //       });
  // //   };

  // //   const handleValidityTypeChange = (e) => {
  // //     const { value } = e.target;
  // //     setNewProduct((prev) => ({ ...prev, validity_type: value, valid_till: "" })); // Reset valid_till when changing type
  // //   };  

  // //   const handleDeleteProduct = (id, index) => {
  // //     if (window.confirm("Are you sure you want to delete this product?")) {
  // //       setIsLoading(true);
  // //       fetch(`${API_URL}/${id}?storeId=${storeId}`, { method: "DELETE" })
  // //         .then((res) => {
  // //           if (!res.ok) throw new Error("Failed to delete product.");
  // //           setProducts((prev) => prev.filter((_, i) => i !== index));
  // //           setSuccessMessage("Product deleted successfully!");
  // //           setIsLoading(false);
  // //         })
  // //         .catch((err) => {
  // //           console.error("Error deleting product:", err);
  // //           setErrorMessage("Failed to delete product. Please try again.");
  // //           setIsLoading(false);
  // //         });
  // //     }
  // //   };

  // //   // Get unique categories for filter
  // //   const categories = ["all", ...new Set(products.map(product => product.category))];

  // //   const filteredProducts = products.filter((product) => {
  // //     const matchesSearch = product.product_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
  // //                          product.category?.toLowerCase().includes(searchQuery.toLowerCase());
  // //     const matchesCategory = filterCategory === "all" || product.category === filterCategory;
  // //     return matchesSearch && matchesCategory;
  // //   });

  // //   return (
  // //     <div className="font-poppins bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen p-6 text-gray-800">
  // //       {/* Notification system */}
  // //       <AnimatePresence>
  // //         {successMessage && (
  // //           <motion.div 
  // //             initial={{ opacity: 0, y: -50 }}
  // //             animate={{ opacity: 1, y: 0 }}
  // //             exit={{ opacity: 0, y: -50 }}
  // //             className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
  // //           >
  // //             {successMessage}
  // //           </motion.div>
  // //         )}
          
  // //         {errorMessage && (
  // //           <motion.div 
  // //             initial={{ opacity: 0, y: -50 }}
  // //             animate={{ opacity: 1, y: 0 }}
  // //             exit={{ opacity: 0, y: -50 }}
  // //             className="fixed top-6 right-6 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
  // //             onClick={() => setErrorMessage(null)}
  // //           >
  // //             {errorMessage}
  // //           </motion.div>
  // //         )}
  // //       </AnimatePresence>
        
  // //       {/* Loading overlay */}
  // //       <AnimatePresence>
  // //         {isLoading && (
  // //           <motion.div 
  // //             initial={{ opacity: 0 }}
  // //             animate={{ opacity: 1 }}
  // //             exit={{ opacity: 0 }}
  // //             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  // //           >
  // //             <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
  // //               <div className="loader w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
  // //               <p className="mt-4 text-gray-700">Loading...</p>
  // //             </div>
  // //           </motion.div>
  // //         )}
  // //       </AnimatePresence>

  // //       {/* Header */}
  // //       <motion.header 
  // //         initial={{ y: -100, opacity: 0 }}
  // //         animate={{ y: 0, opacity: 1 }}
  // //         transition={{ duration: 0.5 }}
  // //         className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 px-8 rounded-2xl shadow-xl mb-10"
  // //       >
  // //         <div className="container mx-auto">
  // //           <h1 className="text-4xl font-extrabold tracking-tight">
  // //             <span className="block text-xl mb-1 text-blue-200">Welcome to</span>
  // //             {storeName}'s Product Dashboard
  // //           </h1>
  // //           <p className="mt-2 text-blue-200 max-w-xl">
  // //             Manage your inventory, track sales, and optimize your product offerings all in one place.
  // //           </p>
  // //         </div>
  // //       </motion.header>

  // //       {/* Statistics Overview */}
  // //       {/* <motion.section 
  // //         initial={{ opacity: 0, y: 20 }}
  // //         animate={{ opacity: 1, y: 0 }}
  // //         transition={{ delay: 0.2 }}
  // //         className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10"
  // //       >
  // //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
  // //           <h3 className="text-gray-500 text-sm font-medium">Total Products</h3>
  // //           <p className="text-3xl font-bold text-gray-800 mt-2">{products.length}</p>
  // //         </div>
          
  // //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500">
  // //           <h3 className="text-gray-500 text-sm font-medium">Categories</h3>
  // //           <p className="text-3xl font-bold text-gray-800 mt-2">{categories.length - 1}</p>
  // //         </div>
          
  // //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
  // //           <h3 className="text-gray-500 text-sm font-medium">Total Value</h3>
  // //           <p className="text-3xl font-bold text-gray-800 mt-2">
  // //             ₹{products.reduce((sum, product) => sum + Number(product.total_value || 0), 0).toFixed(2)}
  // //           </p>
  // //         </div>
          
  // //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
  // //           <h3 className="text-gray-500 text-sm font-medium">Low Stock Items</h3>
  // //           <p className="text-3xl font-bold text-gray-800 mt-2">
  // //             {products.filter(product => Number(product.stock_level) < 10).length}
  // //           </p>
  // //         </div>
  // //       </motion.section> */}
  // //       <motion.section 
  // //   initial={{ opacity: 0, y: 20 }}
  // //   animate={{ opacity: 1, y: 0 }}
  // //   transition={{ delay: 0.2 }}
  // //   className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10"
  // // >
  // //   <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
  // //     <h3 className="text-gray-500 text-sm font-medium">Total Products</h3>
  // //     <p className="text-3xl font-bold text-gray-800 mt-2">{products.length}</p>
  // //   </div>
    
  // //   <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500">
  // //     <h3 className="text-gray-500 text-sm font-medium">Categories</h3>
  // //     <p className="text-3xl font-bold text-gray-800 mt-2">{categories.length - 1}</p>
  // //   </div>
    
  // //   <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
  // //     <h3 className="text-gray-500 text-sm font-medium">Total Value</h3>
  // //     <p className="text-3xl font-bold text-gray-800 mt-2">
  // //       ₹{products.reduce((sum, product) => sum + Number(product.total_value || 0), 0).toFixed(2)}
  // //     </p>
  // //   </div>
    
  // //   <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
  // //     <h3 className="text-gray-500 text-sm font-medium">Low Stock Items</h3>
  // //     <p className="text-3xl font-bold text-gray-800 mt-2">
  // //       {
  // //         products.filter(product => 
  // //           Number(product.quantity) < Number(product.stock_level)
  // //         ).length
  // //       }
  // //     </p>
  // //   </div>
  // // </motion.section>

  // //       <div className="flex flex-col lg:flex-row gap-10">
  // //         {/* Add/Edit Product Form */}
  // //         <motion.section 
  // //           initial={{ opacity: 0, x: -50 }}
  // //           animate={{ opacity: 1, x: 0 }}
  // //           transition={{ delay: 0.3 }}
  // //           className="product-form-section lg:w-1/3"
  // //         >
  // //           <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
  // //             <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
  // //               {editIndex !== null ? "Edit Product" : "Add New Product"}
  // //             </h2>
              
  // //             <div className="space-y-4">
  // //               <div>
  // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
  // //                 <input
  // //                   type="text"
  // //                   name="product_name"
  // //                   placeholder="Enter product name"
  // //                   value={newProduct.product_name}
  // //                   onChange={handleInputChange}
  // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // //                 />
  // //               </div>
                
  // //               <div className="grid grid-cols-2 gap-4">
  // //                 <div>
  // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
  // //                   <input
  // //                     type="number"
  // //                     name="quantity"
  // //                     placeholder="0"
  // //                     value={newProduct.quantity}
  // //                     onChange={handleInputChange}
  // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // //                   />
  // //                 </div>
                  
  // //                 <div>
  // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Units</label>
  // //                   <select
  // //                     name="units"
  // //                     value={newProduct.units}
  // //                     onChange={handleInputChange}
  // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-white"
  // //                   >
  // //                     <option value="">Select Unit</option>
  // //                     <option value="Bag">BAGS (Bag)</option>
  // //                     <option value="Btl">BOTTLES (Btl)</option>
  // //                     <option value="Box">BOX (Box)</option>
  // //                     <option value="Bdl">BUNDLES (Bdl)</option>
  // //                     <option value="Can">CANS (Can)</option>
  // //                     <option value="Ctn">CARTONS (Ctn)</option>
  // //                     <option value="Dzn">DOZENS (Dzn)</option>
  // //                     <option value="Kg">KILOGRAMS (Kg)</option>
  // //                     <option value="Gm">GRAMMES (Gm)</option>
  // //                     <option value="Ltr">LITRE (Ltr)</option>
  // //                     <option value="Mtr">METERS (Mtr)</option>
  // //                     <option value="Ml">MILLILITRE (Ml)</option>
  // //                     <option value="Nos">NUMBERS (Nos)</option>
  // //                     <option value="Pac">PACKS (Pac)</option>
  // //                     <option value="Prs">PAIRS (Prs)</option>
  // //                     <option value="Pcs">PIECES (Pcs)</option>
  // //                     <option value="Qt">QUINTAL (Qt)</option>
  // //                     <option value="Rol">ROLLS (Rol)</option>
  // //                     <option value="Sqf">SQUARE FEET (Sqf)</option>
  // //                   </select>
  // //                 </div>
  // //               </div>
                
  // //               <div>
  // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
  // //                 <input
  // //                   type="text"
  // //                   name="category"
  // //                   placeholder="Enter category"
  // //                   value={newProduct.category}
  // //                   onChange={handleInputChange}
  // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // //                 />
  // //               </div>
                
  // //               <div className="grid grid-cols-2 gap-4">
  // //                 <div>
  // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Purchase Price (₹)</label>
  // //                   <input
  // //                     type="number"
  // //                     name="purchase_price"
  // //                     placeholder="0.00"
  // //                     value={newProduct.purchase_price}
  // //                     onChange={handleInputChange}
  // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // //                   />
  // //                 </div>
                  
  // //                 <div>
  // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Sale Price (₹)</label>
  // //                   <input
  // //                     type="number"
  // //                     name="sale_price"
  // //                     placeholder="0.00"
  // //                     value={newProduct.sale_price}
  // //                     onChange={handleInputChange}
  // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // //                   />
  // //                 </div>
  // //               </div>
                
              
  // //               <div className="grid grid-cols-2 gap-4">
  // //                 <div>
  // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Tax (%)</label>
  // //                   <input
  // //                     type="number"
  // //                     name="tax"
  // //                     placeholder="0"
  // //                     value={newProduct.tax}
  // //                     onChange={handleInputChange}
  // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // //                   />
  // //                 </div>
                  
  // //                 <div>
  // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Discount (%)</label>
  // //                   <input
  // //                     type="number"
  // //                     name="discount"
  // //                     placeholder="0"
  // //                     value={newProduct.discount}
  // //                     onChange={handleInputChange}
  // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // //                   />
  // //                 </div>
  // //               </div>
                
  // //               <div>
  // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
  // //                 <input
  // //                   type="file"
  // //                   name="image"
  // //                   id="imageInput"
  // //                   onChange={handleFileChange}
  // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // //                 />
  // //                 {newProduct.image && (
  // //                   <div className="mt-4 flex justify-center">
  // //                     <img 
  // //                       src={newProduct.image} 
  // //                       alt="Product" 
  // //                       className="w-32 h-32 rounded-lg object-cover border-4 border-white shadow-lg" 
  // //                     />
  // //                   </div>
  // //                 )}
  // //               </div>
                
  // //               <div>
  // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Stock Level</label>
  // //                 <input
  // //                   type="number"
  // //                   name="stock_level"
  // //                   placeholder="Current stock quantity"
  // //                   value={newProduct.stock_level}
  // //                   onChange={handleInputChange}
  // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // //                 />
  // //               </div>
                
  // //               <div>
  // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Supplier</label>
  // //                 <input
  // //                   type="text"
  // //                   name="supplier"
  // //                   placeholder="Supplier name"
  // //                   value={newProduct.supplier}
  // //                   onChange={handleInputChange}
  // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // //                 />
  // //               </div>

  // //               <div>
  // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Date of Manufacturing</label>
  // //                 <input
  // //                   type="date"
  // //                   name="date_of_manufacturing"
  // //                   value={newProduct.date_of_manufacturing}
  // //                   onChange={handleInputChange}
  // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // //                 />
  // //               </div>

  // //               <div>
  // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Valid Till</label>
  // //                 <div className="flex items-center mb-2">
  // //                   <label className="mr-4">
  // //                     <input
  // //                       type="radio"
  // //                       name="validity_type"
  // //                       value="date"
  // //                       checked={newProduct.validity_type === "date"}
  // //                       onChange={handleValidityTypeChange}
  // //                       className="mr-2"
  // //                     />
  // //                     Specific Date
  // //                   </label>
  // //                   <label>
  // //                     <input
  // //                       type="radio"
  // //                       name="validity_type"
  // //                       value="period"
  // //                       checked={newProduct.validity_type === "period"}
  // //                       onChange={handleValidityTypeChange}
  // //                       className="mr-2"
  // //                     />
  // //                     Validity Period
  // //                   </label>
  // //                 </div>
  // //                 {newProduct.validity_type === "date" && (
  // //                   <input
  // //                     type="date"
  // //                     name="valid_till"
  // //                     value={newProduct.valid_till}
  // //                     onChange={handleInputChange}
  // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // //                   />
  // //                 )}
  // //                 {newProduct.validity_type === "period" && (
  // //                   <input
  // //                     type="text"
  // //                     name="valid_till"
  // //                     placeholder="e.g., 6 months, 1 year"
  // //                     value={newProduct.valid_till}
  // //                     onChange={handleInputChange}
  // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // //                   />
  // //                 )}
  // //               </div>
                
  // //               {newProduct.sale_price && newProduct.quantity && (
  // //                 <div className="p-4 bg-blue-50 rounded-lg">
  // //                   <p className="text-sm text-gray-600">Total Value: <span className="font-bold text-blue-700">₹{calculateTotalValue()}</span></p>
  // //                 </div>
  // //               )}
                
  // //               <motion.button
  // //                 whileHover={{ scale: 1.03 }}
  // //                 whileTap={{ scale: 0.98 }}
  // //                 onClick={handleAddOrEditProduct}
  // //                 disabled={!isFormValid()}
  // //                 className={`w-full p-4 rounded-lg font-medium text-white shadow-lg transition-all duration-300 
  // //                   ${!isFormValid() 
  // //                     ? 'bg-gray-300 cursor-not-allowed' 
  // //                     : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800'}`}
  // //               >
  // //                 {editIndex !== null ? "Update Product" : "Add Product"}
  // //               </motion.button>
                
  // //               {editIndex !== null && (
  // //                 <motion.button
  // //                   whileHover={{ scale: 1.03 }}
  // //                   whileTap={{ scale: 0.98 }}
  // //                   onClick={resetForm}
  // //                   className="w-full p-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300"
  // //                 >
  // //                   Cancel Edit
  // //                 </motion.button>
  // //               )}
  // //             </div>
  // //           </div>
  // //         </motion.section>

  // //         {/* Products Display Section */}
  // //         <motion.section 
  // //           initial={{ opacity: 0, x: 50 }}
  // //           animate={{ opacity: 1, x: 0 }}
  // //           transition={{ delay: 0.4 }}
  // //           className="lg:w-2/3"
  // //         >
  // //           {/* Search and Filters */}
  // //           <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
  // //             <div className="flex flex-col md:flex-row gap-4">
  // //               <div className="md:w-2/3">
  // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Search Products</label>
  // //                 <div className="relative">
  // //                   <input
  // //                     type="text"
  // //                     placeholder="Search by name or category..."
  // //                     value={searchQuery}
  // //                     onChange={handleSearchChange}
  // //                     className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  // //                   />
  // //                   <div className="absolute left-3 top-3.5 text-gray-400">
  // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  // //                     </svg>
  // //                   </div>
  // //                 </div>
  // //               </div>
                
  // //               <div className="md:w-1/3">
  // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Category</label>
  // //                 <select
  // //                   value={filterCategory}
  // //                   onChange={(e) => handleCategoryFilter(e.target.value)}
  // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-white"
  // //                 >
  // //                   {categories.map((category) => (
  // //                     <option key={category} value={category}>
  // //                       {category === "all" ? "All Categories" : category}
  // //                     </option>
  // //                   ))}
  // //                 </select>
  // //               </div>
  // //             </div>
  // //           </div>
            
  // //           {/* Products Display Toggle */}
  // //           <div className="flex justify-between items-center mb-4">
  // //             <h2 className="text-2xl font-bold text-gray-800">
  // //               Products {searchQuery || filterCategory !== "all" ? "(Filtered)" : ""}
  // //             </h2>
  // //             <button
  // //               onClick={() => setViewAsTable(!viewAsTable)}
  // //               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
  // //             >
  // //               {viewAsTable ? "View as Cards" : "View as Table"}
  // //             </button>
  // //           </div>

  // //           {/* Products Grid or Table */}
  // //           <AnimatePresence>
  // //             {filteredProducts.length > 0 ? (
  // //               viewAsTable ? (
  // //                 <motion.table
  // //                   initial={{ opacity: 0, y: 20 }}
  // //                   animate={{ opacity: 1, y: 0 }}
  // //                   exit={{ opacity: 0, y: 20 }}
  // //                   className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg"
  // //                 >
  // //                   <thead>
  // //                     <tr className="bg-gray-100">
  // //                       <th className="py-3 px-4 border-b">Product Name</th>
  // //                       <th className="py-3 px-4 border-b">Category</th>
  // //                       <th className="py-3 px-4 border-b">Supplier</th>
  // //                       <th className="py-3 px-4 border-b">Stock Level</th>
  // //                       <th className="py-3 px-4 border-b">Actions</th>
  // //                     </tr>
  // //                   </thead>
  // //                   <tbody>
  // //                     {filteredProducts.map((product, index) => (
  // //                       <tr key={product._id} className="hover:bg-gray-50">
  // //                         <td className="py-3 px-4 border-b">{product.product_name}</td>
  // //                         <td className="py-3 px-4 border-b">{product.category}</td>
  // //                         <td className="py-3 px-4 border-b">{product.supplier || "N/A"}</td>
  // //                         <td className={`py-3 px-4 border-b ${product.stock_level < 10 ? 'text-red-600' : 'text-green-600'}`}>
  // //                           {product.stock_level || "0"}
  // //                         </td>
  // //                         <td className="py-3 px-4 border-b">
  // //                           <button
  // //                             onClick={() => handleEditProduct(index)}
  // //                             className="text-blue-500 hover:underline"
  // //                           >
  // //                             Edit
  // //                           </button>
  // //                           <button
  // //                             onClick={() => handleDeleteProduct(product._id, index)}
  // //                             className="ml-2 text-red-500 hover:underline"
  // //                           >
  // //                             Delete
  // //                           </button>
  // //                         </td>
  // //                       </tr>
  // //                     ))}
  // //                   </tbody>
  // //                 </motion.table>
  // //               ) : (
  // //                 <motion.div 
  // //                   layout
  // //                   className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
  // //                 >
  // //                   {filteredProducts.map((product, index) => (
  // //                     <motion.div
  // //                       key={product._id}
  // //                       layout
  // //                       initial={{ scale: 1 }} // Ensured 100% opacity
  // //                       animate={{ scale: 1 }} // Keep scale at 1
  // //                       exit={{ scale: 0.9 }} // Slightly reduce scale on exit
  // //                       whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }} // Add shadow effect on hover
  // //                       className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200" // Add border for clarity
  // //                     >
  // //                       <div className={`h-2 ${product.stock_level < 10 ? 'bg-red-500' : 'bg-green-500'}`}></div>
  // //                       <div className="p-6">
  // //                         <div className="flex justify-between items-start mb-4">
  // //                           <h3 className="text-xl font-bold text-gray-800 line-clamp-2">{product.product_name}</h3>
  // //                           {product.image ? (
  // //                             <img 
  // //                               src={product.image} 
  // //                               alt={product.product_name} 
  // //                               className="w-16 h-16 rounded-lg object-cover ml-2 border-2 border-white shadow-md" 
  // //                             />
  // //                           ) : (
  // //                             <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center ml-2 text-gray-400">
  // //                               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  // //                               </svg>
  // //                             </div>
  // //                           )}
  // //                         </div>
                          
  // //                         <div className="grid grid-cols-2 gap-4 mb-4">
  // //                           <div className="text-sm">
  // //                             <p className="text-gray-500">Category</p>
  // //                             <p className="font-medium">{product.category}</p>
  // //                           </div>
  // //                           <div className="text-sm">
  // //                             <p className="text-gray-500">Supplier</p>
  // //                             <p className="font-medium">{product.supplier || "N/A"}</p>
  // //                           </div>
  // //                         </div>
                          
  // //                         <div className="grid grid-cols-2 gap-4 mb-4">
  // //                           <div className="text-sm">
  // //                             <p className="text-gray-500">Purchase Price</p>
  // //                             <p className="font-medium">₹{product.purchase_price}</p>
  // //                           </div>
  // //                           <div className="text-sm">
  // //                             <p className="text-gray-500">Sale Price</p>
  // //                             <p className="font-medium">₹{product.sale_price}</p>
  // //                           </div>
  // //                         </div>
                          
  // //                         <div className="grid grid-cols-2 gap-4 mb-4">
  // //                           <div className="text-sm">
  // //                             <p className="text-gray-500">Quantity</p>
  // //                             <p className="font-medium">{product.quantity} {product.units}</p>
  // //                           </div>
  // //                           <div className="text-sm">
  // //                             <p className="text-gray-500">Stock Level</p>
  // //                             <p className={`font-medium ${product.stock_level < 10 ? 'text-red-600' : 'text-green-600'}`}>
  // //                               {product.stock_level || "0"}
  // //                             </p>
  // //                           </div>
  // //                         </div>
                          
  // //                         <div className="grid grid-cols-2 gap-4 mb-4">
  // //                           <div className="text-sm">
  // //                             <p className="text-gray-500">Tax</p>
  // //                             <p className="font-medium">{product.tax || "0"}%</p>
  // //                           </div>
  // //                           <div className="text-sm">
  // //                             <p className="text-gray-500">Discount</p>
  // //                             <p className="font-medium">{product.discount || "0"}%</p>
  // //                           </div>
  // //                         </div>
                          
  // //                         <div className="grid grid-cols-2 gap-4 mb-4">
  // //                           <div className="text-sm">
  // //                             <p className="text-gray-500">Date of Manufacturing</p>
  // //                             <p className="font-medium">{product.date_of_manufacturing || "N/A"}</p>
  // //                           </div>
  // //                           <div className="text-sm">
  // //                             <p className="text-gray-500">Valid Till</p>
  // //                             <p className="font-medium">{product.valid_till || "N/A"}</p>
  // //                           </div>
  // //                         </div>
                          
  // //                         <div className="bg-blue-50 p-3 rounded-lg mb-4">
  // //                           <div className="flex justify-between">
  // //                             <p className="text-gray-600 font-medium">Total Value:</p>
  // //                             <p className="text-blue-700 font-bold">₹{product.total_value}</p>
  // //                           </div>
  // //                         </div>
                          
  // //                         <div className="flex gap-3 mt-4">
  // //                           <button
  // //                             onClick={() => handleEditProduct(index)}
  // //                             className="flex-1 py-2.5 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-all duration-300 flex items-center justify-center"
  // //                           >
  // //                             Edit
  // //                           </button>
                            
  // //                           <button
  // //                             onClick={() => handleDeleteProduct(product._id, index)}
  // //                             className="flex-1 py-2.5 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition-all duration-300 flex items-center justify-center"
  // //                           >
  // //                             Delete
  // //                           </button>
  // //                         </div>
  // //                       </div>
  // //                     </motion.div>
  // //                   ))}
  // //                 </motion.div>
  // //               )
  // //             ) : (
  // //               <motion.div
  // //                 initial={{ opacity: 0, y: 20 }}
  // //                 animate={{ opacity: 1, y: 0 }}
  // //                 exit={{ opacity: 0, y: 20                }}
  // //                 className="bg-white rounded-2xl p-8 shadow-lg text-center"
  // //               >
  // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  // //                 </svg>
  // //                 <p className="mt-4 text-gray-600">No products found. Start adding some!</p>
  // //               </motion.div>
  // //             )}
  // //           </AnimatePresence>
  // //         </motion.section>
  // //       </div>
  // //     </div>
  // //   );
  // // };

  // // export default ProductDashboard;


  // import React, { useState, useEffect, useContext } from "react";
  // import { StoreContext } from "./StoreContext";
  // import { motion, AnimatePresence } from "framer-motion";

  // const ProductDashboard = () => {
  //   const [products, setProducts] = useState([]);
  //   const { storeName, storeId } = useContext(StoreContext);
  //   const [newProduct, setNewProduct] = useState({
  //     product_name: "",
  //     quantity: "",
  //     units: "",
  //     category: "",
  //     purchase_price: "",
  //     sale_price: "",
  //     tax: "",
  //     discount: "",
  //     image: "",
  //     stock_level: "",
  //     supplier: "",
  //     date_of_manufacturing: "",
  //     valid_till: "",
  //     barcode: "", // Added barcode field
  //   });

  //   const [editIndex, setEditIndex] = useState(null);
  //   const [editId, setEditId] = useState(null);
  //   const [searchQuery, setSearchQuery] = useState("");
  //   const [filterCategory, setFilterCategory] = useState("all");
  //   const [errorMessage, setErrorMessage] = useState(null);
  //   const [successMessage, setSuccessMessage] = useState(null);
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [viewAsTable, setViewAsTable] = useState(false);
  //   const API_URL = "http://127.0.0.1:5000/products";

  //   useEffect(() => {
  //     if (storeId) {
  //       setIsLoading(true);
  //       fetch(`${API_URL}?storeId=${storeId}`)
  //         .then((res) => {
  //           if (!res.ok) throw new Error(`Error: ${res.status}`);
  //           return res.json();
  //         })
  //         .then((data) => {
  //           setProducts(data);
  //           setIsLoading(false);
  //         })
  //         .catch((err) => {
  //           console.error("Error fetching products:", err);
  //           setErrorMessage("Failed to fetch products. Please try again.");
  //           setIsLoading(false);
  //         });
  //     }
  //   }, [storeId]);

  //   useEffect(() => {
  //     if (successMessage) {
  //       const timer = setTimeout(() => setSuccessMessage(null), 3000);
  //       return () => clearTimeout(timer);
  //     }
  //   }, [successMessage]);

  //   const resetForm = () => {
  //     setNewProduct({
  //       product_name: "",
  //       quantity: "",
  //       units: "",
  //       category: "",
  //       purchase_price: "",
  //       sale_price: "",
  //       tax: "",
  //       discount: "",
  //       image: "",
  //       stock_level: "",
  //       supplier: "",
  //       date_of_manufacturing: "",
  //       valid_till: "",
  //       barcode: "", // Reset barcode
  //     });
  //     setEditIndex(null);
  //     setEditId(null);
  //   };

  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setNewProduct((prev) => ({ ...prev, [name]: value }));
  //   };

  //   const handleSearchChange = (e) => {
  //     setSearchQuery(e.target.value);
  //   };

  //   const handleCategoryFilter = (category) => {
  //     setFilterCategory(category);
  //   };

  //   const calculateTotalValue = () => {
  //     const { sale_price, quantity, discount } = newProduct;
  //     const totalValue =
  //       sale_price * quantity - (discount > 0 ? (sale_price * quantity * discount) / 100 : 0);
  //     return totalValue.toFixed(2);
  //   };

  //   const isFormValid = () => {
  //     const { product_name, quantity, units, category, purchase_price, sale_price } = newProduct;
  //     return product_name && quantity > 0 && units && category && purchase_price > 0 && sale_price > 0;
  //   };

  //   const handleAddOrEditProduct = () => {
  //     if (!isFormValid()) return;

  //     setIsLoading(true);
  //     const totalValue = calculateTotalValue();
  //     const dateAdded = new Date().toISOString().split("T")[0];
  //     const updatedProduct = { ...newProduct, total_value: totalValue, dateAdded };

  //     const url = editIndex !== null ? `${API_URL}/${editId}?storeId=${storeId}` : `${API_URL}?storeId=${storeId}`;
  //     const method = editIndex !== null ? "PUT" : "POST";

  //     fetch(url, {
  //       method,
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(updatedProduct),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.message.includes("successfully")) {
  //           const updatedProducts = editIndex !== null
  //             ? products.map((p, idx) => (idx === editIndex ? { ...updatedProduct, _id: editId } : p))
  //             : [...products, { ...updatedProduct, _id: data.product_id, barcode: data.barcode || updatedProduct.barcode }];
  //           setProducts(updatedProducts);
  //           resetForm();
  //           setSuccessMessage(`Product ${editIndex !== null ? "updated" : "added"} successfully!`);
  //         } else {
  //           setErrorMessage("Failed to process product. Please try again.");
  //         }
  //         setIsLoading(false);
  //       })
  //       .catch((err) => {
  //         console.error(`Error ${method === "POST" ? "adding" : "updating"} product:`, err);
  //         setErrorMessage("An error occurred. Please try again.");
  //         setIsLoading(false);
  //       });
  //   };

  //   const handleEditProduct = (index) => {
  //     const selectedProduct = products[index];
  //     setNewProduct(selectedProduct);
  //     setEditIndex(index);
  //     setEditId(selectedProduct._id);
  //     document.getElementById("imageInput").value = "";
  //     document.querySelector(".product-form-section").scrollIntoView({ behavior: "smooth", block: "start" });
  //   };

  //   const handleFileChange = (e) => {
  //     const file = e.target.files[0];
  //     if (!file) return;

  //     const formData = new FormData();
  //     formData.append("file", file);
  //     formData.append("upload_preset", "your_preset_name");

  //     setIsLoading(true);
  //     fetch("https://api.cloudinary.com/v1_1/your_cloud_name/upload", {
  //       method: "POST",
  //       body: formData,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setNewProduct((prev) => ({ ...prev, image: data.secure_url }));
  //         setIsLoading(false);
  //       })
  //       .catch((err) => {
  //         console.error("Error uploading image:", err);
  //         setErrorMessage("Failed to upload image. Please try again.");
  //         setIsLoading(false);
  //       });
  //   };

  //   const handleValidityTypeChange = (e) => {
  //     const { value } = e.target;
  //     setNewProduct((prev) => ({ ...prev, validity_type: value, valid_till: "" }));
  //   };

  //   const handleDeleteProduct = (id, index) => {
  //     if (window.confirm("Are you sure you want to delete this product?")) {
  //       setIsLoading(true);
  //       fetch(`${API_URL}/${id}?storeId=${storeId}`, { method: "DELETE" })
  //         .then((res) => {
  //           if (!res.ok) throw new Error("Failed to delete product.");
  //           setProducts((prev) => prev.filter((_, i) => i !== index));
  //           setSuccessMessage("Product deleted successfully!");
  //           setIsLoading(false);
  //         })
  //         .catch((err) => {
  //           console.error("Error deleting product:", err);
  //           setErrorMessage("Failed to delete product. Please try again.");
  //           setIsLoading(false);
  //         });
  //     }
  //   };

  //   const categories = ["all", ...new Set(products.map((product) => product.category))];

  //   const filteredProducts = products.filter((product) => {
  //     const matchesSearch =
  //       (product.product_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //        product.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //        product.barcode?.toLowerCase().includes(searchQuery.toLowerCase())); // Added barcode to search
  //     const matchesCategory = filterCategory === "all" || product.category === filterCategory;
  //     return matchesSearch && matchesCategory;
  //   });

  //   return (
  //     <div className="font-poppins bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen p-6 text-gray-800">
  //       <AnimatePresence>
  //         {successMessage && (
  //           <motion.div
  //             initial={{ opacity: 0, y: -50 }}
  //             animate={{ opacity: 1, y: 0 }}
  //             exit={{ opacity: 0, y: -50 }}
  //             className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
  //           >
  //             {successMessage}
  //           </motion.div>
  //         )}
  //         {errorMessage && (
  //           <motion.div
  //             initial={{ opacity: 0, y: -50 }}
  //             animate={{ opacity: 1, y: 0 }}
  //             exit={{ opacity: 0, y: -50 }}
  //             className="fixed top-6 right-6 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
  //             onClick={() => setErrorMessage(null)}
  //           >
  //             {errorMessage}
  //           </motion.div>
  //         )}
  //       </AnimatePresence>

  //       <AnimatePresence>
  //         {isLoading && (
  //           <motion.div
  //             initial={{ opacity: 0 }}
  //             animate={{ opacity: 1 }}
  //             exit={{ opacity: 0 }}
  //             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  //           >
  //             <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
  //               <div className="loader w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
  //               <p className="mt-4 text-gray-700">Loading...</p>
  //             </div>
  //           </motion.div>
  //         )}
  //       </AnimatePresence>

  //       <motion.header
  //         initial={{ y: -100, opacity: 0 }}
  //         animate={{ y: 0, opacity: 1 }}
  //         transition={{ duration: 0.5 }}
  //         className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 px-8 rounded-2xl shadow-xl mb-10"
  //       >
  //         <div className="container mx-auto">
  //           <h1 className="text-4xl font-extrabold tracking-tight">
  //             <span className="block text-xl mb-1 text-blue-200">Welcome to</span>
  //             {storeName}'s Product Dashboard
  //           </h1>
  //           <p className="mt-2 text-blue-200 max-w-xl">
  //             Manage your inventory, track sales, and optimize your product offerings all in one place.
  //           </p>
  //         </div>
  //       </motion.header>

  //       <motion.section
  //         initial={{ opacity: 0, y: 20 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ delay: 0.2 }}
  //         className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10"
  //       >
  //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
  //           <h3 className="text-gray-500 text-sm font-medium">Total Products</h3>
  //           <p className="text-3xl font-bold text-gray-800 mt-2">{products.length}</p>
  //         </div>
  //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500">
  //           <h3 className="text-gray-500 text-sm font-medium">Categories</h3>
  //           <p className="text-3xl font-bold text-gray-800 mt-2">{categories.length - 1}</p>
  //         </div>
  //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
  //           <h3 className="text-gray-500 text-sm font-medium">Total Value</h3>
  //           <p className="text-3xl font-bold text-gray-800 mt-2">
  //             ₹{products.reduce((sum, product) => sum + Number(product.total_value || 0), 0).toFixed(2)}
  //           </p>
  //         </div>
  //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
  //           <h3 className="text-gray-500 text-sm font-medium">Low Stock Items</h3>
  //           <p className="text-3xl font-bold text-gray-800 mt-2">
  //             {products.filter((product) => Number(product.quantity) < Number(product.stock_level)).length}
  //           </p>
  //         </div>
  //       </motion.section>

  //       <div className="flex flex-col lg:flex-row gap-10">
  //         <motion.section
  //           initial={{ opacity: 0, x: -50 }}
  //           animate={{ opacity: 1, x: 0 }}
  //           transition={{ delay: 0.3 }}
  //           className="product-form-section lg:w-1/3"
  //         >
  //           <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
  //             <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
  //               {editIndex !== null ? "Edit Product" : "Add New Product"}
  //             </h2>
  //             <div className="space-y-4">
  //               <div>
  //                 <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
  //                 <input
  //                   type="text"
  //                   name="product_name"
  //                   placeholder="Enter product name"
  //                   value={newProduct.product_name}
  //                   onChange={handleInputChange}
  //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  //                 />
  //               </div>
  //               <div className="grid grid-cols-2 gap-4">
  //                 <div>
  //                   <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
  //                   <input
  //                     type="number"
  //                     name="quantity"
  //                     placeholder="0"
  //                     value={newProduct.quantity}
  //                     onChange={handleInputChange}
  //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  //                   />
  //                 </div>
  //                 <div>
  //                   <label className="block text-sm font-medium text-gray-700 mb-1">Units</label>
  //                   <select
  //                     name="units"
  //                     value={newProduct.units}
  //                     onChange={handleInputChange}
  //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-white"
  //                   >
  //                     <option value="">Select Unit</option>
  //                     <option value="Bag">BAGS (Bag)</option>
  //                     <option value="Btl">BOTTLES (Btl)</option>
  //                     <option value="Box">BOX (Box)</option>
  //                     <option value="Bdl">BUNDLES (Bdl)</option>
  //                     <option value="Can">CANS (Can)</option>
  //                     <option value="Ctn">CARTONS (Ctn)</option>
  //                     <option value="Dzn">DOZENS (Dzn)</option>
  //                     <option value="Kg">KILOGRAMS (Kg)</option>
  //                     <option value="Gm">GRAMMES (Gm)</option>
  //                     <option value="Ltr">LITRE (Ltr)</option>
  //                     <option value="Mtr">METERS (Mtr)</option>
  //                     <option value="Ml">MILLILITRE (Ml)</option>
  //                     <option value="Nos">NUMBERS (Nos)</option>
  //                     <option value="Pac">PACKS (Pac)</option>
  //                     <option value="Prs">PAIRS (Prs)</option>
  //                     <option value="Pcs">PIECES (Pcs)</option>
  //                     <option value="Qt">QUINTAL (Qt)</option>
  //                     <option value="Rol">ROLLS (Rol)</option>
  //                     <option value="Sqf">SQUARE FEET (Sqf)</option>
  //                   </select>
  //                 </div>
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
  //                 <input
  //                   type="text"
  //                   name="category"
  //                   placeholder="Enter category"
  //                   value={newProduct.category}
  //                   onChange={handleInputChange}
  //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  //                 />
  //               </div>
  //               <div className="grid grid-cols-2 gap-4">
  //                 <div>
  //                   <label className="block text-sm font-medium text-gray-700 mb-1">Purchase Price (₹)</label>
  //                   <input
  //                     type="number"
  //                     name="purchase_price"
  //                     placeholder="0.00"
  //                     value={newProduct.purchase_price}
  //                     onChange={handleInputChange}
  //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  //                   />
  //                 </div>
  //                 <div>
  //                   <label className="block text-sm font-medium text-gray-700 mb-1">Sale Price (₹)</label>
  //                   <input
  //                     type="number"
  //                     name="sale_price"
  //                     placeholder="0.00"
  //                     value={newProduct.sale_price}
  //                     onChange={handleInputChange}
  //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  //                   />
  //                 </div>
  //               </div>
  //               <div className="grid grid-cols-2 gap-4">
  //                 <div>
  //                   <label className="block text-sm font-medium text-gray-700 mb-1">Tax (%)</label>
  //                   <input
  //                     type="number"
  //                     name="tax"
  //                     placeholder="0"
  //                     value={newProduct.tax}
  //                     onChange={handleInputChange}
  //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  //                   />
  //                 </div>
  //                 <div>
  //                   <label className="block text-sm font-medium text-gray-700 mb-1">Discount (%)</label>
  //                   <input
  //                     type="number"
  //                     name="discount"
  //                     placeholder="0"
  //                     value={newProduct.discount}
  //                     onChange={handleInputChange}
  //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  //                   />
  //                 </div>
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
  //                 <input
  //                   type="file"
  //                   name="image"
  //                   id="imageInput"
  //                   onChange={handleFileChange}
  //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  //                 />
  //                 {newProduct.image && (
  //                   <div className="mt-4 flex justify-center">
  //                     <img
  //                       src={newProduct.image}
  //                       alt="Product"
  //                       className="w-32 h-32 rounded-lg object-cover border-4 border-white shadow-lg"
  //                     />
  //                   </div>
  //                 )}
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium text-gray-700 mb-1">Stock Level</label>
  //                 <input
  //                   type="number"
  //                   name="stock_level"
  //                   placeholder="Current stock quantity"
  //                   value={newProduct.stock_level}
  //                   onChange={handleInputChange}
  //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  //                 />
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium text-gray-700 mb-1">Supplier</label>
  //                 <input
  //                   type="text"
  //                   name="supplier"
  //                   placeholder="Supplier name"
  //                   value={newProduct.supplier}
  //                   onChange={handleInputChange}
  //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  //                 />
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium text-gray-700 mb-1">Date of Manufacturing</label>
  //                 <input
  //                   type="date"
  //                   name="date_of_manufacturing"
  //                   value={newProduct.date_of_manufacturing}
  //                   onChange={handleInputChange}
  //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  //                 />
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium text-gray-700 mb-1">Valid Till</label>
  //                 <div className="flex items-center mb-2">
  //                   <label className="mr-4">
  //                     <input
  //                       type="radio"
  //                       name="validity_type"
  //                       value="date"
  //                       checked={newProduct.validity_type === "date"}
  //                       onChange={handleValidityTypeChange}
  //                       className="mr-2"
  //                     />
  //                     Specific Date
  //                   </label>
  //                   <label>
  //                     <input
  //                       type="radio"
  //                       name="validity_type"
  //                       value="period"
  //                       checked={newProduct.validity_type === "period"}
  //                       onChange={handleValidityTypeChange}
  //                       className="mr-2"
  //                     />
  //                     Validity Period
  //                   </label>
  //                 </div>
  //                 {newProduct.validity_type === "date" && (
  //                   <input
  //                     type="date"
  //                     name="valid_till"
  //                     value={newProduct.valid_till}
  //                     onChange={handleInputChange}
  //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  //                   />
  //                 )}
  //                 {newProduct.validity_type === "period" && (
  //                   <input
  //                     type="text"
  //                     name="valid_till"
  //                     placeholder="e.g., 6 months, 1 year"
  //                     value={newProduct.valid_till}
  //                     onChange={handleInputChange}
  //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  //                   />
  //                 )}
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium text-gray-700 mb-1">Barcode (Optional)</label>
  //                 <input
  //                   type="text"
  //                   name="barcode"
  //                   placeholder="Enter barcode or leave blank to auto-generate"
  //                   value={newProduct.barcode}
  //                   onChange={handleInputChange}
  //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  //                 />
  //               </div>
  //               {newProduct.sale_price && newProduct.quantity && (
  //                 <div className="p-4 bg-blue-50 rounded-lg">
  //                   <p className="text-sm text-gray-600">
  //                     Total Value: <span className="font-bold text-blue-700">₹{calculateTotalValue()}</span>
  //                   </p>
  //                 </div>
  //               )}
  //               <motion.button
  //                 whileHover={{ scale: 1.03 }}
  //                 whileTap={{ scale: 0.98 }}
  //                 onClick={handleAddOrEditProduct}
  //                 disabled={!isFormValid()}
  //                 className={`w-full p-4 rounded-lg font-medium text-white shadow-lg transition-all duration-300 
  //                   ${!isFormValid() ? 'bg-gray-300 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800'}`}
  //               >
  //                 {editIndex !== null ? "Update Product" : "Add Product"}
  //               </motion.button>
  //               {editIndex !== null && (
  //                 <motion.button
  //                   whileHover={{ scale: 1.03 }}
  //                   whileTap={{ scale: 0.98 }}
  //                   onClick={resetForm}
  //                   className="w-full p-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300"
  //                 >
  //                   Cancel Edit
  //                 </motion.button>
  //               )}
  //             </div>
  //           </div>
  //         </motion.section>

  //         <motion.section
  //           initial={{ opacity: 0, x: 50 }}
  //           animate={{ opacity: 1, x: 0 }}
  //           transition={{ delay: 0.4 }}
  //           className="lg:w-2/3"
  //         >
  //           <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
  //             <div className="flex flex-col md:flex-row gap-4">
  //               <div className="md:w-2/3">
  //                 <label className="block text-sm font-medium text-gray-700 mb-1">Search Products</label>
  //                 <div className="relative">
  //                   <input
  //                     type="text"
  //                     placeholder="Search by name, category, or barcode..."
  //                     value={searchQuery}
  //                     onChange={handleSearchChange}
  //                     className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  //                   />
  //                   <div className="absolute left-3 top-3.5 text-gray-400">
  //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  //                     </svg>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="md:w-1/3">
  //                 <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Category</label>
  //                 <select
  //                   value={filterCategory}
  //                   onChange={(e) => handleCategoryFilter(e.target.value)}
  //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-white"
  //                 >
  //                   {categories.map((category) => (
  //                     <option key={category} value={category}>
  //                       {category === "all" ? "All Categories" : category}
  //                     </option>
  //                   ))}
  //                 </select>
  //               </div>
  //             </div>
  //           </div>

  //           <div className="flex justify-between items-center mb-4">
  //             <h2 className="text-2xl font-bold text-gray-800">
  //               Products {searchQuery || filterCategory !== "all" ? "(Filtered)" : ""}
  //             </h2>
  //             <button
  //               onClick={() => setViewAsTable(!viewAsTable)}
  //               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
  //             >
  //               {viewAsTable ? "View as Cards" : "View as Table"}
  //             </button>
  //           </div>

  //           <AnimatePresence>
  //             {filteredProducts.length > 0 ? (
  //               viewAsTable ? (
  //                 <motion.table
  //                   initial={{ opacity: 0, y: 20 }}
  //                   animate={{ opacity: 1, y: 0 }}
  //                   exit={{ opacity: 0, y: 20 }}
  //                   className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg"
  //                 >
  //                   <thead>
  //                     <tr className="bg-gray-100">
  //                       <th className="py-3 px-4 border-b">Product Name</th>
  //                       <th className="py-3 px-4 border-b">Barcode</th> {/* Added Barcode Column */}
  //                       <th className="py-3 px-4 border-b">Category</th>
  //                       <th className="py-3 px-4 border-b">Supplier</th>
  //                       <th className="py-3 px-4 border-b">Stock Level</th>
  //                       <th className="py-3 px-4 border-b">Actions</th>
  //                     </tr>
  //                   </thead>
  //                   <tbody>
  //                     {filteredProducts.map((product, index) => (
  //                       <tr key={product._id} className="hover:bg-gray-50">
  //                         <td className="py-3 px-4 border-b">{product.product_name}</td>
  //                         <td className="py-3 px-4 border-b">{product.barcode || "N/A"}</td> {/* Display Barcode */}
  //                         <td className="py-3 px-4 border-b">{product.category}</td>
  //                         <td className="py-3 px-4 border-b">{product.supplier || "N/A"}</td>
  //                         <td className={`py-3 px-4 border-b ${product.quantity < product.stock_level ? 'text-red-600' : 'text-green-600'}`}>
  //                           {product.quantity || "0"}
  //                         </td>
  //                         <td className="py-3 px-4 border-b">
  //                           <button
  //                             onClick={() => handleEditProduct(index)}
  //                             className="text-blue-500 hover:underline"
  //                           >
  //                             Edit
  //                           </button>
  //                           <button
  //                             onClick={() => handleDeleteProduct(product._id, index)}
  //                             className="ml-2 text-red-500 hover:underline"
  //                           >
  //                             Delete
  //                           </button>
  //                         </td>
  //                       </tr>
  //                     ))}
  //                   </tbody>
  //                 </motion.table>
  //               ) : (
  //                 <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
  //                   {filteredProducts.map((product, index) => (
  //                     <motion.div
  //                       key={product._id}
  //                       layout
  //                       initial={{ scale: 1 }}
  //                       animate={{ scale: 1 }}
  //                       exit={{ scale: 0.9 }}
  //                       whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
  //                       className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200"
  //                     >
  //                       <div className={`h-2 ${product.quantity < product.stock_level ? 'bg-red-500' : 'bg-green-500'}`}></div>
  //                       <div className="p-6">
  //                         <div className="flex justify-between items-start mb-4">
  //                           <h3 className="text-xl font-bold text-gray-800 line-clamp-2">{product.product_name}</h3>
  //                           {product.image ? (
  //                             <img
  //                               src={product.image}
  //                               alt={product.product_name}
  //                               className="w-16 h-16 rounded-lg object-cover ml-2 border-2 border-white shadow-md"
  //                             />
  //                           ) : (
  //                             <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center ml-2 text-gray-400">
  //                               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  //                               </svg>
  //                             </div>
  //                           )}
  //                         </div>
  //                         <div className="text-sm mb-4">
  //                           <p className="text-gray-500">Barcode</p>
  //                           <p className="font-medium">{product.barcode || "N/A"}</p> {/* Display Barcode */}
  //                         </div>
  //                         <div className="grid grid-cols-2 gap-4 mb-4">
  //                           <div className="text-sm">
  //                             <p className="text-gray-500">Category</p>
  //                             <p className="font-medium">{product.category}</p>
  //                           </div>
  //                           <div className="text-sm">
  //                             <p className="text-gray-500">Supplier</p>
  //                             <p className="font-medium">{product.supplier || "N/A"}</p>
  //                           </div>
  //                         </div>
  //                         <div className="grid grid-cols-2 gap-4 mb-4">
  //                           <div className="text-sm">
  //                             <p className="text-gray-500">Purchase Price</p>
  //                             <p className="font-medium">₹{product.purchase_price}</p>
  //                           </div>
  //                           <div className="text-sm">
  //                             <p className="text-gray-500">Sale Price</p>
  //                             <p className="font-medium">₹{product.sale_price}</p>
  //                           </div>
  //                         </div>
  //                         <div className="grid grid-cols-2 gap-4 mb-4">
  //                           <div className="text-sm">
  //                             <p className="text-gray-500">Quantity</p>
  //                             <p className="font-medium">{product.quantity} {product.units}</p>
  //                           </div>
  //                           <div className="text-sm">
  //                             <p className="text-gray-500">Stock Level</p>
  //                             <p className={`font-medium ${product.quantity < product.stock_level ? 'text-red-600' : 'text-green-600'}`}>
  //                               {product.quantity || "0"}
  //                             </p>
  //                           </div>
  //                         </div>
  //                         <div className="grid grid-cols-2 gap-4 mb-4">
  //                           <div className="text-sm">
  //                             <p className="text-gray-500">Tax</p>
  //                             <p className="font-medium">{product.tax || "0"}%</p>
  //                           </div>
  //                           <div className="text-sm">
  //                             <p className="text-gray-500">Discount</p>
  //                             <p className="font-medium">{product.discount || "0"}%</p>
  //                           </div>
  //                         </div>
  //                         <div className="grid grid-cols-2 gap-4 mb-4">
  //                           <div className="text-sm">
  //                             <p className="text-gray-500">Date of Manufacturing</p>
  //                             <p className="font-medium">{product.date_of_manufacturing || "N/A"}</p>
  //                           </div>
  //                           <div className="text-sm">
  //                             <p className="text-gray-500">Valid Till</p>
  //                             <p className="font-medium">{product.valid_till || "N/A"}</p>
  //                           </div>
  //                         </div>
  //                         <div className="bg-blue-50 p-3 rounded-lg mb-4">
  //                           <div className="flex justify-between">
  //                             <p className="text-gray-600 font-medium">Total Value:</p>
  //                             <p className="text-blue-700 font-bold">₹{product.total_value}</p>
  //                           </div>
  //                         </div>
  //                         <div className="flex gap-3 mt-4">
  //                           <button
  //                             onClick={() => handleEditProduct(index)}
  //                             className="flex-1 py-2.5 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-all duration-300 flex items-center justify-center"
  //                           >
  //                             Edit
  //                           </button>
  //                           <button
  //                             onClick={() => handleDeleteProduct(product._id, index)}
  //                             className="flex-1 py-2.5 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition-all duration-300 flex items-center justify-center"
  //                           >
  //                             Delete
  //                           </button>
  //                         </div>
  //                       </div>
  //                     </motion.div>
  //                   ))}
  //                 </motion.div>
  //               )
  //             ) : (
  //               <motion.div
  //                 initial={{ opacity: 0, y: 20 }}
  //                 animate={{ opacity: 1, y: 0 }}
  //                 exit={{ opacity: 0, y: 20 }}
  //                 className="bg-white rounded-2xl p-8 shadow-lg text-center"
  //               >
  //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  //                 </svg>
  //                 <p className="mt-4 text-gray-600">No products found. Start adding some!</p>
  //               </motion.div>
  //             )}
  //           </AnimatePresence>
  //         </motion.section>
  //       </div>
  //     </div>
  //   );
  // };

  // export default ProductDashboard;

  import React, { useState, useEffect, useContext } from "react";
  import { StoreContext } from "./StoreContext";
  import { motion, AnimatePresence } from "framer-motion";
  import Barcode from "react-barcode"; // Import react-barcode

  const ProductDashboard = () => {
    const [products, setProducts] = useState([]);
    const { storeName, storeId } = useContext(StoreContext);
    const [newProduct, setNewProduct] = useState({
      product_name: "",
      quantity: "",
      units: "",
      category: "",
      purchase_price: "",
      sale_price: "",
      tax: "",
      discount: "",
      image: "",
      stock_level: "",
      supplier: "",
      date_of_manufacturing: "",
      valid_till: "",
      barcode: "",
    });

    const [editIndex, setEditIndex] = useState(null);
    const [editId, setEditId] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterCategory, setFilterCategory] = useState("all");
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [viewAsTable, setViewAsTable] = useState(false);
    const API_URL = "http://127.0.0.1:5000/products";

    useEffect(() => {
      if (storeId) {
        setIsLoading(true);
        fetch(`${API_URL}?storeId=${storeId}`)
          .then((res) => {
            if (!res.ok) throw new Error(`Error: ${res.status}`);
            return res.json();
          })
          .then((data) => {
            setProducts(data);
            setIsLoading(false);
          })
          .catch((err) => {
            console.error("Error fetching products:", err);
            setErrorMessage("Failed to fetch products. Please try again.");
            setIsLoading(false);
          });
      }
    }, [storeId]);

    useEffect(() => {
      if (successMessage) {
        const timer = setTimeout(() => setSuccessMessage(null), 3000);
        return () => clearTimeout(timer);
      }
    }, [successMessage]);

    const resetForm = () => {
      setNewProduct({
        product_name: "",
        quantity: "",
        units: "",
        category: "",
        purchase_price: "",
        sale_price: "",
        tax: "",
        discount: "",
        image: "",
        stock_level: "",
        supplier: "",
        date_of_manufacturing: "",
        valid_till: "",
        barcode: "",
      });
      setEditIndex(null);
      setEditId(null);
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewProduct((prev) => ({ ...prev, [name]: value }));
    };

    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };

    const handleCategoryFilter = (category) => {
      setFilterCategory(category);
    };

    const calculateTotalValue = () => {
      const { sale_price, quantity, discount } = newProduct;
      const totalValue =
        sale_price * quantity - (discount > 0 ? (sale_price * quantity * discount) / 100 : 0);
      return totalValue.toFixed(2);
    };

    const isFormValid = () => {
      const { product_name, quantity, units, category, purchase_price, sale_price } = newProduct;
      return product_name && quantity > 0 && units && category && purchase_price > 0 && sale_price > 0;
    };

    const handleAddOrEditProduct = () => {
      if (!isFormValid()) return;

      setIsLoading(true);
      const totalValue = calculateTotalValue();
      const dateAdded = new Date().toISOString().split("T")[0];
      const updatedProduct = { ...newProduct, total_value: totalValue, dateAdded };

      const url = editIndex !== null ? `${API_URL}/${editId}?storeId=${storeId}` : `${API_URL}?storeId=${storeId}`;
      const method = editIndex !== null ? "PUT" : "POST";

      fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message.includes("successfully")) {
            const updatedProducts = editIndex !== null
              ? products.map((p, idx) => (idx === editIndex ? { ...updatedProduct, _id: editId } : p))
              : [...products, { ...updatedProduct, _id: data.product_id, barcode: data.barcode || updatedProduct.barcode }];
            setProducts(updatedProducts);
            resetForm();
            setSuccessMessage(`Product ${editIndex !== null ? "updated" : "added"} successfully!`);
          } else {
            setErrorMessage("Failed to process product. Please try again.");
          }
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(`Error ${method === "POST" ? "adding" : "updating"} product:`, err);
          setErrorMessage("An error occurred. Please try again.");
          setIsLoading(false);
        });
    };

    const handleEditProduct = (index) => {
      const selectedProduct = products[index];
      setNewProduct(selectedProduct);
      setEditIndex(index);
      setEditId(selectedProduct._id);
      document.getElementById("imageInput").value = "";
      document.querySelector(".product-form-section").scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "your_preset_name");

      setIsLoading(true);
      fetch("https://api.cloudinary.com/v1_1/your_cloud_name/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setNewProduct((prev) => ({ ...prev, image: data.secure_url }));
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error uploading image:", err);
          setErrorMessage("Failed to upload image. Please try again.");
          setIsLoading(false);
        });
    };

    const handleValidityTypeChange = (e) => {
      const { value } = e.target;
      setNewProduct((prev) => ({ ...prev, validity_type: value, valid_till: "" }));
    };

    const handleDeleteProduct = (id, index) => {
      if (window.confirm("Are you sure you want to delete this product?")) {
        setIsLoading(true);
        fetch(`${API_URL}/${id}?storeId=${storeId}`, { method: "DELETE" })
          .then((res) => {
            if (!res.ok) throw new Error("Failed to delete product.");
            setProducts((prev) => prev.filter((_, i) => i !== index));
            setSuccessMessage("Product deleted successfully!");
            setIsLoading(false);
          })
          .catch((err) => {
            console.error("Error deleting product:", err);
            setErrorMessage("Failed to delete product. Please try again.");
            setIsLoading(false);
          });
      }
    };

    const categories = ["all", ...new Set(products.map((product) => product.category))];

    const filteredProducts = products.filter((product) => {
      const matchesSearch =
        (product.product_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.barcode?.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = filterCategory === "all" || product.category === filterCategory;
      return matchesSearch && matchesCategory;
    });

    return (
      <div className="font-poppins bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen p-6 text-gray-800">
        <AnimatePresence>
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
            >
              {successMessage}
            </motion.div>
          )}
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-6 right-6 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
              onClick={() => setErrorMessage(null)}
            >
              {errorMessage}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            >
              <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
                <div className="loader w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-700">Loading...</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 px-8 rounded-2xl shadow-xl mb-10"
        >
          <div className="container mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight">
              <span className="block text-xl mb-1 text-blue-200">Welcome to</span>
              {storeName}'s Product Dashboard
            </h1>
            <p className="mt-2 text-blue-200 max-w-xl">
              Manage your inventory, track sales, and optimize your product offerings all in one place.
            </p>
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
            <h3 className="text-gray-500 text-sm font-medium">Total Products</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">{products.length}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500">
            <h3 className="text-gray-500 text-sm font-medium">Categories</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">{categories.length - 1}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
            <h3 className="text-gray-500 text-sm font-medium">Total Value</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">
              ₹{products.reduce((sum, product) => sum + Number(product.total_value || 0), 0).toFixed(2)}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
            <h3 className="text-gray-500 text-sm font-medium">Low Stock Items</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">
              {products.filter((product) => Number(product.quantity) < Number(product.stock_level)).length}
            </p>
          </div>
        </motion.section>

        <div className="flex flex-col lg:flex-row gap-10">
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="product-form-section lg:w-1/3"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                {editIndex !== null ? "Edit Product" : "Add New Product"}
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                  <input
                    type="text"
                    name="product_name"
                    placeholder="Enter product name"
                    value={newProduct.product_name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      placeholder="0"
                      value={newProduct.quantity}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Units</label>
                    <select
                      name="units"
                      value={newProduct.units}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-white"
                    >
                      <option value="">Select Unit</option>
                      <option value="Bag">BAGS (Bag)</option>
                      <option value="Btl">BOTTLES (Btl)</option>
                      <option value="Box">BOX (Box)</option>
                      <option value="Bdl">BUNDLES (Bdl)</option>
                      <option value="Can">CANS (Can)</option>
                      <option value="Ctn">CARTONS (Ctn)</option>
                      <option value="Dzn">DOZENS (Dzn)</option>
                      <option value="Kg">KILOGRAMS (Kg)</option>
                      <option value="Gm">GRAMMES (Gm)</option>
                      <option value="Ltr">LITRE (Ltr)</option>
                      <option value="Mtr">METERS (Mtr)</option>
                      <option value="Ml">MILLILITRE (Ml)</option>
                      <option value="Nos">NUMBERS (Nos)</option>
                      <option value="Pac">PACKS (Pac)</option>
                      <option value="Prs">PAIRS (Prs)</option>
                      <option value="Pcs">PIECES (Pcs)</option>
                      <option value="Qt">QUINTAL (Qt)</option>
                      <option value="Rol">ROLLS (Rol)</option>
                      <option value="Sqf">SQUARE FEET (Sqf)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <input
                    type="text"
                    name="category"
                    placeholder="Enter category"
                    value={newProduct.category}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Purchase Price (₹)</label>
                    <input
                      type="number"
                      name="purchase_price"
                      placeholder="0.00"
                      value={newProduct.purchase_price}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Sale Price (₹)</label>
                    <input
                      type="number"
                      name="sale_price"
                      placeholder="0.00"
                      value={newProduct.sale_price}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tax (%)</label>
                    <input
                      type="number"
                      name="tax"
                      placeholder="0"
                      value={newProduct.tax}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Discount (%)</label>
                    <input
                      type="number"
                      name="discount"
                      placeholder="0"
                      value={newProduct.discount}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
                  <input
                    type="file"
                    name="image"
                    id="imageInput"
                    onChange={handleFileChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  />
                  {newProduct.image && (
                    <div className="mt-4 flex justify-center">
                      <img
                        src={newProduct.image}
                        alt="Product"
                        className="w-32 h-32 rounded-lg object-cover border-4 border-white shadow-lg"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stock Level</label>
                  <input
                    type="number"
                    name="stock_level"
                    placeholder="Current stock quantity"
                    value={newProduct.stock_level}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Supplier</label>
                  <input
                    type="text"
                    name="supplier"
                    placeholder="Supplier name"
                    value={newProduct.supplier}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Manufacturing</label>
                  <input
                    type="date"
                    name="date_of_manufacturing"
                    value={newProduct.date_of_manufacturing}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Valid Till</label>
                  <div className="flex items-center mb-2">
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="validity_type"
                        value="date"
                        checked={newProduct.validity_type === "date"}
                        onChange={handleValidityTypeChange}
                        className="mr-2"
                      />
                      Specific Date
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="validity_type"
                        value="period"
                        checked={newProduct.validity_type === "period"}
                        onChange={handleValidityTypeChange}
                        className="mr-2"
                      />
                      Validity Period
                    </label>
                  </div>
                  {newProduct.validity_type === "date" && (
                    <input
                      type="date"
                      name="valid_till"
                      value={newProduct.valid_till}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    />
                  )}
                  {newProduct.validity_type === "period" && (
                    <input
                      type="text"
                      name="valid_till"
                      placeholder="e.g., 6 months, 1 year"
                      value={newProduct.valid_till}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    />
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Barcode (Optional)</label>
                  <input
                    type="text"
                    name="barcode"
                    placeholder="Enter barcode or leave blank to auto-generate"
                    value={newProduct.barcode}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  />
                  {newProduct.barcode && (
                    <div className="mt-2 flex justify-center">
                      <Barcode value={newProduct.barcode} height={50} width={1.5} fontSize={14} />
                    </div>
                  )}
                </div>
                {newProduct.sale_price && newProduct.quantity && (
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      Total Value: <span className="font-bold text-blue-700">₹{calculateTotalValue()}</span>
                    </p>
                  </div>
                )}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddOrEditProduct}
                  disabled={!isFormValid()}
                  className={`w-full p-4 rounded-lg font-medium text-white shadow-lg transition-all duration-300 
                    ${!isFormValid() ? 'bg-gray-300 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800'}`}
                >
                  {editIndex !== null ? "Update Product" : "Add Product"}
                </motion.button>
                {editIndex !== null && (
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={resetForm}
                    className="w-full p-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300"
                  >
                    Cancel Edit
                  </motion.button>
                )}
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:w-2/3"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-2/3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Search Products</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by name, category, or barcode..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    />
                    <div className="absolute left-3 top-3.5 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Category</label>
                  <select
                    value={filterCategory}
                    onChange={(e) => handleCategoryFilter(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-white"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Products {searchQuery || filterCategory !== "all" ? "(Filtered)" : ""}
              </h2>
              <button
                onClick={() => setViewAsTable(!viewAsTable)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                {viewAsTable ? "View as Cards" : "View as Table"}
              </button>
            </div>

            <AnimatePresence>
              {filteredProducts.length > 0 ? (
                viewAsTable ? (
                  <motion.table
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg"
                  >
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-3 px-4 border-b">Product Name</th>
                        <th className="py-3 px-4 border-b">Barcode</th>
                        <th className="py-3 px-4 border-b">Category</th>
                        <th className="py-3 px-4 border-b">Supplier</th>
                        <th className="py-3 px-4 border-b">Stock Level</th>
                        <th className="py-3 px-4 border-b">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProducts.map((product, index) => (
                        <tr key={product._id} className="hover:bg-gray-50">
                          <td className="py-3 px-4 border-b">{product.product_name}</td>
                          <td className="py-3 px-4 border-b">
                            {product.barcode ? (
                              <Barcode value={product.barcode} height={30} width={1} fontSize={12} />
                            ) : (
                              "N/A"
                            )}
                          </td>
                          <td className="py-3 px-4 border-b">{product.category}</td>
                          <td className="py-3 px-4 border-b">{product.supplier || "N/A"}</td>
                          <td className={`py-3 px-4 border-b ${product.quantity < product.stock_level ? 'text-red-600' : 'text-green-600'}`}>
                            {product.quantity || "0"}
                          </td>
                          <td className="py-3 px-4 border-b">
                            <button
                              onClick={() => handleEditProduct(index)}
                              className="text-blue-500 hover:underline"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(product._id, index)}
                              className="ml-2 text-red-500 hover:underline"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </motion.table>
                ) : (
                  <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProducts.map((product, index) => (
                      <motion.div
                        key={product._id}
                        layout
                        initial={{ scale: 1 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200"
                      >
                        <div className={`h-2 ${product.quantity < product.stock_level ? 'bg-red-500' : 'bg-green-500'}`}></div>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-gray-800 line-clamp-2">{product.product_name}</h3>
                            {product.image ? (
                              <img
                                src={product.image}
                                alt={product.product_name}
                                className="w-16 h-16 rounded-lg object-cover ml-2 border-2 border-white shadow-md"
                              />
                            ) : (
                              <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center ml-2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <div className="text-sm mb-4">
                            <p className="text-gray-500">Barcode</p>
                            {product.barcode ? (
                              <Barcode value={product.barcode} height={40} width={1.2} fontSize={14} />
                            ) : (
                              <p className="font-medium">N/A</p>
                            )}
                          </div>
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-sm">
                              <p className="text-gray-500">Category</p>
                              <p className="font-medium">{product.category}</p>
                            </div>
                            <div className="text-sm">
                              <p className="text-gray-500">Supplier</p>
                              <p className="font-medium">{product.supplier || "N/A"}</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-sm">
                              <p className="text-gray-500">Purchase Price</p>
                              <p className="font-medium">₹{product.purchase_price}</p>
                            </div>
                            <div className="text-sm">
                              <p className="text-gray-500">Sale Price</p>
                              <p className="font-medium">₹{product.sale_price}</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-sm">
                              <p className="text-gray-500">Quantity</p>
                              <p className="font-medium">{product.quantity} {product.units}</p>
                            </div>
                            <div className="text-sm">
                              <p className="text-gray-500">Stock Level</p>
                              <p className={`font-medium ${product.quantity < product.stock_level ? 'text-red-600' : 'text-green-600'}`}>
                                {product.quantity || "0"}
                              </p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-sm">
                              <p className="text-gray-500">Tax</p>
                              <p className="font-medium">{product.tax || "0"}%</p>
                            </div>
                            <div className="text-sm">
                              <p className="text-gray-500">Discount</p>
                              <p className="font-medium">{product.discount || "0"}%</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-sm">
                              <p className="text-gray-500">Date of Manufacturing</p>
                              <p className="font-medium">{product.date_of_manufacturing || "N/A"}</p>
                            </div>
                            <div className="text-sm">
                              <p className="text-gray-500">Valid Till</p>
                              <p className="font-medium">{product.valid_till || "N/A"}</p>
                            </div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded-lg mb-4">
                            <div className="flex justify-between">
                              <p className="text-gray-600 font-medium">Total Value:</p>
                              <p className="text-blue-700 font-bold">₹{product.total_value}</p>
                            </div>
                          </div>
                          <div className="flex gap-3 mt-4">
                            <button
                              onClick={() => handleEditProduct(index)}
                              className="flex-1 py-2.5 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-all duration-300 flex items-center justify-center"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(product._id, index)}
                              className="flex-1 py-2.5 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition-all duration-300 flex items-center justify-center"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="mt-4 text-gray-600">No products found. Start adding some!</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        </div>
      </div>
    );
  };

  export default ProductDashboard;