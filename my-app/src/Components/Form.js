import React from 'react';
import style from '../Components/Form.css'

function Form() {
  return (
    <section className="form">
      <br />
      <br />
      <center>
        <br />
        <br />
        <br />
        <strong>
          <p style={{ fontSize: 'xxx-large', fontFamily: 'Bangers' }}>CONTÁCTANOS</p>
        </strong>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <form action="/backend" method="POST" style={{ fontSize: '20px' }}>
          <label htmlFor="nombre" style={{ display: 'inline-block', width: '150px' }}>
            <p style={{ fontSize: 'x-large', fontFamily: 'Bangers' }}>NOMBRE:</p>
          </label>
          <input
            autoComplete="off"
            id="nombre"
            name="nombre"
            placeholder="Ingresa tu nombre"
            type="text"
            style={{ fontSize: 'large', borderRadius: '10px' }}
          /><br /><br />

          <label htmlFor="rut" style={{ display: 'inline-block', width: '150px' }}>
            <p style={{ fontSize: 'x-large', fontFamily: 'Bangers' }}>RUT:</p>
          </label>
          <input
            autoComplete="off"
            id="rut"
            name="rut"
            placeholder="(Opcional)"
            type="text"
            style={{ fontSize: 'large', borderRadius: '10px' }}
          /><br /><br />

          <label htmlFor="tienda-o-local" style={{ display: 'inline-block', width: '150px' }}>
            <p style={{ fontSize: 'x-large', fontFamily: 'Bangers' }}>Tienda o local:</p>
          </label>
          <input
            autoComplete="off"
            id="tienda-o-local"
            name="tienda-o-local"
            placeholder="(Opcional)"
            type="text"
            style={{ fontSize: 'large', borderRadius: '10px' }}
          /><br /><br />

          <label htmlFor="teléfono" style={{ display: 'inline-block', width: '150px' }}>
            <p style={{ fontSize: 'x-large', fontFamily: 'Bangers' }}>Teléfono:</p>
          </label>
          <input
            autoComplete="off"
            id="teléfono"
            name="teléfono"
            placeholder="Ingresa tu teléfono"
            type="text"
            style={{ fontSize: 'large', borderRadius: '10px' }}
          /><br /><br />

          <label htmlFor="correo-electrónico" style={{ display: 'inline-block', width: '150px' }}>
            <p style={{ fontSize: 'x-large', fontFamily: 'Bangers' }}>Correo Electrónico:</p>
          </label>
          <input
            autoComplete="off"
            id="correo-electrónico"
            name="correo-electrónico"
            placeholder="Ingresa tu e-mail"
            type="text"
            style={{ fontSize: 'large', borderRadius: '10px' }}
          /><br /><br />

          <label htmlFor="solicitudes" style={{ display: 'inline-block', width: '150px' }}>
            <p style={{ fontSize: 'x-large', fontFamily: 'Bangers' }}>Solicitud</p>
          </label>
          <select id="solicitudes" name="solicitudes" style={{ fontSize: 'large', borderRadius: '10px' }}>
            <option value="consultas" style={{ fontSize: 'medium' }}>Consultas o Pedidos</option>
            <option value="venta-mayorista" style={{ fontSize: 'medium' }}>Venta Mayorista</option>
            <option value="reclamos-y-sugerencias" style={{ fontSize: 'medium' }}>Reclamos y Sugerencias</option>
          </select>
          <br /><br />

          <label htmlFor="mensaje"><p style={{ fontSize: 'x-large', fontFamily: 'Bangers' }}>Mensaje:</p></label>
          <textarea style={{ fontSize: 'xx-large', borderRadius: '10px' }}></textarea>
          <br />
          <input type="submit" style={{ fontSize: 'large', fontFamily: 'Bangers' }} />
        </form>
        <br />
        <br />
        <br />
      </center>
    </section>
  );
}

export default Form;
