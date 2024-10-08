/*import React, { useState, useEffect } from 'react';
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

export default ProductListScreen;*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductListScreen = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/Products');
        setProducts(response.data); // Access the data correctly from the response
      } catch (error) {
        setMessage('Erreur lors de la récupération des produits');
      }
    };

    fetchProducts();
  }, []);

  return (
    /*<div>
      <h1>Liste des produits</h1>
      {message && <p>{message}</p>}
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <Link to={`/product/${product._id}`}>
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name} style={{ width: '100px', height: 'auto' }} />
              <p>Description: {product.description}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};*/
<div className="products-grid">
      {products.map((product) => (
        <div key={product.name} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating} ⭐</p>
          <p>In Stock: {product.countInStock}</p>
          <p>{product.numReview} Reviews</p>
        </div>
      ))}
    </div>
  );
};

export default ProductListScreen;