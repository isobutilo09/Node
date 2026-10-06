// Creación de un servidor
// Importar funciones globales http
const http = require ('http'); //busca un módulo global
const server = http.createServer((req,res) => {
    console.log(req.url, req.method, req.headers);
});

server.listen(3000); // Comienza un proceso de escucha para petición
                    // server.listen (puerto)