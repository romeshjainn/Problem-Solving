// const isValid = (brackets) => {
//   let bracket = brackets.split("");
//   let obj = {
//     "{": "}",
//     "(": ")",
//     "[": "]",
//   };

//     for (let i = 0; i < bracket.length; i++) {
//         let current = bracket[i];

//   }
// };
// let brackets = "{}()";
// console.log(isValid)(brackets);
function Valid(s) {
  const empty = [];
  const Pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    if (Pairs[i]) {
      empty.push(i);
    } else {
      if (empty.length === 0 || Pairs[empty.pop()] !== i) {
        return false;
      }
    }
  }
  return empty.length === 0;
}

const input = "()";
if (Valid(input)) {
  console.log("The input string is valid.");
} else {
  console.log("The input string is not valid.");
}