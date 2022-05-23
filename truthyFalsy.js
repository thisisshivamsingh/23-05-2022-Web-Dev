// //== double equals // loose comparison
// const check = 2 == "2";
// console.log(check);

// //=== triple equals // strong comparison
// const check2 = 2 === "2";
// console.log(check2);

// let a = 2;

// if (a) {
//   console.log("Yes Equal");
// } else {
//   console.log("no Not Equal");
// }

function testTruthyFalsy(val) {
  return val ? console.log("truthy") : console.log("falsy");
}
////// Falsy /////
// testTruthyFalsy(false);
// testTruthyFalsy("");
// testTruthyFalsy(0);
// testTruthyFalsy(null);
// testTruthyFalsy(NaN);
// testTruthyFalsy(undefined);
///// Truthy /////
// testTruthyFalsy(4);
// testTruthyFalsy({});
// testTruthyFalsy([]);
// testTruthyFalsy(function a() {});
// const a = 2;
// const a = " ";
// testTruthyFalsy(a);
// testTruthyFalsy(new Boolean(false));
