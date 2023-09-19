import React from 'react';
import '../Stylesheets/Contacto.css';

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
        <p>Teléfono: (3544)523837</p>
        <p>Ciudad: Córdoba</p>
      </div>
      <div className="contacto-whatsapp">
        <h2>¡Estemos en Contacto!</h2>
        <button className='Boton-whatsapp' onClick={handleWhatsAppClick}>Contactar por WhatsApp</button>
      </div>
    </div>
  );

  


}

export default Contacto;
