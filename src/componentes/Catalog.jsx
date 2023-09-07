import React, { useState, useEffect } from 'react';
import Products from '../JSON Files/Products.json';
import MiCuenta from './MiCuenta';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  const toggleFavorite = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, isFavorite: !product.isFavorite };
      }
      return product;
    });
    setProducts(updatedProducts);

    // Actualiza los favoritos
    const updatedFavorites = updatedProducts.filter((product) => product.isFavorite);
    setFavorites(updatedFavorites);
  };

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
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
        {favorites.map((favoriteProduct) => (
          <li key={favoriteProduct.id}>
            <img src={favoriteProduct.image} alt={favoriteProduct.name} />
            <h3>{favoriteProduct.name}</h3>
            <p>Precio: ${favoriteProduct.price}</p>
            <button onClick={() => toggleFavorite(favoriteProduct.id)}>
              Quitar de Favoritos
            </button>
          </li>
        ))}
      </ul>
      <MiCuenta favoritos={this.state.favorites} />
    </div>
  );
};

export default Catalog;






