'use strict';

//<======================== Destructuring of Arrays:======================>//

const details = {
  name: 'Thorp-Park',
  location: 'London',
  rides: ['Flying-Fish', 'Saw', 'Stealth', 'Tidal-Wave'],
  legalAge: [8, 9, 10, 11],
  openDays: ['Saturday', 'Sunday', 'Monday', 'Tuesday'],
};

// Destructuring is an ES6 feature and it is basically a way of un-packing the values from an array or an object into separate variables .

// <================Retrieving the elements from arrays===============================>//

const array = [7, 8, 6];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

//  The above method, we used to retrieve the elements from an array :

const [q, r, s] = array;
console.log(q, r, s); //output => 7,8,6

// The above code is the destructuring of the array from the right side.So basically we write this syntex "[q,r,s]" and "q" becomes first element of an array,"r" becomes 2nd element of an array and "s" becomes the 3rd element of an array .Make sure to declare the variable using "const" while destructuring .

console.log(details.rides[0]); //This is how we used to retrieve the elements from arrays.
console.log(details.rides[1]);

const [a, c, e] = details.rides; //This is the way to retrieve the elements from an array by using destruction.
console.log(a, c, e); //output => Flying-Fish Saw Stealth

const [first, , second] = details.legalAge; //If we want to miss any of the element from an array we need to leave that space after the commas ,The same we did here
console.log(first, second); //output=> 8 10

//<========================Switching the variables by using Destructuring===========>//

let [childride, adultride] = details.rides;
console.log(childride, adultride); //output => Flying-Fish Saw

// Now, if we want to change the rides like in the above case we want to change the adultride with the childride or viceversa and in other words if we want to switch the variables .

// const temp = childride; //This is what  we have to do without destructuring .
// childride = adultride;
// adultride = temp;
// console.log(childride, adultride); //output => Saw Flying-Fish

[childride, adultride] = [adultride, childride]; //With destructuring
console.log(childride, adultride); //output => Saw Flying-Fish

// So in this way the childride becomes "Saw" and adultride becomes "Flying-Fish".This is actually the power of destructuring.

// <========================Destructuring of nested Arrays=========================>//

const arr = [1, 2, [3, 4]];

const [value1, value2, value3] = arr;
console.log(value1, value2, value3); //output =>1 2 [3,4]

// What if we want to get the separet elements values ?We'll use destructuring method:

const [i, j, [k, l]] = arr; //Here we destructure the inner array:
console.log(i, j, k, l); //output 1 2 3 4

//<=========================Default-Values================================>//

// const numbers = [1, 2];
// const [Qas, Jaddy, Roman] = numbers;
// console.log(Qas, Jaddy, Roman); //output => 1 2 undefined

//  We got "undefined" the Roman value as it's not in the array but we can declare the default value by using destructure method.

const numbers = [1, 2];
const [Qas = 1, Jaddy = 2, Roman = 3] = numbers;
console.log(Qas, Jaddy, Roman); //output => 1 2 3

// As in the above code we have seen that the value of "Roman" wasn't declare in the array or it wasn't there but we find it's value by using the destructuring method .
