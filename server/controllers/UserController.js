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


module.exports = {Getusers}