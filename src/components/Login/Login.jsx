import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import logo from '../../assets/images/logo.png'
import './Login.css'

function Login() {
  return (
    <>
      <Container id='container-login' className='d-flex justify-content-center align-items-center'>
        <Form className='d-flex flex-column'>
          <img className='logo' src={logo} alt="" />
        </Form>
      </Container>
    </>
  )
}

export default Login