import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../img/logoMedIntWhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";

function CollapsibleExample() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      variant="light"
      className="glassBlue navBg"
      fixed="top"
    >
      <Container>
        <Navbar.Brand as={Link} onClick={() => setExpanded(false)} to="/">
          <img src={Logo} alt="Logo Medicina Integral" width="345px" height="auto" className="logoImg my-3"/>
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink onClick={() => setExpanded(false)} to="/" className="nav-item nav-link navBg boton">
                <FontAwesomeIcon icon={faHouse}/>
            </NavLink>
            <NavLink onClick={() => setExpanded(false)} to="/nosotros" className="nav-item nav-link navBg hovMenu boton">NOSOTROS</NavLink>
            <NavLink onClick={() => setExpanded(false)} to="/servicios" className="nav-item nav-link navBg boton">SERVICIOS</NavLink>
            <NavLink onClick={() => setExpanded(false)} to="/distribucion" className="nav-item nav-link navBg boton">DISTRIBUCION</NavLink>
            <NavLink onClick={() => setExpanded(false)} to="/contacto" className="nav-item nav-link navBg boton">CONTACTO</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
