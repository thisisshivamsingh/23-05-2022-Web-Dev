///// Function Scope /////
// function calculate(a, b) {
//   let result = a + b;
//   return result;
// }
// console.log(calculate(2, 3));
// console.log(result);

///// Lexical Scoping /////
// function add() {
//   let a = 4;
//   function addChild() {
//     console.log(a + 5);
//   }
//   addChild();
// }
// add();

///// Closure /////
// function add() {
//   let a = 4;
//   function addChild() {
//     console.log(a + 5);
//   }
//   return addChild;
// }
// let catchAdd = add();
// console.log(catchAdd);
// catchAdd();

