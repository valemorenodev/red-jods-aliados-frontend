import React, { useState, useEffect } from 'react';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import style from '../AlliesList/AlliesList.module.css'
import Switch from '../Switch/Switch'
import { AiOutlineSearch } from "react-icons/ai"
import { IoChevronBackSharp } from "react-icons/io5"
import { IoChevronForwardSharp } from "react-icons/io5"
import { IoMdAddCircleOutline } from "react-icons/io"
import { Link, useNavigate} from 'react-router-dom';
import apis from '../../apis/index'

function AlliesList() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Organización',
                accessor: 'organization',
            },
            {
                Header: 'Descripción',
                accessor: 'description',
            },
            {
                Header: 'Responsable',
                accessor: 'responsible',
            },
            {
                Header: 'Eje',
                accessor: 'eje',
            },
            {
                Header: 'ODS',
                accessor: 'ODS',
            },
            {
                Header: 'Fecha de Inicio',
                accessor: 'date_start',
            },
        ],
        []
    );

    const [data, setData] = useState([]);
    const [allydetails, setAllyDetails] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem('token');
          const fetchData = async () => {
              try {
                  const response = await apis.get('/nameroute', {
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

    //   const viewAlly = async (id) => {
    //     try {
    //       const response = await apis.get(`/nameroute/${id}`);
    //       setAllyDetails(response.data);
    //       navigate(`/nameroute/${id}`);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

    const tableInstance = useTable({ columns, data, initialState: { pageSize: 6 } }, useGlobalFilter, usePagination);

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

    const handleStatusRow = (id) => {
        setData(
          data.map((row) => {
            if (row._id === id) {
              return {
                ...row,
                status: !row.status
              };
            }
            return row;
          })
        );
      };

    const { globalFilter } = state;

    return (
        <>
            <div className={style.maincontainer}>

                <div className={style.addsearch}>
                    <Link to="/NewAlly">
                        <button className={style.addbtn}>Agregar</button>
                    </Link>

                    <div className={style.search}>
                        {' '}
                        <input id={style.search} type="text" onChange={(e) => setGlobalFilter(e.target.value)} />
                        <AiOutlineSearch />
                    </div>

                </div>
                <div className={style.table1}>
                    <table className={style.tabla} {...getTableProps()}>
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
                                    <tr {...row.getRowProps()} allyDetails>
                                        {row.cells.map((cell) => {
                                            return (
                                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            );
                                        })}
                                        <td>
                                            <div className={style.plus}>
                                            <Link to={`/nameroute/${row.original._id}`}> 
                                                <button>
                                                    <IoMdAddCircleOutline size={30}/>
                                                </button>
                                            </Link> 
                                                <button onClick={() => handleStatusRow(row.id)}>
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