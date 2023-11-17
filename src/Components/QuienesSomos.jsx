import React from "react";
import BarraNavegacion from "./BarraNavegacion";
import nuestraImagen from "../assets/logos/softlivegeneral.png";
import {Footer} from "./ComponentsBarrel";

export default function QuienesSomos() {
  return (
    <>
      <BarraNavegacion />
      <div className="container mt-4 text-center" style={{"height":"500px"}}>
        <img
          src={nuestraImagen}
          alt="Imagen de Quiénes Somos"
          className="img-fluid mx-auto"
          style={{ width: "25%", height: "auto" }}
        />
        <p>
          <strong>Misión:</strong> Nuestra misión es liderar la industria
          proporcionando soluciones innovadoras y de vanguardia que superen las
          expectativas de nuestros clientes. Nos esforzamos por ser pioneros en
          la creación de impacto positivo, ofreciendo productos y servicios que
          mejoren la calidad de vida de las personas y contribuyan al progreso
          de la sociedad.
        </p>
        <p>
          <strong>Visión:</strong> Ser reconocidos como un referente global en
          la excelencia y la innovación. Nos proyectamos como una empresa que
          inspira y transforma, impulsando el cambio positivo en el mundo. A
          través de nuestra dedicación y pasión, buscamos construir un futuro
          sostenible y prometedor, donde nuestras acciones inspiren a otros a
          seguir el camino de la excelencia y la responsabilidad social.
        </p>
      </div>
      <Footer/>
    </>
    
  );
}
