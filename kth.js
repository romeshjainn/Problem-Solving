// let nums = [1, 3, 7, 4, 5, -1, 7, -8, -3];
let nums = [1, 2, 3, 4, 4, -1, -8, -3];
let k = 3;
let positive = [];
let negative = [];

const kth = (nums, k) => {
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] >= 0) {
      positive.push(null);
      if (!positive[nums[i]]) {
        positive[nums[i]] = 1;
      } else {
        positive[nums[i]] += 1;
      }
    }
    else {
        negative.push(null)
        console.log(nums[i]);
        if (!positive[nums[i]]) {
          positive[nums[i]] = 1;
        } else {
          positive[nums[i]] += 1;
        }
        
      }
  }
  console.log(negative);
};
kth(nums, k);
