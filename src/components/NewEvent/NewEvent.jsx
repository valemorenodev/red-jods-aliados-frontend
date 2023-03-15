import React from 'react';
import { useForm } from "react-hook-form";
import { Container, Row, Col } from 'react-bootstrap';
import style from './NewEvent.module.css'

const NewEvent = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data)

    return (
        <Container className={style.containerForm}>
            <Col className={style.formEvent}>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Col className={style.formTitle}>
                        <Row className={style.formTitleH}>Nueva Actividad </Row>
                        <Row className={style.formTitleP}>(*) Campos obligatorios</Row>
                    </Col>

                    <label htmlFor="EventDate">Fecha del Evento<span className={style.formRequired}>*</span></label>
                    <input className={style.formInput} name="EventDate" type="date"{...register("EventDate", { required: true })} />

                    <label htmlFor="EventType">Tipo de la Actividad<span className={style.formRequired}>*</span></label>
                    <input className={style.formInput} name='EventType' type="text" {...register("EventType", { required: true, pattern: /^[A-Za-z]+$/i })} />

                    <label htmlFor="EventName">Nombre de la Actividad<span className={style.formRequired}>*</span></label>
                    <input className={style.formInput} name='EventName' type="text" {...register("EventName", { required: true, pattern: /^[A-Za-z]+$/i })} />

                    <label htmlFor="EventPartner">Organizador<span className={style.formRequired}>*</span></label>
                    <input className={style.formInput} name='EventPartner' type="text" {...register("EventPartner", { required: true, pattern: /^[A-Za-z]+$/i })} />

                    <input className={style.formButton} type="submit" value="Crear" />
                </form>

            </Col>
        </Container>
    );
}

export default NewEvent;