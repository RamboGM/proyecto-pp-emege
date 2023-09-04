import React from 'react';
import productsData from '../JSON Files/Products.json';
import '../Stylesheets/Product.css';

const ProductCatalog = () => {
  return (
    <div className="product-catalog">
      {productsData.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <button className="add-to-wishlist-button">Agregar a Favoritos</button>
          <button className='Share'>Compartir</button>
        </div>
      ))}
    </div>
  );
};

export default ProductCatalog;

