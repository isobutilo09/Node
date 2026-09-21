const person = {
    name: 'Alvaro',
    age: 19,
    greet: () => {
        console.log('Hola, soy ' + this.name);
    }
};

person.greet();

const hobbies = ['Sports', 'Cooking'];

//for (let hobby of hobbies){
//    console.log(hobby);
//}

//hobbies.map(); transforma el array

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