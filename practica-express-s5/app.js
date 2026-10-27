const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('Primer middleware: Procesando petición...');
    next();
});

app.use((req, res, next) => {
    console.log('Segundo middleware: Generando respuesta...');
    res.send('<h1>¡Hola desde el servidor Express!</h1>');
});

app.listen(3000);