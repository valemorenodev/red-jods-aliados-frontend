import React from 'react'
import Card from 'react-bootstrap/Card';
import style from './AllyCard.module.css'
import logo from '../../assets/images/logo.png'
import { TbBrandTwitter } from 'react-icons/tb'
import { TbBrandInstagram } from 'react-icons/tb'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { TbBrandLinkedin } from 'react-icons/tb'


function AllyCard() {
    return (
        <div className="todo">
            <div id={style.encabezado}>
                <h1>Nombre del Aliado</h1>
                <h6>COS del aliado</h6>
                <button id={style.boton}>Editar</button>
            </div>


            <Card id={style.spacecontenedor} style={{ width: '40rem' }}>
                <div id={style.section1}>
                    <Card.Img variant="top" src={logo} />
                </div>

                <div id={style.section2}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>

                    <Card.Body id={style.iconos}>
                        <Card.Link href="#">
                            <TbBrandTwitter />
                        </Card.Link>
                        <Card.Link href="#">
                            <TbBrandInstagram />
                        </Card.Link>
                        <Card.Link href="#">
                            <RiFacebookCircleLine />
                        </Card.Link>
                        <Card.Link href="#">
                            <TbBrandLinkedin />
                        </Card.Link>
                    </Card.Body>
                </div>

            </Card >
        </div>
    );
}

export default AllyCard;