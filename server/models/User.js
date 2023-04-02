const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
            min: 5,
            max:12,
        },
        confirmpassword: {
            type: String,
            min: 5,
            max: 12,
        },
        pais: {
            type: String,
            require: true,
        },
        telefono: {
            type: Number,
            require: true
        }
    }
);


module.exports = mongoose.model('users', UserSchema);