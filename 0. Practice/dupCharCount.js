let str = "adsjfdsfsfjsdjfhacabcsbajda";
function charCount(str) {
    let obj = {};
    let currentChar = "";
    for (let i = 0; i < str.length; i++) {
        currentChar = str[i];
        obj[currentChar] = (obj[currentChar] || 0) + 1;

    }
    console.log(obj)
}

charCount(str);