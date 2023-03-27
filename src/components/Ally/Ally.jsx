import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apis from '../../apis/index';
// import React from 'react';
import style from './Ally.module.css'
import Bar from '../ColorBar/ColorBar'
import Barv2 from '../ColorBar v2/ColorBar'
import { IoDocumentTextOutline } from 'react-icons/io5'
import EventTable from '../EventTable/EventTable'
import AllyCard from './AllyCard'

function Ally() {
    const { id } = useParams();
    const [data, setData] = useState(null);

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
                // console.log(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAlly();
    }, [id]);

    if (!data) {
        return <div>Loading...</div>;
    }


    return (
        <>
            <div className={style.container}>
                <div className={style.info}>
                    <AllyCard data={data} />
                    <section className={style.Section1}>
                        <div className={style.title}>
                            <h6>Indicadores</h6>
                            <Barv2 />
                        </div>

                        <section className={style.sectioncontainer}>
                            <section className={style.sections}>
                                <div className={style.section}>
                                    <span className={style.subtitle}>
                                        Responsable
                                    </span>
                                    <div className={style.colorbar}>
                                        <Bar />
                                    </div>

                                    <p className={style.text}>
                                        {data.data.responsible ? data.data.responsible : 'El nombre del responsable no esta disponible.'}
                                    </p>
                                </div>
                                <div className={style.section}>
                                    <span className={style.subtitle}>
                                        Descripción
                                    </span>
                                    <div className={style.colorbar}>
                                        <Bar />
                                    </div>

                                    <p className={style.text}>
                                        {data.data.description ? data.data.description : 'La información no esta disponible.'}
                                    </p>
                                </div>
                                <div className={style.section}>
                                    <span className={style.subtitle}>
                                        Objetivos de la alianza
                                    </span>
                                    <div className={style.colorbar}>
                                        <Bar />
                                    </div>
                                    <p className={style.text}>
                                    {data.data.objectives ? data.data.objectives : 'El objetivo no esta disponible.'}
                                    </p>
                                </div>
                            </section>

                            <div className={style.indicators}>
                                <div> <h4 className={style.subtitle}>Fecha de inicio</h4><p className={style.date}>{data.data.date_start ? data.data.date_start : 'Fecha no disponible.'}</p></div>
                                <div> <h4 className={style.subtitle}>Fecha de Finalización</h4><p className={style.date}>{data.data.date_end ? data.data.date_end : 'Activo'}</p></div>
                                <div> <h4 className={style.subtitle}>Fecha de Modificación</h4><p className={style.date}>{data.data.updatedAt ? data.data.updatedAt : 'Fecha no disponible.'}</p></div>
                            </div>
                        </section>
                    </section>

                    <section className={style.Section2}>
                        <div className={style.title}>
                            <h6>Recursos</h6>
                            <Barv2 />
                        </div>

                        <div className={style.resource}>
                            <div className={style.card}>
                                <IoDocumentTextOutline size={100} />
                                <p className={style.doctext}>Titulo de documento</p>
                                <button className={style.opendoc}>Abrir</button>
                            </div>
                        </div>
                    </section>

                    <div className={style.Section3}>
                        <EventTable />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Ally