import React from 'react';
import '../Stylesheets/WhatsappButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '+543544523837';

  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`



  return (
    <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
      <button type="button" className="btn btn-outline-info">Charlemos!</button>
    </a>
  );
};

export default WhatsAppButton;
