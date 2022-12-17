import React from 'react';
import Logo from'../assets/logo.png';
import '../styles/header.css';

export default function Header() {
  return (
    <div className='header'>
      <img src={ Logo } alt="Logo Sakura Tarot" />
      <div>
        <a href="#">Home</a>
        <a href="#">Destino</a>
      </div>
    </div>
  )
}
