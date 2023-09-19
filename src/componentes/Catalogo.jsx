import React, { useState, useEffect } from 'react';
import Productos from '../JSON Files/Products.json'; // Asegúrate de tener un archivo JSON válido con tus productos
import { Link } from 'react-router-dom'; // Importa Link de React Router
import Footer from './Footer';

function CatalogoProductos() {
  const [productos, setProductos] = useState(Productos);
  const [carrito, setCarrito] = useState([]);
  const numeroWhatsApp = '+543544523837';

  useEffect(() => {
    // Recuperar productos del carrito desde Local Storage
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  useEffect(() => {
    // Guardar productos del carrito en Local Storage
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const addToCart = (producto) => {
    // Verificar si el producto ya está en el carrito
    const isInCart = carrito.some((item) => item.id === producto.id);

    if (!isInCart) {
      setCarrito([...carrito, producto]);
    }
  };

  const compartirCarritoWhatsApp = () => {
    let mensaje = `¡Hola! Estoy interesado en los siguientes productos:\n\n`;

    carrito.forEach((producto) => {
      mensaje += `${producto.name} - Precio: $${producto.price}\n`;
    });

    // Calcular el total de la compra
    const totalCompra = carrito.reduce((total, producto) => total + producto.price, 0);
    mensaje += `\nTotal de la compra: $${totalCompra.toFixed(2)}`;

    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(numeroWhatsApp)}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };


  return (
    <><div className="container">
      <h1>Catálogo de Productos</h1>
      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-4 mb-4" key={producto.id}>
            <div className="card">
              {/* Utiliza Link para redirigir a la página de detalles del producto */}
              <Link to={`/product/${producto.id}`} className="card-link">
                <img src={producto.image} className="card-img-top" alt={producto.name} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text">Precio: ${producto.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(producto)}
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map((producto) => (
          <li key={producto.id}>
            {producto.name} - Precio: ${producto.price}
          </li>
        ))}
      </ul>
      {carrito.length > 0 && (
        <button
          className="btn btn-success"
          onClick={compartirCarritoWhatsApp}
        >
          Compartir Carrito por WhatsApp
        </button>
      )}
    </div><div>
        <Footer />
      </div></>
  );
}

export default CatalogoProductos;



