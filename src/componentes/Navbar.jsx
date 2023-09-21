import React from 'react';
import { Link } from 'react-router-dom';
import '../Stylesheets/Navbar.css';

const Navbar = () => {
    return (
      <div className='Navbar'>
        <div className='container-inicio'>
          <ul className='nav-list'>
            <li className='nav-item'>
              <Link className='boton-inicio' to='/'>INICIO</Link>
            </li>
            <li className='nav-item'>
              <Link className='boton-catalogo' to='/catalog'>CATÁLOGO</Link>
            </li>
            <li className='nav-item'>
              <Link className='boton-contacto' to='/contacto'>CONTACTO</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };


export default Navbar;




