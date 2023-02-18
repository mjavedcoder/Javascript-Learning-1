// Objects Method !

const simpleDetails = {
  firstName: "Qas",
  Age: "22",
  Location: "London",
  hasDriverLicense: "True",

  calcHeight: function (Height) {
    return 50 - Height;
  },
};

// function that is attaced with the object is called method . The method in the above code is "calcHeight"

calcHeight = function (Height) {
  return 50 - Height;
}; //This is function declaration and it is same in the above object . but the only difference is just of "=". As in the above object of " simpleDetails"we can have values of the properties. We know that function is an expression and expression gives the value we come to the result that function can be stored in the objects .
