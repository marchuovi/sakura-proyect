import React from 'react'
import Footer from './Footer';
import sakuraLogo from '../assets/sakura.png'
import logo2 from '../assets/logo2.png'


import { Link } from "react-router-dom";
import '../styles/home.css'

const Home = () => {
  return (
    <div className='home-page'>
      <img className='logo' src={logo2} alt="logo sakura tarot" />
      <section className='container'>
        <div className='text'>
          <h2>Sakura y Kero te ayudarán a capturar las cartas de tu destino</h2>
          <p>Selecciona 3 cartas:</p>
          <ol>La primera carta para tu Pasado</ol>
          <ol>La segunda carta para tu Presente</ol>
          <ol>La tercera carta para tu Futuro</ol>
        </div>
        <img className='sakura-img' src={sakuraLogo} alt="Logo de Sakura y Quero" />
      </section>
      <button className='btn-home' >
        <Link to="/lecture">Seleccionar cartas</Link>
      </button>
      <Footer />
    </div>
  )
}

export default Home