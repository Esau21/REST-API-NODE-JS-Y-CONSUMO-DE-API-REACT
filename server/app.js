const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');
const app = express();
const db = require('./config/db');
const API_USER = require('./routes/User');
const AUTH_USER = require('./routes/AuthRoues');


app.set('port', process.env.PORT || 4000);

app.use(express.json());
app.use(cors());
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

/* aqui hacemos el consumo de la api */
app.use('/api/consumo', API_USER);
app.use('/api/auth', AUTH_USER);
/* aqui termina estas son las dos rutas que ocuparemos */

db.on('error', (error) => {
    console.error(`Error conectado a mongo db: ${error}`);
});

db.once('open', () => {
    console.log('Conectado a la base de datos de mongo db');
});

app.listen(app.get('port'), () => {
    console.log('Run server in', app.get('port'));
});