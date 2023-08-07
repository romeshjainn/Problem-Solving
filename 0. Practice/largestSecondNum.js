function character(str) {
  outerLoop: for (let i = 0; i < str.length; i++) {
    const current = str[i];

    for (let j = i + 1; j < str.length; j++) {
      const last = str[j];
      if (current === last) {
        continue outerLoop;
      }
    }

    return current;
  }

  return null;
}

const str = "cbcbdde";
console.log(character(str));
