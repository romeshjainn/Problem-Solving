const example = [1, 2, 3, 4, [1, 2], [3, 4, [3, 4]], 5];
let arr = [
  [1, 2, [1, 2, [1, 2]]],
  [3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15],
];

const flatten = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])) {
            for (let i = 0; i < arr[i].length; i++){
                
            }
        }
        else {
            result.push(arr[i]);
        }
    }
}
flatten(arr)
