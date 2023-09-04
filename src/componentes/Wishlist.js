import React, { useState, useEffect } from 'react';
import Products from '../JSON Files/Products.json'

const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    setProducts(Products);
  }, []);

  const toggleFavorite = (productId) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return { ...product, isFavorite: !product.isFavorite };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <li key={product.id}/>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <button onClick={() => toggleFavorite(product.id)}>
              {product.isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
            </button>
          </li>
        ))}
      </ul>
      <h2>Productos Favoritos</h2>
      <ul>
        {products
          .filter(product => product.isFavorite)
          .map(favoriteProduct => (
            <><li key={favoriteProduct.id}>{favoriteProduct.name}</li><img src={favoriteProduct.image} alt={favoriteProduct.name}/><li key={favoriteProduct.id}>{favoriteProduct.price}</li></>
          ))}
      </ul>
    </div>
  );
};

export default Catalog;
