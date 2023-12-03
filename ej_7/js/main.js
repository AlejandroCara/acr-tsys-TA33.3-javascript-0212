let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let gt5 = (array) => {
    for(let i = 0; i < array.length; i++) {
        if(array[i] > 5){
            console.log(array[i])
        }
    }
}

gt5(nums);