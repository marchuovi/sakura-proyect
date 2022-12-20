import React from 'react'
import Footer from './Footer';
import sakuraLogo from '../assets/sakura.png'
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <>
    <section>
        <h2>Sakura y Quero capturaran las cartas de tu destino</h2>
        <p>Selecciona 3 cartas:</p>
        <div>
          <ul>La primera carta para tu Pasado</ul>
          <ul>La segunda carta para tu Presente</ul>
          <ul>La tercera carta para tu Futuro</ul>
        </div>
        <img src={sakuraLogo} alt="Logo de Sakura y Quero" />
        <button >
        <Link to="/home">Seleccionar cartas</Link></button>
    </section>
    <Footer />
    </>
  )
}

export default Inicio