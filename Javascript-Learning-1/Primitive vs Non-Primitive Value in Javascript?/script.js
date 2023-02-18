// Primitive vs Non-Primitive Value in Javascript?

// Primitive values are those which are mutable while the non-primitive values are those which are immutable .

// Mutable => The values which cannot be change after creation .
// immutable => The values which can be change after creation .

// Primitive values are:

// 1-String
// 2-Boolean
// 3-Number
// 4-BigInt
// 5-Null
// 6-Undefine
// 7-Symbol

// Non-Primitive values are :
// 1-Objects

// Arrays do not belong to this list because they are objects as well.

let qas = "He is 22yrs old web developer";
qas = "This time he is learning javascript";

console.log(qas); //output => "This time he is learning javascript"

// In the above code we changed the assigned value to variable "qas" but we did not change the existing value of varibale as we can't do because this is mutable value .

const players = ["qas", "jay", "james", "johnny"];

players[1] = "Micheal";

console.log(players); // output =>['qas', 'Micheal', 'james', 'johnny']

// In the above code we can see that we have changed the existing value of an array players .
