import React, { useState, useEffect } from 'react';
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

export default ProductDetailScreen;