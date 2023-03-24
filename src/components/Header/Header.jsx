import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import { TbLogout } from "react-icons/tb";
import ColorBar from "../ColorBar/ColorBar"
import style from './Header.module.css'
import logo from '../../assets/images/logo.png'

function Header() {
  return (
    <Navbar className="navbar-s" expand="md" id={style.header}>

      <Container id={style.main}>

        <div className={style.section1}>
          <Navbar.Brand as={Link} to={'/'} className={style.navbrand}>
            <img className={style.logo} src={logo} alt="LOGO" />
          </Navbar.Brand>
          <div className={style.message}>Bienvenido Administrador</div>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" id={style.menu} />

        <Navbar.Collapse className={style.section2} id="basic-navbar-nav">
          <Nav className='navbar-items-s'>
            <div className="text">
              <Nav.Link as={Link} to={'/'}>Aliados</Nav.Link>
            </div>
            <div className={style.text}>
              <Nav.Link as={Link} to={'/Eventos'}>Eventos</Nav.Link>
            </div>
            <div className={style.text}>
              <Nav.Link as={Link} to={'/Usuarios'}>Usuarios</Nav.Link>
            </div>
            <div className='text'>
              <Nav.Link as={Link} to={'/Cerrar'}> <span className='icon-s'><TbLogout /></span><label className='label-s'>Cerrar Sesión</label>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className={style.colorbar}>
        <ColorBar />
      </div>
    </Navbar>
  );
}

export default Header;