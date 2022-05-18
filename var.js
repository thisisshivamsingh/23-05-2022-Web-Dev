// // 2015 es6
// // hoisting
// console.log("line number 3", varName);
// // declare
// var varName;
// // assign
// varName = 10;
// console.log("line number 8", varName);
// // reassign
// varName = 20;
// console.log("line number 11", varName);
// var varName;
// console.log("line number 13", varName);

// function fn() {
//   console.log(a);
//   var a = 10;
//   console.log(a);
//   if (a == 10) {
//     var a = 20;
//     console.log(a);
//   }
//   console.log(a);
// }
// fn();

// var a = 10;
// console.log("line number 28", a);
// function fn() {
//   console.log("line number 30", a);
//   var a = 20;
//   a++;
//   console.log("line number 33", a);
//   if (a) {
//     var a = 30;
//     a++;
//     console.log("line number 37", a);
//   }
//   console.log("line number 39", a);
// }
// fn();
// console.log("line number 42", a);

let letFruit = "orange";
var varFruit = "orange";
console.log("leftFruit", letFruit, "varFruit", varFruit);
{
  let letFruit = "apple";
  var varFruit = "apple";
  console.log("leftFruit", letFruit, "varFruit", varFruit);
}
console.log("leftFruit", letFruit, "varFruit", varFruit);
