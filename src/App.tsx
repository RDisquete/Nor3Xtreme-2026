import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/Home.tsx';
import Marcha from './pages/Marcha.tsx';
import Reglamento from './pages/Reglamento.tsx';
import Recorrido26 from './pages/Recorrido26.tsx';
import Altimetrias from './pages/Altimetrias.tsx';
import ServiciosCarrera from './pages/ServiciosCarrera.tsx';
import Resultados from './pages/Resultados.tsx';
import Contacto from './pages/Contacto.tsx';
import Alojamiento from './pages/Alojamiento.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import TopScroll from './components/TopScroll.tsx';

function App() {
  return (
    <Router>
      <TopScroll />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marcha" element={<Marcha />} />
          <Route path="/reglamento" element={<Reglamento />} />
          <Route path="/recorridos" element={<Recorrido26 />} />
          <Route path="/altimetrias" element={<Altimetrias />} />
          <Route path="/servicios-carrera" element={<ServiciosCarrera />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/alojamiento" element={<Alojamiento />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;