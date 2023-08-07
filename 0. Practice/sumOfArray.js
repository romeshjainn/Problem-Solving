// Create a function which will take array as an argument
// Create a variable which will store and add array one by one
// Iterate over the array and add the numbers to a variable
// Return sum

let nums = [1, 2, 3, 4, 5];

function sumOfArray(nums) {
    let store = 0;
    for (let i = 0; i < nums.length; i++) { 
        store += nums[i];
    }
    return store;
}
let result = sumOfArray(nums);
console.log(result);