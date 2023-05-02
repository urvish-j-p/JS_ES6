let userDetails = {
  name: "Urvish",
  age: 21,
  designation: "Software Engineer",
};

let userDetails2 = {
    name: "Priyank",
    age: 20,
    designation: "Software Engineer",
  };

let printDetails = function (state, country) {
  console.log(this.name + " is from " + state + ", " + country);
};

printDetails.call(userDetails, "Ahmedabad", "India");  //call

printDetails.call(userDetails2, "Baroda", "India"); //call

printDetails.apply(userDetails2, ["Baroda", "India"]); //apply
//in apply we have to pass arguments as an array list


let newFunc = printDetails.bind(userDetails, "Ahmedabad", "India");  //bind
newFunc();
//It's similar to call but in bind we can not call function directly...we have to make copy of it and we can invoke/call it later on whenever it is needed.
