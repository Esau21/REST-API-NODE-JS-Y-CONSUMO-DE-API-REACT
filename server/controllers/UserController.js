const User = require('../models/User');


const Getusers = (req, res) => {
    User.find((err, users) => {
        if(!err){
            res.status(200).json(users);
        } else {
            res.status(400).send(err);
        }
    });
}

const GetIdUsers = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (!err) {
            res.status(200).json(user)
        } else {
            res.status(400).send(err.message);
        }
    });
}


module.exports = {Getusers, GetIdUsers}