// make a function which will take array as an array
// Iterate a loop over the array
// store the value of i to a new variable
// make an if statement and pass the element to the object
// so as the loop will if will increment the object by i
// return the occerence to the Object.occurence
// { 1: 3, 2: 1, 3: 2, 4: 4, 5: 1, 5: 1 }
// hasOwnProperty
const occurenceCount = (input) => {
    const mapping = {};

    for (let i = 0; i < input.length; i++) {
        const chiragKiKey = input[i];

        if (mapping.hasOwnProperty(chiragKiKey)) {
            mapping[chiragKiKey] = mapping[chiragKiKey] + 1; // 2 + 1
        } else {
            mapping[chiragKiKey] = 1;
        }
    }
    // using ternary 
    // for (let i = 0; i < input.length; i++) {
    //     const chiragKiKey = input[i];

    //     mapping.hasOwnProperty(chiragKiKey)
    //         ? mapping[chiragKiKey]++
    //         : (mapping[chiragKiKey] = 1);
    // }

    return mapping;
};

console.log(occurenceCount([1, 2, 3, 4, 1, 3, 4, 6, 1, 5]));

