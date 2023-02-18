// Basic-Array-Methods:

// There are different kind of Array operations or methods which we discussed here :

// 1) How to add an element at the end of an array ?

const cousins = ["John", "David", "Katty"];
console.log(cousins); //output => ['John', 'David', 'Katty']

cousins.push("Williamsons");
console.log(cousins); //output => ['John', 'David', 'Katty', 'Williamsons']

// We'll use 'push' keyword to add an element at the end of an array

//  <----------------------------->//

// 2)How to add an element at the start of an array ?

cousins.unshift("Jee");
console.log(cousins); //output => ['Jee', 'John', 'David', 'Katty', 'Williamsons']

// We'll use "un-shift" keyword to add an element at the start of an array.

//  <----------------------------->//

// 3)How to remove the last element from an array :

cousins.pop();
console.log(cousins); //output =>['Jee', 'John', 'David', 'Katty']

// We'll use "pop" keyword to remove the last element from an array .

//  <----------------------------->//

// 4)How to remove the first element from an element :

cousins.shift();
console.log(cousins); //output => ['John', 'David', 'Katty']

//We'll use "shift" keyword to remove the first element from an array.

//  <----------------------------->//

// 5) How to get the position number or reference of element in an array

cousins.indexOf("John");
console.log(cousins.indexOf("John")); // output => 0

// The above code will return a result of "0" as the position of "John" is at 0 in an array.

//  <----------------------------->//

//6) There is an other method to find the index of an element in array , It is an updated method of ES6 and tells about the index of an element in boolean (true/false)

cousins.includes("John");
console.log(cousins.includes("John")); //output => true

// The above code return us "true" as "John" is an element of cousins Array.

cousins.includes("Tiger");
console.log(cousins.includes("Tiger")); // output => false

//The above code output is false as "Tiger" not an element of array.

// This method of "includes" work as strict-equality.For-example:

cousins.push = 10;
console.log(cousins); // output => ['John', 'David', 'Katty', push: 10]

cousins.includes("10");
console.log(cousins.includes("10")); //output => false

// This is going to return false as number (10) is not equal to string "10" in string-equality operator.It means it doesn't do type coercion.

//  <----------------------------->//

// 7) How can we use includes method in "if/else" statement:

// "includes" method is very useful and we can use this in "if/else" statement. For-example

if (cousins.includes("David")) {
  console.log("David is your cousin and he also a part of an an array.");
} // output //David is your cousin and he also a part of an an array.

// As "David" is an element of the cousins array so the if code is being executed.

//  <----------------------------->//
