let arr = [5, 2, 3, 1, 6, 7];
let num = 4;
let store = 0;
let newArr = [];
function check(arr, num) {
  for (let j = 0; j < num; j++) {
    store = 0;
    for (let i = 0; i < arr.length; i++) {
      if (store < arr[i]) {
        store = arr[i];
      }
    }
    }
    arr.indexOf(store) = null;
    console.log(arr)
console.log(store);
}

check(arr, num);
