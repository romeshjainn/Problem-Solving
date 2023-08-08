let arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0];

function arrangeArr(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }

  arr = [];
  for (let key in obj) {
    // console.log(key)
    for (let i = 0; i < obj[key]; i++) {
      arr.push(parseInt(key));
    }
  }

  return arr;
}

console.log(arrangeArr(arr));

// output
// [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

// function arrangeArr(arr) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[0] === arr[i]) {
//       newArr.push(arr[i]);
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[0] !== arr[i]) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// }

// let result = arrangeArr(arr);
// console.log(result);

// // Output
// // [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
