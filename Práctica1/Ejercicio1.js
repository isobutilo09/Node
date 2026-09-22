const grimoire = { owner: "Mago Merlín", spells: ["Bola de Fuego", "Escudo de Hielo"] };

//1
grimoire.spells.push("Rayo Arcano");
console.log("Grimorio actualizado:", grimoire);
//Modifica el contenido en memoria, el puntero no cambia, por eso no peta


//2
grimoire = {owner: "Mago Oscuro"};
//TypeError: Assignment to constant variable. No puedes asignar de esta forma a una constante
//Esto pasa porque intenta reasignar el puntero a una nueva dirección de memoria. Tampoco dejaria con push porque no es un array

