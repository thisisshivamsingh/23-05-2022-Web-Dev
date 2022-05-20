// function greet(personName) {
//   const msg = "Hello " + personName;
//   console.log(msg);
// }
// greet("Steve");

////////// Synchronous Callbacks ///////////
// function greet(personName, age, callback, callback2) {
//   const msg = "Hello " + personName;
//   const ageOfPerson = age;
//   callback(msg);
//   callback2(ageOfPerson);
// }

// function logGreeting(greeting) {
//   console.log(greeting);
// }

// function showAge(age) {
//   console.log(age);
// }

// greet("Steve", 25, logGreeting, showAge);

///////// Asynchronous Callbacks //////////
console.log("Hello");

setTimeout(function st1() {
  console.log("I am st1");
}, 2000);

setTimeout(function st2() {
  console.log("I am st2");
}, 1000);

function sayBye() {
  console.log("bye");
}
sayBye();
