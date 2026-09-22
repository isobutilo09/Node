const robot1 = {
name: 'CyberChef',
specialty: 'Ramen',
greet: () => {
console.log(`Hola, soy ${this.name} y preparo ${this.specialty}`);
}
};
robot1.greet();

//Porque no se puede usar arrows 
//Las funciones arrow no tienen su propio this, por lo que heredan el this del ámbito global en lugar del objeto robot.

const robot2 = {
name: 'CyberChef',
specialty: 'Ramen',
greet() {
console.log(`Hola, soy ${this.name} y preparo ${this.specialty}`);
}
};
robot2.greet();