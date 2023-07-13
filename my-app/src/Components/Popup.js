/*
import React, { useEffect } from 'react';
import '../Components/Popup.css';

function Popup() {
  useEffect(() => {
    const noPuedesIngresar = () => {
      window.location.href = 'https://www.google.cl/';
    };

    const bienvenido = () => {
      const popup = document.querySelector('.pop-up');
      const container = document.querySelector('#container');

      if (popup && container) {
        popup.style.display = 'none';
        container.style.opacity = '1';
      }
    };

    const noButton = document.querySelector('.pop-up .no');
    const siButton = document.querySelector('.pop-up .si');

    if (noButton) {
      noButton.addEventListener('click', noPuedesIngresar);
    }

    if (siButton) {
      siButton.addEventListener('click', bienvenido);
    }

    // Cleanup event listeners
    return () => {
      if (noButton) {
        noButton.removeEventListener('click', noPuedesIngresar);
      }

      if (siButton) {
        siButton.removeEventListener('click', bienvenido);
      }
    };
  }, []);

  return (
    <body>
      <main>
        <section>
          <div id="container-verificacion-edad"></div> 
          <div className="pop-up">
            <div className="container-menor-edad">
              <br /><br /><br /><br /><br /><br /><br />
              <p>Debes ser mayor de edad para <br /> ingresar a cervezas huichahue</p>
            </div>
          </div>
        </section>
      </main>
      <div>
        <div id="container-verificacion-edad"></div>
        <div className="pop-up">
          <h1>Bienvenid@ a cervezas huichahue</h1>
          <br /><br />
          <p>¿Eres Mayor de 18 años?</p>
          <br /><br />
          <div className="boton no">no :'(</div>
          <div className="boton si">Si, lo soy Salud!</div>
        </div>
      </div>
    </body>
  );
}

export default Popup;
*/