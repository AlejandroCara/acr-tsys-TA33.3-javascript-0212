let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums = [];
let oddsNums = [];
let splitNumbers = (inArray, outEven, outOdds) => {
    for(let i = 0; i < inArray.length; i++){
        if(inArray[i] % 2 == 0){
            outEven.push(inArray[i]);
        } else {
            outOdds.push(inArray[i]);
        }
    }
}
let concatenated = " ";

splitNumbers(nums, evenNums, oddsNums);
console.log(nums);
console.log(evenNums);
console.log(oddsNums);

for(let i = 0; i < evenNums.length; i++){
    concatenated += evenNums[i] + " ";
}
for(let i = 0; i < oddsNums.length; i++){
    concatenated += oddsNums[i] + " ";
}

console.log(concatenated);