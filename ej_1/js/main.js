let abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
let randomNum = (min, max) => {
    return Number(Math.floor(Math.random() * max)) + Number(min);
}
let showLength = (array) => {
    console.log(array.length);
}
let oneRandom = (array) => {
    console.log(array[randomNum(0,(array.length-1))]);
}

showLength(abc);
oneRandom(abc);