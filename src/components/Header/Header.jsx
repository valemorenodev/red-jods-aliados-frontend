import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import { TbLogout } from "react-icons/tb";
import separador from '../../assets/images/separador.png'
import style from './Header.module.css'

function Header() {
  return (
    <>
      <Navbar className={style.navbars} bg="light" expand="md">
        <Container>

          <div className={style.section1}>
            <Navbar.Brand as={Link} to={'/'}>
              <img className={style.logo} src="/src/assets/images/logo.png" alt="" />
            </Navbar.Brand>
            <p className={style.messages}>Bienvenido Administrador</p>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse className={style.section2}>
            <Nav className={style.navbaritems}>
              <div className={style.text}>
                <Nav.Link as={Link} to={'/'}>Inicio
                </Nav.Link>
              </div>
              <div className={style.text}>
                <Nav.Link as={Link} to={'/Usuario'}>Usuario
                </Nav.Link>
              </div>
              <div className={style.text}>
                <Nav.Link as={Link} to={'/Cerrar'}> <span className={style.icons}><TbLogout /></span><label className={style.labels}>Cerrar Sesión</label>
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>

      <div>
        <img className={style.hrs} src={separador} alt="" />
      </div>

    </>
  );
}

export default Header;