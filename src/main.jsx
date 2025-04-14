import React from 'react'
import { createRoot } from 'react-dom/client' // Import correct
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import Apropos from './pages/Apropos/'

import Header from './components/Header'
import Error from './components/Error'
import Footer from './components/Footer'
import FicheLogement from './pages/ficheLogement/'

const container = document.getElementById('root')
const root = createRoot(container) // Utilisation de createRoot

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/fiche_logement/:id" element={<FicheLogement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
