///////////////// Parallel Promise ///////////////
// const fs = require("fs").promises;
// console.log("before");
// const arr = ["./f1.txt", "./f2.txt", "./f3.txt", "./f4.txt"];

// for (let i = 0; i < arr.length; i++) {
//   const fileReadPromise = fs.readFile(arr[i]);
//   fileReadPromise.then(cb);
// }

// function cb(data) {
//   console.log("content -> " + data);
// }

// console.log("after");
/////////////// Series Promise ////////////////
const fs = require("fs").promises;
console.log("before");
const arr = ["./f1.txt", "./f2.txt", "./f3.txt", "./f4.txt"];

let fileReadPromise = fs.readFile(arr[0]);
for (let i = 1; i < arr.length; i++) {
  fileReadPromise = fileReadPromise.then((data) => {
    console.log("content -> " + data);
    return fs.readFile(arr[i]);
  });
}
fileReadPromise.then((data) => {
  console.log("content -> " + data);
});
console.log("after");
