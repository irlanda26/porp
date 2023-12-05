import React from "react";
import '../css/navbar.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarmenu() {
  return (
    <div className="divdivisor">
      <Navbar className="navbardiv">
        <Container className="navbardiv">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/Inicio' className="btn-navbar">Inicio</Nav.Link>
            <Nav.Link as={Link} to='/Proyectos' className="btn-navbar">Proyectos</Nav.Link>
            <Nav.Link as={Link} to='/Contacto' className="btn-navbar">Contacto</Nav.Link>
            <Nav.Link as={Link} to='/Habilidades' className="btn-navbar">Habilidades</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarmenu;