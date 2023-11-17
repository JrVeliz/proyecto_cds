import React from "react";
import { Link } from "react-router-dom";
import BarraNavegacion from "./BarraNavegacion";
import Ronquillo from "../assets/perfilRonquillo.JPG";
import "../Styles/HojasDeVida.css";
export default function HojasDeVida() {
  return (
    <div>
      <header>
        <BarraNavegacion />
      </header>
      <div className="info-perfiles">
        <h1 className="titulo-perfiles">Hojas de Vida</h1>
        <p className="short-descrp">Accede a cada CV de los integrantes dándoles click</p>
      </div>
      <div className="container-perfiles">
        <Link to="/perfil_ronquillo" className="perfil-link">
          <div className="perfil">
            <img src={Ronquillo} alt="Ronquillo Img" />
            <h3>Ronquillo Veliz</h3>
          </div>
        </Link>

        <Link to="/perfil_zamora" className="perfil-link">
          <div className="perfil">
            <img src={Ronquillo} alt="Zamora Img" />
            <h3>Zamora Zhingri</h3>
          </div>
        </Link>

        <Link to="/perfil_sanchez" className="perfil-link">
          <div className="perfil">
            <img src={Ronquillo} alt="Sanchez Img" />
            <h3>Sanchez Rak</h3>
          </div>
        </Link>

        <Link to="/perfil_moran" className="perfil-link">
          <div className="perfil">
            <img src={Ronquillo} alt="Morán Img" />
            <h3>Morán Choéz</h3>
          </div>
        </Link>
      </div>
      <footer></footer>
    </div>
  );
}
