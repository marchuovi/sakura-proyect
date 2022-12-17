import React from 'react';
import Logo from'./assets/logo.png'

export default function Header() {
  return (
    <div>
      <img src={ Logo } alt="Logo Sakura Tarot" />
      <div>
        <a href="#">Home</a>
        <a href="#">Destino</a>
      </div>
    </div>
  )
}
