const obj = {
  name: "Urvish",
  getName: function () {
    return this.name;
  },
  getRoll: function () {
    return this.roll;
  },
};
console.log(obj);

const obj2 = {
  roll: 1,
  __proto__: obj,
};
console.log(obj2.getRoll());

const obj3 = {
  class: "MCA",
  __proto__: obj2,
};
console.log(obj3);
