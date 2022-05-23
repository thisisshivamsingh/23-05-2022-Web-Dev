// (function immediateA(a) {
//   return (function immediateB(b) {
//     console.log(a); // What is logged?
//   })(1);
// })(0);

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();

// function createIncrement() {
//   let count = 0;
//   function increment() {
//     count++;
//   }
//   let message = `Count is ${count}`;
//   function log() {
//     console.log(message);
//   }
//   return [increment, log];
// }
// const [increment, log] = createIncrement();
// increment();
// increment();
// increment();
// log(); // What is logged?

// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged?
//   }, 1000);
// }
// for (let i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged?
//   }, 1000);
// }
for (var i = 0; i < 3; i++) {
  delay(i);
}
function delay(i) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}
