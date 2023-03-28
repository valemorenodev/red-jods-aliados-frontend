import React, { useState, useCallback }from 'react'
import Card from 'react-bootstrap/Card';
import style from './AllyCard.module.css'
// import { Link } from 'react-router-dom'
// import logo from '../../assets/images/logo.png'
import testimg from '../../assets/images/2030-agenda-sustainable-development-2.png'
import { TbBrandTwitter } from 'react-icons/tb'
import { TbBrandInstagram } from 'react-icons/tb'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { TbBrandLinkedin } from 'react-icons/tb'
import EditAlly from '../EditAlly/EditAlly';


function AllyCard(props) {
    const [showModal, setShowModal] = useState(false);


    const handleModalOpen = () => {
        setShowModal(true);
      };
    
      const handleModalClose = () => {
        setShowModal(false);
        reloadPage()
      };

      const reloadPage = useCallback(() => {
        window.location.reload();
      }, []);

    const { data } = props;

    function formatPhoneNumber(phoneNumberString) {
        const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);
        if (match) {
            return '(' + match[1] + ') ' + '' + match[2] + ' ' + match[3] + ' ' + match[4];
        }
        return phoneNumberString;
    }

    return (
        <div className={style.main}>
            <div id={style.encabezado}>
                <h1>{data.data.organization ? data.data.organization : 'Nombre no disponible'}</h1>
                <h6>{data.data.ODS ? data.data.ODS : 'ODS no disponible'}</h6>
                <h6>{data.data.eje ? data.data.eje : 'ODS no disponible'}</h6>
                    <button id={style.btn} onClick={handleModalOpen}>Editar</button>
                    <EditAlly isOpen={showModal} onClose={handleModalClose} reloadPage={reloadPage} />
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
                                <h6 className={style.info}>Número: {data.data.phone ? formatPhoneNumber(data.data.phone) : 'No disponible.'}</h6>
                                <h6 className={style.info}>Correo Electronico: {data.data.email ? data.data.email : 'No disponible.'}</h6>
                                <h6 className={style.info}>Dirección: {data.data.address ? data.data.address : 'No disponible.'}</h6>
                            </div>
                        </Card.Text>

                        <Card.Title>Redes Sociales</Card.Title>
                        <div id={style.iconos}>
                            {(data.data.twitter || data.data.ig || data.data.fb || data.data.linkedin) ? (
                                <>
                                    {data.data.twitter &&
                                        <Card.Link href={data.data.twitter}>
                                            <TbBrandTwitter size={40} />
                                        </Card.Link>
                                    }
                                    {data.data.ig &&
                                        <Card.Link href={data.data.ig}>
                                            <TbBrandInstagram size={40} />
                                        </Card.Link>
                                    }
                                    {data.data.fb &&
                                        <Card.Link href={data.data.fb}>
                                            <RiFacebookCircleLine size={41} />
                                        </Card.Link>
                                    }
                                    {data.data.linkedin &&
                                        <Card.Link href={data.data.linkedin}>
                                            <TbBrandLinkedin size={40} />
                                        </Card.Link>
                                    }
                                </>
                            ) : (
                                <h6 className={style.info}>El aliado no posee redes sociales.</h6>
                            )}

                        </div>
                    </Card.Body>
                </div>

            </Card >
        </div>
    );
}

export default AllyCard;