function deleteOccur(num) {
    let afterDeletion = [];
    for (let i = 0; i < num.length; i++) {
        let store = num[i];
        let alreadyAdded = false;
        for (let j = 0; j < i; j++) {
            if (store === num[j]) {
                alreadyAdded = true;
                break;
            }
        }
        if (!alreadyAdded) {
            afterDeletion.push(store);
        }
    }
    return afterDeletion;
}

let num = [22, 0, 1, 2, 3, 4, 4, 3, 4, 2, 1, 44, 22, 44];
console.log(deleteOccur(num));
