// impure function
// let a = 9;
// function addNum(b) {
//   console.log("The sum is", a + b);
// }
// addNum(2);
// addNum(2);

// Pure Function
function addNum(a, b) {
  return a + b;
  //   console.log("the sum is", a + b); //side effects
}
console.log(addNum(2, 3));
