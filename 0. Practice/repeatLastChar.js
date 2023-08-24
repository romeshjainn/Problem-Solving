let str = "romesh";
let nTimes = 5;

const repeatLastChar = (str, nTimes) => {
  let arr = str.split("");
  let lastChar = arr.pop();

  for (let i = 0; i < nTimes; i++) {
    lastChar += lastChar[lastChar.length - 1];
  }

  arr.push(lastChar);
  return arr.join("");
};

console.log(repeatLastChar(str, nTimes));
