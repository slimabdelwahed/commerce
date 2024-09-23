import React, { useState } from 'react';
import axios from 'axios';

const OrderPaymentScreen = ({ orderId }) => {
  const [paymentId, setPaymentId] = useState('');
  const [message, setMessage] = useState('');

  const payOrder = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('userInfo')).token;
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.put(
        `/api/orders/${orderId}/payment`,
        { id: paymentId, status: 'completed' },
        config
      );

      setMessage('Commande payée avec succès');
    } catch (error) {
      setMessage('Erreur lors de la mise à jour du paiement');
    }
  };

  return (
    <div>
      <h1>Effectuer un paiement</h1>
      {message && <p>{message}</p>}
      <div>
        <label>ID de paiement</label>
        <input
          type="text"
          value={paymentId}
          onChange={(e) => setPaymentId(e.target.value)}
        />
      </div>
      <button onClick={payOrder}>Payer la commande</button>
    </div>
  );
};

export default OrderPaymentScreen;