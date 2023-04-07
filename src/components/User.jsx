import React, { useEffect, useState } from "react";
import axios from 'axios';


function User() {
    const [users, StateUser] = useState([]);

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

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header bg-dark">
                    <h6 className="text-white text-uppercase">Listado de usuarios</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
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
                                            <button className="btn btn-sm btn-outline-success">Editar</button>
                                            <button className="btn btn-sm btn-outline-danger">Eliminar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default User;