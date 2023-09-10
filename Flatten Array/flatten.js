let arr = [
  [1, 2, [10, 11, 12, 13, 14, 15, [10, 11, 12, 13, 14, 15]]],
  [3, 4],
  [5, 6, 7, 8, 9, [5, 6, 7, 8, 9, [5, 6, 7, 8, 9]]],
  [10, 11, 12, 13, 14, 15],
];

const flatten = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (Array.isArray(current)) {
      for (let j = 0; j < current.length; j++) {
        let current2 = current[j];
        if (Array.isArray(current2)) {
          for (let k = 0; k < current2.length; k++) {
            result.push(current2[k]);
          }
      else {
        
          result.push(current2[k]);
        }
      }
      }
    } else {
      result.push(current);
    }
  }
  return result;
};
console.log(flatten(arr));
