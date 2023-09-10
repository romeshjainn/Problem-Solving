// const last = (n) => {
//     if (n < 0) {
//         return -1;
//     }
//     let last = n[n.length - 1];
//     return last;
// }
// let arr = ["()", 1, "]"]
// console.log(last(arr));

Array.prototype.last = function () {
  if (this.length < 0) {
    return -1;
  } else {
    return this[this.length - 1];
  }
};
// https://leetcode.com/problems/array-prototype-last/submissions/
// https://leetcode.com/problems/return-length-of-arguments-passed/submissions/