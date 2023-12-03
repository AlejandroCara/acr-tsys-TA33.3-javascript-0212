let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];

let index = javascript1.indexOf("DOM");

if (index != -1) {
    javascript1[index] = "Objetos"
}

index = javascript1.indexOf("Arrays");

if (index != -1) {
    javascript1[index] = "ArraysDificiles"
}

let copia = javascript1.slice(2);
console.log(javascript1);
console.log(copia);
console.log(javascript1.indexOf("Funciones"))