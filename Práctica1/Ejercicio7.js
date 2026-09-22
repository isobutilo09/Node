const serverResponse = {
status: 200,
ip: '192.168.1.45',
port: 8080,
token: 'A98F72-ZX',
sessionDuration: 3600,
userRole: 'Admin'
};

const validarAcceso = ({ip, port, token}) => {
    console.log("Conectando a IP: "+ ip +
    " por el puerto " + port + " con el token" + token)
};

const {userRole} = serverResponse;
console.log(userRole);

validarAcceso(serverResponse);