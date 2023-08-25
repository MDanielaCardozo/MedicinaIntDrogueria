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
import Nutricia from "../../img/nutricia_bago.png";
import CSL from "../../img/CSL-Behring.webp";

const Servicios = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
              <div className="cardInfoServ w-100 p-2 mb-3">
                <div className="icono">
                  <FontAwesomeIcon icon={faPills} className="iconoNos" />
                </div>
                <h3>Medicamentos</h3>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="cardInfoServ w-100 p-2 mb-3">
                <div className="icono">
                  <FontAwesomeIcon icon={faSyringe} className="iconoNos" />
                </div>
                <h3>Descartables en general</h3>
              </div>
            </Col>
          </Row>
          <Row className="w-100 mb-5">
            <Col sm={12} md={6} lg={6}>
              <div className="cardInfoServ w-100 p-2 mb-3">
                <div className="icono">
                  <FontAwesomeIcon icon={faCrutch} className="iconoNos" />
                </div>
                <h3>Alimentación enteral adulto, niño y fórmulas infantil</h3>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="cardInfoServ w-100 p-2 mb-3">
                <div className="icono">
                  <FontAwesomeIcon icon={faVial} className="iconoNos" />
                </div>
                <h3>Hemoderivados</h3>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="container nosotros mt-5">
        <div className="p-3">
          <h2>Nuestros Proveedores</h2>
          <hr />
          <Row className="w-100 mt-5">
            <Col sm={12} md={6} lg={6}>
              <div className="cardInfoProv w-100 p-2 d-flex justify-content-center">
                <img src={Nutricia} alt="Nutricia Bago" className="imgLab" />
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="cardInfoProv w-100 p-2 d-flex justify-content-center">
                <img src={CSL} alt="CSL Behring" className="imgLab" />
              </div>
            </Col>
          </Row>
        </div>
      </section>
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

export default Servicios;
