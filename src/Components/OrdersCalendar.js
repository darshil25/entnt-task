import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const OrdersCalendar = ({ orders }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const getOrdersForSelectedDate = () => {
    if (!selectedDate) return [];
    const selectedDateLocal = new Date(selectedDate.toDateString());
    return orders.filter(order => {
      const deliveryDateLocal = new Date(order.deliveryDate);
      return (
        deliveryDateLocal.getFullYear() === selectedDateLocal.getFullYear() &&
        deliveryDateLocal.getMonth() === selectedDateLocal.getMonth() &&
        deliveryDateLocal.getDate() === selectedDateLocal.getDate()
      );
    });
  };

  return (
    <div>
      <h2>Orders Calendar View</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1' }}>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            tileContent={({ date }) =>
              orders.some(order => {
                const deliveryDateLocal = new Date(order.deliveryDate);
                return (
                  deliveryDateLocal.getFullYear() === date.getFullYear() &&
                  deliveryDateLocal.getMonth() === date.getMonth() &&
                  deliveryDateLocal.getDate() === date.getDate()
                );
              }) ? <div style={{ backgroundColor: 'green', width: '100%', height: '100%' }}></div> : null
            }
          />
        </div>
        <div style={{ flex: '1', marginLeft: '20px' }}>
          <h3>Deliveries for {selectedDate ? selectedDate.toDateString() : 'selected date'}</h3>
          <ul>
            {getOrdersForSelectedDate().map(order => (
              <li key={order.id}>{order.orderId} - {order.customerName}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrdersCalendar;
