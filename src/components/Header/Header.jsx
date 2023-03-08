import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import imgbarra from '../../assets/barra de colores.png'
import iconocerrar from '../../assets/iconocerrar.png'
import './Header.css'

function Header() {
  return (
    <Navbar bg="light" expand="md">
      <Container id='todo'>

        <div className="section1">
          <Navbar.Brand as={Link} to={'/'}>
            <img id='logo' src="/src/assets/LOGO RED JODS.png" alt="" />
          </Navbar.Brand>
          <p>Bienvenido Administrador</p>
        </div>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav id='section2'>
            <div className="text">
              <Nav.Link as={Link} to={'/'}>Inicio
              </Nav.Link>
            </div>
            <div className="text">
              <Nav.Link as={Link} to={'/Usuario'}>Usuario
              </Nav.Link>
            </div>
            <div className='text'>
              <Nav.Link as={Link} to={'/Cerrar'}>Cerrar Sesion
              </Nav.Link>
            </div>
            <div className='imgcerrar'>
              <img src={iconocerrar} alt="" />
            </div>

          </Nav>
        </Navbar.Collapse>
      </Container>
      <div id="imgbarra">
        <img src={imgbarra} alt="" />
      </div>
    </Navbar>
  );
}

export default Header;