import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

<form id="form-agree">
    ...
</form>


function Editar() {

    const [update, setUpdatenewUser] = useState({
        _id: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        pais: "",
        telefono: "",
    });

    const navigate = useNavigate();

    const fetchgetUsers = async (_id) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/consumo/dev/${_id}`);
            const user = response.data;
            setUpdatenewUser(user)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const id = window.location.pathname.split("/")[2]
        fetchgetUsers(id);
    }, []);

    const HandleSubmitUpdate = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`http://localhost:4000/api/auth/update/${update._id}`, update);
            console.log(response.data);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    const HandleEdit = async (event) => {
        setUpdatenewUser({ ...update, [event.target.name]: event.target.value });
    }




    return (
        <div className="container">
            <div className="row">
                <div className="card mt-5">
                    <div className="card-header bg-dark">
                        <h6 className="text-primary text-center text-uppercase">Actualizar usurio</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                        <form id="form-agree" onSubmit={HandleSubmitUpdate}>
                                <div className="form-group">
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" name="username" placeholder="Ingresa un nombre" onChange={HandleEdit} value={update.username} />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div className="col-sm-6">
                                        <input type="email" className="form-control" name="email" placeholder="ejemplo123@gmail.com" onChange={HandleEdit} value={update.email} />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div className="col-sm-6">
                                        <input type="password" className="form-control" name="password" placeholder="Ingresa una clave" onChange={HandleEdit} value={update.password} />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div className="col-sm-6">
                                        <input type="password" className="form-control" name="confirmpassword" placeholder="Ingresa la clave de confirmacion" onChange={HandleEdit} value={update.confirmpassword} />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" name="pais" placeholder="Ingresa de que pais eres" onChange={HandleEdit} value={update.pais} />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div className="col-sm-6">
                                        <input type="number" className="form-control" name="telefono" placeholder="Ingresa la clave de confirmacion" onChange={HandleEdit} value={update.telefono} />
                                    </div>
                                </div>

                                <div className="form-group mt-3">
                                    <div className="col-sm-6">
                                        <button className="btn btn-sm btn-outline-success" type="submit" onClick={HandleSubmitUpdate
                                        }>Actualizar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Editar;