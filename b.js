function check(a) {
  let b = a.split("");
  for (let i = 0; i < b.length; i++) {
    if (b.length > 0) {
      if ("[" == b[i]) {
        b.includes("]");
        //   return true;
      } else if ("{" == b[i]) {
        b.includes("}");
        //   return true;
      } else if ("(" == b[i]) {
        b.includes(")");
        //   return true;
      }
      return true;
    } else {
      return false;
    }
  }
}
let a = "[{}]";
