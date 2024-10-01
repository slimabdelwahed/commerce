import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const HomeScreen = () => {
  const [Products, setProducts] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/api/Product/api/Products');
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
    navigate('/cart');
  };

  return (
    /*<div className="container">
      <h1>Accueil</h1>
      {message && <p className="message">{message}</p>}
      <div className="products-container">
        {Products.map((product) => (
          <div key={product._id} className="product-card">
            <Link to={`/Product/${product._id}`}>
              <h2>{product.name}</h2>
            </Link>
            <p>Prix: {product.price}€</p>
            <button className="button" onClick={() => handleAddToCart(product)}>Ajouter au panier</button>
          </div>
        ))}
      </div>
    </div>*/
    <div className="row">
    {Products.map((product) => (
        <div key={product._id} className="col-md-4 mb-4">
            <div className="card h-100">
                <Link to={`/Product/${product._id}`}>
                    <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.name}
                    />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Prix: {product.price}€</p>
                    <button
                        className="btn btn-success"
                        onClick={() => handleAddToCart(product)}
                    >
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div>
    ))}
</div>

  );
};

export default HomeScreen;