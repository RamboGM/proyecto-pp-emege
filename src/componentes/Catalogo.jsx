import React, { useState, useEffect } from 'react';
import Productos from '../JSON Files/Products.json';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../Stylesheets/Catalogo.css';
import '../Stylesheets/Popup.css';

function CatalogoProductos() {
  const [productos, setProductos] = useState(Productos);
  const [carrito, setCarrito] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
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

  const addToCart = (producto, cantidad) => {
    const isInCart = carrito.some((item) => item.id === producto.id);
  
    if (!isInCart) {
      setCarrito([...carrito, { ...producto, cantidad }]);
      setProductoAgregado({ ...producto, cantidad }); // Actualiza productoAgregado
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        setProductoAgregado(null); // Limpia el productoAgregado después de mostrar el popup
      }, 2000);
    } else {
      const updatedCart = carrito.map((item) => {
        if (item.id === producto.id) {
          return { ...item, cantidad: item.cantidad + cantidad };
        }
        return item;
      });
      setCarrito(updatedCart);
    }
  };

  const removeFromCart = (producto) => {
    const updatedCart = carrito.filter((item) => item.id !== producto.id);
    setCarrito(updatedCart);
  };

  const clearCart = () => {
    setCarrito([]);
  };

  const compartirCarritoWhatsApp = () => {
    let mensaje = `¡Hola! Estoy interesado en los siguientes productos:\n\n`;
    carrito.forEach((producto) => {
      mensaje += `Producto: ${producto.name}\n`;
      mensaje += `Precio: $${producto.price}\n`;
      mensaje += `Cantidad: ${producto.cantidad}\n\n`;
    });
  
    const totalCompra = carrito.reduce(
      (total, producto) => total + producto.price * producto.cantidad,
      0
    );
    mensaje += `\nTotal de la compra: $${totalCompra.toFixed(2)}`;
  
    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      numeroWhatsApp
    )}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  const totalCarrito = carrito.reduce(
    (total, producto) => total + producto.price * producto.cantidad,
    0
  );

  const [productoAgregado, setProductoAgregado] = useState(null);

  return (
    <div>
      <div className='container-titulo'>
        <h1>CATÁLOGO</h1>
      </div>
      <div className="container-cards">
        <div className="row">
          {productos.map((producto) => (
            <div className="col-md-4 mb-4" key={producto.id}>
              <div className="card">
                <Link to={`/product/${producto.id}`} className="card-link">
                  <div
                    id={`carousel-${producto.id}`}
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      {producto.images.map((image, index) => (
                        <div
                          key={index}
                          className={`carousel-item ${
                            index === 0 ? 'active' : ''
                          }`}
                        >
                          <img
                            src={image}
                            alt={producto.name}
                            className="d-block w-100"
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target={`#carousel-${producto.id}`}
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target={`#carousel-${producto.id}`}
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{producto.name}</h5>
                  <p className="card-text">{producto.description}</p>
                  <p className="card-text">Precio: ${producto.price}</p>
                  {/* Selector de cantidad */}
                  <div className="mb-3">
                    <label
                      htmlFor={`cantidad-${producto.id}`}
                      className="form-label"
                    >
                      Cantidad:
                    </label>
                    <select
                      id={`cantidad-${producto.id}`}
                      className="form-select"
                      value={producto.cantidad}
                      onChange={(e) => {
                        const newCantidad = parseInt(e.target.value);
                        const updatedProductos = productos.map((prevProducto) =>
                          prevProducto.id === producto.id
                            ? { ...prevProducto, cantidad: newCantidad }
                            : prevProducto
                        );
                        setProductos(updatedProductos);
                      }}
                    >
                      {Array.from({ length: 10 }, (_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    className="btn btn-cart"
                    onClick={() => addToCart(producto, producto.cantidad)}
                  >
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h1 className='carrito-compras-titulo'>Carrito de Compras</h1>
        {carrito.length > 0 ? (
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Total</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {carrito.map((producto) => (
                  <tr key={producto.id}>
                    <td>{producto.name}</td>
                    <td>{producto.cantidad}</td>
                    <td>${producto.price}</td>
                    <td>${(producto.price * producto.cantidad).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeFromCart(producto)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='text-center'>
              <p>Total del Carrito: ${totalCarrito.toFixed(2)}</p>
            </div>
            <button className="btn btn-danger" onClick={clearCart}>
              Vaciar Carrito
            </button>
            <button
              className="btn btn-whatsapp"
              onClick={compartirCarritoWhatsApp}
            >
              Compartir Carrito por WhatsApp
            </button>
          </div>
        ) : (
          <p>Tu carrito está vacío.</p>
        )}
      </div>
      <div>
        <Footer />
      </div>
      {showPopup && (
      <div className="popup-right">
        <p>Agregado al carrito 😊</p>
        {productoAgregado && (
          <>
            <p>Producto: {productoAgregado.name}</p>
            <p>Cantidad: {productoAgregado.cantidad}</p>
            <p>Precio: ${productoAgregado.price}</p>
          </>
        )}
        <h3>⬇️</h3>
      </div>
)}
    </div>
  );
}

export default CatalogoProductos;


