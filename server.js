const nodemailer = require('nodemailer');
const express = require('express');
const server = express();


 
const bodyParser = require('body-parser');
server.use(bodyParser.json());

// ----------------------------- ENVÍO DE EMAIL -----------------------------------

server.post('/send-email', (req, res) => {
    console.log(req.body);
    res.send('Recibido');

});

server.listen(8080, () => console.log('Servidor iniciado, puerto 8080.'));