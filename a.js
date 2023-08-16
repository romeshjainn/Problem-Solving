let arr = [5, 2, 3, 1, 6, 7];
let num = 4;
let a = (arr.length - 1) / 2;
a = Math.ceil(a);
let store = 0;

function check(arr, num) {
  for (let i = 0; i < num - 1; i++) {
    store = arr[0];

    for (let j = 1; j < arr.length; j++) {
      if (store < arr[j]) {
        store = arr[j];
      }
    }

    let elemIndex = arr.indexOf(store);
    arr.splice(elemIndex, 1);
  }
  let largestNum = arr[0];
  for (let j = 1; j < arr.length; j++) {
    if (largestNum < arr[j]) {
      largestNum = arr[j];
    }
  }
  return largestNum;
}

let result = check(arr, num);
console.log(result);

//  https://codeshare.io/MNOMny
