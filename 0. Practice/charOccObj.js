let str = "abcabc";
let store = {};
for (let i = 0; i < str.length; i++){
    store[str[i]] = (store[str[i]] || 0) + 1
}
console.log(store);