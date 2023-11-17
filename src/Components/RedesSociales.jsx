import BarraNavegacion from "./BarraNavegacion";
import "../Styles/RedesSociales.css"
export default function RedesSociales() {
  return (
    <div>
      <header>
        <BarraNavegacion />
      </header>
      <div className="Titulo">
        <h1>Redes Sociales</h1>
        <p>Visitenos en nuestras redes sociales para futuras ofertas/promociones y nuevos productos</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="social-media-container">
          <figure className="social-media-icon">
            <img
              src="https://cdn.icon-icons.com/icons2/2429/PNG/512/facebook_logo_icon_147291.png"
              className="figure-img img-fluid rounded-sm" alt="..."></img>
            <figcaption className="figure-caption text-end"></figcaption>
          </figure>
          <div className="social-media-text">
            <h3 >Facebook</h3>
            <p>Publicaciones de promociones y contactar a nuestros gerentes.</p>
            <a class="btn btn-primary" href="https://facebook.com" target="_blank" rel="noreferrer" role="button">Seguir</a>
          </div>
        </div>
        <div className="social-media-container">
          <figure className="social-media-icon">
            <img
              src="https://img.freepik.com/vector-premium/nuevo-logotipo-twitter-x-2023-descarga-vector-oficial-logotipo-twitter-x_691560-10797.jpg"
              className="figure-img img-fluid rounded-sm" alt="..."></img>
            <figcaption className="figure-caption text-end"></figcaption>
          </figure>
          <div className="social-media-text">
            <h3>Twitter</h3>
            <p>Informacion importante sobre nuevos cambios y promociones.</p>
            <a class="btn btn-primary" href="https://twitter.com" target="_blank" rel="noreferrer" role="button">Seguir</a>
          </div>
        </div>
        <div className="social-media-container">
          <figure className="social-media-icon">
            <img
              src="https://img.freepik.com/vector-premium/icono-instagram-logotipo-insignia-moderna_578229-124.jpg"
              className="figure-img img-fluid rounded-sm" alt="..."></img>
            <figcaption className="figure-caption text-end"></figcaption>
          </figure>
          <div className="social-media-text">
            <h3>Instagram</h3>
            <p>Publiciones de ofertas y nuevas productos.</p>
            <a class="btn btn-primary" href="https://instagram.com" target="_blank" rel="noreferrer" role="button">Seguir</a>
          </div>
        </div>
      </div>
    </div>
  );
}
