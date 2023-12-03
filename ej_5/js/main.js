let nums1 = [1,2,3];
let nums2 = [4,5,6];
let nums3 = [];
let fusion = (array1, array2, arrayOut) => {
    let count = array1.length;
    for(let i = 0; i < count; i++){
        arrayOut.push(array1.shift());
        arrayOut.push(array2.shift());
    }
}

fusion(nums1, nums2, nums3);
console.log(nums1);
console.log(nums2);
console.log(nums3);