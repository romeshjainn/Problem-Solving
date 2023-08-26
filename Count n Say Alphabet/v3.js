let store = [];
const countAndSay = (arr) => {
  let same = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      same.push(arr[i], arr[i + 1]);
      i++; 
    }
  }

  let count = 1;
  for (let j = 0; j < same.length; j += 2) {
    if (same[j] == same[j + 2]) {
      count++;
    } else {
      store.push(same[j]);
    }
    store.push(same[j], count);
  }

  for (let k = same.length - 1; k >= 0; k--) {
    if (arr[k] === same[k]) {
      arr.splice(k, 1);
      same.splice(k, 1);
      }
    else {
        arr.splice(k, 1);
        same.splice(k, 1);
      }
  }

  console.log(arr);
  console.log(same);
  console.log(store);
};

let arr = ["a", "a", "b", "b", "c", "c", "c"];
// [a,2,b,2,c,3]

countAndSay(arr);
