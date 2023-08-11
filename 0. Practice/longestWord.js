// Initialize a variable to store the current largest word, starting with an empty string.
// Iterate through the array of words.
// For each word, compare its length with the length of the current largest word.
// If the current word's length is greater, update the variable storing the largest word.
// After iterating through all the words, the variable will hold the largest word.

let str = "My name is ankit jain & i'm from morena morema";
let words = str.split(" ");

function findLargestWord(str) {
  let largestWord = "";

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];

    if (currentWord.length > largestWord.length) {
      largestWord = currentWord;
    }
  }
  return largestWord;
}

let word = findLargestWord(str);
console.log(word);
