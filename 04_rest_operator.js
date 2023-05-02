//With array

const addNumbers = (a, b, c, ...other) => {
  console.log(other);
  return a + b + c;
};
const res = addNumbers(2, 5, 6, 8, 9);
console.log(res);


//With object

let students = {
  name: "Urvish",
  age:"21",
  hobbies:["Cricket","Coding"]
}

// const age = students.age;
const {age,...other} = students;  //array destrucuring
console.log(other);