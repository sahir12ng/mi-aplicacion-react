import React from 'react';

function InicioSesionPage() {
  return (
    <div className="overlay">
      <section className="container position-absolute top-50 start-50 translate-middle">
        <div className="mt-3 rounded p-5">
          <div className="row">
            <div className="col_1 fondo d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded-start d-flex">
              <img src="../img/logotipo-removebg-preview.png" alt="inventario" />
            </div>

            <div className="col bg-white p-5 rounded-end">
              <div className="row justify-content-between">
                <div className="col-4">
                  <img src="../img/isotipo.PNG" width="420" alt="logo" />
                </div>
              </div>
              <h2 className="fw-bold text-center py-5">¡Bienvenido!</h2>

              <form action="validar.php" method="POST">
                <div className="mb-3">
                  <label htmlFor="xd" className="form-label">
                    Ingrese su tipo de documento
                  </label>
                  <select name="aña" className="form-select">
                    {/*
                    Itera sobre los tipos de documento y crea opciones
                    utilizando el resultado de la consulta PHP.
                    */}
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="user" className="form-label">
                    Número de documento
                  </label>
                  <input
                    type="text"
                    id="user"
                    name="user"
                    className="form-control"
                    placeholder="Ingrese su ID"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="pass"
                    className="form-control"
                    placeholder="Ingrese su contraseña"
                    required
                  />
                </div>

                <div className="d-grid">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Iniciar Sesión"
                  />
                </div>

                <a href="registar.php" className="link">
                  <div className="d-grid">
                    <button type="button" className="btn btn-primary registro">
                      Registrarme <i className="fas fa-clipboard-list"></i>
                    </button>
                  </div>
                </a>

                <div className="my-3">
                  <span>
                    <a href="Recuperar_Contraseña.php">Olvidé mi contraseña</a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InicioSesionPage;
