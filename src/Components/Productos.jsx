import React from "react";
import BarraNavegacion from "./BarraNavegacion";
import "bootstrap/dist/css/bootstrap.min.css"; // Importacion de la hoja de estilos de Bootstrap utilizada para la pagina

// Importación de imágenes utilizadas para la descripcion de productos
import imagen1 from "../assets/productos/Skype.png";
import imagen2 from "../assets/productos/Avast.png";
import imagen3 from "../assets/productos/Office.png";
import imagen4 from "../assets/productos/Adobecreativecloud.png";
import imagen5 from "../assets/productos/Windows10.png";
import imagen6 from "../assets/productos/AutoCAD.png";
import imagen7 from "../assets/productos/Quickbooks.png";
import imagen8 from "../assets/productos/Mcafee.png";
import imagen9 from "../assets/productos/Salesforce.png";
import imagen10 from "../assets/productos/Vmware.png";
import imagen11 from "../assets/productos/Unity.png";
import imagen12 from "../assets/productos/Zendesk.png";

export default function Productos() {
  // Lista de productos empresariales con descripciones e imágenes, realizada a traves de un array, el cual nos permite invocar los elementos para ser mostrados sin necesidad de alterar gran parte del codigo
  const productosEmpresariales = [
    {
      nombre: "Skype",
      descripcion: "Plataforma de comunicación que permite realizar llamadas de voz y video, así como enviar mensajes instantáneos y compartir archivos.",
      imagen: imagen1,
    },
    {
      nombre: "Avast",
      descripcion: "Potente software antivirus que proporciona protección en tiempo real contra virus, malware y amenazas en línea.",
      imagen: imagen2,
    },
    {
      nombre: "Office",
      descripcion: "Suite de productividad basada en la nube que incluye aplicaciones esenciales como Word, Excel y PowerPoint, permitiendo colaboración en tiempo real y acceso desde cualquier dispositivo.",
      imagen: imagen3,
    },
    {
      nombre: "Adobe Creative Cloud",
      descripcion: "Descripción del Producto 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      imagen: imagen4,
    },
    {
      nombre: "Windows 10",
      descripcion: "El sistema operativo más reciente de Microsoft, reconocido por su interfaz intuitiva, seguridad mejorada y amplia compatibilidad de hardware y software.",
      imagen: imagen5,
    },
    {
      nombre: "AutoCAD",
      descripcion: "Software de diseño asistido por computadora (CAD) utilizado en arquitectura e ingeniería para la creación precisa de planos y modelos 3D.",
      imagen: imagen6,
    },
    {
      nombre: "QuickBooks",
      descripcion: "Herramienta de contabilidad y gestión financiera diseñada para pequeñas empresas, facilitando la facturación, seguimiento de gastos y generación de informes fiscales.",
      imagen: imagen7,
    },
    {
      nombre: "McAfee Antivirus",
      descripcion: "Solución de seguridad informática que protege contra virus, malware y amenazas en línea, brindando tranquilidad y seguridad en la navegación.",
      imagen: imagen8,
    },
    {
      nombre: "Salesforce",
      descripcion: "Plataforma de CRM basada en la nube que ayuda a empresas a gestionar clientes, ventas y servicios de manera eficiente, impulsando la colaboración y la productividad.",
      imagen: imagen9,
    },
    {
      nombre: "VMware",
      descripcion: "Software de virtualización que permite la creación de entornos virtuales, facilitando la gestión y optimización de recursos informáticos.",
      imagen: imagen10,
    },
    {
      nombre: "Unity",
      descripcion: "Plataforma de desarrollo de videojuegos y aplicaciones en 2D y 3D, facilitando la creación y despliegue multiplataforma.",
      imagen: imagen11,
    },
    {
      nombre: "Zendesk:",
      descripcion: "Plataforma de atención al cliente y soporte que centraliza las interacciones, mejorando la eficiencia y la satisfacción del cliente a través de diversos canales de comunicación.",
      imagen: imagen12,
    },  
  ];

  // Nos permite mostrar los elementos de los productos de manera mas comprimida y ordenada a traves de la invocación del array
  return (
    <div>
      <header>
        <BarraNavegacion />
      </header>
      <div className="container mt-4">
        <h2 className="mb-4">Productos Empresariales</h2>
        <div className="row">
          {productosEmpresariales.map((producto, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card h-100">
                <img
                  src={producto.imagen}
                  className="card-img-top img-fluid"
                  alt={`Imagen de ${producto.nombre}`}
                  style={{ maxHeight: "500px" }} 
                />
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title">{producto.nombre}</h3>
                  <p className="card-text flex-grow-1">{producto.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
