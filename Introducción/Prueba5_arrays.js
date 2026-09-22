
//Aqui me creo un objeto persona, con nombre, edad y una función para imprimir el nombre, que mas tarde la ejecutas con person.greet

const person = {
    name: 'Alvaro',
    age: 19,
    greet() {
        console.log('Hola, soy ' + this.name);
    }
};

person.greet();
//Aqui me declaro un array
const hobbies = ['Sports', 'Cooking'];

//for (let hobby of hobbies){
//    console.log(hobby);
//}

//hobbies.map(); transforma el array

//Esto es una funcion arroy para imprimir el array con el map
console.log(hobbies.map(hobby => { // Arrow function
    return 'Hobby: ' + hobby;
}));

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

console.log(hobbies);

hobbies.push('Programming');
console.log(hobbies);

//copiar array
const hobbiesCopiados = [...hobbies, 'Hola'];
console.log(hobbiesCopiados);

//copia del objeto
const persona = {nombre: 'Juan', edad: 29};
const personaCopiada = {...persona};
console.log(personaCopiada);


//Función arrow para grupar un número indefinido de argumentos pasados a una función dentro de un único array
const toArray = (...args) => {
    return args;
};

toArray(1, 2, 3, 4);