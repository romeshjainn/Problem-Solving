// Initialize two variables , one will store current word and on will store the largest word
// Spliting the string using split method
// Run a loop to take each word from the string
// Add if else condition to compare the length of each words
// return largest word

let str = "My name is ankit jain & i'm from morena morema";
let words = str.split(" ");

function largestWORD(str) {
  let largestWord = "";

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];

    if (currentWord.length > largestWord.length) {
      largestWord = currentWord;
    }
  }
  return largestWord;
}

let word = largestWORD(str);
console.log(word);
