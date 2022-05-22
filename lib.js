function updateAccount(product, cb) {
  setTimeout(() => {
    console.log(product + " purchased");
    cb();
    // Security Issue
  }, 2000);
}

function promiseUpdateAccount(product) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    });
  });
}

module.exports = {
  updateAccount: updateAccount,
  promiseUpdateAccount: promiseUpdateAccount,
};
