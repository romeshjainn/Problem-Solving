
const isValid = (brackets) => {
  let opening = ["{", "(", "["];
  let closing = ["}", ")", "]"];
  let store = [];

  for (let i = 0; i < brackets.length; i++) {
    let current = brackets[i];

    if (opening.includes(current)) {
      store.push(current);
      
      console.log(store);
    }
    else if (closing.includes(current)) {
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
  console.log("store", store);
};

const brackets = "{{}()[]}";
console.log(isValid(brackets));
