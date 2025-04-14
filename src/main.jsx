import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Import HashRouter
import Home from './pages/Home/';
import Apropos from './pages/Apropos/';
import Header from './components/Header';
import Error from './components/Error';
import Footer from './components/Footer';
import FicheLogement from './pages/ficheLogement/';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router> {/* Utilisation de HashRouter */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/fiche_logement/:id" element={<FicheLogement />} />
        <Route path="*" element={<Error />} /> {/* Route pour la page 404 */}
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
);