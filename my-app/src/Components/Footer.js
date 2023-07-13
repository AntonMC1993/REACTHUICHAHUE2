import React from 'react';
// eslint-disable-next-line
import styles from '../Components/Footer.css'
import logo from '../IMAGENES/logo.png'
import Balloon from '../IMAGENES/Logos/logo_balloon_latam.png'
import Reciclamos from '../IMAGENES/Logos/logo_todosreciclamos.png'
import Fosis from '../IMAGENES/Logos/logo_fosis.png'
import Kyklos from '../IMAGENES/Logos/logo_kyklos.png'
import Sercotec from '../IMAGENES/Logos/logo_sercotec.png'
import Generation from '../IMAGENES/Logos/logo_generation.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="containerfooter">
        <div className="rowfooter">
          <div className="footer-col">

            <h4>MENÚ</h4>
            <ul>
              <li><a href="index.html">Inicio</a></li>
              <li><a href="tienda.html">Tienda</a></li>
              <li><a href="terms.html">Términos y condiciones</a></li>
              <li><a href="contacto.html">Contáctanos</a></li>
            </ul>
          </div>
          <div className="footer-col">

           <h4>SÍGUENOS</h4>
            <span className="redes-sociales-link">
              <ul>
                <li><span><a href="https://www.instagram.com/cerveza_huichahue/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></span><p><a href="https://www.instagram.com/cerveza_huichahue/" target="_blank" rel="noopener noreferrer">Instagram</a></p></li>
                <li><span><a href="https://web.facebook.com/cerveza.huichahue/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></span><p><a href="https://web.facebook.com/cerveza.huichahue/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">Facebook</a></p></li>
                <li><span><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a></span><p><a href="#" target="_blank" rel="noopener noreferrer">WhatsApp</a></p></li>
              </ul>
            </span>
          </div>
          <div className="footer-col">
            <ul>
              <li><a href="index.html"><img src={logo} alt="Logo Cerveza Huichahue" style={{ width: '120px', height: '120px' }} /></a></li>
            </ul>
          </div>
          <div className="footer-col">

          <h4>SOBRE NOSOTROS</h4>
            <ul>
              <li><a href="#">Nuestra Historia</a></li>
              <li><a href="#">Visión</a></li>
              <li><a href="#">Misión</a></li>
              <li><a href="#">Mundo Consciente</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-col">

        <h4>PARTNERS</h4>
        <div className="partners-logos">
          <ul>
            <li><img src={Balloon} alt="Logo Balloon Latam" style={{ width: '30px', height: '50px' }} /></li>
            <li><img src={Reciclamos} alt="Todos reciclamos" style={{ width: '50px', height: '50px' }} /></li>
            <li><img src={Fosis} alt="Logo Fosis" style={{ width: '60px', height: '60px' }} /></li>
            <li><img src={Kyklos} alt="Logo Kyklos" style={{ width: '70px', height: '40px' }} /></li>
            <li><img src={Sercotec} alt="Logo Sercotec" style={{ width: '60px', height: '30px' }} /></li>
            <li><img src={Generation} alt="Logo Generation" style={{ width: '60px', height: '30px' }} /></li>
          </ul>
        </div>
      </div>
      <div className="footer-texto-copyright">

        <p>Cerveza Huichahue®. Beber con moderación</p>
      </div>

    </footer>
  );
}

export default Footer;
