const colors = ["red", "blue"];

const data = [
  {
    id: 1,
    color: "red",
    name: "John",
    city: "New York",
  },    
  {
    id: 2,
    color: "blue",
    name: "Emily",
    city: "Los Angeles",
  },
  {
    id: 3,
    color: "green",
    name: "Michael",
    city: "Chicago",
  },
  {
    id: 4,
    color: "olive",
    name: "Sophia",
    city: "Houston",
  },
];
// 1 
const newColor = data.filter((element) => colors.includes(element.color));
console.log(newColor)

// 2
// const newColor = data.filter(function (element) {
//   return colors.includes(element.color);
// });

// 3
// function color(colors, data) {
//   const newColor = [];

//   for (let element of data) {
//     if (colors.includes(element.color)) {
//       newColor.push(element);
//     }
//   }

//   return newColor;
// }
// console.log(newColor);
