let name = "nitin";

function removeDuplicateChar(name) {
  let characterSet = {};
  let result = "";

  for (let i = 0; i < name.length; i++) {
    let character = name[i];
    if (!characterSet[character]) {
      characterSet[character] = true;
      result += character;
    }
  }

  console.log(result);
}

removeDuplicateChar(name); // Output: "nit"
