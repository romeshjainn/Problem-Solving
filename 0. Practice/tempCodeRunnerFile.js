// make a function that will take array as an Input
// run a loop over the array
// then store the first value 
// run a loop and check the occernece 
// if available mark =1 , if not available dont do nothing

let num = [0, 1, 2, 3, 4, 4, 3, 4, 2, 1, 44, 22, 44];

function deleteOccer(num) {
    let afterDeletion = [];
    for (let i = 0; i < num.length; i++) {
        let store = num[i];
        for (let j = 0; j < num.length; j++) {
            if (store === num[j]) {
                let store = num[j];
                afterDeletion.push(store);
            }
        }
    }
    return afterDeletion;
}
console.log(deleteOccer(num));