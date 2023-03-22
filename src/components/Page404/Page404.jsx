import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import wheel from '../../assets/images/Recurso4@4x.png'
import style from '../Page404/Page404.module.css'

const Page404 = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <div className={style.main}>
                        <img src={wheel} alt='LOGO' className={style.wheel} />
                        <div className={style.message}>
                            <h1>404</h1>
                            <p>La página que estás buscando no existe.</p>
                            <Button className={style.backbtn} as={Link} to="/">
                                Volver al inicio
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Page404;