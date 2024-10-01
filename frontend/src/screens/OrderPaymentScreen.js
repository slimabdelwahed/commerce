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
        `/api/Order/${orderId}/payment`,
        { id: paymentId, status: 'completed' },
        config
      );

      setMessage('Commande payée avec succès');
    } catch (error) {
      setMessage('Erreur lors de la mise à jour du paiement');
    }
  };

  return (
    /*<div>
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
    </div>*/
    <div className="container mt-5">
    <h1 className="text-center mb-4">Effectuer un paiement</h1>
    {message && <div className="alert alert-warning text-center">{message}</div>}
    <div className="mb-3">
        <label htmlFor="paymentId" className="form-label">ID de paiement</label>
        <input
            type="text"
            id="paymentId"
            className="form-control"
            value={paymentId}
            onChange={(e) => setPaymentId(e.target.value)}
        />
    </div>
    <button onClick={payOrder} className="btn btn-primary w-100">Payer la commande</button>
</div>
  );
};

export default OrderPaymentScreen;