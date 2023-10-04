import React, { useRef } from 'react';
import { Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const FormularioReclamos = () => {

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
        <Form ref={refForm} onSubmit={handleSubmit}>
            <Form.Group className="my-4">
                <Form.Label>Fecha*</Form.Label>
                <Form.Control type="date" placeholder="" />
                <Form.Label className="my-2">Producto*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre Producto"
                />
                <Form.Label className="my-2">Cantidad*</Form.Label>
                <Form.Control type="number" placeholder="1" />
                <Form.Label className="my-2">Motivo*</Form.Label>
                <Form.Control as="textarea" rows={4} />
                <Form.Label className="my-2">Datos de contacto*</Form.Label>
                  <Form.Control type="text" placeholder="Nombre Apellido" name="from-name" required/>
                  <Form.Label className="my-2">Email*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: pilargarcia@gmail.com"
                    name="user-email"
                    required
                  />
                <Button variant="outline-secondary" className="my-3 ms-1">
                  Enviar
                </Button>
              </Form.Group>
        </Form>
    );
};

export default FormularioReclamos;