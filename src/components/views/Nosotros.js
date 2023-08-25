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
              Nuestra droguería, tiene como antecedente a QUIMICA TEXTIL que era
              un emprendimiento familiar que apostaba a su crecimiento en los
              años 80. En el año 1991 nace MEDICINA INTEGRAL SRL, convirtiéndose
              en una Pyme sólida y bien posicionada.
              <br />
              En sus comienzos, la empresa contaba con dos integrantes y su
              dueño. Hoy conformamos un equipo de más de 20 personas, trabajando
              para lograr un posicionamiento de referencia en el sector al que
              pertenecemos, y afirmamos nuestro deseo de seguir creciendo,
              convencidos que transitamos este camino siendo capaces de lograrlo
              gracias a nuestro mayor capital, que consideramos lo constituye el
              equipo de personas que conforman esta empresa.
              <br /> Droguería Medicina Integral SRL, se encuentra ubicada en
              calle Av. América 1435, en Tucumán capital. Dicho inmueble es
              propiedad de la misma y cuenta con una superficie de 700 m2.
              <br /> El lugar se ha distribuido según funcionalidad de
              operatoria y necesidades administrativas. Se encuentra en proceso,
              la ampliación del espacio físico de almacenamiento a fin de seguir
              mejorando, no solo para tareas de logística y para mejorar el
              servicio a nuestros clientes, sino también para poder incursionar
              en otras provincias.
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
