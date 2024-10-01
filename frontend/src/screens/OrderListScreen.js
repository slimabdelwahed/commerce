import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderListScreen = () => {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('userInfo')).token;
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axios.get('/api/Order', config);
        setOrders(data);
      } catch (error) {
        setMessage('Erreur lors de la récupération des commandes');
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Mes commandes</h1>
      {message && <p>{message}</p>}
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            {order._id} - {order.totalPrice}€ - {order.isPaid ? 'Payée' : 'Non payée'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderListScreen;