import React, { useState } from 'react';
import { useTable, useFilters, usePagination } from 'react-table';
import testData from '../../TestAliados.json'
import style from '../AlliesList/AlliesList.module.css'
import Switch from '../Switch/Switch'
import { AiOutlineSearch } from "react-icons/ai"
import { IoChevronBackSharp } from "react-icons/io5"
import { IoChevronForwardSharp } from "react-icons/io5"
import { IoMdAddCircleOutline } from "react-icons/io"
import { Link } from 'react-router-dom';

function AlliesList() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Organización',
                accessor: 'organizacion',
            },
            {
                Header: 'Descripción',
                accessor: 'descripcion',
            },
            {
                Header: 'Responsable',
                accessor: 'responsable',
            },
            {
                Header: 'Eje',
                accessor: 'eje',
            },
            {
                Header: 'ODS',
                accessor: 'ods',
            },
            {
                Header: 'Fecha de Inicio',
                accessor: 'fechainicio',
            },
        ],
        []
    );

    const [data, setData] = useState(testData);

    const tableInstance = useTable({ columns, data, initialState: { pageSize: 6 } }, useFilters, usePagination);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        setFilter,
        state: { pageIndex, pageSize },
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
    } = tableInstance;

    const handleStatusRow = (id) => {
        setData(
            data.map((row) => {
                if (row.id === id) {
                    return {
                        ...row,
                        status: !row.status
                    };
                }
            })
        );
    };

    const handleFilterChange = (e, accessor) => {
        const value = e.target.value;
        setFilter(accessor, value);
    };

    return (
        <>
            <div className={style.maincontainer}>

                <div className={style.addsearch}>
                    <Link to="/NewAlly">
                        <button className={style.addbtn}>Agregar</button>
                    </Link>

                    <div className={style.search}>
                        {' '}
                        <input id={style.search} type="text" onChange={(e) => handleFilterChange(e, 'eje')} />
                        <AiOutlineSearch />
                    </div>

                </div>
                <div className={style.table}>
                    <table {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th className={style.tableally} {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))}
                                    <th className={style.tableally}>Estado</th>
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {page.map((row) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => {
                                            return (
                                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            );
                                        })}
                                        <td>
                                            <div className={style.plus}>
                                            <Link to="/Ally">
                                                <button>
                                                    <IoMdAddCircleOutline size={30} />
                                                </button>
                                            </Link>
                                                <button onClick={() => handleStatusRow}>
                                                    <Switch />
                                                </button>
                                            </div>

                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className={style.pages}>
                    <div className={style.pagesbtn}>
                        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                            <IoChevronBackSharp color="grey" />
                        </button>{' '}
                        <button onClick={() => nextPage()} disabled={!canNextPage}>
                            <IoChevronForwardSharp color="grey" />
                        </button>
                    </div>
                    <span>
                        Página{' '}
                        <strong>
                            {pageIndex + 1} de {Math.ceil(data.length / pageSize)}
                        </strong>{' '}
                    </span>
                </div>
            </div>
        </>
    );
}

export default AlliesList;