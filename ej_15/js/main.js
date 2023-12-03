let recetas = [];

receta = {
    nombre: "Macarrones boloñesa",
    tiempo: "1h 30m",
    ingredientes: ["Macarrones", "Carne picada", "Cebolla", "Salsa de tomate"]
}
recetas.push(receta);

receta = {
    nombre: "Bizcocho",
    tiempo: "2h 40m",
    ingredientes: ["Arina", "Huevos", "Azucar", "Levadura"]
}
recetas.push(receta);

receta = {
    nombre: "Paella",
    tiempo: "4h 0m",
    ingredientes: ["Arroz", "Gambas", "Azafran", "Mejillones"]
}
recetas.push(receta);

let shotReceta = (inReceta) => {
    for(let i = 0; i < inReceta.length; i++){
        console.log(inReceta[i].nombre);
        console.log(inReceta[i].tiempo);
        console.log(inReceta[i].ingredientes);
    }
}

shotReceta(recetas);