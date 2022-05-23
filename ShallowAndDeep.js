// const arr = [1, 2, 3, 4];
// const copyArr = arr;
// copyArr[1] = 4;
// console.log(arr);
// console.log(copyArr);

// Spread Operator Method //Shallow copies
// const sports = [
//   "Cricket",
//   "Football",
//   "Swimming",
//   { a: "hockey", b: "Tennis" },
// ];
// const copySports = [...sports];
// copySports[1] = "Baseball";
// copySports[3]["a"] = "BasketBall";

// console.log("Original Sports Array", sports);
// console.log("Copy Sports Array", copySports);

// Shallow copy from the Array.from method
// const sports = [
//   "Cricket",
//   "Football",
//   "Swimming",
//   { a: "hockey", b: "Tennis" },
// ];
// const copySports = Array.from(sports);
// copySports[1] = "Baseball";
// copySports[3]["a"] = "BasketBall";

// console.log("Original Sports Array", sports);
// console.log("Copy Sports Array", copySports);

// shallow copy with slice method
// const sports = [
//   "Cricket",
//   "Football",
//   "Swimming",
//   { a: "hockey", b: "Tennis" },
// ];
// const copySports = sports.slice(0);
// copySports[1] = "Baseball";
// copySports[3]["a"] = "BasketBall";

// console.log("Original Sports Array", sports);
// console.log("Copy Sports Array", copySports);

// Deep Copy
const sports = [
  "Cricket",
  "Football",
  "Swimming",
  { a: "hockey", b: "Tennis" },
];
const copySports = JSON.parse(JSON.stringify(sports));
copySports[1] = "Baseball";
copySports[3]["a"] = "BasketBall";

console.log("Original Sports Array", sports);
console.log("Copy Sports Array", copySports);
