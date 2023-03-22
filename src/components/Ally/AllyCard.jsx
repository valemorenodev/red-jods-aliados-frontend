import React from 'react'
import Card from 'react-bootstrap/Card';
import style from './AllyCard.module.css'
// import logo from '../../assets/images/logo.png'
import testimg from '../../assets/images/2030-agenda-sustainable-development-2.png'
import { TbBrandTwitter } from 'react-icons/tb'
import { TbBrandInstagram } from 'react-icons/tb'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { TbBrandLinkedin } from 'react-icons/tb'


function AllyCard() {
    const cards = [
        {
            "id": 1,
            "number": "345 234 59 48",
            "email": "email1@gmail.com",
            "direction": "idk",
            "twitter": "twitter",
            "instagram": "instagram",
            "facebook": "facebook",
            "linkedin": "linkedin"
        }
    ]


    return (
        <div className={style.main}>
            <div id={style.encabezado}>
                <h1>Nombre del Aliado</h1>
                <h6>ODS del aliado</h6>
                <button id={style.btn}>Editar</button>
            </div>


            <Card id={style.spacecontenedor} style={{ width: '40rem' }}>
                <div id={style.section1}>
                    <Card.Img src={testimg} className={style.img} />
                </div>

                <div id={style.section2}>
                    <Card.Body>
                        <Card.Title>Contacto</Card.Title>
                        <Card.Text>
                            <p className={style.info}>Número: 300 000 00 00</p>
                            <p className={style.info}>Correo Electronico: email.email.com</p>
                            <p className={style.info}>Dirección Carrera 3 #3-33</p>
                        </Card.Text>

                        <Card.Title>Redes Sociales</Card.Title>
                        <div id={style.iconos}>
                            <Card.Link href="#">
                                <TbBrandTwitter size={40}/>
                            </Card.Link>
                            <Card.Link href="#">
                                <TbBrandInstagram size={40}/>
                            </Card.Link>
                            <Card.Link href="#">
                                <RiFacebookCircleLine size={41}/>
                            </Card.Link>
                            <Card.Link href="#">
                                <TbBrandLinkedin size={40}/>
                            </Card.Link>
                        </div>
                    </Card.Body>
                </div>

            </Card >
        </div>
    );
}

export default AllyCard;