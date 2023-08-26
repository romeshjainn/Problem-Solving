let store = [];
const countAndSay = (arr) => {
  let same = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] == arr[i + 1]) {
          same.push(arr[i], arr[i + 1]);
          break;
        }
    }
    for (let j = 0; j < 1; j++){
        let count = 1;
        if (same[j] == same[j + 1]) {
            count++;
        }
        else {
            store.push(same[j]);
        }
        store.push(same[j], count);
        
        // for (let k = 0; k < same.length; k++){

        // }
    }
  console.log(same);
  console.log(store);
};
let arr = ["a", "a", "b", "b", "c", "c", "c"];
// [a,2,b,2,c,3]

countAndSay(arr);
