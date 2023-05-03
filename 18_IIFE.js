// IIFE(Immediately Invoked Function Expression)

// (function () {
//     // logic here
//   })();

(function () {
  var message = "IIFE";
  console.log(message);
})();

console.log(message); //Error: message is not defined
//we cannot access variable outside the IIFE function
