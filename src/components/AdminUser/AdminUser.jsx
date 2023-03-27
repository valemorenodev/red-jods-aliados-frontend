import React, { useState, useEffect } from 'react';
import { useTable, useFilters, usePagination } from 'react-table';
import { Button, Modal, Form } from 'react-bootstrap';
import { AiOutlineSearch } from "react-icons/ai"
import { IoChevronBackSharp } from "react-icons/io5"
import { IoChevronForwardSharp } from "react-icons/io5"
import style from '../AdminUser/AdminUser.module.css'
import apis from '../../apis/index'
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

function AdminUser() {
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [deletedUser, setDeletedUser] = useState(null);
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const columns = React.useMemo(
        () => [
            {
                Header: 'Nombre',
                accessor: 'name',
            },
            {
                Header: 'Correo',
                accessor: 'email',
            },
            {
                Header: 'Contraseña',
                accessor: 'pass',
            },
            {
                Header: 'Rol',
                accessor: 'role',
            },
        ],
        []
    );

    const [data, setData] = useState([]);
        useEffect(() => {
        const token = localStorage.getItem('token');
        const tokendecode = jwt_decode(token);
        const user = tokendecode.role;
        setUser(user);
        const showErrorAlert = (errorMessage) => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: errorMessage,
              confirmButtonColor: '#ff6565',
            });
          };
        
        if (user === 'user') {
            showErrorAlert('Solos los administradores pueden editar usuarios');
            navigate('/nameroute');
        }else{
            const fetchData = async () => {
                try {
                    const response = await apis.get('/userroute', {
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
        }


       
    }, []);

    const createUser = async () => {
        try {
          const response = await apis.post('auth/register', formData);
          console.log(response.data);
          closeModal();
          fetchData();
        } catch (error) {
          console.error(error);
        }
      };

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

    const handleFilterChange = (e, accessor) => {
        const value = e.target.value;
        setFilter(accessor, value);
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pass: '',
        role: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const openModal = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedUser(null);
        setShowModal(false);
    };

    const saveUser = (user) => {
        closeModal();
    };

    const removeUser = async (id) => {
        if (user === "user") {
            showErrorAlert("Solo los administradores pueden eliminar usuarios");
            return;
        }
    
        await apis.delete(`/userroute/${id}`);
        setDeletedUser((oldList) => {
            return oldList.filter((item) => item._id !== id);
        });
    };

    return (
        <>
            <div className={style.maincontainer}>

                <div className={style.addsearch}>

                    <Button variant="success" onClick={openModal}>
                        Crear usuario
                    </Button>

                    <Modal show={showModal} onHide={closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedUser ? "Editar usuario" : "Crear usuario"}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <Form.Group className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Correo electrónico
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Contraseña
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="pass"
                                        name="pass"
                                        value={formData.pass}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <label htmlFor="role" className="form-label">
                                        Rol
                                    </label>
                                    <select
                                        className="form-control"
                                        id="role"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                    >
                                        <option value="">Seleccione un rol</option>
                                        <option value="Super Administrador">Super Administrador</option>
                                        <option value="Usuario">Usuario</option>
                                    </select>
                                </Form.Group>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={closeModal}>Cancelar</Button>
                            <button type="button" className="btn btn-primary" onClick={createUser}>
                                Crear
                            </button>
                        </Modal.Footer>
                    </Modal>

                    <div className={style.search}>
                        {' '}
                        <input id={style.search} type="text" onChange={(e) => handleFilterChange(e, 'eje')} />
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
                                    <th className={style.tableally}>Accion</th>
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
                                                <button onClick={removeUser(user._id)}>
                                                    <FaTrash size={25}/>
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

export default AdminUser;