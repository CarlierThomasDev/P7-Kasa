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

// function LayoutMonCompte() {
//   return (
//     <div className="mon-compte-layout">
//       <BarreNavCompte />
//       <div className="contenu-mon-compte">
//         <Outlet /> {/* Le contenu des sous-pages de "Mon Compte" sera rendu ici */}
//       </div>
//     </div>
//   );
// }

// export default LayoutMonCompte;

// function HistoriqueReservations() {
//   return <div>Page de l'Historique des Réservations</div>;
// }

root.render(
  <React.StrictMode>
    <Router> {/* Utilisation de HashRouter */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/fiche_logement/:id" element={<FicheLogement />} />
        
        {/* <Route path="/mon-compte" element={<LayoutMonCompte />}> */}
          {/* <Route path="infos" element={<InfosPersonnelles />} /> Sous-page */}
          {/* <Route path="reservations" element={<HistoriqueReservations />} /> Sous-page */}
          {/* <Route path="favoris" element={<MesFavoris />} /> Sous-page */}
        {/* </Route> */}
        
        <Route path="*" element={<Error />} /> {/* Route pour la page 404 */}
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
);