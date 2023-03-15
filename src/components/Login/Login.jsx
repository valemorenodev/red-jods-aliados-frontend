import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import logo from '../../assets/images/logo.png';
import wheel from '../../assets/images/Recurso 4@4x.png'
import style from './Login.module.css'
import Swal from 'sweetalert2';
import axiosInstance from '../../apis/index';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    const { email, pass } = data;

    const regexEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (email === '' || pass === '') {
      alert("Los campos no pueden estar vacíos");
      return;
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
      alert("Credenciales inválidas");
      return;
    } 
    // else {
    //   props.addToken(true);
    //   Navigate('/cripto');
    // }

    try {
      const response = await axiosInstance.post('/auth/login', { email, pass });
      navigate('/AlliesList'); 
    } catch (error) {
      alert(error);
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
            <form className={style.forms} onSubmit={handleSubmit(submitHandler)}>
                <label className={style.labels} htmlFor="email">Nombre de usuario</label>
                <input className={style.inputs} name="email" defaultValue="" id={style.inputlog} placeholder='example@email.com' {...register("email")}/>
                <label className={style.labels} htmlFor="pass">Contraseña</label>
              <label htmlFor="recover" id={style.recover}>Recuperar contraseña</label>
                <input className={style.inputs} name='pass' type='password' defaultValue="" id={style.inputlog} placeholder={'**********'} {...register("pass", { required: true })} />
                {errors.pass && <span>Inserte la contraseña</span>}
                <input type="submit" value="Ingresar" className={style.sendButton} />
              </form>
            </Col>
          </Row>
        </Container>
      <img src={wheel} alt="wheel" className={style.wheel}/>
      </div>
    </>
  )
}

export default Login;