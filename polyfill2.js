// set Interval ka Polyfill

function createSetInterval() {
  let intervalID = 0;
  let intervalMap = {};

  function setIntervalPolyfill(callback, delay = 0, ...args) {
    let id = intervalID++;

    function repeat() {
      intervalMap[id] = setTimeout(() => {
        callback(...args);
        if (intervalMap[id]) {
          repeat();
        }
      }, delay);
    }
    repeat();
    return id;
  }

  function clearIntervalPolyfill(intervalId) {
    clearTimeout(intervalMap[intervalID]);
    delete intervalMap(intervalID);
  }
  return {
    setIntervalPolyfill,
    clearIntervalPolyfill,
  };
}

let counter = 0;
let intervalId;

function greeting() {
  counter++;
  console.log("hiii");
  if (counter >= 3) {
    clearIntervalPolyfill(intervalId);
  }
}
intervalId = setIntervalPolyfill(greeting, 2000);
