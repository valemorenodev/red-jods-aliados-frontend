import React from "react";
import testData from "../../TestAliados.json"
import { Table } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai"
import { IoMdAddCircleOutline } from "react-icons/io"
import style from "./AlliesList.module.css"
import { useState } from "react";
import Switch from "../Switch/Switch";

function AlliesList() {
    const [search, setSearch] = useState("")

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    return (
        //     const data = React.useMemo(() => testData, []);
        //     const columns = React.useMemo(() => [
        //         {
        //             Header: "Organización",
        //             accessor: "organización",
        //         },
        //         {
        //             Header: "Descripción",
        //             accessor: "descripción",
        //         },
        //         {
        //             Header: "Responsable",
        //             accessor: "responsable",
        //         },
        //         {
        //             Header: "Eje",
        //             accessor: "eje",
        //         },
        //         {
        //             Header: "ODS",
        //             accessor: "ods",
        //         },
        //         {
        //             Header: "Fecha de inicio",
        //             accessor: "fechainicio",
        //         },
        //         {
        //             Header: "Estado",
        //             accessor: "estado",
        //         }

        //     ],[]);

        //     const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } = useTable({columns, data});

        //     return (
        //         <div className='AlliesList'>
        //             <div className='container'>
        //                 <table {...getTableProps()}>
        //                     <thead>
        //                         {headerGroups.map((headerGroup) => (
        //                             <tr {...headerGroup.getHeaderGroupProps()}>
        //                                 {headerGroup.headers.map((column) => (
        //                                     <th {...column.getHeaderProps()}>
        //                                         {column.render("Header")}
        //                                     </th>
        //                                 ))}
        //                             </tr>
        //                         ))}
        //                     </thead>
        //                     <tbody {...getTableBodyProps()}>
        //                         {rows.map((row) => {
        //                             prepareRow(row)
        //                             return(
        //                                 <tr {...row.getRowProps()}>
        //                                     {row.cells.map((cell) => (
        //                                         <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
        //                                     ))}
        //                                 </tr>
        //                             )
        //                         })}

        //                     </tbody>
        //                 </table>
        //             </div>
        //         </div>


        <>
            <div className="main-container">

                <div className="addsearch-container">

                    <button className="addbtn">Agregar</button>

                    <div className='search'>
                        <input value={search} onChange={searcher} type="text" placeholder='Buscar...' />
                        <AiOutlineSearch />
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
                                <td>
                                    <IoMdAddCircleOutline style={{fontSize:'1.5rem'}}/>
                                    <Switch />
                                </td>
                            </tr>
    
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default AlliesList;