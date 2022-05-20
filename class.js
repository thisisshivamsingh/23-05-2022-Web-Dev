class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showDetails() {
    return this.name;
  }
}
class PersonChild extends Person {
  constructor() {
    super("Steve");
  }
}
// const person1 = new Person("Adam", 23);
// console.log(person1);
const person1 = new PersonChild();
console.log(person1.showDetails());
