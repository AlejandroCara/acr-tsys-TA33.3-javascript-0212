let persona1 = {
    nombre: "Alejandro",
    apellidos: "Carayol Rodriguez",
    edad: 25,
    direccion: "Aqui",
    ciudad: "Reus",
    pais: "España"
}

let personaFullName = (persona) => {
    console.log(persona.nombre + " " + persona.apellidos);
}


personaFullName(persona1);