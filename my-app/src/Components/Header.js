import React from 'react';
import './Header.css';
import Logo from '../IMAGENES/logo.png';
import Barra from '../IMAGENES/barra-menu.png';
import Carro from '../IMAGENES/carrito-de-compras.png';

function Header() {
  return (
    <header>
          <div className="contenedor-image">
            <a href="Home.js"><img src= {Logo} alt="LogoHeader" height="100px" /></a>
          </div>
          <nav className="barra-nav">
            <a id="menu" href="Home.js"><img src= {Barra} alt="barra" /></a>
            <a className="botones" href="Index.html">Tienda</a>
            <a className="botones" href="Index.html">Contacto</a>
            <a id="carrito" href="Home.js"><img src= {Carro} alt="Carrito-de-compras" /></a>
        </nav>
    </header>
    
  );
}

export default Header;

