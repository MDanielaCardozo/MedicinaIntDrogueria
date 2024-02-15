import React, { useEffect } from "react";
import "../views/Nosotros.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { Row, Col } from "react-bootstrap";
// import Equipo from "../../img/equipoMedInt-removebg-preview.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Nosotros = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bgSection">
      <section className="portadaNosotros d-flex justify-content-end align-items-end p-3">
        <div className="contentPortada">
          <p className="textPortada">
            DROGUERÍA MEDICINA INTEGRAL SRL llevamos más de 30 años
            <br />
            acompañando al sector de la salud. Somos un eslabón
            <br />
            importante en la cadena de comercialización y distribución.
          </p>
        </div>
      </section>
      <article className="nosotros container py-5 mt-3">
        <div className="containerSect mb-2">
          <div className="p-3">
            <h2>Nosotros</h2>
            <hr />
            <p className="p-3">
              Nuestra droguería tiene como antecedente a Química Textil, un
              emprendimiento familiar que nace en los años 80 en San Miguel de
              Tucumán, con objetivo de comercializar medicamentos y productos
              descartables en general. En el año 1991 como una continuación de
              esta, nace Medicina Integral SRL, formada en un principio por su
              dueño Ricardo E. Silveti y dos integrantes más. En aquel momento
              se buscó ampliar la variedad de productos disponibles para la
              venta y extender la distribución de los mismos a otras provincias.
              Poco a poco ante la necesidad y apostando al crecimiento constante
              se fue incorporando más personal y realizando inversiones para
              modernizar las instalaciones.
              <br />
              Actualmente contamos con un equipo de más de 20 personas
              trabajando para ser una empresa de referencia en el sector al que
              pertenecemos. Droguería Medicina Integral SRL se encuentra ubicada
              en calle Av. América 1435. Cuenta con una locación propia de
              700m2, distribuidos según su funcionalidad operativa y sus
              necesidades administrativas. Además se encuentra en proceso de
              ampliación del espacio físico para mejorar la capacidad de
              almacenamiento, optimizar nuestros canales de distribución y
              ofrecer un servicio de calidad a nuestros clientes.
            </p>
          </div>
        </div>
      </article>
      {/* <section className="container">
        <div className="p-3">
          <h2>Nuestro equipo</h2>
          <hr />
          <Row>
            <Col sm={12} md={3} lg={3}>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <div className="equipo">
                  <div className="image">
                    <img src={Equipo} alt="equipo" className="imgEquipo" />
                    <div className="content">
                    <FontAwesomeIcon icon={faLinkedin} className="text-white fs-1"/>
                    </div>
                  </div>
                </div>
              </a>
              <h4 className="text-center text-black-50 mt-2">Juan Silveti</h4>
              <h5 className="text-center text-black-50">Presidente</h5>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <div className="equipo">
                  <div className="image">
                    <img src={Equipo} alt="equipo" className="imgEquipo" />
                    <div className="content">
                      <FontAwesomeIcon icon={faLinkedin} className="text-white fs-1"/>
                    </div>
                  </div>
                </div>
              </a>
              <h4 className="text-center text-black-50 mt-2">Juan Silveti</h4>
              <h5 className="text-center text-black-50">Gerente general</h5>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <div className="equipo">
                  <div className="image">
                    <img src={Equipo} alt="equipo" className="imgEquipo" />
                    <div className="content">
                    <FontAwesomeIcon icon={faLinkedin} className="text-white fs-1"/>
                    </div>
                  </div>
                </div>
              </a>
              <h4 className="text-center text-black-50 mt-2">Juan Silveti</h4>
              <h5 className="text-center text-black-50">Gerente financiero</h5>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <div className="equipo">
                  <div className="image">
                    <img src={Equipo} alt="equipo" className="imgEquipo" />
                    <div className="content">
                    <FontAwesomeIcon icon={faLinkedin} className="text-white fs-1"/>
                    </div>
                  </div>
                </div>
              </a>
              <h4 className="text-center text-black-50 mt-2">Juan Silveti</h4>
              <h5 className="text-center text-black-50">Supervisor de depósito</h5>
            </Col>
          </Row>
        </div>
      </section> */}
      <aside className="container">
        <a
          href="https://api.whatsapp.com/send?phone=5493812033691"
          target="_blank"
          rel="noopener noreferrer"
          className="iconWhats"
        >
          <div>
            <FontAwesomeIcon icon={faWhatsapp} className="" />
          </div>
        </a>
      </aside>
    </div>
  );
};

export default Nosotros;
