// Conditional Operator (Ternary):

// An operator is something which produce a value, It means that operator is also called an expression .

// A conditional operator is also called Ternary operator as it includes three parts which we"ll see now. As there is "+" operator is which one number is adding to the other number.So that 1st number is one part and the 2nd number is 2nd part i.e (1 + 2):

const number = 10;

number >= 10
  ? console.log("10 is my favourite number")
  : console.log("i don't believe in numbers");

// In the above code we have used conditional operator in which "number >= 10" is a condition, "console.log("10 is my favourite number")" is a "if-statement" and the last is most important and mandatory which is else statement "console.log("i don't believe in numbers")" The colon ":" before the else statement is mandatory which indicated that the else statement is about to start and if is end.

// After looking at the above code we can easily tell that this is "Ternary" operator in which "number >= 10" is a first part ,"console.log("10 is my favourite number")" is a second part  "console.log("i don't believe in numbers"); is a third part of operator.

if (number >= 10) {
  console.log("10 is my favourite number");
} else {
  console.log("i don't believe in numbers");
}

// If we compare the above code with the code of conditional operator we"ll find out that code which is in conditional is small and easy as compared to if/else statement

const number2 = number >= 10 ? "lucky" : "Don't Care";

console.log(number2);

// In the above code we have stored the conditional operator in the variable "number2".We been successfull in storing the code because we know that conditional operator is a value and value can be stored in a variable.
