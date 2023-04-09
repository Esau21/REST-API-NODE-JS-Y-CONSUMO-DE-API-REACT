import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


<form id="form-agree" action="">
    ...
</form>



function Agree() {


    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        pais: "",
        telefono: "",
    });



    const navigate = useNavigate();
    
    const HandleSubmit = async (event) => {
        event.preventDefault();
        try {
            const responder = await axios.post('http://localhost:4000/api/auth/add', formData);
            console.log(responder.data);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
    

    const handleChange = async (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }



    return (
        <div className="container">
            <div className="row">
                <div className="card mt-5">
                    <div className="card-header bg-dark">
                        <h6 className="text-primary text-center text-uppercase">Crear Usuario</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <form id="form-agree" onSubmit={HandleSubmit}>
                                <div className="form-group">
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" name="username" placeholder="Ingresa un nombre" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div className="col-sm-6">
                                        <input type="email" className="form-control" name="email" placeholder="ejemplo123@gmail.com" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div className="col-sm-6">
                                        <input type="password" className="form-control" name="password" placeholder="Ingresa una clave" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div className="col-sm-6">
                                        <input type="password" className="form-control" name="confirmpassword" placeholder="Ingresa la clave de confirmacion" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" name="pais" placeholder="Ingresa de que pais eres" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div className="col-sm-6">
                                        <input type="number" className="form-control" name="telefono" placeholder="Ingresa la clave de confirmacion" onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="form-group mt-3">
                                    <div className="col-sm-6">
                                        <button className="btn btn-sm btn-outline-success" type="submit" onClick={HandleSubmit}>Agregar</button>
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




export default Agree;