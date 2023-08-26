const countAndSay = (n) => {
  if (n <= 0) {
    return [];
  }

  let arr = [1];

  for (let i = 1; i < n; i++) {
    let current = arr[0];
    let count = 1;
    let store = [];

    for (let j = 1; j < arr.length; j++) {
      if (arr[j] === current) {
        count++;
      } else {
        store.push(count, current);
        current = arr[j];
        count = 1;
      }
      }
      console.log(store)
      console.log(count)
      console.log(current)

    store.push(count, current);
    arr = store;
  }

  return arr;
};

let n = 6;
console.log(countAndSay(n)); // Output: [1, 1, 1, 2, 2, 1]
