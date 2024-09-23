import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className="product">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="product-info">
        <Link to={`/product/${product._id}`}>
          <h3>{product.name}</h3>
        </Link>
        <h4>${product.price}</h4>
      </div>
    </div>
  );
};

export default Product;