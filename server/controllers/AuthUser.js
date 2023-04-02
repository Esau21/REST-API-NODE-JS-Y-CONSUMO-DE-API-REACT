const User = require('../models/User');
const bcrypt = require('bcrypt');

const Register = async (req, res) => {
    const { username, email, password, confirmpassword, pais, telefono } = req.body;
    const Password_Hash = await bcrypt.hash(password, 10)
    const ConfirmPassword_Hash = await bcrypt.hash(confirmpassword, 10);
    const User_Create = new User({
        username,
        email,
        password: Password_Hash,
        confirmpassword: ConfirmPassword_Hash,
        pais,
        telefono,
    });
    try {
        const create = await User_Create.save();
        if (!create) {
            res.status(400).json({ Status: 'El usuario no se puede crear' })
        }
        res.status(200).json({ Status: 'Usuario creado' })
    } catch (error) {

    }
};

const Login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({
            username
        });
        const Validate_Password = await bcrypt.compare(password, user.password);
        if (!user) {
            res.status(400).json({ Status: 'Usuario no encontrado en los registros de la base datos' });
            return user;
        }
        if (!Validate_Password) {
            res.status(400).json({ Status: 'Las claves del usuario no coinciden vuelve a intertarlo' });
        }

        res.status(200).json({ Status: 'Tu estas loguaeado exitosamnete' });
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const Update_User = async (req, res) => {
    const { username, email, password, confirmpassword, pais, telefono } = req.body;
    const Password_Hash = await bcrypt.hash(password, 10);
    const ConfirmPassword_Hash = await bcrypt.hash(confirmpassword, 10);
    const id = req.params.id;
    const Update_User = ({
        username,
        email,
        password: Password_Hash,
        confirmpassword: ConfirmPassword_Hash,
        pais,
        telefono,
    });
    try {
        const Update = await User.findByIdAndUpdate(
            id,
            Update_User,
        );
        if (!Update) {
            res.status(400).json({ Status: 'El usuario no se puede actualizar' });
        }
        res.status(200).json({ Status: 'Usuario actualizado con exito' });
    } catch (error) {

    }
}

const Delete_User = async (req, res) => {
    const id = req.params.id
    try {
        const Delete = await User.findByIdAndDelete(id);
        if(!Delete) {
            res.status(400).json({ Status: 'El usuario no pudo ser eliminado' });
        }
        res.status(200).json({ Status: 'Usuario eliminado' });
    } catch (error) {
        
    }
}

module.exports = { Register, Login, Update_User, Delete_User };