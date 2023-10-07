import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="hero__container container">
        <div className="hero__texts">
          <h1 className="hero__title">Store Inventory</h1>
          <p className="hero__copy">Una hoja en blanco es una historia nueva</p>
          <Link to="/inicio_sesion" className="hero__cta" >
            <strong>Ingresar</strong>
          </Link>
        </div>
        <img src="./img/1aad26e24060499974d848369d1b946c.jpg" className="hero__img" alt="Hero Image" />
      </div>
    </header>
  );
}

export default Header;
