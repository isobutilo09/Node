
const pokemonBase = { nombre: 'Pikachu', tipo: 'Eléctrico', nivel: 25 };
const ataques = ['Impactrueno', 'Ataque Rápido'];

const pokemonMejorado = {...pokemonBase, variante: 'Shiny', nivel: 50 };

const listaAtaques = [...ataques, 'Rayo'];

console.log('Pokemon Base:', pokemonBase);
console.log('Pokemon Mejorado:', pokemonMejorado);
console.log('Ataques originales:', ataques);
console.log('Lista de ataques:', listaAtaques);