"use strict";

// Execution context on javascript includes :
// 1)Variable environment(Hoisting)
// 2)Scope Chain
// 3)this keyword

// This keyword :

// This keyword/variable is a special kind of variable created for every execution context or function . This keyword takes the value of the owner of the function in which it is called .It's value depends on which it is and how it is been called in a function .

// <==========================1st case (Outside the Global scope)========================>//

console.log(this); //output => Window

// This keyword in the global scope is "Window" .Window is a global object that contains many values inside of it .

//<===================2nd case (This keyword inside the function)========================>//

const qas = function () {
  console.log("Qas favourite sport is cricket");
  console.log(this); //output => undefined
};

qas();

// In the above code this keyword is been called in the function and got the output of "undefined" .

const qasArrow = () => {
  console.log("Qas favourite sport is cricket");
  console.log(this); //output => window
};
qasArrow();

// In the above code which is an arrow function when "this" keyword is been called we got the output of window . This main difference is because that arrow function doesn't get it's own this keyword so it looks to the global this keyword which has been called above and as global scope "this" keyword is "window" so "this" keyword in an arrow function is window too .
// But why this keyword in normal function is undefined this is bacuse it get it's own "this" keyword .

//<===================3rd case (This keyword inside the method)========================>//

const qasim = {
  age: 22,
  location: "London",
  checkQasim: function () {
    console.log(this); //output => {age: 22, location: 'London', checkQasim: ƒ}
  },
};

qasim.checkQasim();

// In the above code we get to know that "this" keyword in the method is actually the object which is calling the method.So in the above code we have seen that "qasim" is an object which is calling this keyword "qasim.checkQasim();" :.
