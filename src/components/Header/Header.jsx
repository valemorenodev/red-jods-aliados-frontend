import jwt_decode from 'jwt-decode';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import { TbLogout } from "react-icons/tb";
import ColorBar from "../ColorBar/ColorBar"
import style from './Header.module.css'
import logo from '../../assets/images/logo.png'
import apis from '../../apis/index'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  }

  useEffect(() => {
    const showErrorAlert = (errorMessage) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: errorMessage,
        confirmButtonColor: '#ff6565',
      });
    };

    const token = localStorage.getItem('token');
    if (token === null) {
      showErrorAlert('Debe iniciar sesion para acceder a esta pagina');
      navigate('/');
    } else {
      const tokendecode = jwt_decode(token);
      const user = tokendecode._id;

      const fetchData = async () => {
        try {
          const response = await apis.get(`/userroute/${user}`, {
            headers: {
              'Authorization': 'Bearer ' + token,
            },
          });
          setData(response.data.data);
        } catch (error) {
          showErrorAlert(error.message);
        }
      };

      fetchData();
    }
  }, []);

  return (
    <Navbar className="navbar-s" expand="md" id={style.header}>
      <Container id={style.main}>

        <div className={style.section1}>
          <Navbar.Brand as={Link} to={'/nameroute'} className={style.navbrand}>
            <img className={style.logo} src={logo} alt="LOGO" />
          </Navbar.Brand>
          <div className={style.message}>Bienvenido {data.role} {data.name}</div>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" id={style.menu} />

        <Navbar.Collapse className={style.section2} id="basic-navbar-nav">
          <Nav className='navbar-items-s'>
            <div className="text">
              <Nav.Link as={Link} to={'/nameroute'}>Aliados
              </Nav.Link>
            </div>
            <div className={style.text}>
              <Nav.Link as={Link} to={'/Usuarios'}>Usuarios</Nav.Link>
            </div>
            <div className="text" onClick={handleLogout}>
              <Nav.Link as={Link}>
                <span className='icon-s'><TbLogout />Cerrar Sesión</span>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className={style.colorbar}>
        <ColorBar />
      </div>
    </Navbar >
  );
}

export default Header;