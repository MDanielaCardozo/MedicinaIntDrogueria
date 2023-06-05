import React from "react";
import "./Home.css";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <main>
      <section>
        <Carousel>
          <Carousel.Item className="carouselUno">
            <Carousel.Caption>
              <h3 className="textCarousel">MEDICINA INTEGRAL</h3>
              <p className="textCarousel">Vanguardia en tecnología aplicada a la logística.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carouselDos">
          <Carousel.Caption>
              <h3 className="textCarousel">MEDICINA INTEGRAL</h3>
              <p className="textCarousel">Más y mejores soluciones a nuestros clientes y proveedores.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carouselTres">
          <Carousel.Caption>
              <h3 className="textCarousel">MEDICINA INTEGRAL</h3>
              <p className="textCarousel">Somos la distribuidora con respaldo y aval de seguridad para nuestros proveedores y clientes</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="container py-5">
        <div className="valores">
            <h2>Nuestros Valores</h2>
            <hr />
        </div>
      </section>
    </main>
  );
};

export default Home;
