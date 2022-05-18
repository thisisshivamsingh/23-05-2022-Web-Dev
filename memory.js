// fxn inside ❌ -> global object
// window
// console.log(global);
// console.log(this);
// console.log("a is", a);
// var a;
// console.log("a is", a);
// a = 1;
// console.log("a is", a);
// function statements
// fn();
// function fn() {
//   console.log("I can be called before my declaration");
// }
// fn();
// real();
// function real() {
//   console.log("I am real. Always run me");
// }
// function real() {
//   console.log("😲 No I am real one");
// }
// function real() {
//   console.log("You both are wasted 😂😂😂");
// }
// console.log("varName", varName);
// var varName;
// console.log("varName", varName);
// varName = "Captain America";
// console.log("varName", varName);
// fn();
// function fn() {
//   console.log("Hello from fn");
// }
// fn();
// fnContainer();
// const fnContainer = function () {
//   console.log("I am an Expression");
// };
// fnContainer();
console.log("line number 1", varName);
var varName = 10;
// fn b definition
function b() {
  console.log("line number 5", varName);
}
console.log("line number 7", varName);
function fn() {
  console.log("line number 9", varName);
  var varName = 20;
  // from fn
  b();
  console.log("line number 13", varName);
}
fn();
