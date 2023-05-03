//Shallow copy👇

var myDetails = {
    name: "Urvish",
    age: 25,
    expertise: "Software Developer",
  };

var ShallowCopy = myDetails; //Shallow copying!

ShallowCopy.name = "Priyank";

console.log(myDetails)  
//name will change to Priyank so shallow copy will effect the original object



//Deep copy👇

var myDetails2 = {
    name: "Urvish",
    age: 25,
    expertise: "Software Developer",
  };

var DeepCopy = {
    name: myDetails2.name,
    age: myDetails2.age,
    expertise: myDetails2.expertise,
  };

DeepCopy.name = "Priyank";
console.log(myDetails2)
//name will not change to Priyank so deep copy will not effect the original object
