const arr = [9, 4, 6, 12, 7, 18, 3];

const divisible = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (i % 2 === 0 && current % 3 === 0) {
      sum += current;
    }
  }
  return sum;
};

console.log(divisible(arr));
