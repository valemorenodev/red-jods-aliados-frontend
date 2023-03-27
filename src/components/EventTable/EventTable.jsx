import React, { useState, useMemo, useEffect } from 'react';
import { useTable,  usePagination, useGlobalFilter } from 'react-table';
//import testData from '../../testEventos.json'
import style from '../EventTable/EventTable.module.css'
import { AiOutlineSearch } from "react-icons/ai"
import { IoChevronBackSharp } from "react-icons/io5"
import { IoChevronForwardSharp } from "react-icons/io5"
import { Link } from 'react-router-dom';
import Barv2 from '../ColorBar v2/ColorBar';
import apis from '../../apis/index'

function EventTable() {
    const columns = useMemo(
        () => [
            {
                Header: 'Fecha',
                accessor: 'date',
            },
            {
                Header: 'Tipo de Actividad',
                accessor: 'type_activity',
            },
            {
                Header: 'Nombre',
                accessor: 'name',
            },
            {
                Header: 'Organizador',
                accessor: 'organizer',
            },
            {
                Header: 'Decripción',
                accessor: 'description',
            },
        ],
        []
    );

    const [data, setData] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token');
          const fetchData = async () => {
              try {
                  const response = await apis.get('/activityhroutes', {
                      headers: {
                          'Authorization': 'Bearer ' + token
                      }
                  });
                  setData(response.data);
             } catch (error) {
                  console.error(error);
              }
          };
 
          fetchData();
      }, []);

    const tableInstance = useTable({ columns, data, initialState: { pageSize: 6 } }, useGlobalFilter, usePagination );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        state,
        setGlobalFilter,
        prepareRow,
        state: { pageIndex, pageSize },
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
    } = tableInstance;

    const { globalFilter } = state;

    return (
        <>
            <div className={style.title}>
                <h6>Historial de Actividades</h6>
                <Barv2 />
            </div>
            <div className={style.maincontainer}>

                <div className={style.addsearch}>
                    <Link to="/NewEvent">
                        <button className={style.addbtn}>Agregar</button>
                    </Link>

                    <div className={style.search}>
                        {' '}
                        <input id={style.search} type="text" onChange={(e) => setGlobalFilter(e.target.value)} />
                        <AiOutlineSearch />
                    </div>

                </div>
                <div className={style.table}>
                    <table {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th className={style.headlines} {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {page.map((row) => {
                                prepareRow(row);
                                return (
                                    <tr className={style.rows} {...row.getRowProps()}>
                                        {row.cells.map((cell) => {
                                            return (
                                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            );
                                        })}
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

export default EventTable;
