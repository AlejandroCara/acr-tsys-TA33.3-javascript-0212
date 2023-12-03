let receta1 = {
    nombre: "Macarrones boloñesa",
    tiempo: "1h 30m",
    ingredientes: ["Macarrones", "Carne picada", "Cebolla", "Salsa de tomate"]
}

let receta2 = {
    nombre: "Bizcocho",
    tiempo: "2h 40m",
    ingredientes: ["Arina", "Huevos", "Azucar", "Levadura"]
}

let receta3 = {
    nombre: "Paella",
    tiempo: "4h 0m",
    ingredientes: ["Arroz", "Gambas", "Azafran", "Mejillones"]
}

let recetas = [receta1, receta2, receta3];

let shotReceta = (inReceta) => {
    for(let i = 0; i < inReceta.length; i++){
        console.log(inReceta[i].nombre);
        console.log(inReceta[i].tiempo);
        console.log(inReceta[i].ingredientes);
    }
}

shotReceta(recetas);
