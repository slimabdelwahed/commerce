import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OrderDetailsScreen = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('userInfo')).token;
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axios.get(`/api/Order/${id}`, config);
        setOrder(data);
      } catch (error) {
        setMessage('Erreur lors de la récupération de la commande');
      }
    };

    fetchOrder();
  }, [id]);

  return (
    <div>
      <h1>Détails de la commande</h1>
      {message && <p>{message}</p>}
      {order && (
        <div>
          <p>ID de la commande: {order._id}</p>
          <p>Total: {order.totalPrice}€</p>
          <p>Status: {order.isPaid ? 'Payée' : 'Non payée'}</p>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsScreen;