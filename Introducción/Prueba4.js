const name = "Alvaro";
let age = 19;
const hobbies = true;
var hasHobbies = "";

function summarizeUser(userName, userAge, userHasHobby){
    if(hobbies){
        hasHobbies = "si"
    } else{
        hasHobbies = "no"
    }
    return('El nombre es ' + userName + ' y su edad ' + userAge + ' y '+ hasHobbies + ' tiene hobbies');
    //userHasHobby ? "si" : "no"
}

console.log(summarizeUser( name, age, hobbies));

const fn = (a, b) => { return a + b; }
console.log(fn(age, 4));

//E ste es lo mismo que el anterior, pero corregido con let y ademas con un metodo arrow, el cual suma a + b. En el ejemplo coges la edad y le sumas 4