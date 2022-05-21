// const p1 = Promise.resolve("Promise Resolved").then((val) => {
//   console.log(val);
// });
const p1 = Promise.reject("Promise Rejected").catch((val) => {
  console.log(val);
});
