import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/api/products');
        setProducts(data);
      } catch (error) {
        setMessage('Erreur lors de la récupération des produits');
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = cartItems.find(item => item._id === product._id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  return (
    <div>
      <h1>Accueil</h1>
      {message && <p>{message}</p>}
      <div>
        {products.map((product) => (
          <div key={product._id}>
            <Link to={`/product/${product._id}`}>
              <h2>{product.name}</h2>
            </Link>
            <p>Prix: {product.price}€</p>
            <button onClick={() => handleAddToCart(product)}>Ajouter au panier</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;