let array = "i evol u so much";
let num = array.split(" ");
let store = "";
for (let i = 0; i < num.length; i++){
    
    for (let j = num[i].length - 1; j <= 0; j--){
        store += num[j];
    }
    console.log(store)
}
https://plainenglish.io/blog/javascript-coding-practice-challenges-strings-f2c9a98e8e5e#solutions
