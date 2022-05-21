let loader = true;
function test() {
  const a = 1 + 1;
  return new Promise(function (resolve, reject) {
    if (a === 2) {
      resolve("Promise Resolved Yessssss");
    } else {
      reject("Promise Rejected Nooooooo");
    }
  });
}

test()
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    loader = false;
  });
