"use strict";

// Execution context on javascript includes :
// 1)Variable environment(Hoisting)
// 2)Scope Chain
// 3)this keyword

// Hoisting:
// Hoisting is javascript mechanism in which some types of variable can become reuseable before they actually declared .but behind the scenes code is been scanned and each variable that is found in the code a new property is created in the variable environment object .

// <===============Hoisting with variables=============>//

// let's create three variables by using three different keywords :

console.log(firstName); //output =>undefined
// console.log(age); //output => error
// console.log(place); //output => error

var firstName = "Qasim";
let age = 22;
const place = "London";

// If we see above code we'll find out in the result that var is hoisted but they are hoisted to undefind value base variable while the let and const are not . it means that we can use the var variable before declaration/initialization but let and const can't be use.

// <=============Hoisting with functions==============>//

console.log(ageVerified(2000)); //output => 22
console.log(ageExp(2000)); //output =>error
console.log(ageArrow(2000)); //output =>error

function ageVerified(birthyear) {
  return (age = 2022 - birthyear);
}

//expression-function
const ageExp = function (birthyear) {
  return (age = 2022 - birthyear);
};

//arrow-function
const ageArrow = (birthyear) => (age = 2022 - birthyear);

// In the above code we have find out that function can be use before beclaration but those functions which have been declared with "const" variable gives an error this is because that const and let are in temporal red zone and they are not hoisted variables .But as soon we replace the const variable with the "var" keyword instead of "const" we still get an error because const is an hoisted variable with the undefind value and undefine value is a falsy value which in the end gives an error .
