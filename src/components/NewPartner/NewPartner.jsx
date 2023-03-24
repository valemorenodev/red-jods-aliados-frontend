import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
//import { IoEyeSharp } from "react-icons/io5";
//import { IoAttach } from "react-icons/io5";
//import { FaTrash } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import style from './NewPartner.module.css'
import apis from '../../apis/index'

function NewPartner() {

    //const [data, setData] = useState([]);

    // const [fileList, setFileList] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onTouched',
        defaultValues: {
            url: 'https://'
        }
    });

    const onSubmit = async (data) => {
        const token = localStorage.getItem('token');
        try {
            const res = await apis.post('/nameroute', data, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            console.log(res.data);
        } catch (error) {
            console.error(error, 'hola');
        }
    }



// const handleFileInputChange = (event) => {
//     const newFileList = [...fileList];
//     for (let i = 0; i < event.target.files.length; i++) {
//         const file = event.target.files[i];
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onloadend = () => {
//             newFileList.push({
//                 name: file.name,
//                 url: reader.result
//             });
//             setFileList(newFileList);
//         };
//     }
// };

return (
    <Container className={style.ContainerForm}>
        <Col className={style.FormPartner}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Row className={style.FormTitle}>
                    <Row className={style.FormTitleH}>Nuevo Aliado </Row>
                    <Row className={style.FormTitleP}>(*) Campos obligatorios</Row>
                </Row>

                <label id='title-form' >Organización<span className={style.FormRequired}>*</span></label>
                <input
                    placeholder='Diligencia tu respuesta'
                    className={style.FormInput}
                    type="text"
                    {...register('organization', {
                        required: true,
                    })} />
                {errors.title?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}

                {/* <label id='title-form'>Imagen /Logo del Aliado<span className={style.FormRequired}>*</span></label>
                <input
                    id='input-form'
                    className={style.FormInput}
                    type="file"
                    {...register("img", {
                        pattern: /^[A-Za-z]+$/i,
                    })} />
                {errors.img?.type === 'required' && <p id='error-msg'>El campo es requerido</p>} */}

                <label id='title-form'>ODS<span className={style.FormRequired}>*</span></label>
                <select
                    id='input-form'
                    className={style.FormInput}
                    {...register('ODS', {
                        required: true
                    })}>
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
                    })}>
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
                    {...register("addres", {
                        pattern: /^[A-Za-z]+$/i
                    })} />

                <label id='title-form'>Twitter <span className={style.FormTitleP}>URL del sitio</span></label>
                <input
                    className={style.FormInput}
                    type="text"
                    {...register("twitter", {
                        pattern: /^[A-Za-z]+$/i
                    })} />

                <label id='title-form'>Facebook <span className={style.FormTitleP}>URL del sitio</span></label>
                <input
                    className={style.FormInput}
                    type="text"
                    {...register("fb", {
                        pattern: /^[A-Za-z]+$/i
                    })} />


                <label id='title-form'>Instagram <span className={style.FormTitleP}>URL del sitio</span></label>
                <input
                    className={style.FormInput}
                    type="text"
                    {...register("ig", {
                        pattern: /^[A-Za-z]+$/i
                    })} />


                <label id='title-form'>Linkedin <span className={style.FormTitleP}>URL del sitio</span></label>
                <input
                    className={style.FormInput}
                    type="text"
                    {...register("linkedin", {
                        pattern: /^[A-Za-z]+$/i
                    })} />



                <label id='title-form'>Descripción<span className={style.FormRequired}>*</span></label>
                <textarea
                    id='input-form-des'
                    placeholder='Diligencia tu respuesta'
                    className={style.FormInput}
                    type="text"
                    {...register('description', {
                        required: true,
                    })} />
                {errors.description?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}

                <label id='title-form'>Objetivos de Alianza<span className={style.FormRequired}>*</span></label>
                <textarea
                    id='input-form-des'
                    placeholder='Diligencia tu respuesta'
                    className={style.FormInput}
                    type="textarea"
                    {...register('objetives', {
                        required: true,
                    })} />
                {errors.objetive?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}

                <label id='title-form'>Fecha de inicio<span className={style.FormRequired}>*</span></label>
                <input
                    id='input-form'
                    className={style.FormInput}
                    type="date"
                    {...register("date_start", {
                        required: true
                    })} />
                {errors.date?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}

                <label id='title-form'>Fecha de Finalización<span className={style.FormRequired}>*</span></label>
                <input
                    id='input-form'
                    className={style.FormInput}
                    type="date"
                    {...register("date_end", {
                        required: true
                    })} />
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

                <Row className={style.rowHr}>
                    <Col><hr /></Col>y/o<Col><hr /></Col>
                </Row>

                {/* <Row className={style.FormFile}>
                    <label className={style.FormButtonFile} htmlFor="PartnerFile">Cargar Documento</label>
                    <input className={style.FormInputFile} name="PartnerFile" type="file" {...register("file")} onChange={handleFileInputChange} multiple />
                </Row> */}

                {/* <Row className={style.FormFile}>
                    {fileList.length > 0 && (
                        <table className={style.FileTable}>
                            <thead>
                            </thead>
                            <tbody>
                                {fileList.map((file, index) => (
                                    <tr key={index}>
                                        <td className={style.FileIcon}><IoAttach size="50" /></td>
                                        <td className={style.filename}>{file.name}</td>
                                        <td className={style.OptionIcon}>
                                            {file.url && (
                                                <a href={file.url} target="_blank" rel="noopener noreferrer"><IoEyeSharp className={style.FileRead} size="40" /></a>
                                            )}
                                            <span onClick={() => {
                                                const newFileList = [...fileList];
                                                newFileList.splice(index, 1);
                                                setFileList(newFileList);
                                            }}><FaTrash className={style.FileDelete} size="30" /></span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </Row> */}

                <input className={style.FormButton} type="submit" value="Crear" />
            </form>
        </Col>
    </Container>
)
}

export default NewPartner;