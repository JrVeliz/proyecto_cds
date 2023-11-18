import { Link, useLocation } from "react-router-dom";
import "../Styles/BarraNavegacion.css";
import logoImagen from "../assets/logos/softlivepestana.png";

export default function BarraNavegacion() {
  const location = useLocation();
  return (
    <nav className="barra-navegacion">
      <div className="containerImg">
        <Link className="logoLink" to="/">
          <img
            src={logoImagen}
            alt="Logo"
            className="logo"
            style={{ width: "75px", height: "auto" }}
          />
        SoftLive
        </Link>
      </div>
      <div className="containerMenus">
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/HojasDeVida" ? "active" : ""}>
            <Link to="/HojasDeVida">Hojas de Vida</Link>
          </li>
          <li className={location.pathname === "/Productos" ? "active" : ""}>
            <Link to="/Productos">Productos</Link>
          </li>
          <li className={location.pathname === "/QuienesSomos" ? "active" : ""}>
            <Link to="/QuienesSomos">¿Quiénes Somos?</Link>
          </li>
          <li className={location.pathname === "/Contactenos" ? "active" : ""}>
            <Link to="/Contactenos">Contáctenos</Link>
          </li>
          <li
            className={location.pathname === "/UbicacionReal" ? "active" : ""}
          >
            <Link to="/UbicacionReal">Ubicación Real</Link>
          </li>
          <li
            className={location.pathname === "/RedesSociales" ? "active" : ""}
          >
            <Link to="/RedesSociales">Redes Sociales</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
