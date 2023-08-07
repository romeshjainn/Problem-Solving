let str = "i evol uoy";
let reversedWord = "";
let reversedString = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    reversedWord = str[i] + reversedWord;
  } else {
    reversedString += reversedWord + " ";
    reversedWord = "";
  }
}

reversedString += reversedWord; // Add the last word without a space at the end

console.log(reversedString);
