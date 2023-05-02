//Normally how we add👇
// const Addition = (a, b, c) => {
//   return a + b + c;
// };
// let res = Addition(2,3,4)
// console.log(res)

//By using currying👇
const Addition = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

// let res = Addition(2)
// let res2 = res(3)
// let res3 = res2(4)
let res = Addition(2)(3)(4); //simple method
console.log(res);



//Infinite currying👇

const add = (a) => {
  return (b) => {
    if (b) return add(a + b);
    return a;
  };
};

console.log(add(2)(3)(4)(5)());
