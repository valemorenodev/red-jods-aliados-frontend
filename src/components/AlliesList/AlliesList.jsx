import React from "react";
//import { useState } from "react";
//import axios from "axios";
import { Table } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai"
import { IoMdAddCircleOutline } from "react-icons/io"
import { IoFilterCircleOutline } from "react-icons/io5";
import Switch from "../Switch/Switch";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./AlliesList.module.css"
//import data from  "../../TestAliados.json"


function AlliesList() {
//     const [alliesList, setAlliesList] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       const { data } = await allies.get("/allies");
//       setAlliesList(data);
//     }

//     fetchData();
//   }, []);

    // const renderedList = data.map((item) =>

    // )

    return (
        <>

            <Header />
            <div className={style.maincontainer}>

                <div className={style.addsearch}>

                    <button className={style.addbtn}>Agregar</button>

                    <div className={style.filter}>
                        <IoFilterCircleOutline color="#464646" style={{ fontSize: '1.8rem', marginRight: '10px', cursor:'pointer' }} />
                        <div className={style.search}>

                            <input type="text" placeholder='Buscar...' />
                            <AiOutlineSearch />
                        </div>
                    </div>

                </div>



                <div className="p-4 rounded" id={style.table}>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Organización</th>
                                <th className={style.h_description}>Descripción</th>
                                <th>Responsable</th>
                                <th>Eje</th>
                                <th>ODS</th>
                                <th>Fecha de inicio</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Objetivos de Desarrollo Sostenible </td>
                                <td className={style.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ab atque assumenda sapiente.</td>
                                <td>Lorem ipsum</td>
                                <td>Prosperidad</td>
                                <td> Trabajo Decente y Crecimiento Económico</td>
                                <td>30/03/2023</td>
                                <td className={style.status}>
                                    <IoMdAddCircleOutline style={{ fontSize: '1.7rem', cursor:'pointer' }} />
                                    <Switch />
                                </td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AlliesList;