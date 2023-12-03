let receta = {
    nombre: "Macarrones boloñesa",
    tiempo: "1h 30m",
    ingredientes: ["Macarrones", "Carne picada", "Cebolla", "Salsa de tomate"]
}

let shotReceta = (inReceta) => {
    console.log(inReceta.nombre);
    console.log(inReceta.tiempo);
    console.log(inReceta.ingredientes);
}

shotReceta(receta);