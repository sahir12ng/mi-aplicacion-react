import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import InicioSesionPage from './components/InicioSesionPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Main>
          <Routes>
            <Route path="/inicio_sesion" element={<InicioSesionPage />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

