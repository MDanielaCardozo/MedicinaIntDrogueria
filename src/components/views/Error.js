import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Error.css";

const Error = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <section className="page404">
      <div className="container">
        <Row>
          <Col sm={12} md={4} lg={4} className="d-flex justify-content-center align-items-center ">
            <div className="text-center pageError404">
              <h1>OOOPS!</h1>
              <p>PAGINA NO ENCONTRADA</p>
              <Link to={"/"} className="btn bg-secondary text-white btnIconos iconoBg">
                <p className="h6 mt-1 fs-5">VOLVER</p>
              </Link>
            </div>
          </Col>
          <Col sm={12} md={8} lg={8} className="p-2 img-fluid">
            <div className="pageError text-center"></div>
          </Col>
          <Col sm={12} md={4} lg={4} className="d-flex justify-content-center align-items-center ">
            <div className="text-center pageErrorBottom">
              <h1>OOOPS!</h1>
              <p>PAGINA NO ENCONTRADA</p>
              <Link to={"/"} className="btn bg-secondary text-white btnIconos iconoBg mb-5">
                <p className="h6 mt-1 fs-5">VOLVER</p>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Error;
