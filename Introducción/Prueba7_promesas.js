
//Hacemos una promesa para quitar el anidamiento profundo, que nos podía causar problemas
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('¡Datos recibidos!');
    }, 1500);
  });
};

// 2. Consumo y encadenamiento lineal con .then()
// Espera 2 segundos, ejecuta una primera tarea asíncrona, muestra su resultado y luego ejecuta una segunda tarea
setTimeout(() => {
  console.log('Timer completado');

  fetchData()
    .then(text => {
      console.log(text);
      return fetchData(); // Devuelve una nueva promesa
    })
    .then(text2 => {
      console.log(text2);
    });
}, 2000);