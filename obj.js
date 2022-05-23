const obj = {
  name: "Adam",
  age: 25,
};

// const newObj = obj;
// newObj.name = "Steve";
// console.log(obj);
// console.log(newObj);

//Shallow copy
// const newObj = { ...obj };
// newObj.name = "Steve";
// console.log(obj);
// console.log(newObj);

const person = {
  name: "Shivam",
  age: 23,
  hobbies: ["sports", "coding", "music"],
};

// Deep copy

// const newPerson = JSON.parse(JSON.stringify(person));
// newPerson.age = 40;
// newPerson.hobbies[0] = "dancing";

// console.log(person);
// console.log(newPerson);

// Shallow copy

// const newPerson = Object.assign({}, person); // Shallow copy
// newPerson.age = 40;
// newPerson.hobbies[1] = "Programming";
// console.log(person);
// console.log(newPerson);

const newPerson = { ...person }; // shallow copy
newPerson.age = 40;
newPerson.hobbies[1] = "Programming";
console.log(person);
console.log(newPerson);
