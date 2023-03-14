import React from 'react';
import { useForm } from "react-hook-form";
import './FormInputs.modules.css'

const FormInputs = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data)
  return (
    <div id='FormInputs'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div><h4>Nuevo aliado </h4> <p>(*) Campos obligatorios</p></div>
        <label htmlFor="PartnerName">Nombre del Aliado*</label>
        <input name='PartnerName' {...register("PartnerName", { required: true, pattern: /^[A-Za-z]+$/i })} />
        {/* {errors.PartnerName && <span>El nombre del aliado es obligatorio</span>} */}
        <label htmlFor="PartnerImg">Imagen /Logo del Aliado*</label>
        <input name='PartnerImg' type="file" {...register("PartnerImg", { required: true, pattern: /^[A-Za-z]+$/i })} />
        <label htmlFor="PartnerODS">ODS</label>
        <input type="PartnerODS" {...register("PartnerODS", { required: true, pattern: /^[A-Za-z]+$/i })} />
        <h4>Contacto </h4>
        <label htmlFor="PhoneNumber">Nùmero*</label>
        <input name='PhoneNumber' type="number" {...register("PhoneNumber", { min: 7, max: 10 })} />
        <label htmlFor="PartnerEmail">Email*</label>
        <input name='PartnerEmail' type="text" {...register("PartnerEmail", { required: true, pattern: /^[A-Za-z]+$/i })} />
        <label htmlFor="PartnerDir">Dirección*</label>
        <input name='PartnerDir' type="text" {...register("Partner", { required: true, pattern: /^[A-Za-z]+$/i })} />
        <label htmlFor="PartnerTwitter">Twitter (Link)</label>
        <input name="PartnerTwitter" {...register("PartnerODS", { pattern: /^[A-Za-z]+$/i })} />
        <label htmlFor="PartnerFacebook">Facebook (Link)</label>
        <input name="PartnerFacebook" {...register("PartnerFacebook", { pattern: /^[A-Za-z]+$/i })} />
        <label htmlFor="">Descripciòn* </label>
        <input name="PartnerFacebook" {...register("PartnerFacebook", { required: true, pattern: /^[A-Za-z]+$/i })} />
        <label htmlFor="">Objetivo de Alianza*</label>
        <input name="PartnerFacebook" {...register("PartnerFacebook", { pattern: /^[A-Za-z]+$/i })} />
        <label htmlFor="">Fecha de inicio*</label>
        <input type="date"{...register("PartnerFacebook", { required: true })} />
        <label htmlFor="">Fecha finalizacion</label>
        <input type="date"{...register("PartnerFacebook")} />
      </form>
    </div>
  );
}

export default FormInputs;
