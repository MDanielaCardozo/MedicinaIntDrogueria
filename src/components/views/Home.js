import React from "react";
import "./Home.css";
import { Carousel, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faRoute,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <main className="bgSection">
      <section>
        <Carousel>
          <Carousel.Item className="carouselUno">
            <Carousel.Caption className="bgCarousel">
              <h3 className="textCarousel">MEDICINA INTEGRAL</h3>
              <p className="textCarousel">
                Vanguardia en tecnología aplicada a la logística.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carouselDos">
            <Carousel.Caption className="bgCarousel">
              <h3 className="textCarousel">MEDICINA INTEGRAL</h3>
              <p className="textCarousel">
                Más y mejores soluciones a nuestros clientes y proveedores.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carouselTres">
            <Carousel.Caption className="bgCarousel">
              <h3 className="textCarousel">MEDICINA INTEGRAL</h3>
              <p className="textCarousel">
                Somos la distribuidora con respaldo y aval de seguridad para
                nuestros proveedores y clientes
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="container my-4">
        <div className="iconosHome">
          <Row className="py-4">
            <Col sm={12} md={3} lg={3}>
              <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <h3 id="tituloDrog">DROGUERIA LIDER</h3>
              </div>
            </Col>
            <Col sm={12} md={3} lg={2}>
              <div className="cardInfo w-100 p-2">
                <div className="icono">
                  <FontAwesomeIcon icon={faHandshake} className="icon" />
                </div>
                <h3 className="text-white">Nosotros</h3>
              </div>
            </Col>
            <Col sm={12} md={3} lg={2}>
              <div className="cardInfo w-100 p-2">
                <div className="icono">
                  <FontAwesomeIcon icon={faHandshake} className="icon" />
                </div>
                <h3 className="text-white">Servicios</h3>
              </div>
            </Col>
            <Col sm={12} md={3} lg={2}>
              <div className="cardInfo w-100 p-2">
                <div className="icono">
                  <FontAwesomeIcon icon={faHandshake} className="icon" />
                </div>
                <h3 className="text-white">Distribución</h3>
              </div>
            </Col>
            <Col sm={12} md={3} lg={2}>
              <div className="cardInfo w-100 p-2">
                <div className="icono">
                  <FontAwesomeIcon icon={faHandshake} className="icon" />
                </div>
                <h3 className="text-white">Contacto</h3>
              </div>
            </Col>
            
          </Row>
        </div>
      </section>
      <section className="container py-5 mt-3">
        <div className="containerSect mb-2">
          <div className="p-3">
            <h2>Nuestros Valores</h2>
            <hr />
            <Row className="w-100 mt-3">
              <Col sm={12} md={4} lg={4}>
                <div className="cardInfoUno w-100 p-2">
                  <div className="icono">
                    <FontAwesomeIcon icon={faHandshake} className="icon" />
                  </div>
                  <h3>Compromiso</h3>
                  <p className="m-3">
                    Con las nuevas ideas, pero manteniendo los mismos ideales.
                    Estamos profundamente comprometidos con la innovación y el
                    crecimiento permanente.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <div className="cardInfoDos w-100 p-2">
                  <div className="icono">
                    <FontAwesomeIcon icon={faShuffle} className="iconDos" />
                  </div>
                  <h3>Flexibilidad</h3>
                  <p className="m-3">
                    Nos adaptamos a las diversas circunstancias que se nos
                    presentan dando respuestas ágiles, porque tomamos los
                    cambios como nuevos desafíos por alcanzar.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <div className="cardInfoTres w-100 p-2">
                  <div className="icono">
                    <FontAwesomeIcon icon={faRoute} className="iconTres" />
                  </div>
                  <h3>Cercanía</h3>
                  <p className="m-3">
                    Constante para llegar más lejos siempre con nuestros
                    clientes y proovedores, con el objetivo de ir mejorando
                    continuamente y ser siempre los primeros.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
