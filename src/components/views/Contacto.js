import React, { useRef } from "react";
import { useEffect } from "react";
import "../views/Contacto.css";
import { Col, Form, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import MapaGoogle from "./MapaGoogle";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import FormularioReclamos from "./FormularioReclamos";

const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const refForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const EMAILJS_SERVICE = process.env.REACT_APP_EMAILJS_SERVICE;
    const EMAILJS_TEMPLATE = process.env.REACT_APP_EMAILJS_TEMPLATE;
    const EMAILJS_PUBLICKEY = process.env.REACT_APP_EMAILJS_PUBLICKEY;

    emailjs
      .sendForm(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        refForm.current,
        EMAILJS_PUBLICKEY
      )
      .then((result) => {
        console.log(result.text);
        refForm.current.reset();
        Swal.fire(
          "Mensaje enviado",
          "El mensaje será respondido a la brevedad",
          "success"
        );
      })
      .catch((error) => {
        console.log(error.text);
        alert("El mensaje no pudo ser enviado");
      });
  };

  return (
    <div className="bgSection">
      <section className="contacto container">
        <h2>¿Necesitás comunicarte con nosotros?</h2>
        <hr />
        <Row className="py-5">
          <Col lg={6} md={6} sm={12}>
            <div className="contactoBox">
              <Form ref={refForm} onSubmit={handleSubmit}>
                <Form.Group className="my-4">
                  <Form.Label>Nombre Completo*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nombre Apellido"
                    name="from_name"
                    required
                  />
                  <Form.Label className="my-2">Email*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: pilargarcia@gmail.com"
                    name="user_email"
                    required
                  />
                  <Form.Label className="my-2">Mensaje*</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    required
                  />
                  <Button
                    variant="outline-secondary"
                    type="submit"
                    className="my-3 ms-1"
                  >
                    Enviar
                  </Button>
                </Form.Group>
              </Form>
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
              <p>
                381-4346913 <br />
                381-4346350
                <br />
                381-4349220
              </p>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="iconoContacto mx-4"
              />
              <p>+54 9 381 203-3691</p>
            </div>
          </Col>
        </Row>
      </section>
      <section className="container py-5">
        <div className="mb-5">
          <h2>Encontranos en Google Maps</h2>
          <hr />
        </div>
        <MapaGoogle></MapaGoogle>
      </section>
      <section className="container py-5">
        <h2>Reclamos</h2>
        <hr />
        <div className="contactoBox my-5">
          <FormularioReclamos></FormularioReclamos>
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

export default Contacto;
