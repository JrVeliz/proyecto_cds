import React from "react";
import { Link } from "react-router-dom";
import BarraNavegacion from "./BarraNavegacion";
import Ronquillo from "../assets/perfilRonquillo.JPG";
import Dylan from "../assets/Dylan.jpeg";
import Vera from "../assets/perfilVera.jpeg";
import "../Styles/HojasDeVida.css";
import { Footer } from "./ComponentsBarrel";
import Zamora from "../assets/zamoraPerfil.jpeg";
export default function HojasDeVida() {
  return (
    <div>
      <BarraNavegacion />
      <div className="info-perfiles">
        <h1 className="titulo-perfiles">Hojas de Vida</h1>
        <p className="short-descrp">
          Accede a cada CV de los integrantes dándoles click
        </p>
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
            <img src={Zamora} alt="Zamora Img" />
            <h3>Zamora Zhingri</h3>
          </div>
        </Link>

        <Link to="/perfil_sanchez" className="perfil-link">
          <div className="perfil">
            <img src={Dylan} alt="Sanchez Img" />
            <h3>Sanchez Rak</h3>
          </div>
        </Link>

        <Link to="/perfil_vera" className="perfil-link">
          <div className="perfil">
            <img src={Vera} alt="Vera Img" />
            <h3>Vera Plua</h3>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
