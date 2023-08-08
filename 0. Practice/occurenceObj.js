// make a function that will take object as an argument
// declare a temp object and key variable
// store the iterated value we get to the key variable
// make an if else statement where we will use.hasOwnProperty so if the key is there it will increment 
// and if it is not there i will make one
// return mapping

const names = [
    "ankit",
    "chirag",
    "mitesh",
    "mahesh",
    "ankit",
    "sanket",
    "Sanket",
];

const countNames = (input) => {
    let mapping = {};
    for (let i = 0; i < names.length; i++) {
        const key = input[i].toLowerCase();

        if (mapping.hasOwnProperty(key)) {
            mapping[key]++;
        }
        else {
            mapping[key] = 1;
        }
    }
    return mapping;
};

console.log(countNames(names));
// Output -  {"ankit": 2, "chirag": 1, "mitesh": 1, "mahesh": 1, "sanket" : 2}
