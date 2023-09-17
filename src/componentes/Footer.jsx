import React from 'react';
import logo from '../imagenes/logo.png';
import '../Stylesheets/Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          
          <div className="col-md-3">
            <h5>Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li><a href="/Home">Inicio</a></li>
              <li><a href="/contacto">Contacto</a></li>
              <li><a href="/catalog">Catálogo</a></li>
              <li><a href="/MiCuenta">Mi Cuenta</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <img src={logo} alt="Logo de la empresa" className="logo" />
          </div>
          <div className="col-md-6">
            <h5>Contacto</h5>
            <p>Teléfono: (3544)523837</p>
            <p>Email: marmoran56@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

