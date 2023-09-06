import React, { useState, useEffect } from 'react';
import Products from '../JSON Files/Products.json'

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
  };

  const shareViaWhatsApp = (product) => {
    // Crear una imagen temporal para cargar la imagen
    const img = new Image();
    img.crossOrigin = 'anonymous'; // Habilitar el acceso a la imagen de otros dominios
  
    img.onload = () => {
      // Crear un lienzo temporal para dibujar la imagen
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
  
      // Obtener la representación base64 de la imagen
      const base64Image = canvas.toDataURL('image/jpeg'); // Puedes ajustar el formato según tus necesidades
  
      // Crear el mensaje de WhatsApp con la imagen
      const message = `¡Mira este producto en mi lista de favoritos!\n${product.name}\nPrecio: $${product.price}`;
      const whatsappURL = `whatsapp://send?text=${encodeURIComponent(message)}&image=${encodeURIComponent(base64Image)}`;
      
      // Abrir WhatsApp en el dispositivo del usuario
      window.location.href = whatsappURL;
    };
  
    // Establecer la fuente de la imagen
    img.src = product.image;
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
            {product.isFavorite && (
              <button onClick={() => shareViaWhatsApp(product)}>
                Compartir en WhatsApp
              </button>
            )}
          </li>
        ))}
      </ul>
      <h2>Productos Favoritos</h2>
      <ul>
        {products
          .filter((product) => product.isFavorite)
          .map((favoriteProduct) => (
            <li key={favoriteProduct.id}>
              <img src={favoriteProduct.image} alt={favoriteProduct.name} />
              <h3>{favoriteProduct.name}</h3>
              <p>Precio: ${favoriteProduct.price}</p>
              <button onClick={() => toggleFavorite(favoriteProduct.id)}>
                Quitar de Favoritos
              </button>
              <button onClick={() => shareViaWhatsApp(favoriteProduct)}>
                Compartir en WhatsApp
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Catalog;

