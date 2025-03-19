import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';

const SupplierOrderForm = ({ supplier = {}, onSave }) => {
  const [order, setOrder] = useState({
    supplierId: supplier.id || '',
    supplierName: supplier.name || '',
    orderDate: new Date().toISOString().split('T')[0],
    deliveryDate: '',
    orderStatus: 'Pending',
    paymentStatus: 'Unpaid',
    shippingMethod: '',
    shippingAddress: '',
    trackingNumber: '',
    specialInstructions: '',
    urgencyLevel: 'Normal',
    supplierContact: supplier.contactPerson || '',
    supplierEmail: supplier.email || '',
    supplierPhone: supplier.phone || '',
    discount: 0,
    tax: 0,
    items: [
      {
        id: 1,
        productName: '',
        quantity: 1,
        unitPrice: 0,
        totalCost: 0,
      }
    ]
  });

  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', defaultPrice: 10.99 },
    { id: 2, name: 'Product 2', defaultPrice: 24.99 },
    { id: 3, name: 'Product 3', defaultPrice: 5.50 },
    { id: 4, name: 'Product 4', defaultPrice: 15.75 },
    // Normally would fetch these from an API
  ]);

  const [files, setFiles] = useState([]);
  
  useEffect(() => {
    // Calculate totals whenever items change
    calculateTotals();
  }, [order.items, order.discount, order.tax]);

  const calculateTotals = () => {
    // Update each item's total cost
    const updatedItems = order.items.map(item => ({
      ...item,
      totalCost: item.quantity * item.unitPrice
    }));
    
    setOrder(prev => ({
      ...prev,
      items: updatedItems
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrder(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...order.items];
    
    updatedItems[index][field] = value;
    
    // If changing product, update price from product list
    if (field === 'productName') {
      const selectedProduct = products.find(p => p.name === value);
      if (selectedProduct) {
        updatedItems[index].unitPrice = selectedProduct.defaultPrice;
      }
    }
    
    // Update total cost for this item
    if (field === 'quantity' || field === 'unitPrice') {
      updatedItems[index].totalCost = 
        updatedItems[index].quantity * updatedItems[index].unitPrice;
    }
    
    setOrder(prev => ({
      ...prev,
      items: updatedItems
    }));
  };

  const addItem = () => {
    setOrder(prev => ({
      ...prev,
      items: [
        ...prev.items,
        {
          id: prev.items.length + 1,
          productName: '',
          quantity: 1,
          unitPrice: 0,
          totalCost: 0,
        }
      ]
    }));
  };

  const removeItem = (index) => {
    const updatedItems = [...order.items];
    updatedItems.splice(index, 1);
    
    setOrder(prev => ({
      ...prev,
      items: updatedItems
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFiles([...files, ...e.target.files]);
    }
  };

  const removeFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const submitOrder = () => {
    if (onSave) {
      onSave(order, files);
    }
    
    // Here you would typically save to a database
    alert("Order submitted successfully!");
    generatePDF();
  };

  const orderTotal = order.items.reduce((sum, item) => sum + item.totalCost, 0);
  const discountAmount = (orderTotal * order.discount) / 100;
  const taxAmount = ((orderTotal - discountAmount) * order.tax) / 100;
  const grandTotal = orderTotal - discountAmount + taxAmount;

  const generatePDF = () => {
    try {
      const doc = new jsPDF();
      
      // Add header
      doc.setFontSize(20);
      doc.text('PURCHASE ORDER', 105, 15, { align: 'center' });
      
      // Order details
      doc.setFontSize(12);
      doc.text(`Supplier: ${order.supplierName}`, 14, 30);
      doc.text(`Order Date: ${order.orderDate}`, 14, 37);
      doc.text(`Delivery Date: ${order.deliveryDate}`, 14, 44);
      doc.text(`Status: ${order.orderStatus}`, 14, 51);
      
      // Supplier info
      doc.text(`Contact: ${order.supplierContact}`, 130, 30);
      doc.text(`Phone: ${order.supplierPhone}`, 130, 37);
      doc.text(`Email: ${order.supplierEmail}`, 130, 44);
      
      // Manual table creation
      const startY = 60;
      const cellPadding = 10;
      const colWidth = [80, 30, 30, 30];
      
      // Table header
      doc.setFillColor(240, 240, 240);
      doc.rect(14, startY, 170, 10, 'F');
      doc.setFont('helvetica', 'bold');
      doc.text("Product", 14 + cellPadding, startY + 7);
      doc.text("Quantity", 14 + colWidth[0] + cellPadding, startY + 7);
      doc.text("Unit Price", 14 + colWidth[0] + colWidth[1] + cellPadding, startY + 7);
      doc.text("Total", 14 + colWidth[0] + colWidth[1] + colWidth[2] + cellPadding, startY + 7);
      
      // Table rows
      let currentY = startY + 10;
      doc.setFont('helvetica', 'normal');
      
      order.items.forEach((item, index) => {
        doc.rect(14, currentY, colWidth[0], 10);
        doc.rect(14 + colWidth[0], currentY, colWidth[1], 10);
        doc.rect(14 + colWidth[0] + colWidth[1], currentY, colWidth[2], 10);
        doc.rect(14 + colWidth[0] + colWidth[1] + colWidth[2], currentY, colWidth[3], 10);
        
        doc.text(item.productName, 14 + cellPadding, currentY + 7);
        doc.text(item.quantity.toString(), 14 + colWidth[0] + cellPadding, currentY + 7);
        doc.text(`$${item.unitPrice.toFixed(2)}`, 14 + colWidth[0] + colWidth[1] + cellPadding, currentY + 7);
        doc.text(`$${item.totalCost.toFixed(2)}`, 14 + colWidth[0] + colWidth[1] + colWidth[2] + cellPadding, currentY + 7);
        
        currentY += 10;
      });
      
      // Totals
      const finalY = currentY + 10;
      doc.text(`Subtotal: $${orderTotal.toFixed(2)}`, 140, finalY);
      doc.text(`Discount (${order.discount}%): $${discountAmount.toFixed(2)}`, 140, finalY + 7);
      doc.text(`Tax (${order.tax}%): $${taxAmount.toFixed(2)}`, 140, finalY + 14);
      doc.text(`TOTAL: $${grandTotal.toFixed(2)}`, 140, finalY + 21);
      
      // Shipping info
      doc.text('Shipping Information:', 14, finalY);
      doc.text(`Method: ${order.shippingMethod}`, 14, finalY + 7);
      doc.text(`Address: ${order.shippingAddress}`, 14, finalY + 14);
      
      // Special instructions
      if (order.specialInstructions) {
        doc.text('Special Instructions:', 14, finalY + 25);
        doc.text(order.specialInstructions, 14, finalY + 32);
      }
      
      // Save the PDF
      doc.save(`Order_${order.supplierName}_${order.orderDate}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("There was an error generating the PDF. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Place Order to Supplier</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Supplier Name</label>
          <input
            type="text"
            name="supplierName"
            value={order.supplierName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            readOnly={supplier.name ? true : false}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Order Date</label>
          <input
            type="date"
            name="orderDate"
            value={order.orderDate}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Date</label>
          <input
            type="date"
            name="deliveryDate"
            value={order.deliveryDate}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Order Status</label>
          <select
            name="orderStatus"
            value={order.orderStatus}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status</label>
          <select
            name="paymentStatus"
            value={order.paymentStatus}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Unpaid">Unpaid</option>
            <option value="Partially Paid">Partially Paid</option>
            <option value="Paid">Paid</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Urgency Level</label>
          <select
            name="urgencyLevel"
            value={order.urgencyLevel}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Normal">Normal</option>
            <option value="Urgent">Urgent</option>
            <option value="Priority">Priority</option>
          </select>
        </div>
      </div>
      
      {/* Contact Information */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Supplier Contact</label>
          <input
            type="text"
            name="supplierContact"
            value={order.supplierContact}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Supplier Email</label>
          <input
            type="email"
            name="supplierEmail"
            value={order.supplierEmail}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Supplier Phone</label>
          <input
            type="text"
            name="supplierPhone"
            value={order.supplierPhone}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      
      {/* Shipping Information */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Shipping Method</label>
          <select
            name="shippingMethod"
            value={order.shippingMethod}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Method</option>
            <option value="Courier">Courier</option>
            <option value="Truck">Truck</option>
            <option value="Pickup">Pickup</option>
            <option value="Express Delivery">Express Delivery</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tracking Number</label>
          <input
            type="text"
            name="trackingNumber"
            value={order.trackingNumber}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
          <textarea
            name="shippingAddress"
            value={order.shippingAddress}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="2"
          ></textarea>
        </div>
      </div>
      
      {/* Order Items */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">Products</h3>
          <button 
            onClick={addItem}
            type="button" 
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add Product
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border text-left">Product Name</th>
                <th className="p-2 border text-left">Quantity</th>
                <th className="p-2 border text-left">Unit Price</th>
                <th className="p-2 border text-left">Total</th>
                <th className="p-2 border text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, index) => (
                <tr key={index}>
                  <td className="p-2 border">
                    <select
                      value={item.productName}
                      onChange={(e) => handleItemChange(index, 'productName', e.target.value)}
                      className="w-full p-1 border border-gray-300 rounded"
                    >
                      <option value="">Select Product</option>
                      {products.map(product => (
                        <option key={product.id} value={product.name}>
                          {product.name}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="p-2 border">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
                      className="w-full p-1 border border-gray-300 rounded"
                    />
                  </td>
                  <td className="p-2 border">
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={item.unitPrice}
                      onChange={(e) => handleItemChange(index, 'unitPrice', parseFloat(e.target.value))}
                      className="w-full p-1 border border-gray-300 rounded"
                    />
                  </td>
                  <td className="p-2 border">
                    ${item.totalCost.toFixed(2)}
                  </td>
                  <td className="p-2 border">
                    <button
                      onClick={() => removeItem(index)}
                      type="button"
                      className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                      disabled={order.items.length === 1}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Order Totals */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Discount (%)</label>
          <input
            type="number"
            name="discount"
            min="0"
            max="100"
            value={order.discount}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tax (%)</label>
          <input
            type="number"
            name="tax"
            min="0"
            max="100"
            value={order.tax}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      
      <div className="flex justify-end mb-6">
        <div className="w-64">
          <div className="flex justify-between py-2 border-b">
            <span>Subtotal:</span>
            <span>${orderTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span>Discount:</span>
            <span>-${discountAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span>Tax:</span>
            <span>${taxAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 font-bold">
            <span>Grand Total:</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      {/* Additional Information */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Special Instructions</label>
        <textarea
          name="specialInstructions"
          value={order.specialInstructions}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          rows="3"
        ></textarea>
      </div>
      
      {/* File Attachments */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Attachments</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
          multiple
        />
        
        {files.length > 0 && (
          <div className="mt-2">
            <p className="text-sm font-medium text-gray-700 mb-1">Attached Files:</p>
            <ul className="list-disc pl-5">
              {files.map((file, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span>{file.name}</span>
                  <button
                    onClick={() => removeFile(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          onClick={() => window.history.back()}
        >
          Cancel
        </button>
        
        <button
          type="button"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          onClick={generatePDF}
        >
          Generate PDF
        </button>
        
        <button
          type="button"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={submitOrder}
        >
          Submit Order
        </button>
      </div>
    </div>
  );
};

export default SupplierOrderForm;