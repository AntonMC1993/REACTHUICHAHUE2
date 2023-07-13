import React from 'react';
import './Carousel.css';
import Slide1 from '../IMAGENES/Slide/CARRUSEL 1.png';
import Slide2 from '../IMAGENES/Slide/CARRUSEL 2.jpg';
import Slide3 from '../IMAGENES/Slide/CARRUSEL 3.jpg';
import Slide4 from '../IMAGENES/imagepack.jpeg';

function Carousel() {
  return (
    <div className="container">
      <ul className="slider">
        <li id="slide1">
          <img src={Slide1} width="200px" alt="Slide 1" />
        </li>
        <li id="slide2">
          <img src={Slide2} width="200px" alt="Slide 2" />
        </li>
        <li id="slide3">
          <img src={Slide3} width="200px" alt="Slide 3" />
        </li>
        <li id="slide4">
          <img src={Slide4} width="200px" alt="Slide 4" />
        </li>
      </ul>

      <ul className="menu">
        <li>
          <a href="#slide1"></a>
        </li>
        <li>
          <a href="#slide2"></a>
        </li>
        <li>
          <a href="#slide3"></a>
        </li>
        <li>
          <a href="#slide4"></a>
        </li>
      </ul>
    </div>
  );
}

export default Carousel;
