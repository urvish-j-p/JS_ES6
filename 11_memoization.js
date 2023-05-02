//Memoization is an optimization technique that can be used to reduce time consuming calculations by saving previous input to something called cache and returning the result from it.

let sum = 0;
const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const memoize = (fun) => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    } else {
      console.log("Calculating 1st time");
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  };
};

//1st time
console.time();
const efficient = memoize(calc)
console.log(efficient(5))
console.timeEnd();

//2nd time it will fetch from the cache
console.time();
console.log(efficient(5))
console.timeEnd();


