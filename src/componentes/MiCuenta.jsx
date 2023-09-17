import React, { Component } from 'react';

class MiCuenta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosDeContacto: {
        nombre: 'John Doe',
        correoElectronico: 'johndoe@example.com',
        telefono: '123-456-7890',
      },
    };
  }

  render() {
    return (
      <div>
        <h2>Mi Cuenta</h2>
        <div>
          <h3>Datos de Contacto</h3>
          <p>Nombre: {this.state.datosDeContacto.nombre}</p>
          <p>Correo Electrónico: {this.state.datosDeContacto.correoElectronico}</p>
          <p>Teléfono: {this.state.datosDeContacto.telefono}</p>
        </div>
        <div>
          <h3>Favoritos</h3>
          <ul>
            {this.state.favorito.map((favorito) => (
              <li key={favorito.id}>{favorito.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default MiCuenta;
