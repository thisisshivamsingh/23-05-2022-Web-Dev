const fs = require("fs");

/////////////// PARALLEL /////////////////
// console.log("Before");
// fs.readFile("f1.txt", cb);
// fs.readFile("f2.txt", cb1);
// fs.readFile("f3.txt", cb2);
// function cb(err, content) {
//   console.log("Content" + content);
// }
// function cb1(err, content) {
//   console.log("Content" + content);
// }
// function cb2(err, content) {
//   console.log("Content" + content);
// }
// console.log("After");

/////////////// SERIES /////////////////
console.log("Before");
fs.readFile("f1.txt", cb);
function cb(err, content) {
  console.log("Content" + content);
  fs.readFile("f2.txt", cb1);
  function cb1(err, content) {
    console.log("Content" + content);
    fs.readFile("f3.txt", cb2);
    function cb2(err, content) {
      console.log("Content" + content);
    }
  }
}
console.log("After");
