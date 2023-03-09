import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import { TbLogout } from "react-icons/tb";
import imgbarra from '../../assets/barra_colores.png'
import './Header.css'

function Header() {
  return (
    <Navbar className='navbar-s' bg="light" expand="md">

      <Container id='todo'>

        <div className="section1">
          <Navbar.Brand as={Link} to={'/'}>
            <img className='logo' src="/src/assets/logo.png" alt="" />
          </Navbar.Brand>
          <p className='message-s'>Bienvenido Administrador</p>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse className='section2' id="basic-navbar-nav">
          <Nav className='navbar-items-s'>
            <div className="text">
              <Nav.Link as={Link} to={'/'}>Inicio
              </Nav.Link>
            </div>
            <div className="text">
              <Nav.Link as={Link} to={'/Usuario'}>Usuario
              </Nav.Link>
            </div>
            <div className='text'>
              <Nav.Link as={Link} to={'/Cerrar'}> <span className='icon-s'><TbLogout /></span><label className='label-s'>Cerrar Sesión</label>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>

      </Container>

      <div id="imgbarra">
        <img className='hr-s' src={imgbarra} alt="" />
      </div>

    </Navbar>
  );
}

export default Header;