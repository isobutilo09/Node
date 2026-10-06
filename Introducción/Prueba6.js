const persona = { name: 'Max', age: 29 };

// Extracción en parámetros, en el cual extraemos el nombre para solo imprimir eso sin la edad
const printName = ({ name }) => {
  console.log(name); // 'Max'
};

// Extracción directa en declaración
const { name, age } = persona;
console.log(name, age); // 'Max' 29
printName(persona);


//Esto lo hacemos para sacar lo que quieras dentro del array. 
//Poniendo comas, puedes saltarte algunos por si quieres sacar algun dato que este por el medio
const hobbies = ['hola', 'adios', 'perdon']
const [hobby1, , hobby3] = hobbies;

console.log(hobby1);
console.log(hobby3);

