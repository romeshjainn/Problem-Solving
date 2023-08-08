// Make a function which will take array as an argument
// Iterate over the array to take elements from it 
// put if else to compare the elements 
// return min max 


function minMax(nums) {
    let minimum = nums[0];
    let maximum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > maximum) {
            maximum = nums[i];
        } else if (nums[i] < minimum) {
            minimum = nums[i];
        }
    }

    console.log("Minimum:", minimum)
    console.log("Maximum:", maximum);
}
let nums = [1, 2, 3, 4, 5];
minMax(nums);
