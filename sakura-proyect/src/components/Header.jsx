import React from "react";
import Logo from "../assets/logo.png";
import "../styles/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
      <img className="logoheader" src={Logo} alt="Logo Sakura Tarot"/>
      </Link>
      <nav>
        <button>
          <Link to="/lecture" onClick={event => resetSelectCards(event)}>Nueva Lectura</Link>
        </button>
        <button>
          <Link to="/destino">Destino</Link>
        </button>
      </nav>
    </div>
  );
}
