'use strict';

//<====================Destructuring Objects==========>

// As we learnt about the destructing of arrays. Here we'll discuss about the destructuring of Objects .
// To keep in mind that we'll use curly brases{} while destructuring of objects and the variable name should be the same just like the property name :

const details = {
  place: 'Thorp-Park',
  location: 'London',
  rides: ['Flying-Fish', 'Saw', 'Stealth', 'Tidal-Wave'],
  legalAge: [8, 9, 10, 11],
  openDays: ['Saturday', 'Sunday', 'Monday', 'Tuesday'],
  openHours: {
    sat: {
      open: 1000,
      close: 1800,
    },
    sun: {
      open: 1000,
      close: 1800,
    },
  },
};

// <====================Retrieving elements from objects======================>//

const { legalAge, openDays } = details;
//We used the same variable names just like property name in an object
console.log(legalAge, openDays); //output => [8, 9, 10, 11]  ['Saturday', 'Sunday', 'Monday', 'Tuesday']
//Here we retrieve some of the elements from an object .The important thing is that order of the property doesn't matter in objects . We could have call "opendays" before the "legalAge".

//<===================What if we want our variables name different from property=======>//

const { legalAge: Age, openDays: Days } = details;
console.log(Age, Days); //output => [8, 9, 10, 11]  ['Saturday', 'Sunday', 'Monday', 'Tuesday']
//Here we defined the property name first and used our desirable name after that.In our case the names are "Age" and "Days"

// <====================================Default-Value====================================>//

// This is another useful featue like when we are getting the data from third party (API).lIKE an object we get somewhere else .For-example API called in this case the default values can be really useful for that . As we trying to read that property which doesn't exist in an object.This property is really important when in the real world we don't have hard coded data and usually we get our data from outside .

// const { place, hours } = details;
// console.log(place, hours); //output => Thorp-Park undefined

// Here in the above code "hours" variable wasn't property in our objects so we got the value of undefined but we can default this variable .

const { place, hours = 11 } = details;
console.log(place, hours); //outpur => Thorp-Park 11

// <===========================Mutating/Switching Variables===============================>//

let a = 'Qas';
let b = 'Jaddy';
console.log(a, b);
// We want to change the variable value .
const obj = { a: 'Web', b: 'development' };

({ a, b } = obj);
console.log(a, b); //output =>Web development

// Here in the above code we have need to change the value and we did that by wrapping the destructuring assignment with parenthesis ().
