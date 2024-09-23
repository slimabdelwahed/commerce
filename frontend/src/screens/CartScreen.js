import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Récupérer les articles du panier depuis le localStorage
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedCart = cartItems.map(item =>
      item._id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h1>Panier</h1>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item._id}>
                <Link to={`/product/${item._id}`}>{item.name}</Link>
                <p>Prix: {item.price}€</p>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => handleQuantityChange(item._id, Number(e.target.value))}
                />
                <button onClick={() => handleRemove(item._id)}>Supprimer</button>
              </li>
            ))}
          </ul>
          <h2>Total: {calculateTotalPrice()}€</h2>
          <Link to="/create-order">
            <button>Passer la commande</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartScreen;