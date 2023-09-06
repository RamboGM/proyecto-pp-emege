import React from 'react';
import Logoimagen from '../imagenes/portada-principal.png';
import '../Stylesheets/Home.css';


function home() {
  return (
    <div className="container">
      <div className='logo-emege-contenedor'>
        <img
          src={Logoimagen}
          className='emege-logo'
          alt='logo de Emege' /> </div>
    </div>
  );
};

export default home;