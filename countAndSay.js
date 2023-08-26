// arr.push(i);
// compare i == 1 + 1
// sum 1 and i + 1
// arr.push(sum)
// arr.push(i)
let arr = [1, 1];
const countAndSay = (n) => {
  for (let i = 0; i < n; i++) {
    let store = 0;
    let current = arr[i];
    let current2 = arr[i + 1];

    if (current == current2) {
      store = current + current2;
      arr.push(store);
      arr.push(current);
      continue;
    }
    if (current !== current2 && arr.length == 0) {
      arr.push(current);
      arr.push(current);
        continue;
    }
  }
  console.log(arr);
};
let n = 6;
countAndSay(n);

// let store = 0;
// const countAndSay = (n) => {
//   let num = [1];
//   let arr = [];

//   for (let i = 1; i <= n; i++) {
//     let current = num[i];
//     let current2 = num[i + 1];
//     if (current == current2) {
//       store = current + current2;
//       num.push(store, current);
//     //   num.push(store);
//     }
//   }
//   console.log(num);
//   return num;
// };
// let n = 5;
// countAndSay(n);
// console.log(countAndSay(n));
