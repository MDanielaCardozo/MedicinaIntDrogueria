import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Carousel, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faFlaskVial,
  faHandshake,
  faPeopleGroup,
  faRoute,
  faShuffle,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <section className="container my-3">
        <div className="iconosHome">
          <Row className="py-4">
            <Col sm={12} md={3} lg={3}>
              <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <h3 id="tituloDrog">DROGUERIA LIDER</h3>
              </div>
            </Col>
            <Col sm={12} md={3} lg={2}>
              <div className="cardInfo w-100 p-2">
                <Link to={"/nosotros"}>
                  <div className="icono">
                    <FontAwesomeIcon icon={faPeopleGroup} className="icon" />
                  </div>
                </Link>
                <h6 className="text-white">NOSOTROS</h6>
              </div>
            </Col>
            <Col sm={12} md={3} lg={2}>
              <div className="cardInfo w-100 p-2">
                <Link to={"/servicios"}>
                  <div className="icono">
                    <FontAwesomeIcon icon={faFlaskVial} className="icon" />
                  </div>
                </Link>
                <h6 className="text-white">SERVICIOS</h6>
              </div>
            </Col>
            <Col sm={12} md={3} lg={2}>
              <div className="cardInfo w-100 p-2">
                <Link to={"/distribucion"}>
                  <div className="icono">
                    <FontAwesomeIcon icon={faTruckFast} className="icon" />
                  </div>
                </Link>
                <h6 className="text-white">DISTRIBUCIÓN</h6>
              </div>
            </Col>
            <Col sm={12} md={3} lg={2}>
              <div className="cardInfo w-100 p-2">
                <Link to={"contacto"}>
                  <div className="icono">
                    <FontAwesomeIcon
                      icon={faEnvelopeOpenText}
                      className="icon"
                    />
                  </div>
                </Link>
                <h6 className="text-white">CONTACTO</h6>
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
                    <FontAwesomeIcon icon={faHandshake} className="iconUno" />
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
      <article>
        <div className="container py-5">
          <Row>
            <Col sm={12} md={6} lg={6} className="text-center">
              <div className="cardMision mb-3">
                <div className="cardContent">
                  <h3 className="cardTitle">MISIÓN</h3>
                  <p className="card-body mt-4">
                    COMO ORGANIZACIÓN NOS INTERESA GENERAR UN AMBIENTE CALIDO
                    PARA LA OPERACIÓN DE LOS PROCESOS QUE SE CARACTERICE POR LA
                    COMUNICACIÓN , LA CONFIANZA, LA HONESTIDAD, LA
                    RESPONSABILIDAD PERSONAL Y EL RESPETO, CONVENCIDOS QUE
                    CUALQUIER COMPORTAMIENTO QUE SE DERIVE DE ESTOS VALORES
                    CONTRIBUIRA AL CLIMA IDEAL PARA EL CRECIMIENTO PERSONAL DE
                    CADA INTEGRANTE DE LA EMPRESA.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6} className="text-center">
              <div className="cardMision mb-3">
                <div className="cardContent">
                  <h3 className="cardTitle">VISIÓN</h3>
                  <p className="card-body mt-4">
                    INTENTAMOS GENERAR UN AMBIENTE DE RESPETO MUTUO, DE DIALOGO
                    CORDIAL, INCENTIVANDO EL COMPROMISO , LA PARTICIPACION Y
                    CREANDO UN ESPACIO DE REALIZACION PERSONAL PARA QUIENES LA
                    CONFORMAN. PROCURAMOS HACER DE NUESTRA ACTIVIDAD UN NEGOCIO
                    RENTABLE QUE NOS PERMITA SEGUIR CRECIENDO PORQUE CREEMOS QUE
                    DE ESTA MANERA CONTRIBUIMOS AL DESARROLLO DEL SISTEMA DE
                    SALUD.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </article>
      <aside className="container">
        <a href="https://api.whatsapp.com/send?phone=5493812033691" target="_blank" rel="noopener noreferrer" className="iconWhats">
          <div >
          <FontAwesomeIcon icon={faWhatsapp} className=""/>
          </div>
        </a>
      </aside>
    </main>
  );
};

export default Home;
