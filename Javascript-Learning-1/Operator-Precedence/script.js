//Operator Precedence

// Precedence means the value that comes first , in this way we have already know about the basic operators of Js which includes "Math-operstor" , "Assignement-Opearator" and "Comparison-Operator"

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#:~:text=Operator%20precedence%20determines%20how%20operators,of%20operators%20with%20lower%20precedence.

// if we open that above link and scroll down to the end of the page we'll find the table of precedence which shows that which operator has more precedency and which not.

// if any operator has highest Precedence that will execute more fast. i.e

const x = 10;

const carModel = x + 2019;
const carModel1 = x + 2020;

console.log(x + 2019 < x + 2020);

// Here above, we'll noticed that first the "+" operator is going to execute as it has more precedence value "11" if we see in the table,while the precedence of "<" operator is "9"

const size = 20;

const bagSize = size + 10;
const bottleSize = size + 20;

// const averageSize = bagSize + bottleSize / 2;
// If we execute the above function,we will find out the average value is grater than the original value it is because the "Division(/)" operator first divide the bottleSize (bottleSize/2 ) then this will add the remaining value according to the precedence value in the table (bottleSize/2 + bagSize)

// As we apply the "parenthesis()" around the value then it will execute the parenthesis vslue first then "division operator" works because the precedence value of "()" is higher or more than the "/" operator

const averageSize = (bagSize + bottleSize) / 2;

console.log(bagSize, bottleSize, averageSize);
