// Switch Statement !

// Switch statement is just like if/esle statement and it's your personal preference that which one you want to use:

const car = "Bugatti";

switch (car) {
  case "Bugatti":
    console.log("i can't afford this rignt now😒");
    break;
  case "Ferari":
    console.log("i can't even imagine about this rn😞");
    break;
  case "Honda":
    console.log("yeah! i can but this car rn");
    break;
}

// In the above code, the result will be "i can't afford this rignt now😒".This is because we have assigned a value of "bugatti" in our car variable and the code inside the switch statement which have a case of "bugatti" will be executed.We need to add the break after every condition otherwise the next values will also be added in the result i.e
// "i can't afford this rignt now😒"
// "i can't even imagine about this rn😞"

if (car === "Bugatti") {
  console.log("i can't afford this rignt now😒");
} else if (car === "Ferari") {
  console.log("i can't even imagine about this rn😞");
} else if (car === "Honda") {
  console.log("yeah! i can but this car rn");
} else {
  console.log("You can buy any car");
}

// The above code of if/else statement is just like the switch statement.
