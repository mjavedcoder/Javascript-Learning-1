//<================== Rest Pattern:================>//

//<=========Rest Pattern in Destructuring===========>//

// As we have studied about spread operator which allows to unpack the elements from an array and rest pattern is to pack elements into an array .

//Spread operator,because Right side of "assignment-operator(= sign)"
const arr = [1, 2, 3, 4, 5];

const newArr = [1, 2, ...arr];
console.log(newArr); //output =>[1, 2, 1, 2, 3, 4, 5]

// In the above code we have used "spread-operator" and spread operstor took out the elements and write it down individually in the same new array .But the rest pattern is different from it as it collects the elements and write that down into another new array .The common difference b/w spread and rest is that in spread operator is after the equali†y operator like above while the rest operator is before the equality operator just like down below :

//Rest operator ,because left side of "assignement-operator"
const [a, b, ...others] = arr;
console.log(a, b, others); //output => 1 2  [3, 4, 5]

// In the above code we have used rest pattern and find out that rest of "arr" elements have been collected and written doen into a new array but it's not the case in spread operator where it's just write the elements individually .

//<Three dots(...) on both sides of assignment operator>//

const details = {
  name: 'Thorp-Park',
  location: 'London',
  rides: ['Flying-Fish', 'Saw', 'Stealth', 'Tidal-Wave'],
  legalAge: [8, 9, 10, 11],
  openDays: ['Saturday', 'Sunday', 'Monday', 'Tuesday'],
};

const [, Saw, ...othersdetails] = [...details.rides, ...details.legalAge];
console.log(Saw, othersdetails); //output =>  Saw ['Stealth', 'Tidal-Wave', 8, 9, 10, 11]

// In the above we have used the rest pattern in the destructuring of arrays and get to know that on the R.H.S of assignment operator we have spread operator which take out the elemts form an array and write them down in the old array and on the L.H.S we have rest pattern which collects the elements into a new array .As "Saw" element is stored in "Saw" variable while the rest of elemnts have been collected into new array .

// <=====Rest Pattern in Functions or parameter==>//

const newDetails = function (firstName, ...restDetails) {
  console.log(firstName);
  console.log(restDetails);
};

newDetails('Qas', 'Jaddy', '22 - years', 'London', 'Web - Developer');

// In the above code we took a function and stored that into the variable of "newDetails" and we can see that we can pass as many arguements to the function and can see them with the help of rest pattern too
