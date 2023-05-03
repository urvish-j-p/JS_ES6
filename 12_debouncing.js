let counter = 0;

const getData = () => {
  console.log("Fetching data...:" + counter++);
};

const myDebounce = (call, d) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      call();
    }, d);
  };
};

const betterFunction = myDebounce(getData, 1000);
