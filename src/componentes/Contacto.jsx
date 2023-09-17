import React from 'react';

function Contacto() {
  const numeroWhatsApp = '+543544523837';
  const mensajeWhatsApp = '¡Hola! Me gustaria consultar sobre';

  const handleWhatsAppClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(numeroWhatsApp)}&text=${encodeURIComponent(mensajeWhatsApp)}`;
    window.location.href = url;
  };

  return (
    <div className="contacto-container">
      <div className="contacto-info">
        <h2>Información de Contacto</h2>
        <p>Email: example@example.com</p>
        <p>Teléfono: +1234567890</p>
        <p>Ciudad: Ciudad Ejemplo</p>
      </div>
      <div className="contacto-whatsapp">
        <h2>¡Estemos en Contacto!</h2>
        <button onClick={handleWhatsAppClick}>Contactar por WhatsApp</button>
      </div>
    </div>
  );
}

export default Contacto;
