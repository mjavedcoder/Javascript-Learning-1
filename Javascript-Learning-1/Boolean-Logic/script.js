// Boolean Logic :

// Boolean Logic is the branch of computer science which helps in solving the complex logical problems by using true or false value:

// And operator => This is going to be true when all the values are true otherwise this will be going to false if any one of the value is false

// OR operator => This is going to be true in every situation until unless every value is false

const qasHaveACar = true;
const qasHasLicense = true;

console.log(qasHaveACar && qasHasLicense);

// The above code is an add operator.The result of this code is 'true' as the both values are true.If anyone of them was false then result would be 'false'.

const dubaiBurj = true;
const richArab = false;
console.log(dubaiBurj || richArab);

// The result of above code is true as this is an "or" operator.If any of them is true then the result would be true too

if (dubaiBurj && richArab) {
  console.log("Dubai is famous for BurjKhalifa");
} else {
  console.log("Dubai is so expensive place to Live");
}

// The result of this is "Dubai is so expensive place to Live" coz in the condition there is an add operator which becomes false as soon any of the value is false.
