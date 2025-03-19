// // // // // // // // // // // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // // // // // // // // // // import { StoreContext } from "./StoreContext"; // Import StoreContext

// // // // // // // // // // // // // // const Billing = () => {
// // // // // // // // // // // // // //   const [products, setProducts] = useState([]); // Products added to the bill
// // // // // // // // // // // // // //   const [allProducts, setAllProducts] = useState([]); // All available products
// // // // // // // // // // // // // //   const [selectedProduct, setSelectedProduct] = useState(""); // Currently selected product
// // // // // // // // // // // // // //   const [quantity, setQuantity] = useState(1); // Quantity input
// // // // // // // // // // // // // //   const [error, setError] = useState(null); // Error handling
// // // // // // // // // // // // // //   const [customerName, setCustomerName] = useState(""); // Customer name
// // // // // // // // // // // // // //   const [customerPhone, setCustomerPhone] = useState(""); // Customer phone number
// // // // // // // // // // // // // //   const [customers, setCustomers] = useState([]); // List of customers
// // // // // // // // // // // // // //   const [selectedCustomer, setSelectedCustomer] = useState(null); // Selected customer
// // // // // // // // // // // // // //   const { storeName, storeId } = useContext(StoreContext); // Store name and storeId from context

// // // // // // // // // // // // // //   // Fetching products from backend
// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     const fetchProducts = async () => {
// // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // //         const response = await fetch("http://localhost:5002/api/products", {
// // // // // // // // // // // // // //           headers: { storeId }, // Send storeId in headers
// // // // // // // // // // // // // //         });
// // // // // // // // // // // // // //         if (!response.ok) {
// // // // // // // // // // // // // //           throw new Error("Failed to fetch products");
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //         const data = await response.json();
// // // // // // // // // // // // // //         console.log("Fetched Products: ", data); // Log fetched products to console

// // // // // // // // // // // // // //         // Check if data is correct
// // // // // // // // // // // // // //         if (data && Array.isArray(data) && data.length > 0) {
// // // // // // // // // // // // // //           setAllProducts(data);
// // // // // // // // // // // // // //           setSelectedProduct(data[0].product_name); // Set first product as default
// // // // // // // // // // // // // //         } else {
// // // // // // // // // // // // // //           console.error("No products found or incorrect data format.");
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //       } catch (error) {
// // // // // // // // // // // // // //         console.error("Error fetching products:", error);
// // // // // // // // // // // // // //         setError("Failed to fetch products.");
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     };

// // // // // // // // // // // // // //     if (storeId) {
// // // // // // // // // // // // // //       fetchProducts();
// // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // //       console.error("Store ID not provided.");
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   }, [storeId]);

// // // // // // // // // // // // // //   // Fetching customers from backend
// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     const fetchCustomers = async () => {
// // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // //         const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}`);
// // // // // // // // // // // // // //         if (!response.ok) {
// // // // // // // // // // // // // //           throw new Error("Failed to fetch customers");
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //         const data = await response.json();
// // // // // // // // // // // // // //         setCustomers(data.customers);
// // // // // // // // // // // // // //       } catch (error) {
// // // // // // // // // // // // // //         console.error("Error fetching customers:", error);
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     };

// // // // // // // // // // // // // //     if (storeId) {
// // // // // // // // // // // // // //       fetchCustomers();
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   }, [storeId]);

// // // // // // // // // // // // // //   // Adding a product to the bill
// // // // // // // // // // // // // //   const addProduct = () => {
// // // // // // // // // // // // // //     const selectedProductData = allProducts.find(
// // // // // // // // // // // // // //       (p) => p.product_name === selectedProduct
// // // // // // // // // // // // // //     );

// // // // // // // // // // // // // //     if (selectedProductData) {
// // // // // // // // // // // // // //       setProducts((prevProducts) => {
// // // // // // // // // // // // // //         const existingProduct = prevProducts.find(
// // // // // // // // // // // // // //           (p) => p.product_name === selectedProductData.product_name
// // // // // // // // // // // // // //         );

// // // // // // // // // // // // // //         if (existingProduct) {
// // // // // // // // // // // // // //           // Update quantity if product already exists
// // // // // // // // // // // // // //           return prevProducts.map((p) =>
// // // // // // // // // // // // // //             p.product_name === selectedProductData.product_name
// // // // // // // // // // // // // //               ? { ...p, quantity: p.quantity + parseInt(quantity) }
// // // // // // // // // // // // // //               : p
// // // // // // // // // // // // // //           );
// // // // // // // // // // // // // //         } else {
// // // // // // // // // // // // // //           // Add new product to the bill
// // // // // // // // // // // // // //           return [
// // // // // // // // // // // // // //             ...prevProducts,
// // // // // // // // // // // // // //             {
// // // // // // // // // // // // // //               id: selectedProductData.id,
// // // // // // // // // // // // // //               product_name: selectedProductData.product_name,
// // // // // // // // // // // // // //               sale_price: parseFloat(selectedProductData.sale_price),
// // // // // // // // // // // // // //               quantity: parseInt(quantity),
// // // // // // // // // // // // // //             },
// // // // // // // // // // // // // //           ];
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //       });
// // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // //       console.error("Selected product not found in all products list.");
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     setQuantity(1); // Reset quantity input
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   // Deleting a product from the bill
// // // // // // // // // // // // // //   const deleteProduct = (productName) => {
// // // // // // // // // // // // // //     setProducts(products.filter((p) => p.product_name !== productName));
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   // Calculating the total amount
// // // // // // // // // // // // // //   const totalAmount = products.reduce(
// // // // // // // // // // // // // //     (total, product) => total + product.sale_price * product.quantity,
// // // // // // // // // // // // // //     0
// // // // // // // // // // // // // //   );

// // // // // // // // // // // // // //   // Generating the bill in a new window
// // // // // // // // // // // // // //   const printBill = async () => {
// // // // // // // // // // // // // //     if (!products || products.length === 0) {
// // // // // // // // // // // // // //       alert("No items to print!");
// // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     // Send the bill data to backend to generate the final bill and update stock
// // // // // // // // // // // // // //     const response = await fetch("http://localhost:5002/api/generate-bill", {
// // // // // // // // // // // // // //       method: "POST",
// // // // // // // // // // // // // //       headers: {
// // // // // // // // // // // // // //         "Content-Type": "application/json",
// // // // // // // // // // // // // //         storeId, // Pass storeId instead of storeName
// // // // // // // // // // // // // //       },
// // // // // // // // // // // // // //       body: JSON.stringify({
// // // // // // // // // // // // // //         products,
// // // // // // // // // // // // // //         customerName,
// // // // // // // // // // // // // //         customerPhone,
// // // // // // // // // // // // // //       }),
// // // // // // // // // // // // // //     });

// // // // // // // // // // // // // //     if (!response.ok) {
// // // // // // // // // // // // // //       const data = await response.json();
// // // // // // // // // // // // // //       alert(data.error || "Failed to generate bill");
// // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     const data = await response.json();
// // // // // // // // // // // // // //     const billSummary = data; // Bill summary returned from backend

// // // // // // // // // // // // // //     const billWindow = window.open("", "Bill", "width=800,height=600");

// // // // // // // // // // // // // //     // Keep your original bill content here
// // // // // // // // // // // // // //     const billContent = `<html>
// // // // // // // // // // // // // //   <head>
// // // // // // // // // // // // // //     <title>${storeName} - Bill</title>
// // // // // // // // // // // // // //     <style>
// // // // // // // // // // // // // //       /* Basic Reset */
// // // // // // // // // // // // // //       * {
// // // // // // // // // // // // // //         margin: 0;
// // // // // // // // // // // // // //         padding: 0;
// // // // // // // // // // // // // //         box-sizing: border-box;
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //       body {
// // // // // // // // // // // // // //         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
// // // // // // // // // // // // // //         background-color: #f0f1f6;
// // // // // // // // // // // // // //         color: #333;
// // // // // // // // // // // // // //         line-height: 1.6;
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //       .container {
// // // // // // // // // // // // // //         width: 80%;
// // // // // // // // // // // // // //         margin: 0 auto;
// // // // // // // // // // // // // //         background-color: #ffffff;
// // // // // // // // // // // // // //         border-radius: 12px;
// // // // // // // // // // // // // //         box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
// // // // // // // // // // // // // //         padding: 40px;
// // // // // // // // // // // // // //         overflow: hidden;
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //       .header {
// // // // // // // // // // // // // //         text-align: center;
// // // // // // // // // // // // // //         padding: 20px 0;
// // // // // // // // // // // // // //         background: linear-gradient(135deg, #00bcd4, #00796b);
// // // // // // // // // // // // // //         color: #ffffff;
// // // // // // // // // // // // // //         border-radius: 12px;
// // // // // // // // // // // // // //         margin-bottom: 30px;
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //       .header h1 {
// // // // // // // // // // // // // //         font-size: 36px;
// // // // // // // // // // // // // //         font-weight: 700;
// // // // // // // // // // // // // //         letter-spacing: 2px;
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //       .header p {
// // // // // // // // // // // // // //         font-size: 18px;
// // // // // // // // // // // // // //         margin-top: 10px;
// // // // // // // // // // // // // //         opacity: 0.9;
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //       .bill-info {
// // // // // // // // // // // // // //         display: flex;
// // // // // // // // // // // // // //         justify-content: space-between;
// // // // // // // // // // // // // //         margin-bottom: 30px;
// // // // // // // // // // // // // //         padding: 10px 0;
// // // // // // // // // // // // // //         font-size: 16px;
// // // // // // // // // // // // // //         color: #444;
// // // // // // // // // // // // // //         border-bottom: 2px solid #f4f4f4;
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //       .bill-info div {
// // // // // // // // // // // // // //         flex: 1;
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //       .bill-info .label {
// // // // // // // // // // // // // //         font-weight: 600;
// // // // // // // // // // // // // //         opacity: 0.8;
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //       table {
// // // // // // // // // // // // // //         width: 100%;
// // // // // // // // // // // // // //         margin-bottom: 30px;
// // // // // // // // // // // // // //         border-collapse: collapse;
// // // // // // // // // // // // // //         text-align: center;
// // // // // // // // // // // // // //         border-radius: 8px;
// // // // // // // // // // // // // //         overflow: hidden;
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //       th, td {
// // // // // // // // // // // // // //         padding: 15px;
// // // // // // // // // // // // // //         font-size: 16px;
// // // // // // // // // // // // // //         text-align: center;
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //       th {
// // // // // // // // // // // // // //         background-color: #00bcd4;
// // // // // // // // // // // // // //         color: #ffffff;
// // // // // // // // // // // // // //         text-transform: uppercase;
// // // // // // // // // // // // // //         letter-spacing: 1px;
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //       td {
// // // // // // // // // // // // // //         background-color: #fafafa;
// // // // // // // // // // // // // //         color: #333;
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //       tr:nth-child(even) td {
// // // // // // // // // // // // // //         background-color: #f5f5f5;
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //       .total-row {
// // // // // // // // // // // // // //         background-color: #00bcd4;
// // // // // // // // // // // // // //         color: #ffffff;
// // // // // // // // // // // // // //         font-weight: bold;
// // // // // // // // // // // // // //         font-size: 18px;
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //       .footer {
// // // // // // // // // // // // // //         text-align: center;
// // // // // // // // // // // // // //         margin-top: 40px;
// // // // // // // // // // // // // //         padding: 20px;
// // // // // // // // // // // // // //         background-color: #00bcd4;
// // // // // // // // // // // // // //         color: #fff;
// // // // // // // // // // // // // //         border-radius: 12px;
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //       .footer p {
// // // // // // // // // // // // // //         margin: 0;
// // // // // // // // // // // // // //         font-size: 16px;
// // // // // // // // // // // // // //         font-style: italic;
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //       .print-btn {
// // // // // // // // // // // // // //         display: inline-block;
// // // // // // // // // // // // // //         padding: 15px 30px;
// // // // // // // // // // // // // //         margin-top: 20px;
// // // // // // // // // // // // // //         background-color: #28a745;
// // // // // // // // // // // // // //         color: white;
// // // // // // // // // // // // // //         border: none;
// // // // // // // // // // // // // //         border-radius: 8px;
// // // // // // // // // // // // // //         cursor: pointer;
// // // // // // // // // // // // // //         font-size: 16px;
// // // // // // // // // // // // // //         transition: background-color 0.3s ease-in-out;
// // // // // // // // // // // // // //         text-align: center;
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //       .print-btn:hover {
// // // // // // // // // // // // // //         background-color: #218838;
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //       /* Print Media Query */
// // // // // // // // // // // // // //       @media print {
// // // // // // // // // // // // // //         body {
// // // // // // // // // // // // // //           background-color: #fff;
// // // // // // // // // // // // // //           color: #333;
// // // // // // // // // // // // // //         }

// // // // // // // // // // // // // //         .container {
// // // // // // // // // // // // // //           box-shadow: none;
// // // // // // // // // // // // // //           margin: 0;
// // // // // // // // // // // // // //           padding: 20px;
// // // // // // // // // // // // // //         }

// // // // // // // // // // // // // //         .header, .footer {
// // // // // // // // // // // // // //           background-color: #00bcd4;
// // // // // // // // // // // // // //           color: #fff;
// // // // // // // // // // // // // //         }

// // // // // // // // // // // // // //         .footer {
// // // // // // // // // // // // // //           font-size: 14px;
// // // // // // // // // // // // // //           text-align: center;
// // // // // // // // // // // // // //         }

// // // // // // // // // // // // // //         .print-btn {
// // // // // // // // // // // // // //           display: none;
// // // // // // // // // // // // // //         }

// // // // // // // // // // // // // //         table th, table td {
// // // // // // // // // // // // // //           border: 1px solid #ddd;
// // // // // // // // // // // // // //         }

// // // // // // // // // // // // // //         .bill-info {
// // // // // // // // // // // // // //           font-size: 14px;
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     </style>
// // // // // // // // // // // // // //   </head>
// // // // // // // // // // // // // //   <body>
// // // // // // // // // // // // // //     <div class="container">
// // // // // // // // // // // // // //       <div class="header">
// // // // // // // // // // // // // //         <h1>${storeName} - Invoice</h1>
// // // // // // // // // // // // // //         <p>${new Date().toLocaleString()}</p>
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       <div class="bill-info">
// // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // //           <p class="label">Customer Name:</p>
// // // // // // // // // // // // // //           <p>${customerName}</p>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // //           <p class="label">Phone Number:</p>
// // // // // // // // // // // // // //           <p>${customerPhone}</p>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       <table>
// // // // // // // // // // // // // //         <thead>
// // // // // // // // // // // // // //           <tr>
// // // // // // // // // // // // // //             <th>Product Name</th>
// // // // // // // // // // // // // //             <th>Price</th>
// // // // // // // // // // // // // //             <th>Quantity</th>
// // // // // // // // // // // // // //             <th>Total</th>
// // // // // // // // // // // // // //           </tr>
// // // // // // // // // // // // // //         </thead>
// // // // // // // // // // // // // //         <tbody>
// // // // // // // // // // // // // //           ${products.map(product => `
// // // // // // // // // // // // // //             <tr>
// // // // // // // // // // // // // //               <td>${product.product_name}</td>
// // // // // // // // // // // // // //               <td>${product.sale_price.toFixed(2)}</td>
// // // // // // // // // // // // // //               <td>${product.quantity}</td>
// // // // // // // // // // // // // //               <td>${(product.sale_price * product.quantity).toFixed(2)}</td>
// // // // // // // // // // // // // //             </tr>
// // // // // // // // // // // // // //           `).join('')}
// // // // // // // // // // // // // //           <tr class="total-row">
// // // // // // // // // // // // // //             <td colspan="3">Total Amount</td>
// // // // // // // // // // // // // //             <td>${totalAmount.toFixed(2)}</td>
// // // // // // // // // // // // // //           </tr>
// // // // // // // // // // // // // //         </tbody>
// // // // // // // // // // // // // //       </table>

// // // // // // // // // // // // // //       <div class="footer">
// // // // // // // // // // // // // //         <p>Thank you for shopping with us!</p>
// // // // // // // // // // // // // //         <button class="print-btn" onclick="window.print()">Print this Bill</button>
// // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   </body>
// // // // // // // // // // // // // // </html>`;

// // // // // // // // // // // // // //     billWindow.document.write(billContent);
// // // // // // // // // // // // // //     billWindow.document.close();
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   // Handle customer selection from dropdown
// // // // // // // // // // // // // //   const handleCustomerSelect = (e) => {
// // // // // // // // // // // // // //     const selectedCustomerPhone = e.target.value;
// // // // // // // // // // // // // //     const customer = customers.find((c) => c.phone === selectedCustomerPhone);
// // // // // // // // // // // // // //     setSelectedCustomer(customer);
// // // // // // // // // // // // // //     setCustomerName(customer ? customer.name : "");
// // // // // // // // // // // // // //     setCustomerPhone(customer ? customer.phone : "");
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   // Handle new customer entry and save it to database
// // // // // // // // // // // // // //   const handleNewCustomerSave = async () => {
// // // // // // // // // // // // // //     if (!customerName || !customerPhone) {
// // // // // // // // // // // // // //       alert("Please enter valid customer details.");
// // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // //       const response = await fetch("http://localhost:5008/api/customers", {
// // // // // // // // // // // // // //         method: "POST",
// // // // // // // // // // // // // //         headers: {
// // // // // // // // // // // // // //           "Content-Type": "application/json",
// // // // // // // // // // // // // //         },
// // // // // // // // // // // // // //         body: JSON.stringify({
// // // // // // // // // // // // // //           name: customerName,
// // // // // // // // // // // // // //           phone: customerPhone,
// // // // // // // // // // // // // //           storeId, // Store ID to associate customer with store
// // // // // // // // // // // // // //         }),
// // // // // // // // // // // // // //       });

// // // // // // // // // // // // // //       if (!response.ok) {
// // // // // // // // // // // // // //         throw new Error("Failed to add customer");
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //       const newCustomer = await response.json();
// // // // // // // // // // // // // //       setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
// // // // // // // // // // // // // //       alert("Customer added successfully!");
// // // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // // //       console.error("Error adding customer:", error);
// // // // // // // // // // // // // //       alert("Failed to add customer.");
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
// // // // // // // // // // // // // //       <h1 className="text-3xl font-bold text-center mb-6">BILL GENERATION</h1>
// // // // // // // // // // // // // //       <header className="text-2xl font-semibold text-center mb-6">
// // // // // // // // // // // // // //         {storeName} Store
// // // // // // // // // // // // // //       </header>

// // // // // // // // // // // // // //       {/* Product Selection */}
// // // // // // // // // // // // // //       <div className="flex flex-col md:flex-row gap-4 mb-6">
// // // // // // // // // // // // // //         <label className="flex-1">
// // // // // // // // // // // // // //           <span className="block text-sm font-medium text-gray-700">Select Product:</span>
// // // // // // // // // // // // // //           <select
// // // // // // // // // // // // // //             value={selectedProduct}
// // // // // // // // // // // // // //             onChange={(e) => setSelectedProduct(e.target.value)}
// // // // // // // // // // // // // //             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             {allProducts.map((product) => (
// // // // // // // // // // // // // //               <option key={product.id} value={product.product_name}>
// // // // // // // // // // // // // //                 {product.product_name} - ${parseFloat(product.sale_price).toFixed(2)}
// // // // // // // // // // // // // //               </option>
// // // // // // // // // // // // // //             ))}
// // // // // // // // // // // // // //           </select>
// // // // // // // // // // // // // //         </label>
// // // // // // // // // // // // // //         <label className="flex-1">
// // // // // // // // // // // // // //           <span className="block text-sm font-medium text-gray-700">Enter Quantity:</span>
// // // // // // // // // // // // // //           <input
// // // // // // // // // // // // // //             type="number"
// // // // // // // // // // // // // //             value={quantity}
// // // // // // // // // // // // // //             min="1"
// // // // // // // // // // // // // //             onChange={(e) => setQuantity(e.target.value)}
// // // // // // // // // // // // // //             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
// // // // // // // // // // // // // //           />
// // // // // // // // // // // // // //         </label>
// // // // // // // // // // // // // //         <button
// // // // // // // // // // // // // //           onClick={addProduct}
// // // // // // // // // // // // // //           className="mt-6 md:mt-0 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
// // // // // // // // // // // // // //         >
// // // // // // // // // // // // // //           Add Product
// // // // // // // // // // // // // //         </button>
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       {/* Customer Details */}
// // // // // // // // // // // // // //       <div className="mb-6">
// // // // // // // // // // // // // //         <label className="block text-sm font-medium text-gray-700">Select Customer:</label>
// // // // // // // // // // // // // //         <select
// // // // // // // // // // // // // //           value={customerPhone}
// // // // // // // // // // // // // //           onChange={handleCustomerSelect}
// // // // // // // // // // // // // //           className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
// // // // // // // // // // // // // //         >
// // // // // // // // // // // // // //           <option value="">Select Customer</option>
// // // // // // // // // // // // // //           {customers.map((customer) => (
// // // // // // // // // // // // // //             <option key={customer.phone} value={customer.phone}>
// // // // // // // // // // // // // //               {customer.name} - {customer.phone}
// // // // // // // // // // // // // //             </option>
// // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // //         </select>

// // // // // // // // // // // // // //         {/* If no customer is selected, allow manual input */}
// // // // // // // // // // // // // //         {!selectedCustomer && (
// // // // // // // // // // // // // //           <div className="mt-4">
// // // // // // // // // // // // // //             <label className="block text-sm font-medium text-gray-700">Customer Name:</label>
// // // // // // // // // // // // // //             <input
// // // // // // // // // // // // // //               type="text"
// // // // // // // // // // // // // //               value={customerName}
// // // // // // // // // // // // // //               onChange={(e) => setCustomerName(e.target.value)}
// // // // // // // // // // // // // //               placeholder="Enter customer name"
// // // // // // // // // // // // // //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //             <label className="block text-sm font-medium text-gray-700 mt-2">
// // // // // // // // // // // // // //               Customer Phone:
// // // // // // // // // // // // // //             </label>
// // // // // // // // // // // // // //             <input
// // // // // // // // // // // // // //               type="text"
// // // // // // // // // // // // // //               value={customerPhone}
// // // // // // // // // // // // // //               onChange={(e) => setCustomerPhone(e.target.value)}
// // // // // // // // // // // // // //               placeholder="Enter customer phone"
// // // // // // // // // // // // // //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //             <button
// // // // // // // // // // // // // //               onClick={handleNewCustomerSave}
// // // // // // // // // // // // // //               className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //               Save New Customer
// // // // // // // // // // // // // //             </button>
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         )}
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       {/* Added Products Table */}
// // // // // // // // // // // // // //       <table className="w-full mb-6">
// // // // // // // // // // // // // //         <thead>
// // // // // // // // // // // // // //           <tr className="bg-blue-500 text-white">
// // // // // // // // // // // // // //             <th className="p-2">Product Name</th>
// // // // // // // // // // // // // //             <th className="p-2">Price</th>
// // // // // // // // // // // // // //             <th className="p-2">Quantity</th>
// // // // // // // // // // // // // //             <th className="p-2">Total</th>
// // // // // // // // // // // // // //             <th className="p-2">Action</th>
// // // // // // // // // // // // // //           </tr>
// // // // // // // // // // // // // //         </thead>
// // // // // // // // // // // // // //         <tbody>
// // // // // // // // // // // // // //           {products.length > 0 ? (
// // // // // // // // // // // // // //             products.map((product) => (
// // // // // // // // // // // // // //               <tr key={product.id} className="border-b">
// // // // // // // // // // // // // //                 <td className="p-2 text-center">{product.product_name}</td>
// // // // // // // // // // // // // //                 <td className="p-2 text-center">${product.sale_price.toFixed(2)}</td>
// // // // // // // // // // // // // //                 <td className="p-2 text-center">{product.quantity}</td>
// // // // // // // // // // // // // //                 <td className="p-2 text-center">
// // // // // // // // // // // // // //                   ${(product.sale_price * product.quantity).toFixed(2)}
// // // // // // // // // // // // // //                 </td>
// // // // // // // // // // // // // //                 <td className="p-2 text-center">
// // // // // // // // // // // // // //                   <button
// // // // // // // // // // // // // //                     onClick={() => deleteProduct(product.product_name)}
// // // // // // // // // // // // // //                     className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
// // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // //                     Delete
// // // // // // // // // // // // // //                   </button>
// // // // // // // // // // // // // //                 </td>
// // // // // // // // // // // // // //               </tr>
// // // // // // // // // // // // // //             ))
// // // // // // // // // // // // // //           ) : (
// // // // // // // // // // // // // //             <tr>
// // // // // // // // // // // // // //               <td colSpan="5" className="p-2 text-center">
// // // // // // // // // // // // // //                 No products added to the bill yet.
// // // // // // // // // // // // // //               </td>
// // // // // // // // // // // // // //             </tr>
// // // // // // // // // // // // // //           )}
// // // // // // // // // // // // // //         </tbody>
// // // // // // // // // // // // // //       </table>

// // // // // // // // // // // // // //       {/* Bill Summary and Print */}
// // // // // // // // // // // // // //       <div className="text-center">
// // // // // // // // // // // // // //         <button
// // // // // // // // // // // // // //           onClick={printBill}
// // // // // // // // // // // // // //           className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
// // // // // // // // // // // // // //         >
// // // // // // // // // // // // // //           Generate Bill
// // // // // // // // // // // // // //         </button>
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       {/* Error Message */}
// // // // // // // // // // // // // //       {error && <p className="text-red-500 text-center mt-4">{error}</p>}
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default Billing;

// // // // // // // // // // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // // // // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // // // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // // // // // // // // const Billing = () => {
// // // // // // // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // // // // // // //   const [allProducts, setAllProducts] = useState([]);
// // // // // // // // // // // // //   const [selectedProduct, setSelectedProduct] = useState("");
// // // // // // // // // // // // //   const [quantity, setQuantity] = useState(1);
// // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // //   const [customerName, setCustomerName] = useState("");
// // // // // // // // // // // // //   const [customerPhone, setCustomerPhone] = useState("");
// // // // // // // // // // // // //   const [customers, setCustomers] = useState([]);
// // // // // // // // // // // // //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// // // // // // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // // // // // //   const [loadingCustomers, setLoadingCustomers] = useState(true);
// // // // // // // // // // // // //   const [saving, setSaving] = useState(false);
// // // // // // // // // // // // //   const { storeName, storeId } = useContext(StoreContext);
  
// // // // // // // // // // // // //   const userId=localStorage.getItem("userId");
// // // // // // // // // // // // //   // Fetching products from backend
// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const fetchProducts = async () => {
// // // // // // // // // // // // //       setLoading(true);
// // // // // // // // // // // // //       try {
// // // // // // // // // // // // //         const response = await fetch("http://localhost:5002/api/products", {
// // // // // // // // // // // // //           headers: { storeId },
// // // // // // // // // // // // //         });
// // // // // // // // // // // // //         if (!response.ok) {
// // // // // // // // // // // // //           throw new Error("Failed to fetch products");
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //         const data = await response.json();

// // // // // // // // // // // // //         if (data && Array.isArray(data) && data.length > 0) {
// // // // // // // // // // // // //           setAllProducts(data);
// // // // // // // // // // // // //           setSelectedProduct(data[0].product_name);
// // // // // // // // // // // // //         } else {
// // // // // // // // // // // // //           console.error("No products found or incorrect data format.");
// // // // // // // // // // // // //           setError("No products available. Please add products first.");
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //       } catch (error) {
// // // // // // // // // // // // //         console.error("Error fetching products:", error);
// // // // // // // // // // // // //         setError("Failed to fetch products. Please check your connection.");
// // // // // // // // // // // // //       } finally {
// // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     };

// // // // // // // // // // // // //     if (storeId) {
// // // // // // // // // // // // //       fetchProducts();
// // // // // // // // // // // // //     } else {
// // // // // // // // // // // // //       console.error("Store ID not provided.");
// // // // // // // // // // // // //       setError("Store identification failed. Please try again.");
// // // // // // // // // // // // //       setLoading(false);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   }, [storeId]);

// // // // // // // // // // // // //   // Fetching customers from backend
// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const fetchCustomers = async () => {
// // // // // // // // // // // // //       setLoadingCustomers(true);
// // // // // // // // // // // // //       try {
// // // // // // // // // // // // //         const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}`);
// // // // // // // // // // // // //         if (!response.ok) {
// // // // // // // // // // // // //           throw new Error("Failed to fetch customers");
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //         const data = await response.json();
// // // // // // // // // // // // //         setCustomers(data.customers);
// // // // // // // // // // // // //       } catch (error) {
// // // // // // // // // // // // //         console.error("Error fetching customers:", error);
// // // // // // // // // // // // //       } finally {
// // // // // // // // // // // // //         setLoadingCustomers(false);
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     };

// // // // // // // // // // // // //     if (storeId) {
// // // // // // // // // // // // //       fetchCustomers();
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   }, [storeId]);
// // // // // // // // // // // // //   // Fetch customer balance from Khatabook
// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     if (customerPhone) {
// // // // // // // // // // // // //       const fetchCustomerBalance = async () => {
// // // // // // // // // // // // //         try {
// // // // // // // // // // // // //           const response = await fetch(`http://localhost:5002/api/khatabook/customers/${customerPhone}/balance`, {
// // // // // // // // // // // // //             headers: { storeId },
// // // // // // // // // // // // //           });
// // // // // // // // // // // // //           if (!response.ok) {
// // // // // // // // // // // // //             throw new Error("Failed to fetch customer balance");
// // // // // // // // // // // // //           }
// // // // // // // // // // // // //           const data = await response.json();
// // // // // // // // // // // // //           setCustomerBalance(data.balance);
// // // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // // //           console.error("Error fetching customer balance:", error);
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //       };

// // // // // // // // // // // // //       fetchCustomerBalance();
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   }, [customerPhone, storeId]);
// // // // // // // // // // // // //   // Adding a product to the bill
// // // // // // // // // // // // //   const addProduct = () => {
// // // // // // // // // // // // //     const selectedProductData = allProducts.find(
// // // // // // // // // // // // //       (p) => p.product_name === selectedProduct
// // // // // // // // // // // // //     );

// // // // // // // // // // // // //     if (selectedProductData) {
// // // // // // // // // // // // //       setProducts((prevProducts) => {
// // // // // // // // // // // // //         const existingProduct = prevProducts.find(
// // // // // // // // // // // // //           (p) => p.product_name === selectedProductData.product_name
// // // // // // // // // // // // //         );

// // // // // // // // // // // // //         if (existingProduct) {
// // // // // // // // // // // // //           // Update quantity if product already exists
// // // // // // // // // // // // //           return prevProducts.map((p) =>
// // // // // // // // // // // // //             p.product_name === selectedProductData.product_name
// // // // // // // // // // // // //               ? { ...p, quantity: p.quantity + parseInt(quantity) }
// // // // // // // // // // // // //               : p
// // // // // // // // // // // // //           );
// // // // // // // // // // // // //         } else {
// // // // // // // // // // // // //           // Add new product to the bill
// // // // // // // // // // // // //           return [
// // // // // // // // // // // // //             ...prevProducts,
// // // // // // // // // // // // //             {
// // // // // // // // // // // // //               id: selectedProductData.id,
// // // // // // // // // // // // //               product_name: selectedProductData.product_name,
// // // // // // // // // // // // //               sale_price: parseFloat(selectedProductData.sale_price),
// // // // // // // // // // // // //               quantity: parseInt(quantity),
// // // // // // // // // // // // //             },
// // // // // // // // // // // // //           ];
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //       });
// // // // // // // // // // // // //     } else {
// // // // // // // // // // // // //       console.error("Selected product not found in all products list.");
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     setQuantity(1); // Reset quantity input
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Deleting a product from the bill
// // // // // // // // // // // // //   const deleteProduct = (productName) => {
// // // // // // // // // // // // //     setProducts(products.filter((p) => p.product_name !== productName));
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Calculating the total amount
// // // // // // // // // // // // //   const totalAmount = products.reduce(
// // // // // // // // // // // // //     (total, product) => total + product.sale_price * product.quantity,
// // // // // // // // // // // // //     0
// // // // // // // // // // // // //   );

// // // // // // // // // // // // //   // Generating the bill in a new window
// // // // // // // // // // // // //   // const printBill = async () => {
// // // // // // // // // // // // //   //   if (!products || products.length === 0) {
// // // // // // // // // // // // //   //     setError("No items to print! Please add products to the bill.");
// // // // // // // // // // // // //   //     setTimeout(() => setError(null), 3000);
// // // // // // // // // // // // //   //     return;
// // // // // // // // // // // // //   //   }

// // // // // // // // // // // // //   //   if (!customerName || !customerPhone) {
// // // // // // // // // // // // //   //     setError("Please enter customer details before generating the bill.");
// // // // // // // // // // // // //   //     setTimeout(() => setError(null), 3000);
// // // // // // // // // // // // //   //     return;
// // // // // // // // // // // // //   //   }

// // // // // // // // // // // // //   //   // Send the bill data to backend to generate the final bill and update stock
// // // // // // // // // // // // //   //   const response = await fetch("http://localhost:5002/api/generate-bill", {
// // // // // // // // // // // // //   //     method: "POST",
// // // // // // // // // // // // //   //     headers: {
// // // // // // // // // // // // //   //       "Content-Type": "application/json",
// // // // // // // // // // // // //   //       storeId,
// // // // // // // // // // // // //   //     },
// // // // // // // // // // // // //   //     body: JSON.stringify({
// // // // // // // // // // // // //   //       products,
// // // // // // // // // // // // //   //       customerName,
// // // // // // // // // // // // //   //       customerPhone,
// // // // // // // // // // // // //   //     }),
// // // // // // // // // // // // //   //   });

// // // // // // // // // // // // //   //   if (!response.ok) {
// // // // // // // // // // // // //   //     const data = await response.json();
// // // // // // // // // // // // //   //     setError(data.error || "Failed to generate bill");
// // // // // // // // // // // // //   //     setTimeout(() => setError(null), 3000);
// // // // // // // // // // // // //   //     return;
// // // // // // // // // // // // //   //   }

// // // // // // // // // // // // //   //   const data = await response.json();
// // // // // // // // // // // // //   //   const billSummary = data; // Bill summary returned from backend

// // // // // // // // // // // // //   //   const billWindow = window.open("", "Bill", "width=800,height=600");
// // // // // // // // // // // // //   const printBill = async () => {
// // // // // // // // // // // // //     if (!products || products.length === 0) {
// // // // // // // // // // // // //       setError("No items to print! Please add products to the bill.");
// // // // // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // // // // //       return;
// // // // // // // // // // // // //     }
  
// // // // // // // // // // // // //     if (!customerName || !customerPhone) {
// // // // // // // // // // // // //       setError("Please enter customer details before generating the bill.");
// // // // // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // // // // //       return;
// // // // // // // // // // // // //     }
  
// // // // // // // // // // // // //     // Include userId in the bill data
// // // // // // // // // // // // //     const billData = {
// // // // // // // // // // // // //       products,
// // // // // // // // // // // // //       customerName,
// // // // // // // // // // // // //       customerPhone,
// // // // // // // // // // // // //       userId, // Add userId from context
// // // // // // // // // // // // //     };
  
// // // // // // // // // // // // //     // Send the bill data to backend to generate the final bill and update stock
// // // // // // // // // // // // //     const response = await fetch("http://localhost:5002/api/generate-bill", {
// // // // // // // // // // // // //       method: "POST",
// // // // // // // // // // // // //       headers: {
// // // // // // // // // // // // //         "Content-Type": "application/json",
// // // // // // // // // // // // //         storeId,
// // // // // // // // // // // // //       },
// // // // // // // // // // // // //       body: JSON.stringify(billData), // userId is included here
// // // // // // // // // // // // //     });
  
// // // // // // // // // // // // //     if (!response.ok) {
// // // // // // // // // // // // //       const data = await response.json();
// // // // // // // // // // // // //       setError(data.error || "Failed to generate bill");
// // // // // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // // // // //       return;
// // // // // // // // // // // // //     }
  
// // // // // // // // // // // // //     const data = await response.json();
// // // // // // // // // // // // //     const billSummary = data; // Bill summary returned from backend
  
// // // // // // // // // // // // //     // Open the bill in a new window
// // // // // // // // // // // // //     const billWindow = window.open("", "Bill", "width=800,height=600");
// // // // // // // // // // // // //     // Keep your original bill content here
// // // // // // // // // // // // //     const billContent = `<html>
// // // // // // // // // // // // //   <head>
// // // // // // // // // // // // //     <title>${storeName} - Bill</title>
// // // // // // // // // // // // //     <style>
// // // // // // // // // // // // //       /* Basic Reset */
// // // // // // // // // // // // //       * {
// // // // // // // // // // // // //         margin: 0;
// // // // // // // // // // // // //         padding: 0;
// // // // // // // // // // // // //         box-sizing: border-box;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       body {
// // // // // // // // // // // // //         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
// // // // // // // // // // // // //         background-color: #f0f1f6;
// // // // // // // // // // // // //         color: #333;
// // // // // // // // // // // // //         line-height: 1.6;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .container {
// // // // // // // // // // // // //         width: 80%;
// // // // // // // // // // // // //         margin: 0 auto;
// // // // // // // // // // // // //         background-color: #ffffff;
// // // // // // // // // // // // //         border-radius: 12px;
// // // // // // // // // // // // //         box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
// // // // // // // // // // // // //         padding: 40px;
// // // // // // // // // // // // //         overflow: hidden;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .header {
// // // // // // // // // // // // //         text-align: center;
// // // // // // // // // // // // //         padding: 20px 0;
// // // // // // // // // // // // //         background: linear-gradient(135deg, #00bcd4, #00796b);
// // // // // // // // // // // // //         color: #ffffff;
// // // // // // // // // // // // //         border-radius: 12px;
// // // // // // // // // // // // //         margin-bottom: 30px;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .header h1 {
// // // // // // // // // // // // //         font-size: 36px;
// // // // // // // // // // // // //         font-weight: 700;
// // // // // // // // // // // // //         letter-spacing: 2px;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .header p {
// // // // // // // // // // // // //         font-size: 18px;
// // // // // // // // // // // // //         margin-top: 10px;
// // // // // // // // // // // // //         opacity: 0.9;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .bill-info {
// // // // // // // // // // // // //         display: flex;
// // // // // // // // // // // // //         justify-content: space-between;
// // // // // // // // // // // // //         margin-bottom: 30px;
// // // // // // // // // // // // //         padding: 10px 0;
// // // // // // // // // // // // //         font-size: 16px;
// // // // // // // // // // // // //         color: #444;
// // // // // // // // // // // // //         border-bottom: 2px solid #f4f4f4;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .bill-info div {
// // // // // // // // // // // // //         flex: 1;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .bill-info .label {
// // // // // // // // // // // // //         font-weight: 600;
// // // // // // // // // // // // //         opacity: 0.8;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       table {
// // // // // // // // // // // // //         width: 100%;
// // // // // // // // // // // // //         margin-bottom: 30px;
// // // // // // // // // // // // //         border-collapse: collapse;
// // // // // // // // // // // // //         text-align: center;
// // // // // // // // // // // // //         border-radius: 8px;
// // // // // // // // // // // // //         overflow: hidden;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       th, td {
// // // // // // // // // // // // //         padding: 15px;
// // // // // // // // // // // // //         font-size: 16px;
// // // // // // // // // // // // //         text-align: center;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       th {
// // // // // // // // // // // // //         background-color: #00bcd4;
// // // // // // // // // // // // //         color: #ffffff;
// // // // // // // // // // // // //         text-transform: uppercase;
// // // // // // // // // // // // //         letter-spacing: 1px;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       td {
// // // // // // // // // // // // //         background-color: #fafafa;
// // // // // // // // // // // // //         color: #333;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       tr:nth-child(even) td {
// // // // // // // // // // // // //         background-color: #f5f5f5;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .total-row {
// // // // // // // // // // // // //         background-color: #00bcd4;
// // // // // // // // // // // // //         color: #ffffff;
// // // // // // // // // // // // //         font-weight: bold;
// // // // // // // // // // // // //         font-size: 18px;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .footer {
// // // // // // // // // // // // //         text-align: center;
// // // // // // // // // // // // //         margin-top: 40px;
// // // // // // // // // // // // //         padding: 20px;
// // // // // // // // // // // // //         background-color: #00bcd4;
// // // // // // // // // // // // //         color: #fff;
// // // // // // // // // // // // //         border-radius: 12px;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .footer p {
// // // // // // // // // // // // //         margin: 0;
// // // // // // // // // // // // //         font-size: 16px;
// // // // // // // // // // // // //         font-style: italic;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .print-btn {
// // // // // // // // // // // // //         display: inline-block;
// // // // // // // // // // // // //         padding: 15px 30px;
// // // // // // // // // // // // //         margin-top: 20px;
// // // // // // // // // // // // //         background-color: #28a745;
// // // // // // // // // // // // //         color: white;
// // // // // // // // // // // // //         border: none;
// // // // // // // // // // // // //         border-radius: 8px;
// // // // // // // // // // // // //         cursor: pointer;
// // // // // // // // // // // // //         font-size: 16px;
// // // // // // // // // // // // //         transition: background-color 0.3s ease-in-out;
// // // // // // // // // // // // //         text-align: center;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .print-btn:hover {
// // // // // // // // // // // // //         background-color: #218838;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       /* Print Media Query */
// // // // // // // // // // // // //       @media print {
// // // // // // // // // // // // //         body {
// // // // // // // // // // // // //           background-color: #fff;
// // // // // // // // // // // // //           color: #333;
// // // // // // // // // // // // //         }

// // // // // // // // // // // // //         .container {
// // // // // // // // // // // // //           box-shadow: none;
// // // // // // // // // // // // //           margin: 0;
// // // // // // // // // // // // //           padding: 20px;
// // // // // // // // // // // // //         }

// // // // // // // // // // // // //         .header, .footer {
// // // // // // // // // // // // //           background-color: #00bcd4;
// // // // // // // // // // // // //           color: #fff;
// // // // // // // // // // // // //         }

// // // // // // // // // // // // //         .footer {
// // // // // // // // // // // // //           font-size: 14px;
// // // // // // // // // // // // //           text-align: center;
// // // // // // // // // // // // //         }

// // // // // // // // // // // // //         .print-btn {
// // // // // // // // // // // // //           display: none;
// // // // // // // // // // // // //         }

// // // // // // // // // // // // //         table th, table td {
// // // // // // // // // // // // //           border: 1px solid #ddd;
// // // // // // // // // // // // //         }

// // // // // // // // // // // // //         .bill-info {
// // // // // // // // // // // // //           font-size: 14px;
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     </style>
// // // // // // // // // // // // //   </head>
// // // // // // // // // // // // //   <body>
// // // // // // // // // // // // //     <div class="container">
// // // // // // // // // // // // //       <div class="header">
// // // // // // // // // // // // //         <h1>${storeName} - Invoice</h1>
// // // // // // // // // // // // //         <p>${new Date().toLocaleString()}</p>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       <div class="bill-info">
// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //           <p class="label">Customer Name:</p>
// // // // // // // // // // // // //           <p>${customerName}</p>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //           <p class="label">Phone Number:</p>
// // // // // // // // // // // // //           <p>${customerPhone}</p>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       <table>
// // // // // // // // // // // // //         <thead>
// // // // // // // // // // // // //           <tr>
// // // // // // // // // // // // //             <th>Product Name</th>
// // // // // // // // // // // // //             <th>Price</th>
// // // // // // // // // // // // //             <th>Quantity</th>
// // // // // // // // // // // // //             <th>Total</th>
// // // // // // // // // // // // //           </tr>
// // // // // // // // // // // // //         </thead>
// // // // // // // // // // // // //         <tbody>
// // // // // // // // // // // // //           ${products.map(product => `
// // // // // // // // // // // // //             <tr>
// // // // // // // // // // // // //               <td>${product.product_name}</td>
// // // // // // // // // // // // //               <td>${product.sale_price.toFixed(2)}</td>
// // // // // // // // // // // // //               <td>${product.quantity}</td>
// // // // // // // // // // // // //               <td>${(product.sale_price * product.quantity).toFixed(2)}</td>
// // // // // // // // // // // // //             </tr>
// // // // // // // // // // // // //           `).join('')}
// // // // // // // // // // // // //           <tr class="total-row">
// // // // // // // // // // // // //             <td colspan="3">Total Amount</td>
// // // // // // // // // // // // //             <td>${totalAmount.toFixed(2)}</td>
// // // // // // // // // // // // //           </tr>
// // // // // // // // // // // // //         </tbody>
// // // // // // // // // // // // //       </table>

// // // // // // // // // // // // //       <div class="footer">
// // // // // // // // // // // // //         <p>Thank you for shopping with us!</p>
// // // // // // // // // // // // //         <button class="print-btn" onclick="window.print()">Print this Bill</button>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   </body>
// // // // // // // // // // // // // </html>`;

// // // // // // // // // // // // //     billWindow.document.write(billContent);
// // // // // // // // // // // // //     billWindow.document.close();
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Handle customer selection from dropdown
// // // // // // // // // // // // //   const handleCustomerSelect = (e) => {
// // // // // // // // // // // // //     const selectedCustomerPhone = e.target.value;
// // // // // // // // // // // // //     const customer = customers.find((c) => c.phone === selectedCustomerPhone);
// // // // // // // // // // // // //     setSelectedCustomer(customer);
// // // // // // // // // // // // //     setCustomerName(customer ? customer.name : "");
// // // // // // // // // // // // //     setCustomerPhone(customer ? customer.phone : "");
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Handle new customer entry and save it to database
// // // // // // // // // // // // //   const handleNewCustomerSave = async () => {
// // // // // // // // // // // // //     if (!customerName || !customerPhone) {
// // // // // // // // // // // // //       setError("Please enter valid customer details.");
// // // // // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // // // // //       return;
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     setSaving(true);
// // // // // // // // // // // // //     try {
// // // // // // // // // // // // //       const response = await fetch("http://localhost:5008/api/customers", {
// // // // // // // // // // // // //         method: "POST",
// // // // // // // // // // // // //         headers: {
// // // // // // // // // // // // //           "Content-Type": "application/json",
// // // // // // // // // // // // //         },
// // // // // // // // // // // // //         body: JSON.stringify({
// // // // // // // // // // // // //           name: customerName,
// // // // // // // // // // // // //           phone: customerPhone,
// // // // // // // // // // // // //           storeId,
// // // // // // // // // // // // //         }),
// // // // // // // // // // // // //       });

// // // // // // // // // // // // //       if (!response.ok) {
// // // // // // // // // // // // //         throw new Error("Failed to add customer");
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       const newCustomer = await response.json();
// // // // // // // // // // // // //       setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
// // // // // // // // // // // // //       setError("Customer added successfully!");
// // // // // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // //       console.error("Error adding customer:", error);
// // // // // // // // // // // // //       setError("Failed to add customer.");
// // // // // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // // // // //     } finally {
// // // // // // // // // // // // //       setSaving(false);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Loading animation variants
// // // // // // // // // // // // //   const containerVariants = {
// // // // // // // // // // // // //     hidden: { opacity: 0 },
// // // // // // // // // // // // //     visible: { 
// // // // // // // // // // // // //       opacity: 1,
// // // // // // // // // // // // //       transition: { 
// // // // // // // // // // // // //         duration: 0.5,
// // // // // // // // // // // // //         when: "beforeChildren",
// // // // // // // // // // // // //         staggerChildren: 0.1
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const itemVariants = {
// // // // // // // // // // // // //     hidden: { y: 20, opacity: 0 },
// // // // // // // // // // // // //     visible: { 
// // // // // // // // // // // // //       y: 0, 
// // // // // // // // // // // // //       opacity: 1,
// // // // // // // // // // // // //       transition: { duration: 0.4 }
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const tableRowVariants = {
// // // // // // // // // // // // //     hidden: { opacity: 0, x: -20 },
// // // // // // // // // // // // //     visible: { 
// // // // // // // // // // // // //       opacity: 1, 
// // // // // // // // // // // // //       x: 0,
// // // // // // // // // // // // //       transition: { duration: 0.3 }
// // // // // // // // // // // // //     },
// // // // // // // // // // // // //     exit: { 
// // // // // // // // // // // // //       opacity: 0, 
// // // // // // // // // // // // //       x: 20,
// // // // // // // // // // // // //       transition: { duration: 0.2 }
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <motion.div 
// // // // // // // // // // // // //       className="max-w-5xl mx-auto p-8 bg-white shadow-2xl rounded-lg"
// // // // // // // // // // // // //       style={{ 
// // // // // // // // // // // // //         background: "linear-gradient(to bottom, #ffffff, #f9fafb)",
// // // // // // // // // // // // //         boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05)"
// // // // // // // // // // // // //       }}
// // // // // // // // // // // // //       initial="hidden"
// // // // // // // // // // // // //       animate="visible"
// // // // // // // // // // // // //       variants={containerVariants}
// // // // // // // // // // // // //     >
// // // // // // // // // // // // //       <motion.div
// // // // // // // // // // // // //         className="mb-8 text-center"
// // // // // // // // // // // // //         variants={itemVariants}
// // // // // // // // // // // // //       >
// // // // // // // // // // // // //         <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
// // // // // // // // // // // // //           INVOICE GENERATOR
// // // // // // // // // // // // //         </h1>
// // // // // // // // // // // // //         <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full mb-4"></div>
// // // // // // // // // // // // //         <h2 className="text-2xl font-semibold text-gray-700">
// // // // // // // // // // // // //           {storeName} Store
// // // // // // // // // // // // //         </h2>
// // // // // // // // // // // // //       </motion.div>

// // // // // // // // // // // // //       {loading ? (
// // // // // // // // // // // // //         <div className="flex justify-center items-center py-12">
// // // // // // // // // // // // //           <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       ) : (
// // // // // // // // // // // // //         <>
// // // // // // // // // // // // //           {/* Product Selection Card */}
// // // // // // // // // // // // //           <motion.div 
// // // // // // // // // // // // //             className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100"
// // // // // // // // // // // // //             variants={itemVariants}
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Product Selection</h3>
// // // // // // // // // // // // //             <div className="flex flex-col md:flex-row gap-4">
// // // // // // // // // // // // //               <div className="flex-1">
// // // // // // // // // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Select Product:</label>
// // // // // // // // // // // // //                 <select
// // // // // // // // // // // // //                   value={selectedProduct}
// // // // // // // // // // // // //                   onChange={(e) => setSelectedProduct(e.target.value)}
// // // // // // // // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   {allProducts.map((product) => (
// // // // // // // // // // // // //                     <option key={product.id} value={product.product_name}>
// // // // // // // // // // // // //                       {product.product_name} - ${parseFloat(product.sale_price).toFixed(2)}
// // // // // // // // // // // // //                     </option>
// // // // // // // // // // // // //                   ))}
// // // // // // // // // // // // //                 </select>
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //               <div className="flex-1">
// // // // // // // // // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
// // // // // // // // // // // // //                 <input
// // // // // // // // // // // // //                   type="number"
// // // // // // // // // // // // //                   value={quantity}
// // // // // // // // // // // // //                   min="1"
// // // // // // // // // // // // //                   onChange={(e) => setQuantity(e.target.value)}
// // // // // // // // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // // // // //                 />
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //               <div className="flex items-end">
// // // // // // // // // // // // //                 <motion.button
// // // // // // // // // // // // //                   onClick={addProduct}
// // // // // // // // // // // // //                   className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
// // // // // // // // // // // // //                   whileHover={{ scale: 1.05 }}
// // // // // // // // // // // // //                   whileTap={{ scale: 0.98 }}
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   Add to Bill
// // // // // // // // // // // // //                 </motion.button>
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           </motion.div>

// // // // // // // // // // // // //           {/* Customer Details Card */}
// // // // // // // // // // // // //           <motion.div 
// // // // // // // // // // // // //             className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100"
// // // // // // // // // // // // //             variants={itemVariants}
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Customer Information</h3>
            
// // // // // // // // // // // // //             {loadingCustomers ? (
// // // // // // // // // // // // //               <div className="flex justify-center items-center py-4">
// // // // // // // // // // // // //                 <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //             ) : (
// // // // // // // // // // // // //               <>
// // // // // // // // // // // // //                 <div className="mb-4">
// // // // // // // // // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Select Existing Customer:</label>
// // // // // // // // // // // // //                   <select
// // // // // // // // // // // // //                     value={customerPhone}
// // // // // // // // // // // // //                     onChange={handleCustomerSelect}
// // // // // // // // // // // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // // // // //                   >
// // // // // // // // // // // // //                     <option value="">Select Customer</option>
// // // // // // // // // // // // //                     {customers.map((customer) => (
// // // // // // // // // // // // //                       <option key={customer.phone} value={customer.phone}>
// // // // // // // // // // // // //                         {customer.name} - {customer.phone}
// // // // // // // // // // // // //                       </option>
// // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // //                   </select>
// // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // //                 {!selectedCustomer && (
// // // // // // // // // // // // //                   <motion.div 
// // // // // // // // // // // // //                     className="p-4 bg-gray-50 rounded-lg mt-4"
// // // // // // // // // // // // //                     initial={{ opacity: 0, height: 0 }}
// // // // // // // // // // // // //                     animate={{ opacity: 1, height: "auto" }}
// // // // // // // // // // // // //                     transition={{ duration: 0.3 }}
// // // // // // // // // // // // //                   >
// // // // // // // // // // // // //                     <h4 className="text-md font-medium mb-3 text-gray-700">New Customer</h4>
// // // // // // // // // // // // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// // // // // // // // // // // // //                       <div>
// // // // // // // // // // // // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name:</label>
// // // // // // // // // // // // //                         <input
// // // // // // // // // // // // //                           type="text"
// // // // // // // // // // // // //                           value={customerName}
// // // // // // // // // // // // //                           onChange={(e) => setCustomerName(e.target.value)}
// // // // // // // // // // // // //                           placeholder="Full Name"
// // // // // // // // // // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // // // // //                         />
// // // // // // // // // // // // //                       </div>
// // // // // // // // // // // // //                       <div>
// // // // // // // // // // // // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number:</label>
// // // // // // // // // // // // //                         <input
// // // // // // // // // // // // //                           type="text"
// // // // // // // // // // // // //                           value={customerPhone}
// // // // // // // // // // // // //                           onChange={(e) => setCustomerPhone(e.target.value)}
// // // // // // // // // // // // //                           placeholder="Phone Number"
// // // // // // // // // // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // // // // //                         />
// // // // // // // // // // // // //                       </div>
// // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // //                     <motion.button
// // // // // // // // // // // // //                       onClick={handleNewCustomerSave}
// // // // // // // // // // // // //                       className="w-full md:w-auto px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-md hover:shadow-lg hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-200 flex items-center justify-center"
// // // // // // // // // // // // //                       whileHover={{ scale: 1.02 }}
// // // // // // // // // // // // //                       whileTap={{ scale: 0.98 }}
// // // // // // // // // // // // //                       disabled={saving}
// // // // // // // // // // // // //                     >
// // // // // // // // // // // // //                       {saving ? (
// // // // // // // // // // // // //                         <>
// // // // // // // // // // // // //                           <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // // // // // // // // // // //                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // // // // // // // // // //                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // // // // // // // // // //                           </svg>
// // // // // // // // // // // // //                           Saving Customer...
// // // // // // // // // // // // //                         </>
// // // // // // // // // // // // //                       ) : "Save New Customer"}
// // // // // // // // // // // // //                     </motion.button>
// // // // // // // // // // // // //                   </motion.div>
// // // // // // // // // // // // //                 )}
// // // // // // // // // // // // //               </>
// // // // // // // // // // // // //             )}
// // // // // // // // // // // // //           </motion.div>

// // // // // // // // // // // // //           {/* Products Table Card */}
// // // // // // // // // // // // //           <motion.div 
// // // // // // // // // // // // //             className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100 overflow-hidden"
// // // // // // // // // // // // //             variants={itemVariants}
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Bill Items</h3>
            
// // // // // // // // // // // // //             <div className="overflow-x-auto" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05) inset" }}>
// // // // // // // // // // // // //               <table className="w-full mb-4">
// // // // // // // // // // // // //                 <thead>
// // // // // // // // // // // // //                   <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
// // // // // // // // // // // // //                     <th className="p-3 font-semibold text-left">Product Name</th>
// // // // // // // // // // // // //                     <th className="p-3 font-semibold text-right">Price</th>
// // // // // // // // // // // // //                     <th className="p-3 font-semibold text-center">Quantity</th>
// // // // // // // // // // // // //                     <th className="p-3 font-semibold text-right">Total</th>
// // // // // // // // // // // // //                     <th className="p-3 font-semibold text-center">Action</th>
// // // // // // // // // // // // //                   </tr>
// // // // // // // // // // // // //                 </thead>
// // // // // // // // // // // // //                 <tbody>
// // // // // // // // // // // // //                   <AnimatePresence>
// // // // // // // // // // // // //                     {products.length > 0 ? (
// // // // // // // // // // // // //                       products.map((product) => (
// // // // // // // // // // // // //                         <motion.tr 
// // // // // // // // // // // // //                           key={product.id} 
// // // // // // // // // // // // //                           className="border-b hover:bg-gray-50 transition-colors"
// // // // // // // // // // // // //                           variants={tableRowVariants}
// // // // // // // // // // // // //                           initial="hidden"
// // // // // // // // // // // // //                           animate="visible"
// // // // // // // // // // // // //                           exit="exit"
// // // // // // // // // // // // //                         >
// // // // // // // // // // // // //                           <td className="p-3 text-left">{product.product_name}</td>
// // // // // // // // // // // // //                           <td className="p-3 text-right">${product.sale_price.toFixed(2)}</td>
// // // // // // // // // // // // //                           <td className="p-3 text-center">{product.quantity}</td>
// // // // // // // // // // // // //                           <td className="p-3 text-right font-medium">
// // // // // // // // // // // // //                             ${(product.sale_price * product.quantity).toFixed(2)}
// // // // // // // // // // // // //                           </td>
// // // // // // // // // // // // //                           <td className="p-3 text-center">
// // // // // // // // // // // // //                             <motion.button
// // // // // // // // // // // // //                               onClick={() => deleteProduct(product.product_name)}
// // // // // // // // // // // // //                               className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
// // // // // // // // // // // // //                               whileHover={{ scale: 1.05 }}
// // // // // // // // // // // // //                               whileTap={{ scale: 0.95 }}
// // // // // // // // // // // // //                             >
// // // // // // // // // // // // //                               Remove
// // // // // // // // // // // // //                             </motion.button>
// // // // // // // // // // // // //                           </td>
// // // // // // // // // // // // //                         </motion.tr>
// // // // // // // // // // // // //                       ))
// // // // // // // // // // // // //                     ) : (
// // // // // // // // // // // // //                       <motion.tr
// // // // // // // // // // // // //                         variants={tableRowVariants}
// // // // // // // // // // // // //                         initial="hidden"
// // // // // // // // // // // // //                         animate="visible"
// // // // // // // // // // // // //                       >
// // // // // // // // // // // // //                         <td colSpan="5" className="p-4 text-center text-gray-500">
// // // // // // // // // // // // //                           No products added to the bill yet.
// // // // // // // // // // // // //                         </td>
// // // // // // // // // // // // //                       </motion.tr>
// // // // // // // // // // // // //                     )}
// // // // // // // // // // // // //                   </AnimatePresence>
// // // // // // // // // // // // //                 </tbody>
// // // // // // // // // // // // //               </table>
// // // // // // // // // // // // //             </div>
            
// // // // // // // // // // // // //             {products.length > 0 && (
// // // // // // // // // // // // //               <motion.div 
// // // // // // // // // // // // //                 className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
// // // // // // // // // // // // //                 initial={{ opacity: 0, y: 20 }}
// // // // // // // // // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // //                 transition={{ duration: 0.3 }}
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 <div className="text-lg font-semibold text-gray-800">Total Amount:</div>
// // // // // // // // // // // // //                 <div className="text-2xl font-bold text-blue-600">${totalAmount.toFixed(2)}</div>
// // // // // // // // // // // // //               </motion.div>
// // // // // // // // // // // // //             )}
// // // // // // // // // // // // //           </motion.div>

// // // // // // // // // // // // //           {/* Generate Bill Button */}
// // // // // // // // // // // // //           <motion.div 
// // // // // // // // // // // // //             className="text-center"
// // // // // // // // // // // // //             variants={itemVariants}
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <motion.button
// // // // // // // // // // // // //               onClick={printBill}
// // // // // // // // // // // // //               className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300"
// // // // // // // // // // // // //               whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
// // // // // // // // // // // // //               whileTap={{ scale: 0.98 }}
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               Generate & Print Invoice
// // // // // // // // // // // // //             </motion.button>
// // // // // // // // // // // // //           </motion.div>
// // // // // // // // // // // // //         </>
// // // // // // // // // // // // //       )}

// // // // // // // // // // // // //       {/* Error Message */}
// // // // // // // // // // // // //       <AnimatePresence>
// // // // // // // // // // // // //         {error && (
// // // // // // // // // // // // //           <motion.div 
// // // // // // // // // // // // //             className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${error.includes("successfully") ? "bg-green-500" : "bg-red-500"} text-white max-w-sm`}
// // // // // // // // // // // // //             initial={{ opacity: 0, y: 50, x: 0 }}
// // // // // // // // // // // // //             animate={{ opacity: 1, y: 0, x: 0 }}
// // // // // // // // // // // // //             exit={{ opacity: 0, y: 50 }}
// // // // // // // // // // // // //             transition={{ duration: 0.3 }}
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             {error}
// // // // // // // // // // // // //           </motion.div>
// // // // // // // // // // // // //         )}
// // // // // // // // // // // // //       </AnimatePresence>
// // // // // // // // // // // // //     </motion.div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default Billing;

// // // // // // // // // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // // // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // // // // // import Khatabook from "./Khatabook";

// // // // // // // // // // // // const Billing = () => {
// // // // // // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // // // // // //   const [allProducts, setAllProducts] = useState([]);
// // // // // // // // // // // //   const [selectedProduct, setSelectedProduct] = useState("");
// // // // // // // // // // // //   const [quantity, setQuantity] = useState(1);
// // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // //   const [customerName, setCustomerName] = useState("");
// // // // // // // // // // // //   const [customerPhone, setCustomerPhone] = useState("");
// // // // // // // // // // // //   const [customers, setCustomers] = useState([]);
// // // // // // // // // // // //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// // // // // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // // // // //   const [loadingCustomers, setLoadingCustomers] = useState(true);
// // // // // // // // // // // //   const [saving, setSaving] = useState(false);
// // // // // // // // // // // //   const [paymentStatus, setPaymentStatus] = useState("paid"); // 'paid' or 'unpaid'
// // // // // // // // // // // //   const [customerBalance, setCustomerBalance] = useState(0); // Customer balance from Khatabook
// // // // // // // // // // // //   const { storeName, storeId } = useContext(StoreContext);
// // // // // // // // // // // //   const storeAddress = localStorage.getItem("storeAddress");
// // // // // // // // // // // // const email = localStorage.getItem("email");
// // // // // // // // // // // // const fullName = localStorage.getItem("fullName");
// // // // // // // // // // // // const phoneNumber = localStorage.getItem("phoneNumber");
// // // // // // // // // // // //   const userId = localStorage.getItem("userId");

// // // // // // // // // // // //   // Fetching products from backend
// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     const fetchProducts = async () => {
// // // // // // // // // // // //       setLoading(true);
// // // // // // // // // // // //       try {
// // // // // // // // // // // //         const response = await fetch("http://localhost:5002/api/products", {
// // // // // // // // // // // //           headers: { storeId },
// // // // // // // // // // // //         });
// // // // // // // // // // // //         if (!response.ok) {
// // // // // // // // // // // //           throw new Error("Failed to fetch products");
// // // // // // // // // // // //         }
// // // // // // // // // // // //         const data = await response.json();

// // // // // // // // // // // //         if (data && Array.isArray(data) && data.length > 0) {
// // // // // // // // // // // //           setAllProducts(data);
// // // // // // // // // // // //           setSelectedProduct(data[0].product_name);
// // // // // // // // // // // //         } else {
// // // // // // // // // // // //           console.error("No products found or incorrect data format.");
// // // // // // // // // // // //           setError("No products available. Please add products first.");
// // // // // // // // // // // //         }
// // // // // // // // // // // //       } catch (error) {
// // // // // // // // // // // //         console.error("Error fetching products:", error);
// // // // // // // // // // // //         setError("Failed to fetch products. Please check your connection.");
// // // // // // // // // // // //       } finally {
// // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // //       }
// // // // // // // // // // // //     };

// // // // // // // // // // // //     if (storeId) {
// // // // // // // // // // // //       fetchProducts();
// // // // // // // // // // // //     } else {
// // // // // // // // // // // //       console.error("Store ID not provided.");
// // // // // // // // // // // //       setError("Store identification failed. Please try again.");
// // // // // // // // // // // //       setLoading(false);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   }, [storeId]);

// // // // // // // // // // // //   // Fetching customers from backend
// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     const fetchCustomers = async () => {
// // // // // // // // // // // //       setLoadingCustomers(true);
// // // // // // // // // // // //       try {
// // // // // // // // // // // //         const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}`);
// // // // // // // // // // // //         if (!response.ok) {
// // // // // // // // // // // //           throw new Error("Failed to fetch customers");
// // // // // // // // // // // //         }
// // // // // // // // // // // //         const data = await response.json();
// // // // // // // // // // // //         setCustomers(data.customers);
// // // // // // // // // // // //       } catch (error) {
// // // // // // // // // // // //         console.error("Error fetching customers:", error);
// // // // // // // // // // // //       } finally {
// // // // // // // // // // // //         setLoadingCustomers(false);
// // // // // // // // // // // //       }
// // // // // // // // // // // //     };

// // // // // // // // // // // //     if (storeId) {
// // // // // // // // // // // //       fetchCustomers();
// // // // // // // // // // // //     }
// // // // // // // // // // // //   }, [storeId]);

// // // // // // // // // // // //   // Fetch customer balance from Khatabook
// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     if (customerPhone) {
// // // // // // // // // // // //       const fetchCustomerBalance = async () => {
// // // // // // // // // // // //         try {
// // // // // // // // // // // //           const response = await fetch(`http://localhost:5002/api/khatabook/customers/${customerPhone}/balance`, {
// // // // // // // // // // // //             headers: { storeId },
// // // // // // // // // // // //           });
// // // // // // // // // // // //           if (!response.ok) {
// // // // // // // // // // // //             throw new Error("Failed to fetch customer balance");
// // // // // // // // // // // //           }
// // // // // // // // // // // //           const data = await response.json();
// // // // // // // // // // // //           setCustomerBalance(data.balance);
// // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // //           console.error("Error fetching customer balance:", error);
// // // // // // // // // // // //         }
// // // // // // // // // // // //       };

// // // // // // // // // // // //       fetchCustomerBalance();
// // // // // // // // // // // //     }
// // // // // // // // // // // //   }, [customerPhone, storeId]);

// // // // // // // // // // // //   // Adding a product to the bill
// // // // // // // // // // // //   const addProduct = () => {
// // // // // // // // // // // //     const selectedProductData = allProducts.find(
// // // // // // // // // // // //       (p) => p.product_name === selectedProduct
// // // // // // // // // // // //     );

// // // // // // // // // // // //     if (selectedProductData) {
// // // // // // // // // // // //       setProducts((prevProducts) => {
// // // // // // // // // // // //         const existingProduct = prevProducts.find(
// // // // // // // // // // // //           (p) => p.product_name === selectedProductData.product_name
// // // // // // // // // // // //         );

// // // // // // // // // // // //         if (existingProduct) {
// // // // // // // // // // // //           // Update quantity if product already exists
// // // // // // // // // // // //           return prevProducts.map((p) =>
// // // // // // // // // // // //             p.product_name === selectedProductData.product_name
// // // // // // // // // // // //               ? { ...p, quantity: p.quantity + parseInt(quantity) }
// // // // // // // // // // // //               : p
// // // // // // // // // // // //           );
// // // // // // // // // // // //         } else {
// // // // // // // // // // // //           // Add new product to the bill
// // // // // // // // // // // //           return [
// // // // // // // // // // // //             ...prevProducts,
// // // // // // // // // // // //             {
// // // // // // // // // // // //               id: selectedProductData.id,
// // // // // // // // // // // //               product_name: selectedProductData.product_name,
// // // // // // // // // // // //               sale_price: parseFloat(selectedProductData.sale_price),
// // // // // // // // // // // //               quantity: parseInt(quantity),
// // // // // // // // // // // //             },
// // // // // // // // // // // //           ];
// // // // // // // // // // // //         }
// // // // // // // // // // // //       });
// // // // // // // // // // // //     } else {
// // // // // // // // // // // //       console.error("Selected product not found in all products list.");
// // // // // // // // // // // //     }

// // // // // // // // // // // //     setQuantity(1); // Reset quantity input
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Deleting a product from the bill
// // // // // // // // // // // //   const deleteProduct = (productName) => {
// // // // // // // // // // // //     setProducts(products.filter((p) => p.product_name !== productName));
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Calculating the total amount
// // // // // // // // // // // //   const totalAmount = products.reduce(
// // // // // // // // // // // //     (total, product) => total + product.sale_price * product.quantity,
// // // // // // // // // // // //     0
// // // // // // // // // // // //   );

// // // // // // // // // // // //   // Generating the bill in a new window
// // // // // // // // // // // //   const printBill = async () => {
// // // // // // // // // // // //     if (!products || products.length === 0) {
// // // // // // // // // // // //       setError("No items to print! Please add products to the bill.");
// // // // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // // // //       return;
// // // // // // // // // // // //     }

// // // // // // // // // // // //     if (!customerName || !customerPhone) {
// // // // // // // // // // // //       setError("Please enter customer details before generating the bill.");
// // // // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // // // //       return;
// // // // // // // // // // // //     }

// // // // // // // // // // // //     // Include userId and payment status in the bill data
// // // // // // // // // // // //     const billData = {
// // // // // // // // // // // //       products,
// // // // // // // // // // // //       customerName,
// // // // // // // // // // // //       customerPhone,
// // // // // // // // // // // //       userId,
// // // // // // // // // // // //       paymentStatus,
// // // // // // // // // // // //     };

// // // // // // // // // // // //     // Send the bill data to backend to generate the final bill and update stock
// // // // // // // // // // // //     const response = await fetch("http://localhost:5002/api/generate-bill", {
// // // // // // // // // // // //       method: "POST",
// // // // // // // // // // // //       headers: {
// // // // // // // // // // // //         "Content-Type": "application/json",
// // // // // // // // // // // //         storeId,
// // // // // // // // // // // //       },
// // // // // // // // // // // //       body: JSON.stringify(billData),
// // // // // // // // // // // //     });

// // // // // // // // // // // //     if (!response.ok) {
// // // // // // // // // // // //       const data = await response.json();
// // // // // // // // // // // //       setError(data.error || "Failed to generate bill");
// // // // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // // // //       return;
// // // // // // // // // // // //     }

// // // // // // // // // // // //     const data = await response.json();
// // // // // // // // // // // //     const billSummary = data; // Bill summary returned from backend

// // // // // // // // // // // //     // Open the bill in a new window
// // // // // // // // // // // //     if (paymentStatus === "unpaid") {
// // // // // // // // // // // //       const khatabookTransaction = {
// // // // // // // // // // // //         customerPhone,
// // // // // // // // // // // //         type: "debit", // Customer owes money
// // // // // // // // // // // //         amount: totalAmount,
// // // // // // // // // // // //         notes: "Unpaid bill",
// // // // // // // // // // // //       };

// // // // // // // // // // // //       const khatabookResponse = await fetch("http://localhost:5002/api/khatabook/transactions", {
// // // // // // // // // // // //         method: "POST",
// // // // // // // // // // // //         headers: {
// // // // // // // // // // // //           "Content-Type": "application/json",
// // // // // // // // // // // //           storeId,
// // // // // // // // // // // //         },
// // // // // // // // // // // //         body: JSON.stringify(khatabookTransaction),
// // // // // // // // // // // //       });

// // // // // // // // // // // //       if (!khatabookResponse.ok) {
// // // // // // // // // // // //         throw new Error("Failed to add transaction to Khatabook");
// // // // // // // // // // // //       }
// // // // // // // // // // // //     }
// // // // // // // // // // // //     const billWindow = window.open("", "Bill", "width=800,height=600");
// // // // // // // // // // // //      const billContent = 
// // // // // // // // // // // //     //   <html>
// // // // // // // // // // // //     //     <head>
// // // // // // // // // // // //     //       <title>${storeName} - Invoice</title>
// // // // // // // // // // // //     //       <style>
// // // // // // // // // // // //     //         /* Your existing bill styles */
// // // // // // // // // // // //     //       </style>
// // // // // // // // // // // //     //     </head>
// // // // // // // // // // // //     //     <body>
// // // // // // // // // // // //     //       <div class="container">
// // // // // // // // // // // //     //         <div class="header">
// // // // // // // // // // // //     //           <h1>${storeName} - Invoice</h1>
// // // // // // // // // // // //     //           <p>${new Date().toLocaleString()}</p>
// // // // // // // // // // // //     //         </div>
// // // // // // // // // // // //     //         <div class="bill-info">
// // // // // // // // // // // //     //           <div>
// // // // // // // // // // // //     //             <p class="label">Customer Name:</p>
// // // // // // // // // // // //     //             <p>${customerName}</p>
// // // // // // // // // // // //     //           </div>
// // // // // // // // // // // //     //           <div>
// // // // // // // // // // // //     //             <p class="label">Phone Number:</p>
// // // // // // // // // // // //     //             <p>${customerPhone}</p>
// // // // // // // // // // // //     //           </div>
// // // // // // // // // // // //     //         </div>
// // // // // // // // // // // //     //         <table>
// // // // // // // // // // // //     //           <thead>
// // // // // // // // // // // //     //             <tr>
// // // // // // // // // // // //     //               <th>Product Name</th>
// // // // // // // // // // // //     //               <th>Price</th>
// // // // // // // // // // // //     //               <th>Quantity</th>
// // // // // // // // // // // //     //               <th>Total</th>
// // // // // // // // // // // //     //             </tr>
// // // // // // // // // // // //     //           </thead>
// // // // // // // // // // // //     //           <tbody>
// // // // // // // // // // // //     //             ${products.map(product => `
// // // // // // // // // // // //     //               <tr>
// // // // // // // // // // // //     //                 <td>${product.product_name}</td>
// // // // // // // // // // // //     //                 <td>${product.sale_price.toFixed(2)}</td>
// // // // // // // // // // // //     //                 <td>${product.quantity}</td>
// // // // // // // // // // // //     //                 <td>${(product.sale_price * product.quantity).toFixed(2)}</td>
// // // // // // // // // // // //     //               </tr>
// // // // // // // // // // // //     //             `).join('')}
// // // // // // // // // // // //     //             <tr class="total-row">
// // // // // // // // // // // //     //               <td colspan="3">Total Amount</td>
// // // // // // // // // // // //     //               <td>${totalAmount.toFixed(2)}</td>
// // // // // // // // // // // //     //             </tr>
// // // // // // // // // // // //     //           </tbody>
// // // // // // // // // // // //     //         </table>
// // // // // // // // // // // //     //         <div class="footer">
// // // // // // // // // // // //     //           <p>Thank you for shopping with us!</p>
// // // // // // // // // // // //     //           <button class="print-btn" onclick="window.print()">Print this Bill</button>
// // // // // // // // // // // //     //         </div>
// // // // // // // // // // // //     //       </div>
// // // // // // // // // // // //     //     </body>
// // // // // // // // // // // //     //   </html>
// // // // // // // // // // // //     // `;
// // // // // // // // // // // // //     `<html>
// // // // // // // // // // // // //   <head>
// // // // // // // // // // // // //     <title>${storeName} - Bill</title>
// // // // // // // // // // // // //     <style>
// // // // // // // // // // // // //       /* Basic Reset */
// // // // // // // // // // // // //       * {
// // // // // // // // // // // // //         margin: 0;
// // // // // // // // // // // // //         padding: 0;
// // // // // // // // // // // // //         box-sizing: border-box;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       body {
// // // // // // // // // // // // //         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
// // // // // // // // // // // // //         background-color: #f0f1f6;
// // // // // // // // // // // // //         color: #333;
// // // // // // // // // // // // //         line-height: 1.6;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .container {
// // // // // // // // // // // // //         width: 80%;
// // // // // // // // // // // // //         margin: 0 auto;
// // // // // // // // // // // // //         background-color: #ffffff;
// // // // // // // // // // // // //         border-radius: 12px;
// // // // // // // // // // // // //         box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
// // // // // // // // // // // // //         padding: 40px;
// // // // // // // // // // // // //         overflow: hidden;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .header {
// // // // // // // // // // // // //         text-align: center;
// // // // // // // // // // // // //         padding: 20px 0;
// // // // // // // // // // // // //         background: linear-gradient(135deg, #00bcd4, #00796b);
// // // // // // // // // // // // //         color: #ffffff;
// // // // // // // // // // // // //         border-radius: 12px;
// // // // // // // // // // // // //         margin-bottom: 30px;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .header h1 {
// // // // // // // // // // // // //         font-size: 36px;
// // // // // // // // // // // // //         font-weight: 700;
// // // // // // // // // // // // //         letter-spacing: 2px;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .header p {
// // // // // // // // // // // // //         font-size: 18px;
// // // // // // // // // // // // //         margin-top: 10px;
// // // // // // // // // // // // //         opacity: 0.9;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .bill-info {
// // // // // // // // // // // // //         display: flex;
// // // // // // // // // // // // //         justify-content: space-between;
// // // // // // // // // // // // //         margin-bottom: 30px;
// // // // // // // // // // // // //         padding: 10px 0;
// // // // // // // // // // // // //         font-size: 16px;
// // // // // // // // // // // // //         color: #444;
// // // // // // // // // // // // //         border-bottom: 2px solid #f4f4f4;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .bill-info div {
// // // // // // // // // // // // //         flex: 1;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .bill-info .label {
// // // // // // // // // // // // //         font-weight: 600;
// // // // // // // // // // // // //         opacity: 0.8;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       table {
// // // // // // // // // // // // //         width: 100%;
// // // // // // // // // // // // //         margin-bottom: 30px;
// // // // // // // // // // // // //         border-collapse: collapse;
// // // // // // // // // // // // //         text-align: center;
// // // // // // // // // // // // //         border-radius: 8px;
// // // // // // // // // // // // //         overflow: hidden;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       th, td {
// // // // // // // // // // // // //         padding: 15px;
// // // // // // // // // // // // //         font-size: 16px;
// // // // // // // // // // // // //         text-align: center;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       th {
// // // // // // // // // // // // //         background-color: #00bcd4;
// // // // // // // // // // // // //         color: #ffffff;
// // // // // // // // // // // // //         text-transform: uppercase;
// // // // // // // // // // // // //         letter-spacing: 1px;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       td {
// // // // // // // // // // // // //         background-color: #fafafa;
// // // // // // // // // // // // //         color: #333;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       tr:nth-child(even) td {
// // // // // // // // // // // // //         background-color: #f5f5f5;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .total-row {
// // // // // // // // // // // // //         background-color: #00bcd4;
// // // // // // // // // // // // //         color: #ffffff;
// // // // // // // // // // // // //         font-weight: bold;
// // // // // // // // // // // // //         font-size: 18px;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .footer {
// // // // // // // // // // // // //         text-align: center;
// // // // // // // // // // // // //         margin-top: 40px;
// // // // // // // // // // // // //         padding: 20px;
// // // // // // // // // // // // //         background-color: #00bcd4;
// // // // // // // // // // // // //         color: #fff;
// // // // // // // // // // // // //         border-radius: 12px;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .footer p {
// // // // // // // // // // // // //         margin: 0;
// // // // // // // // // // // // //         font-size: 16px;
// // // // // // // // // // // // //         font-style: italic;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .print-btn {
// // // // // // // // // // // // //         display: inline-block;
// // // // // // // // // // // // //         padding: 15px 30px;
// // // // // // // // // // // // //         margin-top: 20px;
// // // // // // // // // // // // //         background-color: #28a745;
// // // // // // // // // // // // //         color: white;
// // // // // // // // // // // // //         border: none;
// // // // // // // // // // // // //         border-radius: 8px;
// // // // // // // // // // // // //         cursor: pointer;
// // // // // // // // // // // // //         font-size: 16px;
// // // // // // // // // // // // //         transition: background-color 0.3s ease-in-out;
// // // // // // // // // // // // //         text-align: center;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       .print-btn:hover {
// // // // // // // // // // // // //         background-color: #218838;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       /* Print Media Query */
// // // // // // // // // // // // //       @media print {
// // // // // // // // // // // // //         body {
// // // // // // // // // // // // //           background-color: #fff;
// // // // // // // // // // // // //           color: #333;
// // // // // // // // // // // // //         }

// // // // // // // // // // // // //         .container {
// // // // // // // // // // // // //           box-shadow: none;
// // // // // // // // // // // // //           margin: 0;
// // // // // // // // // // // // //           padding: 20px;
// // // // // // // // // // // // //         }

// // // // // // // // // // // // //         .header, .footer {
// // // // // // // // // // // // //           background-color: #00bcd4;
// // // // // // // // // // // // //           color: #fff;
// // // // // // // // // // // // //         }

// // // // // // // // // // // // //         .footer {
// // // // // // // // // // // // //           font-size: 14px;
// // // // // // // // // // // // //           text-align: center;
// // // // // // // // // // // // //         }

// // // // // // // // // // // // //         .print-btn {
// // // // // // // // // // // // //           display: none;
// // // // // // // // // // // // //         }

// // // // // // // // // // // // //         table th, table td {
// // // // // // // // // // // // //           border: 1px solid #ddd;
// // // // // // // // // // // // //         }

// // // // // // // // // // // // //         .bill-info {
// // // // // // // // // // // // //           font-size: 14px;
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     </style>
// // // // // // // // // // // // //   </head>
// // // // // // // // // // // // //   <body>
// // // // // // // // // // // // //     <div class="container">
// // // // // // // // // // // // //       <div class="header">
// // // // // // // // // // // // //         <h1>${storeName} - Invoice</h1>
// // // // // // // // // // // // //         <p>${new Date().toLocaleString()}</p>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       <div class="bill-info">
// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //           <p class="label">Customer Name:</p>
// // // // // // // // // // // // //           <p>${customerName}</p>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //           <p class="label">Phone Number:</p>
// // // // // // // // // // // // //           <p>${customerPhone}</p>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       <table>
// // // // // // // // // // // // //         <thead>
// // // // // // // // // // // // //           <tr>
// // // // // // // // // // // // //             <th>Product Name</th>
// // // // // // // // // // // // //             <th>Price</th>
// // // // // // // // // // // // //             <th>Quantity</th>
// // // // // // // // // // // // //             <th>Total</th>
// // // // // // // // // // // // //           </tr>
// // // // // // // // // // // // //         </thead>
// // // // // // // // // // // // //         <tbody>
// // // // // // // // // // // // //           ${products.map(product => `
// // // // // // // // // // // // //             <tr>
// // // // // // // // // // // // //               <td>${product.product_name}</td>
// // // // // // // // // // // // //               <td>${product.sale_price.toFixed(2)}</td>
// // // // // // // // // // // // //               <td>${product.quantity}</td>
// // // // // // // // // // // // //               <td>${(product.sale_price * product.quantity).toFixed(2)}</td>
// // // // // // // // // // // // //             </tr>
// // // // // // // // // // // // //           `).join('')}
// // // // // // // // // // // // //           <tr class="total-row">
// // // // // // // // // // // // //             <td colspan="3">Total Amount</td>
// // // // // // // // // // // // //             <td>${totalAmount.toFixed(2)}</td>
// // // // // // // // // // // // //           </tr>
// // // // // // // // // // // // //         </tbody>
// // // // // // // // // // // // //       </table>

// // // // // // // // // // // // //       <div class="footer">
// // // // // // // // // // // // //         <p>Thank you for shopping with us!</p>
// // // // // // // // // // // // //         <button class="print-btn" onclick="window.print()">Print this Bill</button>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   </body>
// // // // // // // // // // // // // </html>
// // // // // // // // // // // // //`
// // // // // // // // // // // // `<html>
// // // // // // // // // // // //   <head>
// // // // // // // // // // // //     <title>${storeName} - Bill</title>
// // // // // // // // // // // //     <style>
// // // // // // // // // // // //       /* Basic Reset */
// // // // // // // // // // // //       * {
// // // // // // // // // // // //         margin: 0;
// // // // // // // // // // // //         padding: 0;
// // // // // // // // // // // //         box-sizing: border-box;
// // // // // // // // // // // //       }

// // // // // // // // // // // //       body {
// // // // // // // // // // // //         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
// // // // // // // // // // // //         background-color: #f0f1f6;
// // // // // // // // // // // //         color: #333;
// // // // // // // // // // // //         line-height: 1.6;
// // // // // // // // // // // //       }

// // // // // // // // // // // //       .container {
// // // // // // // // // // // //         width: 80%;
// // // // // // // // // // // //         margin: 0 auto;
// // // // // // // // // // // //         background-color: #ffffff;
// // // // // // // // // // // //         border-radius: 12px;
// // // // // // // // // // // //         box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
// // // // // // // // // // // //         padding: 40px;
// // // // // // // // // // // //         overflow: hidden;
// // // // // // // // // // // //       }

// // // // // // // // // // // //       .header {
// // // // // // // // // // // //         text-align: center;
// // // // // // // // // // // //         padding: 20px 0;
// // // // // // // // // // // //         background: linear-gradient(135deg, #00bcd4, #00796b);
// // // // // // // // // // // //         color: #ffffff;
// // // // // // // // // // // //         border-radius: 12px;
// // // // // // // // // // // //         margin-bottom: 30px;
// // // // // // // // // // // //       }

// // // // // // // // // // // //       .header h1 {
// // // // // // // // // // // //         font-size: 36px;
// // // // // // // // // // // //         font-weight: 700;
// // // // // // // // // // // //         letter-spacing: 2px;
// // // // // // // // // // // //       }

// // // // // // // // // // // //       .header p {
// // // // // // // // // // // //         font-size: 18px;
// // // // // // // // // // // //         margin-top: 10px;
// // // // // // // // // // // //         opacity: 0.9;
// // // // // // // // // // // //       }

// // // // // // // // // // // //       .bill-info {
// // // // // // // // // // // //         display: flex;
// // // // // // // // // // // //         justify-content: space-between;
// // // // // // // // // // // //         margin-bottom: 30px;
// // // // // // // // // // // //         padding: 10px 0;
// // // // // // // // // // // //         font-size: 16px;
// // // // // // // // // // // //         color: #444;
// // // // // // // // // // // //         border-bottom: 2px solid #f4f4f4;
// // // // // // // // // // // //       }

// // // // // // // // // // // //       .bill-info div {
// // // // // // // // // // // //         flex: 1;
// // // // // // // // // // // //       }

// // // // // // // // // // // //       .bill-info .label {
// // // // // // // // // // // //         font-weight: 600;
// // // // // // // // // // // //         opacity: 0.8;
// // // // // // // // // // // //       }

// // // // // // // // // // // //       table {
// // // // // // // // // // // //         width: 100%;
// // // // // // // // // // // //         margin-bottom: 30px;
// // // // // // // // // // // //         border-collapse: collapse;
// // // // // // // // // // // //         text-align: center;
// // // // // // // // // // // //         border-radius: 8px;
// // // // // // // // // // // //         overflow: hidden;
// // // // // // // // // // // //       }

// // // // // // // // // // // //       th, td {
// // // // // // // // // // // //         padding: 15px;
// // // // // // // // // // // //         font-size: 16px;
// // // // // // // // // // // //         text-align: center;
// // // // // // // // // // // //       }

// // // // // // // // // // // //       th {
// // // // // // // // // // // //         background-color: #00bcd4;
// // // // // // // // // // // //         color: #ffffff;
// // // // // // // // // // // //         text-transform: uppercase;
// // // // // // // // // // // //         letter-spacing: 1px;
// // // // // // // // // // // //       }

// // // // // // // // // // // //       td {
// // // // // // // // // // // //         background-color: #fafafa;
// // // // // // // // // // // //         color: #333;
// // // // // // // // // // // //       }

// // // // // // // // // // // //       tr:nth-child(even) td {
// // // // // // // // // // // //         background-color: #f5f5f5;
// // // // // // // // // // // //       }

// // // // // // // // // // // //       .total-row {
// // // // // // // // // // // //         background-color: #00bcd4;
// // // // // // // // // // // //         color: #ffffff;
// // // // // // // // // // // //         font-weight: bold;
// // // // // // // // // // // //         font-size: 18px;
// // // // // // // // // // // //       }

// // // // // // // // // // // //       .footer {
// // // // // // // // // // // //         text-align: center;
// // // // // // // // // // // //         margin-top: 40px;
// // // // // // // // // // // //         padding: 20px;
// // // // // // // // // // // //         background-color: #00bcd4;
// // // // // // // // // // // //         color: #fff;
// // // // // // // // // // // //         border-radius: 12px;
// // // // // // // // // // // //       }

// // // // // // // // // // // //       .footer p {
// // // // // // // // // // // //         margin: 0;
// // // // // // // // // // // //         font-size: 16px;
// // // // // // // // // // // //         font-style: italic;
// // // // // // // // // // // //       }

// // // // // // // // // // // //       .print-btn {
// // // // // // // // // // // //         display: inline-block;
// // // // // // // // // // // //         padding: 15px 30px;
// // // // // // // // // // // //         margin-top: 20px;
// // // // // // // // // // // //         background-color: #28a745;
// // // // // // // // // // // //         color: white;
// // // // // // // // // // // //         border: none;
// // // // // // // // // // // //         border-radius: 8px;
// // // // // // // // // // // //         cursor: pointer;
// // // // // // // // // // // //         font-size: 16px;
// // // // // // // // // // // //         transition: background-color 0.3s ease-in-out;
// // // // // // // // // // // //         text-align: center;
// // // // // // // // // // // //       }

// // // // // // // // // // // //       .print-btn:hover {
// // // // // // // // // // // //         background-color: #218838;
// // // // // // // // // // // //       }

// // // // // // // // // // // //       /* Print Media Query */
// // // // // // // // // // // //       @media print {
// // // // // // // // // // // //         body {
// // // // // // // // // // // //           background-color: #fff;
// // // // // // // // // // // //           color: #333;
// // // // // // // // // // // //         }

// // // // // // // // // // // //         .container {
// // // // // // // // // // // //           box-shadow: none;
// // // // // // // // // // // //           margin: 0;
// // // // // // // // // // // //           padding: 20px;
// // // // // // // // // // // //         }

// // // // // // // // // // // //         .header, .footer {
// // // // // // // // // // // //           background-color: #00bcd4;
// // // // // // // // // // // //           color: #fff;
// // // // // // // // // // // //         }

// // // // // // // // // // // //         .footer {
// // // // // // // // // // // //           font-size: 14px;
// // // // // // // // // // // //           text-align: center;
// // // // // // // // // // // //         }

// // // // // // // // // // // //         .print-btn {
// // // // // // // // // // // //           display: none;
// // // // // // // // // // // //         }

// // // // // // // // // // // //         table th, table td {
// // // // // // // // // // // //           border: 1px solid #ddd;
// // // // // // // // // // // //         }

// // // // // // // // // // // //         .bill-info {
// // // // // // // // // // // //           font-size: 14px;
// // // // // // // // // // // //         }
// // // // // // // // // // // //       }
// // // // // // // // // // // //     </style>
// // // // // // // // // // // //   </head>
// // // // // // // // // // // //   <body>
// // // // // // // // // // // //     <div class="container">
// // // // // // // // // // // //       <div class="header">
// // // // // // // // // // // //         <h1>${storeName} - Invoice</h1>
// // // // // // // // // // // //         <p>${new Date().toLocaleString()}</p>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       <!-- Store Details -->
// // // // // // // // // // // //       <div class="bill-info">
// // // // // // // // // // // //         <div>
// // // // // // // // // // // //           <p class="label">Store Address:</p>
// // // // // // // // // // // //           <p>${storeAddress}</p>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //         <div>
// // // // // // // // // // // //           <p class="label">Store Email:</p>
// // // // // // // // // // // //           <p>${email}</p>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //         <div>
// // // // // // // // // // // //           <p class="label">Store Phone:</p>
// // // // // // // // // // // //           <p>${phoneNumber}</p>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       <!-- Customer Details -->
// // // // // // // // // // // //       <div class="bill-info">
// // // // // // // // // // // //         <div>
// // // // // // // // // // // //           <p class="label">Customer Name:</p>
// // // // // // // // // // // //           <p>${customerName}</p>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //         <div>
// // // // // // // // // // // //           <p class="label">Customer Phone:</p>
// // // // // // // // // // // //           <p>${customerPhone}</p>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       <!-- Product Table -->
// // // // // // // // // // // //       <table>
// // // // // // // // // // // //         <thead>
// // // // // // // // // // // //           <tr>
// // // // // // // // // // // //             <th>Product Name</th>
// // // // // // // // // // // //             <th>Price</th>
// // // // // // // // // // // //             <th>Quantity</th>
// // // // // // // // // // // //             <th>Total</th>
// // // // // // // // // // // //           </tr>
// // // // // // // // // // // //         </thead>
// // // // // // // // // // // //         <tbody>
// // // // // // // // // // // //           ${products.map(product => `
// // // // // // // // // // // //             <tr>
// // // // // // // // // // // //               <td>${product.product_name}</td>
// // // // // // // // // // // //               <td>${product.sale_price.toFixed(2)}</td>
// // // // // // // // // // // //               <td>${product.quantity}</td>
// // // // // // // // // // // //               <td>${(product.sale_price * product.quantity).toFixed(2)}</td>
// // // // // // // // // // // //             </tr>
// // // // // // // // // // // //           `).join('')}
// // // // // // // // // // // //           <tr class="total-row">
// // // // // // // // // // // //             <td colspan="3">Total Amount</td>
// // // // // // // // // // // //             <td>${totalAmount.toFixed(2)}</td>
// // // // // // // // // // // //           </tr>
// // // // // // // // // // // //         </tbody>
// // // // // // // // // // // //       </table>

// // // // // // // // // // // //       <div class="footer">
// // // // // // // // // // // //         <p>Thank you for shopping with us!</p>
// // // // // // // // // // // //         <button class="print-btn" onclick="window.print()">Print this Bill</button>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   </body>
// // // // // // // // // // // // </html>`;

// // // // // // // // // // // //     billWindow.document.write(billContent);
// // // // // // // // // // // //     billWindow.document.close();
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Handle customer selection from dropdown
// // // // // // // // // // // //   const handleCustomerSelect = (e) => {
// // // // // // // // // // // //     const selectedCustomerPhone = e.target.value;
// // // // // // // // // // // //     const customer = customers.find((c) => c.phone === selectedCustomerPhone);
// // // // // // // // // // // //     setSelectedCustomer(customer);
// // // // // // // // // // // //     setCustomerName(customer ? customer.name : "");
// // // // // // // // // // // //     setCustomerPhone(customer ? customer.phone : "");
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Handle new customer entry and save it to database
// // // // // // // // // // // //   const handleNewCustomerSave = async () => {
// // // // // // // // // // // //     if (!customerName || !customerPhone) {
// // // // // // // // // // // //       setError("Please enter valid customer details.");
// // // // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // // // //       return;
// // // // // // // // // // // //     }

// // // // // // // // // // // //     setSaving(true);
// // // // // // // // // // // //     try {
// // // // // // // // // // // //       const response = await fetch("http://localhost:5008/api/customers", {
// // // // // // // // // // // //         method: "POST",
// // // // // // // // // // // //         headers: {
// // // // // // // // // // // //           "Content-Type": "application/json",
// // // // // // // // // // // //         },
// // // // // // // // // // // //         body: JSON.stringify({
// // // // // // // // // // // //           name: customerName,
// // // // // // // // // // // //           phone: customerPhone,
// // // // // // // // // // // //           storeId,
// // // // // // // // // // // //         }),
// // // // // // // // // // // //       });

// // // // // // // // // // // //       if (!response.ok) {
// // // // // // // // // // // //         throw new Error("Failed to add customer");
// // // // // // // // // // // //       }

// // // // // // // // // // // //       const newCustomer = await response.json();
// // // // // // // // // // // //       setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
// // // // // // // // // // // //       setError("Customer added successfully!");
// // // // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // //       console.error("Error adding customer:", error);
// // // // // // // // // // // //       setError("Failed to add customer.");
// // // // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // // // //     } finally {
// // // // // // // // // // // //       setSaving(false);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };
// // // // // // // // // // // //   const containerVariants = {
// // // // // // // // // // // //     hidden: { opacity: 0 },
// // // // // // // // // // // //     visible: { 
// // // // // // // // // // // //       opacity: 1,
// // // // // // // // // // // //       transition: { 
// // // // // // // // // // // //         duration: 0.5,
// // // // // // // // // // // //         when: "beforeChildren",
// // // // // // // // // // // //         staggerChildren: 0.1
// // // // // // // // // // // //       }
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const itemVariants = {
// // // // // // // // // // // //     hidden: { y: 20, opacity: 0 },
// // // // // // // // // // // //     visible: { 
// // // // // // // // // // // //       y: 0, 
// // // // // // // // // // // //       opacity: 1,
// // // // // // // // // // // //       transition: { duration: 0.4 }
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const tableRowVariants = {
// // // // // // // // // // // //     hidden: { opacity: 0, x: -20 },
// // // // // // // // // // // //     visible: { 
// // // // // // // // // // // //       opacity: 1, 
// // // // // // // // // // // //       x: 0,
// // // // // // // // // // // //       transition: { duration: 0.3 }
// // // // // // // // // // // //     },
// // // // // // // // // // // //     exit: { 
// // // // // // // // // // // //       opacity: 0, 
// // // // // // // // // // // //       x: 20,
// // // // // // // // // // // //       transition: { duration: 0.2 }
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <motion.div 
// // // // // // // // // // // //       className="max-w-5xl mx-auto p-8 bg-white shadow-2xl rounded-lg"
// // // // // // // // // // // //       style={{ 
// // // // // // // // // // // //         background: "linear-gradient(to bottom, #ffffff, #f9fafb)",
// // // // // // // // // // // //         boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05)"
// // // // // // // // // // // //       }}
// // // // // // // // // // // //       initial="hidden"
// // // // // // // // // // // //       animate="visible"
// // // // // // // // // // // //       variants={containerVariants}
// // // // // // // // // // // //     >
// // // // // // // // // // // //       {/* Your existing UI code */}
// // // // // // // // // // // // <motion.div
// // // // // // // // // // // //         className="mb-8 text-center"
// // // // // // // // // // // //         variants={itemVariants}
// // // // // // // // // // // //       >
// // // // // // // // // // // //         <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
// // // // // // // // // // // //           INVOICE GENERATOR
// // // // // // // // // // // //         </h1>
// // // // // // // // // // // //         <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full mb-4"></div>
// // // // // // // // // // // //         <h2 className="text-2xl font-semibold text-gray-700">
// // // // // // // // // // // //           {storeName} Store
// // // // // // // // // // // //         </h2>
// // // // // // // // // // // //       </motion.div>

// // // // // // // // // // // //       {loading ? (
// // // // // // // // // // // //         <div className="flex justify-center items-center py-12">
// // // // // // // // // // // //           <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       ) : (
// // // // // // // // // // // //         <>
// // // // // // // // // // // //           {/* Product Selection Card */}
// // // // // // // // // // // //           <motion.div 
// // // // // // // // // // // //             className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100"
// // // // // // // // // // // //             variants={itemVariants}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Product Selection</h3>
// // // // // // // // // // // //             <div className="flex flex-col md:flex-row gap-4">
// // // // // // // // // // // //               <div className="flex-1">
// // // // // // // // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Select Product:</label>
// // // // // // // // // // // //                 <select
// // // // // // // // // // // //                   value={selectedProduct}
// // // // // // // // // // // //                   onChange={(e) => setSelectedProduct(e.target.value)}
// // // // // // // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   {allProducts.map((product) => (
// // // // // // // // // // // //                     <option key={product.id} value={product.product_name}>
// // // // // // // // // // // //                       {product.product_name} - ${parseFloat(product.sale_price).toFixed(2)}
// // // // // // // // // // // //                     </option>
// // // // // // // // // // // //                   ))}
// // // // // // // // // // // //                 </select>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //               <div className="flex-1">
// // // // // // // // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
// // // // // // // // // // // //                 <input
// // // // // // // // // // // //                   type="number"
// // // // // // // // // // // //                   value={quantity}
// // // // // // // // // // // //                   min="1"
// // // // // // // // // // // //                   onChange={(e) => setQuantity(e.target.value)}
// // // // // // // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // // // //                 />
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //               <div className="flex items-end">
// // // // // // // // // // // //                 <motion.button
// // // // // // // // // // // //                   onClick={addProduct}
// // // // // // // // // // // //                   className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
// // // // // // // // // // // //                   whileHover={{ scale: 1.05 }}
// // // // // // // // // // // //                   whileTap={{ scale: 0.98 }}
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   Add to Bill
// // // // // // // // // // // //                 </motion.button>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </motion.div>

// // // // // // // // // // // //           {/* Customer Details Card */}
// // // // // // // // // // // //           <motion.div 
// // // // // // // // // // // //             className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100"
// // // // // // // // // // // //             variants={itemVariants}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Customer Information</h3>
            
// // // // // // // // // // // //             {loadingCustomers ? (
// // // // // // // // // // // //               <div className="flex justify-center items-center py-4">
// // // // // // // // // // // //                 <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             ) : (
// // // // // // // // // // // //               <>
// // // // // // // // // // // //                 <div className="mb-4">
// // // // // // // // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Select Existing Customer:</label>
// // // // // // // // // // // //                   <select
// // // // // // // // // // // //                     value={customerPhone}
// // // // // // // // // // // //                     onChange={handleCustomerSelect}
// // // // // // // // // // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     <option value="">Select Customer</option>
// // // // // // // // // // // //                     {customers.map((customer) => (
// // // // // // // // // // // //                       <option key={customer.phone} value={customer.phone}>
// // // // // // // // // // // //                         {customer.name} - {customer.phone}
// // // // // // // // // // // //                       </option>
// // // // // // // // // // // //                     ))}
// // // // // // // // // // // //                   </select>
// // // // // // // // // // // //                 </div>

// // // // // // // // // // // //                 {!selectedCustomer && (
// // // // // // // // // // // //                   <motion.div 
// // // // // // // // // // // //                     className="p-4 bg-gray-50 rounded-lg mt-4"
// // // // // // // // // // // //                     initial={{ opacity: 0, height: 0 }}
// // // // // // // // // // // //                     animate={{ opacity: 1, height: "auto" }}
// // // // // // // // // // // //                     transition={{ duration: 0.3 }}
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     <h4 className="text-md font-medium mb-3 text-gray-700">New Customer</h4>
// // // // // // // // // // // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// // // // // // // // // // // //                       <div>
// // // // // // // // // // // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name:</label>
// // // // // // // // // // // //                         <input
// // // // // // // // // // // //                           type="text"
// // // // // // // // // // // //                           value={customerName}
// // // // // // // // // // // //                           onChange={(e) => setCustomerName(e.target.value)}
// // // // // // // // // // // //                           placeholder="Full Name"
// // // // // // // // // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // // // //                         />
// // // // // // // // // // // //                       </div>
// // // // // // // // // // // //                       <div>
// // // // // // // // // // // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number:</label>
// // // // // // // // // // // //                         <input
// // // // // // // // // // // //                           type="text"
// // // // // // // // // // // //                           value={customerPhone}
// // // // // // // // // // // //                           onChange={(e) => setCustomerPhone(e.target.value)}
// // // // // // // // // // // //                           placeholder="Phone Number"
// // // // // // // // // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // // // //                         />
// // // // // // // // // // // //                       </div>
// // // // // // // // // // // //                     </div>
// // // // // // // // // // // //                     <motion.button
// // // // // // // // // // // //                       onClick={handleNewCustomerSave}
// // // // // // // // // // // //                       className="w-full md:w-auto px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-md hover:shadow-lg hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-200 flex items-center justify-center"
// // // // // // // // // // // //                       whileHover={{ scale: 1.02 }}
// // // // // // // // // // // //                       whileTap={{ scale: 0.98 }}
// // // // // // // // // // // //                       disabled={saving}
// // // // // // // // // // // //                     >
// // // // // // // // // // // //                       {saving ? (
// // // // // // // // // // // //                         <>
// // // // // // // // // // // //                           <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // // // // // // // // // //                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // // // // // // // // //                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // // // // // // // // //                           </svg>
// // // // // // // // // // // //                           Saving Customer...
// // // // // // // // // // // //                         </>
// // // // // // // // // // // //                       ) : "Save New Customer"}
// // // // // // // // // // // //                     </motion.button>
// // // // // // // // // // // //                   </motion.div>
// // // // // // // // // // // //                 )}
// // // // // // // // // // // //               </>
// // // // // // // // // // // //             )}
// // // // // // // // // // // //           </motion.div>

// // // // // // // // // // // //           {/* Products Table Card */}
// // // // // // // // // // // //           <motion.div 
// // // // // // // // // // // //             className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100 overflow-hidden"
// // // // // // // // // // // //             variants={itemVariants}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Bill Items</h3>
            
// // // // // // // // // // // //             <div className="overflow-x-auto" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05) inset" }}>
// // // // // // // // // // // //               <table className="w-full mb-4">
// // // // // // // // // // // //                 <thead>
// // // // // // // // // // // //                   <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
// // // // // // // // // // // //                     <th className="p-3 font-semibold text-left">Product Name</th>
// // // // // // // // // // // //                     <th className="p-3 font-semibold text-right">Price</th>
// // // // // // // // // // // //                     <th className="p-3 font-semibold text-center">Quantity</th>
// // // // // // // // // // // //                     <th className="p-3 font-semibold text-right">Total</th>
// // // // // // // // // // // //                     <th className="p-3 font-semibold text-center">Action</th>
// // // // // // // // // // // //                   </tr>
// // // // // // // // // // // //                 </thead>
// // // // // // // // // // // //                 <tbody>
// // // // // // // // // // // //                   <AnimatePresence>
// // // // // // // // // // // //                     {products.length > 0 ? (
// // // // // // // // // // // //                       products.map((product) => (
// // // // // // // // // // // //                         <motion.tr 
// // // // // // // // // // // //                           key={product.id} 
// // // // // // // // // // // //                           className="border-b hover:bg-gray-50 transition-colors"
// // // // // // // // // // // //                           variants={tableRowVariants}
// // // // // // // // // // // //                           initial="hidden"
// // // // // // // // // // // //                           animate="visible"
// // // // // // // // // // // //                           exit="exit"
// // // // // // // // // // // //                         >
// // // // // // // // // // // //                           <td className="p-3 text-left">{product.product_name}</td>
// // // // // // // // // // // //                           <td className="p-3 text-right">${product.sale_price.toFixed(2)}</td>
// // // // // // // // // // // //                           <td className="p-3 text-center">{product.quantity}</td>
// // // // // // // // // // // //                           <td className="p-3 text-right font-medium">
// // // // // // // // // // // //                             ${(product.sale_price * product.quantity).toFixed(2)}
// // // // // // // // // // // //                           </td>
// // // // // // // // // // // //                           <td className="p-3 text-center">
// // // // // // // // // // // //                             <motion.button
// // // // // // // // // // // //                               onClick={() => deleteProduct(product.product_name)}
// // // // // // // // // // // //                               className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
// // // // // // // // // // // //                               whileHover={{ scale: 1.05 }}
// // // // // // // // // // // //                               whileTap={{ scale: 0.95 }}
// // // // // // // // // // // //                             >
// // // // // // // // // // // //                               Remove
// // // // // // // // // // // //                             </motion.button>
// // // // // // // // // // // //                           </td>
// // // // // // // // // // // //                         </motion.tr>
// // // // // // // // // // // //                       ))
// // // // // // // // // // // //                     ) : (
// // // // // // // // // // // //                       <motion.tr
// // // // // // // // // // // //                         variants={tableRowVariants}
// // // // // // // // // // // //                         initial="hidden"
// // // // // // // // // // // //                         animate="visible"
// // // // // // // // // // // //                       >
// // // // // // // // // // // //                         <td colSpan="5" className="p-4 text-center text-gray-500">
// // // // // // // // // // // //                           No products added to the bill yet.
// // // // // // // // // // // //                         </td>
// // // // // // // // // // // //                       </motion.tr>
// // // // // // // // // // // //                     )}
// // // // // // // // // // // //                   </AnimatePresence>
// // // // // // // // // // // //                 </tbody>
// // // // // // // // // // // //               </table>
// // // // // // // // // // // //             </div>
            
// // // // // // // // // // // //             {products.length > 0 && (
// // // // // // // // // // // //               <motion.div 
// // // // // // // // // // // //                 className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
// // // // // // // // // // // //                 initial={{ opacity: 0, y: 20 }}
// // // // // // // // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // //                 transition={{ duration: 0.3 }}
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 <div className="text-lg font-semibold text-gray-800">Total Amount:</div>
// // // // // // // // // // // //                 <div className="text-2xl font-bold text-blue-600">${totalAmount.toFixed(2)}</div>
// // // // // // // // // // // //               </motion.div>
// // // // // // // // // // // //             )}
// // // // // // // // // // // //           </motion.div>

// // // // // // // // // // // //           {/* Generate Bill Button */}
// // // // // // // // // // // //           <motion.div 
// // // // // // // // // // // //             className="text-center"
// // // // // // // // // // // //             variants={itemVariants}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <motion.button
// // // // // // // // // // // //               onClick={printBill}
// // // // // // // // // // // //               className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300"
// // // // // // // // // // // //               whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
// // // // // // // // // // // //               whileTap={{ scale: 0.98 }}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               Generate & Print Invoice
// // // // // // // // // // // //             </motion.button>
// // // // // // // // // // // //           </motion.div>
// // // // // // // // // // // //         </>
// // // // // // // // // // // //       )}

// // // // // // // // // // // //       {/* Error Message */}
// // // // // // // // // // // //       <AnimatePresence>
// // // // // // // // // // // //         {error && (
// // // // // // // // // // // //           <motion.div 
// // // // // // // // // // // //             className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${error.includes("successfully") ? "bg-green-500" : "bg-red-500"} text-white max-w-sm`}
// // // // // // // // // // // //             initial={{ opacity: 0, y: 50, x: 0 }}
// // // // // // // // // // // //             animate={{ opacity: 1, y: 0, x: 0 }}
// // // // // // // // // // // //             exit={{ opacity: 0, y: 50 }}
// // // // // // // // // // // //             transition={{ duration: 0.3 }}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             {error}
// // // // // // // // // // // //           </motion.div>
// // // // // // // // // // // //         )}
// // // // // // // // // // // //       </AnimatePresence>
// // // // // // // // // // // //       {/* Add a payment status dropdown */}
// // // // // // // // // // // //       <div className="mb-4">
// // // // // // // // // // // //         <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status:</label>
// // // // // // // // // // // //         <select
// // // // // // // // // // // //           value={paymentStatus}
// // // // // // // // // // // //           onChange={(e) => setPaymentStatus(e.target.value)}
// // // // // // // // // // // //           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // // // //         >
// // // // // // // // // // // //           <option value="paid">Paid</option>
// // // // // // // // // // // //           <option value="unpaid">Unpaid</option>
// // // // // // // // // // // //         </select>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* Display customer balance */}
// // // // // // // // // // // //       {customerPhone && (
// // // // // // // // // // // //         <div className="mb-4">
// // // // // // // // // // // //           <p className="text-sm font-medium text-gray-700">Customer Balance:</p>
// // // // // // // // // // // //           <p className={`text-lg font-bold ${customerBalance >= 0 ? "text-green-600" : "text-red-600"}`}>
// // // // // // // // // // // //             ${customerBalance.toFixed(2)}
// // // // // // // // // // // //           </p>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       )}
// // // // // // // // // // // //      <Khatabook storeId={storeId} />
// // // // // // // // // // // //     </motion.div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default Billing;

// // // // // // // // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // // // // // // const Billing = () => {
// // // // // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // // // // //   const [allProducts, setAllProducts] = useState([]);
// // // // // // // // // // //   const [selectedProduct, setSelectedProduct] = useState("");
// // // // // // // // // // //   const [quantity, setQuantity] = useState(1);
// // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // //   const [customerName, setCustomerName] = useState("");
// // // // // // // // // // //   const [customerPhone, setCustomerPhone] = useState("");
// // // // // // // // // // //   const [customerEmail, setCustomerEmail] = useState(""); // New state for customer email
// // // // // // // // // // //   const [customers, setCustomers] = useState([]);
// // // // // // // // // // //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// // // // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // // // //   const [loadingCustomers, setLoadingCustomers] = useState(true);
// // // // // // // // // // //   const [saving, setSaving] = useState(false);
// // // // // // // // // // //   const [paymentStatus, setPaymentStatus] = useState("paid"); // 'paid' or 'unpaid'
// // // // // // // // // // //   const [customerBalance, setCustomerBalance] = useState(0); // Customer balance from Khatabook
// // // // // // // // // // //   const { storeName, storeId } = useContext(StoreContext);
// // // // // // // // // // //   const storeAddress = localStorage.getItem("storeAddress");
// // // // // // // // // // //   const email = localStorage.getItem("email");
// // // // // // // // // // //   const fullName = localStorage.getItem("fullName");
// // // // // // // // // // //   const phoneNumber = localStorage.getItem("phoneNumber");
// // // // // // // // // // //   const userId = localStorage.getItem("userId");

// // // // // // // // // // //   // Fetching products from backend
// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     console.log(userId);
// // // // // // // // // // //     const fetchProducts = async () => {
// // // // // // // // // // //       setLoading(true);
// // // // // // // // // // //       try {
// // // // // // // // // // //         const response = await fetch("http://localhost:5002/api/products", {
// // // // // // // // // // //           headers: { storeId,userId },
// // // // // // // // // // //         });
// // // // // // // // // // //         if (!response.ok) {
// // // // // // // // // // //           throw new Error("Failed to fetch products");
// // // // // // // // // // //         }
// // // // // // // // // // //         const data = await response.json();

// // // // // // // // // // //         if (data && Array.isArray(data) && data.length > 0) {
// // // // // // // // // // //           setAllProducts(data);
// // // // // // // // // // //           setSelectedProduct(data[0].product_name);
// // // // // // // // // // //         } else {
// // // // // // // // // // //           console.error("No products found or incorrect data format.");
// // // // // // // // // // //           setError("No products available. Please add products first.");
// // // // // // // // // // //         }
// // // // // // // // // // //       } catch (error) {
// // // // // // // // // // //         console.error("Error fetching products:", error);
// // // // // // // // // // //         setError("Failed to fetch products. Please check your connection.");
// // // // // // // // // // //       } finally {
// // // // // // // // // // //         setLoading(false);
// // // // // // // // // // //       }
// // // // // // // // // // //     };

// // // // // // // // // // //     if (storeId) {
// // // // // // // // // // //       fetchProducts();
// // // // // // // // // // //     } else {
// // // // // // // // // // //       console.error("Store ID not provided.");
// // // // // // // // // // //       setError("Store identification failed. Please try again.");
// // // // // // // // // // //       setLoading(false);
// // // // // // // // // // //     }
// // // // // // // // // // //   }, [storeId]);

// // // // // // // // // // //   // Fetching customers from backend
// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const fetchCustomers = async () => {
// // // // // // // // // // //       setLoadingCustomers(true);
// // // // // // // // // // //       try {
// // // // // // // // // // //         const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}&userId=${userId}`);
// // // // // // // // // // //         if (!response.ok) {
// // // // // // // // // // //           throw new Error("Failed to fetch customers");
// // // // // // // // // // //         }
// // // // // // // // // // //         const data = await response.json();
// // // // // // // // // // //         setCustomers(data.customers);
// // // // // // // // // // //       } catch (error) {
// // // // // // // // // // //         console.error("Error fetching customers:", error);
// // // // // // // // // // //       } finally {
// // // // // // // // // // //         setLoadingCustomers(false);
// // // // // // // // // // //       }
// // // // // // // // // // //     };

// // // // // // // // // // //     if (storeId) {
// // // // // // // // // // //       fetchCustomers();
// // // // // // // // // // //     }
// // // // // // // // // // //   }, [storeId]);

// // // // // // // // // // //   // Fetch customer balance from Khatabook
// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     if (customerPhone) {
// // // // // // // // // // //       const fetchCustomerBalance = async () => {
// // // // // // // // // // //         try {
// // // // // // // // // // //           const response = await fetch(`http://localhost:5002/api/khatabook/customers/${customerPhone}/balance`, {
// // // // // // // // // // //             headers: { storeId },
// // // // // // // // // // //           });
// // // // // // // // // // //           if (!response.ok) {
// // // // // // // // // // //             throw new Error("Failed to fetch customer balance");
// // // // // // // // // // //           }
// // // // // // // // // // //           const data = await response.json();
// // // // // // // // // // //           setCustomerBalance(data.balance);
// // // // // // // // // // //         } catch (error) {
// // // // // // // // // // //           console.error("Error fetching customer balance:", error);
// // // // // // // // // // //         }
// // // // // // // // // // //       };

// // // // // // // // // // //       fetchCustomerBalance();
// // // // // // // // // // //     }
// // // // // // // // // // //   }, [customerPhone, storeId]);

// // // // // // // // // // //   // Adding a product to the bill
// // // // // // // // // // //   const addProduct = () => {
// // // // // // // // // // //     const selectedProductData = allProducts.find(
// // // // // // // // // // //       (p) => p.product_name === selectedProduct
// // // // // // // // // // //     );

// // // // // // // // // // //     if (selectedProductData) {
// // // // // // // // // // //       setProducts((prevProducts) => {
// // // // // // // // // // //         const existingProduct = prevProducts.find(
// // // // // // // // // // //           (p) => p.product_name === selectedProductData.product_name
// // // // // // // // // // //         );

// // // // // // // // // // //         if (existingProduct) {
// // // // // // // // // // //           // Update quantity if product already exists
// // // // // // // // // // //           return prevProducts.map((p) =>
// // // // // // // // // // //             p.product_name === selectedProductData.product_name
// // // // // // // // // // //               ? { ...p, quantity: p.quantity + parseInt(quantity) }
// // // // // // // // // // //               : p
// // // // // // // // // // //           );
// // // // // // // // // // //         } else {
// // // // // // // // // // //           // Add new product to the bill
// // // // // // // // // // //           return [
// // // // // // // // // // //             ...prevProducts,
// // // // // // // // // // //             {
// // // // // // // // // // //               id: selectedProductData.id,
// // // // // // // // // // //               product_name: selectedProductData.product_name,
// // // // // // // // // // //               sale_price: parseFloat(selectedProductData.sale_price),
// // // // // // // // // // //               quantity: parseInt(quantity),
// // // // // // // // // // //             },
// // // // // // // // // // //           ];
// // // // // // // // // // //         }
// // // // // // // // // // //       });
// // // // // // // // // // //     } else {
// // // // // // // // // // //       console.error("Selected product not found in all products list.");
// // // // // // // // // // //     }

// // // // // // // // // // //     setQuantity(1); // Reset quantity input
// // // // // // // // // // //   };

// // // // // // // // // // //   // Deleting a product from the bill
// // // // // // // // // // //   const deleteProduct = (productName) => {
// // // // // // // // // // //     setProducts(products.filter((p) => p.product_name !== productName));
// // // // // // // // // // //   };

// // // // // // // // // // //   // Calculating the total amount
// // // // // // // // // // //   const totalAmount = products.reduce(
// // // // // // // // // // //     (total, product) => total + product.sale_price * product.quantity,
// // // // // // // // // // //     0
// // // // // // // // // // //   );

// // // // // // // // // // //   // Send bill to email using SMTP
// // // // // // // // // // //   const sendBillToEmail = async (billContent) => {
// // // // // // // // // // //     try {
// // // // // // // // // // //       const response = await fetch("http://localhost:5002/api/send-email", {
// // // // // // // // // // //         method: "POST",
// // // // // // // // // // //         headers: {
// // // // // // // // // // //           "Content-Type": "application/json",
// // // // // // // // // // //         },
// // // // // // // // // // //         body: JSON.stringify({
// // // // // // // // // // //           to: customerEmail,
// // // // // // // // // // //           subject: `Invoice from ${storeName}`,
// // // // // // // // // // //           html: billContent,
// // // // // // // // // // //         }),
// // // // // // // // // // //       });

// // // // // // // // // // //       if (!response.ok) {
// // // // // // // // // // //         throw new Error("Failed to send email");
// // // // // // // // // // //       }

// // // // // // // // // // //       const data = await response.json();
// // // // // // // // // // //       console.log("Email sent successfully:", data);
// // // // // // // // // // //     } catch (error) {
// // // // // // // // // // //       console.error("Error sending email:", error);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   // Generating the bill in a new window
// // // // // // // // // // //   const printBill = async () => {
// // // // // // // // // // //     if (!products || products.length === 0) {
// // // // // // // // // // //       setError("No items to print! Please add products to the bill.");
// // // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // // //       return;
// // // // // // // // // // //     }

// // // // // // // // // // //     if (!customerName || !customerPhone) {
// // // // // // // // // // //       setError("Please enter customer details before generating the bill.");
// // // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // // //       return;
// // // // // // // // // // //     }

// // // // // // // // // // //     // Include userId and payment status in the bill data
// // // // // // // // // // //     const billData = {
// // // // // // // // // // //       products,
// // // // // // // // // // //       customerName,
// // // // // // // // // // //       customerPhone,
// // // // // // // // // // //       customerEmail, // Include customer email
// // // // // // // // // // //       userId,
// // // // // // // // // // //       paymentStatus,
// // // // // // // // // // //     };

// // // // // // // // // // //     // Send the bill data to backend to generate the final bill and update stock
// // // // // // // // // // //     const response = await fetch("http://localhost:5002/api/generate-bill", {
// // // // // // // // // // //       method: "POST",
// // // // // // // // // // //       headers: {
// // // // // // // // // // //         "Content-Type": "application/json",
// // // // // // // // // // //         storeId,
// // // // // // // // // // //         userId
// // // // // // // // // // //       },
// // // // // // // // // // //       body: JSON.stringify(billData),
// // // // // // // // // // //     });

// // // // // // // // // // //     if (!response.ok) {
// // // // // // // // // // //       const data = await response.json();
// // // // // // // // // // //       setError(data.error || "Failed to generate bill");
// // // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // // //       return;
// // // // // // // // // // //     }

// // // // // // // // // // //     const data = await response.json();
// // // // // // // // // // //     const billSummary = data; // Bill summary returned from backend

// // // // // // // // // // //     // Open the bill in a new window
// // // // // // // // // // //     const billWindow = window.open("", "Bill", "width=800,height=600");
// // // // // // // // // // //     const billContent = 
// // // // // // // // // // // `<html>
// // // // // // // // // // //   <head>
// // // // // // // // // // //     <title>${storeName} - Bill</title>
// // // // // // // // // // //     <style>
// // // // // // // // // // //       /* Basic Reset */
// // // // // // // // // // //       * {
// // // // // // // // // // //         margin: 0;
// // // // // // // // // // //         padding: 0;
// // // // // // // // // // //         box-sizing: border-box;
// // // // // // // // // // //       }

// // // // // // // // // // //       body {
// // // // // // // // // // //         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
// // // // // // // // // // //         background-color: #f0f1f6;
// // // // // // // // // // //         color: #333;
// // // // // // // // // // //         line-height: 1.6;
// // // // // // // // // // //       }

// // // // // // // // // // //       .container {
// // // // // // // // // // //         width: 80%;
// // // // // // // // // // //         margin: 0 auto;
// // // // // // // // // // //         background-color: #ffffff;
// // // // // // // // // // //         border-radius: 12px;
// // // // // // // // // // //         box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
// // // // // // // // // // //         padding: 40px;
// // // // // // // // // // //         overflow: hidden;
// // // // // // // // // // //       }

// // // // // // // // // // //       .header {
// // // // // // // // // // //         text-align: center;
// // // // // // // // // // //         padding: 20px 0;
// // // // // // // // // // //         background: linear-gradient(135deg, #00bcd4, #00796b);
// // // // // // // // // // //         color: #ffffff;
// // // // // // // // // // //         border-radius: 12px;
// // // // // // // // // // //         margin-bottom: 30px;
// // // // // // // // // // //       }

// // // // // // // // // // //       .header h1 {
// // // // // // // // // // //         font-size: 36px;
// // // // // // // // // // //         font-weight: 700;
// // // // // // // // // // //         letter-spacing: 2px;
// // // // // // // // // // //       }

// // // // // // // // // // //       .header p {
// // // // // // // // // // //         font-size: 18px;
// // // // // // // // // // //         margin-top: 10px;
// // // // // // // // // // //         opacity: 0.9;
// // // // // // // // // // //       }

// // // // // // // // // // //       .bill-info {
// // // // // // // // // // //         display: flex;
// // // // // // // // // // //         justify-content: space-between;
// // // // // // // // // // //         margin-bottom: 30px;
// // // // // // // // // // //         padding: 10px 0;
// // // // // // // // // // //         font-size: 16px;
// // // // // // // // // // //         color: #444;
// // // // // // // // // // //         border-bottom: 2px solid #f4f4f4;
// // // // // // // // // // //       }

// // // // // // // // // // //       .bill-info div {
// // // // // // // // // // //         flex: 1;
// // // // // // // // // // //       }

// // // // // // // // // // //       .bill-info .label {
// // // // // // // // // // //         font-weight: 600;
// // // // // // // // // // //         opacity: 0.8;
// // // // // // // // // // //       }

// // // // // // // // // // //       table {
// // // // // // // // // // //         width: 100%;
// // // // // // // // // // //         margin-bottom: 30px;
// // // // // // // // // // //         border-collapse: collapse;
// // // // // // // // // // //         text-align: center;
// // // // // // // // // // //         border-radius: 8px;
// // // // // // // // // // //         overflow: hidden;
// // // // // // // // // // //       }

// // // // // // // // // // //       th, td {
// // // // // // // // // // //         padding: 15px;
// // // // // // // // // // //         font-size: 16px;
// // // // // // // // // // //         text-align: center;
// // // // // // // // // // //       }

// // // // // // // // // // //       th {
// // // // // // // // // // //         background-color: #00bcd4;
// // // // // // // // // // //         color: #ffffff;
// // // // // // // // // // //         text-transform: uppercase;
// // // // // // // // // // //         letter-spacing: 1px;
// // // // // // // // // // //       }

// // // // // // // // // // //       td {
// // // // // // // // // // //         background-color: #fafafa;
// // // // // // // // // // //         color: #333;
// // // // // // // // // // //       }

// // // // // // // // // // //       tr:nth-child(even) td {
// // // // // // // // // // //         background-color: #f5f5f5;
// // // // // // // // // // //       }

// // // // // // // // // // //       .total-row {
// // // // // // // // // // //         background-color: #00bcd4;
// // // // // // // // // // //         color: #ffffff;
// // // // // // // // // // //         font-weight: bold;
// // // // // // // // // // //         font-size: 18px;
// // // // // // // // // // //       }

// // // // // // // // // // //       .footer {
// // // // // // // // // // //         text-align: center;
// // // // // // // // // // //         margin-top: 40px;
// // // // // // // // // // //         padding: 20px;
// // // // // // // // // // //         background-color: #00bcd4;
// // // // // // // // // // //         color: #fff;
// // // // // // // // // // //         border-radius: 12px;
// // // // // // // // // // //       }

// // // // // // // // // // //       .footer p {
// // // // // // // // // // //         margin: 0;
// // // // // // // // // // //         font-size: 16px;
// // // // // // // // // // //         font-style: italic;
// // // // // // // // // // //       }

// // // // // // // // // // //       .print-btn {
// // // // // // // // // // //         display: inline-block;
// // // // // // // // // // //         padding: 15px 30px;
// // // // // // // // // // //         margin-top: 20px;
// // // // // // // // // // //         background-color: #28a745;
// // // // // // // // // // //         color: white;
// // // // // // // // // // //         border: none;
// // // // // // // // // // //         border-radius: 8px;
// // // // // // // // // // //         cursor: pointer;
// // // // // // // // // // //         font-size: 16px;
// // // // // // // // // // //         transition: background-color 0.3s ease-in-out;
// // // // // // // // // // //         text-align: center;
// // // // // // // // // // //       }

// // // // // // // // // // //       .print-btn:hover {
// // // // // // // // // // //         background-color: #218838;
// // // // // // // // // // //       }

// // // // // // // // // // //       /* Print Media Query */
// // // // // // // // // // //       @media print {
// // // // // // // // // // //         body {
// // // // // // // // // // //           background-color: #fff;
// // // // // // // // // // //           color: #333;
// // // // // // // // // // //         }

// // // // // // // // // // //         .container {
// // // // // // // // // // //           box-shadow: none;
// // // // // // // // // // //           margin: 0;
// // // // // // // // // // //           padding: 20px;
// // // // // // // // // // //         }

// // // // // // // // // // //         .header, .footer {
// // // // // // // // // // //           background-color: #00bcd4;
// // // // // // // // // // //           color: #fff;
// // // // // // // // // // //         }

// // // // // // // // // // //         .footer {
// // // // // // // // // // //           font-size: 14px;
// // // // // // // // // // //           text-align: center;
// // // // // // // // // // //         }

// // // // // // // // // // //         .print-btn {
// // // // // // // // // // //           display: none;
// // // // // // // // // // //         }

// // // // // // // // // // //         table th, table td {
// // // // // // // // // // //           border: 1px solid #ddd;
// // // // // // // // // // //         }

// // // // // // // // // // //         .bill-info {
// // // // // // // // // // //           font-size: 14px;
// // // // // // // // // // //         }
// // // // // // // // // // //       }
// // // // // // // // // // //     </style>
// // // // // // // // // // //   </head>
// // // // // // // // // // //   <body>
// // // // // // // // // // //     <div class="container">
// // // // // // // // // // //       <div class="header">
// // // // // // // // // // //         <h1>${storeName} - Invoice</h1>
// // // // // // // // // // //         <p>${new Date().toLocaleString()}</p>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       <!-- Store Details -->
// // // // // // // // // // //       <div class="bill-info">
// // // // // // // // // // //         <div>
// // // // // // // // // // //           <p class="label">Store Address:</p>
// // // // // // // // // // //           <p>${storeAddress}</p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //         <div>
// // // // // // // // // // //           <p class="label">Store Email:</p>
// // // // // // // // // // //           <p>${email}</p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //         <div>
// // // // // // // // // // //           <p class="label">Store Phone:</p>
// // // // // // // // // // //           <p>${phoneNumber}</p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       <!-- Customer Details -->
// // // // // // // // // // //       <div class="bill-info">
// // // // // // // // // // //         <div>
// // // // // // // // // // //           <p class="label">Customer Name:</p>
// // // // // // // // // // //           <p>${customerName}</p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //         <div>
// // // // // // // // // // //           <p class="label">Customer Phone:</p>
// // // // // // // // // // //           <p>${customerPhone}</p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       <!-- Product Table -->
// // // // // // // // // // //       <table>
// // // // // // // // // // //         <thead>
// // // // // // // // // // //           <tr>
// // // // // // // // // // //             <th>Product Name</th>
// // // // // // // // // // //             <th>Price</th>
// // // // // // // // // // //             <th>Quantity</th>
// // // // // // // // // // //             <th>Total</th>
// // // // // // // // // // //           </tr>
// // // // // // // // // // //         </thead>
// // // // // // // // // // //         <tbody>
// // // // // // // // // // //           ${products.map(product => `
// // // // // // // // // // //             <tr>
// // // // // // // // // // //               <td>${product.product_name}</td>
// // // // // // // // // // //               <td>${product.sale_price.toFixed(2)}</td>
// // // // // // // // // // //               <td>${product.quantity}</td>
// // // // // // // // // // //               <td>${(product.sale_price * product.quantity).toFixed(2)}</td>
// // // // // // // // // // //             </tr>
// // // // // // // // // // //           `).join('')}
// // // // // // // // // // //           <tr class="total-row">
// // // // // // // // // // //             <td colspan="3">Total Amount</td>
// // // // // // // // // // //             <td>${totalAmount.toFixed(2)}</td>
// // // // // // // // // // //           </tr>
// // // // // // // // // // //         </tbody>
// // // // // // // // // // //       </table>

// // // // // // // // // // //       <div class="footer">
// // // // // // // // // // //         <p>Thank you for shopping with us!</p>
// // // // // // // // // // //         <button class="print-btn" onclick="window.print()">Print this Bill</button>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   </body>
// // // // // // // // // // // </html>`;

// // // // // // // // // // //     billWindow.document.write(billContent);
// // // // // // // // // // //     billWindow.document.close();

// // // // // // // // // // //     // Send bill to email if email is provided
// // // // // // // // // // //     if (customerEmail) {
// // // // // // // // // // //       await sendBillToEmail(billContent);
// // // // // // // // // // //     }

// // // // // // // // // // //     // Add to Khatabook only if payment status is unpaid
// // // // // // // // // // //     // if (paymentStatus === "unpaid") {
// // // // // // // // // // //     //   const khatabookTransaction = {
// // // // // // // // // // //     //     customerPhone,
// // // // // // // // // // //     //     type: "debit", // Customer owes money
// // // // // // // // // // //     //     amount: totalAmount,
// // // // // // // // // // //     //     notes: "Unpaid bill",
// // // // // // // // // // //     //   };

// // // // // // // // // // //     //   const khatabookResponse = await fetch("http://localhost:5002/api/khatabook/transactions", {
// // // // // // // // // // //     //     method: "POST",
// // // // // // // // // // //     //     headers: {
// // // // // // // // // // //     //       "Content-Type": "application/json",
// // // // // // // // // // //     //       storeId,
// // // // // // // // // // //     //     },
// // // // // // // // // // //     //     body: JSON.stringify(khatabookTransaction),
// // // // // // // // // // //     //   });

// // // // // // // // // // //     //   if (!khatabookResponse.ok) {
// // // // // // // // // // //     //     throw new Error("Failed to add transaction to Khatabook");
// // // // // // // // // // //     //   }
// // // // // // // // // // //     // } setProducts([]);
// // // // // // // // // // //   setCustomerName("");
// // // // // // // // // // //   setCustomerPhone("");
// // // // // // // // // // //   setCustomerEmail("");
// // // // // // // // // // //   setPaymentStatus("paid");
// // // // // // // // // // //   };

// // // // // // // // // // //   // Handle customer selection from dropdown
// // // // // // // // // // //   const handleCustomerSelect = (e) => {
// // // // // // // // // // //     const selectedCustomerPhone = e.target.value;
// // // // // // // // // // //     const customer = customers.find((c) => c.phone === selectedCustomerPhone);
// // // // // // // // // // //     setSelectedCustomer(customer);
// // // // // // // // // // //     setCustomerName(customer ? customer.name : "");
// // // // // // // // // // //     setCustomerPhone(customer ? customer.phone : "");
// // // // // // // // // // //     setCustomerEmail(customer ? customer.email : ""); // Set customer email
// // // // // // // // // // //   };

// // // // // // // // // // //   // Handle new customer entry and save it to database
// // // // // // // // // // //   const handleNewCustomerSave = async () => {
// // // // // // // // // // //     if (!customerName || !customerPhone) {
// // // // // // // // // // //       setError("Please enter valid customer details.");
// // // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // // //       return;
// // // // // // // // // // //     }

// // // // // // // // // // //     setSaving(true);
// // // // // // // // // // //     try {
// // // // // // // // // // //       const response = await fetch("http://localhost:5008/api/customers", {
// // // // // // // // // // //         method: "POST",
// // // // // // // // // // //         headers: {
// // // // // // // // // // //           "Content-Type": "application/json",
// // // // // // // // // // //         },
// // // // // // // // // // //         body: JSON.stringify({
// // // // // // // // // // //           name: customerName,
// // // // // // // // // // //           phone: customerPhone,
// // // // // // // // // // //           email: customerEmail, // Include email
// // // // // // // // // // //           storeId,
// // // // // // // // // // //         }),
// // // // // // // // // // //       });

// // // // // // // // // // //       if (!response.ok) {
// // // // // // // // // // //         throw new Error("Failed to add customer");
// // // // // // // // // // //       }

// // // // // // // // // // //       const newCustomer = await response.json();
// // // // // // // // // // //       setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
// // // // // // // // // // //       setError("Customer added successfully!");
// // // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // // //     } catch (error) {
// // // // // // // // // // //       console.error("Error adding customer:", error);
// // // // // // // // // // //       setError("Failed to add customer.");
// // // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // // //     } finally {
// // // // // // // // // // //       setSaving(false);
// // // // // // // // // // //     }
// // // // // // // // // // //   };
// // // // // // // // // // //   const containerVariants = {
// // // // // // // // // // //     hidden: { opacity: 0 },
// // // // // // // // // // //     visible: { 
// // // // // // // // // // //       opacity: 1,
// // // // // // // // // // //       transition: { 
// // // // // // // // // // //         duration: 0.5,
// // // // // // // // // // //         when: "beforeChildren",
// // // // // // // // // // //         staggerChildren: 0.1
// // // // // // // // // // //       }
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const itemVariants = {
// // // // // // // // // // //     hidden: { y: 20, opacity: 0 },
// // // // // // // // // // //     visible: { 
// // // // // // // // // // //       y: 0, 
// // // // // // // // // // //       opacity: 1,
// // // // // // // // // // //       transition: { duration: 0.4 }
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const tableRowVariants = {
// // // // // // // // // // //     hidden: { opacity: 0, x: -20 },
// // // // // // // // // // //     visible: { 
// // // // // // // // // // //       opacity: 1, 
// // // // // // // // // // //       x: 0,
// // // // // // // // // // //       transition: { duration: 0.3 }
// // // // // // // // // // //     },
// // // // // // // // // // //     exit: { 
// // // // // // // // // // //       opacity: 0, 
// // // // // // // // // // //       x: 20,
// // // // // // // // // // //       transition: { duration: 0.2 }
// // // // // // // // // // //     }
// // // // // // // // // // //   };


// // // // // // // // // // //   return (
// // // // // // // // // // //     <motion.div 
// // // // // // // // // // //       className="max-w-5xl mx-auto p-8 bg-white shadow-2xl rounded-lg"
// // // // // // // // // // //       style={{ 
// // // // // // // // // // //         background: "linear-gradient(to bottom, #ffffff, #f9fafb)",
// // // // // // // // // // //         boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05)"
// // // // // // // // // // //       }}
// // // // // // // // // // //       initial="hidden"
// // // // // // // // // // //       animate="visible"
// // // // // // // // // // //       variants={containerVariants}
// // // // // // // // // // //     >
// // // // // // // // // // //       {/* Your existing UI code */}
// // // // // // // // // // // <motion.div
// // // // // // // // // // //         className="mb-8 text-center"
// // // // // // // // // // //         variants={itemVariants}
// // // // // // // // // // //       >
// // // // // // // // // // //         <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
// // // // // // // // // // //           INVOICE GENERATOR
// // // // // // // // // // //         </h1>
// // // // // // // // // // //         <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full mb-4"></div>
// // // // // // // // // // //         <h2 className="text-2xl font-semibold text-gray-700">
// // // // // // // // // // //           {storeName} Store
// // // // // // // // // // //         </h2>
// // // // // // // // // // //       </motion.div>

// // // // // // // // // // //       {loading ? (
// // // // // // // // // // //         <div className="flex justify-center items-center py-12">
// // // // // // // // // // //           <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       ) : (
// // // // // // // // // // //         <>
// // // // // // // // // // //           {/* Product Selection Card */}
// // // // // // // // // // //           <motion.div 
// // // // // // // // // // //             className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100"
// // // // // // // // // // //             variants={itemVariants}
// // // // // // // // // // //           >
// // // // // // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Product Selection</h3>
// // // // // // // // // // //             <div className="flex flex-col md:flex-row gap-4">
// // // // // // // // // // //               <div className="flex-1">
// // // // // // // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Select Product:</label>
// // // // // // // // // // //                 <select
// // // // // // // // // // //                   value={selectedProduct}
// // // // // // // // // // //                   onChange={(e) => setSelectedProduct(e.target.value)}
// // // // // // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   {allProducts.map((product) => (
// // // // // // // // // // //                     <option key={product.id} value={product.product_name}>
// // // // // // // // // // //                       {product.product_name} - ${parseFloat(product.sale_price).toFixed(2)}
// // // // // // // // // // //                     </option>
// // // // // // // // // // //                   ))}
// // // // // // // // // // //                 </select>
// // // // // // // // // // //               </div>
// // // // // // // // // // //               <div className="flex-1">
// // // // // // // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
// // // // // // // // // // //                 <input
// // // // // // // // // // //                   type="number"
// // // // // // // // // // //                   value={quantity}
// // // // // // // // // // //                   min="1"
// // // // // // // // // // //                   onChange={(e) => setQuantity(e.target.value)}
// // // // // // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // // //                 />
// // // // // // // // // // //               </div>
// // // // // // // // // // //               <div className="flex items-end">
// // // // // // // // // // //                 <motion.button
// // // // // // // // // // //                   onClick={addProduct}
// // // // // // // // // // //                   className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
// // // // // // // // // // //                   whileHover={{ scale: 1.05 }}
// // // // // // // // // // //                   whileTap={{ scale: 0.98 }}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   Add to Bill
// // // // // // // // // // //                 </motion.button>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </motion.div>

// // // // // // // // // // //           {/* Customer Details Card */}
// // // // // // // // // // //           <motion.div 
// // // // // // // // // // //             className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100"
// // // // // // // // // // //             variants={itemVariants}
// // // // // // // // // // //           >
// // // // // // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Customer Information</h3>
            
// // // // // // // // // // //             {loadingCustomers ? (
// // // // // // // // // // //               <div className="flex justify-center items-center py-4">
// // // // // // // // // // //                 <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             ) : (
// // // // // // // // // // //               <>
// // // // // // // // // // //                 <div className="mb-4">
// // // // // // // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Select Existing Customer:</label>
// // // // // // // // // // //                   <select
// // // // // // // // // // //                     value={customerPhone}
// // // // // // // // // // //                     onChange={handleCustomerSelect}
// // // // // // // // // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <option value="">Select Customer</option>
// // // // // // // // // // //                     {customers.map((customer) => (
// // // // // // // // // // //                       <option key={customer.phone} value={customer.phone}>
// // // // // // // // // // //                         {customer.name} - {customer.phone}
// // // // // // // // // // //                       </option>
// // // // // // // // // // //                     ))}
// // // // // // // // // // //                   </select>
// // // // // // // // // // //                 </div>

// // // // // // // // // // //                 {!selectedCustomer && (
// // // // // // // // // // //                   <motion.div 
// // // // // // // // // // //                     className="p-4 bg-gray-50 rounded-lg mt-4"
// // // // // // // // // // //                     initial={{ opacity: 0, height: 0 }}
// // // // // // // // // // //                     animate={{ opacity: 1, height: "auto" }}
// // // // // // // // // // //                     transition={{ duration: 0.3 }}
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <h4 className="text-md font-medium mb-3 text-gray-700">New Customer</h4>
// // // // // // // // // // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// // // // // // // // // // //                       <div>
// // // // // // // // // // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name:</label>
// // // // // // // // // // //                         <input
// // // // // // // // // // //                           type="text"
// // // // // // // // // // //                           value={customerName}
// // // // // // // // // // //                           onChange={(e) => setCustomerName(e.target.value)}
// // // // // // // // // // //                           placeholder="Full Name"
// // // // // // // // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // // //                         />
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                       <div>
// // // // // // // // // // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number:</label>
// // // // // // // // // // //                         <input
// // // // // // // // // // //                           type="text"
// // // // // // // // // // //                           value={customerPhone}
// // // // // // // // // // //                           onChange={(e) => setCustomerPhone(e.target.value)}
// // // // // // // // // // //                           placeholder="Phone Number"
// // // // // // // // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // // //                         />
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                     <motion.button
// // // // // // // // // // //                       onClick={handleNewCustomerSave}
// // // // // // // // // // //                       className="w-full md:w-auto px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-md hover:shadow-lg hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-200 flex items-center justify-center"
// // // // // // // // // // //                       whileHover={{ scale: 1.02 }}
// // // // // // // // // // //                       whileTap={{ scale: 0.98 }}
// // // // // // // // // // //                       disabled={saving}
// // // // // // // // // // //                     >
// // // // // // // // // // //                       {saving ? (
// // // // // // // // // // //                         <>
// // // // // // // // // // //                           <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // // // // // // // // //                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // // // // // // // //                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // // // // // // // //                           </svg>
// // // // // // // // // // //                           Saving Customer...
// // // // // // // // // // //                         </>
// // // // // // // // // // //                       ) : "Save New Customer"}
// // // // // // // // // // //                     </motion.button>
// // // // // // // // // // //                   </motion.div>
// // // // // // // // // // //                 )}
// // // // // // // // // // //               </>
// // // // // // // // // // //             )}
// // // // // // // // // // //           </motion.div>

// // // // // // // // // // //           {/* Products Table Card */}
// // // // // // // // // // //           <motion.div 
// // // // // // // // // // //             className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100 overflow-hidden"
// // // // // // // // // // //             variants={itemVariants}
// // // // // // // // // // //           >
// // // // // // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Bill Items</h3>
            
// // // // // // // // // // //             <div className="overflow-x-auto" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05) inset" }}>
// // // // // // // // // // //               <table className="w-full mb-4">
// // // // // // // // // // //                 <thead>
// // // // // // // // // // //                   <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
// // // // // // // // // // //                     <th className="p-3 font-semibold text-left">Product Name</th>
// // // // // // // // // // //                     <th className="p-3 font-semibold text-right">Price</th>
// // // // // // // // // // //                     <th className="p-3 font-semibold text-center">Quantity</th>
// // // // // // // // // // //                     <th className="p-3 font-semibold text-right">Total</th>
// // // // // // // // // // //                     <th className="p-3 font-semibold text-center">Action</th>
// // // // // // // // // // //                   </tr>
// // // // // // // // // // //                 </thead>
// // // // // // // // // // //                 <tbody>
// // // // // // // // // // //                   <AnimatePresence>
// // // // // // // // // // //                     {products.length > 0 ? (
// // // // // // // // // // //                       products.map((product) => (
// // // // // // // // // // //                         <motion.tr 
// // // // // // // // // // //                           key={product.id} 
// // // // // // // // // // //                           className="border-b hover:bg-gray-50 transition-colors"
// // // // // // // // // // //                           variants={tableRowVariants}
// // // // // // // // // // //                           initial="hidden"
// // // // // // // // // // //                           animate="visible"
// // // // // // // // // // //                           exit="exit"
// // // // // // // // // // //                         >
// // // // // // // // // // //                           <td className="p-3 text-left">{product.product_name}</td>
// // // // // // // // // // //                           <td className="p-3 text-right">${product.sale_price.toFixed(2)}</td>
// // // // // // // // // // //                           <td className="p-3 text-center">{product.quantity}</td>
// // // // // // // // // // //                           <td className="p-3 text-right font-medium">
// // // // // // // // // // //                             ${(product.sale_price * product.quantity).toFixed(2)}
// // // // // // // // // // //                           </td>
// // // // // // // // // // //                           <td className="p-3 text-center">
// // // // // // // // // // //                             <motion.button
// // // // // // // // // // //                               onClick={() => deleteProduct(product.product_name)}
// // // // // // // // // // //                               className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
// // // // // // // // // // //                               whileHover={{ scale: 1.05 }}
// // // // // // // // // // //                               whileTap={{ scale: 0.95 }}
// // // // // // // // // // //                             >
// // // // // // // // // // //                               Remove
// // // // // // // // // // //                             </motion.button>
// // // // // // // // // // //                           </td>
// // // // // // // // // // //                         </motion.tr>
// // // // // // // // // // //                       ))
// // // // // // // // // // //                     ) : (
// // // // // // // // // // //                       <motion.tr
// // // // // // // // // // //                         variants={tableRowVariants}
// // // // // // // // // // //                         initial="hidden"
// // // // // // // // // // //                         animate="visible"
// // // // // // // // // // //                       >
// // // // // // // // // // //                         <td colSpan="5" className="p-4 text-center text-gray-500">
// // // // // // // // // // //                           No products added to the bill yet.
// // // // // // // // // // //                         </td>
// // // // // // // // // // //                       </motion.tr>
// // // // // // // // // // //                     )}
// // // // // // // // // // //                   </AnimatePresence>
// // // // // // // // // // //                 </tbody>
// // // // // // // // // // //               </table>
// // // // // // // // // // //             </div>
            
// // // // // // // // // // //             {products.length > 0 && (
// // // // // // // // // // //               <motion.div 
// // // // // // // // // // //                 className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
// // // // // // // // // // //                 initial={{ opacity: 0, y: 20 }}
// // // // // // // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // //                 transition={{ duration: 0.3 }}
// // // // // // // // // // //               >
// // // // // // // // // // //                 <div className="text-lg font-semibold text-gray-800">Total Amount:</div>
// // // // // // // // // // //                 <div className="text-2xl font-bold text-blue-600">${totalAmount.toFixed(2)}</div>
// // // // // // // // // // //               </motion.div>
// // // // // // // // // // //             )}
// // // // // // // // // // //           </motion.div>

// // // // // // // // // // //           {/* Generate Bill Button */}
// // // // // // // // // // //           <motion.div 
// // // // // // // // // // //             className="text-center"
// // // // // // // // // // //             variants={itemVariants}
// // // // // // // // // // //           >
// // // // // // // // // // //             <motion.button
// // // // // // // // // // //               onClick={printBill}
// // // // // // // // // // //               className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300"
// // // // // // // // // // //               whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
// // // // // // // // // // //               whileTap={{ scale: 0.98 }}
// // // // // // // // // // //             >
// // // // // // // // // // //               Generate & Print Invoice
// // // // // // // // // // //             </motion.button>
// // // // // // // // // // //           </motion.div>
// // // // // // // // // // //         </>
// // // // // // // // // // //       )}

// // // // // // // // // // //       {/* Error Message */}
// // // // // // // // // // //       <AnimatePresence>
// // // // // // // // // // //         {error && (
// // // // // // // // // // //           <motion.div 
// // // // // // // // // // //             className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${error.includes("successfully") ? "bg-green-500" : "bg-red-500"} text-white max-w-sm`}
// // // // // // // // // // //             initial={{ opacity: 0, y: 50, x: 0 }}
// // // // // // // // // // //             animate={{ opacity: 1, y: 0, x: 0 }}
// // // // // // // // // // //             exit={{ opacity: 0, y: 50 }}
// // // // // // // // // // //             transition={{ duration: 0.3 }}
// // // // // // // // // // //           >
// // // // // // // // // // //             {error}
// // // // // // // // // // //           </motion.div>
// // // // // // // // // // //         )}
// // // // // // // // // // //       </AnimatePresence>

// // // // // // // // // // //       {/* Add a payment status dropdown */}
// // // // // // // // // // //       <div className="mb-4">
// // // // // // // // // // //         <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status:</label>
// // // // // // // // // // //         <select
// // // // // // // // // // //           value={paymentStatus}
// // // // // // // // // // //           onChange={(e) => setPaymentStatus(e.target.value)}
// // // // // // // // // // //           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // // //         >
// // // // // // // // // // //           <option value="paid">Paid</option>
// // // // // // // // // // //           <option value="unpaid">Unpaid</option>
// // // // // // // // // // //         </select>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Display customer balance */}
// // // // // // // // // // //       {customerPhone && (
// // // // // // // // // // //         <div className="mb-4">
// // // // // // // // // // //           <p className="text-sm font-medium text-gray-700">Customer Balance:</p>
// // // // // // // // // // //           <p className={`text-lg font-bold ${customerBalance >= 0 ? "text-green-600" : "text-red-600"}`}>
// // // // // // // // // // //             ${customerBalance.toFixed(2)}
// // // // // // // // // // //           </p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}

// // // // // // // // // // //       {/* Add email input for digital receipt */}
// // // // // // // // // // //       <div className="mb-4">
// // // // // // // // // // //         <label className="block text-sm font-medium text-gray-700 mb-1">Customer Email (for digital receipt):</label>
// // // // // // // // // // //         <input
// // // // // // // // // // //           type="email"
// // // // // // // // // // //           value={customerEmail}
// // // // // // // // // // //           onChange={(e) => setCustomerEmail(e.target.value)}
// // // // // // // // // // //           placeholder="Enter customer email"
// // // // // // // // // // //           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // // //         />
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* <Khatabook storeId={storeId} /> */}
// // // // // // // // // // //     </motion.div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Billing;

// // // // // // // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // // // // // const Billing = () => {
// // // // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // // // //   const [allProducts, setAllProducts] = useState([]);
// // // // // // // // // //   const [selectedProduct, setSelectedProduct] = useState("");
// // // // // // // // // //   const [barcodeInput, setBarcodeInput] = useState(""); // Added barcode input
// // // // // // // // // //   const [quantity, setQuantity] = useState(1);
// // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // //   const [customerName, setCustomerName] = useState("");
// // // // // // // // // //   const [customerPhone, setCustomerPhone] = useState("");
// // // // // // // // // //   const [customerEmail, setCustomerEmail] = useState("");
// // // // // // // // // //   const [customers, setCustomers] = useState([]);
// // // // // // // // // //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// // // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // // //   const [loadingCustomers, setLoadingCustomers] = useState(true);
// // // // // // // // // //   const [saving, setSaving] = useState(false);
// // // // // // // // // //   const [paymentStatus, setPaymentStatus] = useState("paid");
// // // // // // // // // //   const [customerBalance, setCustomerBalance] = useState(0);
// // // // // // // // // //   const { storeName, storeId } = useContext(StoreContext);
// // // // // // // // // //   const storeAddress = localStorage.getItem("storeAddress");
// // // // // // // // // //   const email = localStorage.getItem("email");
// // // // // // // // // //   const fullName = localStorage.getItem("fullName");
// // // // // // // // // //   const phoneNumber = localStorage.getItem("phoneNumber");
// // // // // // // // // //   const userId = localStorage.getItem("userId");

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     console.log(userId);
// // // // // // // // // //     const fetchProducts = async () => {
// // // // // // // // // //       setLoading(true);
// // // // // // // // // //       try {
// // // // // // // // // //         const response = await fetch("http://localhost:5002/api/products", {
// // // // // // // // // //           headers: { storeId, userId },
// // // // // // // // // //         });
// // // // // // // // // //         if (!response.ok) throw new Error("Failed to fetch products");
// // // // // // // // // //         const data = await response.json();
// // // // // // // // // //         if (data && Array.isArray(data) && data.length > 0) {
// // // // // // // // // //           setAllProducts(data);
// // // // // // // // // //           setSelectedProduct(data[0].product_name);
// // // // // // // // // //         } else {
// // // // // // // // // //           console.error("No products found or incorrect data format.");
// // // // // // // // // //           setError("No products available. Please add products first.");
// // // // // // // // // //         }
// // // // // // // // // //       } catch (error) {
// // // // // // // // // //         console.error("Error fetching products:", error);
// // // // // // // // // //         setError("Failed to fetch products. Please check your connection.");
// // // // // // // // // //       } finally {
// // // // // // // // // //         setLoading(false);
// // // // // // // // // //       }
// // // // // // // // // //     };

// // // // // // // // // //     if (storeId) fetchProducts();
// // // // // // // // // //     else {
// // // // // // // // // //       console.error("Store ID not provided.");
// // // // // // // // // //       setError("Store identification failed. Please try again.");
// // // // // // // // // //       setLoading(false);
// // // // // // // // // //     }
// // // // // // // // // //   }, [storeId, userId]);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const fetchCustomers = async () => {
// // // // // // // // // //       setLoadingCustomers(true);
// // // // // // // // // //       try {
// // // // // // // // // //         const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}&userId=${userId}`);
// // // // // // // // // //         if (!response.ok) throw new Error("Failed to fetch customers");
// // // // // // // // // //         const data = await response.json();
// // // // // // // // // //         setCustomers(data.customers);
// // // // // // // // // //       } catch (error) {
// // // // // // // // // //         console.error("Error fetching customers:", error);
// // // // // // // // // //       } finally {
// // // // // // // // // //         setLoadingCustomers(false);
// // // // // // // // // //       }
// // // // // // // // // //     };

// // // // // // // // // //     if (storeId) fetchCustomers();
// // // // // // // // // //   }, [storeId, userId]);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (customerPhone) {
// // // // // // // // // //       const fetchCustomerBalance = async () => {
// // // // // // // // // //         try {
// // // // // // // // // //           const response = await fetch(`http://localhost:5002/api/khatabook/customers/${customerPhone}/balance`, {
// // // // // // // // // //             headers: { storeId },
// // // // // // // // // //           });
// // // // // // // // // //           if (!response.ok) throw new Error("Failed to fetch customer balance");
// // // // // // // // // //           const data = await response.json();
// // // // // // // // // //           setCustomerBalance(data.balance);
// // // // // // // // // //         } catch (error) {
// // // // // // // // // //           console.error("Error fetching customer balance:", error);
// // // // // // // // // //         }
// // // // // // // // // //       };
// // // // // // // // // //       fetchCustomerBalance();
// // // // // // // // // //     }
// // // // // // // // // //   }, [customerPhone, storeId]);

// // // // // // // // // //   const addProduct = () => {
// // // // // // // // // //     const selectedProductData = allProducts.find(
// // // // // // // // // //       (p) => p.product_name === selectedProduct || p.barcode === barcodeInput
// // // // // // // // // //     );

// // // // // // // // // //     if (selectedProductData) {
// // // // // // // // // //       setProducts((prevProducts) => {
// // // // // // // // // //         const existingProduct = prevProducts.find(
// // // // // // // // // //           (p) => p.product_name === selectedProductData.product_name
// // // // // // // // // //         );

// // // // // // // // // //         if (existingProduct) {
// // // // // // // // // //           return prevProducts.map((p) =>
// // // // // // // // // //             p.product_name === selectedProductData.product_name
// // // // // // // // // //               ? { ...p, quantity: p.quantity + parseInt(quantity) }
// // // // // // // // // //               : p
// // // // // // // // // //           );
// // // // // // // // // //         } else {
// // // // // // // // // //           return [
// // // // // // // // // //             ...prevProducts,
// // // // // // // // // //             {
// // // // // // // // // //               id: selectedProductData.id,
// // // // // // // // // //               product_name: selectedProductData.product_name,
// // // // // // // // // //               sale_price: parseFloat(selectedProductData.sale_price),
// // // // // // // // // //               quantity: parseInt(quantity),
// // // // // // // // // //               barcode: selectedProductData.barcode, // Include barcode
// // // // // // // // // //             },
// // // // // // // // // //           ];
// // // // // // // // // //         }
// // // // // // // // // //       });
// // // // // // // // // //     } else {
// // // // // // // // // //       console.error("Selected product not found in all products list.");
// // // // // // // // // //       setError("Product not found. Check barcode or name.");
// // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // //     }

// // // // // // // // // //     setQuantity(1);
// // // // // // // // // //     setBarcodeInput(""); // Reset barcode input
// // // // // // // // // //   };

// // // // // // // // // //   const handleBarcodeKeyPress = (e) => {
// // // // // // // // // //     if (e.key === "Enter" && barcodeInput) {
// // // // // // // // // //       const product = allProducts.find((p) => p.barcode === barcodeInput);
// // // // // // // // // //       if (product) {
// // // // // // // // // //         setSelectedProduct(product.product_name);
// // // // // // // // // //         addProduct();
// // // // // // // // // //       } else {
// // // // // // // // // //         setError("Product with this barcode not found.");
// // // // // // // // // //         setTimeout(() => setError(null), 3000);
// // // // // // // // // //       }
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const deleteProduct = (productName) => {
// // // // // // // // // //     setProducts(products.filter((p) => p.product_name !== productName));
// // // // // // // // // //   };

// // // // // // // // // //   const totalAmount = products.reduce(
// // // // // // // // // //     (total, product) => total + product.sale_price * product.quantity,
// // // // // // // // // //     0
// // // // // // // // // //   );

// // // // // // // // // //   const sendBillToEmail = async (billContent) => {
// // // // // // // // // //     try {
// // // // // // // // // //       const response = await fetch("http://localhost:5002/api/send-email", {
// // // // // // // // // //         method: "POST",
// // // // // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // // // // //         body: JSON.stringify({
// // // // // // // // // //           to: customerEmail,
// // // // // // // // // //           subject: `Invoice from ${storeName}`,
// // // // // // // // // //           html: billContent,
// // // // // // // // // //         }),
// // // // // // // // // //       });

// // // // // // // // // //       if (!response.ok) throw new Error("Failed to send email");
// // // // // // // // // //       const data = await response.json();
// // // // // // // // // //       console.log("Email sent successfully:", data);
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error("Error sending email:", error);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const printBill = async () => {
// // // // // // // // // //     if (!products || products.length === 0) {
// // // // // // // // // //       setError("No items to print! Please add products to the bill.");
// // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     if (!customerName || !customerPhone) {
// // // // // // // // // //       setError("Please enter customer details before generating the bill.");
// // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     const billData = {
// // // // // // // // // //       products,
// // // // // // // // // //       customerName,
// // // // // // // // // //       customerPhone,
// // // // // // // // // //       customerEmail,
// // // // // // // // // //       userId,
// // // // // // // // // //       paymentStatus,
// // // // // // // // // //     };

// // // // // // // // // //     const response = await fetch("http://localhost:5002/api/generate-bill", {
// // // // // // // // // //       method: "POST",
// // // // // // // // // //       headers: {
// // // // // // // // // //         "Content-Type": "application/json",
// // // // // // // // // //         storeId,
// // // // // // // // // //         userId,
// // // // // // // // // //       },
// // // // // // // // // //       body: JSON.stringify(billData),
// // // // // // // // // //     });

// // // // // // // // // //     if (!response.ok) {
// // // // // // // // // //       const data = await response.json();
// // // // // // // // // //       setError(data.error || "Failed to generate bill");
// // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     const data = await response.json();
// // // // // // // // // //     const billSummary = data;

// // // // // // // // // //     const billWindow = window.open("", "Bill", "width=800,height=600");
// // // // // // // // // //     const billContent = `
// // // // // // // // // // <html>
// // // // // // // // // //   <head>
// // // // // // // // // //     <title>${storeName} - Bill</title>
// // // // // // // // // //     <style>
// // // // // // // // // //       * { margin: 0; padding: 0; box-sizing: border-box; }
// // // // // // // // // //       body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f1f6; color: #333; line-height: 1.6; }
// // // // // // // // // //       .container { width: 80%; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); padding: 40px; overflow: hidden; }
// // // // // // // // // //       .header { text-align: center; padding: 20px 0; background: linear-gradient(135deg, #00bcd4, #00796b); color: #ffffff; border-radius: 12px; margin-bottom: 30px; }
// // // // // // // // // //       .header h1 { font-size: 36px; font-weight: 700; letter-spacing: 2px; }
// // // // // // // // // //       .header p { font-size: 18px; margin-top: 10px; opacity: 0.9; }
// // // // // // // // // //       .bill-info { display: flex; justify-content: space-between; margin-bottom: 30px; padding: 10px 0; font-size: 16px; color: #444; border-bottom: 2px solid #f4f4f4; }
// // // // // // // // // //       .bill-info div { flex: 1; }
// // // // // // // // // //       .bill-info .label { font-weight: 600; opacity: 0.8; }
// // // // // // // // // //       table { width: 100%; margin-bottom: 30px; border-collapse: collapse; text-align: center; border-radius: 8px; overflow: hidden; }
// // // // // // // // // //       th, td { padding: 15px; font-size: 16px; text-align: center; }
// // // // // // // // // //       th { background-color: #00bcd4; color: #ffffff; text-transform: uppercase; letter-spacing: 1px; }
// // // // // // // // // //       td { background-color: #fafafa; color: #333; }
// // // // // // // // // //       tr:nth-child(even) td { background-color: #f5f5f5; }
// // // // // // // // // //       .total-row { background-color: #00bcd4; color: #ffffff; font-weight: bold; font-size: 18px; }
// // // // // // // // // //       .footer { text-align: center; margin-top: 40px; padding: 20px; background-color: #00bcd4; color: #fff; border-radius: 12px; }
// // // // // // // // // //       .footer p { margin: 0; font-size: 16px; font-style: italic; }
// // // // // // // // // //       .print-btn { display: inline-block; padding: 15px 30px; margin-top: 20px; background-color: #28a745; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; transition: background-color 0.3s ease-in-out; text-align: center; }
// // // // // // // // // //       .print-btn:hover { background-color: #218838; }
// // // // // // // // // //       @media print {
// // // // // // // // // //         body { background-color: #fff; color: #333; }
// // // // // // // // // //         .container { box-shadow: none; margin: 0; padding: 20px; }
// // // // // // // // // //         .header, .footer { background-color: #00bcd4; color: #fff; }
// // // // // // // // // //         .footer { font-size: 14px; text-align: center; }
// // // // // // // // // //         .print-btn { display: none; }
// // // // // // // // // //         table th, table td { border: 1px solid #ddd; }
// // // // // // // // // //         .bill-info { font-size: 14px; }
// // // // // // // // // //       }
// // // // // // // // // //     </style>
// // // // // // // // // //   </head>
// // // // // // // // // //   <body>
// // // // // // // // // //     <div class="container">
// // // // // // // // // //       <div class="header">
// // // // // // // // // //         <h1>${storeName} - Invoice</h1>
// // // // // // // // // //         <p>${new Date().toLocaleString()}</p>
// // // // // // // // // //       </div>
// // // // // // // // // //       <div class="bill-info">
// // // // // // // // // //         <div><p class="label">Store Address:</p><p>${storeAddress}</p></div>
// // // // // // // // // //         <div><p class="label">Store Email:</p><p>${email}</p></div>
// // // // // // // // // //         <div><p class="label">Store Phone:</p><p>${phoneNumber}</p></div>
// // // // // // // // // //       </div>
// // // // // // // // // //       <div class="bill-info">
// // // // // // // // // //         <div><p class="label">Customer Name:</p><p>${customerName}</p></div>
// // // // // // // // // //         <div><p class="label">Customer Phone:</p><p>${customerPhone}</p></div>
// // // // // // // // // //       </div>
// // // // // // // // // //       <table>
// // // // // // // // // //         <thead>
// // // // // // // // // //           <tr>
// // // // // // // // // //             <th>Product Name</th>
// // // // // // // // // //             <th>Barcode</th> <!-- Added Barcode Column -->
// // // // // // // // // //             <th>Price</th>
// // // // // // // // // //             <th>Quantity</th>
// // // // // // // // // //             <th>Total</th>
// // // // // // // // // //           </tr>
// // // // // // // // // //         </thead>
// // // // // // // // // //         <tbody>
// // // // // // // // // //           ${products.map((product) => `
// // // // // // // // // //             <tr>
// // // // // // // // // //               <td>${product.product_name}</td>
// // // // // // // // // //               <td>${product.barcode || "N/A"}</td> <!-- Display Barcode -->
// // // // // // // // // //               <td>${product.sale_price.toFixed(2)}</td>
// // // // // // // // // //               <td>${product.quantity}</td>
// // // // // // // // // //               <td>${(product.sale_price * product.quantity).toFixed(2)}</td>
// // // // // // // // // //             </tr>
// // // // // // // // // //           `).join('')}
// // // // // // // // // //           <tr class="total-row">
// // // // // // // // // //             <td colspan="4">Total Amount</td>
// // // // // // // // // //             <td>${totalAmount.toFixed(2)}</td>
// // // // // // // // // //           </tr>
// // // // // // // // // //         </tbody>
// // // // // // // // // //       </table>
// // // // // // // // // //       <div class="footer">
// // // // // // // // // //         <p>Thank you for shopping with us!</p>
// // // // // // // // // //         <button class="print-btn" onclick="window.print()">Print this Bill</button>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   </body>
// // // // // // // // // // </html>`;

// // // // // // // // // //     billWindow.document.write(billContent);
// // // // // // // // // //     billWindow.document.close();

// // // // // // // // // //     if (customerEmail) await sendBillToEmail(billContent);

// // // // // // // // // //     setProducts([]);
// // // // // // // // // //     setCustomerName("");
// // // // // // // // // //     setCustomerPhone("");
// // // // // // // // // //     setCustomerEmail("");
// // // // // // // // // //     setPaymentStatus("paid");
// // // // // // // // // //   };

// // // // // // // // // //   const handleCustomerSelect = (e) => {
// // // // // // // // // //     const selectedCustomerPhone = e.target.value;
// // // // // // // // // //     const customer = customers.find((c) => c.phone === selectedCustomerPhone);
// // // // // // // // // //     setSelectedCustomer(customer);
// // // // // // // // // //     setCustomerName(customer ? customer.name : "");
// // // // // // // // // //     setCustomerPhone(customer ? customer.phone : "");
// // // // // // // // // //     setCustomerEmail(customer ? customer.email : "");
// // // // // // // // // //   };

// // // // // // // // // //   const handleNewCustomerSave = async () => {
// // // // // // // // // //     if (!customerName || !customerPhone) {
// // // // // // // // // //       setError("Please enter valid customer details.");
// // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     setSaving(true);
// // // // // // // // // //     try {
// // // // // // // // // //       const response = await fetch("http://localhost:5008/api/customers", {
// // // // // // // // // //         method: "POST",
// // // // // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // // // // //         body: JSON.stringify({
// // // // // // // // // //           name: customerName,
// // // // // // // // // //           phone: customerPhone,
// // // // // // // // // //           email: customerEmail,
// // // // // // // // // //           storeId,
// // // // // // // // // //         }),
// // // // // // // // // //       });

// // // // // // // // // //       if (!response.ok) throw new Error("Failed to add customer");
// // // // // // // // // //       const newCustomer = await response.json();
// // // // // // // // // //       setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
// // // // // // // // // //       setError("Customer added successfully!");
// // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error("Error adding customer:", error);
// // // // // // // // // //       setError("Failed to add customer.");
// // // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // // //     } finally {
// // // // // // // // // //       setSaving(false);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const containerVariants = {
// // // // // // // // // //     hidden: { opacity: 0 },
// // // // // // // // // //     visible: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 } },
// // // // // // // // // //   };

// // // // // // // // // //   const itemVariants = {
// // // // // // // // // //     hidden: { y: 20, opacity: 0 },
// // // // // // // // // //     visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
// // // // // // // // // //   };

// // // // // // // // // //   const tableRowVariants = {
// // // // // // // // // //     hidden: { opacity: 0, x: -20 },
// // // // // // // // // //     visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
// // // // // // // // // //     exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <motion.div
// // // // // // // // // //       className="max-w-5xl mx-auto p-8 bg-white shadow-2xl rounded-lg"
// // // // // // // // // //       style={{
// // // // // // // // // //         background: "linear-gradient(to bottom, #ffffff, #f9fafb)",
// // // // // // // // // //         boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05)",
// // // // // // // // // //       }}
// // // // // // // // // //       initial="hidden"
// // // // // // // // // //       animate="visible"
// // // // // // // // // //       variants={containerVariants}
// // // // // // // // // //     >
// // // // // // // // // //       <motion.div className="mb-8 text-center" variants={itemVariants}>
// // // // // // // // // //         <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
// // // // // // // // // //           INVOICE GENERATOR
// // // // // // // // // //         </h1>
// // // // // // // // // //         <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full mb-4"></div>
// // // // // // // // // //         <h2 className="text-2xl font-semibold text-gray-700">{storeName} Store</h2>
// // // // // // // // // //       </motion.div>

// // // // // // // // // //       {loading ? (
// // // // // // // // // //         <div className="flex justify-center items-center py-12">
// // // // // // // // // //           <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // // // // // // // //         </div>
// // // // // // // // // //       ) : (
// // // // // // // // // //         <>
// // // // // // // // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// // // // // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Product Selection</h3>
// // // // // // // // // //             <div className="flex flex-col md:flex-row gap-4">
// // // // // // // // // //               <div className="flex-1">
// // // // // // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Scan Barcode:</label>
// // // // // // // // // //                 <input
// // // // // // // // // //                   type="text"
// // // // // // // // // //                   value={barcodeInput}
// // // // // // // // // //                   onChange={(e) => setBarcodeInput(e.target.value)}
// // // // // // // // // //                   onKeyPress={handleBarcodeKeyPress}
// // // // // // // // // //                   placeholder="Scan or enter barcode"
// // // // // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // //                 />
// // // // // // // // // //               </div>
// // // // // // // // // //               <div className="flex-1">
// // // // // // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Or Select Product:</label>
// // // // // // // // // //                 <select
// // // // // // // // // //                   value={selectedProduct}
// // // // // // // // // //                   onChange={(e) => setSelectedProduct(e.target.value)}
// // // // // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // //                 >
// // // // // // // // // //                   {allProducts.map((product) => (
// // // // // // // // // //                     <option key={product.id} value={product.product_name}>
// // // // // // // // // //                       {product.product_name} - ${parseFloat(product.sale_price).toFixed(2)} (Barcode: {product.barcode})
// // // // // // // // // //                     </option>
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </select>
// // // // // // // // // //               </div>
// // // // // // // // // //               <div className="flex-1">
// // // // // // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
// // // // // // // // // //                 <input
// // // // // // // // // //                   type="number"
// // // // // // // // // //                   value={quantity}
// // // // // // // // // //                   min="1"
// // // // // // // // // //                   onChange={(e) => setQuantity(e.target.value)}
// // // // // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // //                 />
// // // // // // // // // //               </div>
// // // // // // // // // //               <div className="flex items-end">
// // // // // // // // // //                 <motion.button
// // // // // // // // // //                   onClick={addProduct}
// // // // // // // // // //                   className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
// // // // // // // // // //                   whileHover={{ scale: 1.05 }}
// // // // // // // // // //                   whileTap={{ scale: 0.98 }}
// // // // // // // // // //                 >
// // // // // // // // // //                   Add to Bill
// // // // // // // // // //                 </motion.button>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </motion.div>

// // // // // // // // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// // // // // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Customer Information</h3>
// // // // // // // // // //             {loadingCustomers ? (
// // // // // // // // // //               <div className="flex justify-center items-center py-4">
// // // // // // // // // //                 <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // // // // // // // //               </div>
// // // // // // // // // //             ) : (
// // // // // // // // // //               <>
// // // // // // // // // //                 <div className="mb-4">
// // // // // // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Select Existing Customer:</label>
// // // // // // // // // //                   <select
// // // // // // // // // //                     value={customerPhone}
// // // // // // // // // //                     onChange={handleCustomerSelect}
// // // // // // // // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // //                   >
// // // // // // // // // //                     <option value="">Select Customer</option>
// // // // // // // // // //                     {customers.map((customer) => (
// // // // // // // // // //                       <option key={customer.phone} value={customer.phone}>
// // // // // // // // // //                         {customer.name} - {customer.phone}
// // // // // // // // // //                       </option>
// // // // // // // // // //                     ))}
// // // // // // // // // //                   </select>
// // // // // // // // // //                 </div>
// // // // // // // // // //                 {!selectedCustomer && (
// // // // // // // // // //                   <motion.div
// // // // // // // // // //                     className="p-4 bg-gray-50 rounded-lg mt-4"
// // // // // // // // // //                     initial={{ opacity: 0, height: 0 }}
// // // // // // // // // //                     animate={{ opacity: 1, height: "auto" }}
// // // // // // // // // //                     transition={{ duration: 0.3 }}
// // // // // // // // // //                   >
// // // // // // // // // //                     <h4 className="text-md font-medium mb-3 text-gray-700">New Customer</h4>
// // // // // // // // // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// // // // // // // // // //                       <div>
// // // // // // // // // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name:</label>
// // // // // // // // // //                         <input
// // // // // // // // // //                           type="text"
// // // // // // // // // //                           value={customerName}
// // // // // // // // // //                           onChange={(e) => setCustomerName(e.target.value)}
// // // // // // // // // //                           placeholder="Full Name"
// // // // // // // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // //                         />
// // // // // // // // // //                       </div>
// // // // // // // // // //                       <div>
// // // // // // // // // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number:</label>
// // // // // // // // // //                         <input
// // // // // // // // // //                           type="text"
// // // // // // // // // //                           value={customerPhone}
// // // // // // // // // //                           onChange={(e) => setCustomerPhone(e.target.value)}
// // // // // // // // // //                           placeholder="Phone Number"
// // // // // // // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // //                         />
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <motion.button
// // // // // // // // // //                       onClick={handleNewCustomerSave}
// // // // // // // // // //                       className="w-full md:w-auto px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-md hover:shadow-lg hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-200 flex items-center justify-center"
// // // // // // // // // //                       whileHover={{ scale: 1.02 }}
// // // // // // // // // //                       whileTap={{ scale: 0.98 }}
// // // // // // // // // //                       disabled={saving}
// // // // // // // // // //                     >
// // // // // // // // // //                       {saving ? (
// // // // // // // // // //                         <>
// // // // // // // // // //                           <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // // // // // // // //                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // // // // // // //                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // // // // // // //                           </svg>
// // // // // // // // // //                           Saving Customer...
// // // // // // // // // //                         </>
// // // // // // // // // //                       ) : "Save New Customer"}
// // // // // // // // // //                     </motion.button>
// // // // // // // // // //                   </motion.div>
// // // // // // // // // //                 )}
// // // // // // // // // //               </>
// // // // // // // // // //             )}
// // // // // // // // // //           </motion.div>

// // // // // // // // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100 overflow-hidden" variants={itemVariants}>
// // // // // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Bill Items</h3>
// // // // // // // // // //             <div className="overflow-x-auto" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05) inset" }}>
// // // // // // // // // //               <table className="w-full mb-4">
// // // // // // // // // //                 <thead>
// // // // // // // // // //                   <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
// // // // // // // // // //                     <th className="p-3 font-semibold text-left">Product Name</th>
// // // // // // // // // //                     <th className="p-3 font-semibold text-left">Barcode</th> {/* Added Barcode Column */}
// // // // // // // // // //                     <th className="p-3 font-semibold text-right">Price</th>
// // // // // // // // // //                     <th className="p-3 font-semibold text-center">Quantity</th>
// // // // // // // // // //                     <th className="p-3 font-semibold text-right">Total</th>
// // // // // // // // // //                     <th className="p-3 font-semibold text-center">Action</th>
// // // // // // // // // //                   </tr>
// // // // // // // // // //                 </thead>
// // // // // // // // // //                 <tbody>
// // // // // // // // // //                   <AnimatePresence>
// // // // // // // // // //                     {products.length > 0 ? (
// // // // // // // // // //                       products.map((product) => (
// // // // // // // // // //                         <motion.tr
// // // // // // // // // //                           key={product.id}
// // // // // // // // // //                           className="border-b hover:bg-gray-50 transition-colors"
// // // // // // // // // //                           variants={tableRowVariants}
// // // // // // // // // //                           initial="hidden"
// // // // // // // // // //                           animate="visible"
// // // // // // // // // //                           exit="exit"
// // // // // // // // // //                         >
// // // // // // // // // //                           <td className="p-3 text-left">{product.product_name}</td>
// // // // // // // // // //                           <td className="p-3 text-left">{product.barcode || "N/A"}</td> {/* Display Barcode */}
// // // // // // // // // //                           <td className="p-3 text-right">${product.sale_price.toFixed(2)}</td>
// // // // // // // // // //                           <td className="p-3 text-center">{product.quantity}</td>
// // // // // // // // // //                           <td className="p-3 text-right font-medium">
// // // // // // // // // //                             ${(product.sale_price * product.quantity).toFixed(2)}
// // // // // // // // // //                           </td>
// // // // // // // // // //                           <td className="p-3 text-center">
// // // // // // // // // //                             <motion.button
// // // // // // // // // //                               onClick={() => deleteProduct(product.product_name)}
// // // // // // // // // //                               className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
// // // // // // // // // //                               whileHover={{ scale: 1.05 }}
// // // // // // // // // //                               whileTap={{ scale: 0.95 }}
// // // // // // // // // //                             >
// // // // // // // // // //                               Remove
// // // // // // // // // //                             </motion.button>
// // // // // // // // // //                           </td>
// // // // // // // // // //                         </motion.tr>
// // // // // // // // // //                       ))
// // // // // // // // // //                     ) : (
// // // // // // // // // //                       <motion.tr variants={tableRowVariants} initial="hidden" animate="visible">
// // // // // // // // // //                         <td colSpan="6" className="p-4 text-center text-gray-500">
// // // // // // // // // //                           No products added to the bill yet.
// // // // // // // // // //                         </td>
// // // // // // // // // //                       </motion.tr>
// // // // // // // // // //                     )}
// // // // // // // // // //                   </AnimatePresence>
// // // // // // // // // //                 </tbody>
// // // // // // // // // //               </table>
// // // // // // // // // //             </div>
// // // // // // // // // //             {products.length > 0 && (
// // // // // // // // // //               <motion.div
// // // // // // // // // //                 className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
// // // // // // // // // //                 initial={{ opacity: 0, y: 20 }}
// // // // // // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // // // // // //                 transition={{ duration: 0.3 }}
// // // // // // // // // //               >
// // // // // // // // // //                 <div className="text-lg font-semibold text-gray-800">Total Amount:</div>
// // // // // // // // // //                 <div className="text-2xl font-bold text-blue-600">${totalAmount.toFixed(2)}</div>
// // // // // // // // // //               </motion.div>
// // // // // // // // // //             )}
// // // // // // // // // //           </motion.div>

// // // // // // // // // //           <motion.div className="text-center" variants={itemVariants}>
// // // // // // // // // //             <motion.button
// // // // // // // // // //               onClick={printBill}
// // // // // // // // // //               className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300"
// // // // // // // // // //               whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
// // // // // // // // // //               whileTap={{ scale: 0.98 }}
// // // // // // // // // //             >
// // // // // // // // // //               Generate & Print Invoice
// // // // // // // // // //             </motion.button>
// // // // // // // // // //           </motion.div>

// // // // // // // // // //           <div className="mb-4">
// // // // // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status:</label>
// // // // // // // // // //             <select
// // // // // // // // // //               value={paymentStatus}
// // // // // // // // // //               onChange={(e) => setPaymentStatus(e.target.value)}
// // // // // // // // // //               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // //             >
// // // // // // // // // //               <option value="paid">Paid</option>
// // // // // // // // // //               <option value="unpaid">Unpaid</option>
// // // // // // // // // //             </select>
// // // // // // // // // //           </div>

// // // // // // // // // //           {customerPhone && (
// // // // // // // // // //             <div className="mb-4">
// // // // // // // // // //               <p className="text-sm font-medium text-gray-700">Customer Balance:</p>
// // // // // // // // // //               <p className={`text-lg font-bold ${customerBalance >= 0 ? "text-green-600" : "text-red-600"}`}>
// // // // // // // // // //                 ${customerBalance.toFixed(2)}
// // // // // // // // // //               </p>
// // // // // // // // // //             </div>
// // // // // // // // // //           )}

// // // // // // // // // //           <div className="mb-4">
// // // // // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Customer Email (for digital receipt):</label>
// // // // // // // // // //             <input
// // // // // // // // // //               type="email"
// // // // // // // // // //               value={customerEmail}
// // // // // // // // // //               onChange={(e) => setCustomerEmail(e.target.value)}
// // // // // // // // // //               placeholder="Enter customer email"
// // // // // // // // // //               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // // //             />
// // // // // // // // // //           </div>
// // // // // // // // // //         </>
// // // // // // // // // //       )}

// // // // // // // // // //       <AnimatePresence>
// // // // // // // // // //         {error && (
// // // // // // // // // //           <motion.div
// // // // // // // // // //             className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${error.includes("successfully") ? "bg-green-500" : "bg-red-500"} text-white max-w-sm`}
// // // // // // // // // //             initial={{ opacity: 0, y: 50, x: 0 }}
// // // // // // // // // //             animate={{ opacity: 1, y: 0, x: 0 }}
// // // // // // // // // //             exit={{ opacity: 0, y: 50 }}
// // // // // // // // // //             transition={{ duration: 0.3 }}
// // // // // // // // // //           >
// // // // // // // // // //             {error}
// // // // // // // // // //           </motion.div>
// // // // // // // // // //         )}
// // // // // // // // // //       </AnimatePresence>
// // // // // // // // // //     </motion.div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Billing;
// // // // // // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // // // // const Billing = () => {
// // // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // // //   const [allProducts, setAllProducts] = useState([]);
// // // // // // // // //   const [selectedProduct, setSelectedProduct] = useState("");
// // // // // // // // //   const [barcodeInput, setBarcodeInput] = useState("");
// // // // // // // // //   const [quantity, setQuantity] = useState(1);
// // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // //   const [customerName, setCustomerName] = useState("");
// // // // // // // // //   const [customerPhone, setCustomerPhone] = useState("");
// // // // // // // // //   const [customerEmail, setCustomerEmail] = useState("");
// // // // // // // // //   const [customers, setCustomers] = useState([]);
// // // // // // // // //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // //   const [loadingCustomers, setLoadingCustomers] = useState(true);
// // // // // // // // //   const [saving, setSaving] = useState(false);
// // // // // // // // //   const [paymentStatus, setPaymentStatus] = useState("paid");
// // // // // // // // //   const [customerBalance, setCustomerBalance] = useState(0);
// // // // // // // // //   const { storeName, storeId } = useContext(StoreContext);
// // // // // // // // //   const storeAddress = localStorage.getItem("storeAddress");
// // // // // // // // //   const email = localStorage.getItem("email");
// // // // // // // // //   const fullName = localStorage.getItem("fullName");
// // // // // // // // //   const phoneNumber = localStorage.getItem("phoneNumber");
// // // // // // // // //   const userId = localStorage.getItem("userId");

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     console.log(userId);
// // // // // // // // //     const fetchProducts = async () => {
// // // // // // // // //       setLoading(true);
// // // // // // // // //       try {
// // // // // // // // //         const response = await fetch("http://localhost:5002/api/products", {
// // // // // // // // //           headers: { storeId, userId },
// // // // // // // // //         });
// // // // // // // // //         if (!response.ok) throw new Error("Failed to fetch products");
// // // // // // // // //         const data = await response.json();
// // // // // // // // //         if (data && Array.isArray(data) && data.length > 0) {
// // // // // // // // //           setAllProducts(data);
// // // // // // // // //           setSelectedProduct(data[0].product_name);
// // // // // // // // //         } else {
// // // // // // // // //           console.error("No products found or incorrect data format.");
// // // // // // // // //           setError("No products available. Please add products first.");
// // // // // // // // //         }
// // // // // // // // //       } catch (error) {
// // // // // // // // //         console.error("Error fetching products:", error);
// // // // // // // // //         setError("Failed to fetch products. Please check your connection.");
// // // // // // // // //       } finally {
// // // // // // // // //         setLoading(false);
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     if (storeId) fetchProducts();
// // // // // // // // //     else {
// // // // // // // // //       console.error("Store ID not provided.");
// // // // // // // // //       setError("Store identification failed. Please try again.");
// // // // // // // // //       setLoading(false);
// // // // // // // // //     }
// // // // // // // // //   }, [storeId, userId]);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const fetchCustomers = async () => {
// // // // // // // // //       setLoadingCustomers(true);
// // // // // // // // //       try {
// // // // // // // // //         const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}&userId=${userId}`);
// // // // // // // // //         if (!response.ok) throw new Error("Failed to fetch customers");
// // // // // // // // //         const data = await response.json();
// // // // // // // // //         setCustomers(data.customers);
// // // // // // // // //       } catch (error) {
// // // // // // // // //         console.error("Error fetching customers:", error);
// // // // // // // // //       } finally {
// // // // // // // // //         setLoadingCustomers(false);
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     if (storeId) fetchCustomers();
// // // // // // // // //   }, [storeId, userId]);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (customerPhone) {
// // // // // // // // //       const fetchCustomerBalance = async () => {
// // // // // // // // //         try {
// // // // // // // // //           const response = await fetch(`http://localhost:5002/api/khatabook/customers/${customerPhone}/balance`, {
// // // // // // // // //             headers: { storeId },
// // // // // // // // //           });
// // // // // // // // //           if (!response.ok) throw new Error("Failed to fetch customer balance");
// // // // // // // // //           const data = await response.json();
// // // // // // // // //           setCustomerBalance(data.balance);
// // // // // // // // //         } catch (error) {
// // // // // // // // //           console.error("Error fetching customer balance:", error);
// // // // // // // // //         }
// // // // // // // // //       };
// // // // // // // // //       fetchCustomerBalance();
// // // // // // // // //     }
// // // // // // // // //   }, [customerPhone, storeId]);

// // // // // // // // //   const addProduct = () => {
// // // // // // // // //     const selectedProductData = allProducts.find(
// // // // // // // // //       (p) => p.product_name === selectedProduct || p.barcode === barcodeInput
// // // // // // // // //     );

// // // // // // // // //     if (selectedProductData) {
// // // // // // // // //       setProducts((prevProducts) => {
// // // // // // // // //         const existingProduct = prevProducts.find(
// // // // // // // // //           (p) => p.product_name === selectedProductData.product_name
// // // // // // // // //         );

// // // // // // // // //         if (existingProduct) {
// // // // // // // // //           return prevProducts.map((p) =>
// // // // // // // // //             p.product_name === selectedProductData.product_name
// // // // // // // // //               ? { ...p, quantity: p.quantity + parseInt(quantity) }
// // // // // // // // //               : p
// // // // // // // // //           );
// // // // // // // // //         } else {
// // // // // // // // //           return [
// // // // // // // // //             ...prevProducts,
// // // // // // // // //             {
// // // // // // // // //               id: selectedProductData.id,
// // // // // // // // //               product_name: selectedProductData.product_name,
// // // // // // // // //               sale_price: parseFloat(selectedProductData.sale_price),
// // // // // // // // //               quantity: parseInt(quantity),
// // // // // // // // //               barcode: selectedProductData.barcode,
// // // // // // // // //             },
// // // // // // // // //           ];
// // // // // // // // //         }
// // // // // // // // //       });
// // // // // // // // //     } else {
// // // // // // // // //       console.error("Selected product not found in all products list.");
// // // // // // // // //       setError("Product not found. Check barcode or name.");
// // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // //     }

// // // // // // // // //     setQuantity(1);
// // // // // // // // //     setBarcodeInput("");
// // // // // // // // //   };

// // // // // // // // //   const handleBarcodeKeyPress = (e) => {
// // // // // // // // //     if (e.key === "Enter" && barcodeInput) {
// // // // // // // // //       const product = allProducts.find((p) => p.barcode === barcodeInput);
// // // // // // // // //       if (product) {
// // // // // // // // //         setSelectedProduct(product.product_name);
// // // // // // // // //         addProduct();
// // // // // // // // //       } else {
// // // // // // // // //         setError("Product with this barcode not found.");
// // // // // // // // //         setTimeout(() => setError(null), 3000);
// // // // // // // // //       }
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const deleteProduct = (productName) => {
// // // // // // // // //     setProducts(products.filter((p) => p.product_name !== productName));
// // // // // // // // //   };

// // // // // // // // //   const totalAmount = products.reduce(
// // // // // // // // //     (total, product) => total + product.sale_price * product.quantity,
// // // // // // // // //     0
// // // // // // // // //   );

// // // // // // // // //   const sendBillToEmail = async (billContent) => {
// // // // // // // // //     try {
// // // // // // // // //       const response = await fetch("http://localhost:5002/api/send-email", {
// // // // // // // // //         method: "POST",
// // // // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // // // //         body: JSON.stringify({
// // // // // // // // //           to: customerEmail,
// // // // // // // // //           subject: `Invoice from ${storeName}`,
// // // // // // // // //           html: billContent,
// // // // // // // // //         }),
// // // // // // // // //       });

// // // // // // // // //       if (!response.ok) throw new Error("Failed to send email");
// // // // // // // // //       const data = await response.json();
// // // // // // // // //       console.log("Email sent successfully:", data);
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Error sending email:", error);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const printBill = async () => {
// // // // // // // // //     if (!products || products.length === 0) {
// // // // // // // // //       setError("No items to print! Please add products to the bill.");
// // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     if (!customerName || !customerPhone) {
// // // // // // // // //       setError("Please enter customer details before generating the bill.");
// // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     const billData = {
// // // // // // // // //       products,
// // // // // // // // //       customerName,
// // // // // // // // //       customerPhone,
// // // // // // // // //       customerEmail,
// // // // // // // // //       userId,
// // // // // // // // //       paymentStatus,
// // // // // // // // //     };

// // // // // // // // //     const response = await fetch("http://localhost:5002/api/generate-bill", {
// // // // // // // // //       method: "POST",
// // // // // // // // //       headers: {
// // // // // // // // //         "Content-Type": "application/json",
// // // // // // // // //         storeId,
// // // // // // // // //         userId,
// // // // // // // // //       },
// // // // // // // // //       body: JSON.stringify(billData),
// // // // // // // // //     });

// // // // // // // // //     if (!response.ok) {
// // // // // // // // //       const data = await response.json();
// // // // // // // // //       setError(data.error || "Failed to generate bill");
// // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     const data = await response.json();
// // // // // // // // //     const billSummary = data;

// // // // // // // // //     const billWindow = window.open("", "Bill", "width=800,height=600");
// // // // // // // // //     const billContent = `
// // // // // // // // // <html>
// // // // // // // // //   <head>
// // // // // // // // //     <title>${storeName} - Bill</title>
// // // // // // // // //     <style>
// // // // // // // // //       * { margin: 0; padding: 0; box-sizing: border-box; }
// // // // // // // // //       body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f1f6; color: #333; line-height: 1.6; }
// // // // // // // // //       .container { width: 80%; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); padding: 40px; overflow: hidden; }
// // // // // // // // //       .header { text-align: center; padding: 20px 0; background: linear-gradient(135deg, #00bcd4, #00796b); color: #ffffff; border-radius: 12px; margin-bottom: 30px; }
// // // // // // // // //       .header h1 { font-size: 36px; font-weight: 700; letter-spacing: 2px; }
// // // // // // // // //       .header p { font-size: 18px; margin-top: 10px; opacity: 0.9; }
// // // // // // // // //       .bill-info { display: flex; justify-content: space-between; margin-bottom: 30px; padding: 10px 0; font-size: 16px; color: #444; border-bottom: 2px solid #f4f4f4; }
// // // // // // // // //       .bill-info div { flex: 1; }
// // // // // // // // //       .bill-info .label { font-weight: 600; opacity: 0.8; }
// // // // // // // // //       table { width: 100%; margin-bottom: 30px; border-collapse: collapse; text-align: center; border-radius: 8px; overflow: hidden; }
// // // // // // // // //       th, td { padding: 15px; font-size: 16px; text-align: center; }
// // // // // // // // //       th { background-color: #00bcd4; color: #ffffff; text-transform: uppercase; letter-spacing: 1px; }
// // // // // // // // //       td { background-color: #fafafa; color: #333; }
// // // // // // // // //       tr:nth-child(even) td { background-color: #f5f5f5; }
// // // // // // // // //       .total-row { background-color: #00bcd4; color: #ffffff; font-weight: bold; font-size: 18px; }
// // // // // // // // //       .footer { text-align: center; margin-top: 40px; padding: 20px; background-color: #00bcd4; color: #fff; border-radius: 12px; }
// // // // // // // // //       .footer p { margin: 0; font-size: 16px; font-style: italic; }
// // // // // // // // //       .print-btn { display: inline-block; padding: 15px 30px; margin-top: 20px; background-color: #28a745; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; transition: background-color 0.3s ease-in-out; text-align: center; }
// // // // // // // // //       .print-btn:hover { background-color: #218838; }
// // // // // // // // //       @media print {
// // // // // // // // //         body { background-color: #fff; color: #333; }
// // // // // // // // //         .container { box-shadow: none; margin: 0; padding: 20px; }
// // // // // // // // //         .header, .footer { background-color: #00bcd4; color: #fff; }
// // // // // // // // //         .footer { font-size: 14px; text-align: center; }
// // // // // // // // //         .print-btn { display: none; }
// // // // // // // // //         table th, table td { border: 1px solid #ddd; }
// // // // // // // // //         .bill-info { font-size: 14px; }
// // // // // // // // //       }
// // // // // // // // //     </style>
// // // // // // // // //   </head>
// // // // // // // // //   <body>
// // // // // // // // //     <div class="container">
// // // // // // // // //       <div class="header">
// // // // // // // // //         <h1>${storeName} - Invoice</h1>
// // // // // // // // //         <p>Invoice Number: ${billSummary.invoiceNumber} | Serial Number: ${billSummary.serialNumber}</p>
// // // // // // // // //         <p>${new Date().toLocaleString()}</p>
// // // // // // // // //       </div>
// // // // // // // // //       <div class="bill-info">
// // // // // // // // //         <div><p class="label">Store Address:</p><p>${storeAddress}</p></div>
// // // // // // // // //         <div><p class="label">Store Email:</p><p>${email}</p></div>
// // // // // // // // //         <div><p class="label">Store Phone:</p><p>${phoneNumber}</p></div>
// // // // // // // // //       </div>
// // // // // // // // //       <div class="bill-info">
// // // // // // // // //         <div><p class="label">Customer Name:</p><p>${customerName}</p></div>
// // // // // // // // //         <div><p class="label">Customer Phone:</p><p>${customerPhone}</p></div>
// // // // // // // // //       </div>
// // // // // // // // //       <table>
// // // // // // // // //         <thead>
// // // // // // // // //           <tr>
// // // // // // // // //             <th>Product Name</th>
// // // // // // // // //             <th>Barcode</th>
// // // // // // // // //             <th>Price</th>
// // // // // // // // //             <th>Quantity</th>
// // // // // // // // //             <th>Total</th>
// // // // // // // // //           </tr>
// // // // // // // // //         </thead>
// // // // // // // // //         <tbody>
// // // // // // // // //           ${products
// // // // // // // // //             .map(
// // // // // // // // //               (product) => `
// // // // // // // // //             <tr>
// // // // // // // // //               <td>${product.product_name}</td>
// // // // // // // // //               <td>${product.barcode || "N/A"}</td>
// // // // // // // // //               <td>${product.sale_price.toFixed(2)}</td>
// // // // // // // // //               <td>${product.quantity}</td>
// // // // // // // // //               <td>${(product.sale_price * product.quantity).toFixed(2)}</td>
// // // // // // // // //             </tr>
// // // // // // // // //           `
// // // // // // // // //             )
// // // // // // // // //             .join("")}
// // // // // // // // //           <tr class="total-row">
// // // // // // // // //             <td colspan="4">Total Amount</td>
// // // // // // // // //             <td>${totalAmount.toFixed(2)}</td>
// // // // // // // // //           </tr>
// // // // // // // // //         </tbody>
// // // // // // // // //       </table>
// // // // // // // // //       <div class="footer">
// // // // // // // // //         <p>Thank you for shopping with us!</p>
// // // // // // // // //         <button class="print-btn" onclick="window.print()">Print this Bill</button>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   </body>
// // // // // // // // // </html>`;

// // // // // // // // //     billWindow.document.write(billContent);
// // // // // // // // //     billWindow.document.close();

// // // // // // // // //     if (customerEmail) await sendBillToEmail(billContent);

// // // // // // // // //     setProducts([]);
// // // // // // // // //     setCustomerName("");
// // // // // // // // //     setCustomerPhone("");
// // // // // // // // //     setCustomerEmail("");
// // // // // // // // //     setPaymentStatus("paid");
// // // // // // // // //   };

// // // // // // // // //   const handleCustomerSelect = (e) => {
// // // // // // // // //     const selectedCustomerPhone = e.target.value;
// // // // // // // // //     const customer = customers.find((c) => c.phone === selectedCustomerPhone);
// // // // // // // // //     setSelectedCustomer(customer);
// // // // // // // // //     setCustomerName(customer ? customer.name : "");
// // // // // // // // //     setCustomerPhone(customer ? customer.phone : "");
// // // // // // // // //     setCustomerEmail(customer ? customer.email : "");
// // // // // // // // //   };

// // // // // // // // //   const handleNewCustomerSave = async () => {
// // // // // // // // //     if (!customerName || !customerPhone) {
// // // // // // // // //       setError("Please enter valid customer details.");
// // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     setSaving(true);
// // // // // // // // //     try {
// // // // // // // // //       const response = await fetch("http://localhost:5008/api/customers", {
// // // // // // // // //         method: "POST",
// // // // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // // // //         body: JSON.stringify({
// // // // // // // // //           name: customerName,
// // // // // // // // //           phone: customerPhone,
// // // // // // // // //           email: customerEmail,
// // // // // // // // //           storeId,
// // // // // // // // //         }),
// // // // // // // // //       });

// // // // // // // // //       if (!response.ok) throw new Error("Failed to add customer");
// // // // // // // // //       const newCustomer = await response.json();
// // // // // // // // //       setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
// // // // // // // // //       setError("Customer added successfully!");
// // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Error adding customer:", error);
// // // // // // // // //       setError("Failed to add customer.");
// // // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // // //     } finally {
// // // // // // // // //       setSaving(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const containerVariants = {
// // // // // // // // //     hidden: { opacity: 0 },
// // // // // // // // //     visible: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 } },
// // // // // // // // //   };

// // // // // // // // //   const itemVariants = {
// // // // // // // // //     hidden: { y: 20, opacity: 0 },
// // // // // // // // //     visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
// // // // // // // // //   };

// // // // // // // // //   const tableRowVariants = {
// // // // // // // // //     hidden: { opacity: 0, x: -20 },
// // // // // // // // //     visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
// // // // // // // // //     exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <motion.div
// // // // // // // // //       className="max-w-5xl mx-auto p-8 bg-white shadow-2xl rounded-lg"
// // // // // // // // //       style={{
// // // // // // // // //         background: "linear-gradient(to bottom, #ffffff, #f9fafb)",
// // // // // // // // //         boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05)",
// // // // // // // // //       }}
// // // // // // // // //       initial="hidden"
// // // // // // // // //       animate="visible"
// // // // // // // // //       variants={containerVariants}
// // // // // // // // //     >
// // // // // // // // //       <motion.div className="mb-8 text-center" variants={itemVariants}>
// // // // // // // // //         <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
// // // // // // // // //           INVOICE GENERATOR
// // // // // // // // //         </h1>
// // // // // // // // //         <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full mb-4"></div>
// // // // // // // // //         <h2 className="text-2xl font-semibold text-gray-700">{storeName} Store</h2>
// // // // // // // // //       </motion.div>

// // // // // // // // //       {loading ? (
// // // // // // // // //         <div className="flex justify-center items-center py-12">
// // // // // // // // //           <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // // // // // // //         </div>
// // // // // // // // //       ) : (
// // // // // // // // //         <>
// // // // // // // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// // // // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Product Selection</h3>
// // // // // // // // //             <div className="flex flex-col md:flex-row gap-4">
// // // // // // // // //               <div className="flex-1">
// // // // // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Scan Barcode:</label>
// // // // // // // // //                 <input
// // // // // // // // //                   type="text"
// // // // // // // // //                   value={barcodeInput}
// // // // // // // // //                   onChange={(e) => setBarcodeInput(e.target.value)}
// // // // // // // // //                   onKeyPress={handleBarcodeKeyPress}
// // // // // // // // //                   placeholder="Scan or enter barcode"
// // // // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // //                 />
// // // // // // // // //               </div>
// // // // // // // // //               <div className="flex-1">
// // // // // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Or Select Product:</label>
// // // // // // // // //                 <select
// // // // // // // // //                   value={selectedProduct}
// // // // // // // // //                   onChange={(e) => setSelectedProduct(e.target.value)}
// // // // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // //                 >
// // // // // // // // //                   {allProducts.map((product) => (
// // // // // // // // //                     <option key={product.id} value={product.product_name}>
// // // // // // // // //                       {product.product_name} - ${parseFloat(product.sale_price).toFixed(2)} (Barcode: {product.barcode})
// // // // // // // // //                     </option>
// // // // // // // // //                   ))}
// // // // // // // // //                 </select>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="flex-1">
// // // // // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
// // // // // // // // //                 <input
// // // // // // // // //                   type="number"
// // // // // // // // //                   value={quantity}
// // // // // // // // //                   min="1"
// // // // // // // // //                   onChange={(e) => setQuantity(e.target.value)}
// // // // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // //                 />
// // // // // // // // //               </div>
// // // // // // // // //               <div className="flex items-end">
// // // // // // // // //                 <motion.button
// // // // // // // // //                   onClick={addProduct}
// // // // // // // // //                   className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
// // // // // // // // //                   whileHover={{ scale: 1.05 }}
// // // // // // // // //                   whileTap={{ scale: 0.98 }}
// // // // // // // // //                 >
// // // // // // // // //                   Add to Bill
// // // // // // // // //                 </motion.button>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </motion.div>

// // // // // // // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// // // // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Customer Information</h3>
// // // // // // // // //             {loadingCustomers ? (
// // // // // // // // //               <div className="flex justify-center items-center py-4">
// // // // // // // // //                 <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // // // // // // //               </div>
// // // // // // // // //             ) : (
// // // // // // // // //               <>
// // // // // // // // //                 <div className="mb-4">
// // // // // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Select Existing Customer:</label>
// // // // // // // // //                   <select
// // // // // // // // //                     value={customerPhone}
// // // // // // // // //                     onChange={handleCustomerSelect}
// // // // // // // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // //                   >
// // // // // // // // //                     <option value="">Select Customer</option>
// // // // // // // // //                     {customers.map((customer) => (
// // // // // // // // //                       <option key={customer.phone} value={customer.phone}>
// // // // // // // // //                         {customer.name} - {customer.phone}
// // // // // // // // //                       </option>
// // // // // // // // //                     ))}
// // // // // // // // //                   </select>
// // // // // // // // //                 </div>
// // // // // // // // //                 {!selectedCustomer && (
// // // // // // // // //                   <motion.div
// // // // // // // // //                     className="p-4 bg-gray-50 rounded-lg mt-4"
// // // // // // // // //                     initial={{ opacity: 0, height: 0 }}
// // // // // // // // //                     animate={{ opacity: 1, height: "auto" }}
// // // // // // // // //                     transition={{ duration: 0.3 }}
// // // // // // // // //                   >
// // // // // // // // //                     <h4 className="text-md font-medium mb-3 text-gray-700">New Customer</h4>
// // // // // // // // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// // // // // // // // //                       <div>
// // // // // // // // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name:</label>
// // // // // // // // //                         <input
// // // // // // // // //                           type="text"
// // // // // // // // //                           value={customerName}
// // // // // // // // //                           onChange={(e) => setCustomerName(e.target.value)}
// // // // // // // // //                           placeholder="Full Name"
// // // // // // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // //                         />
// // // // // // // // //                       </div>
// // // // // // // // //                       <div>
// // // // // // // // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number:</label>
// // // // // // // // //                         <input
// // // // // // // // //                           type="text"
// // // // // // // // //                           value={customerPhone}
// // // // // // // // //                           onChange={(e) => setCustomerPhone(e.target.value)}
// // // // // // // // //                           placeholder="Phone Number"
// // // // // // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // //                         />
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>
// // // // // // // // //                     <motion.button
// // // // // // // // //                       onClick={handleNewCustomerSave}
// // // // // // // // //                       className="w-full md:w-auto px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-md hover:shadow-lg hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-200 flex items-center justify-center"
// // // // // // // // //                       whileHover={{ scale: 1.02 }}
// // // // // // // // //                       whileTap={{ scale: 0.98 }}
// // // // // // // // //                       disabled={saving}
// // // // // // // // //                     >
// // // // // // // // //                       {saving ? (
// // // // // // // // //                         <>
// // // // // // // // //                           <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // // // // // // //                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // // // // // //                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // // // // // //                           </svg>
// // // // // // // // //                           Saving Customer...
// // // // // // // // //                         </>
// // // // // // // // //                       ) : "Save New Customer"}
// // // // // // // // //                     </motion.button>
// // // // // // // // //                   </motion.div>
// // // // // // // // //                 )}
// // // // // // // // //               </>
// // // // // // // // //             )}
// // // // // // // // //           </motion.div>

// // // // // // // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100 overflow-hidden" variants={itemVariants}>
// // // // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Bill Items</h3>
// // // // // // // // //             <div className="overflow-x-auto" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05) inset" }}>
// // // // // // // // //               <table className="w-full mb-4">
// // // // // // // // //                 <thead>
// // // // // // // // //                   <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
// // // // // // // // //                     <th className="p-3 font-semibold text-left">Product Name</th>
// // // // // // // // //                     <th className="p-3 font-semibold text-left">Barcode</th>
// // // // // // // // //                     <th className="p-3 font-semibold text-right">Price</th>
// // // // // // // // //                     <th className="p-3 font-semibold text-center">Quantity</th>
// // // // // // // // //                     <th className="p-3 font-semibold text-right">Total</th>
// // // // // // // // //                     <th className="p-3 font-semibold text-center">Action</th>
// // // // // // // // //                   </tr>
// // // // // // // // //                 </thead>
// // // // // // // // //                 <tbody>
// // // // // // // // //                   <AnimatePresence>
// // // // // // // // //                     {products.length > 0 ? (
// // // // // // // // //                       products.map((product) => (
// // // // // // // // //                         <motion.tr
// // // // // // // // //                           key={product.id}
// // // // // // // // //                           className="border-b hover:bg-gray-50 transition-colors"
// // // // // // // // //                           variants={tableRowVariants}
// // // // // // // // //                           initial="hidden"
// // // // // // // // //                           animate="visible"
// // // // // // // // //                           exit="exit"
// // // // // // // // //                         >
// // // // // // // // //                           <td className="p-3 text-left">{product.product_name}</td>
// // // // // // // // //                           <td className="p-3 text-left">{product.barcode || "N/A"}</td>
// // // // // // // // //                           <td className="p-3 text-right">${product.sale_price.toFixed(2)}</td>
// // // // // // // // //                           <td className="p-3 text-center">{product.quantity}</td>
// // // // // // // // //                           <td className="p-3 text-right font-medium">
// // // // // // // // //                             ${(product.sale_price * product.quantity).toFixed(2)}
// // // // // // // // //                           </td>
// // // // // // // // //                           <td className="p-3 text-center">
// // // // // // // // //                             <motion.button
// // // // // // // // //                               onClick={() => deleteProduct(product.product_name)}
// // // // // // // // //                               className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
// // // // // // // // //                               whileHover={{ scale: 1.05 }}
// // // // // // // // //                               whileTap={{ scale: 0.95 }}
// // // // // // // // //                             >
// // // // // // // // //                               Remove
// // // // // // // // //                             </motion.button>
// // // // // // // // //                           </td>
// // // // // // // // //                         </motion.tr>
// // // // // // // // //                       ))
// // // // // // // // //                     ) : (
// // // // // // // // //                       <motion.tr variants={tableRowVariants} initial="hidden" animate="visible">
// // // // // // // // //                         <td colSpan="6" className="p-4 text-center text-gray-500">
// // // // // // // // //                           No products added to the bill yet.
// // // // // // // // //                         </td>
// // // // // // // // //                       </motion.tr>
// // // // // // // // //                     )}
// // // // // // // // //                   </AnimatePresence>
// // // // // // // // //                 </tbody>
// // // // // // // // //               </table>
// // // // // // // // //             </div>
// // // // // // // // //             {products.length > 0 && (
// // // // // // // // //               <motion.div
// // // // // // // // //                 className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
// // // // // // // // //                 initial={{ opacity: 0, y: 20 }}
// // // // // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // // // // //                 transition={{ duration: 0.3 }}
// // // // // // // // //               >
// // // // // // // // //                 <div className="text-lg font-semibold text-gray-800">Total Amount:</div>
// // // // // // // // //                 <div className="text-2xl font-bold text-blue-600">${totalAmount.toFixed(2)}</div>
// // // // // // // // //               </motion.div>
// // // // // // // // //             )}
// // // // // // // // //           </motion.div>

// // // // // // // // //           <motion.div className="text-center" variants={itemVariants}>
// // // // // // // // //             <motion.button
// // // // // // // // //               onClick={printBill}
// // // // // // // // //               className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300"
// // // // // // // // //               whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
// // // // // // // // //               whileTap={{ scale: 0.98 }}
// // // // // // // // //             >
// // // // // // // // //               Generate & Print Invoice
// // // // // // // // //             </motion.button>
// // // // // // // // //           </motion.div>

// // // // // // // // //           <div className="mb-4">
// // // // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status:</label>
// // // // // // // // //             <select
// // // // // // // // //               value={paymentStatus}
// // // // // // // // //               onChange={(e) => setPaymentStatus(e.target.value)}
// // // // // // // // //               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // //             >
// // // // // // // // //               <option value="paid">Paid</option>
// // // // // // // // //               <option value="unpaid">Unpaid</option>
// // // // // // // // //             </select>
// // // // // // // // //           </div>

// // // // // // // // //           {customerPhone && (
// // // // // // // // //             <div className="mb-4">
// // // // // // // // //               <p className="text-sm font-medium text-gray-700">Customer Balance:</p>
// // // // // // // // //               <p className={`text-lg font-bold ${customerBalance >= 0 ? "text-green-600" : "text-red-600"}`}>
// // // // // // // // //                 ${customerBalance.toFixed(2)}
// // // // // // // // //               </p>
// // // // // // // // //             </div>
// // // // // // // // //           )}

// // // // // // // // //           <div className="mb-4">
// // // // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Customer Email (for digital receipt):</label>
// // // // // // // // //             <input
// // // // // // // // //               type="email"
// // // // // // // // //               value={customerEmail}
// // // // // // // // //               onChange={(e) => setCustomerEmail(e.target.value)}
// // // // // // // // //               placeholder="Enter customer email"
// // // // // // // // //               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // // //             />
// // // // // // // // //           </div>
// // // // // // // // //         </>
// // // // // // // // //       )}

// // // // // // // // //       <AnimatePresence>
// // // // // // // // //         {error && (
// // // // // // // // //           <motion.div
// // // // // // // // //             className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${error.includes("successfully") ? "bg-green-500" : "bg-red-500"} text-white max-w-sm`}
// // // // // // // // //             initial={{ opacity: 0, y: 50, x: 0 }}
// // // // // // // // //             animate={{ opacity: 1, y: 0, x: 0 }}
// // // // // // // // //             exit={{ opacity: 0, y: 50 }}
// // // // // // // // //             transition={{ duration: 0.3 }}
// // // // // // // // //           >
// // // // // // // // //             {error}
// // // // // // // // //           </motion.div>
// // // // // // // // //         )}
// // // // // // // // //       </AnimatePresence>
// // // // // // // // //     </motion.div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Billing;
// // // // // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // // // const Billing = () => {
// // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // //   const [allProducts, setAllProducts] = useState([]);
// // // // // // // //   const [selectedProduct, setSelectedProduct] = useState("");
// // // // // // // //   const [barcodeInput, setBarcodeInput] = useState("");
// // // // // // // //   const [quantity, setQuantity] = useState(1);
// // // // // // // //   const [error, setError] = useState(null);
// // // // // // // //   const [customerName, setCustomerName] = useState("");
// // // // // // // //   const [customerPhone, setCustomerPhone] = useState("");
// // // // // // // //   const [customerEmail, setCustomerEmail] = useState("");
// // // // // // // //   const [customers, setCustomers] = useState([]);
// // // // // // // //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // //   const [loadingCustomers, setLoadingCustomers] = useState(true);
// // // // // // // //   const [saving, setSaving] = useState(false);
// // // // // // // //   const [paymentStatus, setPaymentStatus] = useState("paid");
// // // // // // // //   const [customerBalance, setCustomerBalance] = useState(0);
// // // // // // // //   const { storeName, storeId } = useContext(StoreContext);
// // // // // // // //   const storeAddress = localStorage.getItem("storeAddress");
// // // // // // // //   const email = localStorage.getItem("email");
// // // // // // // //   const fullName = localStorage.getItem("fullName");
// // // // // // // //   const phoneNumber = localStorage.getItem("phoneNumber");
// // // // // // // //   const userId = localStorage.getItem("userId");

// // // // // // // //   useEffect(() => {
// // // // // // // //     console.log(userId);
// // // // // // // //     const fetchProducts = async () => {
// // // // // // // //       setLoading(true);
// // // // // // // //       try {
// // // // // // // //         const response = await fetch("http://localhost:5002/api/products", {
// // // // // // // //           headers: { storeId, userId },
// // // // // // // //         });
// // // // // // // //         if (!response.ok) throw new Error("Failed to fetch products");
// // // // // // // //         const data = await response.json();
// // // // // // // //         if (data && Array.isArray(data) && data.length > 0) {
// // // // // // // //           setAllProducts(data);
// // // // // // // //           setSelectedProduct(data[0].product_name);
// // // // // // // //         } else {
// // // // // // // //           console.error("No products found or incorrect data format.");
// // // // // // // //           setError("No products available. Please add products first.");
// // // // // // // //         }
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error("Error fetching products:", error);
// // // // // // // //         setError("Failed to fetch products. Please check your connection.");
// // // // // // // //       } finally {
// // // // // // // //         setLoading(false);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     if (storeId) fetchProducts();
// // // // // // // //     else {
// // // // // // // //       console.error("Store ID not provided.");
// // // // // // // //       setError("Store identification failed. Please try again.");
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   }, [storeId, userId]);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchCustomers = async () => {
// // // // // // // //       setLoadingCustomers(true);
// // // // // // // //       try {
// // // // // // // //         const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}&userId=${userId}`);
// // // // // // // //         if (!response.ok) throw new Error("Failed to fetch customers");
// // // // // // // //         const data = await response.json();
// // // // // // // //         setCustomers(data.customers);
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error("Error fetching customers:", error);
// // // // // // // //       } finally {
// // // // // // // //         setLoadingCustomers(false);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     if (storeId) fetchCustomers();
// // // // // // // //   }, [storeId, userId]);

// // // // // // // //   useEffect(() => {
// // // // // // // //     if (customerPhone) {
// // // // // // // //       const fetchCustomerBalance = async () => {
// // // // // // // //         try {
// // // // // // // //           const response = await fetch(`http://localhost:5002/api/khatabook/customers/${customerPhone}/balance`, {
// // // // // // // //             headers: { storeId },
// // // // // // // //           });
// // // // // // // //           if (!response.ok) throw new Error("Failed to fetch customer balance");
// // // // // // // //           const data = await response.json();
// // // // // // // //           setCustomerBalance(data.balance);
// // // // // // // //         } catch (error) {
// // // // // // // //           console.error("Error fetching customer balance:", error);
// // // // // // // //         }
// // // // // // // //       };
// // // // // // // //       fetchCustomerBalance();
// // // // // // // //     }
// // // // // // // //   }, [customerPhone, storeId]);

// // // // // // // //   const addProduct = () => {
// // // // // // // //     const selectedProductData = allProducts.find(
// // // // // // // //       (p) => p.product_name === selectedProduct || p.barcode === barcodeInput
// // // // // // // //     );

// // // // // // // //     if (selectedProductData) {
// // // // // // // //       setProducts((prevProducts) => {
// // // // // // // //         const existingProduct = prevProducts.find(
// // // // // // // //           (p) => p.product_name === selectedProductData.product_name
// // // // // // // //         );

// // // // // // // //         if (existingProduct) {
// // // // // // // //           return prevProducts.map((p) =>
// // // // // // // //             p.product_name === selectedProductData.product_name
// // // // // // // //               ? { ...p, quantity: p.quantity + parseInt(quantity) }
// // // // // // // //               : p
// // // // // // // //           );
// // // // // // // //         } else {
// // // // // // // //           return [
// // // // // // // //             ...prevProducts,
// // // // // // // //             {
// // // // // // // //               id: selectedProductData.id,
// // // // // // // //               product_name: selectedProductData.product_name,
// // // // // // // //               sale_price: parseFloat(selectedProductData.sale_price),
// // // // // // // //               quantity: parseInt(quantity),
// // // // // // // //               barcode: selectedProductData.barcode,
// // // // // // // //             },
// // // // // // // //           ];
// // // // // // // //         }
// // // // // // // //       });
// // // // // // // //     } else {
// // // // // // // //       console.error("Selected product not found in all products list.");
// // // // // // // //       setError("Product not found. Check barcode or name.");
// // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // //     }

// // // // // // // //     setQuantity(1);
// // // // // // // //     setBarcodeInput("");
// // // // // // // //   };

// // // // // // // //   const handleBarcodeKeyPress = (e) => {
// // // // // // // //     if (e.key === "Enter" && barcodeInput) {
// // // // // // // //       const product = allProducts.find((p) => p.barcode === barcodeInput);
// // // // // // // //       if (product) {
// // // // // // // //         setSelectedProduct(product.product_name);
// // // // // // // //         addProduct();
// // // // // // // //       } else {
// // // // // // // //         setError("Product with this barcode not found.");
// // // // // // // //         setTimeout(() => setError(null), 3000);
// // // // // // // //       }
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const deleteProduct = (productName) => {
// // // // // // // //     setProducts(products.filter((p) => p.product_name !== productName));
// // // // // // // //   };

// // // // // // // //   const totalAmount = products.reduce(
// // // // // // // //     (total, product) => total + product.sale_price * product.quantity,
// // // // // // // //     0
// // // // // // // //   );

// // // // // // // //   const sendBillToEmail = async (billContent) => {
// // // // // // // //     try {
// // // // // // // //       const response = await fetch("http://localhost:5002/api/send-email", {
// // // // // // // //         method: "POST",
// // // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // // //         body: JSON.stringify({
// // // // // // // //           to: customerEmail,
// // // // // // // //           subject: `Invoice from ${storeName}`,
// // // // // // // //           html: billContent,
// // // // // // // //         }),
// // // // // // // //       });

// // // // // // // //       if (!response.ok) throw new Error("Failed to send email");
// // // // // // // //       const data = await response.json();
// // // // // // // //       console.log("Email sent successfully:", data);
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Error sending email:", error);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const printBill = async () => {
// // // // // // // //     if (!products || products.length === 0) {
// // // // // // // //       setError("No items to print! Please add products to the bill.");
// // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     if (!customerName || !customerPhone) {
// // // // // // // //       setError("Please enter customer details before generating the bill.");
// // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     const billData = {
// // // // // // // //       products,
// // // // // // // //       customerName,
// // // // // // // //       customerPhone,
// // // // // // // //       customerEmail,
// // // // // // // //       userId,
// // // // // // // //       paymentStatus,
// // // // // // // //     };

// // // // // // // //     const response = await fetch("http://localhost:5002/api/generate-bill", {
// // // // // // // //       method: "POST",
// // // // // // // //       headers: {
// // // // // // // //         "Content-Type": "application/json",
// // // // // // // //         storeId,
// // // // // // // //         userId,
// // // // // // // //       },
// // // // // // // //       body: JSON.stringify(billData),
// // // // // // // //     });

// // // // // // // //     if (!response.ok) {
// // // // // // // //       const data = await response.json();
// // // // // // // //       setError(data.error || "Failed to generate bill");
// // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     const data = await response.json();
// // // // // // // //     const billSummary = data;

// // // // // // // //     const billWindow = window.open("", "Bill", "width=800,height=600");
// // // // // // // //     const billContent = `
// // // // // // // // <html>
// // // // // // // //   <head>
// // // // // // // //     <title>${storeName} - Bill</title>
// // // // // // // //     <style>
// // // // // // // //       * { margin: 0; padding: 0; box-sizing: border-box; }
// // // // // // // //       body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f1f6; color: #333; line-height: 1.6; }
// // // // // // // //       .container { width: 80%; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); padding: 40px; overflow: hidden; }
// // // // // // // //       .header { text-align: center; padding: 20px 0; background: linear-gradient(135deg, #00bcd4, #00796b); color: #ffffff; border-radius: 12px; margin-bottom: 30px; }
// // // // // // // //       .header h1 { font-size: 36px; font-weight: 700; letter-spacing: 2px; }
// // // // // // // //       .header p { font-size: 18px; margin-top: 10px; opacity: 0.9; }
// // // // // // // //       .bill-info { display: flex; justify-content: space-between; margin-bottom: 30px; padding: 10px 0; font-size: 16px; color: #444; border-bottom: 2px solid #f4f4f4; }
// // // // // // // //       .bill-info div { flex: 1; }
// // // // // // // //       .bill-info .label { font-weight: 600; opacity: 0.8; }
// // // // // // // //       table { width: 100%; margin-bottom: 30px; border-collapse: collapse; text-align: center; border-radius: 8px; overflow: hidden; }
// // // // // // // //       th, td { padding: 15px; font-size: 16px; text-align: center; }
// // // // // // // //       th { background-color: #00bcd4; color: #ffffff; text-transform: uppercase; letter-spacing: 1px; }
// // // // // // // //       td { background-color: #fafafa; color: #333; }
// // // // // // // //       tr:nth-child(even) td { background-color: #f5f5f5; }
// // // // // // // //       .total-row { background-color: #00bcd4; color: #ffffff; font-weight: bold; font-size: 18px; }
// // // // // // // //       .footer { text-align: center; margin-top: 40px; padding: 20px; background-color: #00bcd4; color: #fff; border-radius: 12px; }
// // // // // // // //       .footer p { margin: 0; font-size: 16px; font-style: italic; }
// // // // // // // //       .print-btn { display: inline-block; padding: 15px 30px; margin-top: 20px; background-color: #28a745; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; transition: background-color 0.3s ease-in-out; text-align: center; }
// // // // // // // //       .print-btn:hover { background-color: #218838; }
// // // // // // // //       @media print {
// // // // // // // //         body { background-color: #fff; color: #333; }
// // // // // // // //         .container { box-shadow: none; margin: 0; padding: 20px; }
// // // // // // // //         .header, .footer, th, .total-row { 
// // // // // // // //           background: linear-gradient(135deg, #00bcd4, #00796b) !important; 
// // // // // // // //           color: #fff !important; 
// // // // // // // //           -webkit-print-color-adjust: exact; /* For Chrome/Safari */
// // // // // // // //           print-color-adjust: exact; /* Standard property */
// // // // // // // //         }
// // // // // // // //         .footer { font-size: 14px; text-align: center; }
// // // // // // // //         .print-btn { display: none; }
// // // // // // // //         table th, table td { border: 1px solid #ddd; }
// // // // // // // //         .bill-info { font-size: 14px; }
// // // // // // // //       }
// // // // // // // //     </style>
// // // // // // // //   </head>
// // // // // // // //   <body>
// // // // // // // //     <div class="container">
// // // // // // // //       <div class="header">
// // // // // // // //         <h1>${storeName} - Invoice</h1>
// // // // // // // //         <p>Invoice Number: ${billSummary.invoiceNumber} | Serial Number: ${billSummary.serialNumber}</p>
// // // // // // // //         <p>${new Date().toLocaleString()}</p>
// // // // // // // //       </div>
// // // // // // // //       <div class="bill-info">
// // // // // // // //         <div><p class="label">Store Address:</p><p>${storeAddress}</p></div>
// // // // // // // //         <div><p class="label">Store Email:</p><p>${email}</p></div>
// // // // // // // //         <div><p class="label">Store Phone:</p><p>${phoneNumber}</p></div>
// // // // // // // //       </div>
// // // // // // // //       <div class="bill-info">
// // // // // // // //         <div><p class="label">Customer Name:</p><p>${customerName}</p></div>
// // // // // // // //         <div><p class="label">Customer Phone:</p><p>${customerPhone}</p></div>
// // // // // // // //       </div>
// // // // // // // //       <table>
// // // // // // // //         <thead>
// // // // // // // //           <tr>
// // // // // // // //             <th>Product Name</th>
// // // // // // // //             <th>Barcode</th>
// // // // // // // //             <th>Price</th>
// // // // // // // //             <th>Quantity</th>
// // // // // // // //             <th>Total</th>
// // // // // // // //           </tr>
// // // // // // // //         </thead>
// // // // // // // //         <tbody>
// // // // // // // //           ${products
// // // // // // // //             .map(
// // // // // // // //               (product) => `
// // // // // // // //             <tr>
// // // // // // // //               <td>${product.product_name}</td>
// // // // // // // //               <td>${product.barcode || "N/A"}</td>
// // // // // // // //               <td>${product.sale_price.toFixed(2)}</td>
// // // // // // // //               <td>${product.quantity}</td>
// // // // // // // //               <td>${(product.sale_price * product.quantity).toFixed(2)}</td>
// // // // // // // //             </tr>
// // // // // // // //           `
// // // // // // // //             )
// // // // // // // //             .join("")}
// // // // // // // //           <tr class="total-row">
// // // // // // // //             <td colspan="4">Total Amount</td>
// // // // // // // //             <td>${totalAmount.toFixed(2)}</td>
// // // // // // // //           </tr>
// // // // // // // //         </tbody>
// // // // // // // //       </table>
// // // // // // // //       <div class="footer">
// // // // // // // //         <p>Thank you for shopping with us!</p>
// // // // // // // //         <button class="print-btn" onclick="window.print()">Print this Bill</button>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   </body>
// // // // // // // // </html>`;

// // // // // // // //     billWindow.document.write(billContent);
// // // // // // // //     billWindow.document.close();

// // // // // // // //     if (customerEmail) await sendBillToEmail(billContent);

// // // // // // // //     setProducts([]);
// // // // // // // //     setCustomerName("");
// // // // // // // //     setCustomerPhone("");
// // // // // // // //     setCustomerEmail("");
// // // // // // // //     setPaymentStatus("paid");
// // // // // // // //   };

// // // // // // // //   const handleCustomerSelect = (e) => {
// // // // // // // //     const selectedCustomerPhone = e.target.value;
// // // // // // // //     const customer = customers.find((c) => c.phone === selectedCustomerPhone);
// // // // // // // //     setSelectedCustomer(customer);
// // // // // // // //     setCustomerName(customer ? customer.name : "");
// // // // // // // //     setCustomerPhone(customer ? customer.phone : "");
// // // // // // // //     setCustomerEmail(customer ? customer.email : "");
// // // // // // // //   };

// // // // // // // //   const handleNewCustomerSave = async () => {
// // // // // // // //     if (!customerName || !customerPhone) {
// // // // // // // //       setError("Please enter valid customer details.");
// // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     setSaving(true);
// // // // // // // //     try {
// // // // // // // //       const response = await fetch("http://localhost:5008/api/customers", {
// // // // // // // //         method: "POST",
// // // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // // //         body: JSON.stringify({
// // // // // // // //           name: customerName,
// // // // // // // //           phone: customerPhone,
// // // // // // // //           email: customerEmail,
// // // // // // // //           storeId,
// // // // // // // //         }),
// // // // // // // //       });

// // // // // // // //       if (!response.ok) throw new Error("Failed to add customer");
// // // // // // // //       const newCustomer = await response.json();
// // // // // // // //       setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
// // // // // // // //       setError("Customer added successfully!");
// // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Error adding customer:", error);
// // // // // // // //       setError("Failed to add customer.");
// // // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // // //     } finally {
// // // // // // // //       setSaving(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const containerVariants = {
// // // // // // // //     hidden: { opacity: 0 },
// // // // // // // //     visible: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 } },
// // // // // // // //   };

// // // // // // // //   const itemVariants = {
// // // // // // // //     hidden: { y: 20, opacity: 0 },
// // // // // // // //     visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
// // // // // // // //   };

// // // // // // // //   const tableRowVariants = {
// // // // // // // //     hidden: { opacity: 0, x: -20 },
// // // // // // // //     visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
// // // // // // // //     exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <motion.div
// // // // // // // //       className="max-w-5xl mx-auto p-8 bg-white shadow-2xl rounded-lg"
// // // // // // // //       style={{
// // // // // // // //         background: "linear-gradient(to bottom, #ffffff, #f9fafb)", // Inline style for gradient
// // // // // // // //         boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05)",
// // // // // // // //       }}
// // // // // // // //       initial="hidden"
// // // // // // // //       animate="visible"
// // // // // // // //       variants={containerVariants}
// // // // // // // //     >
// // // // // // // //       <motion.div className="mb-8 text-center" variants={itemVariants}>
// // // // // // // //         <h1 className="text-4xl font-bold mb-2 text-blue-600">INVOICE GENERATOR</h1>
// // // // // // // //         <div className="h-1 w-32 bg-blue-600 mx-auto rounded-full mb-4"></div>
// // // // // // // //         <h2 className="text-2xl font-semibold text-gray-700">{storeName} Store</h2>
// // // // // // // //       </motion.div>

// // // // // // // //       {loading ? (
// // // // // // // //         <div className="flex justify-center items-center py-12">
// // // // // // // //           <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // // // // // //         </div>
// // // // // // // //       ) : (
// // // // // // // //         <>
// // // // // // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// // // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Product Selection</h3>
// // // // // // // //             <div className="flex flex-col md:flex-row gap-4">
// // // // // // // //               <div className="flex-1">
// // // // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Scan Barcode:</label>
// // // // // // // //                 <input
// // // // // // // //                   type="text"
// // // // // // // //                   value={barcodeInput}
// // // // // // // //                   onChange={(e) => setBarcodeInput(e.target.value)}
// // // // // // // //                   onKeyPress={handleBarcodeKeyPress}
// // // // // // // //                   placeholder="Scan or enter barcode"
// // // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //               <div className="flex-1">
// // // // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Or Select Product:</label>
// // // // // // // //                 <select
// // // // // // // //                   value={selectedProduct}
// // // // // // // //                   onChange={(e) => setSelectedProduct(e.target.value)}
// // // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // //                 >
// // // // // // // //                   {allProducts.map((product) => (
// // // // // // // //                     <option key={product.id} value={product.product_name}>
// // // // // // // //                       {product.product_name} - ${parseFloat(product.sale_price).toFixed(2)} (Barcode: {product.barcode})
// // // // // // // //                     </option>
// // // // // // // //                   ))}
// // // // // // // //                 </select>
// // // // // // // //               </div>
// // // // // // // //               <div className="flex-1">
// // // // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
// // // // // // // //                 <input
// // // // // // // //                   type="number"
// // // // // // // //                   value={quantity}
// // // // // // // //                   min="1"
// // // // // // // //                   onChange={(e) => setQuantity(e.target.value)}
// // // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //               <div className="flex items-end">
// // // // // // // //                 <motion.button
// // // // // // // //                   onClick={addProduct}
// // // // // // // //                   className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
// // // // // // // //                   whileHover={{ scale: 1.05 }}
// // // // // // // //                   whileTap={{ scale: 0.98 }}
// // // // // // // //                 >
// // // // // // // //                   Add to Bill
// // // // // // // //                 </motion.button>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </motion.div>

// // // // // // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// // // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Customer Information</h3>
// // // // // // // //             {loadingCustomers ? (
// // // // // // // //               <div className="flex justify-center items-center py-4">
// // // // // // // //                 <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // // // // // //               </div>
// // // // // // // //             ) : (
// // // // // // // //               <>
// // // // // // // //                 <div className="mb-4">
// // // // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Select Existing Customer:</label>
// // // // // // // //                   <select
// // // // // // // //                     value={customerPhone}
// // // // // // // //                     onChange={handleCustomerSelect}
// // // // // // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // //                   >
// // // // // // // //                     <option value="">Select Customer</option>
// // // // // // // //                     {customers.map((customer) => (
// // // // // // // //                       <option key={customer.phone} value={customer.phone}>
// // // // // // // //                         {customer.name} - {customer.phone}
// // // // // // // //                       </option>
// // // // // // // //                     ))}
// // // // // // // //                   </select>
// // // // // // // //                 </div>
// // // // // // // //                 {!selectedCustomer && (
// // // // // // // //                   <motion.div
// // // // // // // //                     className="p-4 bg-gray-50 rounded-lg mt-4"
// // // // // // // //                     initial={{ opacity: 0, height: 0 }}
// // // // // // // //                     animate={{ opacity: 1, height: "auto" }}
// // // // // // // //                     transition={{ duration: 0.3 }}
// // // // // // // //                   >
// // // // // // // //                     <h4 className="text-md font-medium mb-3 text-gray-700">New Customer</h4>
// // // // // // // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// // // // // // // //                       <div>
// // // // // // // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name:</label>
// // // // // // // //                         <input
// // // // // // // //                           type="text"
// // // // // // // //                           value={customerName}
// // // // // // // //                           onChange={(e) => setCustomerName(e.target.value)}
// // // // // // // //                           placeholder="Full Name"
// // // // // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // //                         />
// // // // // // // //                       </div>
// // // // // // // //                       <div>
// // // // // // // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number:</label>
// // // // // // // //                         <input
// // // // // // // //                           type="text"
// // // // // // // //                           value={customerPhone}
// // // // // // // //                           onChange={(e) => setCustomerPhone(e.target.value)}
// // // // // // // //                           placeholder="Phone Number"
// // // // // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // //                         />
// // // // // // // //                       </div>
// // // // // // // //                     </div>
// // // // // // // //                     <motion.button
// // // // // // // //                       onClick={handleNewCustomerSave}
// // // // // // // //                       className="w-full md:w-auto px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-200 flex items-center justify-center"
// // // // // // // //                       whileHover={{ scale: 1.02 }}
// // // // // // // //                       whileTap={{ scale: 0.98 }}
// // // // // // // //                       disabled={saving}
// // // // // // // //                     >
// // // // // // // //                       {saving ? (
// // // // // // // //                         <>
// // // // // // // //                           <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // // // // // //                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // // // // //                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // // // // //                           </svg>
// // // // // // // //                           Saving Customer...
// // // // // // // //                         </>
// // // // // // // //                       ) : "Save New Customer"}
// // // // // // // //                     </motion.button>
// // // // // // // //                   </motion.div>
// // // // // // // //                 )}
// // // // // // // //               </>
// // // // // // // //             )}
// // // // // // // //           </motion.div>

// // // // // // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100 overflow-hidden" variants={itemVariants}>
// // // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Bill Items</h3>
// // // // // // // //             <div className="overflow-x-auto" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05) inset" }}>
// // // // // // // //               <table className="w-full mb-4">
// // // // // // // //                 <thead>
// // // // // // // //                   <tr className="bg-blue-500 text-white">
// // // // // // // //                     <th className="p-3 font-semibold text-left">Product Name</th>
// // // // // // // //                     <th className="p-3 font-semibold text-left">Barcode</th>
// // // // // // // //                     <th className="p-3 font-semibold text-right">Price</th>
// // // // // // // //                     <th className="p-3 font-semibold text-center">Quantity</th>
// // // // // // // //                     <th className="p-3 font-semibold text-right">Total</th>
// // // // // // // //                     <th className="p-3 font-semibold text-center">Action</th>
// // // // // // // //                   </tr>
// // // // // // // //                 </thead>
// // // // // // // //                 <tbody>
// // // // // // // //                   <AnimatePresence>
// // // // // // // //                     {products.length > 0 ? (
// // // // // // // //                       products.map((product) => (
// // // // // // // //                         <motion.tr
// // // // // // // //                           key={product.id}
// // // // // // // //                           className="border-b hover:bg-gray-50 transition-colors"
// // // // // // // //                           variants={tableRowVariants}
// // // // // // // //                           initial="hidden"
// // // // // // // //                           animate="visible"
// // // // // // // //                           exit="exit"
// // // // // // // //                         >
// // // // // // // //                           <td className="p-3 text-left">{product.product_name}</td>
// // // // // // // //                           <td className="p-3 text-left">{product.barcode || "N/A"}</td>
// // // // // // // //                           <td className="p-3 text-right">${product.sale_price.toFixed(2)}</td>
// // // // // // // //                           <td className="p-3 text-center">{product.quantity}</td>
// // // // // // // //                           <td className="p-3 text-right font-medium">
// // // // // // // //                             ${(product.sale_price * product.quantity).toFixed(2)}
// // // // // // // //                           </td>
// // // // // // // //                           <td className="p-3 text-center">
// // // // // // // //                             <motion.button
// // // // // // // //                               onClick={() => deleteProduct(product.product_name)}
// // // // // // // //                               className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
// // // // // // // //                               whileHover={{ scale: 1.05 }}
// // // // // // // //                               whileTap={{ scale: 0.95 }}
// // // // // // // //                             >
// // // // // // // //                               Remove
// // // // // // // //                             </motion.button>
// // // // // // // //                           </td>
// // // // // // // //                         </motion.tr>
// // // // // // // //                       ))
// // // // // // // //                     ) : (
// // // // // // // //                       <motion.tr variants={tableRowVariants} initial="hidden" animate="visible">
// // // // // // // //                         <td colSpan="6" className="p-4 text-center text-gray-500">
// // // // // // // //                           No products added to the bill yet.
// // // // // // // //                         </td>
// // // // // // // //                       </motion.tr>
// // // // // // // //                     )}
// // // // // // // //                   </AnimatePresence>
// // // // // // // //                 </tbody>
// // // // // // // //               </table>
// // // // // // // //             </div>
// // // // // // // //             {products.length > 0 && (
// // // // // // // //               <motion.div
// // // // // // // //                 className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
// // // // // // // //                 initial={{ opacity: 0, y: 20 }}
// // // // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // // // //                 transition={{ duration: 0.3 }}
// // // // // // // //               >
// // // // // // // //                 <div className="text-lg font-semibold text-gray-800">Total Amount:</div>
// // // // // // // //                 <div className="text-2xl font-bold text-blue-600">${totalAmount.toFixed(2)}</div>
// // // // // // // //               </motion.div>
// // // // // // // //             )}
// // // // // // // //           </motion.div>

// // // // // // // //           <motion.div className="text-center" variants={itemVariants}>
// // // // // // // //             <motion.button
// // // // // // // //               onClick={printBill}
// // // // // // // //               className="px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300"
// // // // // // // //               whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
// // // // // // // //               whileTap={{ scale: 0.98 }}
// // // // // // // //             >
// // // // // // // //               Generate & Print Invoice
// // // // // // // //             </motion.button>
// // // // // // // //           </motion.div>

// // // // // // // //           <div className="mb-4">
// // // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status:</label>
// // // // // // // //             <select
// // // // // // // //               value={paymentStatus}
// // // // // // // //               onChange={(e) => setPaymentStatus(e.target.value)}
// // // // // // // //               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // //             >
// // // // // // // //               <option value="paid">Paid</option>
// // // // // // // //               <option value="unpaid">Unpaid</option>
// // // // // // // //             </select>
// // // // // // // //           </div>

// // // // // // // //           {customerPhone && (
// // // // // // // //             <div className="mb-4">
// // // // // // // //               <p className="text-sm font-medium text-gray-700">Customer Balance:</p>
// // // // // // // //               <p className={`text-lg font-bold ${customerBalance >= 0 ? "text-green-600" : "text-red-600"}`}>
// // // // // // // //                 ${customerBalance.toFixed(2)}
// // // // // // // //               </p>
// // // // // // // //             </div>
// // // // // // // //           )}

// // // // // // // //           <div className="mb-4">
// // // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Customer Email (for digital receipt):</label>
// // // // // // // //             <input
// // // // // // // //               type="email"
// // // // // // // //               value={customerEmail}
// // // // // // // //               onChange={(e) => setCustomerEmail(e.target.value)}
// // // // // // // //               placeholder="Enter customer email"
// // // // // // // //               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // //             />
// // // // // // // //           </div>
// // // // // // // //         </>
// // // // // // // //       )}

// // // // // // // //       <AnimatePresence>
// // // // // // // //         {error && (
// // // // // // // //           <motion.div
// // // // // // // //             className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${error.includes("successfully") ? "bg-green-500" : "bg-red-500"} text-white max-w-sm`}
// // // // // // // //             initial={{ opacity: 0, y: 50, x: 0 }}
// // // // // // // //             animate={{ opacity: 1, y: 0, x: 0 }}
// // // // // // // //             exit={{ opacity: 0, y: 50 }}
// // // // // // // //             transition={{ duration: 0.3 }}
// // // // // // // //           >
// // // // // // // //             {error}
// // // // // // // //           </motion.div>
// // // // // // // //         )}
// // // // // // // //       </AnimatePresence>
// // // // // // // //     </motion.div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Billing;
// // // // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // // const Billing = () => {
// // // // // // //   const [products, setProducts] = useState([]);
// // // // // // //   const [allProducts, setAllProducts] = useState([]);
// // // // // // //   const [selectedProduct, setSelectedProduct] = useState("");
// // // // // // //   const [barcodeInput, setBarcodeInput] = useState("");
// // // // // // //   const [quantity, setQuantity] = useState(1);
// // // // // // //   const [error, setError] = useState(null);
// // // // // // //   const [customerName, setCustomerName] = useState("");
// // // // // // //   const [customerPhone, setCustomerPhone] = useState("");
// // // // // // //   const [customerEmail, setCustomerEmail] = useState("");
// // // // // // //   const [customers, setCustomers] = useState([]);
// // // // // // //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // //   const [loadingCustomers, setLoadingCustomers] = useState(true);
// // // // // // //   const [saving, setSaving] = useState(false);
// // // // // // //   const [paymentStatus, setPaymentStatus] = useState("paid");
// // // // // // //   const [customerBalance, setCustomerBalance] = useState(0);
// // // // // // //   const { storeName, storeId } = useContext(StoreContext);
// // // // // // //   const storeAddress = localStorage.getItem("storeAddress");
// // // // // // //   const email = localStorage.getItem("email");
// // // // // // //   const fullName = localStorage.getItem("fullName");
// // // // // // //   const phoneNumber = localStorage.getItem("phoneNumber");
// // // // // // //   const userId = localStorage.getItem("userId");

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchProducts = async () => {
// // // // // // //       setLoading(true);
// // // // // // //       try {
// // // // // // //         const response = await fetch("http://localhost:5002/api/products", {
// // // // // // //           headers: { storeId, userId },
// // // // // // //         });
// // // // // // //         if (!response.ok) throw new Error("Failed to fetch products");
// // // // // // //         const data = await response.json();
// // // // // // //         if (data && Array.isArray(data) && data.length > 0) {
// // // // // // //           setAllProducts(data);
// // // // // // //           setSelectedProduct(data[0].product_name);
// // // // // // //         } else {
// // // // // // //           setError("No products available. Please add products first.");
// // // // // // //         }
// // // // // // //       } catch (error) {
// // // // // // //         setError("Failed to fetch products. Please check your connection.");
// // // // // // //       } finally {
// // // // // // //         setLoading(false);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     if (storeId) fetchProducts();
// // // // // // //     else {
// // // // // // //       setError("Store identification failed. Please try again.");
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   }, [storeId, userId]);

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchCustomers = async () => {
// // // // // // //       setLoadingCustomers(true);
// // // // // // //       try {
// // // // // // //         const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}&userId=${userId}`);
// // // // // // //         if (!response.ok) throw new Error("Failed to fetch customers");
// // // // // // //         const data = await response.json();
// // // // // // //         setCustomers(data.customers);
// // // // // // //       } catch (error) {
// // // // // // //         console.error("Error fetching customers:", error);
// // // // // // //       } finally {
// // // // // // //         setLoadingCustomers(false);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     if (storeId) fetchCustomers();
// // // // // // //   }, [storeId, userId]);

// // // // // // //   useEffect(() => {
// // // // // // //     if (customerPhone) {
// // // // // // //       const fetchCustomerBalance = async () => {
// // // // // // //         try {
// // // // // // //           const response = await fetch(`http://localhost:5002/api/khatabook/customers/${customerPhone}/balance`, {
// // // // // // //             headers: { storeId },
// // // // // // //           });
// // // // // // //           if (!response.ok) throw new Error("Failed to fetch customer balance");
// // // // // // //           const data = await response.json();
// // // // // // //           setCustomerBalance(data.balance);
// // // // // // //         } catch (error) {
// // // // // // //           console.error("Error fetching customer balance:", error);
// // // // // // //         }
// // // // // // //       };
// // // // // // //       fetchCustomerBalance();
// // // // // // //     }
// // // // // // //   }, [customerPhone, storeId]);

// // // // // // //   const addProduct = () => {
// // // // // // //     const selectedProductData = allProducts.find(
// // // // // // //       (p) => p.product_name === selectedProduct || p.barcode === barcodeInput
// // // // // // //     );

// // // // // // //     if (selectedProductData) {
// // // // // // //       setProducts((prevProducts) => {
// // // // // // //         const existingProduct = prevProducts.find(
// // // // // // //           (p) => p.product_name === selectedProductData.product_name
// // // // // // //         );

// // // // // // //         if (existingProduct) {
// // // // // // //           return prevProducts.map((p) =>
// // // // // // //             p.product_name === selectedProductData.product_name
// // // // // // //               ? { ...p, quantity: p.quantity + parseInt(quantity) }
// // // // // // //               : p
// // // // // // //           );
// // // // // // //         } else {
// // // // // // //           return [
// // // // // // //             ...prevProducts,
// // // // // // //             {
// // // // // // //               id: selectedProductData.id,
// // // // // // //               product_name: selectedProductData.product_name,
// // // // // // //               sale_price: parseFloat(selectedProductData.sale_price),
// // // // // // //               quantity: parseInt(quantity),
// // // // // // //               barcode: selectedProductData.barcode,
// // // // // // //             },
// // // // // // //           ];
// // // // // // //         }
// // // // // // //       });
// // // // // // //     } else {
// // // // // // //       setError("Product not found. Check barcode or name.");
// // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // //     }

// // // // // // //     setQuantity(1);
// // // // // // //     setBarcodeInput("");
// // // // // // //   };

// // // // // // //   const handleBarcodeKeyPress = (e) => {
// // // // // // //     if (e.key === "Enter" && barcodeInput) {
// // // // // // //       const product = allProducts.find((p) => p.barcode === barcodeInput);
// // // // // // //       if (product) {
// // // // // // //         setSelectedProduct(product.product_name);
// // // // // // //         addProduct();
// // // // // // //       } else {
// // // // // // //         setError("Product with this barcode not found.");
// // // // // // //         setTimeout(() => setError(null), 3000);
// // // // // // //       }
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const deleteProduct = (productName) => {
// // // // // // //     setProducts(products.filter((p) => p.product_name !== productName));
// // // // // // //   };

// // // // // // //   const totalAmount = products.reduce(
// // // // // // //     (total, product) => total + product.sale_price * product.quantity,
// // // // // // //     0
// // // // // // //   );

// // // // // // //   const sendBillToEmail = async (billContent) => {
// // // // // // //     try {
// // // // // // //       const response = await fetch("http://localhost:5002/api/send-email", {
// // // // // // //         method: "POST",
// // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // //         body: JSON.stringify({
// // // // // // //           to: customerEmail,
// // // // // // //           subject: `Invoice from ${storeName}`,
// // // // // // //           html: billContent,
// // // // // // //         }),
// // // // // // //       });

// // // // // // //       if (!response.ok) throw new Error("Failed to send email");
// // // // // // //       const data = await response.json();
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error sending email:", error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const printBill = async () => {
// // // // // // //     if (!products || products.length === 0) {
// // // // // // //       setError("No items to print! Please add products to the bill.");
// // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     if (!customerName || !customerPhone) {
// // // // // // //       setError("Please enter customer details before generating the bill.");
// // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     const billData = {
// // // // // // //       products,
// // // // // // //       customerName,
// // // // // // //       customerPhone,
// // // // // // //       customerEmail,
// // // // // // //       userId,
// // // // // // //       paymentStatus,
// // // // // // //     };

// // // // // // //     try {
// // // // // // //       const response = await fetch("http://localhost:5002/api/generate-bill", {
// // // // // // //         method: "POST",
// // // // // // //         headers: {
// // // // // // //           "Content-Type": "application/json",
// // // // // // //           storeId,
// // // // // // //           userId,
// // // // // // //         },
// // // // // // //         body: JSON.stringify(billData),
// // // // // // //       });

// // // // // // //       if (!response.ok) {
// // // // // // //         const data = await response.json();
// // // // // // //         setError(data.error || "Failed to generate bill");
// // // // // // //         setTimeout(() => setError(null), 3000);
// // // // // // //         return;
// // // // // // //       }

// // // // // // //       const billSummary = await response.json();

// // // // // // //       const billWindow = window.open("", "Bill", "width=800,height=600");
// // // // // // //       const billContent = `
// // // // // // // <html>
// // // // // // //   <head>
// // // // // // //     <title>${storeName} - Invoice</title>
// // // // // // //     <style>
// // // // // // //       * { margin: 0; padding: 0; box-sizing: border-box; }
// // // // // // //       body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f1f6; color: #333; line-height: 1.6; }
// // // // // // //       .container { width: 80%; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); padding: 40px; overflow: hidden; }
// // // // // // //       .header { text-align: center; padding: 20px 0; background: linear-gradient(135deg, #00bcd4, #00796b); color: #ffffff; border-radius: 12px; margin-bottom: 30px; }
// // // // // // //       .header h1 { font-size: 36px; font-weight: 700; letter-spacing: 2px; }
// // // // // // //       .header p { font-size: 18px; margin-top: 10px; opacity: 0.9; }
// // // // // // //       .bill-info { display: flex; justify-content: space-between; margin-bottom: 30px; padding: 10px 0; font-size: 16px; color: #444; border-bottom: 2px solid #f4f4f4; }
// // // // // // //       .bill-info div { flex: 1; }
// // // // // // //       .bill-info .label { font-weight: 600; opacity: 0.8; }
// // // // // // //       table { width: 100%; margin-bottom: 30px; border-collapse: collapse; text-align: center; border-radius: 8px; overflow: hidden; }
// // // // // // //       th, td { padding: 15px; font-size: 16px; text-align: center; }
// // // // // // //       th { background-color: #00bcd4; color: #ffffff; text-transform: uppercase; letter-spacing: 1px; }
// // // // // // //       td { background-color: #fafafa; color: #333; }
// // // // // // //       tr:nth-child(even) td { background-color: #f5f5f5; }
// // // // // // //       .total-row { background-color: #00bcd4; color: #ffffff; font-weight: bold; font-size: 18px; }
// // // // // // //       .footer { text-align: center; margin-top: 40px; padding: 20px; background-color: #00bcd4; color: #fff; border-radius: 12px; }
// // // // // // //       .footer p { margin: 0; font-size: 16px; font-style: italic; }
// // // // // // //       .print-btn { display: inline-block; padding: 15px 30px; margin-top: 20px; background-color: #28a745; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; transition: background-color 0.3s ease-in-out; text-align: center; }
// // // // // // //       .print-btn:hover { background-color: #218838; }
// // // // // // //       @media print {
// // // // // // //         body { background-color: #fff; color: #333; }
// // // // // // //         .container { box-shadow: none; margin: 0; padding: 20px; }
// // // // // // //         .header, .footer, th, .total-row { 
// // // // // // //           background: linear-gradient(135deg, #00bcd4, #00796b) !important; 
// // // // // // //           color: #fff !important; 
// // // // // // //           -webkit-print-color-adjust: exact;
// // // // // // //           print-color-adjust: exact;
// // // // // // //         }
// // // // // // //         .footer { font-size: 14px; text-align: center; }
// // // // // // //         .print-btn { display: none; }
// // // // // // //         table th, table td { border: 1px solid #ddd; }
// // // // // // //         .bill-info { font-size: 14px; }
// // // // // // //       }
// // // // // // //     </style>
// // // // // // //   </head>
// // // // // // //   <body>
// // // // // // //     <div class="container">
// // // // // // //       <div class="header">
// // // // // // //         <h1>${storeName} - Invoice</h1>
// // // // // // //         <p>Invoice Number: ${billSummary.invoiceNumber} | Serial Number: ${billSummary.serialNumber}</p>
// // // // // // //         <p>${new Date().toLocaleString()}</p>
// // // // // // //       </div>
// // // // // // //       <div class="bill-info">
// // // // // // //         <div><p class="label">Store Address:</p><p>${storeAddress}</p></div>
// // // // // // //         <div><p class="label">Store Email:</p><p>${email}</p></div>
// // // // // // //         <div><p class="label">Store Phone:</p><p>${phoneNumber}</p></div>
// // // // // // //       </div>
// // // // // // //       <div class="bill-info">
// // // // // // //         <div><p class="label">Customer Name:</p><p>${customerName}</p></div>
// // // // // // //         <div><p class="label">Customer Phone:</p><p>${customerPhone}</p></div>
// // // // // // //       </div>
// // // // // // //       <table>
// // // // // // //         <thead>
// // // // // // //           <tr>
// // // // // // //             <th>Product Name</th>
// // // // // // //             <th>Barcode</th>
// // // // // // //             <th>Price</th>
// // // // // // //             <th>Quantity</th>
// // // // // // //             <th>Total</th>
// // // // // // //           </tr>
// // // // // // //         </thead>
// // // // // // //         <tbody>
// // // // // // //           ${products
// // // // // // //             .map(
// // // // // // //               (product) => `
// // // // // // //             <tr>
// // // // // // //               <td>${product.product_name}</td>
// // // // // // //               <td>${product.barcode || "N/A"}</td>
// // // // // // //               <td>${product.sale_price.toFixed(2)}</td>
// // // // // // //               <td>${product.quantity}</td>
// // // // // // //               <td>${(product.sale_price * product.quantity).toFixed(2)}</td>
// // // // // // //             </tr>
// // // // // // //           `
// // // // // // //             )
// // // // // // //             .join("")}
// // // // // // //           <tr class="total-row">
// // // // // // //             <td colspan="4">Total Amount</td>
// // // // // // //             <td>${totalAmount.toFixed(2)}</td>
// // // // // // //           </tr>
// // // // // // //         </tbody>
// // // // // // //       </table>
// // // // // // //       <div class="footer">
// // // // // // //         <p>Thank you for shopping with us!</p>
// // // // // // //         <button class="print-btn" onclick="window.print()">Print this Bill</button>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   </body>
// // // // // // // </html>`;

// // // // // // //       billWindow.document.write(billContent);
// // // // // // //       billWindow.document.close();

// // // // // // //       if (customerEmail) await sendBillToEmail(billContent);

// // // // // // //       setProducts([]);
// // // // // // //       setCustomerName("");
// // // // // // //       setCustomerPhone("");
// // // // // // //       setCustomerEmail("");
// // // // // // //       setPaymentStatus("paid");
// // // // // // //     } catch (error) {
// // // // // // //       setError("An error occurred while generating the bill.");
// // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // //       console.error("Error in printBill:", error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleCustomerSelect = (e) => {
// // // // // // //     const selectedCustomerPhone = e.target.value;
// // // // // // //     const customer = customers.find((c) => c.phone === selectedCustomerPhone);
// // // // // // //     setSelectedCustomer(customer);
// // // // // // //     setCustomerName(customer ? customer.name : "");
// // // // // // //     setCustomerPhone(customer ? customer.phone : "");
// // // // // // //     setCustomerEmail(customer ? customer.email : "");
// // // // // // //   };

// // // // // // //   const handleNewCustomerSave = async () => {
// // // // // // //     if (!customerName || !customerPhone) {
// // // // // // //       setError("Please enter valid customer details.");
// // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     setSaving(true);
// // // // // // //     try {
// // // // // // //       const response = await fetch("http://localhost:5008/api/customers", {
// // // // // // //         method: "POST",
// // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // //         body: JSON.stringify({
// // // // // // //           name: customerName,
// // // // // // //           phone: customerPhone,
// // // // // // //           email: customerEmail,
// // // // // // //           storeId,
// // // // // // //         }),
// // // // // // //       });

// // // // // // //       if (!response.ok) throw new Error("Failed to add customer");
// // // // // // //       const newCustomer = await response.json();
// // // // // // //       setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
// // // // // // //       setError("Customer added successfully!");
// // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // //     } catch (error) {
// // // // // // //       setError("Failed to add customer.");
// // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // //     } finally {
// // // // // // //       setSaving(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const containerVariants = {
// // // // // // //     hidden: { opacity: 0 },
// // // // // // //     visible: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 } },
// // // // // // //   };

// // // // // // //   const itemVariants = {
// // // // // // //     hidden: { y: 20, opacity: 0 },
// // // // // // //     visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
// // // // // // //   };

// // // // // // //   const tableRowVariants = {
// // // // // // //     hidden: { opacity: 0, x: -20 },
// // // // // // //     visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
// // // // // // //     exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <motion.div
// // // // // // //       className="max-w-5xl mx-auto p-8 bg-white shadow-2xl rounded-lg"
// // // // // // //       style={{
// // // // // // //         background: "linear-gradient(to bottom, #ffffff, #f9fafb)",
// // // // // // //         boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05)",
// // // // // // //       }}
// // // // // // //       initial="hidden"
// // // // // // //       animate="visible"
// // // // // // //       variants={containerVariants}
// // // // // // //     >
// // // // // // //       <motion.div className="mb-8 text-center" variants={itemVariants}>
// // // // // // //         <h1 className="text-4xl font-bold mb-2 text-blue-600">INVOICE GENERATOR</h1>
// // // // // // //         <div className="h-1 w-32 bg-blue-600 mx-auto rounded-full mb-4"></div>
// // // // // // //         <h2 className="text-2xl font-semibold text-gray-700">{storeName} Store</h2>
// // // // // // //       </motion.div>

// // // // // // //       {loading ? (
// // // // // // //         <div className="flex justify-center items-center py-12">
// // // // // // //           <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // // // // //         </div>
// // // // // // //       ) : (
// // // // // // //         <>
// // // // // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Product Selection</h3>
// // // // // // //             <div className="flex flex-col md:flex-row gap-4">
// // // // // // //               <div className="flex-1">
// // // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Scan Barcode:</label>
// // // // // // //                 <input
// // // // // // //                   type="text"
// // // // // // //                   value={barcodeInput}
// // // // // // //                   onChange={(e) => setBarcodeInput(e.target.value)}
// // // // // // //                   onKeyPress={handleBarcodeKeyPress}
// // // // // // //                   placeholder="Scan or enter barcode"
// // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //               <div className="flex-1">
// // // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Or Select Product:</label>
// // // // // // //                 <select
// // // // // // //                   value={selectedProduct}
// // // // // // //                   onChange={(e) => setSelectedProduct(e.target.value)}
// // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // //                 >
// // // // // // //                   {allProducts.map((product) => (
// // // // // // //                     <option key={product.id} value={product.product_name}>
// // // // // // //                       {product.product_name} - ${parseFloat(product.sale_price).toFixed(2)} (Barcode: {product.barcode})
// // // // // // //                     </option>
// // // // // // //                   ))}
// // // // // // //                 </select>
// // // // // // //               </div>
// // // // // // //               <div className="flex-1">
// // // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
// // // // // // //                 <input
// // // // // // //                   type="number"
// // // // // // //                   value={quantity}
// // // // // // //                   min="1"
// // // // // // //                   onChange={(e) => setQuantity(e.target.value)}
// // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //               <div className="flex items-end">
// // // // // // //                 <motion.button
// // // // // // //                   onClick={addProduct}
// // // // // // //                   className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
// // // // // // //                   whileHover={{ scale: 1.05 }}
// // // // // // //                   whileTap={{ scale: 0.98 }}
// // // // // // //                 >
// // // // // // //                   Add to Bill
// // // // // // //                 </motion.button>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </motion.div>

// // // // // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Customer Information</h3>
// // // // // // //             {loadingCustomers ? (
// // // // // // //               <div className="flex justify-center items-center py-4">
// // // // // // //                 <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // // // // //               </div>
// // // // // // //             ) : (
// // // // // // //               <>
// // // // // // //                 <div className="mb-4">
// // // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Select Existing Customer:</label>
// // // // // // //                   <select
// // // // // // //                     value={customerPhone}
// // // // // // //                     onChange={handleCustomerSelect}
// // // // // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // //                   >
// // // // // // //                     <option value="">Select Customer</option>
// // // // // // //                     {customers.map((customer) => (
// // // // // // //                       <option key={customer.phone} value={customer.phone}>
// // // // // // //                         {customer.name} - {customer.phone}
// // // // // // //                       </option>
// // // // // // //                     ))}
// // // // // // //                   </select>
// // // // // // //                 </div>
// // // // // // //                 {!selectedCustomer && (
// // // // // // //                   <motion.div
// // // // // // //                     className="p-4 bg-gray-50 rounded-lg mt-4"
// // // // // // //                     initial={{ opacity: 0, height: 0 }}
// // // // // // //                     animate={{ opacity: 1, height: "auto" }}
// // // // // // //                     transition={{ duration: 0.3 }}
// // // // // // //                   >
// // // // // // //                     <h4 className="text-md font-medium mb-3 text-gray-700">New Customer</h4>
// // // // // // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// // // // // // //                       <div>
// // // // // // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name:</label>
// // // // // // //                         <input
// // // // // // //                           type="text"
// // // // // // //                           value={customerName}
// // // // // // //                           onChange={(e) => setCustomerName(e.target.value)}
// // // // // // //                           placeholder="Full Name"
// // // // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // //                         />
// // // // // // //                       </div>
// // // // // // //                       <div>
// // // // // // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number:</label>
// // // // // // //                         <input
// // // // // // //                           type="text"
// // // // // // //                           value={customerPhone}
// // // // // // //                           onChange={(e) => setCustomerPhone(e.target.value)}
// // // // // // //                           placeholder="Phone Number"
// // // // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // //                         />
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                     <motion.button
// // // // // // //                       onClick={handleNewCustomerSave}
// // // // // // //                       className="w-full md:w-auto px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-200 flex items-center justify-center"
// // // // // // //                       whileHover={{ scale: 1.02 }}
// // // // // // //                       whileTap={{ scale: 0.98 }}
// // // // // // //                       disabled={saving}
// // // // // // //                     >
// // // // // // //                       {saving ? (
// // // // // // //                         <>
// // // // // // //                           <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // // // // //                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // // // //                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // // // //                           </svg>
// // // // // // //                           Saving Customer...
// // // // // // //                         </>
// // // // // // //                       ) : "Save New Customer"}
// // // // // // //                     </motion.button>
// // // // // // //                   </motion.div>
// // // // // // //                 )}
// // // // // // //               </>
// // // // // // //             )}
// // // // // // //           </motion.div>

// // // // // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100 overflow-hidden" variants={itemVariants}>
// // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Bill Items</h3>
// // // // // // //             <div className="overflow-x-auto" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05) inset" }}>
// // // // // // //               <table className="w-full mb-4">
// // // // // // //                 <thead>
// // // // // // //                   <tr className="bg-blue-500 text-white">
// // // // // // //                     <th className="p-3 font-semibold text-left">Product Name</th>
// // // // // // //                     <th className="p-3 font-semibold text-left">Barcode</th>
// // // // // // //                     <th className="p-3 font-semibold text-right">Price</th>
// // // // // // //                     <th className="p-3 font-semibold text-center">Quantity</th>
// // // // // // //                     <th className="p-3 font-semibold text-right">Total</th>
// // // // // // //                     <th className="p-3 font-semibold text-center">Action</th>
// // // // // // //                   </tr>
// // // // // // //                 </thead>
// // // // // // //                 <tbody>
// // // // // // //                   <AnimatePresence>
// // // // // // //                     {products.length > 0 ? (
// // // // // // //                       products.map((product) => (
// // // // // // //                         <motion.tr
// // // // // // //                           key={product.id}
// // // // // // //                           className="border-b hover:bg-gray-50 transition-colors"
// // // // // // //                           variants={tableRowVariants}
// // // // // // //                           initial="hidden"
// // // // // // //                           animate="visible"
// // // // // // //                           exit="exit"
// // // // // // //                         >
// // // // // // //                           <td className="p-3 text-left">{product.product_name}</td>
// // // // // // //                           <td className="p-3 text-left">{product.barcode || "N/A"}</td>
// // // // // // //                           <td className="p-3 text-right">${product.sale_price.toFixed(2)}</td>
// // // // // // //                           <td className="p-3 text-center">{product.quantity}</td>
// // // // // // //                           <td className="p-3 text-right font-medium">
// // // // // // //                             ${(product.sale_price * product.quantity).toFixed(2)}
// // // // // // //                           </td>
// // // // // // //                           <td className="p-3 text-center">
// // // // // // //                             <motion.button
// // // // // // //                               onClick={() => deleteProduct(product.product_name)}
// // // // // // //                               className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
// // // // // // //                               whileHover={{ scale: 1.05 }}
// // // // // // //                               whileTap={{ scale: 0.95 }}
// // // // // // //                             >
// // // // // // //                               Remove
// // // // // // //                             </motion.button>
// // // // // // //                           </td>
// // // // // // //                         </motion.tr>
// // // // // // //                       ))
// // // // // // //                     ) : (
// // // // // // //                       <motion.tr variants={tableRowVariants} initial="hidden" animate="visible">
// // // // // // //                         <td colSpan="6" className="p-4 text-center text-gray-500">
// // // // // // //                           No products added to the bill yet.
// // // // // // //                         </td>
// // // // // // //                       </motion.tr>
// // // // // // //                     )}
// // // // // // //                   </AnimatePresence>
// // // // // // //                 </tbody>
// // // // // // //               </table>
// // // // // // //             </div>
// // // // // // //             {products.length > 0 && (
// // // // // // //               <motion.div
// // // // // // //                 className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
// // // // // // //                 initial={{ opacity: 0, y: 20 }}
// // // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // // //                 transition={{ duration: 0.3 }}
// // // // // // //               >
// // // // // // //                 <div className="text-lg font-semibold text-gray-800">Total Amount:</div>
// // // // // // //                 <div className="text-2xl font-bold text-blue-600">${totalAmount.toFixed(2)}</div>
// // // // // // //               </motion.div>
// // // // // // //             )}
// // // // // // //           </motion.div>

// // // // // // //           <motion.div className="text-center" variants={itemVariants}>
// // // // // // //             <motion.button
// // // // // // //               onClick={printBill}
// // // // // // //               className="px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300"
// // // // // // //               whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
// // // // // // //               whileTap={{ scale: 0.98 }}
// // // // // // //             >
// // // // // // //               Generate & Print Invoice
// // // // // // //             </motion.button>
// // // // // // //           </motion.div>

// // // // // // //           <div className="mb-4">
// // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status:</label>
// // // // // // //             <select
// // // // // // //               value={paymentStatus}
// // // // // // //               onChange={(e) => setPaymentStatus(e.target.value)}
// // // // // // //               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // //             >
// // // // // // //               <option value="paid">Paid</option>
// // // // // // //               <option value="unpaid">Unpaid</option>
// // // // // // //             </select>
// // // // // // //           </div>

// // // // // // //           {customerPhone && (
// // // // // // //             <div className="mb-4">
// // // // // // //               <p className="text-sm font-medium text-gray-700">Customer Balance:</p>
// // // // // // //               <p className={`text-lg font-bold ${customerBalance >= 0 ? "text-green-600" : "text-red-600"}`}>
// // // // // // //                 ${customerBalance.toFixed(2)}
// // // // // // //               </p>
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           <div className="mb-4">
// // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Customer Email (for digital receipt):</label>
// // // // // // //             <input
// // // // // // //               type="email"
// // // // // // //               value={customerEmail}
// // // // // // //               onChange={(e) => setCustomerEmail(e.target.value)}
// // // // // // //               placeholder="Enter customer email"
// // // // // // //               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //         </>
// // // // // // //       )}

// // // // // // //       <AnimatePresence>
// // // // // // //         {error && (
// // // // // // //           <motion.div
// // // // // // //             className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${error.includes("successfully") ? "bg-green-500" : "bg-red-500"} text-white max-w-sm`}
// // // // // // //             initial={{ opacity: 0, y: 50, x: 0 }}
// // // // // // //             animate={{ opacity: 1, y: 0, x: 0 }}
// // // // // // //             exit={{ opacity: 0, y: 50 }}
// // // // // // //             transition={{ duration: 0.3 }}
// // // // // // //           >
// // // // // // //             {error}
// // // // // // //           </motion.div>
// // // // // // //         )}
// // // // // // //       </AnimatePresence>
// // // // // // //     </motion.div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Billing;
// // // // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // // const Billing = () => {
// // // // // // //   const [products, setProducts] = useState([]);
// // // // // // //   const [allProducts, setAllProducts] = useState([]);
// // // // // // //   const [selectedProduct, setSelectedProduct] = useState("");
// // // // // // //   const [barcodeInput, setBarcodeInput] = useState("");
// // // // // // //   const [quantity, setQuantity] = useState(1);
// // // // // // //   const [error, setError] = useState(null);
// // // // // // //   const [customerName, setCustomerName] = useState("");
// // // // // // //   const [customerPhone, setCustomerPhone] = useState("");
// // // // // // //   const [customerEmail, setCustomerEmail] = useState("");
// // // // // // //   const [customers, setCustomers] = useState([]);
// // // // // // //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // //   const [loadingCustomers, setLoadingCustomers] = useState(true);
// // // // // // //   const [saving, setSaving] = useState(false);
// // // // // // //   const [paymentStatus, setPaymentStatus] = useState("paid");
// // // // // // //   const [customerBalance, setCustomerBalance] = useState(0);
// // // // // // //   const { storeName, storeId } = useContext(StoreContext);
// // // // // // //   const storeAddress = localStorage.getItem("storeAddress");
// // // // // // //   const email = localStorage.getItem("email");
// // // // // // //   const phoneNumber = localStorage.getItem("phoneNumber");
// // // // // // //   const userId = localStorage.getItem("userId");

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchProducts = async () => {
// // // // // // //       setLoading(true);
// // // // // // //       try {
// // // // // // //         const response = await fetch("http://localhost:5002/api/products", {
// // // // // // //           headers: { storeId, userId },
// // // // // // //         });
// // // // // // //         if (!response.ok) throw new Error("Failed to fetch products");
// // // // // // //         const data = await response.json();
// // // // // // //         if (data && Array.isArray(data) && data.length > 0) {
// // // // // // //           setAllProducts(data);
// // // // // // //           setSelectedProduct(data[0].product_name);
// // // // // // //         } else {
// // // // // // //           setError("No products available. Please add products first.");
// // // // // // //         }
// // // // // // //       } catch (error) {
// // // // // // //         setError("Failed to fetch products. Please check your connection.");
// // // // // // //       } finally {
// // // // // // //         setLoading(false);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     if (storeId) fetchProducts();
// // // // // // //     else {
// // // // // // //       setError("Store identification failed. Please try again.");
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   }, [storeId, userId]);

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchCustomers = async () => {
// // // // // // //       setLoadingCustomers(true);
// // // // // // //       try {
// // // // // // //         const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}&userId=${userId}`);
// // // // // // //         if (!response.ok) throw new Error("Failed to fetch customers");
// // // // // // //         const data = await response.json();
// // // // // // //         setCustomers(data.customers);
// // // // // // //       } catch (error) {
// // // // // // //         console.error("Error fetching customers:", error);
// // // // // // //       } finally {
// // // // // // //         setLoadingCustomers(false);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     if (storeId) fetchCustomers();
// // // // // // //   }, [storeId, userId]);

// // // // // // //   useEffect(() => {
// // // // // // //     if (customerPhone) {
// // // // // // //       const fetchCustomerBalance = async () => {
// // // // // // //         try {
// // // // // // //           const response = await fetch(`http://localhost:5002/api/khatabook/customers/${customerPhone}/balance`, {
// // // // // // //             headers: { storeId },
// // // // // // //           });
// // // // // // //           if (!response.ok) throw new Error("Failed to fetch customer balance");
// // // // // // //           const data = await response.json();
// // // // // // //           setCustomerBalance(data.balance);
// // // // // // //         } catch (error) {
// // // // // // //           console.error("Error fetching customer balance:", error);
// // // // // // //         }
// // // // // // //       };
// // // // // // //       fetchCustomerBalance();
// // // // // // //     }
// // // // // // //   }, [customerPhone, storeId]);

// // // // // // //   const addProduct = () => {
// // // // // // //     const selectedProductData = allProducts.find(
// // // // // // //       (p) => p.product_name === selectedProduct || p.barcode === barcodeInput
// // // // // // //     );

// // // // // // //     if (selectedProductData) {
// // // // // // //       setProducts((prevProducts) => {
// // // // // // //         const existingProduct = prevProducts.find(
// // // // // // //           (p) => p.product_name === selectedProductData.product_name
// // // // // // //         );

// // // // // // //         if (existingProduct) {
// // // // // // //           return prevProducts.map((p) =>
// // // // // // //             p.product_name === selectedProductData.product_name
// // // // // // //               ? { ...p, quantity: p.quantity + parseInt(quantity) }
// // // // // // //               : p
// // // // // // //           );
// // // // // // //         } else {
// // // // // // //           return [
// // // // // // //             ...prevProducts,
// // // // // // //             {
// // // // // // //               id: selectedProductData.id,
// // // // // // //               product_name: selectedProductData.product_name,
// // // // // // //               sale_price: parseFloat(selectedProductData.sale_price),
// // // // // // //               quantity: parseInt(quantity),
// // // // // // //               barcode: selectedProductData.barcode,
// // // // // // //             },
// // // // // // //           ];
// // // // // // //         }
// // // // // // //       });
// // // // // // //     } else {
// // // // // // //       setError("Product not found. Check barcode or name.");
// // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // //     }

// // // // // // //     setQuantity(1);
// // // // // // //     setBarcodeInput("");
// // // // // // //   };

// // // // // // //   const handleBarcodeKeyPress = (e) => {
// // // // // // //     if (e.key === "Enter" && barcodeInput) {
// // // // // // //       const product = allProducts.find((p) => p.barcode === barcodeInput);
// // // // // // //       if (product) {
// // // // // // //         setSelectedProduct(product.product_name);
// // // // // // //         addProduct();
// // // // // // //       } else {
// // // // // // //         setError("Product with this barcode not found.");
// // // // // // //         setTimeout(() => setError(null), 3000);
// // // // // // //       }
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const deleteProduct = (productName) => {
// // // // // // //     setProducts(products.filter((p) => p.product_name !== productName));
// // // // // // //   };

// // // // // // //   const totalAmount = products.reduce(
// // // // // // //     (total, product) => total + product.sale_price * product.quantity,
// // // // // // //     0
// // // // // // //   );

// // // // // // //   const sendBillToEmail = async (billContent) => {
// // // // // // //     try {
// // // // // // //       const response = await fetch("http://localhost:5002/api/send-email", {
// // // // // // //         method: "POST",
// // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // //         body: JSON.stringify({
// // // // // // //           to: customerEmail,
// // // // // // //           subject: `Invoice from ${storeName}`,
// // // // // // //           html: billContent,
// // // // // // //         }),
// // // // // // //       });

// // // // // // //       if (!response.ok) throw new Error("Failed to send email");
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error sending email:", error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const printBill = async () => {
// // // // // // //     if (!products || products.length === 0) {
// // // // // // //       setError("No items to print! Please add products to the bill.");
// // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     if (!customerName || !customerPhone) {
// // // // // // //       setError("Please enter customer details before generating the bill.");
// // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     const billData = {
// // // // // // //       products,
// // // // // // //       customerName,
// // // // // // //       customerPhone,
// // // // // // //       customerEmail,
// // // // // // //       userId,
// // // // // // //       paymentStatus,
// // // // // // //     };

// // // // // // //     try {
// // // // // // //       const response = await fetch("http://localhost:5002/api/generate-bill", {
// // // // // // //         method: "POST",
// // // // // // //         headers: {
// // // // // // //           "Content-Type": "application/json",
// // // // // // //           storeId,
// // // // // // //           userId,
// // // // // // //         },
// // // // // // //         body: JSON.stringify(billData),
// // // // // // //       });

// // // // // // //       if (!response.ok) {
// // // // // // //         const errorData = await response.json();
// // // // // // //         throw new Error(errorData.error || "Failed to generate bill");
// // // // // // //       }

// // // // // // //       const billSummary = await response.json();

// // // // // // //       const billWindow = window.open("", "Bill", "width=800,height=600");
// // // // // // //       const billContent = `
// // // // // // // <html>
// // // // // // //   <head>
// // // // // // //     <title>${storeName} - Invoice</title>
// // // // // // //     <style>
// // // // // // //       * { margin: 0; padding: 0; box-sizing: border-box; }
// // // // // // //       body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f1f6; color: #333; line-height: 1.6; }
// // // // // // //       .container { width: 80%; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); padding: 40px; overflow: hidden; }
// // // // // // //       .header { text-align: center; padding: 20px 0; background: linear-gradient(135deg, #00bcd4, #00796b); color: #ffffff; border-radius: 12px; margin-bottom: 30px; }
// // // // // // //       .header h1 { font-size: 36px; font-weight: 700; letter-spacing: 2px; }
// // // // // // //       .header p { font-size: 18px; margin-top: 10px; opacity: 0.9; }
// // // // // // //       .bill-info { display: flex; justify-content: space-between; margin-bottom: 30px; padding: 10px 0; font-size: 16px; color: #444; border-bottom: 2px solid #f4f4f4; }
// // // // // // //       .bill-info div { flex: 1; }
// // // // // // //       .bill-info .label { font-weight: 600; opacity: 0.8; }
// // // // // // //       table { width: 100%; margin-bottom: 30px; border-collapse: collapse; text-align: center; border-radius: 8px; overflow: hidden; }
// // // // // // //       th, td { padding: 15px; font-size: 16px; text-align: center; }
// // // // // // //       th { background-color: #00bcd4; color: #ffffff; text-transform: uppercase; letter-spacing: 1px; }
// // // // // // //       td { background-color: #fafafa; color: #333; }
// // // // // // //       tr:nth-child(even) td { background-color: #f5f5f5; }
// // // // // // //       .total-row { background-color: #00bcd4; color: #ffffff; font-weight: bold; font-size: 18px; }
// // // // // // //       .footer { text-align: center; margin-top: 40px; padding: 20px; background-color: #00bcd4; color: #fff; border-radius: 12px; }
// // // // // // //       .footer p { margin: 0; font-size: 16px; font-style: italic; }
// // // // // // //       .print-btn { display: inline-block; padding: 15px 30px; margin-top: 20px; background-color: #28a745; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; transition: background-color 0.3s ease-in-out; text-align: center; }
// // // // // // //       .print-btn:hover { background-color: #218838; }
// // // // // // //       @media print {
// // // // // // //         body { background-color: #fff; color: #333; }
// // // // // // //         .container { box-shadow: none; margin: 0; padding: 20px; }
// // // // // // //         .header, .footer, th, .total-row { 
// // // // // // //           background: linear-gradient(135deg, #00bcd4, #00796b) !important; 
// // // // // // //           color: #fff !important; 
// // // // // // //           -webkit-print-color-adjust: exact;
// // // // // // //           print-color-adjust: exact;
// // // // // // //         }
// // // // // // //         .footer { font-size: 14px; text-align: center; }
// // // // // // //         .print-btn { display: none; }
// // // // // // //         table th, table td { border: 1px solid #ddd; }
// // // // // // //         .bill-info { font-size: 14px; }
// // // // // // //       }
// // // // // // //     </style>
// // // // // // //   </head>
// // // // // // //   <body>
// // // // // // //     <div class="container">
// // // // // // //       <div class="header">
// // // // // // //         <h1>${storeName} - Invoice</h1>
// // // // // // //         <p>Invoice Number: ${billSummary.invoiceNumber} | Serial Number: ${billSummary.serialNumber}</p>
// // // // // // //         <p>${new Date().toLocaleString()}</p>
// // // // // // //       </div>
// // // // // // //       <div class="bill-info">
// // // // // // //         <div><p class="label">Store Address:</p><p>${storeAddress}</p></div>
// // // // // // //         <div><p class="label">Store Email:</p><p>${email}</p></div>
// // // // // // //         <div><p class="label">Store Phone:</p><p>${phoneNumber}</p></div>
// // // // // // //       </div>
// // // // // // //       <div class="bill-info">
// // // // // // //         <div><p class="label">Customer Name:</p><p>${customerName}</p></div>
// // // // // // //         <div><p class="label">Customer Phone:</p><p>${customerPhone}</p></div>
// // // // // // //       </div>
// // // // // // //       <table>
// // // // // // //         <thead>
// // // // // // //           <tr>
// // // // // // //             <th>Product Name</th>
// // // // // // //             <th>Barcode</th>
// // // // // // //             <th>Price</th>
// // // // // // //             <th>Quantity</th>
// // // // // // //             <th>Total</th>
// // // // // // //           </tr>
// // // // // // //         </thead>
// // // // // // //         <tbody>
// // // // // // //           ${products
// // // // // // //             .map(
// // // // // // //               (product) => `
// // // // // // //             <tr>
// // // // // // //               <td>${product.product_name}</td>
// // // // // // //               <td>${product.barcode || "N/A"}</td>
// // // // // // //               <td>${product.sale_price.toFixed(2)}</td>
// // // // // // //               <td>${product.quantity}</td>
// // // // // // //               <td>${(product.sale_price * product.quantity).toFixed(2)}</td>
// // // // // // //             </tr>
// // // // // // //           `
// // // // // // //             )
// // // // // // //             .join("")}
// // // // // // //           <tr class="total-row">
// // // // // // //             <td colspan="4">Total Amount</td>
// // // // // // //             <td>${totalAmount.toFixed(2)}</td>
// // // // // // //           </tr>
// // // // // // //         </tbody>
// // // // // // //       </table>
// // // // // // //       <div class="footer">
// // // // // // //         <p>Thank you for shopping with us!</p>
// // // // // // //         <button class="print-btn" onclick="window.print()">Print this Bill</button>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   </body>
// // // // // // // </html>`;

// // // // // // //       billWindow.document.write(billContent);
// // // // // // //       billWindow.document.close();

// // // // // // //       if (customerEmail) await sendBillToEmail(billContent);

// // // // // // //       setProducts([]);
// // // // // // //       setCustomerName("");
// // // // // // //       setCustomerPhone("");
// // // // // // //       setCustomerEmail("");
// // // // // // //       setPaymentStatus("paid");
// // // // // // //     } catch (error) {
// // // // // // //       setError(`Error generating bill: ${error.message}`);
// // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // //       console.error("Error in printBill:", error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleCustomerSelect = (e) => {
// // // // // // //     const selectedCustomerPhone = e.target.value;
// // // // // // //     const customer = customers.find((c) => c.phone === selectedCustomerPhone);
// // // // // // //     setSelectedCustomer(customer);
// // // // // // //     setCustomerName(customer ? customer.name : "");
// // // // // // //     setCustomerPhone(customer ? customer.phone : "");
// // // // // // //     setCustomerEmail(customer ? customer.email : "");
// // // // // // //   };

// // // // // // //   const handleNewCustomerSave = async () => {
// // // // // // //     if (!customerName || !customerPhone) {
// // // // // // //       setError("Please enter valid customer details.");
// // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     setSaving(true);
// // // // // // //     try {
// // // // // // //       const response = await fetch("http://localhost:5008/api/customers", {
// // // // // // //         method: "POST",
// // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // //         body: JSON.stringify({
// // // // // // //           name: customerName,
// // // // // // //           phone: customerPhone,
// // // // // // //           email: customerEmail,
// // // // // // //           storeId,
// // // // // // //         }),
// // // // // // //       });

// // // // // // //       if (!response.ok) throw new Error("Failed to add customer");
// // // // // // //       const newCustomer = await response.json();
// // // // // // //       setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
// // // // // // //       setError("Customer added successfully!");
// // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // //     } catch (error) {
// // // // // // //       setError("Failed to add customer.");
// // // // // // //       setTimeout(() => setError(null), 3000);
// // // // // // //     } finally {
// // // // // // //       setSaving(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const containerVariants = {
// // // // // // //     hidden: { opacity: 0 },
// // // // // // //     visible: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 } },
// // // // // // //   };

// // // // // // //   const itemVariants = {
// // // // // // //     hidden: { y: 20, opacity: 0 },
// // // // // // //     visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
// // // // // // //   };

// // // // // // //   const tableRowVariants = {
// // // // // // //     hidden: { opacity: 0, x: -20 },
// // // // // // //     visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
// // // // // // //     exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <motion.div
// // // // // // //       className="max-w-5xl mx-auto p-8 bg-white shadow-2xl rounded-lg"
// // // // // // //       style={{
// // // // // // //         background: "linear-gradient(to bottom, #ffffff, #f9fafb)",
// // // // // // //         boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05)",
// // // // // // //       }}
// // // // // // //       initial="hidden"
// // // // // // //       animate="visible"
// // // // // // //       variants={containerVariants}
// // // // // // //     >
// // // // // // //       <motion.div className="mb-8 text-center" variants={itemVariants}>
// // // // // // //         <h1 className="text-4xl font-bold mb-2 text-blue-600">INVOICE GENERATOR</h1>
// // // // // // //         <div className="h-1 w-32 bg-blue-600 mx-auto rounded-full mb-4"></div>
// // // // // // //         <h2 className="text-2xl font-semibold text-gray-700">{storeName} Store</h2>
// // // // // // //       </motion.div>

// // // // // // //       {loading ? (
// // // // // // //         <div className="flex justify-center items-center py-12">
// // // // // // //           <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // // // // //         </div>
// // // // // // //       ) : (
// // // // // // //         <>
// // // // // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Product Selection</h3>
// // // // // // //             <div className="flex flex-col md:flex-row gap-4">
// // // // // // //               <div className="flex-1">
// // // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Scan Barcode:</label>
// // // // // // //                 <input
// // // // // // //                   type="text"
// // // // // // //                   value={barcodeInput}
// // // // // // //                   onChange={(e) => setBarcodeInput(e.target.value)}
// // // // // // //                   onKeyPress={handleBarcodeKeyPress}
// // // // // // //                   placeholder="Scan or enter barcode"
// // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //               <div className="flex-1">
// // // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Or Select Product:</label>
// // // // // // //                 <select
// // // // // // //                   value={selectedProduct}
// // // // // // //                   onChange={(e) => setSelectedProduct(e.target.value)}
// // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // //                 >
// // // // // // //                   {allProducts.map((product) => (
// // // // // // //                     <option key={product.id} value={product.product_name}>
// // // // // // //                       {product.product_name} - ${parseFloat(product.sale_price).toFixed(2)} (Barcode: {product.barcode})
// // // // // // //                     </option>
// // // // // // //                   ))}
// // // // // // //                 </select>
// // // // // // //               </div>
// // // // // // //               <div className="flex-1">
// // // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
// // // // // // //                 <input
// // // // // // //                   type="number"
// // // // // // //                   value={quantity}
// // // // // // //                   min="1"
// // // // // // //                   onChange={(e) => setQuantity(e.target.value)}
// // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //               <div className="flex items-end">
// // // // // // //                 <motion.button
// // // // // // //                   onClick={addProduct}
// // // // // // //                   className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
// // // // // // //                   whileHover={{ scale: 1.05 }}
// // // // // // //                   whileTap={{ scale: 0.98 }}
// // // // // // //                 >
// // // // // // //                   Add to Bill
// // // // // // //                 </motion.button>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </motion.div>

// // // // // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Customer Information</h3>
// // // // // // //             {loadingCustomers ? (
// // // // // // //               <div className="flex justify-center items-center py-4">
// // // // // // //                 <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // // // // //               </div>
// // // // // // //             ) : (
// // // // // // //               <>
// // // // // // //                 <div className="mb-4">
// // // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Select Existing Customer:</label>
// // // // // // //                   <select
// // // // // // //                     value={customerPhone}
// // // // // // //                     onChange={handleCustomerSelect}
// // // // // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // //                   >
// // // // // // //                     <option value="">Select Customer</option>
// // // // // // //                     {customers.map((customer) => (
// // // // // // //                       <option key={customer.phone} value={customer.phone}>
// // // // // // //                         {customer.name} - {customer.phone}
// // // // // // //                       </option>
// // // // // // //                     ))}
// // // // // // //                   </select>
// // // // // // //                 </div>
// // // // // // //                 {!selectedCustomer && (
// // // // // // //                   <motion.div
// // // // // // //                     className="p-4 bg-gray-50 rounded-lg mt-4"
// // // // // // //                     initial={{ opacity: 0, height: 0 }}
// // // // // // //                     animate={{ opacity: 1, height: "auto" }}
// // // // // // //                     transition={{ duration: 0.3 }}
// // // // // // //                   >
// // // // // // //                     <h4 className="text-md font-medium mb-3 text-gray-700">New Customer</h4>
// // // // // // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// // // // // // //                       <div>
// // // // // // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name:</label>
// // // // // // //                         <input
// // // // // // //                           type="text"
// // // // // // //                           value={customerName}
// // // // // // //                           onChange={(e) => setCustomerName(e.target.value)}
// // // // // // //                           placeholder="Full Name"
// // // // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // //                         />
// // // // // // //                       </div>
// // // // // // //                       <div>
// // // // // // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number:</label>
// // // // // // //                         <input
// // // // // // //                           type="text"
// // // // // // //                           value={customerPhone}
// // // // // // //                           onChange={(e) => setCustomerPhone(e.target.value)}
// // // // // // //                           placeholder="Phone Number"
// // // // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // //                         />
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                     <motion.button
// // // // // // //                       onClick={handleNewCustomerSave}
// // // // // // //                       className="w-full md:w-auto px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-200 flex items-center justify-center"
// // // // // // //                       whileHover={{ scale: 1.02 }}
// // // // // // //                       whileTap={{ scale: 0.98 }}
// // // // // // //                       disabled={saving}
// // // // // // //                     >
// // // // // // //                       {saving ? (
// // // // // // //                         <>
// // // // // // //                           <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // // // // //                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // // // //                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // // // //                           </svg>
// // // // // // //                           Saving Customer...
// // // // // // //                         </>
// // // // // // //                       ) : "Save New Customer"}
// // // // // // //                     </motion.button>
// // // // // // //                   </motion.div>
// // // // // // //                 )}
// // // // // // //               </>
// // // // // // //             )}
// // // // // // //           </motion.div>

// // // // // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100 overflow-hidden" variants={itemVariants}>
// // // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Bill Items</h3>
// // // // // // //             <div className="overflow-x-auto" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05) inset" }}>
// // // // // // //               <table className="w-full mb-4">
// // // // // // //                 <thead>
// // // // // // //                   <tr className="bg-blue-500 text-white">
// // // // // // //                     <th className="p-3 font-semibold text-left">Product Name</th>
// // // // // // //                     <th className="p-3 font-semibold text-left">Barcode</th>
// // // // // // //                     <th className="p-3 font-semibold text-right">Price</th>
// // // // // // //                     <th className="p-3 font-semibold text-center">Quantity</th>
// // // // // // //                     <th className="p-3 font-semibold text-right">Total</th>
// // // // // // //                     <th className="p-3 font-semibold text-center">Action</th>
// // // // // // //                   </tr>
// // // // // // //                 </thead>
// // // // // // //                 <tbody>
// // // // // // //                   <AnimatePresence>
// // // // // // //                     {products.length > 0 ? (
// // // // // // //                       products.map((product) => (
// // // // // // //                         <motion.tr
// // // // // // //                           key={product.id}
// // // // // // //                           className="border-b hover:bg-gray-50 transition-colors"
// // // // // // //                           variants={tableRowVariants}
// // // // // // //                           initial="hidden"
// // // // // // //                           animate="visible"
// // // // // // //                           exit="exit"
// // // // // // //                         >
// // // // // // //                           <td className="p-3 text-left">{product.product_name}</td>
// // // // // // //                           <td className="p-3 text-left">{product.barcode || "N/A"}</td>
// // // // // // //                           <td className="p-3 text-right">${product.sale_price.toFixed(2)}</td>
// // // // // // //                           <td className="p-3 text-center">{product.quantity}</td>
// // // // // // //                           <td className="p-3 text-right font-medium">
// // // // // // //                             ${(product.sale_price * product.quantity).toFixed(2)}
// // // // // // //                           </td>
// // // // // // //                           <td className="p-3 text-center">
// // // // // // //                             <motion.button
// // // // // // //                               onClick={() => deleteProduct(product.product_name)}
// // // // // // //                               className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
// // // // // // //                               whileHover={{ scale: 1.05 }}
// // // // // // //                               whileTap={{ scale: 0.95 }}
// // // // // // //                             >
// // // // // // //                               Remove
// // // // // // //                             </motion.button>
// // // // // // //                           </td>
// // // // // // //                         </motion.tr>
// // // // // // //                       ))
// // // // // // //                     ) : (
// // // // // // //                       <motion.tr variants={tableRowVariants} initial="hidden" animate="visible">
// // // // // // //                         <td colSpan="6" className="p-4 text-center text-gray-500">
// // // // // // //                           No products added to the bill yet.
// // // // // // //                         </td>
// // // // // // //                       </motion.tr>
// // // // // // //                     )}
// // // // // // //                   </AnimatePresence>
// // // // // // //                 </tbody>
// // // // // // //               </table>
// // // // // // //             </div>
// // // // // // //             {products.length > 0 && (
// // // // // // //               <motion.div
// // // // // // //                 className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
// // // // // // //                 initial={{ opacity: 0, y: 20 }}
// // // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // // //                 transition={{ duration: 0.3 }}
// // // // // // //               >
// // // // // // //                 <div className="text-lg font-semibold text-gray-800">Total Amount:</div>
// // // // // // //                 <div className="text-2xl font-bold text-blue-600">${totalAmount.toFixed(2)}</div>
// // // // // // //               </motion.div>
// // // // // // //             )}
// // // // // // //           </motion.div>

// // // // // // //           <motion.div className="text-center" variants={itemVariants}>
// // // // // // //             <motion.button
// // // // // // //               onClick={printBill}
// // // // // // //               className="px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300"
// // // // // // //               whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
// // // // // // //               whileTap={{ scale: 0.98 }}
// // // // // // //             >
// // // // // // //               Generate & Print Invoice
// // // // // // //             </motion.button>
// // // // // // //           </motion.div>

// // // // // // //           <div className="mb-4">
// // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status:</label>
// // // // // // //             <select
// // // // // // //               value={paymentStatus}
// // // // // // //               onChange={(e) => setPaymentStatus(e.target.value)}
// // // // // // //               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // //             >
// // // // // // //               <option value="paid">Paid</option>
// // // // // // //               <option value="unpaid">Unpaid</option>
// // // // // // //             </select>
// // // // // // //           </div>

// // // // // // //           {customerPhone && (
// // // // // // //             <div className="mb-4">
// // // // // // //               <p className="text-sm font-medium text-gray-700">Customer Balance:</p>
// // // // // // //               <p className={`text-lg font-bold ${customerBalance >= 0 ? "text-green-600" : "text-red-600"}`}>
// // // // // // //                 ${customerBalance.toFixed(2)}
// // // // // // //               </p>
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           <div className="mb-4">
// // // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Customer Email (for digital receipt):</label>
// // // // // // //             <input
// // // // // // //               type="email"
// // // // // // //               value={customerEmail}
// // // // // // //               onChange={(e) => setCustomerEmail(e.target.value)}
// // // // // // //               placeholder="Enter customer email"
// // // // // // //               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //         </>
// // // // // // //       )}

// // // // // // //       <AnimatePresence>
// // // // // // //         {error && (
// // // // // // //           <motion.div
// // // // // // //             className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${error.includes("successfully") ? "bg-green-500" : "bg-red-500"} text-white max-w-sm`}
// // // // // // //             initial={{ opacity: 0, y: 50, x: 0 }}
// // // // // // //             animate={{ opacity: 1, y: 0, x: 0 }}
// // // // // // //             exit={{ opacity: 0, y: 50 }}
// // // // // // //             transition={{ duration: 0.3 }}
// // // // // // //           >
// // // // // // //             {error}
// // // // // // //           </motion.div>
// // // // // // //         )}
// // // // // // //       </AnimatePresence>
// // // // // // //     </motion.div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Billing;
// // // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // // import { StoreContext } from "./StoreContext";
// // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // const Billing = () => {
// // // // // //   const [products, setProducts] = useState([]);
// // // // // //   const [allProducts, setAllProducts] = useState([]);
// // // // // //   const [selectedProduct, setSelectedProduct] = useState("");
// // // // // //   const [barcodeInput, setBarcodeInput] = useState("");
// // // // // //   const [quantity, setQuantity] = useState(1);
// // // // // //   const [error, setError] = useState(null);
// // // // // //   const [customerName, setCustomerName] = useState("");
// // // // // //   const [customerPhone, setCustomerPhone] = useState("");
// // // // // //   const [customerEmail, setCustomerEmail] = useState("");
// // // // // //   const [customers, setCustomers] = useState([]);
// // // // // //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [loadingCustomers, setLoadingCustomers] = useState(true);
// // // // // //   const [saving, setSaving] = useState(false);
// // // // // //   const [paymentStatus, setPaymentStatus] = useState("paid");
// // // // // //   const [customerBalance, setCustomerBalance] = useState(0);
// // // // // //   const { storeName, storeId } = useContext(StoreContext);
// // // // // //   const storeAddress = localStorage.getItem("storeAddress") || "123 Retail St, City, Country";
// // // // // //   const email = localStorage.getItem("email") || "store@example.com";
// // // // // //   const phoneNumber = localStorage.getItem("phoneNumber") || "+1234567890";
// // // // // //   const userId = localStorage.getItem("userId") || "1";

// // // // // //   useEffect(() => {
// // // // // //     const fetchProducts = async () => {
// // // // // //       setLoading(true);
// // // // // //       try {
// // // // // //         const response = await fetch("http://localhost:5002/api/products", {
// // // // // //           headers: { storeId, userId },
// // // // // //         });
// // // // // //         if (!response.ok) throw new Error("Failed to fetch products");
// // // // // //         const data = await response.json();
// // // // // //         if (data && Array.isArray(data) && data.length > 0) {
// // // // // //           setAllProducts(data);
// // // // // //           setSelectedProduct(data[0].product_name);
// // // // // //         } else {
// // // // // //           setError("No products available. Please add products first.");
// // // // // //         }
// // // // // //       } catch (error) {
// // // // // //         setError("Failed to fetch products. Please check your connection.");
// // // // // //       } finally {
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     };

// // // // // //     if (storeId) fetchProducts();
// // // // // //     else {
// // // // // //       setError("Store identification failed. Please try again.");
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   }, [storeId, userId]);

// // // // // //   useEffect(() => {
// // // // // //     const fetchCustomers = async () => {
// // // // // //       setLoadingCustomers(true);
// // // // // //       try {
// // // // // //         const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}&userId=${userId}`);
// // // // // //         if (!response.ok) throw new Error("Failed to fetch customers");
// // // // // //         const data = await response.json();
// // // // // //         setCustomers(data.customers);
// // // // // //       } catch (error) {
// // // // // //         console.error("Error fetching customers:", error);
// // // // // //       } finally {
// // // // // //         setLoadingCustomers(false);
// // // // // //       }
// // // // // //     };

// // // // // //     if (storeId) fetchCustomers();
// // // // // //   }, [storeId, userId]);

// // // // // //   useEffect(() => {
// // // // // //     if (customerPhone) {
// // // // // //       const fetchCustomerBalance = async () => {
// // // // // //         try {
// // // // // //           const response = await fetch(`http://localhost:5002/api/khatabook/customers/${customerPhone}/balance`, {
// // // // // //             headers: { storeId },
// // // // // //           });
// // // // // //           if (!response.ok) throw new Error("Failed to fetch customer balance");
// // // // // //           const data = await response.json();
// // // // // //           setCustomerBalance(data.balance);
// // // // // //         } catch (error) {
// // // // // //           console.error("Error fetching customer balance:", error);
// // // // // //         }
// // // // // //       };
// // // // // //       fetchCustomerBalance();
// // // // // //     }
// // // // // //   }, [customerPhone, storeId]);

// // // // // //   const addProduct = () => {
// // // // // //     const selectedProductData = allProducts.find(
// // // // // //       (p) => p.product_name === selectedProduct || p.barcode === barcodeInput
// // // // // //     );

// // // // // //     if (selectedProductData) {
// // // // // //       setProducts((prevProducts) => {
// // // // // //         const existingProduct = prevProducts.find(
// // // // // //           (p) => p.product_name === selectedProductData.product_name
// // // // // //         );

// // // // // //         if (existingProduct) {
// // // // // //           return prevProducts.map((p) =>
// // // // // //             p.product_name === selectedProductData.product_name
// // // // // //               ? { ...p, quantity: p.quantity + parseInt(quantity) }
// // // // // //               : p
// // // // // //           );
// // // // // //         } else {
// // // // // //           return [
// // // // // //             ...prevProducts,
// // // // // //             {
// // // // // //               id: selectedProductData.id,
// // // // // //               product_name: selectedProductData.product_name,
// // // // // //               sale_price: parseFloat(selectedProductData.sale_price),
// // // // // //               quantity: parseInt(quantity),
// // // // // //               barcode: selectedProductData.barcode,
// // // // // //             },
// // // // // //           ];
// // // // // //         }
// // // // // //       });
// // // // // //     } else {
// // // // // //       setError("Product not found. Check barcode or name.");
// // // // // //       setTimeout(() => setError(null), 3000);
// // // // // //     }

// // // // // //     setQuantity(1);
// // // // // //     setBarcodeInput("");
// // // // // //   };

// // // // // //   const handleBarcodeKeyPress = (e) => {
// // // // // //     if (e.key === "Enter" && barcodeInput) {
// // // // // //       const product = allProducts.find((p) => p.barcode === barcodeInput);
// // // // // //       if (product) {
// // // // // //         setSelectedProduct(product.product_name);
// // // // // //         addProduct();
// // // // // //       } else {
// // // // // //         setError("Product with this barcode not found.");
// // // // // //         setTimeout(() => setError(null), 3000);
// // // // // //       }
// // // // // //     }
// // // // // //   };

// // // // // //   const deleteProduct = (productName) => {
// // // // // //     setProducts(products.filter((p) => p.product_name !== productName));
// // // // // //   };

// // // // // //   const totalAmount = products.reduce(
// // // // // //     (total, product) => total + product.sale_price * product.quantity,
// // // // // //     0
// // // // // //   );

// // // // // //   const sendBillToEmail = async (billContent) => {
// // // // // //     try {
// // // // // //       const response = await fetch("http://localhost:5002/api/send-email", {
// // // // // //         method: "POST",
// // // // // //         headers: { "Content-Type": "application/json" },
// // // // // //         body: JSON.stringify({
// // // // // //           to: customerEmail,
// // // // // //           subject: `Invoice from ${storeName}`,
// // // // // //           html: billContent,
// // // // // //         }),
// // // // // //       });

// // // // // //       if (!response.ok) throw new Error("Failed to send email");
// // // // // //     } catch (error) {
// // // // // //       console.error("Error sending email:", error);
// // // // // //     }
// // // // // //   };

// // // // // //   const printBill = async () => {
// // // // // //     if (!products || products.length === 0) {
// // // // // //       setError("No items to print! Please add products to the bill.");
// // // // // //       setTimeout(() => setError(null), 3000);
// // // // // //       return;
// // // // // //     }

// // // // // //     if (!customerName || !customerPhone) {
// // // // // //       setError("Please enter customer details before generating the bill.");
// // // // // //       setTimeout(() => setError(null), 3000);
// // // // // //       return;
// // // // // //     }

// // // // // //     const billData = {
// // // // // //       products,
// // // // // //       customerName,
// // // // // //       customerPhone,
// // // // // //       customerEmail,
// // // // // //       userId,
// // // // // //       paymentStatus,
// // // // // //     };

// // // // // //     try {
// // // // // //       const response = await fetch("http://localhost:5002/api/generate-bill", {
// // // // // //         method: "POST",
// // // // // //         headers: {
// // // // // //           "Content-Type": "application/json",
// // // // // //           storeId,
// // // // // //           userId,
// // // // // //         },
// // // // // //         body: JSON.stringify(billData),
// // // // // //       });

// // // // // //       if (!response.ok) {
// // // // // //         const errorData = await response.json();
// // // // // //         throw new Error(errorData.error || "Failed to generate bill");
// // // // // //       }

// // // // // //       const billSummary = await response.json();

// // // // // //       const billWindow = window.open("", "Bill", "width=800,height=600");
// // // // // //       const billContent = `
// // // // // // <html>
// // // // // //   <head>
// // // // // //     <title>${storeName} - Invoice</title>
// // // // // //     <style>
// // // // // //       * { margin: 0; padding: 0; box-sizing: border-box; }
// // // // // //       body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f1f6; color: #333; line-height: 1.6; }
// // // // // //       .container { width: 80%; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); padding: 40px; overflow: hidden; }
// // // // // //       .header { text-align: center; padding: 20px 0; background: linear-gradient(135deg, #00bcd4, #00796b); color: #ffffff; border-radius: 12px; margin-bottom: 30px; }
// // // // // //       .header h1 { font-size: 36px; font-weight: 700; letter-spacing: 2px; }
// // // // // //       .header p { font-size: 18px; margin-top: 10px; opacity: 0.9; }
// // // // // //       .bill-info { display: flex; justify-content: space-between; margin-bottom: 30px; padding: 10px 0; font-size: 16px; color: #444; border-bottom: 2px solid #f4f4f4; }
// // // // // //       .bill-info div { flex: 1; }
// // // // // //       .bill-info .label { font-weight: 600; opacity: 0.8; }
// // // // // //       table { width: 100%; margin-bottom: 30px; border-collapse: collapse; text-align: center; border-radius: 8px; overflow: hidden; }
// // // // // //       th, td { padding: 15px; font-size: 16px; text-align: center; }
// // // // // //       th { background-color: #00bcd4; color: #ffffff; text-transform: uppercase; letter-spacing: 1px; }
// // // // // //       td { background-color: #fafafa; color: #333; }
// // // // // //       tr:nth-child(even) td { background-color: #f5f5f5; }
// // // // // //       .total-row { background-color: #00bcd4; color: #ffffff; font-weight: bold; font-size: 18px; }
// // // // // //       .footer { text-align: center; margin-top: 40px; padding: 20px; background-color: #00bcd4; color: #fff; border-radius: 12px; }
// // // // // //       .footer p { margin: 0; font-size: 16px; font-style: italic; }
// // // // // //       .print-btn { display: inline-block; padding: 15px 30px; margin-top: 20px; background-color: #28a745; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; transition: background-color 0.3s ease-in-out; text-align: center; }
// // // // // //       .print-btn:hover { background-color: #218838; }
// // // // // //       @media print {
// // // // // //         body { background-color: #fff; color: #333; }
// // // // // //         .container { box-shadow: none; margin: 0; padding: 20px; }
// // // // // //         .header, .footer, th, .total-row { 
// // // // // //           background: linear-gradient(135deg, #00bcd4, #00796b) !important; 
// // // // // //           color: #fff !important; 
// // // // // //           -webkit-print-color-adjust: exact;
// // // // // //           print-color-adjust: exact;
// // // // // //         }
// // // // // //         .footer { font-size: 14px; text-align: center; }
// // // // // //         .print-btn { display: none; }
// // // // // //         table th, table td { border: 1px solid #ddd; }
// // // // // //         .bill-info { font-size: 14px; }
// // // // // //       }
// // // // // //     </style>
// // // // // //   </head>
// // // // // //   <body>
// // // // // //     <div class="container">
// // // // // //       <div class="header">
// // // // // //         <h1>${storeName} - Invoice</h1>
// // // // // //         <p>Invoice Number: ${billSummary.invoiceNumber}</p>
// // // // // //         <p>Serial Number: ${billSummary.serialNumber}</p>
// // // // // //         <p>${new Date().toLocaleString()}</p>
// // // // // //       </div>
// // // // // //       <div class="bill-info">
// // // // // //         <div><p class="label">Store Address:</p><p>${storeAddress}</p></div>
// // // // // //         <div><p class="label">Store Email:</p><p>${email}</p></div>
// // // // // //         <div><p class="label">Store Phone:</p><p>${phoneNumber}</p></div>
// // // // // //       </div>
// // // // // //       <div class="bill-info">
// // // // // //         <div><p class="label">Customer Name:</p><p>${customerName}</p></div>
// // // // // //         <div><p class="label">Customer Phone:</p><p>${customerPhone}</p></div>
// // // // // //       </div>
// // // // // //       <table>
// // // // // //         <thead>
// // // // // //           <tr>
// // // // // //             <th>Product Name</th>
// // // // // //             <th>Barcode</th>
// // // // // //             <th>Price</th>
// // // // // //             <th>Quantity</th>
// // // // // //             <th>Total</th>
// // // // // //           </tr>
// // // // // //         </thead>
// // // // // //         <tbody>
// // // // // //           ${products
// // // // // //             .map(
// // // // // //               (product) => `
// // // // // //             <tr>
// // // // // //               <td>${product.product_name}</td>
// // // // // //               <td>${product.barcode || "N/A"}</td>
// // // // // //               <td>${product.sale_price.toFixed(2)}</td>
// // // // // //               <td>${product.quantity}</td>
// // // // // //               <td>${(product.sale_price * product.quantity).toFixed(2)}</td>
// // // // // //             </tr>
// // // // // //           `
// // // // // //             )
// // // // // //             .join("")}
// // // // // //           <tr class="total-row">
// // // // // //             <td colspan="4">Total Amount</td>
// // // // // //             <td>${totalAmount.toFixed(2)}</td>
// // // // // //           </tr>
// // // // // //         </tbody>
// // // // // //       </table>
// // // // // //       <div class="footer">
// // // // // //         <p>Thank you for shopping with us!</p>
// // // // // //         <button class="print-btn" onclick="window.print()">Print this Bill</button>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   </body>
// // // // // // </html>`;

// // // // // //       billWindow.document.write(billContent);
// // // // // //       billWindow.document.close();

// // // // // //       if (customerEmail) await sendBillToEmail(billContent);

// // // // // //       setProducts([]);
// // // // // //       setCustomerName("");
// // // // // //       setCustomerPhone("");
// // // // // //       setCustomerEmail("");
// // // // // //       setPaymentStatus("paid");
// // // // // //     } catch (error) {
// // // // // //       setError(`Error generating bill: ${error.message}`);
// // // // // //       setTimeout(() => setError(null), 3000);
// // // // // //       console.error("Error in printBill:", error);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleCustomerSelect = (e) => {
// // // // // //     const selectedCustomerPhone = e.target.value;
// // // // // //     const customer = customers.find((c) => c.phone === selectedCustomerPhone);
// // // // // //     setSelectedCustomer(customer);
// // // // // //     setCustomerName(customer ? customer.name : "");
// // // // // //     setCustomerPhone(customer ? customer.phone : "");
// // // // // //     setCustomerEmail(customer ? customer.email : "");
// // // // // //   };

// // // // // //   const handleNewCustomerSave = async () => {
// // // // // //     if (!customerName || !customerPhone) {
// // // // // //       setError("Please enter valid customer details.");
// // // // // //       setTimeout(() => setError(null), 3000);
// // // // // //       return;
// // // // // //     }

// // // // // //     setSaving(true);
// // // // // //     try {
// // // // // //       const response = await fetch("http://localhost:5008/api/customers", {
// // // // // //         method: "POST",
// // // // // //         headers: { "Content-Type": "application/json" },
// // // // // //         body: JSON.stringify({
// // // // // //           name: customerName,
// // // // // //           phone: customerPhone,
// // // // // //           email: customerEmail,
// // // // // //           storeId,
// // // // // //         }),
// // // // // //       });

// // // // // //       if (!response.ok) throw new Error("Failed to add customer");
// // // // // //       const newCustomer = await response.json();
// // // // // //       setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
// // // // // //       setError("Customer added successfully!");
// // // // // //       setTimeout(() => setError(null), 3000);
// // // // // //     } catch (error) {
// // // // // //       setError("Failed to add customer.");
// // // // // //       setTimeout(() => setError(null), 3000);
// // // // // //     } finally {
// // // // // //       setSaving(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const containerVariants = {
// // // // // //     hidden: { opacity: 0 },
// // // // // //     visible: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 } },
// // // // // //   };

// // // // // //   const itemVariants = {
// // // // // //     hidden: { y: 20, opacity: 0 },
// // // // // //     visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
// // // // // //   };

// // // // // //   const tableRowVariants = {
// // // // // //     hidden: { opacity: 0, x: -20 },
// // // // // //     visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
// // // // // //     exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
// // // // // //   };

// // // // // //   return (
// // // // // //     <motion.div
// // // // // //       className="max-w-5xl mx-auto p-8 bg-white shadow-2xl rounded-lg"
// // // // // //       style={{
// // // // // //         background: "linear-gradient(to bottom, #ffffff, #f9fafb)",
// // // // // //         boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05)",
// // // // // //       }}
// // // // // //       initial="hidden"
// // // // // //       animate="visible"
// // // // // //       variants={containerVariants}
// // // // // //     >
// // // // // //       <motion.div className="mb-8 text-center" variants={itemVariants}>
// // // // // //         <h1 className="text-4xl font-bold mb-2 text-blue-600">INVOICE GENERATOR</h1>
// // // // // //         <div className="h-1 w-32 bg-blue-600 mx-auto rounded-full mb-4"></div>
// // // // // //         <h2 className="text-2xl font-semibold text-gray-700">{storeName} Store</h2>
// // // // // //       </motion.div>

// // // // // //       {loading ? (
// // // // // //         <div className="flex justify-center items-center py-12">
// // // // // //           <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // // // //         </div>
// // // // // //       ) : (
// // // // // //         <>
// // // // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Product Selection</h3>
// // // // // //             <div className="flex flex-col md:flex-row gap-4">
// // // // // //               <div className="flex-1">
// // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Scan Barcode:</label>
// // // // // //                 <input
// // // // // //                   type="text"
// // // // // //                   value={barcodeInput}
// // // // // //                   onChange={(e) => setBarcodeInput(e.target.value)}
// // // // // //                   onKeyPress={handleBarcodeKeyPress}
// // // // // //                   placeholder="Scan or enter barcode"
// // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div className="flex-1">
// // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Or Select Product:</label>
// // // // // //                 <select
// // // // // //                   value={selectedProduct}
// // // // // //                   onChange={(e) => setSelectedProduct(e.target.value)}
// // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // //                 >
// // // // // //                   {allProducts.map((product) => (
// // // // // //                     <option key={product.id} value={product.product_name}>
// // // // // //                       ${product.product_name} - ${parseFloat(product.sale_price).toFixed(2)} (Barcode: ${product.barcode})
// // // // // //                     </option>
// // // // // //                   ))}
// // // // // //                 </select>
// // // // // //               </div>
// // // // // //               <div className="flex-1">
// // // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
// // // // // //                 <input
// // // // // //                   type="number"
// // // // // //                   value={quantity}
// // // // // //                   min="1"
// // // // // //                   onChange={(e) => setQuantity(e.target.value)}
// // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div className="flex items-end">
// // // // // //                 <motion.button
// // // // // //                   onClick={addProduct}
// // // // // //                   className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
// // // // // //                   whileHover={{ scale: 1.05 }}
// // // // // //                   whileTap={{ scale: 0.98 }}
// // // // // //                 >
// // // // // //                   Add to Bill
// // // // // //                 </motion.button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </motion.div>

// // // // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Customer Information</h3>
// // // // // //             {loadingCustomers ? (
// // // // // //               <div className="flex justify-center items-center py-4">
// // // // // //                 <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // // // //               </div>
// // // // // //             ) : (
// // // // // //               <>
// // // // // //                 <div className="mb-4">
// // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Select Existing Customer:</label>
// // // // // //                   <select
// // // // // //                     value={customerPhone}
// // // // // //                     onChange={handleCustomerSelect}
// // // // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // //                   >
// // // // // //                     <option value="">Select Customer</option>
// // // // // //                     {customers.map((customer) => (
// // // // // //                       <option key={customer.phone} value={customer.phone}>
// // // // // //                         ${customer.name} - ${customer.phone}
// // // // // //                       </option>
// // // // // //                     ))}
// // // // // //                   </select>
// // // // // //                 </div>
// // // // // //                 {!selectedCustomer && (
// // // // // //                   <motion.div
// // // // // //                     className="p-4 bg-gray-50 rounded-lg mt-4"
// // // // // //                     initial={{ opacity: 0, height: 0 }}
// // // // // //                     animate={{ opacity: 1, height: "auto" }}
// // // // // //                     transition={{ duration: 0.3 }}
// // // // // //                   >
// // // // // //                     <h4 className="text-md font-medium mb-3 text-gray-700">New Customer</h4>
// // // // // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// // // // // //                       <div>
// // // // // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name:</label>
// // // // // //                         <input
// // // // // //                           type="text"
// // // // // //                           value={customerName}
// // // // // //                           onChange={(e) => setCustomerName(e.target.value)}
// // // // // //                           placeholder="Full Name"
// // // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // //                         />
// // // // // //                       </div>
// // // // // //                       <div>
// // // // // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number:</label>
// // // // // //                         <input
// // // // // //                           type="text"
// // // // // //                           value={customerPhone}
// // // // // //                           onChange={(e) => setCustomerPhone(e.target.value)}
// // // // // //                           placeholder="Phone Number"
// // // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // //                         />
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                     <motion.button
// // // // // //                       onClick={handleNewCustomerSave}
// // // // // //                       className="w-full md:w-auto px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-200 flex items-center justify-center"
// // // // // //                       whileHover={{ scale: 1.02 }}
// // // // // //                       whileTap={{ scale: 0.98 }}
// // // // // //                       disabled={saving}
// // // // // //                     >
// // // // // //                       {saving ? (
// // // // // //                         <>
// // // // // //                           <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // // // //                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // // //                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // // //                           </svg>
// // // // // //                           Saving Customer...
// // // // // //                         </>
// // // // // //                       ) : "Save New Customer"}
// // // // // //                     </motion.button>
// // // // // //                   </motion.div>
// // // // // //                 )}
// // // // // //               </>
// // // // // //             )}
// // // // // //           </motion.div>

// // // // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100 overflow-hidden" variants={itemVariants}>
// // // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Bill Items</h3>
// // // // // //             <div className="overflow-x-auto" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05) inset" }}>
// // // // // //               <table className="w-full mb-4">
// // // // // //                 <thead>
// // // // // //                   <tr className="bg-blue-500 text-white">
// // // // // //                     <th className="p-3 font-semibold text-left">Product Name</th>
// // // // // //                     <th className="p-3 font-semibold text-left">Barcode</th>
// // // // // //                     <th className="p-3 font-semibold text-right">Price</th>
// // // // // //                     <th className="p-3 font-semibold text-center">Quantity</th>
// // // // // //                     <th className="p-3 font-semibold text-right">Total</th>
// // // // // //                     <th className="p-3 font-semibold text-center">Action</th>
// // // // // //                   </tr>
// // // // // //                 </thead>
// // // // // //                 <tbody>
// // // // // //                   <AnimatePresence>
// // // // // //                     {products.length > 0 ? (
// // // // // //                       products.map((product) => (
// // // // // //                         <motion.tr
// // // // // //                           key={product.id}
// // // // // //                           className="border-b hover:bg-gray-50 transition-colors"
// // // // // //                           variants={tableRowVariants}
// // // // // //                           initial="hidden"
// // // // // //                           animate="visible"
// // // // // //                           exit="exit"
// // // // // //                         >
// // // // // //                           <td className="p-3 text-left">${product.product_name}</td>
// // // // // //                           <td className="p-3 text-left">${product.barcode || "N/A"}</td>
// // // // // //                           <td className="p-3 text-right">$${product.sale_price.toFixed(2)}</td>
// // // // // //                           <td className="p-3 text-center">${product.quantity}</td>
// // // // // //                           <td className="p-3 text-right font-medium">$${(product.sale_price * product.quantity).toFixed(2)}</td>
// // // // // //                           <td className="p-3 text-center">
// // // // // //                             <motion.button
// // // // // //                               onClick={() => deleteProduct(product.product_name)}
// // // // // //                               className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
// // // // // //                               whileHover={{ scale: 1.05 }}
// // // // // //                               whileTap={{ scale: 0.95 }}
// // // // // //                             >
// // // // // //                               Remove
// // // // // //                             </motion.button>
// // // // // //                           </td>
// // // // // //                         </motion.tr>
// // // // // //                       ))
// // // // // //                     ) : (
// // // // // //                       <motion.tr variants={tableRowVariants} initial="hidden" animate="visible">
// // // // // //                         <td colSpan="6" className="p-4 text-center text-gray-500">
// // // // // //                           No products added to the bill yet.
// // // // // //                         </td>
// // // // // //                       </motion.tr>
// // // // // //                     )}
// // // // // //                   </AnimatePresence>
// // // // // //                 </tbody>
// // // // // //               </table>
// // // // // //             </div>
// // // // // //             {products.length > 0 && (
// // // // // //               <motion.div
// // // // // //                 className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
// // // // // //                 initial={{ opacity: 0, y: 20 }}
// // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // //                 transition={{ duration: 0.3 }}
// // // // // //               >
// // // // // //                 <div className="text-lg font-semibold text-gray-800">Total Amount:</div>
// // // // // //                 <div className="text-2xl font-bold text-blue-600">$${totalAmount.toFixed(2)}</div>
// // // // // //               </motion.div>
// // // // // //             )}
// // // // // //           </motion.div>

// // // // // //           <motion.div className="text-center" variants={itemVariants}>
// // // // // //             <motion.button
// // // // // //               onClick={printBill}
// // // // // //               className="px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300"
// // // // // //               whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
// // // // // //               whileTap={{ scale: 0.98 }}
// // // // // //             >
// // // // // //               Generate & Print Invoice
// // // // // //             </motion.button>
// // // // // //           </motion.div>

// // // // // //           <div className="mb-4">
// // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status:</label>
// // // // // //             <select
// // // // // //               value={paymentStatus}
// // // // // //               onChange={(e) => setPaymentStatus(e.target.value)}
// // // // // //               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // //             >
// // // // // //               <option value="paid">Paid</option>
// // // // // //               <option value="unpaid">Unpaid</option>
// // // // // //             </select>
// // // // // //           </div>

// // // // // //           {customerPhone && (
// // // // // //             <div className="mb-4">
// // // // // //               <p className="text-sm font-medium text-gray-700">Customer Balance:</p>
// // // // // //               <p className={`text-lg font-bold ${customerBalance >= 0 ? "text-green-600" : "text-red-600"}`}>
// // // // // //                 $${customerBalance.toFixed(2)}
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           )}

// // // // // //           <div className="mb-4">
// // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Customer Email (for digital receipt):</label>
// // // // // //             <input
// // // // // //               type="email"
// // // // // //               value={customerEmail}
// // // // // //               onChange={(e) => setCustomerEmail(e.target.value)}
// // // // // //               placeholder="Enter customer email"
// // // // // //               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // //             />
// // // // // //           </div>
// // // // // //         </>
// // // // // //       )}

// // // // // //       <AnimatePresence>
// // // // // //         {error && (
// // // // // //           <motion.div
// // // // // //             className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${error.includes("successfully") ? "bg-green-500" : "bg-red-500"} text-white max-w-sm`}
// // // // // //             initial={{ opacity: 0, y: 50, x: 0 }}
// // // // // //             animate={{ opacity: 1, y: 0, x: 0 }}
// // // // // //             exit={{ opacity: 0, y: 50 }}
// // // // // //             transition={{ duration: 0.3 }}
// // // // // //           >
// // // // // //             ${error}
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>
// // // // // //     </motion.div>
// // // // // //   );
// // // // // // };

// // // // // // export default Billing;
// // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // import { StoreContext } from "./StoreContext";
// // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // const Billing = () => {
// // // // //   const [products, setProducts] = useState([]);
// // // // //   const [allProducts, setAllProducts] = useState([]);
// // // // //   const [selectedProduct, setSelectedProduct] = useState("");
// // // // //   const [barcodeInput, setBarcodeInput] = useState("");
// // // // //   const [quantity, setQuantity] = useState(1);
// // // // //   const [error, setError] = useState(null);
// // // // //   const [customerName, setCustomerName] = useState("");
// // // // //   const [customerPhone, setCustomerPhone] = useState("");
// // // // //   const [customerEmail, setCustomerEmail] = useState("");
// // // // //   const [customers, setCustomers] = useState([]);
// // // // //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [loadingCustomers, setLoadingCustomers] = useState(true);
// // // // //   const [saving, setSaving] = useState(false);
// // // // //   const [paymentStatus, setPaymentStatus] = useState("paid");
// // // // //   const [customerBalance, setCustomerBalance] = useState(0);
// // // // //   const { storeName, storeId } = useContext(StoreContext);
// // // // //   const storeAddress = localStorage.getItem("storeAddress") || "123 Retail St, City, Country";
// // // // //   const email = localStorage.getItem("email") || "store@example.com";
// // // // //   const phoneNumber = localStorage.getItem("phoneNumber") || "+1234567890";
// // // // //   const userId = localStorage.getItem("userId") || "1";

// // // // //   useEffect(() => {
// // // // //     const fetchProducts = async () => {
// // // // //       setLoading(true);
// // // // //       try {
// // // // //         const response = await fetch("http://localhost:5002/api/products", {
// // // // //           headers: { storeId, userId },
// // // // //         });
// // // // //         if (!response.ok) throw new Error("Failed to fetch products");
// // // // //         const data = await response.json();
// // // // //         if (data && Array.isArray(data) && data.length > 0) {
// // // // //           setAllProducts(data);
// // // // //           setSelectedProduct(data[0].product_name);
// // // // //         } else {
// // // // //           setError("No products available. Please add products first.");
// // // // //         }
// // // // //       } catch (error) {
// // // // //         setError("Failed to fetch products. Please check your connection.");
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     if (storeId) fetchProducts();
// // // // //     else {
// // // // //       setError("Store identification failed. Please try again.");
// // // // //       setLoading(false);
// // // // //     }
// // // // //   }, [storeId, userId]);

// // // // //   useEffect(() => {
// // // // //     const fetchCustomers = async () => {
// // // // //       setLoadingCustomers(true);
// // // // //       try {
// // // // //         const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}&userId=${userId}`);
// // // // //         if (!response.ok) throw new Error("Failed to fetch customers");
// // // // //         const data = await response.json();
// // // // //         setCustomers(data.customers);
// // // // //       } catch (error) {
// // // // //         console.error("Error fetching customers:", error);
// // // // //       } finally {
// // // // //         setLoadingCustomers(false);
// // // // //       }
// // // // //     };

// // // // //     if (storeId) fetchCustomers();
// // // // //   }, [storeId, userId]);

// // // // //   useEffect(() => {
// // // // //     if (customerPhone) {
// // // // //       const fetchCustomerBalance = async () => {
// // // // //         try {
// // // // //           const response = await fetch(`http://localhost:5002/api/khatabook/customers/${customerPhone}/balance`, {
// // // // //             headers: { storeId },
// // // // //           });
// // // // //           if (!response.ok) throw new Error("Failed to fetch customer balance");
// // // // //           const data = await response.json();
// // // // //           setCustomerBalance(data.balance);
// // // // //         } catch (error) {
// // // // //           console.error("Error fetching customer balance:", error);
// // // // //         }
// // // // //       };
// // // // //       fetchCustomerBalance();
// // // // //     }
// // // // //   }, [customerPhone, storeId]);

// // // // //   const addProduct = () => {
// // // // //     const selectedProductData = allProducts.find(
// // // // //       (p) => p.product_name === selectedProduct || p.barcode === barcodeInput
// // // // //     );

// // // // //     if (selectedProductData) {
// // // // //       setProducts((prevProducts) => {
// // // // //         const existingProduct = prevProducts.find(
// // // // //           (p) => p.product_name === selectedProductData.product_name
// // // // //         );

// // // // //         if (existingProduct) {
// // // // //           return prevProducts.map((p) =>
// // // // //             p.product_name === selectedProductData.product_name
// // // // //               ? { ...p, quantity: p.quantity + parseInt(quantity) }
// // // // //               : p
// // // // //           );
// // // // //         } else {
// // // // //           return [
// // // // //             ...prevProducts,
// // // // //             {
// // // // //               id: selectedProductData.id,
// // // // //               product_name: selectedProductData.product_name,
// // // // //               sale_price: parseFloat(selectedProductData.sale_price),
// // // // //               quantity: parseInt(quantity),
// // // // //               barcode: selectedProductData.barcode,
// // // // //             },
// // // // //           ];
// // // // //         }
// // // // //       });
// // // // //     } else {
// // // // //       setError("Product not found. Check barcode or name.");
// // // // //       setTimeout(() => setError(null), 3000);
// // // // //     }

// // // // //     setQuantity(1);
// // // // //     setBarcodeInput("");
// // // // //   };

// // // // //   const handleBarcodeKeyPress = (e) => {
// // // // //     if (e.key === "Enter" && barcodeInput) {
// // // // //       const product = allProducts.find((p) => p.barcode === barcodeInput);
// // // // //       if (product) {
// // // // //         setSelectedProduct(product.product_name);
// // // // //         addProduct();
// // // // //       } else {
// // // // //         setError("Product with this barcode not found.");
// // // // //         setTimeout(() => setError(null), 3000);
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   const deleteProduct = (productName) => {
// // // // //     setProducts(products.filter((p) => p.product_name !== productName));
// // // // //   };

// // // // //   const totalAmount = products.reduce(
// // // // //     (total, product) => total + product.sale_price * product.quantity,
// // // // //     0
// // // // //   );

// // // // //   const sendBillToEmail = async (billContent) => {
// // // // //     try {
// // // // //       const response = await fetch("http://localhost:5002/api/send-email", {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({
// // // // //           to: customerEmail,
// // // // //           subject: `Receipt from ${storeName}`,
// // // // //           html: billContent,
// // // // //         }),
// // // // //       });

// // // // //       if (!response.ok) throw new Error("Failed to send email");
// // // // //     } catch (error) {
// // // // //       console.error("Error sending email:", error);
// // // // //     }
// // // // //   };

// // // // //   const printBill = async () => {
// // // // //     if (!products || products.length === 0) {
// // // // //       setError("No items to print! Please add products to the bill.");
// // // // //       setTimeout(() => setError(null), 3000);
// // // // //       return;
// // // // //     }

// // // // //     if (!customerName || !customerPhone) {
// // // // //       setError("Please enter customer details before generating the bill.");
// // // // //       setTimeout(() => setError(null), 3000);
// // // // //       return;
// // // // //     }

// // // // //     const billData = {
// // // // //       products,
// // // // //       customerName,
// // // // //       customerPhone,
// // // // //       customerEmail,
// // // // //       userId,
// // // // //       paymentStatus,
// // // // //     };

// // // // //     try {
// // // // //       const response = await fetch("http://localhost:5002/api/generate-bill", {
// // // // //         method: "POST",
// // // // //         headers: {
// // // // //           "Content-Type": "application/json",
// // // // //           storeId,
// // // // //           userId,
// // // // //         },
// // // // //         body: JSON.stringify(billData),
// // // // //       });

// // // // //       if (!response.ok) {
// // // // //         const errorData = await response.json();
// // // // //         throw new Error(errorData.error || "Failed to generate bill");
// // // // //       }

// // // // //       const billSummary = await response.json();

// // // // //       const billWindow = window.open("", "Bill", "width=800,height=600");
// // // // //       const billContent = `
// // // // // <html>
// // // // //   <head>
// // // // //     <title>${storeName} - Receipt</title>
// // // // //     <style>
// // // // //       * { margin: 0; padding: 0; box-sizing: border-box; }
// // // // //       body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f1f6; color: #333; line-height: 1.6; }
// // // // //       .container { width: 80%; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); padding: 40px; overflow: hidden; }
// // // // //       .header { text-align: center; padding: 20px 0; background: linear-gradient(135deg, #00bcd4, #00796b); color: #ffffff; border-radius: 12px; margin-bottom: 30px; }
// // // // //       .header h1 { font-size: 36px; font-weight: 700; letter-spacing: 2px; }
// // // // //       .header p { font-size: 18px; margin-top: 10px; opacity: 0.9; }
// // // // //       .bill-info { display: flex; justify-content: space-between; margin-bottom: 30px; padding: 10px 0; font-size: 16px; color: #444; border-bottom: 2px solid #f4f4f4; }
// // // // //       .bill-info div { flex: 1; }
// // // // //       .bill-info .label { font-weight: 600; opacity: 0.8; }
// // // // //       table { width: 100%; margin-bottom: 30px; border-collapse: collapse; text-align: center; border-radius: 8px; overflow: hidden; }
// // // // //       th, td { padding: 15px; font-size: 16px; text-align: center; }
// // // // //       th { background-color: #00bcd4; color: #ffffff; text-transform: uppercase; letter-spacing: 1px; }
// // // // //       td { background-color: #fafafa; color: #333; }
// // // // //       tr:nth-child(even) td { background-color: #f5f5f5; }
// // // // //       .total-row { background-color: #00bcd4; color: #ffffff; font-weight: bold; font-size: 18px; }
// // // // //       .footer { text-align: center; margin-top: 40px; padding: 20px; background-color: #00bcd4; color: #fff; border-radius: 12px; }
// // // // //       .footer p { margin: 0; font-size: 16px; font-style: italic; }
// // // // //       .print-btn { display: inline-block; padding: 15px 30px; margin-top: 20px; background-color: #28a745; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; transition: background-color 0.3s ease-in-out; text-align: center; }
// // // // //       .print-btn:hover { background-color: #218838; }
// // // // //       @media print {
// // // // //         body { background-color: #fff; color: #333; }
// // // // //         .container { box-shadow: none; margin: 0; padding: 20px; }
// // // // //         .header, .footer, th, .total-row { 
// // // // //           background: linear-gradient(135deg, #00bcd4, #00796b) !important; 
// // // // //           color: #fff !important; 
// // // // //           -webkit-print-color-adjust: exact;
// // // // //           print-color-adjust: exact;
// // // // //         }
// // // // //         .footer { font-size: 14px; text-align: center; }
// // // // //         .print-btn { display: none; }
// // // // //         table th, table td { border: 1px solid #ddd; }
// // // // //         .bill-info { font-size: 14px; }
// // // // //       }
// // // // //     </style>
// // // // //   </head>
// // // // //   <body>
// // // // //     <div class="container">
// // // // //       <div class="header">
// // // // //         <h1>${storeName} - Receipt</h1>
// // // // //         <p>Serial Number: ${billSummary.serialNumber}</p>
// // // // //         <p>${new Date().toLocaleString()}</p>
// // // // //       </div>
// // // // //       <div class="bill-info">
// // // // //         <div><p class="label">Store Address:</p><p>${storeAddress}</p></div>
// // // // //         <div><p class="label">Store Email:</p><p>${email}</p></div>
// // // // //         <div><p class="label">Store Phone:</p><p>${phoneNumber}</p></div>
// // // // //       </div>
// // // // //       <div class="bill-info">
// // // // //         <div><p class="label">Customer Name:</p><p>${customerName}</p></div>
// // // // //         <div><p class="label">Customer Phone:</p><p>${customerPhone}</p></div>
// // // // //       </div>
// // // // //       <table>
// // // // //         <thead>
// // // // //           <tr>
// // // // //             <th>Product Name</th>
// // // // //             <th>Barcode</th>
// // // // //             <th>Price</th>
// // // // //             <th>Quantity</th>
// // // // //             <th>Total</th>
// // // // //           </tr>
// // // // //         </thead>
// // // // //         <tbody>
// // // // //           ${products
// // // // //             .map(
// // // // //               (product) => `
// // // // //             <tr>
// // // // //               <td>${product.product_name}</td>
// // // // //               <td>${product.barcode || "N/A"}</td>
// // // // //               <td>${product.sale_price.toFixed(2)}</td>
// // // // //               <td>${product.quantity}</td>
// // // // //               <td>${(product.sale_price * product.quantity).toFixed(2)}</td>
// // // // //             </tr>
// // // // //           `
// // // // //             )
// // // // //             .join("")}
// // // // //           <tr class="total-row">
// // // // //             <td colspan="4">Total Amount</td>
// // // // //             <td>${totalAmount.toFixed(2)}</td>
// // // // //           </tr>
// // // // //         </tbody>
// // // // //       </table>
// // // // //       <div class="footer">
// // // // //         <p>Thank you for shopping with us!</p>
// // // // //         <button class="print-btn" onclick="window.print()">Print this Receipt</button>
// // // // //       </div>
// // // // //     </div>
// // // // //   </body>
// // // // // </html>`;

// // // // //       billWindow.document.write(billContent);
// // // // //       billWindow.document.close();

// // // // //       if (customerEmail) await sendBillToEmail(billContent);

// // // // //       setProducts([]);
// // // // //       setCustomerName("");
// // // // //       setCustomerPhone("");
// // // // //       setCustomerEmail("");
// // // // //       setPaymentStatus("paid");
// // // // //     } catch (error) {
// // // // //       setError(`Error generating bill: ${error.message}`);
// // // // //       setTimeout(() => setError(null), 3000);
// // // // //       console.error("Error in printBill:", error);
// // // // //     }
// // // // //   };

// // // // //   const handleCustomerSelect = (e) => {
// // // // //     const selectedCustomerPhone = e.target.value;
// // // // //     const customer = customers.find((c) => c.phone === selectedCustomerPhone);
// // // // //     setSelectedCustomer(customer);
// // // // //     setCustomerName(customer ? customer.name : "");
// // // // //     setCustomerPhone(customer ? customer.phone : "");
// // // // //     setCustomerEmail(customer ? customer.email : "");
// // // // //   };

// // // // //   const handleNewCustomerSave = async () => {
// // // // //     if (!customerName || !customerPhone) {
// // // // //       setError("Please enter valid customer details.");
// // // // //       setTimeout(() => setError(null), 3000);
// // // // //       return;
// // // // //     }

// // // // //     setSaving(true);
// // // // //     try {
// // // // //       const response = await fetch("http://localhost:5008/api/customers", {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({
// // // // //           name: customerName,
// // // // //           phone: customerPhone,
// // // // //           email: customerEmail,
// // // // //           storeId,
// // // // //         }),
// // // // //       });

// // // // //       if (!response.ok) throw new Error("Failed to add customer");
// // // // //       const newCustomer = await response.json();
// // // // //       setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
// // // // //       setError("Customer added successfully!");
// // // // //       setTimeout(() => setError(null), 3000);
// // // // //     } catch (error) {
// // // // //       setError("Failed to add customer.");
// // // // //       setTimeout(() => setError(null), 3000);
// // // // //     } finally {
// // // // //       setSaving(false);
// // // // //     }
// // // // //   };

// // // // //   const containerVariants = {
// // // // //     hidden: { opacity: 0 },
// // // // //     visible: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 } },
// // // // //   };

// // // // //   const itemVariants = {
// // // // //     hidden: { y: 20, opacity: 0 },
// // // // //     visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
// // // // //   };

// // // // //   const tableRowVariants = {
// // // // //     hidden: { opacity: 0, x: -20 },
// // // // //     visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
// // // // //     exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
// // // // //   };

// // // // //   return (
// // // // //     <motion.div
// // // // //       className="max-w-5xl mx-auto p-8 bg-white shadow-2xl rounded-lg"
// // // // //       style={{
// // // // //         background: "linear-gradient(to bottom, #ffffff, #f9fafb)",
// // // // //         boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05)",
// // // // //       }}
// // // // //       initial="hidden"
// // // // //       animate="visible"
// // // // //       variants={containerVariants}
// // // // //     >
// // // // //       <motion.div className="mb-8 text-center" variants={itemVariants}>
// // // // //         <h1 className="text-4xl font-bold mb-2 text-blue-600">RECEIPT GENERATOR</h1>
// // // // //         <div className="h-1 w-32 bg-blue-600 mx-auto rounded-full mb-4"></div>
// // // // //         <h2 className="text-2xl font-semibold text-gray-700">${storeName} Store</h2>
// // // // //       </motion.div>

// // // // //       {loading ? (
// // // // //         <div className="flex justify-center items-center py-12">
// // // // //           <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // // //         </div>
// // // // //       ) : (
// // // // //         <>
// // // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Product Selection</h3>
// // // // //             <div className="flex flex-col md:flex-row gap-4">
// // // // //               <div className="flex-1">
// // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Scan Barcode:</label>
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   value={barcodeInput}
// // // // //                   onChange={(e) => setBarcodeInput(e.target.value)}
// // // // //                   onKeyPress={handleBarcodeKeyPress}
// // // // //                   placeholder="Scan or enter barcode"
// // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // //                 />
// // // // //               </div>
// // // // //               <div className="flex-1">
// // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Or Select Product:</label>
// // // // //                 <select
// // // // //                   value={selectedProduct}
// // // // //                   onChange={(e) => setSelectedProduct(e.target.value)}
// // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // //                 >
// // // // //                   {allProducts.map((product) => (
// // // // //                     <option key={product.id} value={product.product_name}>
// // // // //                       ${product.product_name} - $${parseFloat(product.sale_price).toFixed(2)} (Barcode: ${product.barcode})
// // // // //                     </option>
// // // // //                   ))}
// // // // //                 </select>
// // // // //               </div>
// // // // //               <div className="flex-1">
// // // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
// // // // //                 <input
// // // // //                   type="number"
// // // // //                   value={quantity}
// // // // //                   min="1"
// // // // //                   onChange={(e) => setQuantity(e.target.value)}
// // // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // //                 />
// // // // //               </div>
// // // // //               <div className="flex items-end">
// // // // //                 <motion.button
// // // // //                   onClick={addProduct}
// // // // //                   className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
// // // // //                   whileHover={{ scale: 1.05 }}
// // // // //                   whileTap={{ scale: 0.98 }}
// // // // //                 >
// // // // //                   Add to Bill
// // // // //                 </motion.button>
// // // // //               </div>
// // // // //             </div>
// // // // //           </motion.div>

// // // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Customer Information</h3>
// // // // //             {loadingCustomers ? (
// // // // //               <div className="flex justify-center items-center py-4">
// // // // //                 <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // // //               </div>
// // // // //             ) : (
// // // // //               <>
// // // // //                 <div className="mb-4">
// // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Select Existing Customer:</label>
// // // // //                   <select
// // // // //                     value={customerPhone}
// // // // //                     onChange={handleCustomerSelect}
// // // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // //                   >
// // // // //                     <option value="">Select Customer</option>
// // // // //                     {customers.map((customer) => (
// // // // //                       <option key={customer.phone} value={customer.phone}>
// // // // //                         ${customer.name} - ${customer.phone}
// // // // //                       </option>
// // // // //                     ))}
// // // // //                   </select>
// // // // //                 </div>
// // // // //                 {!selectedCustomer && (
// // // // //                   <motion.div
// // // // //                     className="p-4 bg-gray-50 rounded-lg mt-4"
// // // // //                     initial={{ opacity: 0, height: 0 }}
// // // // //                     animate={{ opacity: 1, height: "auto" }}
// // // // //                     transition={{ duration: 0.3 }}
// // // // //                   >
// // // // //                     <h4 className="text-md font-medium mb-3 text-gray-700">New Customer</h4>
// // // // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// // // // //                       <div>
// // // // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name:</label>
// // // // //                         <input
// // // // //                           type="text"
// // // // //                           value={customerName}
// // // // //                           onChange={(e) => setCustomerName(e.target.value)}
// // // // //                           placeholder="Full Name"
// // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // //                         />
// // // // //                       </div>
// // // // //                       <div>
// // // // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number:</label>
// // // // //                         <input
// // // // //                           type="text"
// // // // //                           value={customerPhone}
// // // // //                           onChange={(e) => setCustomerPhone(e.target.value)}
// // // // //                           placeholder="Phone Number"
// // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // //                         />
// // // // //                       </div>
// // // // //                     </div>
// // // // //                     <motion.button
// // // // //                       onClick={handleNewCustomerSave}
// // // // //                       className="w-full md:w-auto px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-200 flex items-center justify-center"
// // // // //                       whileHover={{ scale: 1.02 }}
// // // // //                       whileTap={{ scale: 0.98 }}
// // // // //                       disabled={saving}
// // // // //                     >
// // // // //                       {saving ? (
// // // // //                         <>
// // // // //                           <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // // //                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // //                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // //                           </svg>
// // // // //                           Saving Customer...
// // // // //                         </>
// // // // //                       ) : "Save New Customer"}
// // // // //                     </motion.button>
// // // // //                   </motion.div>
// // // // //                 )}
// // // // //               </>
// // // // //             )}
// // // // //           </motion.div>

// // // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100 overflow-hidden" variants={itemVariants}>
// // // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Bill Items</h3>
// // // // //             <div className="overflow-x-auto" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05) inset" }}>
// // // // //               <table className="w-full mb-4">
// // // // //                 <thead>
// // // // //                   <tr className="bg-blue-500 text-white">
// // // // //                     <th className="p-3 font-semibold text-left">Product Name</th>
// // // // //                     <th className="p-3 font-semibold text-left">Barcode</th>
// // // // //                     <th className="p-3 font-semibold text-right">Price</th>
// // // // //                     <th className="p-3 font-semibold text-center">Quantity</th>
// // // // //                     <th className="p-3 font-semibold text-right">Total</th>
// // // // //                     <th className="p-3 font-semibold text-center">Action</th>
// // // // //                   </tr>
// // // // //                 </thead>
// // // // //                 <tbody>
// // // // //                   <AnimatePresence>
// // // // //                     {products.length > 0 ? (
// // // // //                       products.map((product) => (
// // // // //                         <motion.tr
// // // // //                           key={product.id}
// // // // //                           className="border-b hover:bg-gray-50 transition-colors"
// // // // //                           variants={tableRowVariants}
// // // // //                           initial="hidden"
// // // // //                           animate="visible"
// // // // //                           exit="exit"
// // // // //                         >
// // // // //                           <td className="p-3 text-left">${product.product_name}</td>
// // // // //                           <td className="p-3 text-left">${product.barcode || "N/A"}</td>
// // // // //                           <td className="p-3 text-right">$${product.sale_price.toFixed(2)}</td>
// // // // //                           <td className="p-3 text-center">${product.quantity}</td>
// // // // //                           <td className="p-3 text-right font-medium">$${(product.sale_price * product.quantity).toFixed(2)}</td>
// // // // //                           <td className="p-3 text-center">
// // // // //                             <motion.button
// // // // //                               onClick={() => deleteProduct(product.product_name)}
// // // // //                               className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
// // // // //                               whileHover={{ scale: 1.05 }}
// // // // //                               whileTap={{ scale: 0.95 }}
// // // // //                             >
// // // // //                               Remove
// // // // //                             </motion.button>
// // // // //                           </td>
// // // // //                         </motion.tr>
// // // // //                       ))
// // // // //                     ) : (
// // // // //                       <motion.tr variants={tableRowVariants} initial="hidden" animate="visible">
// // // // //                         <td colSpan="6" className="p-4 text-center text-gray-500">
// // // // //                           No products added to the bill yet.
// // // // //                         </td>
// // // // //                       </motion.tr>
// // // // //                     )}
// // // // //                   </AnimatePresence>
// // // // //                 </tbody>
// // // // //               </table>
// // // // //             </div>
// // // // //             {products.length > 0 && (
// // // // //               <motion.div
// // // // //                 className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
// // // // //                 initial={{ opacity: 0, y: 20 }}
// // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // //                 transition={{ duration: 0.3 }}
// // // // //               >
// // // // //                 <div className="text-lg font-semibold text-gray-800">Total Amount:</div>
// // // // //                 <div className="text-2xl font-bold text-blue-600">$${totalAmount.toFixed(2)}</div>
// // // // //               </motion.div>
// // // // //             )}
// // // // //           </motion.div>

// // // // //           <motion.div className="text-center" variants={itemVariants}>
// // // // //             <motion.button
// // // // //               onClick={printBill}
// // // // //               className="px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300"
// // // // //               whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
// // // // //               whileTap={{ scale: 0.98 }}
// // // // //             >
// // // // //               Generate & Print Receipt
// // // // //             </motion.button>
// // // // //           </motion.div>

// // // // //           <div className="mb-4">
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status:</label>
// // // // //             <select
// // // // //               value={paymentStatus}
// // // // //               onChange={(e) => setPaymentStatus(e.target.value)}
// // // // //               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // //             >
// // // // //               <option value="paid">Paid</option>
// // // // //               <option value="unpaid">Unpaid</option>
// // // // //             </select>
// // // // //           </div>

// // // // //           {customerPhone && (
// // // // //             <div className="mb-4">
// // // // //               <p className="text-sm font-medium text-gray-700">Customer Balance:</p>
// // // // //               <p className={`text-lg font-bold ${customerBalance >= 0 ? "text-green-600" : "text-red-600"}`}>
// // // // //                 $${customerBalance.toFixed(2)}
// // // // //               </p>
// // // // //             </div>
// // // // //           )}

// // // // //           <div className="mb-4">
// // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Customer Email (for digital receipt):</label>
// // // // //             <input
// // // // //               type="email"
// // // // //               value={customerEmail}
// // // // //               onChange={(e) => setCustomerEmail(e.target.value)}
// // // // //               placeholder="Enter customer email"
// // // // //               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // //             />
// // // // //           </div>
// // // // //         </>
// // // // //       )}

// // // // //       <AnimatePresence>
// // // // //         {error && (
// // // // //           <motion.div
// // // // //             className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${error.includes("successfully") ? "bg-green-500" : "bg-red-500"} text-white max-w-sm`}
// // // // //             initial={{ opacity: 0, y: 50, x: 0 }}
// // // // //             animate={{ opacity: 1, y: 0, x: 0 }}
// // // // //             exit={{ opacity: 0, y: 50 }}
// // // // //             transition={{ duration: 0.3 }}
// // // // //           >
// // // // //             ${error}
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>
// // // // //     </motion.div>
// // // // //   );
// // // // // };

// // // // // export default Billing;
// // // // import React, { useState, useEffect, useContext } from "react";
// // // // import { StoreContext } from "./StoreContext";
// // // // import { motion, AnimatePresence } from "framer-motion";

// // // // const Billing = () => {
// // // //   const [products, setProducts] = useState([]);
// // // //   const [allProducts, setAllProducts] = useState([]);
// // // //   const [selectedProduct, setSelectedProduct] = useState("");
// // // //   const [barcodeInput, setBarcodeInput] = useState("");
// // // //   const [quantity, setQuantity] = useState(1);
// // // //   const [error, setError] = useState(null);
// // // //   const [customerName, setCustomerName] = useState("");
// // // //   const [customerPhone, setCustomerPhone] = useState("");
// // // //   const [customerEmail, setCustomerEmail] = useState("");
// // // //   const [customers, setCustomers] = useState([]);
// // // //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [loadingCustomers, setLoadingCustomers] = useState(true);
// // // //   const [saving, setSaving] = useState(false);
// // // //   const [paymentStatus, setPaymentStatus] = useState("paid");
// // // //   const [customerBalance, setCustomerBalance] = useState(0);
// // // //   const { storeName, storeId } = useContext(StoreContext);
// // // //   const storeAddress = localStorage.getItem("storeAddress") || "123 Retail St, City, Country";
// // // //   const email = localStorage.getItem("email") || "store@example.com";
// // // //   const phoneNumber = localStorage.getItem("phoneNumber") || "+1234567890";
// // // //   const userId = localStorage.getItem("userId") || "1";

// // // //   useEffect(() => {
// // // //     const fetchProducts = async () => {
// // // //       setLoading(true);
// // // //       try {
// // // //         const response = await fetch("http://localhost:5002/api/products", {
// // // //           headers: { storeId, userId },
// // // //         });
// // // //         if (!response.ok) throw new Error("Failed to fetch products");
// // // //         const data = await response.json();
// // // //         if (data && Array.isArray(data) && data.length > 0) {
// // // //           setAllProducts(data);
// // // //           setSelectedProduct(data[0].product_name);
// // // //         } else {
// // // //           setError("No products available. Please add products first.");
// // // //         }
// // // //       } catch (error) {
// // // //         setError("Failed to fetch products. Please check your connection.");
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     if (storeId) fetchProducts();
// // // //     else {
// // // //       setError("Store identification failed. Please try again.");
// // // //       setLoading(false);
// // // //     }
// // // //   }, [storeId, userId]);

// // // //   useEffect(() => {
// // // //     const fetchCustomers = async () => {
// // // //       setLoadingCustomers(true);
// // // //       try {
// // // //         const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}&userId=${userId}`);
// // // //         if (!response.ok) throw new Error("Failed to fetch customers");
// // // //         const data = await response.json();
// // // //         setCustomers(data.customers || []);
// // // //       } catch (error) {
// // // //         console.error("Error fetching customers:", error);
// // // //         setError("Failed to fetch customers.");
// // // //       } finally {
// // // //         setLoadingCustomers(false);
// // // //       }
// // // //     };

// // // //     if (storeId) fetchCustomers();
// // // //   }, [storeId, userId]);

// // // //   useEffect(() => {
// // // //     if (customerPhone) {
// // // //       const fetchCustomerBalance = async () => {
// // // //         try {
// // // //           const res = await fetch(`http://localhost:5002/api/khatabook/customers/${customerPhone}/balance`, {
// // // //             headers: { storeId },
// // // //           });
// // // //           if (!res.ok) throw new Error("Failed to fetch customer balance");
// // // //           const data = await res.json();
// // // //           setCustomerBalance(data.balance);
// // // //         } catch (error) {
// // // //           console.error("Error fetching customer balance:", error);
// // // //           setError("Failed to fetch customer balance.");
// // // //         }
// // // //       };
// // // //       fetchCustomerBalance();
// // // //     }
// // // //   }, [customerPhone, storeId]);

// // // //   const addProduct = () => {
// // // //     const selectedProductData = allProducts.find(
// // // //       (p) => p.product_name === selectedProduct || p.barcode === barcodeInput
// // // //     );

// // // //     if (!selectedProductData) {
// // // //       setError("Product not found. Check barcode or name.");
// // // //       setTimeout(() => setError(null), 3000);
// // // //       return;
// // // //     }

// // // //     setProducts((prevProducts) => {
// // // //       const existingProduct = prevProducts.find(
// // // //         (p) => p.product_name === selectedProductData.product_name
// // // //       );

// // // //       if (existingProduct) {
// // // //         return prevProducts.map((p) =>
// // // //           p.product_name === selectedProductData.product_name
// // // //             ? { ...p, quantity: p.quantity + parseInt(quantity) }
// // // //             : p
// // // //         );
// // // //       } else {
// // // //         return [
// // // //           ...prevProducts,
// // // //           {
// // // //             id: selectedProductData.id,
// // // //             product_name: selectedProductData.product_name,
// // // //             sale_price: parseFloat(selectedProductData.sale_price),
// // // //             quantity: parseInt(quantity),
// // // //             barcode: selectedProductData.barcode,
// // // //           },
// // // //         ];
// // // //       }
// // // //     });

// // // //     setQuantity(1);
// // // //     setBarcodeInput("");
// // // //   };

// // // //   const handleBarcodeKeyPress = (e) => {
// // // //     if (e.key === "Enter" && barcodeInput) {
// // // //       const product = allProducts.find((p) => p.barcode === barcodeInput);
// // // //       if (product) {
// // // //         setSelectedProduct(product.product_name);
// // // //         addProduct();
// // // //       } else {
// // // //         setError("Product with this barcode not found.");
// // // //         setTimeout(() => setError(null), 3000);
// // // //       }
// // // //     }
// // // //   };

// // // //   const deleteProduct = (productName) => {
// // // //     setProducts(products.filter((p) => p.product_name !== productName));
// // // //   };

// // // //   const totalAmount = products.reduce(
// // // //     (total, product) => total + product.sale_price * product.quantity,
// // // //     0
// // // //   );

// // // //   const sendBillToEmail = async (billContent) => {
// // // //     try {
// // // //       const response = await fetch("http://localhost:5002/api/send-email", {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({
// // // //           to: email,
// // // //           subject: `Receipt from ${storeName}`,
// // // //           html: billContent,
// // // //         }),
// // // //       });

// // // //       if (!response.ok) throw new Error("Failed to send email");
// // // //     } catch (error) {
// // // //       console.error("Error sending email:", error);
// // // //       setError("Failed to send email receipt.");
// // // //     }
// // // //   };

// // // //   const printBill = async () => {
// // // //     if (!products.length) {
// // // //       setError("No items to print! Please add products to the bill.");
// // // //       setTimeout(() => setError(null), 3000);
// // // //       return;
// // // //     }

// // // //     if (!customerName || !customerPhone) {
// // // //       setError("Please enter customer name and phone number.");
// // // //       setTimeout(() => setError(null), 3000);
// // // //       return;
// // // //     }

// // // //     const billData = {
// // // //       products,
// // // //       customerName,
// // // //       customerPhone,
// // // //       customerEmail,
// // // //       userId,
// // // //       paymentStatus,
// // // //     };

// // // //     try {
// // // //       const response = await fetch("http://localhost:5002/api/generate-bill", {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //           storeId,
// // // //           userId,
// // // //         },
// // // //         body: JSON.stringify(billData),
// // // //       });

// // // //       if (!response.ok) {
// // // //         const errorData = await response.json();
// // // //         throw new Error(errorData.error || "Failed to generate bill");
// // // //       }

// // // //       const billSummary = await response.json();

// // // //       const billWindow = window.open("", "Bill", "width=800,height=600");
// // // //       const billContent = `
// // // //         <html>
// // // //           <head>
// // // //             <title>${storeName} - Receipt</title>
// // // //             <style>
// // // //               body { font-family: 'Segoe UI', sans-serif; background-color: #f0f1f6; color: #333; line-height: 1.6; }
// // // //               .container { width: 80%; margin: 20px auto; background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); padding: 40px; }
// // // //               .header { text-align: center; padding: 20px; background: linear-gradient(135deg, #00bcd4, #00796b); color: #fff; border-radius: 12px 12px 0 0; }
// // // //               .header h1 { font-size: 36px; font-weight: 700; }
// // // //               .bill-info { display: flex; justify-content: space-between; margin: 20px 0; font-size: 16px; }
// // // //               .bill-info div { flex: 1; }
// // // //               .bill-info .label { font-weight: 600; }
// // // //               table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
// // // //               th, td { padding: 15px; text-align: center; }
// // // //               th { background-color: #00bcd4; color: #fff; text-transform: uppercase; }
// // // //               td { background-color: #fafafa; }
// // // //               tr:nth-child(even) td { background-color: #f5f5f5; }
// // // //               .total-row { background-color: #00bcd4; color: #fff; font-weight: bold; font-size: 18px; }
// // // //               .footer { text-align: center; padding: 20px; background-color: #00bcd4; color: #fff; border-radius: 0 0 12px 12px; }
// // // //               .print-btn { padding: 15px 30px; background-color: #28a745; color: #fff; border: none; border-radius: 8px; cursor: pointer; }
// // // //               .print-btn:hover { background-color: #218838; }
// // // //               @media print {
// // // //                 .container { box-shadow: none; margin: 0; padding: 10px; }
// // // //                 .print-btn { display: none; }
// // // //               }
// // // //             </style>
// // // //           </head>
// // // //           <body>
// // // //             <div class="container">
// // // //               <div class="header">
// // // //                 <h1>${storeName} - Receipt</h1>
// // // //                 <p>Serial Number: ${billSummary.serialNumber}</p>
// // // //                 <p>${new Date().toLocaleString()}</p>
// // // //               </div>
// // // //               <div class="bill-info">
// // // //                 <div><p class="label">Store Address:</p><p>${storeAddress}</p></div>
// // // //                 <div><p class="label">Store Email:</p><p>${email}</p></div>
// // // //                 <div><p class="label">Store Phone:</p><p>${phoneNumber}</p></div>
// // // //               </div>
// // // //               <div class="bill-info">
// // // //                 <div><p class="label">Customer Name:</p><p>${customerName}</p></div>
// // // //                 <div><p class="label">Customer Phone:</p><p>${customerPhone}</p></div>
// // // //               </div>
// // // //               <table>
// // // //                 <thead>
// // // //                   <tr>
// // // //                     <th>Product Name</th>
// // // //                     <th>Barcode</th>
// // // //                     <th>Price</th>
// // // //                     <th>Quantity</th>
// // // //                     <th>Total</th>
// // // //                   </tr>
// // // //                 </thead>
// // // //                 <tbody>
// // // //                   ${products
// // // //                     .map(
// // // //                       (product) => `
// // // //                     <tr>
// // // //                       <td>${product.product_name}</td>
// // // //                       <td>${product.barcode || "N/A"}</td>
// // // //                       <td>${product.sale_price.toFixed(2)}</td>
// // // //                       <td>${product.quantity}</td>
// // // //                       <td>${(product.sale_price * product.quantity).toFixed(2)}</td>
// // // //                     </tr>
// // // //                   `
// // // //                     )
// // // //                     .join("")}
// // // //                   <tr class="total-row">
// // // //                     <td colspan="4">Total Amount</td>
// // // //                     <td>${totalAmount.toFixed(2)}</td>
// // // //                   </tr>
// // // //                 </tbody>
// // // //               </table>
// // // //               <div class="footer">
// // // //                 <p>Thank you for shopping with us!</p>
// // // //                 <button class="print-btn" onclick="window.print()">Print this Receipt</button>
// // // //               </div>
// // // //             </div>
// // // //           </body>
// // // //         </html>`;

// // // //       billWindow.document.write(billContent);
// // // //       billWindow.document.close();

// // // //       await sendBillToEmail(billContent);

// // // //       setProducts([]);
// // // //       setCustomerName("");
// // // //       setCustomerPhone("");
// // // //       setCustomerEmail("");
// // // //       setPaymentStatus("paid");
// // // //     } catch (error) {
// // // //       setError(`Error generating bill: ${error.message}`);
// // // //       setTimeout(() => setError(null), 3000);
// // // //       console.error("Error in printBill:", error);
// // // //     }
// // // //   };

// // // //   const handleCustomerSelect = (e) => {
// // // //     const selectedCustomerPhone = e.target.value;
// // // //     const customer = customers.find((c) => c.phone === selectedCustomerPhone);
// // // //     setSelectedCustomer(customer);
// // // //     setCustomerName(customer ? customer.name : "");
// // // //     setCustomerPhone(customer ? customer.phone : "");
// // // //     setCustomerEmail(customer ? customer.email || "" : "");
// // // //   };

// // // //   const handleNewCustomerSave = async () => {
// // // //     if (!customerName || !customerPhone) {
// // // //       setError("Please enter customer name and phone number.");
// // // //       setTimeout(() => setError(null), 3000);
// // // //       return;
// // // //     }

// // // //     setSaving(true);
// // // //     try {
// // // //       const response = await fetch("http://localhost:5008/api/customers", {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({
// // // //           name: customerName,
// // // //           phone: customerPhone,
// // // //           email: customerEmail,
// // // //           storeId,
// // // //         }),
// // // //       });

// // // //       if (!response.ok) throw new Error("Failed to add customer");
// // // //       const newCustomer = await response.json();
// // // //       setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
// // // //       setSelectedCustomer(newCustomer);
// // // //       setError("Customer added successfully!");
// // // //       setTimeout(() => setError(null), 3000);
// // // //     } catch (error) {
// // // //       setError("Failed to add customer.");
// // // //       setTimeout(() => setError(null), 3000);
// // // //     } finally {
// // // //       setSaving(false);
// // // //     }
// // // //   };

// // // //   const containerVariants = {
// // // //     hidden: { opacity: 0 },
// // // //     visible: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 } },
// // // //   };

// // // //   const itemVariants = {
// // // //     hidden: { y: 20, opacity: 0 },
// // // //     visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
// // // //   };

// // // //   const tableRowVariants = {
// // // //     hidden: { opacity: 0, x: -20 },
// // // //     visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
// // // //     exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
// // // //   };

// // // //   return (
// // // //     <motion.div
// // // //       className="max-w-5xl mx-auto p-8 bg-white shadow-2xl rounded-lg"
// // // //       style={{ background: "linear-gradient(to bottom, #ffffff, #f9fafb)" }}
// // // //       initial="hidden"
// // // //       animate="visible"
// // // //       variants={containerVariants}
// // // //     >
// // // //       <motion.div className="mb-8 text-center" variants={itemVariants}>
// // // //         <h1 className="text-4xl font-bold mb-2 text-blue-600">Receipt Generator</h1>
// // // //         <div className="h-1 w-32 bg-blue-600 mx-auto rounded-full mb-4"></div>
// // // //         <h2 className="text-2xl font-semibold text-gray-700">{storeName} Store</h2>
// // // //       </motion.div>

// // // //       {loading ? (
// // // //         <div className="flex justify-center items-center py-12">
// // // //           <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // //         </div>
// // // //       ) : (
// // // //         <>
// // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Product Selection</h3>
// // // //             <div className="flex flex-col md:flex-row gap-4">
// // // //               <div className="flex-1">
// // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Scan Barcode:</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   value={barcodeInput}
// // // //                   onChange={(e) => setBarcodeInput(e.target.value)}
// // // //                   onKeyPress={handleBarcodeKeyPress}
// // // //                   placeholder="Scan or enter barcode"
// // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // // //                 />
// // // //               </div>
// // // //               <div className="flex-1">
// // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Or Select Product:</label>
// // // //                 <select
// // // //                   value={selectedProduct}
// // // //                   onChange={(e) => setSelectedProduct(e.target.value)}
// // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // // //                 >
// // // //                   {allProducts.map((product) => (
// // // //                     <option key={product.id} value={product.product_name}>
// // // //                       {product.product_name} - {parseFloat(product.sale_price).toFixed(2)} (Barcode: {product.barcode})
// // // //                     </option>
// // // //                   ))}
// // // //                 </select>
// // // //               </div>
// // // //               <div className="flex-1">
// // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
// // // //                 <input
// // // //                   type="number"
// // // //                   value={quantity}
// // // //                   min="1"
// // // //                   onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
// // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // // //                 />
// // // //               </div>
// // // //               <div className="flex items-end">
// // // //                 <motion.button
// // // //                   onClick={addProduct}
// // // //                   className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // //                   whileHover={{ scale: 1.05 }}
// // // //                   whileTap={{ scale: 0.98 }}
// // // //                 >
// // // //                   Add to Bill
// // // //                 </motion.button>
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>

// // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Customer Information</h3>
// // // //             {loadingCustomers ? (
// // // //               <div className="flex justify-center items-center py-4">
// // // //                 <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // //               </div>
// // // //             ) : (
// // // //               <>
// // // //                 <div className="mb-4">
// // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Select Existing Customer:</label>
// // // //                   <select
// // // //                     value={customerPhone}
// // // //                     onChange={handleCustomerSelect}
// // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // // //                   >
// // // //                     <option value="">Select Customer</option>
// // // //                     {customers.map((customer) => (
// // // //                       <option key={customer.phone} value={customer.phone}>
// // // //                         {customer.name} - {customer.phone}
// // // //                       </option>
// // // //                     ))}
// // // //                   </select>
// // // //                 </div>
// // // //                 {!selectedCustomer && (
// // // //                   <motion.div
// // // //                     className="p-4 bg-gray-50 rounded-lg mt-4"
// // // //                     initial={{ opacity: 0, height: 0 }}
// // // //                     animate={{ opacity: 1, height: "auto" }}
// // // //                     transition={{ duration: 0.3 }}
// // // //                   >
// // // //                     <h4 className="text-md font-medium mb-3 text-gray-700">New Customer</h4>
// // // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// // // //                       <div>
// // // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name:</label>
// // // //                         <input
// // // //                           type="text"
// // // //                           value={customerName}
// // // //                           onChange={(e) => setCustomerName(e.target.value)}
// // // //                           placeholder="Full Name"
// // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // // //                         />
// // // //                       </div>
// // // //                       <div>
// // // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number:</label>
// // // //                         <input
// // // //                           type="text"
// // // //                           value={customerPhone}
// // // //                           onChange={(e) => setCustomerPhone(e.target.value)}
// // // //                           placeholder="Phone Number"
// // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // // //                         />
// // // //                       </div>
// // // //                     </div>
// // // //                     <motion.button
// // // //                       onClick={handleNewCustomerSave}
// // // //                       className="w-full md:w-auto px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
// // // //                       whileHover={{ scale: 1.02 }}
// // // //                       whileTap={{ scale: 0.98 }}
// // // //                       disabled={saving}
// // // //                     >
// // // //                       {saving ? (
// // // //                         <>
// // // //                           <svg
// // // //                             className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
// // // //                             xmlns="http://www.w3.org/2000/svg"
// // // //                             fill="none"
// // // //                             viewBox="0 0 24 24"
// // // //                           >
// // // //                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // //                             <path
// // // //                               className="opacity-75"
// // // //                               fill="currentColor"
// // // //                               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// // // //                             ></path>
// // // //                           </svg>
// // // //                           Saving...
// // // //                         </>
// // // //                       ) : (
// // // //                         "Save New Customer"
// // // //                       )}
// // // //                     </motion.button>
// // // //                   </motion.div>
// // // //                 )}
// // // //               </>
// // // //             )}
// // // //           </motion.div>

// // // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// // // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Bill Items</h3>
// // // //             <div className="overflow-x-auto">
// // // //               <table className="w-full mb-4">
// // // //                 <thead>
// // // //                   <tr className="bg-blue-500 text-white">
// // // //                     <th className="p-3 text-left">Product Name</th>
// // // //                     <th className="p-3 text-left">Barcode</th>
// // // //                     <th className="p-3 text-right">Price</th>
// // // //                     <th className="p-3 text-center">Quantity</th>
// // // //                     <th className="p-3 text-right">Total</th>
// // // //                     <th className="p-3 text-center">Action</th>
// // // //                   </tr>
// // // //                 </thead>
// // // //                 <tbody>
// // // //                   <AnimatePresence>
// // // //                     {products.length > 0 ? (
// // // //                       products.map((product) => (
// // // //                         <motion.tr
// // // //                           key={product.id}
// // // //                           className="border-b hover:bg-gray-50"
// // // //                           variants={tableRowVariants}
// // // //                           initial="hidden"
// // // //                           animate="visible"
// // // //                           exit="exit"
// // // //                         >
// // // //                           <td className="p-3 text-left">{product.product_name}</td>
// // // //                           <td className="p-3 text-left">{product.barcode || "N/A"}</td>
// // // //                           <td className="p-3 text-right">{product.sale_price.toFixed(2)}</td>
// // // //                           <td className="p-3 text-center">{product.quantity}</td>
// // // //                           <td className="p-3 text-right">{(product.sale_price * product.quantity).toFixed(2)}</td>
// // // //                           <td className="p-3 text-center">
// // // //                             <motion.button
// // // //                               onClick={() => deleteProduct(product.product_name)}
// // // //                               className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
// // // //                               whileHover={{ scale: 1.05 }}
// // // //                               whileTap={{ scale: 0.95 }}
// // // //                             >
// // // //                               Remove
// // // //                             </motion.button>
// // // //                           </td>
// // // //                         </motion.tr>
// // // //                       ))
// // // //                     ) : (
// // // //                       <motion.tr variants={tableRowVariants} initial="hidden" animate="visible">
// // // //                         <td colSpan="6" className="p-4 text-center text-gray-500">
// // // //                           No products added to the bill yet.
// // // //                         </td>
// // // //                       </motion.tr>
// // // //                     )}
// // // //                   </AnimatePresence>
// // // //                 </tbody>
// // // //               </table>
// // // //             </div>
// // // //             {products.length > 0 && (
// // // //               <motion.div
// // // //                 className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
// // // //                 initial={{ opacity: 0, y: 20 }}
// // // //                 animate={{ opacity: 1, y: 0 }}
// // // //                 transition={{ duration: 0.3 }}
// // // //               >
// // // //                 <div className="text-lg font-semibold text-gray-800">Total Amount:</div>
// // // //                 <div className="text-2xl font-bold text-blue-600">{totalAmount.toFixed(2)}</div>
// // // //               </motion.div>
// // // //             )}
// // // //           </motion.div>

// // // //           <motion.div className="mb-4" variants={itemVariants}>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status:</label>
// // // //             <select
// // // //               value={paymentStatus}
// // // //               onChange={(e) => setPaymentStatus(e.target.value)}
// // // //               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // // //             >
// // // //               <option value="paid">Paid</option>
// // // //               <option value="unpaid">Unpaid</option>
// // // //             </select>
// // // //           </motion.div>

// // // //           {customerPhone && (
// // // //             <motion.div className="mb-4" variants={itemVariants}>
// // // //               <p className="text-sm font-medium text-gray-700">Customer Balance:</p>
// // // //               <p className={`text-lg font-bold ${customerBalance >= 0 ? "text-green-600" : "text-red-600"}`}>
// // // //                 {customerBalance.toFixed(2)}
// // // //               </p>
// // // //             </motion.div>
// // // //           )}

// // // //           <motion.div className="mb-4" variants={itemVariants}>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Customer Email (Optional):</label>
// // // //             <input
// // // //               type="email"
// // // //               value={customerEmail}
// // // //               onChange={(e) => setCustomerEmail(e.target.value)}
// // // //               placeholder="Enter customer email"
// // // //               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // // //             />
// // // //           </motion.div>

// // // //           <motion.div className="text-center" variants={itemVariants}>
// // // //             <motion.button
// // // //               onClick={printBill}
// // // //               className="px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-500"
// // // //               whileHover={{ scale: 1.05 }}
// // // //               whileTap={{ scale: 0.98 }}
// // // //             >
// // // //               Generate & Print Receipt
// // // //             </motion.button>
// // // //           </motion.div>
// // // //         </>
// // // //       )}

// // // //       <AnimatePresence>
// // // //         {error && (
// // // //           <motion.div
// // // //             className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
// // // //               error.includes("successfully") ? "bg-green-500" : "bg-red-500"
// // // //             } text-white max-w-sm`}
// // // //             initial={{ opacity: 0, y: 50 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             exit={{ opacity: 0, y: 50 }}
// // // //             transition={{ duration: 0.3 }}
// // // //           >
// // // //             {error}
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </motion.div>
// // // //   );
// // // // };

// // // // export default Billing;
// // // import React, { useState, useEffect, useContext } from "react";
// // // import { StoreContext } from "./StoreContext";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // const Billing = () => {
// // //   const [products, setProducts] = useState([]);
// // //   const [allProducts, setAllProducts] = useState([]);
// // //   const [selectedProduct, setSelectedProduct] = useState("");
// // //   const [barcodeInput, setBarcodeInput] = useState("");
// // //   const [quantity, setQuantity] = useState(1);
// // //   const [error, setError] = useState(null);
// // //   const [customerName, setCustomerName] = useState("");
// // //   const [customerPhone, setCustomerPhone] = useState("");
// // //   const [customerEmail, setCustomerEmail] = useState("");
// // //   const [customers, setCustomers] = useState([]);
// // //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [loadingCustomers, setLoadingCustomers] = useState(true);
// // //   const [saving, setSaving] = useState(false);
// // //   const [paymentStatus, setPaymentStatus] = useState("paid");
// // //   const [customerBalance, setCustomerBalance] = useState(0);
// // //   const { storeName, storeId } = useContext(StoreContext);
// // //   const storeAddress = localStorage.getItem("storeAddress") || "123 Retail St, City, Country";
// // //   const email = localStorage.getItem("email") || "store@example.com";
// // //   const phoneNumber = localStorage.getItem("phoneNumber") || "+1234567890";
// // //   const userId = localStorage.getItem("userId") || "1";

// // //   useEffect(() => {
// // //     const fetchProducts = async () => {
// // //       setLoading(true);
// // //       try {
// // //         const response = await fetch("http://localhost:5002/api/products", {
// // //           headers: { storeId, userId },
// // //         });
// // //         if (!response.ok) throw new Error("Failed to fetch products");
// // //         const data = await response.json();
// // //         if (data && Array.isArray(data) && data.length > 0) {
// // //           setAllProducts(data);
// // //           setSelectedProduct(data[0].product_name);
// // //         } else {
// // //           setError("No products available. Please add products first.");
// // //         }
// // //       } catch (error) {
// // //         setError("Failed to fetch products. Please check your connection.");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     if (storeId) fetchProducts();
// // //     else {
// // //       setError("Store identification failed. Please try again.");
// // //       setLoading(false);
// // //     }
// // //   }, [storeId, userId]);

// // //   useEffect(() => {
// // //     const fetchCustomers = async () => {
// // //       setLoadingCustomers(true);
// // //       try {
// // //         const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}&userId=${userId}`);
// // //         if (!response.ok) throw new Error("Failed to fetch customers");
// // //         const data = await response.json();
// // //         setCustomers(data.customers || []);
// // //       } catch (error) {
// // //         console.error("Error fetching customers:", error);
// // //         setError("Failed to fetch customers.");
// // //       } finally {
// // //         setLoadingCustomers(false);
// // //       }
// // //     };

// // //     if (storeId) fetchCustomers();
// // //   }, [storeId, userId]);

// // //   useEffect(() => {
// // //     if (customerPhone) {
// // //       const fetchCustomerBalance = async () => {
// // //         try {
// // //           const res = await fetch(`http://localhost:5002/api/khatabook/customers/${customerPhone}/balance`, {
// // //             headers: { storeId },
// // //           });
// // //           if (!res.ok) throw new Error("Failed to fetch customer balance");
// // //           const data = await res.json();
// // //           setCustomerBalance(data.balance);
// // //         } catch (error) {
// // //           console.error("Error fetching customer balance:", error);
// // //           setError("Failed to fetch customer balance.");
// // //         }
// // //       };
// // //       fetchCustomerBalance();
// // //     }
// // //   }, [customerPhone, storeId]);

// // //   const addProduct = () => {
// // //     const selectedProductData = allProducts.find(
// // //       (p) => p.product_name === selectedProduct || p.barcode === barcodeInput
// // //     );

// // //     if (!selectedProductData) {
// // //       setError("Product not found. Check barcode or name.");
// // //       setTimeout(() => setError(null), 3000);
// // //       return;
// // //     }

// // //     setProducts((prevProducts) => {
// // //       const existingProduct = prevProducts.find(
// // //         (p) => p.product_name === selectedProductData.product_name
// // //       );

// // //       if (existingProduct) {
// // //         return prevProducts.map((p) =>
// // //           p.product_name === selectedProductData.product_name
// // //             ? { ...p, quantity: p.quantity + parseInt(quantity) }
// // //             : p
// // //         );
// // //       } else {
// // //         return [
// // //           ...prevProducts,
// // //           {
// // //             id: selectedProductData.id,
// // //             product_name: selectedProductData.product_name,
// // //             sale_price: parseFloat(selectedProductData.sale_price),
// // //             quantity: parseInt(quantity),
// // //             barcode: selectedProductData.barcode,
// // //           },
// // //         ];
// // //       }
// // //     });

// // //     setQuantity(1);
// // //     setBarcodeInput("");
// // //   };

// // //   const handleBarcodeKeyPress = (e) => {
// // //     if (e.key === "Enter" && barcodeInput) {
// // //       const product = allProducts.find((p) => p.barcode === barcodeInput);
// // //       if (product) {
// // //         setSelectedProduct(product.product_name);
// // //         addProduct();
// // //       } else {
// // //         setError("Product with this barcode not found.");
// // //         setTimeout(() => setError(null), 3000);
// // //       }
// // //     }
// // //   };

// // //   const deleteProduct = (productName) => {
// // //     setProducts(products.filter((p) => p.product_name !== productName));
// // //   };

// // //   const totalAmount = products.reduce(
// // //     (total, product) => total + product.sale_price * product.quantity,
// // //     0
// // //   );

// // //   const sendBillToEmail = async (billContent) => {
// // //     try {
// // //       const response = await fetch("http://localhost:5002/api/send-email", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({
// // //           to: customerEmail || email, // Send to customer email if provided, else store email
// // //           subject: `Receipt from ${storeName} - Serial ${new Date().getTime()}`,
// // //           html: billContent,
// // //         }),
// // //       });

// // //       if (!response.ok) throw new Error("Failed to send email");
// // //       setError("Email sent successfully!");
// // //       setTimeout(() => setError(null), 3000);
// // //     } catch (error) {
// // //       console.error("Error sending email:", error);
// // //       setError("Failed to send email receipt.");
// // //       setTimeout(() => setError(null), 3000);
// // //     }
// // //   };

// // //   const printBill = async () => {
// // //     if (!products.length) {
// // //       setError("No items to print! Please add products to the bill.");
// // //       setTimeout(() => setError(null), 3000);
// // //       return;
// // //     }

// // //     if (!customerName || !customerPhone) {
// // //       setError("Please enter customer name and phone number.");
// // //       setTimeout(() => setError(null), 3000);
// // //       return;
// // //     }

// // //     const billData = {
// // //       products,
// // //       customerName,
// // //       customerPhone,
// // //       customerEmail,
// // //       userId,
// // //       paymentStatus,
// // //     };

// // //     try {
// // //       const response = await fetch("http://localhost:5002/api/generate-bill", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           storeId,
// // //           userId,
// // //         },
// // //         body: JSON.stringify(billData),
// // //       });

// // //       if (!response.ok) {
// // //         const errorData = await response.json();
// // //         throw new Error(errorData.error || "Failed to generate bill");
// // //       }

// // //       const billSummary = await response.json();

// // //       const billWindow = window.open("", "Bill", "width=800,height=600");
// // //       const billContent = `
// // //         <html>
// // //           <head>
// // //             <title>${storeName} - Receipt</title>
// // //             <style>
// // //               body { font-family: 'Segoe UI', sans-serif; background-color: #f0f1f6; color: #333; line-height: 1.6; }
// // //               .container { width: 80%; margin: 20px auto; background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); padding: 40px; }
// // //               .header { text-align: center; padding: 20px; background: linear-gradient(135deg, #00bcd4, #00796b); color: #fff; border-radius: 12px 12px 0 0; }
// // //               .header h1 { font-size: 36px; font-weight: 700; }
// // //               .bill-info { display: flex; justify-content: space-between; margin: 20px 0; font-size: 16px; }
// // //               .bill-info div { flex: 1; }
// // //               .bill-info .label { font-weight: 600; }
// // //               table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
// // //               th, td { padding: 15px; text-align: center; }
// // //               th { background-color: #00bcd4; color: #fff; text-transform: uppercase; }
// // //               td { background-color: #fafafa; }
// // //               tr:nth-child(even) td { background-color: #f5f5f5; }
// // //               .total-row { background-color: #00bcd4; color: #fff; font-weight: bold; font-size: 18px; }
// // //               .footer { text-align: center; padding: 20px; background-color: #00bcd4; color: #fff; border-radius: 0 0 12px 12px; }
// // //               .print-btn { padding: 15px 30px; background-color: #28a745; color: #fff; border: none; border-radius: 8px; cursor: pointer; }
// // //               .print-btn:hover { background-color: #218838; }
// // //               @media print {
// // //                 .container { box-shadow: none; margin: 0; padding: 10px; }
// // //                 .print-btn { display: none; }
// // //               }
// // //             </style>
// // //           </head>
// // //           <body>
// // //             <div class="container">
// // //               <div class="header">
// // //                 <h1>${storeName} - Receipt</h1>
// // //                 <p>Serial Number: ${billSummary.serialNumber}</p>
// // //                 <p>${new Date().toLocaleString()}</p>
// // //               </div>
// // //               <div class="bill-info">
// // //                 <div><p class="label">Store Address:</p><p>${storeAddress}</p></div>
// // //                 <div><p class="label">Store Email:</p><p>${email}</p></div>
// // //                 <div><p class="label">Store Phone:</p><p>${phoneNumber}</p></div>
// // //               </div>
// // //               <div class="bill-info">
// // //                 <div><p class="label">Customer Name:</p><p>${customerName}</p></div>
// // //                 <div><p class="label">Customer Phone:</p><p>${customerPhone}</p></div>
// // //                 <div><p class="label">Customer Email:</p><p>${customerEmail || "N/A"}</p></div>
// // //               </div>
// // //               <table>
// // //                 <thead>
// // //                   <tr>
// // //                     <th>Product Name</th>
// // //                     <th>Barcode</th>
// // //                     <th>Price</th>
// // //                     <th>Quantity</th>
// // //                     <th>Total</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   ${products
// // //                     .map(
// // //                       (product) => `
// // //                     <tr>
// // //                       <td>${product.product_name}</td>
// // //                       <td>${product.barcode || "N/A"}</td>
// // //                       <td>${product.sale_price.toFixed(2)}</td>
// // //                       <td>${product.quantity}</td>
// // //                       <td>${(product.sale_price * product.quantity).toFixed(2)}</td>
// // //                     </tr>
// // //                   `
// // //                     )
// // //                     .join("")}
// // //                   <tr class="total-row">
// // //                     <td colspan="4">Total Amount</td>
// // //                     <td>${totalAmount.toFixed(2)}</td>
// // //                   </tr>
// // //                 </tbody>
// // //               </table>
// // //               <div class="footer">
// // //                 <p>Thank you for shopping with us!</p>
// // //                 <button class="print-btn" onclick="window.print()">Print this Receipt</button>
// // //               </div>
// // //             </div>
// // //           </body>
// // //         </html>`;

// // //       billWindow.document.write(billContent);
// // //       billWindow.document.close();

// // //       // Send email to customer or store email
// // //       await sendBillToEmail(billContent);

// // //       setProducts([]);
// // //       setCustomerName("");
// // //       setCustomerPhone("");
// // //       setCustomerEmail("");
// // //       setPaymentStatus("paid");
// // //     } catch (error) {
// // //       setError(`Error generating bill: ${error.message}`);
// // //       setTimeout(() => setError(null), 3000);
// // //       console.error("Error in printBill:", error);
// // //     }
// // //   };

// // //   const handleCustomerSelect = (e) => {
// // //     const selectedCustomerPhone = e.target.value;
// // //     const customer = customers.find((c) => c.phone === selectedCustomerPhone);
// // //     setSelectedCustomer(customer);
// // //     setCustomerName(customer ? customer.name : "");
// // //     setCustomerPhone(customer ? customer.phone : "");
// // //     setCustomerEmail(customer ? customer.email || "" : "");
// // //   };

// // //   const handleNewCustomerSave = async () => {
// // //     if (!customerName || !customerPhone) {
// // //       setError("Please enter customer name and phone number.");
// // //       setTimeout(() => setError(null), 3000);
// // //       return;
// // //     }

// // //     setSaving(true);
// // //     try {
// // //       const response = await fetch("http://localhost:5008/api/customers", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({
// // //           name: customerName,
// // //           phone: customerPhone,
// // //           email: customerEmail,
// // //           storeId,
// // //         }),
// // //       });

// // //       if (!response.ok) throw new Error("Failed to add customer");
// // //       const newCustomer = await response.json();
// // //       setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
// // //       setSelectedCustomer(newCustomer);
// // //       setError("Customer added successfully!");
// // //       setTimeout(() => setError(null), 3000);
// // //     } catch (error) {
// // //       setError("Failed to add customer.");
// // //       setTimeout(() => setError(null), 3000);
// // //     } finally {
// // //       setSaving(false);
// // //     }
// // //   };

// // //   const containerVariants = {
// // //     hidden: { opacity: 0 },
// // //     visible: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 } },
// // //   };

// // //   const itemVariants = {
// // //     hidden: { y: 20, opacity: 0 },
// // //     visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
// // //   };

// // //   const tableRowVariants = {
// // //     hidden: { opacity: 0, x: -20 },
// // //     visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
// // //     exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
// // //   };

// // //   return (
// // //     <motion.div
// // //       className="max-w-5xl mx-auto p-8 bg-white shadow-2xl rounded-lg"
// // //       style={{ background: "linear-gradient(to bottom, #ffffff, #f9fafb)" }}
// // //       initial="hidden"
// // //       animate="visible"
// // //       variants={containerVariants}
// // //     >
// // //       <motion.div className="mb-8 text-center" variants={itemVariants}>
// // //         <h1 className="text-4xl font-bold mb-2 text-blue-600">Receipt Generator</h1>
// // //         <div className="h-1 w-32 bg-blue-600 mx-auto rounded-full mb-4"></div>
// // //         <h2 className="text-2xl font-semibold text-gray-700">{storeName} Store</h2>
// // //       </motion.div>

// // //       {loading ? (
// // //         <div className="flex justify-center items-center py-12">
// // //           <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // //         </div>
// // //       ) : (
// // //         <>
// // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Product Selection</h3>
// // //             <div className="flex flex-col md:flex-row gap-4">
// // //               <div className="flex-1">
// // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Scan Barcode:</label>
// // //                 <input
// // //                   type="text"
// // //                   value={barcodeInput}
// // //                   onChange={(e) => setBarcodeInput(e.target.value)}
// // //                   onKeyPress={handleBarcodeKeyPress}
// // //                   placeholder="Scan or enter barcode"
// // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // //                 />
// // //               </div>
// // //               <div className="flex-1">
// // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Or Select Product:</label>
// // //                 <select
// // //                   value={selectedProduct}
// // //                   onChange={(e) => setSelectedProduct(e.target.value)}
// // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // //                 >
// // //                   {allProducts.map((product) => (
// // //                     <option key={product.id} value={product.product_name}>
// // //                       {product.product_name} - {parseFloat(product.sale_price).toFixed(2)} (Barcode: {product.barcode})
// // //                     </option>
// // //                   ))}
// // //                 </select>
// // //               </div>
// // //               <div className="flex-1">
// // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
// // //                 <input
// // //                   type="number"
// // //                   value={quantity}
// // //                   min="1"
// // //                   onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
// // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // //                 />
// // //               </div>
// // //               <div className="flex items-end">
// // //                 <motion.button
// // //                   onClick={addProduct}
// // //                   className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //                   whileHover={{ scale: 1.05 }}
// // //                   whileTap={{ scale: 0.98 }}
// // //                 >
// // //                   Add to Bill
// // //                 </motion.button>
// // //               </div>
// // //             </div>
// // //           </motion.div>

// // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Customer Information</h3>
// // //             {loadingCustomers ? (
// // //               <div className="flex justify-center items-center py-4">
// // //                 <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // //               </div>
// // //             ) : (
// // //               <>
// // //                 <div className="mb-4">
// // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Select Existing Customer:</label>
// // //                   <select
// // //                     value={customerPhone}
// // //                     onChange={handleCustomerSelect}
// // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // //                   >
// // //                     <option value="">Select Customer</option>
// // //                     {customers.map((customer) => (
// // //                       <option key={customer.phone} value={customer.phone}>
// // //                         {customer.name} - {customer.phone}
// // //                       </option>
// // //                     ))}
// // //                   </select>
// // //                 </div>
// // //                 {!selectedCustomer && (
// // //                   <motion.div
// // //                     className="p-4 bg-gray-50 rounded-lg mt-4"
// // //                     initial={{ opacity: 0, height: 0 }}
// // //                     animate={{ opacity: 1, height: "auto" }}
// // //                     transition={{ duration: 0.3 }}
// // //                   >
// // //                     <h4 className="text-md font-medium mb-3 text-gray-700">New Customer</h4>
// // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// // //                       <div>
// // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name:</label>
// // //                         <input
// // //                           type="text"
// // //                           value={customerName}
// // //                           onChange={(e) => setCustomerName(e.target.value)}
// // //                           placeholder="Full Name"
// // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // //                         />
// // //                       </div>
// // //                       <div>
// // //                         <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number:</label>
// // //                         <input
// // //                           type="text"
// // //                           value={customerPhone}
// // //                           onChange={(e) => setCustomerPhone(e.target.value)}
// // //                           placeholder="Phone Number"
// // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // //                         />
// // //                       </div>
// // //                     </div>
// // //                     <motion.button
// // //                       onClick={handleNewCustomerSave}
// // //                       className="w-full md:w-auto px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
// // //                       whileHover={{ scale: 1.02 }}
// // //                       whileTap={{ scale: 0.98 }}
// // //                       disabled={saving}
// // //                     >
// // //                       {saving ? (
// // //                         <>
// // //                           <svg
// // //                             className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
// // //                             xmlns="http://www.w3.org/2000/svg"
// // //                             fill="none"
// // //                             viewBox="0 0 24 24"
// // //                           >
// // //                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // //                             <path
// // //                               className="opacity-75"
// // //                               fill="currentColor"
// // //                               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// // //                             ></path>
// // //                           </svg>
// // //                           Saving...
// // //                         </>
// // //                       ) : (
// // //                         "Save New Customer"
// // //                       )}
// // //                     </motion.button>
// // //                   </motion.div>
// // //                 )}
// // //               </>
// // //             )}
// // //           </motion.div>

// // //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// // //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Bill Items</h3>
// // //             <div className="overflow-x-auto">
// // //               <table className="w-full mb-4">
// // //                 <thead>
// // //                   <tr className="bg-blue-500 text-white">
// // //                     <th className="p-3 text-left">Product Name</th>
// // //                     <th className="p-3 text-left">Barcode</th>
// // //                     <th className="p-3 text-right">Price</th>
// // //                     <th className="p-3 text-center">Quantity</th>
// // //                     <th className="p-3 text-right">Total</th>
// // //                     <th className="p-3 text-center">Action</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   <AnimatePresence>
// // //                     {products.length > 0 ? (
// // //                       products.map((product) => (
// // //                         <motion.tr
// // //                           key={product.id}
// // //                           className="border-b hover:bg-gray-50"
// // //                           variants={tableRowVariants}
// // //                           initial="hidden"
// // //                           animate="visible"
// // //                           exit="exit"
// // //                         >
// // //                           <td className="p-3 text-left">{product.product_name}</td>
// // //                           <td className="p-3 text-left">{product.barcode || "N/A"}</td>
// // //                           <td className="p-3 text-right">{product.sale_price.toFixed(2)}</td>
// // //                           <td className="p-3 text-center">{product.quantity}</td>
// // //                           <td className="p-3 text-right">{(product.sale_price * product.quantity).toFixed(2)}</td>
// // //                           <td className="p-3 text-center">
// // //                             <motion.button
// // //                               onClick={() => deleteProduct(product.product_name)}
// // //                               className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
// // //                               whileHover={{ scale: 1.05 }}
// // //                               whileTap={{ scale: 0.95 }}
// // //                             >
// // //                               Remove
// // //                             </motion.button>
// // //                           </td>
// // //                         </motion.tr>
// // //                       ))
// // //                     ) : (
// // //                       <motion.tr variants={tableRowVariants} initial="hidden" animate="visible">
// // //                         <td colSpan="6" className="p-4 text-center text-gray-500">
// // //                           No products added to the bill yet.
// // //                         </td>
// // //                       </motion.tr>
// // //                     )}
// // //                   </AnimatePresence>
// // //                 </tbody>
// // //               </table>
// // //             </div>
// // //             {products.length > 0 && (
// // //               <motion.div
// // //                 className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
// // //                 initial={{ opacity: 0, y: 20 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.3 }}
// // //               >
// // //                 <div className="text-lg font-semibold text-gray-800">Total Amount:</div>
// // //                 <div className="text-2xl font-bold text-blue-600">{totalAmount.toFixed(2)}</div>
// // //               </motion.div>
// // //             )}
// // //           </motion.div>

// // //           <motion.div className="mb-4" variants={itemVariants}>
// // //             <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status:</label>
// // //             <select
// // //               value={paymentStatus}
// // //               onChange={(e) => setPaymentStatus(e.target.value)}
// // //               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // //             >
// // //               <option value="paid">Paid</option>
// // //               <option value="unpaid">Unpaid</option>
// // //             </select>
// // //           </motion.div>

// // //           {customerPhone && (
// // //             <motion.div className="mb-4" variants={itemVariants}>
// // //               <p className="text-sm font-medium text-gray-700">Customer Balance:</p>
// // //               <p className={`text-lg font-bold ${customerBalance >= 0 ? "text-green-600" : "text-red-600"}`}>
// // //                 {customerBalance.toFixed(2)}
// // //               </p>
// // //             </motion.div>
// // //           )}

// // //           <motion.div className="mb-4" variants={itemVariants}>
// // //             <label className="block text-sm font-medium text-gray-700 mb-1">Customer Email (Optional):</label>
// // //             <input
// // //               type="email"
// // //               value={customerEmail}
// // //               onChange={(e) => setCustomerEmail(e.target.value)}
// // //               placeholder="Enter customer email"
// // //               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // //             />
// // //           </motion.div>

// // //           <motion.div className="text-center" variants={itemVariants}>
// // //             <motion.button
// // //               onClick={printBill}
// // //               className="px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-500"
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.98 }}
// // //             >
// // //               Generate & Print Receipt
// // //             </motion.button>
// // //           </motion.div>
// // //         </>
// // //       )}

// // //       <AnimatePresence>
// // //         {error && (
// // //           <motion.div
// // //             className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
// // //               error.includes("successfully") ? "bg-green-500" : "bg-red-500"
// // //             } text-white max

// // // -w-sm`}
// // //             initial={{ opacity: 0, y: 50 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             exit={{ opacity: 0, y: 50 }}
// // //             transition={{ duration: 0.3 }}
// // //           >
// // //             {error}
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </motion.div>
// // //   );
// // // };

// // // export default Billing;
// // import React, { useState, useEffect, useContext } from "react";
// // import { StoreContext } from "./StoreContext";
// // import { motion, AnimatePresence } from "framer-motion";

// // const Billing = () => {
// //   const [products, setProducts] = useState([]);
// //   const [allProducts, setAllProducts] = useState([]);
// //   const [selectedProduct, setSelectedProduct] = useState("");
// //   const [barcodeInput, setBarcodeInput] = useState("");
// //   const [quantity, setQuantity] = useState(1);
// //   const [error, setError] = useState(null);
// //   const [customerName, setCustomerName] = useState("");
// //   const [customerPhone, setCustomerPhone] = useState("");
// //   const [customerEmail, setCustomerEmail] = useState("");
// //   const [customers, setCustomers] = useState([]);
// //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [loadingCustomers, setLoadingCustomers] = useState(true);
// //   const [saving, setSaving] = useState(false);
// //   const [paymentStatus, setPaymentStatus] = useState("paid");
// //   const [customerBalance, setCustomerBalance] = useState(0);
// //   const { storeName, storeId } = useContext(StoreContext);
// //   const storeAddress = localStorage.getItem("storeAddress") || "N/A";
// //   const email = localStorage.getItem("email") || "premsaisid21@gmail.com";
// //   const phoneNumber = localStorage.getItem("phoneNumber") || "8247204089";
// //   const userId = localStorage.getItem("userId") || "1";

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       setLoading(true);
// //       try {
// //         const response = await fetch("http://localhost:5002/api/products", {
// //           headers: { storeId, userId },
// //         });
// //         if (!response.ok) throw new Error("Failed to fetch products");
// //         const data = await response.json();
// //         if (data && Array.isArray(data) && data.length > 0) {
// //           setAllProducts(data);
// //           setSelectedProduct(data[0].product_name);
// //         } else {
// //           setError("No products available. Please add products first.");
// //         }
// //       } catch (error) {
// //         setError("Failed to fetch products. Please check your connection.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     if (storeId) fetchProducts();
// //     else {
// //       setError("Store identification failed. Please try again.");
// //       setLoading(false);
// //     }
// //   }, [storeId, userId]);

// //   useEffect(() => {
// //     const fetchCustomers = async () => {
// //       setLoadingCustomers(true);
// //       try {
// //         const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}&userId=${userId}`);
// //         if (!response.ok) throw new Error("Failed to fetch customers");
// //         const data = await response.json();
// //         setCustomers(data.customers || []);
// //       } catch (error) {
// //         console.error("Error fetching customers:", error);
// //         setError("Failed to fetch customers.");
// //       } finally {
// //         setLoadingCustomers(false);
// //       }
// //     };

// //     if (storeId) fetchCustomers();
// //   }, [storeId, userId]);

// //   useEffect(() => {
// //     if (customerPhone) {
// //       const fetchCustomerBalance = async () => {
// //         try {
// //           const res = await fetch(`http://localhost:5002/api/khatabook/customers/${customerPhone}/balance`, {
// //             headers: { storeId },
// //           });
// //           if (!res.ok) throw new Error("Failed to fetch customer balance");
// //           const data = await res.json();
// //           setCustomerBalance(data.balance);
// //         } catch (error) {
// //           console.error("Error fetching customer balance:", error);
// //           setError("Failed to fetch customer balance.");
// //         }
// //       };
// //       fetchCustomerBalance();
// //     }
// //   }, [customerPhone, storeId]);

// //   const addProduct = () => {
// //     const selectedProductData = allProducts.find(
// //       (p) => p.product_name === selectedProduct || p.barcode === barcodeInput
// //     );

// //     if (!selectedProductData) {
// //       setError("Product not found. Check barcode or name.");
// //       setTimeout(() => setError(null), 3000);
// //       return;
// //     }

// //     setProducts((prevProducts) => {
// //       const existingProduct = prevProducts.find(
// //         (p) => p.product_name === selectedProductData.product_name
// //       );

// //       if (existingProduct) {
// //         return prevProducts.map((p) =>
// //           p.product_name === selectedProductData.product_name
// //             ? { ...p, quantity: p.quantity + parseInt(quantity) }
// //             : p
// //         );
// //       } else {
// //         return [
// //           ...prevProducts,
// //           {
// //             id: selectedProductData.id,
// //             product_name: selectedProductData.product_name,
// //             sale_price: parseFloat(selectedProductData.sale_price),
// //             quantity: parseInt(quantity),
// //             barcode: selectedProductData.barcode,
// //           },
// //         ];
// //       }
// //     });

// //     setQuantity(1);
// //     setBarcodeInput("");
// //   };

// //   const handleBarcodeKeyPress = (e) => {
// //     if (e.key === "Enter" && barcodeInput) {
// //       const product = allProducts.find((p) => p.barcode === barcodeInput);
// //       if (product) {
// //         setSelectedProduct(product.product_name);
// //         addProduct();
// //       } else {
// //         setError("Product with this barcode not found.");
// //         setTimeout(() => setError(null), 3000);
// //       }
// //     }
// //   };

// //   const deleteProduct = (productName) => {
// //     setProducts(products.filter((p) => p.product_name !== productName));
// //   };

// //   const totalAmount = products.reduce(
// //     (total, product) => total + product.sale_price * product.quantity,
// //     0
// //   );

// //   const sendBillToEmail = async (billContent) => {
// //     try {
// //       const response = await fetch("http://localhost:5002/api/send-email", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           to: customerEmail || email, // Send to customer email if provided, else store email
// //           subject: `Receipt from ${storeName} - Serial ${new Date().getTime()}`,
// //           html: billContent,
// //         }),
// //       });

// //       if (!response.ok) throw new Error("Failed to send email");
// //       setError("Email sent successfully!");
// //       setTimeout(() => setError(null), 3000);
// //     } catch (error) {
// //       console.error("Error sending email:", error);
// //       setError("Failed to send email receipt.");
// //       setTimeout(() => setError(null), 3000);
// //     }
// //   };

// //   const printBill = async () => {
// //     if (!products.length) {
// //       setError("No items to print! Please add products to the bill.");
// //       setTimeout(() => setError(null), 3000);
// //       return;
// //     }

// //     if (!customerName || !customerPhone) {
// //       setError("Please enter customer name and phone number.");
// //       setTimeout(() => setError(null), 3000);
// //       return;
// //     }

// //     const billData = {
// //       products,
// //       customerName,
// //       customerPhone,
// //       customerEmail,
// //       userId,
// //       paymentStatus,
// //       storeName, // Pass store details to backend
// //       storeAddress,
// //       phoneNumber,
// //       email,
// //     };

// //     try {
// //       const response = await fetch("http://localhost:5002/api/generate-bill", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           storeId,
// //           userId,
// //         },
// //         body: JSON.stringify(billData),
// //       });

// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         throw new Error(errorData.error || "Failed to generate bill");
// //       }

// //       const billSummary = await response.json();

// //       // Display bill in a new window
// //       const billWindow = window.open("", "Bill", "width=800,height=600");
// //       const billContent = `
// //         <html>
// //           <head>
// //             <title>${storeName} - Receipt</title>
// //             <style>
// //               body { font-family: 'Segoe UI', sans-serif; background-color: #f0f1f6; color: #333; line-height: 1.6; }
// //               .container { width: 80%; margin: 20px auto; background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); padding: 40px; }
// //               .header { text-align: center; padding: 20px; background: linear-gradient(135deg, #00bcd4, #00796b); color: #fff; border-radius: 12px 12px 0 0; }
// //               .header h1 { font-size: 36px; font-weight: 700; }
// //               .bill-info { display: flex; justify-content: space-between; margin: 20px 0; font-size: 16px; }
// //               .bill-info div { flex: 1; }
// //               .bill-info .label { font-weight: 600; }
// //               table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
// //               th, td { padding: 15px; text-align: center; }
// //               th { background-color: #00bcd4; color: #fff; text-transform: uppercase; }
// //               td { background-color: #fafafa; }
// //               tr:nth-child(even) td { background-color: #f5f5f5; }
// //               .total-row { background-color: #00bcd4; color: #fff; font-weight: bold; font-size: 18px; }
// //               .footer { text-align: center; padding: 20px; background-color: #00bcd4; color: #fff; border-radius: 0 0 12px 12px; }
// //               .print-btn { padding: 15px 30px; background-color: #28a745; color: #fff; border: none; border-radius: 8px; cursor: pointer; }
// //               .print-btn:hover { background-color: #218838; }
// //               @media print {
// //                 .container { box-shadow: none; margin: 0; padding: 10px; }
// //                 .print-btn { display: none; }
// //               }
// //             </style>
// //           </head>
// //           <body>
// //             <div class="container">
// //               <div class="header">
// //                 <h1>${storeName} - Receipt</h1>
// //                 <p>Serial Number: ${billSummary.serialNumber}</p>
// //                 <p>${new Date().toLocaleString()}</p>
// //               </div>
// //               <div class="bill-info">
// //                 <div><p class="label">Store Name:</p><p>${storeName}</p></div>
// //                 <div><p class="label">Store Address:</p><p>${storeAddress}</p></div>
// //                 <div><p class="label">Phone Number:</p><p>${phoneNumber}</p></div>
// //                 <div><p class="label">Email:</p><p>${email}</p></div>
// //               </div>
// //               <div class="bill-info">
// //                 <div><p class="label">Customer Name:</p><p>${customerName}</p></div>
// //                 <div><p class="label">Customer Phone:</p><p>${customerPhone}</p></div>
// //                 <div><p class="label">Customer Email:</p><p>${customerEmail || "N/A"}</p></div>
// //               </div>
// //               <table>
// //                 <thead>
// //                   <tr>
// //                     <th>Product Name</th>
// //                     <th>Barcode</th>
// //                     <th>Price</th>
// //                     <th>Quantity</th>
// //                     <th>Total</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   ${products
// //                     .map(
// //                       (product) => `
// //                     <tr>
// //                       <td>${product.product_name}</td>
// //                       <td>${product.barcode || "N/A"}</td>
// //                       <td>${product.sale_price.toFixed(2)}</td>
// //                       <td>${product.quantity}</td>
// //                       <td>${(product.sale_price * product.quantity).toFixed(2)}</td>
// //                     </tr>
// //                   `
// //                     )
// //                     .join("")}
// //                   <tr class="total-row">
// //                     <td colspan="4">Total Amount</td>
// //                     <td>${totalAmount.toFixed(2)}</td>
// //                   </tr>
// //                 </tbody>
// //               </table>
// //               <div class="footer">
// //                 <p>Thank you for shopping with us!</p>
// //                 <button class="print-btn" onclick="window.print()">Print this Receipt</button>
// //               </div>
// //             </div>
// //           </body>
// //         </html>`;

// //       billWindow.document.write(billContent);
// //       billWindow.document.close();

// //       // Send email with the same content
// //       await sendBillToEmail(billContent);

// //       setProducts([]);
// //       setCustomerName("");
// //       setCustomerPhone("");
// //       setCustomerEmail("");
// //       setPaymentStatus("paid");
// //     } catch (error) {
// //       setError(`Error generating bill: ${error.message}`);
// //       setTimeout(() => setError(null), 3000);
// //       console.error("Error in printBill:", error);
// //     }
// //   };

// //   const handleCustomerSelect = (e) => {
// //     const selectedCustomerPhone = e.target.value;
// //     const customer = customers.find((c) => c.phone === selectedCustomerPhone);
// //     setSelectedCustomer(customer);
// //     setCustomerName(customer ? customer.name : "");
// //     setCustomerPhone(customer ? customer.phone : "");
// //     setCustomerEmail(customer ? customer.email || "" : "");
// //   };

// //   const handleNewCustomerSave = async () => {
// //     if (!customerName || !customerPhone) {
// //       setError("Please enter customer name and phone number.");
// //       setTimeout(() => setError(null), 3000);
// //       return;
// //     }

// //     setSaving(true);
// //     try {
// //       const response = await fetch("http://localhost:5008/api/customers", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           name: customerName,
// //           phone: customerPhone,
// //           email: customerEmail,
// //           storeId,
// //         }),
// //       });

// //       if (!response.ok) throw new Error("Failed to add customer");
// //       const newCustomer = await response.json();
// //       setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
// //       setSelectedCustomer(newCustomer);
// //       setError("Customer added successfully!");
// //       setTimeout(() => setError(null), 3000);
// //     } catch (error) {
// //       setError("Failed to add customer.");
// //       setTimeout(() => setError(null), 3000);
// //     } finally {
// //       setSaving(false);
// //     }
// //   };

// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 } },
// //   };

// //   const itemVariants = {
// //     hidden: { y: 20, opacity: 0 },
// //     visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
// //   };

// //   const tableRowVariants = {
// //     hidden: { opacity: 0, x: -20 },
// //     visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
// //     exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
// //   };

// //   return (
// //     <motion.div
// //       className="max-w-5xl mx-auto p-8 bg-white shadow-2xl rounded-lg"
// //       style={{ background: "linear-gradient(to bottom, #ffffff, #f9fafb)" }}
// //       initial="hidden"
// //       animate="visible"
// //       variants={containerVariants}
// //     >
// //       <motion.div className="mb-8 text-center" variants={itemVariants}>
// //         <h1 className="text-4xl font-bold mb-2 text-blue-600">Receipt Generator</h1>
// //         <div className="h-1 w-32 bg-blue-600 mx-auto rounded-full mb-4"></div>
// //         <h2 className="text-2xl font-semibold text-gray-700">{storeName} Store</h2>
// //       </motion.div>

// //       {loading ? (
// //         <div className="flex justify-center items-center py-12">
// //           <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// //         </div>
// //       ) : (
// //         <>
// //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Product Selection</h3>
// //             <div className="flex flex-col md:flex-row gap-4">
// //               <div className="flex-1">
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Scan Barcode:</label>
// //                 <input
// //                   type="text"
// //                   value={barcodeInput}
// //                   onChange={(e) => setBarcodeInput(e.target.value)}
// //                   onKeyPress={handleBarcodeKeyPress}
// //                   placeholder="Scan or enter barcode"
// //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// //                 />
// //               </div>
// //               <div className="flex-1">
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Or Select Product:</label>
// //                 <select
// //                   value={selectedProduct}
// //                   onChange={(e) => setSelectedProduct(e.target.value)}
// //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// //                 >
// //                   {allProducts.map((product) => (
// //                     <option key={product.id} value={product.product_name}>
// //                       {product.product_name} - {parseFloat(product.sale_price).toFixed(2)} (Barcode: {product.barcode})
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>
// //               <div className="flex-1">
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
// //                 <input
// //                   type="number"
// //                   value={quantity}
// //                   min="1"
// //                   onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
// //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// //                 />
// //               </div>
// //               <div className="flex items-end">
// //                 <motion.button
// //                   onClick={addProduct}
// //                   className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                   whileHover={{ scale: 1.05 }}
// //                   whileTap={{ scale: 0.98 }}
// //                 >
// //                   Add to Bill
// //                 </motion.button>
// //               </div>
// //             </div>
// //           </motion.div>

// //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Customer Information</h3>
// //             {loadingCustomers ? (
// //               <div className="flex justify-center items-center py-4">
// //                 <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// //               </div>
// //             ) : (
// //               <>
// //                 <div className="mb-4">
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">Select Existing Customer:</label>
// //                   <select
// //                     value={customerPhone}
// //                     onChange={handleCustomerSelect}
// //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// //                   >
// //                     <option value="">Select Customer</option>
// //                     {customers.map((customer) => (
// //                       <option key={customer.phone} value={customer.phone}>
// //                         {customer.name} - {customer.phone}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </div>
// //                 {!selectedCustomer && (
// //                   <motion.div
// //                     className="p-4 bg-gray-50 rounded-lg mt-4"
// //                     initial={{ opacity: 0, height: 0 }}
// //                     animate={{ opacity: 1, height: "auto" }}
// //                     transition={{ duration: 0.3 }}
// //                   >
// //                     <h4 className="text-md font-medium mb-3 text-gray-700">New Customer</h4>
// //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// //                       <div>
// //                         <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name:</label>
// //                         <input
// //                           type="text"
// //                           value={customerName}
// //                           onChange={(e) => setCustomerName(e.target.value)}
// //                           placeholder="Full Name"
// //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// //                         />
// //                       </div>
// //                       <div>
// //                         <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number:</label>
// //                         <input
// //                           type="text"
// //                           value={customerPhone}
// //                           onChange={(e) => setCustomerPhone(e.target.value)}
// //                           placeholder="Phone Number"
// //                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// //                         />
// //                       </div>
// //                     </div>
// //                     <motion.button
// //                       onClick={handleNewCustomerSave}
// //                       className="w-full md:w-auto px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
// //                       whileHover={{ scale: 1.02 }}
// //                       whileTap={{ scale: 0.98 }}
// //                       disabled={saving}
// //                     >
// //                       {saving ? (
// //                         <>
// //                           <svg
// //                             className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
// //                             xmlns="http://www.w3.org/2000/svg"
// //                             fill="none"
// //                             viewBox="0 0 24 24"
// //                           >
// //                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                             <path
// //                               className="opacity-75"
// //                               fill="currentColor"
// //                               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// //                             ></path>
// //                           </svg>
// //                           Saving...
// //                         </>
// //                       ) : (
// //                         "Save New Customer"
// //                       )}
// //                     </motion.button>
// //                   </motion.div>
// //                 )}
// //               </>
// //             )}
// //           </motion.div>

// //           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
// //             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Bill Items</h3>
// //             <div className="overflow-x-auto">
// //               <table className="w-full mb-4">
// //                 <thead>
// //                   <tr className="bg-blue-500 text-white">
// //                     <th className="p-3 text-left">Product Name</th>
// //                     <th className="p-3 text-left">Barcode</th>
// //                     <th className="p-3 text-right">Price</th>
// //                     <th className="p-3 text-center">Quantity</th>
// //                     <th className="p-3 text-right">Total</th>
// //                     <th className="p-3 text-center">Action</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   <AnimatePresence>
// //                     {products.length > 0 ? (
// //                       products.map((product) => (
// //                         <motion.tr
// //                           key={product.id}
// //                           className="border-b hover:bg-gray-50"
// //                           variants={tableRowVariants}
// //                           initial="hidden"
// //                           animate="visible"
// //                           exit="exit"
// //                         >
// //                           <td className="p-3 text-left">{product.product_name}</td>
// //                           <td className="p-3 text-left">{product.barcode || "N/A"}</td>
// //                           <td className="p-3 text-right">{product.sale_price.toFixed(2)}</td>
// //                           <td className="p-3 text-center">{product.quantity}</td>
// //                           <td className="p-3 text-right">{(product.sale_price * product.quantity).toFixed(2)}</td>
// //                           <td className="p-3 text-center">
// //                             <motion.button
// //                               onClick={() => deleteProduct(product.product_name)}
// //                               className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
// //                               whileHover={{ scale: 1.05 }}
// //                               whileTap={{ scale: 0.95 }}
// //                             >
// //                               Remove
// //                             </motion.button>
// //                           </td>
// //                         </motion.tr>
// //                       ))
// //                     ) : (
// //                       <motion.tr variants={tableRowVariants} initial="hidden" animate="visible">
// //                         <td colSpan="6" className="p-4 text-center text-gray-500">
// //                           No products added to the bill yet.
// //                         </td>
// //                       </motion.tr>
// //                     )}
// //                   </AnimatePresence>
// //                 </tbody>
// //               </table>
// //             </div>
// //             {products.length > 0 && (
// //               <motion.div
// //                 className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.3 }}
// //               >
// //                 <div className="text-lg font-semibold text-gray-800">Total Amount:</div>
// //                 <div className="text-2xl font-bold text-blue-600">{totalAmount.toFixed(2)}</div>
// //               </motion.div>
// //             )}
// //           </motion.div>

// //           <motion.div className="mb-4" variants={itemVariants}>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status:</label>
// //             <select
// //               value={paymentStatus}
// //               onChange={(e) => setPaymentStatus(e.target.value)}
// //               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// //             >
// //               <option value="paid">Paid</option>
// //               <option value="unpaid">Unpaid</option>
// //             </select>
// //           </motion.div>

// //           {customerPhone && (
// //             <motion.div className="mb-4" variants={itemVariants}>
// //               <p className="text-sm font-medium text-gray-700">Customer Balance:</p>
// //               <p className={`text-lg font-bold ${customerBalance >= 0 ? "text-green-600" : "text-red-600"}`}>
// //                 {customerBalance.toFixed(2)}
// //               </p>
// //             </motion.div>
// //           )}

// //           <motion.div className="mb-4" variants={itemVariants}>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Customer Email (Optional):</label>
// //             <input
// //               type="email"
// //               value={customerEmail}
// //               onChange={(e) => setCustomerEmail(e.target.value)}
// //               placeholder="Enter customer email"
// //               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// //             />
// //           </motion.div>

// //           <motion.div className="text-center" variants={itemVariants}>
// //             <motion.button
// //               onClick={printBill}
// //               className="px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-500"
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.98 }}
// //             >
// //               Generate & Print Receipt
// //             </motion.button>
// //           </motion.div>
// //         </>
// //       )}

// //       <AnimatePresence>
// //         {error && (
// //           <motion.div
// //             className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
// //               error.includes("successfully") ? "bg-green-500" : "bg-red-500"
// //             } text-white max-w-sm`}
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: 50 }}
// //             transition={{ duration: 0.3 }}
// //           >
// //             {error}
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </motion.div>
// //   );
// // };

// // export default Billing;
// import React, { useState, useEffect, useContext } from "react";
// import { StoreContext } from "./StoreContext";
// import { motion, AnimatePresence } from "framer-motion";

// const Billing = () => {
//   const [products, setProducts] = useState([]);
//   const [allProducts, setAllProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState("");
//   const [barcodeInput, setBarcodeInput] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [error, setError] = useState(null);
//   const [customerName, setCustomerName] = useState("");
//   const [customerPhone, setCustomerPhone] = useState("");
//   const [customerEmail, setCustomerEmail] = useState("");
//   const [customers, setCustomers] = useState([]);
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [loadingCustomers, setLoadingCustomers] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [paymentStatus, setPaymentStatus] = useState("paid");
//   const [customerBalance, setCustomerBalance] = useState(0);
//   const { storeName, storeId } = useContext(StoreContext);
//   const storeAddress = localStorage.getItem("storeAddress") || "N/A";
//   const email = localStorage.getItem("email") || "premsaisid21@gmail.com";
//   const phoneNumber = localStorage.getItem("phoneNumber") || "8247204089";
//   const userId = localStorage.getItem("userId") || "1";

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch("http://localhost:5002/api/products", {
//           headers: { storeId, userId },
//         });
//         if (!response.ok) throw new Error("Failed to fetch products");
//         const data = await response.json();
//         if (data && Array.isArray(data) && data.length > 0) {
//           setAllProducts(data);
//           setSelectedProduct(data[0].product_name);
//         } else {
//           setError("No products available. Please add products first.");
//         }
//       } catch (error) {
//         setError("Failed to fetch products. Please check your connection.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (storeId) fetchProducts();
//     else {
//       setError("Store identification failed. Please try again.");
//       setLoading(false);
//     }
//   }, [storeId, userId]);

//   useEffect(() => {
//     const fetchCustomers = async () => {
//       setLoadingCustomers(true);
//       try {
//         const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}&userId=${userId}`);
//         if (!response.ok) throw new Error("Failed to fetch customers");
//         const data = await response.json();
//         setCustomers(data.customers || []);
//       } catch (error) {
//         console.error("Error fetching customers:", error);
//         setError("Failed to fetch customers.");
//       } finally {
//         setLoadingCustomers(false);
//       }
//     };

//     if (storeId) fetchCustomers();
//   }, [storeId, userId]);

//   useEffect(() => {
//     if (customerPhone) {
//       const fetchCustomerBalance = async () => {
//         try {
//           const res = await fetch(`http://localhost:5002/api/khatabook/customers/${customerPhone}/balance`, {
//             headers: { storeId },
//           });
//           if (!res.ok) throw new Error("Failed to fetch customer balance");
//           const data = await res.json();
//           setCustomerBalance(data.balance);
//         } catch (error) {
//           console.error("Error fetching customer balance:", error);
//           setError("Failed to fetch customer balance.");
//         }
//       };
//       fetchCustomerBalance();
//     }
//   }, [customerPhone, storeId]);

//   const addProduct = () => {
//     const selectedProductData = allProducts.find(
//       (p) => p.product_name === selectedProduct || p.barcode === barcodeInput
//     );

//     if (!selectedProductData) {
//       setError("Product not found. Check barcode or name.");
//       setTimeout(() => setError(null), 3000);
//       return;
//     }

//     setProducts((prevProducts) => {
//       const existingProduct = prevProducts.find(
//         (p) => p.product_name === selectedProductData.product_name
//       );

//       if (existingProduct) {
//         return prevProducts.map((p) =>
//           p.product_name === selectedProductData.product_name
//             ? { ...p, quantity: p.quantity + parseInt(quantity) }
//             : p
//         );
//       } else {
//         return [
//           ...prevProducts,
//           {
//             id: selectedProductData.id,
//             product_name: selectedProductData.product_name,
//             sale_price: parseFloat(selectedProductData.sale_price),
//             quantity: parseInt(quantity),
//             barcode: selectedProductData.barcode,
//           },
//         ];
//       }
//     });

//     setQuantity(1);
//     setBarcodeInput("");
//   };

//   const handleBarcodeKeyPress = (e) => {
//     if (e.key === "Enter" && barcodeInput) {
//       const product = allProducts.find((p) => p.barcode === barcodeInput);
//       if (product) {
//         setSelectedProduct(product.product_name);
//         addProduct();
//       } else {
//         setError("Product with this barcode not found.");
//         setTimeout(() => setError(null), 3000);
//       }
//     }
//   };

//   const deleteProduct = (productName) => {
//     setProducts(products.filter((p) => p.product_name !== productName));
//   };

//   const totalAmount = products.reduce(
//     (total, product) => total + product.sale_price * product.quantity,
//     0
//   );

//   const sendBillToEmail = async (billContent, recipientEmail) => {
//     try {
//       const response = await fetch("http://localhost:5002/api/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           to: recipientEmail,
//           subject: `Receipt from ${storeName} - Serial ${new Date().getTime()}`,
//           html: billContent,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || "Failed to send email");
//       }
//       console.log(`Email sent successfully to ${recipientEmail}`);
//       setError("Email sent successfully!");
//       setTimeout(() => setError(null), 3000);
//     } catch (error) {
//       console.error("Error sending email:", error);
//       setError("Failed to send email receipt.");
//       setTimeout(() => setError(null), 3000);
//     }
//   };

//   const printBill = async () => {
//     if (!products.length) {
//       setError("No items to print! Please add products to the bill.");
//       setTimeout(() => setError(null), 3000);
//       return;
//     }

//     if (!customerName || !customerPhone) {
//       setError("Please enter customer name and phone number.");
//       setTimeout(() => setError(null), 3000);
//       return;
//     }

//     const billData = {
//       products,
//       customerName,
//       customerPhone,
//       customerEmail,
//       userId,
//       paymentStatus,
//       storeName,
//       storeAddress,
//       phoneNumber,
//       email,
//     };

//     try {
//       const response = await fetch("http://localhost:5002/api/generate-bill", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           storeId,
//           userId,
//         },
//         body: JSON.stringify(billData),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || "Failed to generate bill");
//       }

//       const billSummary = await response.json();

//       // Generate receipt content
//       const billContent = `
//         <html>
//           <head>
//             <title>${storeName} - Receipt</title>
//             <style>
//               body { font-family: 'Segoe UI', sans-serif; background-color: #f0f1f6; color: #333; line-height: 1.6; }
//               .container { width: 80%; margin: 20px auto; background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); padding: 40px; }
//               .header { text-align: center; padding: 20px; background: linear-gradient(135deg, #00bcd4, #00796b); color: #fff; border-radius: 12px 12px 0 0; }
//               .header h1 { font-size: 36px; font-weight: 700; }
//               .bill-info { display: flex; justify-content: space-between; margin: 20px 0; font-size: 16px; }
//               .bill-info div { flex: 1; }
//               .bill-info .label { font-weight: 600; }
//               table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
//               th, td { padding: 15px; text-align: center; }
//               th { background-color: #00bcd4; color: #fff; text-transform: uppercase; }
//               td { background-color: #fafafa; }
//               tr:nth-child(even) td { background-color: #f5f5f5; }
//               .total-row { background-color: #00bcd4; color: #fff; font-weight: bold; font-size: 18px; }
//               .footer { text-align: center; padding: 20px; background-color: #00bcd4; color: #fff; border-radius: 0 0 12px 12px; }
//               .print-btn { padding: 15px 30px; background-color: #28a745; color: #fff; border: none; border-radius: 8px; cursor: pointer; }
//               .print-btn:hover { background-color: #218838; }
//               @media print {
//                 .container { box-shadow: none; margin: 0; padding: 10px; }
//                 .print-btn { display: none; }
//               }
//             </style>
//           </head>
//           <body>
//             <div class="container">
//               <div class="header">
//                 <h1>${storeName} - Receipt</h1>
//                 <p>Serial Number: ${billSummary.serialNumber}</p>
//                 <p>${new Date().toLocaleString()}</p>
//               </div>
//               <div class="bill-info">
//                 <div><p class="label">Store Name:</p><p>${storeName}</p></div>
//                 <div><p class="label">Store Address:</p><p>${storeAddress}</p></div>
//                 <div><p class="label">Phone Number:</p><p>${phoneNumber}</p></div>
//                 <div><p class="label">Email:</p><p>${email}</p></div>
//               </div>
//               <div class="bill-info">
//                 <div><p class="label">Customer Name:</p><p>${customerName}</p></div>
//                 <div><p class="label">Customer Phone:</p><p>${customerPhone}</p></div>
//                 <div><p class="label">Customer Email:</p><p>${customerEmail || "N/A"}</p></div>
//               </div>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Product Name</th>
//                     <th>Barcode</th>
//                     <th>Price</th>
//                     <th>Quantity</th>
//                     <th>Total</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   ${products
//                     .map(
//                       (product) => `
//                     <tr>
//                       <td>${product.product_name}</td>
//                       <td>${product.barcode || "N/A"}</td>
//                       <td>${product.sale_price.toFixed(2)}</td>
//                       <td>${product.quantity}</td>
//                       <td>${(product.sale_price * product.quantity).toFixed(2)}</td>
//                     </tr>
//                   `
//                     )
//                     .join("")}
//                   <tr class="total-row">
//                     <td colspan="4">Total Amount</td>
//                     <td>${totalAmount.toFixed(2)}</td>
//                   </tr>
//                 </tbody>
//               </table>
//               <div class="footer">
//                 <p>Thank you for shopping with us!</p>
//                 <button class="print-btn" onclick="window.print()">Print this Receipt</button>
//               </div>
//             </div>
//           </body>
//         </html>`;

//       // Display receipt in subwindow
//       const billWindow = window.open("", "Bill", "width=800,height=600");
//       if (billWindow) {
//         billWindow.document.write(billContent);
//         billWindow.document.close();
//       } else {
//         setError("Failed to open receipt window. Please allow pop-ups.");
//         setTimeout(() => setError(null), 3000);
//         return;
//       }

//       // Send email if customerEmail is provided
//       if (customerEmail) {
//         await sendBillToEmail(billContent, customerEmail);
//       } else {
//         console.log("No customer email provided; skipping email send.");
//       }

//       // Reset form
//       setProducts([]);
//       setCustomerName("");
//       setCustomerPhone("");
//       setCustomerEmail("");
//       setPaymentStatus("paid");
//     } catch (error) {
//       setError(`Error generating bill: ${error.message}`);
//       setTimeout(() => setError(null), 3000);
//       console.error("Error in printBill:", error);
//     }
//   };

//   const handleCustomerSelect = (e) => {
//     const selectedCustomerPhone = e.target.value;
//     const customer = customers.find((c) => c.phone === selectedCustomerPhone);
//     setSelectedCustomer(customer);
//     setCustomerName(customer ? customer.name : "");
//     setCustomerPhone(customer ? customer.phone : "");
//     setCustomerEmail(customer ? customer.email || "" : "");
//   };

//   const handleNewCustomerSave = async () => {
//     if (!customerName || !customerPhone) {
//       setError("Please enter customer name and phone number.");
//       setTimeout(() => setError(null), 3000);
//       return;
//     }

//     setSaving(true);
//     try {
//       const response = await fetch("http://localhost:5008/api/customers", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: customerName,
//           phone: customerPhone,
//           email: customerEmail,
//           storeId,
//         }),
//       });

//       if (!response.ok) throw new Error("Failed to add customer");
//       const newCustomer = await response.json();
//       setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
//       setSelectedCustomer(newCustomer);
//       setError("Customer added successfully!");
//       setTimeout(() => setError(null), 3000);
//     } catch (error) {
//       setError("Failed to add customer.");
//       setTimeout(() => setError(null), 3000);
//     } finally {
//       setSaving(false);
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 } },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
//   };

//   const tableRowVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
//     exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
//   };

//   return (
//     <motion.div
//       className="max-w-5xl mx-auto p-8 bg-white shadow-2xl rounded-lg"
//       style={{ background: "linear-gradient(to bottom, #ffffff, #f9fafb)" }}
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <motion.div className="mb-8 text-center" variants={itemVariants}>
//         <h1 className="text-4xl font-bold mb-2 text-blue-600">Receipt Generator</h1>
//         <div className="h-1 w-32 bg-blue-600 mx-auto rounded-full mb-4"></div>
//         <h2 className="text-2xl font-semibold text-gray-700">{storeName} Store</h2>
//       </motion.div>

//       {loading ? (
//         <div className="flex justify-center items-center py-12">
//           <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//         </div>
//       ) : (
//         <>
//           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
//             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Product Selection</h3>
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="flex-1">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Scan Barcode:</label>
//                 <input
//                   type="text"
//                   value={barcodeInput}
//                   onChange={(e) => setBarcodeInput(e.target.value)}
//                   onKeyPress={handleBarcodeKeyPress}
//                   placeholder="Scan or enter barcode"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div className="flex-1">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Or Select Product:</label>
//                 <select
//                   value={selectedProduct}
//                   onChange={(e) => setSelectedProduct(e.target.value)}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   {allProducts.map((product) => (
//                     <option key={product.id} value={product.product_name}>
//                       {product.product_name} - {parseFloat(product.sale_price).toFixed(2)} (Barcode: {product.barcode})
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="flex-1">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
//                 <input
//                   type="number"
//                   value={quantity}
//                   min="1"
//                   onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div className="flex items-end">
//                 <motion.button
//                   onClick={addProduct}
//                   className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Add to Bill
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
//             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Customer Information</h3>
//             {loadingCustomers ? (
//               <div className="flex justify-center items-center py-4">
//                 <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//               </div>
//             ) : (
//               <>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Select Existing Customer:</label>
//                   <select
//                     value={customerPhone}
//                     onChange={handleCustomerSelect}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   >
//                     <option value="">Select Customer</option>
//                     {customers.map((customer) => (
//                       <option key={customer.phone} value={customer.phone}>
//                         {customer.name} - {customer.phone}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 {!selectedCustomer && (
//                   <motion.div
//                     className="p-4 bg-gray-50 rounded-lg mt-4"
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <h4 className="text-md font-medium mb-3 text-gray-700">New Customer</h4>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name:</label>
//                         <input
//                           type="text"
//                           value={customerName}
//                           onChange={(e) => setCustomerName(e.target.value)}
//                           placeholder="Full Name"
//                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number:</label>
//                         <input
//                           type="text"
//                           value={customerPhone}
//                           onChange={(e) => setCustomerPhone(e.target.value)}
//                           placeholder="Phone Number"
//                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         />
//                       </div>
//                     </div>
//                     <motion.button
//                       onClick={handleNewCustomerSave}
//                       className="w-full md:w-auto px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       disabled={saving}
//                     >
//                       {saving ? (
//                         <>
//                           <svg
//                             className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                           >
//                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                             <path
//                               className="opacity-75"
//                               fill="currentColor"
//                               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                             ></path>
//                           </svg>
//                           Saving...
//                         </>
//                       ) : (
//                         "Save New Customer"
//                       )}
//                     </motion.button>
//                   </motion.div>
//                 )}
//               </>
//             )}
//           </motion.div>

//           <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
//             <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Bill Items</h3>
//             <div className="overflow-x-auto">
//               <table className="w-full mb-4">
//                 <thead>
//                   <tr className="bg-blue-500 text-white">
//                     <th className="p-3 text-left">Product Name</th>
//                     <th className="p-3 text-left">Barcode</th>
//                     <th className="p-3 text-right">Price</th>
//                     <th className="p-3 text-center">Quantity</th>
//                     <th className="p-3 text-right">Total</th>
//                     <th className="p-3 text-center">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <AnimatePresence>
//                     {products.length > 0 ? (
//                       products.map((product) => (
//                         <motion.tr
//                           key={product.id}
//                           className="border-b hover:bg-gray-50"
//                           variants={tableRowVariants}
//                           initial="hidden"
//                           animate="visible"
//                           exit="exit"
//                         >
//                           <td className="p-3 text-left">{product.product_name}</td>
//                           <td className="p-3 text-left">{product.barcode || "N/A"}</td>
//                           <td className="p-3 text-right">{product.sale_price.toFixed(2)}</td>
//                           <td className="p-3 text-center">{product.quantity}</td>
//                           <td className="p-3 text-right">{(product.sale_price * product.quantity).toFixed(2)}</td>
//                           <td className="p-3 text-center">
//                             <motion.button
//                               onClick={() => deleteProduct(product.product_name)}
//                               className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
//                               whileHover={{ scale: 1.05 }}
//                               whileTap={{ scale: 0.95 }}
//                             >
//                               Remove
//                             </motion.button>
//                           </td>
//                         </motion.tr>
//                       ))
//                     ) : (
//                       <motion.tr variants={tableRowVariants} initial="hidden" animate="visible">
//                         <td colSpan="6" className="p-4 text-center text-gray-500">
//                           No products added to the bill yet.
//                         </td>
//                       </motion.tr>
//                     )}
//                   </AnimatePresence>
//                 </tbody>
//               </table>
//             </div>
//             {products.length > 0 && (
//               <motion.div
//                 className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="text-lg font-semibold text-gray-800">Total Amount:</div>
//                 <div className="text-2xl font-bold text-blue-600">{totalAmount.toFixed(2)}</div>
//               </motion.div>
//             )}
//           </motion.div>

//           <motion.div className="mb-4" variants={itemVariants}>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status:</label>
//             <select
//               value={paymentStatus}
//               onChange={(e) => setPaymentStatus(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             >
//               <option value="paid">Paid</option>
//               <option value="unpaid">Unpaid</option>
//             </select>
//           </motion.div>

//           {customerPhone && (
//             <motion.div className="mb-4" variants={itemVariants}>
//               <p className="text-sm font-medium text-gray-700">Customer Balance:</p>
//               <p className={`text-lg font-bold ${customerBalance >= 0 ? "text-green-600" : "text-red-600"}`}>
//                 {customerBalance.toFixed(2)}
//               </p>
//             </motion.div>
//           )}

//           <motion.div className="mb-4" variants={itemVariants}>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Customer Email (Optional):</label>
//             <input
//               type="email"
//               value={customerEmail}
//               onChange={(e) => setCustomerEmail(e.target.value)}
//               placeholder="Enter customer email"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </motion.div>

//           <motion.div className="text-center" variants={itemVariants}>
//             <motion.button
//               onClick={printBill}
//               className="px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-500"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               Generate & Print Receipt
//             </motion.button>
//           </motion.div>
//         </>
//       )}

//       <AnimatePresence>
//         {error && (
//           <motion.div
//             className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
//               error.includes("successfully") ? "bg-green-500" : "bg-red-500"
//             } text-white max-w-sm`}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             transition={{ duration: 0.3 }}
//           >
//             {error}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default Billing;
import React, { useState, useEffect, useContext } from "react";
import { StoreContext } from "./StoreContext";
import { motion, AnimatePresence } from "framer-motion";

const Billing = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [barcodeInput, setBarcodeInput] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingCustomers, setLoadingCustomers] = useState(true);
  const [saving, setSaving] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("paid");
  const [customerBalance, setCustomerBalance] = useState(0);
  const { storeName, storeId } = useContext(StoreContext);
  const storeAddress = localStorage.getItem("storeAddress") || "N/A";
  const email = localStorage.getItem("email") || "premsaisid21@gmail.com";
  const phoneNumber = localStorage.getItem("phoneNumber") || "8247204089";
  const userId = localStorage.getItem("userId") || "1";

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5002/api/products", {
          headers: { storeId, userId },
        });
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        if (data && Array.isArray(data) && data.length > 0) {
          setAllProducts(data);
          setSelectedProduct(data[0].product_name);
        } else {
          setError("No products available. Please add products first.");
        }
      } catch (error) {
        setError("Failed to fetch products. Please check your connection.");
      } finally {
        setLoading(false);
      }
    };

    if (storeId) fetchProducts();
    else {
      setError("Store identification failed. Please try again.");
      setLoading(false);
    }
  }, [storeId, userId]);

  useEffect(() => {
    const fetchCustomers = async () => {
      setLoadingCustomers(true);
      try {
        const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}&userId=${userId}`);
        if (!response.ok) throw new Error("Failed to fetch customers");
        const data = await response.json();
        setCustomers(data.customers || []);
      } catch (error) {
        console.error("Error fetching customers:", error);
        setError("Failed to fetch customers.");
      } finally {
        setLoadingCustomers(false);
      }
    };

    if (storeId) fetchCustomers();
  }, [storeId, userId]);

  useEffect(() => {
    if (customerPhone) {
      const fetchCustomerBalance = async () => {
        try {
          const res = await fetch(`http://localhost:5002/api/khatabook/customers/${customerPhone}/balance`, {
            headers: { storeId },
          });
          if (!res.ok) throw new Error("Failed to fetch customer balance");
          const data = await res.json();
          setCustomerBalance(data.balance);
        } catch (error) {
          console.error("Error fetching customer balance:", error);
          setError("Failed to fetch customer balance.");
        }
      };
      fetchCustomerBalance();
    }
  }, [customerPhone, storeId]);

  const addProduct = () => {
    const selectedProductData = allProducts.find(
      (p) => p.product_name === selectedProduct || p.barcode === barcodeInput
    );

    if (!selectedProductData) {
      setError("Product not found. Check barcode or name.");
      setTimeout(() => setError(null), 3000);
      return;
    }

    setProducts((prevProducts) => {
      const existingProduct = prevProducts.find(
        (p) => p.product_name === selectedProductData.product_name
      );

      if (existingProduct) {
        return prevProducts.map((p) =>
          p.product_name === selectedProductData.product_name
            ? { ...p, quantity: p.quantity + parseInt(quantity) }
            : p
        );
      } else {
        return [
          ...prevProducts,
          {
            id: selectedProductData.id,
            product_name: selectedProductData.product_name,
            sale_price: parseFloat(selectedProductData.sale_price),
            quantity: parseInt(quantity),
            barcode: selectedProductData.barcode,
          },
        ];
      }
    });

    setQuantity(1);
    setBarcodeInput("");
  };

  const handleBarcodeKeyPress = (e) => {
    if (e.key === "Enter" && barcodeInput) {
      const product = allProducts.find((p) => p.barcode === barcodeInput);
      if (product) {
        setSelectedProduct(product.product_name);
        addProduct();
      } else {
        setError("Product with this barcode not found.");
        setTimeout(() => setError(null), 3000);
      }
    }
  };

  const deleteProduct = (productName) => {
    setProducts(products.filter((p) => p.product_name !== productName));
  };

  const totalAmount = products.reduce(
    (total, product) => total + product.sale_price * product.quantity,
    0
  );

  const sendBillToEmail = async (billData) => {
    try {
      const response = await fetch("http://localhost:5002/api/send-pdf-bill", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "storeId": storeId,
          "userId": userId,
        },
        body: JSON.stringify(billData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send PDF bill");
      }

      console.log(`PDF bill sent successfully to ${billData.customerEmail}`);
      setError("PDF bill sent successfully!");
      setTimeout(() => setError(null), 3000);
    } catch (error) {
      console.error("Error sending PDF bill:", error);
      setError("Failed to send PDF bill.");
      setTimeout(() => setError(null), 3000);
    }
  };

  const printBill = async () => {
    if (!products.length) {
      setError("No items to print! Please add products to the bill.");
      setTimeout(() => setError(null), 3000);
      return;
    }

    if (!customerName || !customerPhone) {
      setError("Please enter customer name and phone number.");
      setTimeout(() => setError(null), 3000);
      return;
    }

    const billData = {
      products,
      customerName,
      customerPhone,
      customerEmail,
      userId,
      paymentStatus,
      storeName,
      storeAddress,
      phoneNumber,
      email,
    };

    try {
      const response = await fetch("http://localhost:5002/api/generate-bill", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          storeId,
          userId,
        },
        body: JSON.stringify(billData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate bill");
      }

      const billSummary = await response.json();

      // Generate receipt content for subwindow (HTML)
      const billContent = `
        <html>
          <head>
            <title>${storeName} - Receipt</title>
            <style>
              body { font-family: 'Segoe UI', sans-serif; background-color: #f0f1f6; color: #333; line-height: 1.6; }
              .container { width: 80%; margin: 20px auto; background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); padding: 40px; }
              .header { text-align: center; padding: 20px; background: linear-gradient(135deg, #00bcd4, #00796b); color: #fff; border-radius: 12px 12px 0 0; }
              .header h1 { font-size: 36px; font-weight: 700; }
              .bill-info { display: flex; justify-content: space-between; margin: 20px 0; font-size: 16px; }
              .bill-info div { flex: 1; }
              .bill-info .label { font-weight: 600; }
              table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
              th, td { padding: 15px; text-align: center; }
              th { background-color: #00bcd4; color: #fff; text-transform: uppercase; }
              td { background-color: #fafafa; }
              tr:nth-child(even) td { background-color: #f5f5f5; }
              .total-row { background-color: #00bcd4; color: #fff; font-weight: bold; font-size: 18px; }
              .footer { text-align: center; padding: 20px; background-color: #00bcd4; color: #fff; border-radius: 0 0 12px 12px; }
              .print-btn { padding: 15px 30px; background-color: #28a745; color: #fff; border: none; border-radius: 8px; cursor: pointer; }
              .print-btn:hover { background-color: #218838; }
              @media print {
                .container { box-shadow: none; margin: 0; padding: 10px; }
                .print-btn { display: none; }
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>${storeName} - Receipt</h1>
                <p>Serial Number: ${billSummary.serialNumber}</p>
                <p>${new Date().toLocaleString()}</p>
              </div>
              <div class="bill-info">
                <div><p class="label">Store Name:</p><p>${storeName}</p></div>
                <div><p class="label">Store Address:</p><p>${storeAddress}</p></div>
                <div><p class="label">Phone Number:</p><p>${phoneNumber}</p></div>
                <div><p class="label">Email:</p><p>${email}</p></div>
              </div>
              <div class="bill-info">
                <div><p class="label">Customer Name:</p><p>${customerName}</p></div>
                <div><p class="label">Customer Phone:</p><p>${customerPhone}</p></div>
                <div><p class="label">Customer Email:</p><p>${customerEmail || "N/A"}</p></div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Barcode</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${products
                    .map(
                      (product) => `
                    <tr>
                      <td>${product.product_name}</td>
                      <td>${product.barcode || "N/A"}</td>
                      <td>${product.sale_price.toFixed(2)}</td>
                      <td>${product.quantity}</td>
                      <td>${(product.sale_price * product.quantity).toFixed(2)}</td>
                    </tr>
                  `
                    )
                    .join("")}
                  <tr class="total-row">
                    <td colspan="4">Total Amount</td>
                    <td>${totalAmount.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
              <div class="footer">
                <p>Thank you for shopping with us!</p>
                <button class="print-btn" onclick="window.print()">Print this Receipt</button>
              </div>
            </div>
          </body>
        </html>`;

      // Display receipt in subwindow
      const billWindow = window.open("", "Bill", "width=800,height=600");
      if (billWindow) {
        billWindow.document.write(billContent);
        billWindow.document.close();
      } else {
        setError("Failed to open receipt window. Please allow pop-ups.");
        setTimeout(() => setError(null), 3000);
        return;
      }

      // Send PDF bill via email if customerEmail is provided
      if (customerEmail) {
        await sendBillToEmail(billData);
      } else {
        console.log("No customer email provided; skipping email send.");
      }

      // Reset form
      setProducts([]);
      setCustomerName("");
      setCustomerPhone("");
      setCustomerEmail("");
      setPaymentStatus("paid");
    } catch (error) {
      setError(`Error generating bill: ${error.message}`);
      setTimeout(() => setError(null), 3000);
      console.error("Error in printBill:", error);
    }
  };

  const handleCustomerSelect = (e) => {
    const selectedCustomerPhone = e.target.value;
    const customer = customers.find((c) => c.phone === selectedCustomerPhone);
    setSelectedCustomer(customer);
    setCustomerName(customer ? customer.name : "");
    setCustomerPhone(customer ? customer.phone : "");
    setCustomerEmail(customer ? customer.email || "" : "");
  };

  const handleNewCustomerSave = async () => {
    if (!customerName || !customerPhone) {
      setError("Please enter customer name and phone number.");
      setTimeout(() => setError(null), 3000);
      return;
    }

    setSaving(true);
    try {
      const response = await fetch("http://localhost:5008/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: customerName,
          phone: customerPhone,
          email: customerEmail,
          storeId,
        }),
      });

      if (!response.ok) throw new Error("Failed to add customer");
      const newCustomer = await response.json();
      setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
      setSelectedCustomer(newCustomer);
      setError("Customer added successfully!");
      setTimeout(() => setError(null), 3000);
    } catch (error) {
      setError("Failed to add customer.");
      setTimeout(() => setError(null), 3000);
    } finally {
      setSaving(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  const tableRowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto p-8 bg-white shadow-2xl rounded-lg"
      style={{ background: "linear-gradient(to bottom, #ffffff, #f9fafb)" }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="mb-8 text-center" variants={itemVariants}>
        <h1 className="text-4xl font-bold mb-2 text-blue-600">Receipt Generator</h1>
        <div className="h-1 w-32 bg-blue-600 mx-auto rounded-full mb-4"></div>
        <h2 className="text-2xl font-semibold text-gray-700">{storeName} Store</h2>
      </motion.div>

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Product Selection</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Scan Barcode:</label>
                <input
                  type="text"
                  value={barcodeInput}
                  onChange={(e) => setBarcodeInput(e.target.value)}
                  onKeyPress={handleBarcodeKeyPress}
                  placeholder="Scan or enter barcode"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Or Select Product:</label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full p-3 border border-gray-300 Rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {allProducts.map((product) => (
                    <option key={product.id} value={product.product_name}>
                      {product.product_name} - {parseFloat(product.sale_price).toFixed(2)} (Barcode: {product.barcode})
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
                <input
                  type="number"
                  value={quantity}
                  min="1"
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex items-end">
                <motion.button
                  onClick={addProduct}
                  className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Add to Bill
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Customer Information</h3>
            {loadingCustomers ? (
              <div className="flex justify-center items-center py-4">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Existing Customer:</label>
                  <select
                    value={customerPhone}
                    onChange={handleCustomerSelect}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Customer</option>
                    {customers.map((customer) => (
                      <option key={customer.phone} value={customer.phone}>
                        {customer.name} - {customer.phone}
                      </option>
                    ))}
                  </select>
                </div>
                {!selectedCustomer && (
                  <motion.div
                    className="p-4 bg-gray-50 rounded-lg mt-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-md font-medium mb-3 text-gray-700">New Customer</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name:</label>
                        <input
                          type="text"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder="Full Name"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number:</label>
                        <input
                          type="text"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          placeholder="Phone Number"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <motion.button
                      onClick={handleNewCustomerSave}
                      className="w-full md:w-auto px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={saving}
                    >
                      {saving ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Saving...
                        </>
                      ) : (
                        "Save New Customer"
                      )}
                    </motion.button>
                  </motion.div>
                )}
              </>
            )}
          </motion.div>

          <motion.div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Bill Items</h3>
            <div className="overflow-x-auto">
              <table className="w-full mb-4">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="p-3 text-left">Product Name</th>
                    <th className="p-3 text-left">Barcode</th>
                    <th className="p-3 text-right">Price</th>
                    <th className="p-3 text-center">Quantity</th>
                    <th className="p-3 text-right">Total</th>
                    <th className="p-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {products.length > 0 ? (
                      products.map((product) => (
                        <motion.tr
                          key={product.id}
                          className="border-b hover:bg-gray-50"
                          variants={tableRowVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <td className="p-3 text-left">{product.product_name}</td>
                          <td className="p-3 text-left">{product.barcode || "N/A"}</td>
                          <td className="p-3 text-right">{product.sale_price.toFixed(2)}</td>
                          <td className="p-3 text-center">{product.quantity}</td>
                          <td className="p-3 text-right">{(product.sale_price * product.quantity).toFixed(2)}</td>
                          <td className="p-3 text-center">
                            <motion.button
                              onClick={() => deleteProduct(product.product_name)}
                              className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Remove
                            </motion.button>
                          </td>
                        </motion.tr>
                      ))
                    ) : (
                      <motion.tr variants={tableRowVariants} initial="hidden" animate="visible">
                        <td colSpan="6" className="p-4 text-center text-gray-500">
                          No products added to the bill yet.
                        </td>
                      </motion.tr>
                    )}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
            {products.length > 0 && (
              <motion.div
                className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-lg font-semibold text-gray-800">Total Amount:</div>
                <div className="text-2xl font-bold text-blue-600">{totalAmount.toFixed(2)}</div>
              </motion.div>
            )}
          </motion.div>

          <motion.div className="mb-4" variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status:</label>
            <select
              value={paymentStatus}
              onChange={(e) => setPaymentStatus(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
            </select>
          </motion.div>

          {customerPhone && (
            <motion.div className="mb-4" variants={itemVariants}>
              <p className="text-sm font-medium text-gray-700">Customer Balance:</p>
              <p className={`text-lg font-bold ${customerBalance >= 0 ? "text-green-600" : "text-red-600"}`}>
                {customerBalance.toFixed(2)}
              </p>
            </motion.div>
          )}

          <motion.div className="mb-4" variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700 mb-1">Customer Email (Optional):</label>
            <input
              type="email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              placeholder="Enter customer email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </motion.div>

          <motion.div className="text-center" variants={itemVariants}>
            <motion.button
              onClick={printBill}
              className="px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Generate & Print Receipt
            </motion.button>
          </motion.div>
        </>
      )}

      <AnimatePresence>
        {error && (
          <motion.div
            className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
              error.includes("successfully") ? "bg-green-500" : "bg-red-500"
            } text-white max-w-sm`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Billing;