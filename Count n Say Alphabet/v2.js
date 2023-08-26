let store = [];
let same = [];
const countAndSay = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      same.push(arr[i], arr[i + 1]);
      break;
    }
    for (let j = 0; j < same.length; j++) {
      let count = 1;
      if (same[i] == same[i + 1]) {
        count++;
      } else {
        store.push(same[i]);
      }
      store.push(same[i], count);
      same = [];
    }
  }

  console.log(store);
};
let arr = ["a", "a", "b", "b", "c", "c", "c"];
// [a,2,b,2,c,3]
countAndSay(arr);
