import React from "react";
import "../views/Distribucion.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxesPacking,
  faCartFlatbed,
  faTruckArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Logistica from "../../img/pasos-trazabilidad.png";

const Distribucion = () => {
  return (
    <div className="bgSection">
      <section className="portadaDist d-flex justify-content-end align-items-end p-3">
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
      <section className="container py-5 mt-3">
        <div className="containerSect mb-2">
          <div className="p-3">
            <h2>Distribución</h2>
            <hr />
            <img src={Logistica} alt="" className="w-100" />
          </div>
        </div>
      </section>
      <article className="articleDist">
        <div className="container">
          <Row className="w-100 mt-3">
            <Col sm={12} md={4} lg={4}>
              <div className="cardInfoUno w-100 p-2">
                <div className="icono">
                  <FontAwesomeIcon icon={faTruckArrowRight} className="icon" />
                </div>
                <h3>Logistica</h3>
                <p className="m-3">
                  Para evitar interrupciones en los tratamientos de los
                  pacientes, contamos con un amplio stock para la provisión
                  inmediata de medicamentos para terapias especiales y un
                  eficiente sistema de distribución que garantiza respuestas a
                  la medida de cada situación.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div className="cardInfoDos w-100 p-2">
                <div className="icono">
                  <FontAwesomeIcon icon={faBoxesPacking} className="iconDos" />
                </div>
                <h3>Trazabilidad</h3>
                <p className="m-3">
                  Tenemos un Sistema propio de Trazabilidad.Cada una de las
                  operaciones realizadas en Droguería Medicina Integral srl, se
                  encuentran bajo procesos certificados y trazables, de esta
                  forma garantizamos la calidad y seguridad en todo el proceso
                  de distribución.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div className="cardInfoTres w-100 p-2">
                <div className="icono">
                  <FontAwesomeIcon icon={faCartFlatbed} className="iconTres" />
                </div>
                <h3>Tecnología</h3>
                <p className="m-3">
                  La localización inmediata de los medicamentos que por
                  diferentes motivos hubieran de ser retirados
                  o impedidos de que lleguen al circuito asistencial o
                  comercial. Tenemos una capacidad de almacenamiento con los más
                  altos estándares de calidad internacional.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </article>
      <section className="py-5"></section>
    </div>
  );
};

export default Distribucion;
