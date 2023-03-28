import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Container, Row, Col } from 'react-bootstrap';
import style from './EditAlly.module.css'
import apis from '../../apis/index'
import Swal from 'sweetalert2';
import { Modal } from 'react-bootstrap';

function EditAlly({ isOpen, onClose}) {

    if (!isOpen) return null;

    
    const { id } = useParams();
    const [data, setData] = useState([]);

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        mode: 'onTouched',
    });

    useEffect(() =>{
        if (data && data.data) {
            setValue('organization', data.data.organization);
            setValue('ODS', data.data.ODS);
            setValue('eje', data.data.eje);
            setValue('responsible', data.data.responsible);
            setValue('phone', data.data.phone);
            setValue('email', data.data.email);
            setValue('address', data.data.address);
            setValue('twitter', data.data.twitter);
            setValue('fb', data.data.fb);
            setValue('ig', data.data.ig);
            setValue('linkedin', data.data.linkedin);
            setValue('description', data.data.description);
            setValue('objectives', data.data.objectives);
            setValue('date_start', data.data.date_start);
            setValue('date_end', data.data.date_end);
            setValue('url', data.data.url);
        }
    }, [data]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const fetchAlly = async () => {
            try {
                const response = await apis.get(`/nameroute/${id}`, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                setData(response.data);
                console.log(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAlly();
    }, [id]);

    const onSubmit = async (data) => {
        const token = localStorage.getItem('token');
        try {
          await apis.put(`/nameroute/${id}`, data, {
            headers: {
              'Authorization': 'Bearer ' + token
            }
          });
          confirmation();
        } catch (error) {
          console.error(error);
        }
      };

    function confirmation() {
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'La información se ha actualizado correctamente.',
            confirmButtonText: 'Aceptar',
            background: '#193660',
            color: '#ffffff'
        });
    }

    

    return (
        <Modal show={isOpen} onHide={onClose}>
            <Container className={style.ContainerForm}>
                <Col className={style.FormPartner}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Row className={style.FormTitle}>
                            <Row className={style.FormTitleH}>Editar Aliado </Row>
                            <Row className={style.FormTitleP}>(*) Campos obligatorios</Row>
                        </Row>

                        <label id='title-form' >Organización<span className={style.FormRequired}>*</span></label>
                        <input
                            placeholder='Diligencia tu respuesta'
                            className={style.FormInput}
                            type="text"
                            {...register('organization', {
                                required: true,
                            })}
                            />
                        {errors.title?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}

                        <label id='title-form'>ODS<span className={style.FormRequired}>*</span></label>
                        <select
                            id='input-form'
                            className={style.FormInput}
                            {...register('ODS', {
                                required: true
                            })}
                            >
                            <option placeholder='Selecciona una de las opciones' />
                            <option value="Pobreza">Fin de la Pobreza</option>
                            <option value="Hambre">Hambre Cero</option>
                            <option value="Salud">Salud y Bienestar</option>
                            <option value="Educación">Educación de Calidad</option>
                            <option value="Igualdad">Igualdad de Género</option>
                            <option value="Agua">Agua Limpia y Saneamiento</option>
                            <option value="Energia">Energía Asequible y no Contaminante</option>
                            <option value="Trabajo">Trabajo Decenter y Crecimiento Económico</option>
                            <option value="Industria">Industria, Innovación e Infreestructura</option>
                            <option value="Desigualdades">Reducción de las desigualdades</option>
                            <option value="Comunidades">Ciudades y Comunidades Sostenibles</option>
                            <option value="Produccion">Producción y Consumo Responsables</option>
                            <option value="Clima">Acción por el Clima</option>
                            <option value="Submarina">Vida Submarina</option>
                            <option value="Ecosistemas">Vida de Ecosistemas Terrestres</option>
                            <option value="Paz">Paz, Justicia e Instituciones Sólidas</option>
                            <option value="Alianzas">Alianzas para Lograr los Objetivos</option>
                        </select>
                        {errors.ods?.type === 'required' && <p id='error-msg'>El campo es reqequerido</p>}

                        <label id='title-form'>EJE<span className={style.FormRequired}>*</span></label>
                        <select
                            id='input-form'
                            className={style.FormInput}
                            {...register('eje', {
                                required: true,
                            })} 
                            >
                            <option placeholder='Selecciona una de las opciones' />
                            <option value="Personas">Personas</option>
                            <option value="Prosperidad">Prosperidad</option>
                            <option value="Planeta">Planeta</option>
                            <option value="Paz">Paz</option>
                            <option value="Alianzas">Alianzas</option>
                        </select>
                        {errors.eje?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}

                        <label id='title-form' >Responsable<span className={style.FormRequired}>*</span></label>
                        <input
                            placeholder='Diligencia tu respuesta'
                            className={style.FormInput}
                            type="text"
                            {...register('responsible', {
                                required: true,
                            })} />
                        {errors.title?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}

                        <Row className={style.FormTitle}>
                            <Row className={style.FormSubtitle}>Contato</Row>
                        </Row>

                        <label id='title-form'>Número Telefónico<span className={style.FormRequired}>*</span></label>
                        <input className={style.FormInput}
                            id="phone"
                            type="tel"
                            pattern="[0-9]{10}"
                            {...register("phone", {
                                required: true,
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Ingresa un número telefónico válido",
                                },
                            })}
                        />
                        <label id='title-form'>Correo Electronico<span className={style.FormRequired}>*</span></label>
                        <input className={style.FormInput}
                            type="email"
                            id="email"
                            {...register("email", {
                                required: true,
                                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
                            })}
                        />
                        {errors.email && <p>Ingresa un correo electrónico válido</p>}

                        <label id='title-form'>Dirección</label>
                        <input
                            className={style.FormInput}
                            type="text"
                            {...register("address")}
                             />

                        <label id='title-form'>Twitter <span className={style.FormTitleP}>URL del sitio</span></label>
                        <input
                            className={style.FormInput}
                            type="text"
                            {...register("twitter")}
                             />

                        <label id='title-form'>Facebook <span className={style.FormTitleP}>URL del sitio</span></label>
                        <input
                            className={style.FormInput}
                            type="text"
                            {...register("fb")}
                            />


                        <label id='title-form'>Instagram <span className={style.FormTitleP}>URL del sitio</span></label>
                        <input
                            className={style.FormInput}
                            type="text"
                            {...register("ig")}
                            />


                        <label id='title-form'>Linkedin <span className={style.FormTitleP}>URL del sitio</span></label>
                        <input
                            className={style.FormInput}
                            type="text"
                            {...register("linkedin")}
                            />



                        <label id='title-form'>Descripción<span className={style.FormRequired}>*</span></label>
                        <textarea
                            id='input-form-des'
                            placeholder='Diligencia tu respuesta'
                            className={style.FormInput}
                            type="text"
                            {...register('description', {
                                required: true,
                            })}
                             />
                        {errors.description?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}

                        <label id='title-form'>Objetivos de Alianza<span className={style.FormRequired}>*</span></label>
                        <textarea
                            id='input-form-des'
                            placeholder='Diligencia tu respuesta'
                            className={style.FormInput}
                            type="textarea"
                            {...register('objectives', {
                                required: true,
                            })}
                             />
                        {errors.objetive?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}

                        <label id='title-form'>Fecha de inicio<span className={style.FormRequired}>*</span></label>
                        <input
                            id='input-form'
                            className={style.FormInput}
                            type="date"
                            {...register("date_start", {
                                required: true
                            })}
                           />
                        {errors.date?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}

                        <label id='title-form'>Fecha de Finalización</label>
                        <input
                            id='input-form'
                            className={style.FormInput}
                            type="date"
                            {...register("date_end")}
                            />
                        {errors.date?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}

                        <Row className={style.FormTitle}>
                            <Row className={style.FormTitleH}>Archivos Adjuntos</Row>
                        </Row>

                        <label htmlFor="PartnerUrl">Agregar via url</label>
                        <input className={style.FormInput} name='PartnerUrl'
                            type="url"{...register("url",
                                {
                                    pattern: {
                                        value: /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/,
                                        message: 'Ingrese una URL valida'
                                    }
                                })}
                            />

                        <input className={style.FormButton} type="submit" value="Actualizar" />
                        <button className={style.CloseButton} onClick={onClose}>Cerrar</button>
                    </form>
                </Col>
            </Container>
        </Modal>

    )
}

export default EditAlly;