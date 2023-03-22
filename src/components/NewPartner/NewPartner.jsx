import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { IoEyeSharp } from "react-icons/io5";
import { IoAttach } from "react-icons/io5";
import { FaTrash } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import style from './NewPartner.module.css'

const NewEvent = () => {

    const [fileList, setFileList] = useState([]);

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onTouched',
        defaultValues: {
            url: 'https://'
        }
    });

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("file", data.file[0]);
    };

    const handleFileInputChange = (event) => {
        const newFileList = [...fileList];
        for (let i = 0; i < event.target.files.length; i++) {
            const file = event.target.files[i];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                newFileList.push({
                    name: file.name,
                    url: reader.result
                });
                setFileList(newFileList);
            };
        }
    };

    return (
        <Container className={style.ContainerForm}>
            <Col className={style.FormPartner}>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row className={style.FormTitle}>
                        <Row className={style.FormTitleH}>Nuevo Aliado </Row>
                        <Row className={style.FormTitleP}>(*) Campos obligatorios</Row>
                    </Row>

                    <label htmlFor="PartnerName">Nombre del Aliado<span className={style.FormRequired}>*</span></label>
                    <input className={style.FormInput} name='PartnerName' {...register("PartnerName", { required: true, pattern: /^[A-Za-z]+$/i })} />
                    {/* {errors.PartnerName && <span>El nombre del aliado es obligatorio</span>} */}

                    <label >Imagen/Logo del Aliado<span className={style.FormRequired}>*</span></label>
                    <Row className={style.FormImg}>
                        <label className={style.FormButtonImg} htmlFor="PartnerImg">Cargar</label>
                        <input className={style.FormInputImg} name="PartnerImg" type="file" {...register("PartnerImg", { required: true, pattern: /^[A-Za-z]+$/i })} />
                    </Row>


                    <label htmlFor="PartnerODS">ODS<span className={style.FormRequired}>*</span></label>
                    <select className={style.FormInput} name='PartnerODS' type="PartnerODS" {...register('ods', { required: true })}>
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

                    <label htmlFor="PartnerODS">EJE<span className={style.FormRequired}>*</span></label>
                    <select className={style.FormInput} name='PartnerODS' type="PartnerODS" {...register('ods', { required: true })}>
                        <option placeholder='Selecciona una de las opciones' />
                        <option value="Personas">Personas</option>
                        <option value="Prosperidad">Hambre Cero</option>
                        <option value="Planeta">Salud y Bienestar</option>
                        <option value="Paz">Educación de Calidad</option>
                        <option value="Alianzas">Igualdad de Género</option>
                    </select>

                    <Row className={style.FormTitle}>
                        <Row className={style.FormSubtitle}>Contato</Row>
                    </Row>

                    <label htmlFor="PartnerPhone">Número<span className={style.FormRequired}>*</span></label>
                    <input className={style.FormInput} name='PartnerPhone' type="number" {...register("PhoneNumber", { min: 7, max: 10 })} />

                    <label htmlFor="PartnerEmail">Email<span className={style.FormRequired}>*</span></label>
                    <input className={style.FormInput} name='PartnerEmail' type="text" {...register("PartnerEmail", { required: true, pattern: /^[A-Za-z]+$/i })} />

                    <label htmlFor="PartnerAddress">Dirección</label>
                    <input className={style.FormInput} name='PartnerAddress' type="text" {...register("Partner", { required: true, pattern: /^[A-Za-z]+$/i })} />

                    <label htmlFor="PartnerTwitter">Twitter (Link)</label>
                    <input className={style.FormInput} name="PartnerTwitter" {...register("PartnerODS", { pattern: /^[A-Za-z]+$/i })} />

                    <label htmlFor="PartnerFacebook">Facebook (Link)</label>
                    <input className={style.FormInput} name="PartnerFacebook" {...register("PartnerFacebook", { pattern: /^[A-Za-z]+$/i })} />

                    <label htmlFor="PartnerInstagram">Instagram (Link)</label>
                    <input className={style.FormInput} name="PartnerInstagram" {...register("PartnerInstagram", { pattern: /^[A-Za-z]+$/i })} />

                    <label htmlFor="PartnerLinkedIn">LinkedIn (Link)</label>
                    <input className={style.FormInput} name="PartnerLinkedIn" {...register("PartnerLinkedIn", { pattern: /^[A-Za-z]+$/i })} />

                    <label htmlFor="PartnerDescription">Descripción<span className={style.FormRequired}>*</span></label>
                    <input className={style.FormInput} name="PartnerDescription" {...register("PartnerDescription", { required: true, pattern: /^[A-Za-z]+$/i })} />

                    <label htmlFor="PartnerObjetive">Objetivo de Alianza<span className={style.FormRequired}>*</span></label>
                    <input className={style.FormInput} name="PartnerObjetive" {...register("PartnerObjetive", { required: true, pattern: /^[A-Za-z]+$/i })} />

                    <label htmlFor="PartnerDateStart">Fecha de inicio<span className={style.FormRequired}>*</span></label>
                    <input className={style.FormInput} name="PartnerDateStart" type="date"{...register("BeginDate", { required: true })} />

                    <label htmlFor="PartnerDateEnd">Fecha finalizacion<span className={style.FormRequired}>*</span></label>
                    <input className={style.FormInput} name='PartnerDateEnd' type="date"{...register("FinishDate", { required: true })} />

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

                    <Row className={style.rowHr}>
                        <Col><hr /></Col>y/o<Col><hr /></Col>
                    </Row>

                    <Row className={style.FormFile}>
                        <label className={style.FormButtonFile} htmlFor="PartnerFile">Cargar Documento</label>
                        <input className={style.FormInputFile} name="PartnerFile" type="file" {...register("file")} onChange={handleFileInputChange} multiple />
                    </Row>

                    <Row >
                        {fileList.length > 0 && (
                            <table className={style.FileTable}>
                                <thead>
                                </thead>
                                <tbody>
                                    {fileList.map((file, index) => (
                                        <tr key={index}>
                                            <td><IoAttach className={style.FileIcon} /></td>
                                            <td>{file.name}</td>
                                            <td className={style.OptionIcon}>
                                                {file.url && (
                                                    <a href={file.url} target="_blank" rel="noopener noreferrer"><IoEyeSharp className={style.FileRead} /></a>
                                                )}
                                                <span onClick={() => {
                                                    const newFileList = [...fileList];
                                                    newFileList.splice(index, 1);
                                                    setFileList(newFileList);
                                                }}><FaTrash className={style.FileDelete} /></span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </Row>

                    <input className={style.FormButton} type="submit" value="Crear" />
                </form>

            </Col>
        </Container>
    );
}

export default NewEvent;