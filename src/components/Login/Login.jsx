import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import style from './Login.module.css'

const Login = (props) => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = (data) => {
    const { email, password } = data;

    const regexEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (email === '' || password === '') {
      alert("Los campos no pueden estar vacíos");
      return;
    }

    if (email !== '' && !regexEmail.test(email)) {
      alert("Debes escribir una dirección de correo electrónico válida");
      return;
    }

    if (email !== 'email@mail.com' || password !== 'password') {
      alert("Credenciales inválidas");
      return;
    } else {
      props.addToken(true);
      Navigate('/cripto');
    }
  };

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
            <form onSubmit={handleSubmit(submitHandler)}>
              <label htmlFor="email">Nombre de usuario</label>
              <input name="email" defaultValue="" placeholder='example@email.com' {...register("email")} />
              <label htmlFor="password">Contraseña</label>
              <input name='password' type='password' defaultValue="" placeholder={'**********'} {...register("password", { required: true })} />
              {errors.password && <span>Inserte la contraseña</span>}
              <input type="submit" className={style.sendButton} id='sendButton' />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default Login;