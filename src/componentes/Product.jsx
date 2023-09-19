import React from 'react';
import { useParams } from 'react-router-dom';
import Productos from '../JSON Files/Products.json'

function Product() {
  const { id } = useParams(); // Obtener el parámetro de la URL

  // Aquí puedes buscar el producto con el ID correspondiente en tu conjunto de datos (Productos.json) o en una fuente de datos externa

  // Ejemplo de uso de datos ficticios:
  const producto = Productos.find((producto) => producto.id === parseInt(id));

  if (!producto) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
        <div className="col-md-6">
          <h1>{producto.nombre}</h1>
          <p>Precio: ${producto.precio}</p>
          {/* Espacio para descripción */}
          <button className="btn btn-success" onClick={() => compartirWhatsApp(producto)}>
            Compartir por WhatsApp
          </button>
          <button className="btn btn-primary ml-2" onClick={() => addToCart(producto)}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
