let obj1 = {
    nombre: "World of Warcraft",
    genero: "Fantasía",
    tipo: "Videojuego"
}

let obj2 = {
    nombre: "El Señor De Los Anillos",
    genero: "Fantasía Epica",
    tipo: "Libro / Pelicula"
}

let obj3 = {
    nombre: "One Piece",
    genero: "Shonnen",
    tipo: "Manga / Anime"
}

let objetos = [obj1, obj2, obj3]

let nombreObjetos = (array) => {
    for(let i = 0; i < array.length; i++){
        console.log(array[i].nombre);
    }
}

nombreObjetos(objetos);