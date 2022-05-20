// function sayHi() {
//   console.log("Hiiii");
// }
// sayHi();

// function sayHi() {
//   console.log("Hiii");
// }
// setInterval(sayHi, 2000);

let counter = 0;
let intervalId;

function sayHi() {
  counter++;
  console.log("Hiiii");

  if (counter >= 3) {
    clearInterval(intervalId);
  }
}
intervalId = setInterval(sayHi, 2000);
