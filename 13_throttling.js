const mythrottle = (fn, d) => {
  return function (...args) {
    document.getElementById("myid").disabled = true;
    setTimeout(() => {
      fn();
    }, d);
  };
};

const newFun = mythrottle(() => {
  document.getElementById("myid").disabled = false;
  console.log("User Clicked!");
}, 3000);
