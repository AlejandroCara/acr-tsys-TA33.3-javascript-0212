let string = "Hola";
let stringArray = string.split("").reverse();
string = stringArray.toString().replaceAll(",", "");
console.log(string);
