// Datatypes:

// Every value in javascript is "object" or "Primitive";
// There are 7 primitive datatypes in js which includes:
// Number , String , Boolean , Undefined , Null , Symbol , BigInt

// The most important are first three:
//  Number =>
let firstType = 23;

//  String =>
let secondType = "Qasim";

//  Boolean =>
let thirdType = true;

//  Undefined =>
let company;

//  other datatypes are not as much important:

let firstDataType = 20;

//  Here we are assigning a value to the variable
//  And if we want to change the value of variable "firstDataType" we don't need to put "let" in the start i.e:

firstDataType = 40;

//  As first the value is stored in a variable so we don't need to write "let" keyword

// There is an operator called "typeof" which actually tells you the type of value which is stored in variable i.e;

let lastDataType = 30;
console.log(typeof 30);

// The result of this will be "number" as  "30" is a number, same is with "true/false" and with "string" too

let limited;
console.log(limited);
// This is undefined datatype and this is completely legally in js, the result of this if you check by applying "console.log(limited)" will be undefined and the "typeof" this will also be "undefined"

// There is also an error in "typeof" operator i.e:
// if you will do
console.log(typeof null);
// the result will be Object.Although null is not an Object at all
