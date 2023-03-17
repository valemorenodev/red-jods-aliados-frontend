import React from 'react'
import Card from 'react-bootstrap/Card';
import './Patner.css'
import logo from '../assets/images/logo.png'
import l from '../assets/images/iconolinke.png'
import f from '../assets/images/iconoface.png'
import i from '../assets/images/iconoinsta.png'
import t from '../assets/images/iconotwitter.png'

function PatnerTodo() {


    return (
        <div className="todo">
            <div id='encabezado'>
                <h1>Nombre del Aliado</h1>
                <h6>COS del aliado</h6>
                <button id='boton'>Editar</button>
            </div>


            <Card id='spacecontenedor' style={{ width: '40rem' }}>
                <div id='section1'>
                    <Card.Img variant="top" src={logo} />
                </div>

                <div id='section2'>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>

                    <Card.Body id='iconos'>
                        <Card.Link href="#">
                            <img id='iconosimg' src={t} alt="" />
                        </Card.Link>
                        <Card.Link href="#">
                            <img id='iconosimg' src={i} alt="" />
                        </Card.Link>
                        <Card.Link href="#">
                            <img id='iconosimg' src={f} alt="" />
                        </Card.Link>
                        <Card.Link href="#">
                            <img id='iconosimg' src={l} alt="" />
                        </Card.Link>
                    </Card.Body>
                </div>

            </Card >
        </div>
    );
}

export default PatnerTodo;

