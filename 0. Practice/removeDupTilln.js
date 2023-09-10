const removeDuplicates = (nums) => {
  let k = nums[nums.length - 1];
  let blankArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      blankArr.push(nums[i]);
    }
  }
//   let space = nums.length - blankArr.length;
//   for (let i = 0; i < space; i++) {
//     blankArr.push("_");
//   }
  return blankArr;
};
let nums = [1, 1, 2];
console.log(removeDuplicates(nums));
