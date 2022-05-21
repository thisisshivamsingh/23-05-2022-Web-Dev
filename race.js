// const p1 = new Promise(function (resolve, reject) {
//   reject("Promise 1 is rejected");
// });
// const p2 = new Promise(function (resolve, reject) {
//   reject("Promise 2 is resolved");
// });
// const p3 = new Promise(function (resolve, reject) {
//   resolve("Promise 3 is resolved");
// });

// Promise.race([p1, p2, p3])
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise 1 is resolved");
  }, 500);
});
const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise 2 is resolved");
  }, 1000);
});
Promise.race([p1, p2]).then((val) => {
  console.log(val);
});
