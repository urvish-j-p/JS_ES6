let user = {
    name: 'Urvish',
    address: {
      city: 'Ahmedabad',
      country: 'India'
    }
  };
  
  console.log(user.address.city); // Ahmedabad
  
  let user2 = {
    name: 'Priyank',
  };
  
//   console.log(user2.address.city); // Without ?. it throws error
  console.log(user2.address?.city); // undefined, no error
  


// Optional chaining is a feature in JavaScript that allows developers to safely access properties and methods of an object without worrying about whether the object is null or undefined. It uses the ?. operator to check if an object or its property exists before accessing it.

// Before the optional chaining operator, if you tried to access a property or method of an object that didn't exist or was null or undefined, you would get an error that could crash your program. With optional chaining, you can avoid this by adding a ?. before the property or method you want to access. If the object or property is undefined or null, the expression will short-circuit and return undefined instead of throwing an error.
