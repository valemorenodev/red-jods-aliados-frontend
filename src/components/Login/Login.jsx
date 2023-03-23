import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import logo from '../../assets/images/logo.png';
import wheel from '../../assets/images/Recurso4@4x.png'
import style from './Login.module.css'
import Swal from 'sweetalert2';
import axiosInstance from '../../apis/index';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  

  const submitHandler = async (data) => {
    const { email, pass } = data;

    const regexEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (email === '' || pass === '') {
      Swal.fire({
        icon: 'warning',
        text: 'Los campos no pueden estar vacios.',
        background: '#193660',
        color: '#ffffff',
      });
    }

    if (email !== '' && !regexEmail.test(email)) {
      Swal.fire({
        icon: 'warning',
        title: '¡Espera!',
        text: 'Debes escribir una dirección de correo electrónico válida.',
        background: '#193660',
        color: '#ffffff',
      });
    }

    if (email === 'email@mail.com' || pass === 'pass') {
      Swal.fire({
        icon: 'error',
        title: 'Usuario Invalido.',
        background: '#193660',
        color: '#ffffff',
      });
    }
    // else {
    //   props.addToken(true);
    //   Navigate('/cripto');
    // }

    try {
      const response = await axiosInstance.post('/auth/login', { email, pass });
      navigate('/nameroute');
      console.log('ingreso')
    } catch (error) {
      showErrorAlert(error);
    }
  };

  function showErrorAlert(error) {
    Swal.fire({
      icon: 'error',
      title: 'Error al iniciar sesión',
      background: '#193660',
      color: '#ffffff',
    });
  }

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //     const fetchData = async () => {
  //         try {
  //             const response = await apis.get('/nameroute', {
  //                 headers: {
  //                     'Authorization': 'Bearer ' + token
  //                 }
  //             });
  //             setData(response.data);
  //        } catch (error) {
  //             console.error(error);
  //         }
  //     };

  //     fetchData();
  // }, []);

  return (
    <>
      <div className={style.main}>
        <Container className={style.containerlogin}>
          <Row className='d-flex justify-content-center align-items-center'>
            <Col className='d-flex flex-column' >
              <img className={style.logo} src={logo} alt="" />
            </Col>
          </Row>
          <Row className='d-flex justify-content-center align-items-center'>
            <Col>
              <form className={style.forms} onSubmit={handleSubmit(submitHandler)}>
                <label className={style.labels} htmlFor="email">Nombre de usuario</label>
                <input className={style.inputs} name="email" defaultValue="" id={style.inputlog} placeholder='example@email.com' {...register("email")} />
                <label className={style.labels} htmlFor="pass">Contraseña</label>
                <label htmlFor="recover" id={style.recover}>Recuperar contraseña</label>
                <input className={style.inputs} name='pass' type='password' defaultValue="" id={style.inputlog} placeholder={'**********'} {...register("pass", { required: true })} />
                {errors.pass && <span>Inserte la contraseña</span>}
                <input type="submit" value="Ingresar" className={style.sendButton} />
              </form>
            </Col>
          </Row>
        </Container>
        <img src={wheel} alt="wheel" className={style.wheel} />
      </div>
    </>
  )
}

export default Login;