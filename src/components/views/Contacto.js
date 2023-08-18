import React from "react";
import { useEffect } from "react";
import "../views/Contacto.css";
import { Col, Form, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import MapaGoogle from "./MapaGoogle";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bgSection">
      <section className="contacto container">
        <h2>¿Necesitás comunicarte con nosotros?</h2>
        <hr />
        <Row className="py-5">
          <Col lg={6} md={6} sm={12}>
            <div className="contactoBox">
              <Form.Group className="my-4">
                <Form.Label>Nombre Completo*</Form.Label>
                <Form.Control type="text" placeholder="Nombre Apellido" />
                <Form.Label className="my-2">Email*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: pilargarcia@gmail.com"
                />
                <Form.Label className="my-2">Mensaje*</Form.Label>
                <Form.Control as="textarea" rows={4} />
                <Button variant="outline-secondary" className="my-3 ms-1">
                  Enviar
                </Button>
              </Form.Group>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className=" py-5 textoC">
            <div className="d-flex">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="iconoContacto mx-4"
              />
              <p>Av. América 1435, San Miguel de Tucumán(4000). Argentina.</p>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="iconoContacto mx-4"
              />
              <p>administracion@medicinaintegralsrl.com</p>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon icon={faPhone} className="iconoContacto mx-4" />
              <p>381-4346913 <br/>381-4346350<br/>381-4349220</p>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon icon={faWhatsapp} className="iconoContacto mx-4" />
              <p>+54 9 381 203-3691</p>
            </div>
          </Col>
        </Row>
      </section>
      <section className='container py-5'>
                <div className='mb-5'>
                <h2>Encontranos en Google Maps</h2>
                <hr />
                </div>
                <MapaGoogle></MapaGoogle>
            </section>
    </div>
  );
};

export default Contacto;
