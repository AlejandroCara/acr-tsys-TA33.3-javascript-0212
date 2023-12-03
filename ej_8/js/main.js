let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
let javascript2 = ["Objetos", "Arrays", "ParseInt"];
let repeat = (array1, array2) => {
    for(let i = 0; i < array1.length; i++){
        if(array2.includes(array1[i])){
            console.log(array1[i] + " está en ambos");
        }
    }
}

repeat(javascript1, javascript2);