function flattenObj(obj, parent, res = {}) {
  for (let key in obj) {
    const propName = parent ? parent + "_" + key : key;
    if (typeof obj[key] == "object") {
      flattenObj(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
}
const obj = {
  name: "Adam",
  age: 20,
  address: {
    city: "Noida",
    pincode: 210309,
  },
};
console.log(flattenObj(obj));
