import React, { useState, useEffect } from 'react';
import Productos from '../JSON Files/Products.json';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../Stylesheets/Catalogo.css';
import '../Stylesheets/Popup.css';


function CatalogoProductos() {
  const [productos, setProductos] = useState(Productos);
  const [carrito, setCarrito] = useState([]);
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar la visibilidad del popup
  const numeroWhatsApp = '+543544523837';

  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const addToCart = (producto) => {
    const isInCart = carrito.some((item) => item.id === producto.id);

    if (!isInCart) {
      setCarrito([...carrito, producto]);
      setShowPopup(true); // Mostrar el popup cuando se agrega al carrito
      // Establecer un temporizador para ocultar el popup después de unos segundos
      setTimeout(() => {
        setShowPopup(false);
      }, 2000); // Cambia el tiempo (en milisegundos) según tus preferencias
    }
  };

  const compartirCarritoWhatsApp = () => {
    let mensaje = `¡Hola! Estoy interesado en los siguientes productos:\n\n`;
    carrito.forEach((producto) => {
      mensaje += `${producto.name} - Precio: $${producto.price}\n`;
    });

    const totalCompra = carrito.reduce((total, producto) => total + producto.price, 0);
    mensaje += `\nTotal de la compra: $${totalCompra.toFixed(2)}`;

    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(numeroWhatsApp)}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <div className='container-titulo'>
        <h1>CATÁLOGO</h1>
      </div>
      <div className="container">
        <div className="row">
          {productos.map((producto) => (
            <div className="col-md-4 mb-4" key={producto.id}>
              <div className="card">
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
          <button className="btn btn-success" onClick={compartirCarritoWhatsApp}>
            Compartir Carrito por WhatsApp
          </button>
        )}
      </div>
      <div>
        <Footer />
      </div>
      {showPopup && (
        <div className="popup">
          <p>Agregado al carrito</p>
        </div>
      )}
    </div>
  );
}

export default CatalogoProductos;




