// Type Conversion and Coercion:

// Type Conversion:

const qasAge = 22;
const otherAge = "23";
console.log(qasAge + otherAge);

// The result we are getting is a string (2223).As the string(23) is not converting into the Number(22) by adding (+) operator.This can be solve by manually For instamce:

console.log(qasAge + Number(otherAge));

// In this way we are getting result in Number(45).As we have converted the String(23) by just adding word of "Number" before the String.In the same way we can convert the number into string by adding word of "String" before the number.For-instance:

console.log(String(qasAge) + otherAge);

// btw you can't convert a string containing words ("Qas").it only works in a string containing numbers ("23")

// The above method is called type conversion method in which you have to do all this stuff manually:

// <---------> //

// Type Coercion:

// This is another method in which all the stuff has done automatically in the backend:
// For-instance:

const qas = "I am Qasim ";
const age = 23;
const properAge = " years old,wants to become a web-developer";

console.log(qas + age + properAge);

// The result of this is "I am Qasim 23 years old,wants to become a web-developer".Here you can see that the number (23) is converted to a string and then after it added to string:

const qas1 = "24";
const qas2 = 22;

console.log(qas1 - qas2);

// Here the result is number (2) as the - operator has converted the string into number form.but if there was an add operator the result would be different and it would a string i.e "2422" coz the add operator converts number to string.

// The multiplication and division operatoe works same like subtraction(-) operator:

// The above method is called coercion method and it converts the number or strings automatically and you don't need to put words of "String" and "Number" by yourself.
