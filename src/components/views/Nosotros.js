import React, { useEffect } from "react";
import "../views/Nosotros.css";
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
              Droguería SILVETI nace como un emprendimiento familiar que
              apostaba al crecimiento en el año 80 como Quimica Textil. En el
              año 1991 Nace Medicina Integral srl convertiendoce en una Pyme
              sólida y bien posicionada.
              <br /> En sus comienzos la empresa contaba con dos integrantes y
              el dueño. Hoy conformamos MEDICINA INTEGRAL SRL un equipo de más
              de 25 personas.
              <br /> Trabajamos para lograr un posicionamiento de referencia en
              el sector al que pertenecemos y afirmamos nuestro deseo de seguir
              creciendo convencidos que estamos transitando ese camino y por
              sobre todas las cosas pensamos que somos capaces de lograrlo
              gracias a que nuestro mayor capital lo constituye el equipo de
              personas que conforman.
              <br /> Droguería MEDICINA INTEGRAL SRL se encuentra ubicada en la
              calle Av. Las America 1435, Tucumán Capital. Dicho inmueble es
              propiedad de la misma y ocupa una superficie de más de 700 mts
              cuadrados.
              <br /> El lugar se ha distribuido según funcionalidad de
              operatoria y necesidades administrativas. La superficie destinada
              a Depósito de mercadería abarca un total de aproximadamente 500
              mts cuadrados.
              <br /> Se encuentra entre los proyectos ampliar el espacio físico
              de almacenamiento a fin de seguir mejorando en lo que respecta a
              las tareas de logística y también la de incursionar en nuevas
              provincias.
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
    </div>
  );
};

export default Nosotros;
