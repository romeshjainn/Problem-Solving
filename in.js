function findLongestString(arr) {
  let longestString = null;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      if (!longestString || arr[i].length > longestString.length) {
        longestString = arr[i];
      }
    }
  }

  return longestString;
}
