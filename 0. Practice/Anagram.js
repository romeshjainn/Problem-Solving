let name = "naman";
let surname = "manan";

function anagram(name, surname) {
  let holder = {};
  for (character of name) {
    holder[character] = (holder[character] || 0) + 1;
  }

  for (character of surname) {
    if (!holder[character]) {
      return false;
    }
    holder[character]--;
  }
  return true;
}

console.log(anagram(name, surname));
