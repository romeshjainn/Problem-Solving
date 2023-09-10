let str = "cbcbdde";

function firstNonRepeatedChar(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    currentChar = str[i];
    obj[currentChar] = (obj[currentChar] || 0) + 1;
  }
  for (char of str) {
    if (obj[char] === 1) {
      return char;
    }
  }
  return null; 
}

console.log(firstNonRepeatedChar(str));
