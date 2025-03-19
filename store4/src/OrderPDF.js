import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const OrderPDF = ({ order }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Order #{order.id}</Text>
        <Text style={styles.text}>Supplier: {order.supplierId}</Text>
        <Text style={styles.text}>Order Date: {order.orderDate}</Text>
        <Text style={styles.text}>Delivery Date: {order.deliveryDate}</Text>
        <Text style={styles.text}>Status: {order.orderStatus}</Text>
        <Text style={styles.text}>Payment Status: {order.paymentStatus}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Products</Text>
        {order.products.map((product) => (
          <Text key={product.id} style={styles.text}>
            {product.productName} - {product.quantity} x ${product.unitPrice} = ${product.totalCost}
          </Text>
        ))}
      </View>
    </Page>
  </Document>
);

export default OrderPDF;