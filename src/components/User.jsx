import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function User() {
    const [users, StateUser] = useState([]);
    const [deleteuser, setDeleteUser] = useState([]);

    useEffect(() => {
        obtenerUsers()
    }, []);




    const obtenerUsers = async () => {
        try {
            const responder = await axios.get('http://localhost:4000/api/consumo/users');
            StateUser(responder.data);
        } catch (error) {
            console.log(error);
        }
    }

    const navigate = useNavigate();

    const Delete_User = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:4000/api/auth/delete/${id}`);
            if (response.data === 200) {
                setDeleteUser(deleteuser.filter((user) => user._id !== id))
            }
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className="container mt-4">
            <div className="col-12">
                <div className="card">
                    <div className="card-header bg-dark">
                        <h6 className="text-white text-uppercase">Listado de usuarios</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <Link to='/agree'>
                                <button className="btn btn-sm btn-outline-dark mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                    Agregar usuario
                                </button>
                            </Link>

                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Id_User</th>
                                        <th>Nombre</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Pais</th>
                                        <th>Telefono</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index) => (
                                        <tr key={index}>
                                            <td>{user._id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.password}</td>
                                            <td>{user.pais}</td>
                                            <td>{user.telefono}</td>
                                            <td>
                                                <button className="btn btn-sm btn-outline-success">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                    </svg>
                                                    Editar
                                                </button>
                                                <button className="btn btn-sm btn-outline-danger"
                                                    onChange={() => Delete_User(user._id)}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                    </svg>Eliminar</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default User;