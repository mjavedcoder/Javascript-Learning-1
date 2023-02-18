//Strings :

const firstName = "Qasim";
const uniName = "Greenwich-University";
const year = "Final-Year";
const course = "Business & Computing";

const qasim =
  "I'm " +
  firstName +
  ", student of  " +
  year +
  " studying " +
  course +
  " in " +
  uniName;

console.log(qasim);

// The above code is string and we will find out that it's really complicated to write a small description. As we have to use "double-quotes" then "+" sign everytime we have to add any of the description.At the same we have to manage the space too.In this we have to use "+" sign to concatenate the strings.

// This problem can be solve with the help of "Template literals" down here !

// Template Literals:

const qasimNew = `I'm ${firstName},student of ${year} studying ${course} in ${uniName}`;

console.log(qasimNew);

// See, This is really easy to use as you don't need to worry about the "quotes" or "+" or "spaces" just like above.You just have to add back-tick (``) and in the back-tick you have to add the code of your desired output . If you want to point at any of the variable you have to use dollar-sign with curly-braces (${}).In This we don't need to use "+" sign to contenate the strings.This is alot easir as compared to Strings.This is also one of the most used feature in ES6(javascript).
