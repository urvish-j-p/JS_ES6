let names = ["Urvish", "Priyank", "Deep"];

const getNames = (name1, name2, name3) => {
  console.log(name1,name2,name3);
};
// getNames(names[0], names[1], names[2]);
getNames(...names);   //easy method by using spread operator


// Spread operator with object

let students = {
    name: "Urvish",
    age:"21",
    hobbies:["Cricket","Coding"]
  }

let newStudent = {
    ...students,
    age:"22"
}

console.log(newStudent)


//another simple example

const a = [1,2,3];
const b = [3,4,5];
const c = [...a , ...b];
console.log(c); // [1, 2, 3, 3, 4, 5]
