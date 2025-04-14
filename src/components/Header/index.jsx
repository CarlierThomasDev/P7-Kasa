import React from 'react'
import logo from '../../assets/logo_kasa.png'
import Navigation from '../../components/navigation'
import '../../styles/compenents/header.css'

const Header = () => {
  return (
    // affichage du logo en h1 et du menu
    <header className="header">
      {/* Les images importées depuis la balise img sont accessibles dans "public" */}
      <h1>
        <img src={logo} alt="Logo Kasa" />
      </h1>
      <Navigation />
    </header>
  )
}
export default Header
