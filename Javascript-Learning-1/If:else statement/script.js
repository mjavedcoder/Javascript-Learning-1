// if/ else statements:

// we can take decision in the code using the if else statement:

const age = 7;
const legalAge = age >= 8;

if (legalAge) {
  console.log(`Yes,You can take this ride 😀`);
} else {
  const yearsLeft = 10 - age;
  console.log(`You can take this ride after ${yearsLeft} years`);
}

// const age = 7;

// if (age >= 8) {
//   console.log(`Yes,You can take this ride 😀`);
// } else {
//   const yearsLeft = 10 - age;
//   console.log(`You can take this ride after ${yearsLeft} years`);
// }

// Both of the above codes are right to use,In the first code we are pointing at the variable FileSystemDirectoryHandle,Although in the 2nd we pointing at the value of variable.

// if statement would be valid if the code inside the parenthesis after the "if" is true otherwise the code inside the else would be executed.As in the above code the if statement is not right becoz the age is "7"  although the require age is "8 or greater "so the code inside the else statement would be executed.
