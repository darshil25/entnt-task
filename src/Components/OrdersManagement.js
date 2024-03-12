import React, { useState } from 'react';
import OrdersList from './OrdersList';
import OrdersCalendar from './OrdersCalendar';

const OrdersManagement = () => {
  // Mock data array
  const [orders, setOrders] = useState([
    { id: 1, orderId: '72076', customerName: 'Roger', orderDate: '2024-03-03', status: 'Pending', deliveryDate: '2024-03-17' },
    { id: 2, orderId: '15025', customerName: 'Vishal', orderDate: '2024-03-04', status: 'Pending', deliveryDate: '2024-03-18' },
    { id: 3, orderId: '33754', customerName: 'Chetan Kumar', orderDate: '2024-02-26', status: 'Delivered', deliveryDate: '2024-03-11' },
    { id: 4, orderId: '98765', customerName: 'Alice', orderDate: '2024-03-05', status: 'Processing', deliveryDate: '2024-03-19' },
    { id: 5, orderId: '45678', customerName: 'Bob', orderDate: '2024-03-06', status: 'Pending', deliveryDate: '2024-03-20' },
    { id: 6, orderId: '87654', customerName: 'Charlie', orderDate: '2024-03-07', status: 'Shipped', deliveryDate: '2024-03-21' },
    { id: 7, orderId: '23456', customerName: 'David', orderDate: '2024-03-08', status: 'Pending', deliveryDate: '2024-03-22' },
    { id: 8, orderId: '65432', customerName: 'Eva', orderDate: '2024-03-09', status: 'Processing', deliveryDate: '2024-03-23' },
    { id: 9, orderId: '78901', customerName: 'Frank', orderDate: '2024-03-10', status: 'Delivered', deliveryDate: '2024-03-24' },
    { id: 10, orderId: '12345', customerName: 'Grace', orderDate: '2024-03-11', status: 'Shipped', deliveryDate: '2024-03-25' }
  ]);

  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
  };

  return (
    <div>
      <OrdersList orders={orders} onDelete={handleDeleteOrder} />
      <div style={{ marginTop: '3em' }}></div> {/* Three lines of space */}
      <OrdersCalendar orders={orders} />
    </div>
  );
};

export default OrdersManagement;
