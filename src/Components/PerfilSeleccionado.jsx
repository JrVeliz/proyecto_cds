import BarraNavegacion from "./BarraNavegacion";
import Ronquillo from "../assets/Ronquillo_CV.png";
import { Link } from "react-router-dom";
import "../Styles/PerfilSeleccionado.css";

export const RonquilloCv = () => {
    return(
        <div>
            <header>
                <BarraNavegacion/>
            </header>
            <div className="actionsCV">
                <Link to="/HojasDeVida">Volver a Perfiles</Link>
            </div>
            <div className="imgCv">
                <img src={Ronquillo} alt="Ronquillo CV"/>
            </div>
        </div>
    );
};
export const ZamoraCv = () => {
    return(
        <div>
            <header>
                <BarraNavegacion/>
            </header>
            <div className="actionsCV">
                <Link to="/HojasDeVida">Volver a Perfiles</Link>
            </div>
            <div className="imgCv">
                <img src={Ronquillo} alt="Zamora CV"/>
            </div>
        </div>
    );
};
export const SanchezCv = () => {
    return(
        <div>
            <header>
                <BarraNavegacion/>
            </header>
            <div className="actionsCV">
                <Link to="/HojasDeVida">Volver a Perfiles</Link>
            </div>
            <div className="imgCv">
                <img src={Ronquillo} alt="Sánchez CV"/>
            </div>
        </div>
    );
};
export const MoranCv = () => {
    return(
        <div>
            <header>
                <BarraNavegacion/>
            </header>
            <div className="actionsCV">
                <Link to="/HojasDeVida">Volver a Perfiles</Link>
            </div>
            <div className="imgCv">
                <img src={Ronquillo} alt="Morán CV"/>
            </div>
        </div>
    );
};