import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/images/logo.png'
import { useForm } from "react-hook-form";
import './Login.css'

function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("example"));
  return (
    <>
      <Container id='container-login' className='d-flex justify-content-center align-items-center'>
        <Row className='d-flex justify-content-center align-items-center'>
          <Col className='d-flex flex-column' >
            <img className='logo' src={logo} alt="" />
          </Col>
        </Row>
        <Row className='d-flex justify-content-center align-items-center'>
          <Col>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input defaultValue="test" {...register("example")} />
              <input {...register("exampleRequired", { required: true })} />
              {errors.exampleRequired && <span>This field is required</span>}
              <input type="submit" />
            </form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login