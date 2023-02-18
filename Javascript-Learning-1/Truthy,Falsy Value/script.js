// Truthy and Falsy Value:

// Any value which is not not a false in actual but it becomes false when we convert them into boolean:

// The conversion to boolean is always type coercion that javascript always does this behind the scene:

// 5 FALSY  values:

// 0 , undefined , NaN , '' , undefined;

console.log(Boolean(0));
// => Result = false
console.log(Boolean(""));
// => Result = false
console.log(Boolean("This is true"));
// => Result = True
console.log(Boolean({}));
// => Result = True

// The result of "Boolean(0)" is false as this is a falsy IDBCursorWithValue,same goes for an empty string ('')

// The result of last two is "true" coz the first value is not an empty string and any string which is not an empty is always truthy and same goes for an object which is the last value.

let car;
if (car) {
  console.log("This car has an insane speed !");
} else {
  console.log("This car is so old to drive");
}

// The code which is going to be execute is in  else statement,coz variable value is "undefined" and "undefined" is a falsy value
