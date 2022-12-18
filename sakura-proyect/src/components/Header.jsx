import React from 'react';
import Logo from '../assets/logo.png';
import '../styles/header.css';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='header'>
      <img src={Logo} alt="Logo Sakura Tarot" />
      <div>
        <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/destino">Destino</Link>
            </li>
        </nav>
      </div>
    </div>
  )
}