let nums = [1, 2, 3, 4, 4, -1, -8, -3];
let k = 7;
let positive = [];
let negative = [];

const kth = (nums, k) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      if (!positive[nums[i]]) {
        positive[nums[i]] = 1;
      } else {
        positive[nums[i]] += 1;
      }
    } else {
      if (!negative[-nums[i]]) {
        negative[-nums[i]] = 1;
      } else {
        negative[-nums[i]] += 1;
      }
    }
  }

  let count = 0;
  for (let j = positive.length - 1; j >= 0; j--) {
    if (positive[j] !== undefined) {
      count += positive[j];
      if (count >= k) {
        console.log(j);
        return;
      }
    }
  }

  for (let j = negative.length - 1; j >= 0; j--) {
    if (negative[j] !== undefined) {
      count += negative[j]; 
      if (count >= k) {
        console.log(-j);
        return;
      }
    }
  }
};

kth(nums, k);
