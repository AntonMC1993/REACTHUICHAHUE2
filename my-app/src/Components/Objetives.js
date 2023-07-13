import React from "react";
import '../Components/Objetives.css'
import solidarity from '../IMAGENES/solidarity.png'
import cheers from '../IMAGENES/cheers.png'
import group from '../IMAGENES/group.png'
import recycle from '../IMAGENES/recycle (1).png'

function Objetives() {
  return (
    <section id="sec2">
      <div className="rectangulo4">

        <p>OBJETIVOS SOCIOAMBIENTALES</p>
      </div>
      <br></br> <br></br> <br></br>
      <div className="image-container">
        <img src={solidarity} alt="Imagen 1" width="90px" />
        <img src={cheers} alt="Imagen 2" width="90px" />
        <img src={group} alt="Imagen 3" width="90px" />
        <img src={recycle} alt="Imagen 4" width="90px" />
      </div>

      <ul id="botonesobjetivos">
        <li>
          <ul className="botonesobjetivos">
            <li>
              <a className="botones" href="Index.html">
                Impulsamos la comunidad local
              </a>
              <a className="botones" href="Index.html">
                Beber con moderación
              </a>
              <a className="botones" href="Index.html">
                Visitas guiadas con fines educativos
              </a>
              <a className="botones" href="Index.html">
                Envases reciclados
              </a>
           </li>
             </ul>
                </li>
                  </ul>
      <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br />
    </section>
  );
}

export default Objetives;


    
    

