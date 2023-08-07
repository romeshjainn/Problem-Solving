// 12321
// make a function which will accept string as an argument
// run a loop which will start from the 1 st element of the string
// run another loop which will run from last element of the string
// after each iteration store the values to a variable
// compare the values using if else
// return palidrome else return 0;

let num = [1, 2, 3, 2, 1];

function palindrome(num) {
    for (let i = 0; i < num.length; i++) {
        for (let j = num.length - 1; j >= 0; j--) {
            if (i >= j) {
                return true; // All elements checked, and they match so far
            }

            if (num[i] !== num[j]) {
                return false; // Elements don't match, not a palindrome
            }

            i++; // Move i forward
        }
    }
    return true; // Empty array or single element is considered a palindrome
}

console.log(palindrome(num));

// another way
// let num = [1, 2, 3, 2, 2];

// function palindrome(num) {
//     for (let i = 0; i < num.length / 2; i++) {
//         if (num[i] !== num[num.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(palindrome(num));
