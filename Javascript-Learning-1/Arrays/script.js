// Arrays :

//  1) How to create the arrays:

// Let's start with an example that we want to use some values in our code again and again.How would we do that ?Yes you are right , At this momemt till now we'll do with the help of storing those values in variable . i.e
// I want to use values of some players,

const player1 = "Qas";
const player2 = "James";
const player3 = "Racheal";

// We can see above that we have to take so many varibales if the players are greter in numbers .

// So to cover this problem the arrays has been introduced,

const players = ["Qas", "James", "Racheal"];

console.log(players); // output => ['Qas', 'James', 'Racheal']

// The above code is an array and the syntex is very simple that we need to use the square-bracket [] while declaring an array and make sure to use comma (,) after the string everytime. Although there is another method of declaring array too :

const players1 = new Array("Qas", "James", "Racheal");
console.log(players1); // output => ['Qas', 'James', 'Racheal']

// So the outputs of both of the ways is same .

//   < ------------- -------------------- >

// 2)How to taken out the elementts from an array:

console.log(players[0]); // output => Qas

// In the above code we can see that we took out the "Qas" elemets from an array .We have "0" as the arrays are 0 based.

console.log(players[1]); // output => james

//   < ------------- -------------------- >

// 3)How to get the actual numbers of arrays :

console.log(players.length); // output => 3

// In the above code we can see the actual numbers of an array . This "length" property is not a "0" based so it will start from "1"

// < ------------- -------------------- >

// 4)How to taken out the last element of an array,In this way we don't need to count the elemets.

console.log(players[players.length - 1]); // output => Racheal

console.log(players[players.length - 2]); // output => James

// < ------------- -------------------- >

// 5)How can we change the elemets of an array:

players[1] = "Tony";
console.log(players); // output => ['Qas', 'Tony', 'Racheal']

// We can see above the james has been replaced by "Tony".We can change the elements of an array as arrays are immutable(values that can change) because the arrays are non-primitive values . For details about primitve and non-primitive head over to this link (https://levelup.gitconnected.com/primitive-vs-non-primitive-value-in-javascript-82030928fd9)

// < ------------- -------------------- >

// 6)Can we change the whole array ?

// No, we can just change the elements an array but we can't change the whole array.

// players = ["jadu", "Lado"]; // output => error

// we will get an error if we went to change the whole array just like above .

// 7) Arrays can hold values of different types :

const lastName = "Javed";
const arraysData = ["Qas", lastName, 2022 - 2000, players];
console.log(arraysData); // output => // ['Qas', 'Javed', 22, Array(3)]

// In the above code we can see that we have put everything in array "arrayData".It includes varibale , expression(2022 - 2000) an array(players) too
