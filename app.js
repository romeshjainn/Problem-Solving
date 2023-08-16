Akash Zawar7:09 PM
brb
Vidhya Skill School7:27 PM
A boy and a doctor were fishing. The boy is the doctor's son, but the doctor isn't the boy's father. Who is the doctor?
Vidhya Skill School7:29 PM
name
nAme
Name
Vidhya Skill School7:31 PM
const nameObject = {
  name: "John Smith",
  nAme: "Emily Johnson",
  Name: "Michael Brown"
};

console.log(nameObject);
Vidhya Skill School7:35 PM
Object.keys(obj)
Chirag Arora7:35 PM
DOne
Sonia Navale7:35 PM
brb
Akash Zawar7:41 PM
[1,3,5,2,6,7,4]
Nitin Chugh7:51 PM
[3,2,1,5,6,4]
Gunjan Bajaj7:52 PM
brb
Sonia Navale7:53 PM
brb
Vidhya Skill School8:04 PM
arr[index] = arr[index] || 0 + 1
Sushmitha Bhat8:05 PM
const array = [1, 3, 5, 2, 6, 7, 4];
const obj = {};

for (let i = 0; i < array.length; i++) {
  obj[i] = array[i];
}

console.log(obj);
Vidhya Skill School8:07 PM
const array = [1, 3, 5, 2, 6, 7, 4];
const obj = {};

for (let i = 0; i < array.length; i++) {
  obj[i] = obj.hasOwnPropery(i) ? obj[i]++ : 1;
}

console.log(obj);
const array = [1, 3, 5, 2, 6, 7, 4];
const obj = {};

for (let i = 0; i < array.length; i++) {
  obj[i] = obj.hasOwnPropery(i) ? obj[i] + 1 : 1;
}

console.log(obj);
Sushmitha Bhat8:14 PM
obj[i] = obj.hasOwnPropery(i) ? obj[i] + 1 : 1;
               ^

TypeError: obj.hasOwnPropery is not a function
Sonia Navale8:17 PM
brb