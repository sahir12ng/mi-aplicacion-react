import React from 'react';
import './Main.css';

function Main() {
  return (
    <main className="main">
      <section className="about container">
        <div className="about__course">
          <h2 className="title title--border">¿Qué es S.I.?</h2>
          <p className="about__paragraph">Es un sistema desarrollado para la gestión administrativa y el control de inventario para la papelería Ariana.</p>
        </div>
        <figure className="about__picture">
          <img src="./img/Imagen1.png" className="about__img" alt="¿Qué es S.I.?" />
        </figure>
      </section>
      <section className="card container">
        <h2 className="title">¿Cuáles son los beneficios de tener un inventario?</h2>
        <div className="card__container">
          <div className="card__item">
            <figure className="card__img">
              <img src="./img/SEO Report_Lineal-coloured.svg" className="card__picture" alt="Beneficio 1" />
            </figure>
            <h3 className="card__title">Resultados</h3>
            <p className="card__paragraph">Se reflejan resultados óptimos que aumentan la calidad de servicio y producción de la papelería, abarcando más público y fidelizando a muchos clientes.</p>
          </div>
          <div className="card__item">
            <figure className="card__img">
              <img src="./img/Brainstorming_Lineal-coloured.svg" className="card__picture" alt="Beneficio 2" />
            </figure>
            <h3 className="card__title">Productividad</h3>
            <p className="card__paragraph">Se reduce y ahorra tiempo, incrementa la agilidad, se ahorran costos y se ofrece un mejor servicio al cliente.</p>
          </div>
          <div className="card__item">
            <figure className="card__img">
              <img src="./img/Line Graph_Lineal-coloured.svg" className="card__picture" alt="Beneficio 3" />
            </figure>
            <h3 className="card__title">Estabilidad</h3>
            <p className="card__paragraph">Mediante la gestión correcta, organización y control del inventario de la empresa se llega a un punto de estabilidad con baja probabilidad de errores.</p>
          </div>
          <div className="card__item">
            <figure className="card__img">
              <img src="./img/Data visualization_Flat.svg" className="card__picture" alt="Beneficio 4" />
            </figure>
            <h3 className="card__title">Toma de Decisiones</h3>
            <p className="card__paragraph">Al tener una visión confiable y segura del stock de la empresa se pueden tomar mejores decisiones, como reducir costos al no cargar con excesos o faltantes de mercadería, de esa forma se podrá ofrecer un mejor servicio y/o producto al cliente.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
