const person1 = {
  name: "Adam",
  age: 25,
};

const showDetails = function (city, state) {
  console.log(this.name + " " + this.age + " " + city + " " + state);
};
const showDetailsBind = showDetails.bind(person1, "Noida");
showDetailsBind("UP");

Function.prototype.myBind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

const showDetailsMyBind = showDetails.myBind(person1, "Lucknow");
showDetailsMyBind("UP");
