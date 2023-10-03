import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import './css/navegador.css'

export default function Navegacion() {
  const setActiveClass = ({ isActive }) => (isActive ? "activo" : "inactivo");

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
      <Container>
        <Navbar.Brand to="/inicio">
          <NavLink to="/" className={setActiveClass}>
            <img src="img/logo-navbar.jpg" alt="" className="logoNav" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavLink to="/inicio" className={setActiveClass}>
              <p className="deco me-5">INICIO</p>
            </NavLink>
            <NavLink to="/acerca" className={setActiveClass}>
              <p className="deco me-5">QUIENES SOMOS</p>
            </NavLink>
            <NavLink to="/tours" className={setActiveClass}>
              <p className="deco me-5">TOURS</p>
            </NavLink>
            <NavLink to="/contacto" className={setActiveClass}>
              <p className="deco">CONTACTO</p>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
