const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/consumo-api";

const opciones = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(uri, opciones);

module.exports = mongoose.connection;