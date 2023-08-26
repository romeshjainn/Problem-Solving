let store = [];
const countAndSay = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    if (arr[i] == arr[i + 1]) {
      count++;
    } else {
      store.push(arr[i]);
    }
    store.push(arr[i], count);
  }
  console.log(store);
};
let arr = ["a", "a", "b", "b", "c", "c", "c"];
// [a,2,b,2,c,3]
countAndSay(arr);
