let person1 = {
  name: "Adam",
  age: 25,
  //   showDetails: function () {
  //     console.log(this.name + " is " + this.age + " years old");
  //   },
};

let person2 = {
  name: "Steve",
  age: 20,
};

// person1.showDetails();
// person2.showDetails();
let showDetails = function (city, car) {
  console.log(
    `${this.name} is ${this.age} years old, he lives in ${city} and he drives ${car}`
  );
};
// function borrowing
// person1.showDetails.call(person2);
// showDetails.call(person2, "Delhi", "Mercedes");
// showDetails.apply(person2, ["Noida", "BMW"]);
const showDetailsBind = showDetails.bind(person2, "Noida", "BMW");
showDetailsBind();
