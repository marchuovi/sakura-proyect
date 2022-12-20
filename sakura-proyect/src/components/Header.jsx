import React from "react";
import Logo from "../assets/logo.png";
import "../styles/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <img className="logoheader" src={Logo} alt="Logo Sakura Tarot" />

      <nav>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/destino">Destino</Link>
        </button>
      </nav>
    </div>
  );
}
