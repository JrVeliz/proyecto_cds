import "./Styles/App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Home,
  Contactenos,
  HojasDeVida,
  Productos,
  QuienesSomos,
  RedesSociales,
  UbicacionReal,
} from "./Components/ComponentsBarrel";
import { RonquilloCv, ZamoraCv,SanchezCv,VeraCv } from "./Components/PerfilSeleccionado";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HojasDeVida" element={<HojasDeVida />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/QuienesSomos" element={<QuienesSomos />} />
          <Route path="/Contactenos" element={<Contactenos />} />
          <Route path="/UbicacionReal" element={<UbicacionReal />} />
          <Route path="/RedesSociales" element={<RedesSociales />} />
          <Route path="/perfil_ronquillo" element={<RonquilloCv />} />
          <Route path="/perfil_zamora" element={<ZamoraCv/>} />
          <Route path="/perfil_sanchez" element={<SanchezCv/>} />
          <Route path="/perfil_vera" element={<VeraCv/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
