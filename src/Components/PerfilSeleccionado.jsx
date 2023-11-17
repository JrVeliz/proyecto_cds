import BarraNavegacion from "./BarraNavegacion";
import Ronquillo from "../assets/Ronquillo_CV.png";
import Dylan from "../assets/Dylan_CV.jpeg";
import { Link } from "react-router-dom";
import "../Styles/PerfilSeleccionado.css";
import {Footer} from "./ComponentsBarrel";
export const RonquilloCv = () => {
  return (
    <div>
      <BarraNavegacion />
      {volverAPerfiles()}
      <div className="imgCv">
        <img src={Ronquillo} alt="Ronquillo CV" />
      </div>
      <Footer />
    </div>
  );
};
export const ZamoraCv = () => {
  return (
    <div>
      <BarraNavegacion />
      {volverAPerfiles()}
      <div className="imgCv">
        <img src={Ronquillo} alt="Zamora CV" />
      </div>
      <Footer />
    </div>
  );
};
export const SanchezCv = () => {
  return (
    <div>
      <BarraNavegacion />
      {volverAPerfiles()}
      <div className="imgCv">
        <img src={Dylan} alt="Sánchez CV" />
      </div>
      <Footer />
    </div>
  );
};
export const MoranCv = () => {
  return (
    <div>
      <BarraNavegacion />
      {volverAPerfiles()}
      <div className="imgCv">
        <img src={Ronquillo} alt="Morán CV" />
      </div>
      <Footer />
    </div>
  );
};
function volverAPerfiles() {
  return (
    <div className="actionsCV">
      <Link to="/HojasDeVida">Volver a Perfiles</Link>
    </div>
  );
}
