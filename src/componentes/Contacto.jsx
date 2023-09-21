import React from 'react';
import '../Stylesheets/Contacto.css'; 

const Contacto = () => {
  return (
    <><div className="contacto-imagen">
          <img src="tu_imagen.jpg" alt="Imagen de contacto" />
      </div><section className="contacto-container">
              <div className="contacto-info">
                  <h2>Contacto</h2>
                  <div className="contacto-datos">
                      <div className="dato">
                          <i className="fas fa-envelope"></i>
                          <span>Correo Electrónico: ejemplo@gmail.com</span>
                      </div>
                      <div className="dato">
                          <i className="fas fa-phone"></i>
                          <span>Celular: (3544)523837</span>
                      </div>
                      <div className="dato">
                          <i className="fas fa-map-marker-alt"></i>
                          <span>Ciudad: Córdoba</span>
                      </div>
                  </div>
              </div>

              <div className="contacto-escribir">
                  <h3>Escríbenos</h3>
                  <a
                      href="https://api.whatsapp.com/send?phone=+543544523837&text=Hola%2C%20me%20gustaría%20contactar%20contigo."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-btn"
                  >
                      Chatear por WhatsApp
                  </a>
              </div>


          </section></>
  );
};

export default Contacto;
