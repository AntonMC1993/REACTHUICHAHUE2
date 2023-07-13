import React from 'react';
// eslint-disable-next-line
import style from '../Components/Home.css';
import cerveza1 from '../IMAGENES/Huichahue/Variedades Png/clásicas/amber ale.png';
import cerveza2 from '../IMAGENES/Huichahue/Variedades Png/experimentales/cacho de cabra.png'
import cerveza3 from '../IMAGENES/Huichahue/Variedades Png/frutales/arandano.png'
import cerveza4 from '../IMAGENES/Huichahue/Variedades Png/frutales/maqui.png'
import cerveza5 from '../IMAGENES/Huichahue/Variedades Png/kombuchelas/kombuchela cacao.png'
import cerveza6 from '../IMAGENES/Huichahue/Variedades Png/experimentales/piñones.png'
import pack1 from '../IMAGENES/Fotopacks/pack1.jpg'
import pack2 from '../IMAGENES/Fotopacks/pack3.jpg'
import pack3 from '../IMAGENES/Fotopacks/pack2.jpg'

function Home() {
  return (
    <>
      <div className="rectangulo2">
        <p>PRODUCTOS DESTACADOS</p>
      </div>
      <div>
        <ul className="fotosProductos">
          <li id="cervezas">
            <br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br>

            <img src={cerveza1} alt="cerveza1" width="400px" />
            <img src={cerveza2} alt="cerveza2" width="400px" />
            <img src={cerveza3} alt="cerveza3" width="400px" />
            <img src={cerveza4} alt="cerveza4" width="400px" />
            <img src={cerveza5} alt="cerveza5" width="400px" />
            <img src={cerveza6} alt="cerveza6" width="400px" />
          </li>
        </ul>
      </div>
      <br></br>
            <br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br>

      <div className="rectangulo3">
        <p>PACKS</p>
      </div>
      <div>
        <ul className="fotospacks">
          <li id="packs">
            <br></br>
            <br></br>
            <br></br>
            <img src={pack1} alt="cerveza1" width="400px" />
            <img src={pack2} alt="cerveza2" width="400px" />
            <img src={pack3} alt="cerveza3" width="400px" />
          </li>
        </ul>
      </div>
            <br></br><br></br>
            <br></br><br></br>
      </>
      
  );
}

export default Home;