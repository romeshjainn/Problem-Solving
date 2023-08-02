function findPairsWithZeroSum(arr) {
  const store = {};

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    const temp = -currentNum;

    if (store[temp]) {
      console.log(currentNum, temp);
    }

    store[currentNum] = true;
  }
}

const inputArray = [2, -3, 1, 4, -1, 0, -2];
findPairsWithZeroSum(inputArray);
