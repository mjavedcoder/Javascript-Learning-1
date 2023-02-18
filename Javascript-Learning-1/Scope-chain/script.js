"use strict";

// What is scoping :
// Scoping basically asks the question that where do the variable lives and where can we acces that variable and where not>

// Wha is scope :
// Scope is an environment where the certain variable has been declared,It has three types
// Global scope
// Functional scope
// Block scope

// <========================= 1st Case ======================> //

function driverAge(birthYear) {
  const age = 2022 - birthYear;
  console.log(driverName); //Output => "Qasim"
  return age;
}

const driverName = "Qasim";
driverAge(2000);

// If we see in the above code we'll find out that "driverName" variable name has been declared outside of the "driverAge" function .So while calling the driverName first look in the local scope which is "driverAge" and if it doesn't find the variable value in the local scope it will find outside of local scope and it find the value of "driverName" outside of local scope. "driverName" is a global scope which has access everywhere so this is why it is accessable inside of the "driverAge" function .The parent scope of the "driverAge" function is global scope which is in our case "driverName"

// <========================= 2nd Case ======================> //

function driverAge(birthYear) {
  const age = 2022 - birthYear;

  function ableToDrive() {
    const result = `You are ${age} years old as you born in ${birthYear},So you can drive this car`;
    console.log(result);
  }
  ableToDrive();
  return age;
}

// In the above code we can see that we have added another function of "ableToDrive" in the first function "driverAge" and we need the value of varibale "age" and birthYear to complete the result varibale .So This is prove from the above code that child scope has an access to the parent scope(driverAge) too .This all is happening because of the scope chain .

console.log(age); //output => error

// We got an error above because the inner scope variable just has an acces to the outerscope varibale but not the outerscope varibale .So it means scope is one direction not the both direction.Here we are the outerscope and we don't have an access to the cariable which is in child scope.

// <========================= 3rd Case ======================> //

function driverAge(birthYear) {
  const age = 2022 - birthYear;

  function ableToDrive() {
    const result = `${driverName} you are ${age} years old as you born in ${birthYear},So you can drive this car`;
    console.log(result);
  }
  ableToDrive();
  return age;
}

// In the above code we have "${driverName}" varibale value we got the result with the name .So in this way we get to know that child variable has also an access to the global scope variable . As in this "driverName" variable first look into the local scope,if it doesn't find there it will go to the parent scope and if it doesn't find there it will go the global scope which has been declared at the top of every scope chain. In our case it was "Qasim"

// <========================= 4th Case ======================> //

function driverAge(birthYear) {
  const age = 2022 - birthYear;

  function ableToDrive() {
    const result = `${driverName} you are ${age} years old as you born in ${birthYear},So you can drive this car`;
    console.log(result);

    if (age >= 18) {
      const output = `${driverName},You are good to go!`;
      console.log(output);
    }
  }
  ableToDrive();
  return age;
}

// In the above code we have put "if/esle" statement too check weather we have an access to the "firstName" or not and we find out the output => "Qasim,You are good to go! "But if try out to call the "output" variable outside of the varibale we'll get the an error This is bacause const and let ard block varibale are block scoped.Check the below code.While if we decloared a varibale with the "var" keyword it can be call outside of the block because var varibales are functional scope.

function driverAge(birthYear) {
  const age = 2022 - birthYear;

  function ableToDrive() {
    const result = `${driverName} you are ${age} years old as you born in ${birthYear},So you can drive this car`;
    console.log(result);

    if (age >= 18) {
      const output = `${driverName},You are good to go!`;
    }
    console.log(output); // output => error
  }
  ableToDrive();
  return age;
}

// <========================= 5th Case ======================> //

//FUNCTIONS ARE BLOCK scope just like "const/let"

function driverAge(birthYear) {
  const age = 2022 - birthYear;

  function ableToDrive() {
    const result = `${driverName} you are ${age} years old as you born in ${birthYear},So you can drive this car`;
    console.log(result);

    if (age >= 18) {
      const output = `${driverName},You are good to go!`;

      function add(a, b) {
        return a + b;
      }
    }
    console.log(add(2, 3)); //output => error
  }
  ableToDrive();
  return age;
}

// In the above code we have seen that functions can not be called outside of the block so we got an error but this is just in strict mode which we have used at the above of the script document (use strict).But as soon we will comment out "use strict" we will get the result of "5" but we should always use strict mode.

// Thus,This all procedure is called scope-chain:
