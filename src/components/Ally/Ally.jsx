import React from 'react'
import style from './Ally.module.css'
import Bar from '../ColorBar/ColorBar'
import Barv2 from '../ColorBar v2/ColorBar'
import { IoDocumentTextOutline } from 'react-icons/io5'
import EventTable from '../EventTable/EventTable'
import AllyCard from './AllyCard'

function Ally() {

    
    return (
        <>
            <div className={style.container}>
                <div className={style.info}>
                    <AllyCard />
                    <section className={style.Section1}>
                        <div className={style.title}>
                            <h6>Indicadores</h6>
                            <Barv2 />
                        </div>

                        <section className={style.sectioncontainer}>
                            <section className={style.sections}>
                                <div className={style.section}>
                                    <span className={style.subtitle}>
                                        Descripción
                                    </span>
                                    <div className={style.colorbar}>
                                        <Bar />
                                    </div>

                                    <p className={style.text}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </section>

                            <div className={style.indicators}>
                                <div> <h4 className={style.subtitle}>Fecha de inicio</h4><p className={style.date}>23/03/2023</p></div>
                                <div> <h4 className={style.subtitle}>Fecha de Finalización</h4><p className={style.date}>23/03/2023</p></div>
                                <div> <h4 className={style.subtitle}>Fecha de Modificación</h4><p className={style.date}>23/03/2023</p></div>
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