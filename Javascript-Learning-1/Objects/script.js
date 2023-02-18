// Objects

// Objects are the most fundamental part of javascript. Objects are the data-types which comes after the array or arrays also considered the part of objects in a nutshett both are the data-structure.

const games = ["chess", "football", "cricket"];

console.log(games);

// Arrays problem is that we can't assign the key or property to the elements in an array but this problem can be solved with the help of Objects.For example :

// const games = [ firstGame:"chess",
// secondGame:"football",
//  thirdGame:"cricket"];

// The above code will give us an error as it's not possible to assign a name to the element.

const differentGames = {
  firstGame: "chess",
  thirdGame: "cricket",
  secondGame: "football",
};

console.log(differentGames); //output => {firstGame: 'chess', thirdGame: 'cricket', secondGame: 'football'}
// firstGame
// :
// "chess"
// secondGame
// :
// "football"
// thirdGame
// :
// "cricket"

//If we see above code output we'll see that properties ordered here are alphabatically. I mean secondGame is coming before the thirdGame in our reuslt while we have assigned thirdGame before the secondGame in the object

// We are seeing these curly braces {} for the 3rd time .First we have seen in if/else statement,then in function code body and now this time but this time curly braces are to define objects So, we have filled the object with key value pairs . key is a variable name and value can be type that we want . in the above code "firstName" is a variable while "chess" is a value.So with the help of Objects we were able to assign a name to the elements of an array .

// All of these key-pairs are also properties . So we can say that this object of "differentGames" has 3 properties .
