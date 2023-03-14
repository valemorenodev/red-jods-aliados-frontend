import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Container, Row, Col } from 'react-bootstrap';
import { IoEyeSharp } from "react-icons/io5";
import { IoAttach } from "react-icons/io5";
import { FaTrash } from 'react-icons/fa';
import style from "./FormFiles.module.css"

const FormFiles = () => {

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
    <>
      <Container className={style.main}>
        <form onSubmit={handleSubmit(onSubmit)}>

          <Row>
            <label htmlFor="input-url">Agregar via url</label>
            <input name='input-url'
              type="url"{...register("url",
                {
                  pattern: {
                    value: /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/,
                    message: 'Ingrese una URL valida'
                  }
                })}
            />
          </Row>

          <Row className={style.rowHr}>
            <Col><hr /></Col>y/o<Col><hr /></Col>
          </Row>

          <Row className={style.rowFile}>
            <input className={style.fileInput} name="file" type="file" {...register("file")} onChange={handleFileInputChange} multiple />
            <div className={style.fileInputButton}>Seleccionar archivo</div>
          </Row>

          <Row >
            {fileList.length > 0 && (
              <table className={style.fileTable}>
                <thead>
                </thead>
                <tbody>
                  {fileList.map((file, index) => (
                    <tr key={index}>
                      <td><IoAttach className={style.fileIcon} /></td>
                      <td>{file.name}</td>
                      <td className={style.optionIcon}>
                        {file.url && (
                          <a href={file.url} target="_blank" rel="noopener noreferrer"><IoEyeSharp className={style.fileRead} /></a>
                        )}
                        <span onClick={() => {
                          const newFileList = [...fileList];
                          newFileList.splice(index, 1);
                          setFileList(newFileList);
                        }}><FaTrash className={style.fileDelete} /></span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

          </Row>

          <Row>
            <input className={style.button} type="submit" value="Crear" />
          </Row>

        </form>
      </Container>
    </>
  );
}

export default FormFiles;