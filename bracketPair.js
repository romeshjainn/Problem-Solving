// stored all the opening and closing brackets in seprate arrays
// storing the opening brackets, in a new array
// checking if the current element is available in closing bracket array
// popping the store array, storing the index of that array to a new variable
// storing the index of closing bracket in the closing array
// return false if the indexes dont match
// coz the opening and closing bracket's index is same in both arrays
// returing true, if the store array has length of 0, coz we popped the pair

const isValid = (brackets) => {
  let bracket = brackets.split("");
  let opening = ["{", "(", "["];
  let closing = ["}", ")", "]"];
  let store = [];

  for (let i = 0; i < bracket.length; i++) {
    let current = bracket[i];

    if (opening.includes(current)) {
      store.push(current);

      console.log(store);
    } else if (closing.includes(current)) {
      let poppedOpening = store.pop();
      let openingIndex = opening.indexOf(poppedOpening);
      let closingIndex = closing.indexOf(current);
      if (openingIndex !== closingIndex) {
        return false;
      }
    }
  }
  if (store.length == 0) {
    return true;
  }
  else {
    return false;
  }
  // console.log("store", store);
};

// const brackets = "{{}()[]}{";
const brackets = "(([]){})";
console.log(isValid(brackets));
