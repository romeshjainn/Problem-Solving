let str = "i evol you";
let arr = str.split(" ");
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  let store = "";
  for (let j = arr[i].length - 1; j >= 0; j--) {
    store += arr[i][j];
  }
  newArr.push(store);
}

console.log(newArr); // Output: ["i", "love", "you"]
