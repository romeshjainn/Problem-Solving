let arr = [1, 2, 9, 4, 5];
let store = 0;
let currentNum = 0;
let store2 = 0;

for (let i = 0; i < arr.length; i++) {
  currentNum = arr[i];
  if (store < currentNum) {
    store = currentNum;
  }
}
arr.pop(store);
for (let j = 0; j < arr.length; j++) {
  if (store2 < arr[j]) {
    store2 = arr[j];
  }
}

console.log(store2);
// console.log(arr);
// console.log(store);
