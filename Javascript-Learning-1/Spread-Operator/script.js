// <=========The Spread Operator...============>//

// Spread operator takes out all the elements out from the array and then write them individually.or in other words you can also say that how to add the elemnts of one array into an other array .

const arr = [1, 2, 3];
const arr1 = [4, 5, 6];

// What if we want to add some of the elemnts inside this array .//

const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(arr); //output => [1, 2, 3]

// There's an other way by using the "spread-operator"://

const newArr = [1, 2, ...arr];
console.log(newArr); //output => [1, 2,1,2,3]

// So, spread operator "..." takes out all the elements from the array and write them down individually in the result .

//<=============Shallow-Copy=======================>//
// Shallow copy means the copy of an array .

const arrCopy = [...arr];
console.log(arrCopy); //output=>[1, 2, 3]
//In this way we have created the copy of an array "arr"

//<============Joining of 2 arrays=============>//

const joinArrays = [...arr, ...arr1];
console.log(joinArrays); //output => [1, 2, 3, 4, 5, 6]

// Spread operator just work on iterables or we can just use this "spread-operator" in iterables :

// iterables are arrays , strings ,map and sets it doesn't includes objects :

// <===========Spread-Operator in String=============>//

const firstName = 'Qas';

const fullName = [...firstName, 'Javed'];
console.log(fullName); //output => ['Q', 'a', 's', 'Javed']
console.log(...fullName); //output => Q a s Javed

// In the above code we get to see that by using spread operator we got the individual elements in the result.So just like we expanded or we unpacked an array .

// Although in ES6 FEATURE OF JAVASCRIPT, we can use spread operator IN OBJECTS TOO:
