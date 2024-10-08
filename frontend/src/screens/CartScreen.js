import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
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
  const handleCheckout = () => {
    navigate('/payment'); // Redirection vers la page de paiement
  };
  

  return (
<div className="container mt-5">
<h1 className="text-center mb-4">Panier</h1>
{cartItems.length === 0 ? (
  <div className="alert alert-warning text-center">
    <p>Votre panier est vide</p>
  </div>
) : (
  <div className="row">
    <div className="col-md-8">
      <ul className="list-group">
        {cartItems.map(item => (
          <li
            key={item._id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center">
              {/* Afficher l'image */}
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '15px' }}
              />
              <div>
                <Link to={`/product/${item._id}`} className="me-3">{item.name}</Link>
                <p className="text-muted">{item.description}</p> {/* Afficher la description */}
                <span className="me-3">Prix: {item.price}€</span>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => handleQuantityChange(item._id, Number(e.target.value))}
                  className="form-control w-50"
                />
              </div>
            </div>
            <button
              onClick={() => handleRemove(item._id)}
              className="btn btn-danger"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h2>Total: {calculateTotalPrice()}€</h2>
          <Link to="/payment">
            <button className="btn btn-success w-100" onClick={handleCheckout}>
              Passer la commande
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
)}
</div>
);
};


export default CartScreen;