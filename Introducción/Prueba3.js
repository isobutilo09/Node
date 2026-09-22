
var name = "Alvaro";
var age = 19;
var hobbies = true;
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

//me declaro varias variables globales con var y hago una función para que imprima el nombre, la edad y si tiene un hobbie o no