let str = "nitin";

function palidrome(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  console.log(reverseStr);
  if (str === reverseStr) {
    console.log(str, "is a palidrome word");
  }
}
palidrome(str);
