////////// this keyword in node without strict mode //////////

// console.log(this); // returns an empty object

// function showThis() {
//   console.log(this); // returns global object
// }
// showThis();

// let obj = {
//   name: "adam",
//   f: function () {
//     console.log(this);
//   },
// };
// obj.f();

// let obj = {
//   name: "adam",
//   f: function () {
//     function g() {
//       console.log(this);
//     }
//     g();
//   },
// };
// obj.f();

////////// this keyword in node with strict mode /////////

// "use strict";
// let a = 3;
// console.log(a);

// console.log(this); // returns an empty object

// function showThis() {
//   console.log(this); // returns undefined
// }
// showThis();

// let obj = {
//   name: "adam",
//   f: function () {
//     console.log(this);
//   },
// };
// obj.f();

// let obj = {
//   name: "adam",
//   f: function () {
//     function g() {
//       console.log(this);
//     }
//     g();
//   },
// };
// obj.f();

////////// this keyword in browser without strict mode //////////

// console.log(this);

// function showThis() {
//   console.log(this);
// }
// showThis(); // window object

// let obj = {
//   name: "Adam",
//   f: function () {
//     console.log(this);
//   },
// };
// obj.f();

// let obj = {
//   name: "Adam",
//   f: function () {
//     function g() {
//       console.log(this);
//     }
//     g();
//   },
// };

// obj.f();

////////// this keyword in browser with strict mode //////////

"use strict";
// let a = 3;
// console.log(a);

// console.log(this);

// function showThis() {
//   console.log(this);
// }
// showThis(); // window object

// let obj = {
//   name: "Adam",
//   f: function () {
//     console.log(this);
//   },
// };
// obj.f();

// let obj = {
//   name: "Adam",
//   f: function () {
//     function g() {
//       console.log(this);
//     }
//     g();
//   },
// };

// obj.f();
