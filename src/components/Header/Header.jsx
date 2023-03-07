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
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img id= 'logo'src="/src/assets/LOGO RED JODS.png" alt="" />
          <p>Bienvenido Administrador</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">


            <Nav.Link as={Link} to={'/'}>Inicio
            </Nav.Link>
            <Nav.Link as={Link} to={'/Usuario'}>Usuario
            </Nav.Link>
            <div className="sesion">


              <div className='text'>
              <Nav.Link as={Link} to={'/Cerrar'}>Cerrar Sesion 
              </Nav.Link>
              </div>
                
                <div className='imgcerrar'>
                <img  src={iconocerrar} alt="" />
                </div>
               
              
             
            </div>

          </Nav>
        </Navbar.Collapse>
      </Container>
      <img className='imgbarra'src={imgbarra} alt="" />
    </Navbar>
  );
}

export default Header;