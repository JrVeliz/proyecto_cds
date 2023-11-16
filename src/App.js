import './Styles/App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Components/Home';
import {
  Contactenos,
  HojasDeVida,
  Productos,
  QuienesSomos,
  RedesSociales,
  UbicacionReal,
} from "./Components/HomeBarrel";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/HojasDeVida" element={<HojasDeVida/>} />
        <Route path="/Productos" element={<Productos/>} />
        <Route path="/QuienesSomos" element={<QuienesSomos/>} />
        <Route path="/Contactenos" element={<Contactenos/>} />
        <Route path="/UbicacionReal" element={<UbicacionReal/>} />
        <Route path="/RedesSociales" element={<RedesSociales/>} />
        
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
