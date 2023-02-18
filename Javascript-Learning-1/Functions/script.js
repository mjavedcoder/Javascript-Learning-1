// Functions !

// Function is a piece of code that we can reuse  over and over again in code . Variable holds a value but remember function holds one or more complete lines of code .

// Following is the syntex of Function :

// function nameOFFunction(){
//     ... (Code to be execute)
// }

// First write the keyword "function",then write the name of the function but try the to be descriptive,after that parenthesis comes () and these parenthesis are for the parameters.Consider these parameters just like an empty block which filled durring the time of calling/invoking the function .
// So basically functions are like a machine which reveive the data and returns something.

function javaScript() {
  console.log("javaScript is the mother of all languages");
}

javaScript();
javaScript();
javaScript();

// In the above code we didn't pass any arguements to the prameters because there are not any kind of parameters there . So this function doesn't return anything althogh it is returning a statement in our console developer tools but not a value .

// To call/invoke/run the function we use nameOfFunction (javaScript) with parenthesis() just like we did above

// We can call this function as many times we want as we did 3 times above.

function carLovers(age, numbers) {
  console.log(age, numbers);
  const parentOrders = `You can't have ${numbers} cars at the age of ${age}`;
  return parentOrders;
}
const childrenWishes = carLovers(18, 2);

console.log(childrenWishes);
