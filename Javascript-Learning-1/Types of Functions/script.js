// Functions !

// There are two types of functions in javascript :

// Functions-Declaration !
// Expression-Functions :

function checkAge(birthYear) {
  return 2022 - birthYear;
}

checkAge(2000);
console.log(checkAge(2000));
// or
// we store this value in a varibale:
const age1 = checkAge(2000);
console.log(age1);

// In function declaration you can call/invoke the function before the actual code

// Expression-Functions :

// The function without a name is called expression function:

// function (birthYear){
//   return 2022 - birthYear;
// }

// As we know function is an expression and expression returns a value .This value can be stored in a variable which we did down below .

const ageConfirm = function (birthYear) {
  return 2022 - birthYear;
};

ageConfirm(1999);
const age2 = ageConfirm(1999);
console.log(age2);

// This function without the name is called an expression function or this is an anymous function too .

// This is personal preference to use expression function or function declaration method :In expression function you cannot cal/execute/invoke the function before define  the code . if you do this you will get an error .
