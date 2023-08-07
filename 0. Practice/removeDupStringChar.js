// declare a function
// iterate over the string 
// check if the character is repeating using if else
// store the new string to a variable

let str = "rromesh";

function remove(str) {
    let str = "";
    for (let i = 0; i < str.length; i++){
        str += str[i];
        if (str[i] !== str) {
            return str;
        }
        
    }
}
console.log(remove(str));