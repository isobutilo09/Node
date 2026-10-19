const http = require('http');
const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
    console.log('Esto se ejecuta siempre');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Añadir producto</h1>');
    // no llamo a next para que no se ejecute lo de abajo
});

app.use('/', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from Express</h1>');
});

const server = http.createServer(app);
server.listen(3008);