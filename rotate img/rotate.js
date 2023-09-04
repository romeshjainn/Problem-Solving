let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const rotate = (matxix) => {
    let arr = [];
    for (let i = matrix.length - 1; i >= 0; i--){
        let current = matrix[i];
        for (let j = 0; j < current.length; j++){
            arr.push(current[j]);
        }
    }
    return arr;
};
// rotate(matrix);
console.log(rotate(matrix));
