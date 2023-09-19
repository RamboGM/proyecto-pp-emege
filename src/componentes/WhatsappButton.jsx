import React from 'react';
import '../Stylesheets/WhatsappButton.css';


function Contacto() {
  const numeroWhatsApp = '+543544523837';
  const mensajeWhatsApp = '¡Hola! Me gustaria consultar sobre';

  const handleWhatsAppClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(numeroWhatsApp)}&text=${encodeURIComponent(mensajeWhatsApp)}`;
    window.location.href = url;
  };

  return (
    <button className='btn btn-outline-light' onClick={handleWhatsAppClick}>Contactar por WhatsApp</button>
  );
};

export default Contacto;
