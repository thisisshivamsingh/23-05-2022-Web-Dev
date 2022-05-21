const p1 = new Promise(function (resolve, reject) {
  resolve("Promise 1 is resolved");
});
const p2 = new Promise(function (resolve, reject) {
  reject("Promise 2 is rejected");
});
const p3 = new Promise(function (resolve, reject) {
  resolve("Promise 3 is resolved");
});

const promiseAll = Promise.all([p1, p2, p3]);
// console.log(promiseAll);
promiseAll
  .then((PromiseArr) => {
    console.log(PromiseArr);
  })
  .catch((err) => {
    console.log(err);
  });
