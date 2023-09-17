import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import Logoimagen from '../imagenes/portada-principal.png';
import '../Stylesheets/Home.css';
import WhatsAppButton from './WhatsappButton';
import Footer from './Footer';
import Imagen1 from '../imagenes/Posavasos_Pelitos.jpg';
import Imagen2 from '../imagenes/Posavasos_Gatitoos.jpg';
import Imagen3 from '../imagenes/Posavados_2.jpg';

function home() {
  return (
    <><><><><div className="container">
      <div className='logo-emege-contenedor'>
        <img
          src={Logoimagen}
          className='emege-logo'
          alt='logo de Emege' /> </div>
    </div><div id="carouselExampleCaptions" class="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Imagen1} className="d-block w-5" alt="Posavasos Pelitos" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Imagen2} className="d-block w-5" alt="Posavasos Gatitos" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Imagen3} className="d-block w-5" alt="Posavasos 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      
      <div>
      <div className="card-group">
  <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Chusmeas</h5>
      <p className="card-text">Mirá todo lo que tenemos para vos</p>
    </div>
  </div>
  <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Elegís</h5>
      <p className="card-text">Agregá lo que más de guste a tu Wishlist!</p>
    </div>
  </div>
  <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Compartilo!</h5>
      <p className="card-text">Compartilo vía Whatsapp!</p>
    </div>
  </div>
</div>
      </div>
      </div></><div className='container-catalogo'>
        <h1>Accedé a todo el Catálogo!</h1>
        <Link to="/Catalog">
          <button type="button" className="btn btn-outline-light">Catálogo</button>
        </Link>
      </div></><div className='container-btn-whatsapp'>
        <h1>Tenes alguna duda?</h1>
        <WhatsAppButton />
      </div></><div>
        <Footer />
      </div></>

  );
};

export default home;