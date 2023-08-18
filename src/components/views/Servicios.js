import React from "react";
import { useEffect } from "react";
import "../views/Servicios.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrutch,
  faPills,
  faSyringe,
  faVial,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Servicios = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="bgSection">
      <section className="portadaServicios d-flex justify-content-end align-items-end p-3">
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
      <section className="container nosotros mt-5">
        <div className="p-3">
          <h2>Nuestra empresa comercializa</h2>
          <hr />
          <Row className="w-100 mt-5">
            <Col sm={12} md={6} lg={6}>
              <div className="cardInfoNosotros w-100 p-2 mb-3">
                <div className="icono">
                  <FontAwesomeIcon icon={faPills} className="iconoNos" />
                </div>
                <h3>Medicamentos</h3>
                {/* <p className="m-3">
                  Con las nuevas ideas, pero manteniendo los mismos ideales.
                  Estamos profundamente comprometidos con la innovación y el
                  crecimiento permanente.
                </p> */}
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="cardInfoNosotros w-100 p-2 mb-3">
                <div className="icono">
                  <FontAwesomeIcon icon={faSyringe} className="iconoNos" />
                </div>
                <h3>Descartables en general</h3>
                {/* <p className="m-3">
                  Nos adaptamos a las diversas circunstancias que se nos
                  presentan dando respuestas ágiles, porque tomamos los cambios
                  como nuevos desafíos por alcanzar.
                </p> */}
              </div>
            </Col>
          </Row>
          <Row className="w-100 mb-5">
            <Col sm={12} md={6} lg={6}>
              <div className="cardInfoNosotros w-100 p-2 mb-3">
                <div className="icono">
                  <FontAwesomeIcon icon={faCrutch} className="iconoNos" />
                </div>
                <h3>Nutrición Enteral</h3>
                {/* <p className="m-3">
                  Constante para llegar más lejos siempre con nuestros clientes
                  y proovedores, con el objetivo de ir mejorando continuamente y
                  ser siempre los primeros.
                </p> */}
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="cardInfoNosotros w-100 p-2 mb-3">
                <div className="icono">
                  <FontAwesomeIcon icon={faVial} className="iconoNos" />
                </div>
                <h3>Hemoderivados</h3>
                {/* <p className="m-3">
                  Constante para llegar más lejos siempre con nuestros clientes
                  y proovedores, con el objetivo de ir mejorando continuamente y
                  ser siempre los primeros.
                </p> */}
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <aside className="container">
        <a href="https://api.whatsapp.com/send?phone=5493812033691" target="_blank" rel="noopener noreferrer" className="iconWhats">
          <div >
          <FontAwesomeIcon icon={faWhatsapp} className=""/>
          </div>
        </a>
      </aside>
    </div>
  );
};

export default Servicios;
