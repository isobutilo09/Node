const express = require('express');
const app = express();

app.use('/users', (req, res, next) => {
    res.send('<h1>Lista de Usuarios</h1><ul><li>Usuario 1</li><li>Usuario 2</li></ul>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Página Principal</h1>');
});

app.listen(3020);