// const arr = [1, 2, 3, 4];
// const person = {
//   name: "Steve",
//   age: 25,
//   showDetails: function () {
//     console.log(this.name + " " + this.age);
//   },
// };

const person1 = {
  name: "Adam",
  age: 25,

  showDetails: function () {
    console.log(this.name + " " + this.age);
  },
};
// person1.showDetails();
const person2 = {
  name: "Steve",
};
person2.__proto__ = person1;

// console.log(person2.name + " " + person2.age);
person2.showDetails();
