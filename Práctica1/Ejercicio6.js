const prepararCafe = (tamaño, ...ingredientes) => {
    return "Café "+ tamaño + "con los siguientes extras:" + ingredientes};

console.log(prepararCafe("Mediano", "Leche de Avena", "Vainilla", "Canela"));