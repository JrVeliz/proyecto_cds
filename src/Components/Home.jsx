import BarraNavegacion from "./BarraNavegacion";
import logoFacultad from "../assets/logos/logoMatFis.jpg";
import logoUG from "../assets/logos/UGlogo.png";
import "../Styles/Home.css";
import { Footer } from "./ComponentsBarrel";
export default function Home() {
  return (
    <>
      <BarraNavegacion />
      <div className="container-info">
        <div className="logos">
          <img src={logoUG} alt="logo de la universidad de guayaquil" />
          <img
            src={logoFacultad}
            alt="logo de la facultad de ciencias matemáticas y físicas"
          />
        </div>
        <div className="titulo">
          <h1>Universidad de Guayaquil</h1>
          <h2>Facultad de Ciencias Matemáticas y Físicas</h2>
          <h2>Asignatura: Calidad de Software</h2>
          <h2>Trabajo Práctico: Proyecto de Primer parcial</h2>
        </div>
        <div className="integrante">
          <h3>Integrantes del Grupo:</h3>
          <ul>
            <li>
              <p>José Antonio Ronquillo Veliz</p>
            </li>
            <li>
              <p>Dylan Steban Sánchez RaK</p>
            </li>
            <li>
              <p>Nelson Alfredo Zamora Zhingri</p>
            </li>
            <li>
              <p>MorÁn Choéz Joan Dalemberg</p>
            </li>
          </ul>
        </div>
        <div className="informacion">
          <p>
            Profesora: <strong>Ortiz Zambrano Jenny Alexandra</strong>
          </p>
          <p>
            Fecha: <strong>17/11/2023</strong>
          </p>
        </div>
        <div className="informacion">
          <p>
            <strong>Resumen:</strong> Bienvenido a nuestra página web aqui se
            presentarán diferentes secciones como nuestros CVs, información
            personal e laboral...
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
