/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetailScreen = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`./data/Products/${id}`);
        setProduct(data);
      } catch (error) {
        setMessage('Erreur lors de la récupération du produit');
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      <h1>Détails du produit</h1>
      {message && <p>{message}</p>}
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>Prix: {product.price}€</p>
          <p>Description: {product.description}</p>
         
        </div>
      )}
    </div>
  );
};

export default ProductDetailScreen;*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetailScreen = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`http://localhost:3000/api/products/${id}`); // Assurez-vous que cette URL correspond à votre API
        setProduct(data);
      } catch (error) {
        setMessage('Erreur lors de la récupération du produit');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCart = [...existingCart, { ...product, quantity: 1 }];
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    setMessage('Produit ajouté au panier');
  };

  return (
    <div className="container mt-5">
      <h1>Détails du produit</h1>
      {loading && <p>Chargement...</p>}
      {message && <p className="text-danger">{message}</p>}
      {product && (
        <div>
          <h2>{product.name}</h2>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '30px', height: '30px', objectFit: 'cover' }}
          />
          <p>Prix: {product.price}€</p>
          <p>Description: {product.description}</p>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Ajouter au panier
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDetailScreen;