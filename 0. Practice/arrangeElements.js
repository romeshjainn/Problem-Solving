let arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0];

function arrangeArr(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[0] !== arr[i]) {
            newArr.push(arr[i])
        }
    }
    for (let i = 0; i < arr.length; i++){
        if (arr[0] == arr[i]) {
            newArr.push(arr[i])
        }
    }
    console.log(newArr);
}
arrangeArr(arr);