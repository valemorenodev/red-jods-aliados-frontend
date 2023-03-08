import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/images/logo.png'
import { useForm } from "react-hook-form";
import './Login.css'

const Login = (props) => {

  const submitHandler = e => {
    e.preventDefault()

    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;



    if (email === '' || password === '') {
      alert("Los campos  no pueden estar vacíos")
      return;
    }

    if (email !== '' && !regexEmail.test(email)) {
      alert("Debes escribir una dirección de correo electrónico válida")
      return;
    }

    if (email !== 'email@mail.com' || password !== 'password') {
      alert("Credenciales inválidas")
      return;
    } else {
      props.addToken(true)
      navigate('/cripto')
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example"));
  }
  return (
    <>
      <Container id='container-login' className='d-flex justify-content-around align-items-center'>
        <Row className='d-flex justify-content-center align-items-center'>
          <Col className='d-flex flex-column' >
            <img className='logo' src={logo} alt="" />
          </Col>
        </Row>
        <Row className='d-flex justify-content-center align-items-center'>
          <Col>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Nombre de usuario</label>
              <input name="email" value="email" placeholder='example@email.com' {...register("example")} />
              <label htmlFor="password">Constraseña</label>
              <input name='password' value="password" type={'password'} placeholder={'**********'} {...register("exampleRequired", { required: true })} />
              {errors.exampleRequired && <span>This field is required</span>}
              <input type="submit" id='sendButton' />
            </form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login