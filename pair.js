const findLongestChain = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i[i]] > arr[i + (1)[i]])  {
      count++;
    }
  }
  return count;
};
let pairs = [
  [1, 2],
  [2, 3],
  [3, 4],
];
console.log(findLongestChain(pairs));
