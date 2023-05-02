//We can call function and use variables even before declaring it and that is the hoisting and it is JS's default behaviour

getName()
console.log(a)

var a = 5;

function getName() {
  console.log("Urvish");
};

