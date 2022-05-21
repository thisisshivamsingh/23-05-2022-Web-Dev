const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function customPromise(executor) {
  let state = PENDING;
  let value = null;
  let handlers = [];
  let catchers = [];

  function resolve(result) {
    if (state !== PENDING) return;
    state = FULFILLED;
    value = result;
    handlers.forEach((h) => h(value));
  }
  function reject(err) {
    if (state !== PENDING) return;
    state = REJECTED;
    value = result;
    catchers.forEach((c) => h(value));
  }
  this.then = function (SuccessCallback) {
    if (state === FULFILLED) {
      SuccessCallback(value);
    } else {
      handlers.push(SuccessCallback);
    }
  };
  this.catch = function (failureCallback) {
    if (state === REJECTED) {
      failureCallback(value);
    } else {
      catchers.push(failureCallback);
    }
  };
  executor(resolve, reject);
}

const doWork = (res, rej) => {
  if (2 == 2) {
    setTimeout(() => {
      res("Promise Resolved Hello");
    }, 1000);
  } else {
    setTimeout(() => {
      rej("Promise Rejected Bye");
    }, 1000);
  }
};

const greetMsg = new customPromise(doWork);

greetMsg.then((val) => {
  console.log("then log", val);
});
greetMsg.catch((val) => {
  console.log("catch log", val);
});
