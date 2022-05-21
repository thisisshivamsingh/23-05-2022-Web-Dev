const fs = require("fs").promises;
const fileRead1 = fs.readFile("./f1.txt");

function cb1(data) {
  console.log("content -> " + data);
  const fileRead2 = fs.readFile("./f2.txt");
  return fileRead2;
}

function cb2(data) {
  console.log("content -> " + data);
  const fileRead3 = fs.readFile("./f3.txt");
  return fileRead3;
}

function cb3(data) {
  console.log("content -> " + data);
}
fileRead1
  .then(cb1)
  .then(cb2)
  .then(cb3)
  .catch((err) => {
    console.log("error");
  });
