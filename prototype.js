// Array.prototype.myFunction = function () {
//   console.log(this);
// };
// let arr = [1, 3, 4, 7];
// arr.myFunction();

// Array.prototype.myMap = function (cb) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(cb(this[i]));
//   }
//   return newArr;
// };

// function square(x) {
//   return x * x;
// }

// let arr = [1, 2, 3, 4];
// let mappedArr = arr.myMap(square);
// console.log(mappedArr);

Array.prototype.myFilter = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) newArr.push(this[i]);
  }
  return newArr;
};

function isEven(x) {
  return x % 2 === 0;
}

let arr = [1, 2, 3, 4, 16, 18, 9, 7];
let filteredArr = arr.myFilter(isEven);
console.log(filteredArr);
