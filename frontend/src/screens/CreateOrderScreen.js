import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateOrderScreen = () => {
  const [orderItems, setOrderItems] = useState('');
  const [shippingAdress, setShippingAdress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [shippingPrice, setShippingPrice] = useState(0);
  const [taxPrice, setTaxPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const token = JSON.parse(localStorage.getItem('userInfo')).token;
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        '/api/Order',
        {
          orderItems,
          shippingAdress,
          paymentMethod,
          shippingPrice,
          taxPrice,
          totalPrice,
        },
        config
      );

      setMessage('Commande créée avec succès');
      navigate("/payment");
    } catch (error) {
      setMessage('Erreur lors de la création de la commande');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Créer une commande</h1>
      {message && <p>{message}</p>}
      <div>
        <label>Articles de commande</label>
        <input
          type="text"
          value={orderItems}
          onChange={(e) => setOrderItems(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Adresse de livraison</label>
        <input
          type="text"
          value={shippingAdress}
          onChange={(e) => setShippingAdress(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Méthode de paiement</label>
        <input
          type="text"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Prix de livraison</label>
        <input
          type="number"
          value={shippingPrice}
          onChange={(e) => setShippingPrice(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label>Prix des taxes</label>
        <input
          type="number"
          value={taxPrice}
          onChange={(e) => setTaxPrice(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label>Prix total</label>
        <input
          type="number"
          value={totalPrice}
          onChange={(e) => setTotalPrice(Number(e.target.value))}
          required
        />
      </div>
      <button type="submit">Créer la commande</button>
    </form>
  );
};

export default CreateOrderScreen;