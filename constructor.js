// const car1 = {
//   brand: "BMW",
//   model: "X5",
//   color: "White",
// };

// const car2 = {
//   brand: "Mercedes",
//   model: "S Class",
//   color: "Red",
// };

function car(brand, model, color) {
  this.Brand = brand;
  this.Model = model;
  this.Color = color;
  this.drive = function () {
    console.log("I am Driving " + this.Model);
  };
}
const car1 = new car("BMW", "X5", "white"); /// this - {}
const car2 = new car("Mercedes", "S class", "red"); /// this - {}

// car1.Brand = "Jaguar";
// console.log(car1);
// console.log(car2);

car1.drive();
car2.drive();
