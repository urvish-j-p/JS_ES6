const sum = (a) => {
  console.log("Live Viewers: " + a);

  let c = 4;
  return function (b) {
    return a + b + c;
  };
};
let store = sum(2);
console.log(store(5));
