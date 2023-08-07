// make a function which will take take two arguments array and a number
// run a loop on the array
// pick first number , then try to add other array elements (numbers) only if it will be equal to the number we entered
// if we didnt get the desired output, pick second number and do the above thing again
// return k if we get what we want ,else return -1 

const nums = [1, 2, -1, 3, 1, 6, 3, 7, -9, -1];
let k = 7;
const findTwoElementPair = (arr, k) => {
    for (let i = 0; i < arr.length; i++) {
        const num1 = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            const num2 = arr[j];

            if (num1 + num2 === k) {
                return [num1, num2];
            }
        }
    }

    return -1;
};

console.log(findTwoElementPair(nums, k));