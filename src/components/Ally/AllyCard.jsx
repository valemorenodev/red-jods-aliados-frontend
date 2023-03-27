import React from 'react'
import Card from 'react-bootstrap/Card';
import style from './AllyCard.module.css'
// import logo from '../../assets/images/logo.png'
import testimg from '../../assets/images/2030-agenda-sustainable-development-2.png'
import { TbBrandTwitter } from 'react-icons/tb'
import { TbBrandInstagram } from 'react-icons/tb'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { TbBrandLinkedin } from 'react-icons/tb'


function AllyCard(props) {

    const { data } = props;

    // if (!data){
    //     return null;
    // }

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
                <h1>{data.organization ? data.organization : 'Nombre no disponible'}</h1>
                <h6>ODS del aliado</h6>
                <h6>EJE</h6>
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
                            <div>
                                <h6 className={style.info}>Número: {data.number ? data.number : 'No disponible.'}</h6>
                                <h6 className={style.info}>Correo Electronico: {data.email ? data.email : 'No disponible.'}</h6>
                                <h6 className={style.info}>Dirección: {data.address ? data.address : 'No disponible.'}</h6>
                            </div>
                        </Card.Text>

                        <Card.Title>Redes Sociales</Card.Title>
                        <div id={style.iconos}>
                            <Card.Link href={data.twitter}>
                                <TbBrandTwitter size={40} />
                            </Card.Link>
                            <Card.Link href={data.ig}>
                                <TbBrandInstagram size={40} />
                            </Card.Link>
                            <Card.Link href={data.fb}>
                                <RiFacebookCircleLine size={41} />
                            </Card.Link>
                            <Card.Link href={data.linkedin}>
                                <TbBrandLinkedin size={40} />
                            </Card.Link>
                        </div>
                    </Card.Body>
                </div>

            </Card >
        </div>
    );
}

export default AllyCard;