const fs = require("fs");
const fileRead1 = fs.promises.readFile("./f1.txt");
// console.log(fileRead1);
const fileRead2 = fs.promises.readFile("./f2.txt");
const fileRead3 = fs.promises.readFile("./f3.txt");

fileRead1.then((data) => {
  console.log("data -> " + data);
});
fileRead2.then((data) => {
  console.log("data -> " + data);
});
fileRead3.then((data) => {
  console.log("data -> " + data);
});
