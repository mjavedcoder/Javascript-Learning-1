"use strict";

// Arguements in Javascript:

//Arguements in normal function :
const qasExp = function (age, height) {
  console.log(arguments); //output =>Arguements(2)
};

qasExp(22, 6.11);

//Arguements in arrow function:

const qasARROW = (age, height) => {
  console.log(arguments); //output =>error
};

qasARROW((22, 6.11));

// From the above code we get to know that arguements in javascipt works in normal function but not in arrow function :
