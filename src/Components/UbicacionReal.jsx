import BarraNavegacion from "./BarraNavegacion";
import "../Styles/UbicacionReal.css";

export default function UbicacionReal() {
  return (
    <div style={{ backgroundColor: "red"}}> 
      <header>
        <BarraNavegacion />
      </header>

      <body style={{ backgroundColor: "red"}}>
        <div style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            position: "absolute",
            top: "25%",
            left: "5%"
          }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2173.8749911680757!2d-79.88350257400408!3d-2.1902527039010704!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6e78ed452d45%3A0xc5de025aa4a94c77!2sUniversidad%20De%20Guayaquil%20-%20Facultad%20de%20Matem%C3%A1ticas%20y%20Ciencias%20F%C3%ADsicas!5e0!3m2!1ses!2sec!4v1700177936456!5m2!1ses!2sec"
                width="600"
                height="450"
                title="Facultad de Matemáticas y Ciencias Físicas"
            />
          </div>
            <div style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              position: "absolute",
              top: "13%",
              right: "20%",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderRadius: 10,
              fontSize: '1.5em'
              }}>
              <p>
                Indicaciones de como llegar
              </p>
           </div>
              <div style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                position: "absolute",
                top: "25%",
                right: "10%",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderRadius: 10,
                fontSize: '1.5em'
                }}>
                <p>
                  Llegando desde la estacion de la metrovia de guayaquil
                <br/>
                  con la ruta de : Terminal-Centro podra guiarse por ser
                <br/>
                  la segunda parada de la metro despues de pasar por el
                <br/>
                  una vez llegado a la estacion tomando ruta a mano
                  <br/>
                  y avanzando 3 cuadras si mira al lado derecho de la
                  <br/>
                  calle observara la facultad.
                </p>
              </div>
      </body>
    </div>
  );
}
