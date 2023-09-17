import React, { useState } from 'react';
import sendEmail from '../sendEmail'; // Asegúrate de ajustar la ruta correcta al archivo sendEmail

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes agregar la lógica para enviar el mensaje a un correo electrónico o realizar cualquier acción que desees.

    // Luego, puedes limpiar los campos del formulario.
    setNombre('');
    setApellido('');
    setEmail('');
    setMensaje('');
  };

  return (
    <div className="contacto-container">
      <div className="contacto-info">
        <h2>Información de Contacto</h2>
        <p>Correo Electrónico: marmoran56@gmail.com</p>
        <p>Teléfono: +543544523837</p>
        <p>Córdoba Capital, Córdoba</p>
      </div>
      <div className="contacto-formulario">
        <h2>Estemos en contacto</h2>
        <form onSubmit={handleSubmit}>
          <div className="campo">
            <input
              type="text"
              placeholder="Nombre y Apellido"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="campo">
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="campo">
            <textarea
              placeholder="Mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="campo">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
