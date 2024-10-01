import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductListScreen = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log("5555");
    const fetchProducts = async () => {
      try {

        const  data  = await axios.get('http://localhost:3000/api/Products');
        console.log("0000",data);
        setProducts(data);
      } catch (error) {
        console.log("1111");
        setMessage('Erreur lors de la récupération des produits');
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Liste des produits</h1>
      {message && <p>{message}</p>}
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListScreen;