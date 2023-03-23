import React, { useState } from 'react';
import { useForm } from "react-hook-form";
// import { IoEyeSharp } from "react-icons/io5";
// import { IoAttach } from "react-icons/io5";
// import { FaTrash } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import style from './NewPartner.module.css'
// import axios from 'axios';

function NewPartner() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Container className={style.ContainerForm}>
            <Col className={style.FormPartner}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <div id='inputs'>
                                <label id='title-form' htmlFor="">Título del Proyecto</label>
                                <input placeholder='Diligencia tu respuesta' id='input-form' type="text" {...register('title', {
                                    required: true,
                                })} />
                                {errors.title?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}
                            </div>

                            <div id='inputs'>
                                <label id='title-form' htmlFor="">Responsable</label>
                                <input id='input-form' placeholder='Diligencia tu respuesta' type="text" {...register('userName', {
                                    required: true,
                                })} />
                                {errors.userName?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}
                            </div>

                            <div id='inputs'>
                                <label id='title-form' htmlFor="">Ejes</label>
                                <select id='input-form' {...register('axis', { required: true, })}>
                                    <option placeholder='Selecciona una de las opciones' />
                                    <option value="Personas">Personas</option>
                                    <option value="Prosperidad">Prosperidad</option>
                                    <option value="Planeta">Planeta</option>
                                    <option value="Paz">Paz</option>
                                    <option value="Alianzas">Alianzas</option>
                                </select>
                                {errors.axis?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}
                            </div>

                            <div id='inputs'>
                                <label id='title-form' htmlFor="">ODS</label>
                                <select id='input-form' {...register('ods', { required: true })}>
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
                            </div>

                        </Grid>
                        <Grid item xs={12} md={6}>

                            <div id='inputs'>
                                <label id='title-form' htmlFor="">Descripción</label>

                                <textarea id='input-form-des' placeholder='Diligencia tu respuesta' type="text" {...register('description', { required: true, })} />
                                {errors.description?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}
                            </div>

                            <div id='inputs'>
                                <label id='title-form' htmlFor="">Indicadores</label>
                                <textarea id='input-form-des' placeholder='Diligencia tu respuesta' type="textarea" {...register('indicator', { required: true, })} />
                                {errors.indicator?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}

                            </div>

                            <div id='inputs'>
                                <label id='title-form' htmlFor="">Objetivos</label>
                                <textarea id='input-form-des' placeholder='Diligencia tu respuesta' type="text" {...register('objective', { required: true })} />
                                {errors.objective?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}
                            </div>
                        </Grid>
                    </Grid>
                    <input type="submit" value="Enviar" />
                </form>
         </Col>
     </Container>
            )
}

            export default NewPartner;

// const [fileList, setFileList] = useState([]);
// const { register, handleSubmit, watch, formState: { errors } } = useForm({
//     mode: 'onTouched',
//     defaultValues: {
//         url: 'https://'
//     }
// });


// // const addAlly = async (item) => {
// //     const { data } = await allies.post("/nameroute", item);
// //     setData((oldlist) => [...oldlist, data]);
// // }

// const onSubmit = async (data) => {
//     const formData = new FormData();
//     formData.append("file", data.file[0]);
//     formData.append("organization", data.organization);
//     formData.append("ODS", data.ODS);
//     formData.append("eje", data.eje);
//     formData.append("phone", data.phone);
//     formData.append("email", data.email);
//     console.log(formData);
//     try {
//       const res = await axios.post('/api/nameroute', formData);
//       console.log(formData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

// // const onSubmit = (data) => {
// //     console.log(data);
// //   }


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

//return (

//)
//     <Container className={style.ContainerForm}>
//         <Col className={style.FormPartner}>

//             <form onSubmit={onSubmit}>
//                 <Row className={style.FormTitle}>
//                     <Row className={style.FormTitleH}>Nuevo Aliado </Row>
//                     <Row className={style.FormTitleP}>(*) Campos obligatorios</Row>
//                 </Row>

//                 <label htmlFor="PartnerName">Nombre del Aliado<span className={style.FormRequired}>*</span></label>
//                 <input className={style.FormInput} name='PartnerName' {...register("organization", { required: true, pattern: /^[A-Za-z]+$/i })} value={watch("PartnerName")}/>
//                 {/* {errors.PartnerName && <span>El nombre del aliado es obligatorio</span>} */}

//                 <label >Imagen/Logo del Aliado<span className={style.FormRequired}>*</span></label>
//                 <Row className={style.FormImg}>
//                     <label className={style.FormButtonImg} htmlFor="PartnerImg">Cargar</label>
//                     <input className={style.FormInputImg} name="PartnerImg" type="file" {...register("PartnerImg", { pattern: /^[A-Za-z]+$/i })} />
//                 </Row>


//                 <label htmlFor="PartnerODS">ODS<span className={style.FormRequired}>*</span></label>
//                 <select className={style.FormInput} name='PartnerODS' type="PartnerODS" {...register('ODS', { required: true })}>
//                     <option placeholder='Selecciona una de las opciones' />
//                     <option value="Pobreza">Fin de la Pobreza</option>
//                     <option value="Hambre">Hambre Cero</option>
//                     <option value="Salud">Salud y Bienestar</option>
//                     <option value="Educación">Educación de Calidad</option>
//                     <option value="Igualdad">Igualdad de Género</option>
//                     <option value="Agua">Agua Limpia y Saneamiento</option>
//                     <option value="Energia">Energía Asequible y no Contaminante</option>
//                     <option value="Trabajo">Trabajo Decenter y Crecimiento Económico</option>
//                     <option value="Industria">Industria, Innovación e Infreestructura</option>
//                     <option value="Desigualdades">Reducción de las desigualdades</option>
//                     <option value="Comunidades">Ciudades y Comunidades Sostenibles</option>
//                     <option value="Produccion">Producción y Consumo Responsables</option>
//                     <option value="Clima">Acción por el Clima</option>
//                     <option value="Submarina">Vida Submarina</option>
//                     <option value="Ecosistemas">Vida de Ecosistemas Terrestres</option>
//                     <option value="Paz">Paz, Justicia e Instituciones Sólidas</option>
//                     <option value="Alianzas">Alianzas para Lograr los Objetivos</option>
//                 </select>

//                 <label htmlFor="PartnerODS">EJE<span className={style.FormRequired}>*</span></label>
//                 <select className={style.FormInput} name='PartnerODS' type="PartnerODS" {...register('eje', { required: true })}>
//                     <option placeholder='Selecciona una de las opciones' />
//                     <option value="Personas">Personas</option>
//                     <option value="Prosperidad">Hambre Cero</option>
//                     <option value="Planeta">Salud y Bienestar</option>
//                     <option value="Paz">Educación de Calidad</option>
//                     <option value="Alianzas">Igualdad de Género</option>
//                 </select>

//                 <Row className={style.FormTitle}>
//                     <Row className={style.FormSubtitle}>Contato</Row>
//                 </Row>

//                 <label htmlFor="PartnerPhone">Número<span className={style.FormRequired}>*</span></label>
//                 <input className={style.FormInput} name='PartnerPhone' type="number" {...register("phone", { min: 7, max: 10 })} />

//                 <label htmlFor="PartnerEmail">Email<span className={style.FormRequired}>*</span></label>
//                 <input className={style.FormInput} name='PartnerEmail' type="text" {...register("email", { required: true, pattern: /^[A-Za-z]+$/i })} />

//                 <label htmlFor="PartnerAddress">Dirección</label>
//                 <input className={style.FormInput} name='PartnerAddress' type="text" {...register("Partner", { pattern: /^[A-Za-z]+$/i })} />

//                 <label htmlFor="PartnerTwitter">Twitter (Link)</label>
//                 <input className={style.FormInput} name="PartnerTwitter" {...register("PartnerODS", { pattern: /^[A-Za-z]+$/i })} />

//                 <label htmlFor="PartnerFacebook">Facebook (Link)</label>
//                 <input className={style.FormInput} name="PartnerFacebook" {...register("PartnerFacebook", { pattern: /^[A-Za-z]+$/i })} />

//                 <label htmlFor="PartnerInstagram">Instagram (Link)</label>
//                 <input className={style.FormInput} name="PartnerInstagram" {...register("PartnerInstagram", { pattern: /^[A-Za-z]+$/i })} />

//                 <label htmlFor="PartnerLinkedIn">LinkedIn (Link)</label>
//                 <input className={style.FormInput} name="PartnerLinkedIn" {...register("PartnerLinkedIn", { pattern: /^[A-Za-z]+$/i })} />

//                 <label htmlFor="PartnerDescription">Descripción<span className={style.FormRequired}>*</span></label>
//                 <input className={style.FormInput} name="PartnerDescription" {...register("PartnerDescription", { required: true, pattern: /^[A-Za-z]+$/i })} />

//                 <label htmlFor="PartnerObjetive">Objetivo de Alianza<span className={style.FormRequired}>*</span></label>
//                 <input className={style.FormInput} name="PartnerObjetive" {...register("PartnerObjetive", { required: true, pattern: /^[A-Za-z]+$/i })} />

//                 <label htmlFor="PartnerDateStart">Fecha de inicio<span className={style.FormRequired}>*</span></label>
//                 <input className={style.FormInput} name="PartnerDateStart" type="date"{...register("BeginDate", { required: true })} />

//                 <label htmlFor="PartnerDateEnd">Fecha finalizacion<span className={style.FormRequired}>*</span></label>
//                 <input className={style.FormInput} name='PartnerDateEnd' type="date"{...register("FinishDate", { required: true })} />

                // <Row className={style.FormTitle}>
                //     <Row className={style.FormTitleH}>Archivos Adjuntos</Row>
                // </Row>

                // <label htmlFor="PartnerUrl">Agregar via url</label>
                // <input className={style.FormInput} name='PartnerUrl'
                //     type="url"{...register("url",
                //         {
                //             pattern: {
                //                 value: /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/,
                //                 message: 'Ingrese una URL valida'
                //             }
                //         })}
                // />

                // <Row className={style.rowHr}>
                //     <Col><hr /></Col>y/o<Col><hr /></Col>
                // </Row>

                // <Row className={style.FormFile}>
                //     <label className={style.FormButtonFile} htmlFor="PartnerFile">Cargar Documento</label>
                //     <input className={style.FormInputFile} name="PartnerFile" type="file" {...register("file")} onChange={handleFileInputChange} multiple />
                // </Row>

                // <Row >
                //     {fileList.length > 0 && (
                //         <table className={style.FileTable}>
                //             <thead>
                //             </thead>
                //             <tbody>
                //                 {fileList.map((file, index) => (
                //                     <tr key={index}>
                //                         <td><IoAttach className={style.FileIcon} /></td>
                //                         <td>{file.name}</td>
                //                         <td className={style.OptionIcon}>
                //                             {file.url && (
                //                                 <a href={file.url} target="_blank" rel="noopener noreferrer"><IoEyeSharp className={style.FileRead} /></a>
                //                             )}
                //                             <span onClick={() => {
                //                                 const newFileList = [...fileList];
                //                                 newFileList.splice(index, 1);
                //                                 setFileList(newFileList);
                //                             }}><FaTrash className={style.FileDelete} /></span>
                //                         </td>
                //                     </tr>
                //                 ))}
                //             </tbody>
                //         </table>
                //     )}
                // </Row>

//                 <input className={style.FormButton} type="submit" value="Crear"/>
//             </form>

//         </Col>
//     </Container>
// )