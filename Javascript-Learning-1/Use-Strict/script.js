"use strict";

// Strict Mode

// Strict mode in js helps to avoid bugs in our code and this is because of two things. First, strict mode forbids us to certain things and second it will actually create visible error for us in certain situations in which js will simply fail silently without telling us that we did a mistake. Make sute to use this "use-strict" at the start of coding juist like i did in the script page .

// Let's see an example:

let qas = false;

qa = true;

if (qas) console.log("He is trying to dedicate 4hrs daily for coding");

// In the above code we took an example of let variable, first we assign the value false to that variable then we changed it to true, but we missed the las letter "s" in declaring the varibale .
// The result we got after commenting the "use-strict" was black or nothing in the console tab but as soon we used "use-strict" we got an error that "script.js:11 Uncaught ReferenceError: qa is not defined
// at script.js:11:4"

// This identifie that using "use-strict" helps us in finding the bugs in our code
