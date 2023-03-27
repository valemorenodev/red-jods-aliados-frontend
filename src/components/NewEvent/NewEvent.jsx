import React from 'react';
import { useForm } from "react-hook-form";
import { Container, Row, Col } from 'react-bootstrap';
import style from '../NewEvent/NewEvent.module.css'
import apis from '../../apis/index'
import Swal from 'sweetalert2';

const NewEvent = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const token = localStorage.getItem('token');
        try {
            const res = await apis.post('/activityhroutes', data, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            confirmation(res.data);
        } catch (error) {
            console.error(error, 'hola');
        }
    }

    function confirmation() {
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'La información se ha enviado correctamente.',
            confirmButtonText: 'Aceptar',
            background: '#193660',
            color: '#ffffff'
        });
}

    return (
        <Container className={style.containerForm}>
            <Col className={style.formEvent}>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Col className={style.formTitle}>
                        <Row className={style.formTitleH}>Nueva Actividad </Row>
                        <Row className={style.formTitleP}>(*) Campos obligatorios</Row>
                    </Col>


                    <label id='title-form'>Fecha del Evento<span className={style.FormRequired}>*</span></label>
                    <input
                        id='input-form'
                        className={style.FormInput}
                        type="date"
                        {...register("date", {
                            required: true
                        })} />
                    {errors.date?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}

                    <label id='title-form' >Tipo de Actividad<span className={style.FormRequired}>*</span></label>
                    <input
                        placeholder='Diligencia tu respuesta'
                        className={style.FormInput}
                        type="text"
                        {...register('type_activity', {
                            required: true,
                        })} />
                    {errors.title?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}

                    <label id='title-form' >Nombre de la Actividad<span className={style.FormRequired}>*</span></label>
                    <input
                        placeholder='Diligencia tu respuesta'
                        className={style.FormInput}
                        type="text"
                        {...register('name', {
                            required: true,
                        })} />
                    {errors.title?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}

                    <label id='title-form'>Organizador<span className={style.FormRequired}>*</span></label>
                    <input
                        placeholder='Diligencia tu respuesta'
                        className={style.FormInput}
                        type="text"
                        {...register('organizer', {
                            required: true,
                        })} />
                    {errors.title?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}

                    <label id='title-form'>Descripción<span className={style.FormRequired}>*</span></label>
                    <textarea
                        id='input-form-des'
                        placeholder='Diligencia tu respuesta'
                        className={style.FormInput}
                        type="textarea"
                        {...register('description', {
                            required: true,
                        })} />
                    {errors.objetive?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}

                    <input className={style.formButton} type="submit" value="Crear" />
                </form>

            </Col>
        </Container>
    );
}

export default NewEvent;