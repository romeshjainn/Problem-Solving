function recurse(arr) {

    recurse();
  
}
let arr = [
  [1, 2, [1, 2, [1, 2]]],
  [3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15],
];
console.log(recurse(arr));
