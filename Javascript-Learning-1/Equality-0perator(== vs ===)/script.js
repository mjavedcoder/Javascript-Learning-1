// Equality Operators(== vs ===)

// (===) => Strict equality operator
//  (==) => Loose quality operator

//  "===" is a strict quality operator and this is not type coercion while the "==" is type coercion as it convert the "string" to a "number" or vice versa :

const qas = 22;
if (qas === "22") console.log("Qasim is so young for this !");

// The result of the above code is going to be nothing as the qas value is 22(number) while in condition statement we assigning it to the "string" value so we find out that the strict equality operator is not type coercion.
// if the statement is one line we don't need to use the "{}" as we did in the above code.

const qasBday = "7";
if (qasBday == 7) console.log("Yay! This car is my favourite😀");

// The above code is gonna execute as we using "loose equality operator" which is type coercion and convert the string to a number and vice versa

// This is always recommended to use "strict quality operator " as it can make our code bug free .
