import React, { useState } from 'react';
import BarraNavegacion from './BarraNavegacion';
import backgroundImage from "../assets/backgrounds/bg_contactenos.png"

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    sexo: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (

    <><div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(5px)",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    ></div><><header>
      <BarraNavegacion></BarraNavegacion>
    </header><body>
          <section className="d-flex justify-content-center align-items-center">
            <div className="card shadow col-xs-12 col-sm-6 col-md-6 col-lg-4 p-4" style={{ position: "absolute", top: "25%" }}>
              <div className="mb-4 d-flex justify-content-start align-items-center">
                <h4>
                  {' '}
                  <i className="bi bi-chat-left-quote"></i> &nbsp; Contacto
                </h4>
              </div>
              <div className="mb-1">
                <form id="contacto" onSubmit={handleSubmit}>
                  <div className="mb-4 d-flex justify-content-between">
                    <div>
                      <label htmlFor="nombre">
                        {' '}
                        <i className="bi bi-person-fill"></i> Nombre
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        id="nombre"
                        placeholder="Nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required />
                      <div className="nombre text-danger"></div>
                    </div>
                    <div>
                      <label htmlFor="apellido">
                        {' '}
                        <i className="bi bi-person-bounding-box"></i> Apellido
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="apellido"
                        id="apellido"
                        placeholder="Apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required />
                      <div className="apellido text-danger"></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="correo">
                      <i className="bi bi-envelope-fill"></i> Correo
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="correo"
                      id="correo"
                      placeholder="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      required />
                    <div className="correo text-danger"></div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="sexo">
                      <i className="bi bi-gender-ambiguous"></i> Sexo:{' '}
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      name="sexo"
                      value="masculino"
                      checked={formData.sexo === 'masculino'}
                      onChange={handleChange} />{' '}
                    Masculino
                    <input
                      type="radio"
                      className="form-check-input"
                      name="sexo"
                      value="femenino"
                      checked={formData.sexo === 'femenino'}
                      onChange={handleChange} />{' '}
                    Femenino
                    <input
                      type="radio"
                      className="form-check-input"
                      name="sexo"
                      value="femenino"
                      checked={formData.sexo === 'Terreneitor'}
                      onChange={handleChange} />{' '}
                    Terreneitor
                    <div className="sexo text-danger"></div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="mensaje">
                      {' '}
                      <i className="bi bi-chat-right-dots-fill" required></i>{' '}
                      Mensaje
                    </label>
                    <textarea
                      name="mensaje"
                      id="mensaje"
                      className="form-control"
                      placeholder="Mensaje a enviar"
                      value={formData.mensaje}
                      onChange={handleChange}
                    ></textarea>
                    <div className="mensaje text-danger"></div>
                  </div>

                  <div className="mb-2">
                    <button
                      id="botton"
                      className="col-12 btn btn-primary d-flex justify-content-between"
                      type="submit"
                    >
                      <span>Enviar </span>
                      <i id="icono" className="bi bi-cursor-fill "></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </body></></>
  );
}

export default ContactForm;
