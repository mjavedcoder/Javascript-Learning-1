// Dot AND Bracket Notation in Java-script:

// We have already discussed about the "Objects" and there importance.Here we'll discuss about the two methods which can help in getting or retrieving the element in object.

const differentGames = {
  firstGame: "chess",
  thirdGame: "cricket",
  secondGame: "football",
};

// <----------------------------------------------> //

// 1)Dot-Notation :

differentGames.firstGame;
console.log(differentGames.firstGame); // output => chess

// The above method is called "dot-notation" in which we can retrieve an element from an object by just using dot "." and the property name. The dot operator works with the real time property in an object.We jsut can use "real-property-name" in dot-notation.

// <----------------------------------------------> //

//2)Bracket-Notation :

console.log(differentGames["secondGame"]); // output=>football

// The above method is bracket notaion in which we'll use square-bracket [] with quatition marks includind the retrieving element.In the square bracket we can put any expression and expression is a value we already know about that.We can use computed name(expression) in bracket notation.

// <----------------------------------------------> //

//3) Which method should use, Dot or Bracket-Notation:

// Let's say we don't know that which property should we retrieve or use and we get this information from the user and for that we can use the prompt function.This prompt function is used for a pop-up field and user can input something in that .

// prompt(
//   "Choose your favourite sports from the above object,firstGame,secondGame,thirdGame"
// );

// This prompt returns a string which we store in a variable.

const chooseSport = prompt(
  "Choose your favourite sports from the given,firstGame,secondGame,thirdGame"
);

// console.log(differentGames);

// Now we want to display the game whenever the user put anything from the prompt-options .

console.log(differentGames.chooseSport); //output => undefined

console.log(differentGames[chooseSport]); // output for firstGame => chess, We got the output because we have used bracket notation.

// So, we find out that the expression (chooseSport) is evacuated and replaced by the value from which user has use from the prompt and put in the user-input FileSystemDirectoryHandle. Here user has put "firstGame" so it replaced the "chooseSport" expression and that becomes (differentGames[firstGame]) so it gives us the result of "chess" as that is element in the object

// <----------------------------------------------> //

//4) How to add an element in an object:

differentGames.playGround = "London";

console.log(differentGames); // output => {firstGame: 'chess', thirdGame: 'cricket', secondGame: 'football', playGround: 'London'}

//OR

differentGames["players"] = 11;
console.log(differentGames); //output => {firstGame: 'chess', thirdGame: 'cricket', secondGame: 'football', playGround: 'London', players: 11}
