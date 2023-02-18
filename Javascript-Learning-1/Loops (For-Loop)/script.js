// Loops(for Loop):

// There are many control structuren in java-script . If/else is a control structure and we have talked about that already .So there is an another control structure that is "Loop" .Loops automate the repetitive tasks . The tasks which we have to repeat again and again .

// console.log("Qas gonna practice this shot of cricket 1 time 🏏");
// console.log("Qas gonna practice this shot of cricket 2 time 🏏");
// console.log("Qas gonna practice this shot of cricket 3 time 🏏");
// console.log("Qas gonna practice this shot of cricket 4 time 🏏");
// console.log("Qas gonna practice this shot of cricket 5 time 🏏");
// console.log("Qas gonna practice this shot of cricket 6 time 🏏");
// console.log("Qas gonna practice this shot of cricket 7 time 🏏");
// console.log("Qas gonna practice this shot of cricket 8 time 🏏");
// console.log("Qas gonna practice this shot of cricket 9 time 🏏");
// console.log("Qas gonna practice this shot of cricket 10 time 🏏");
// console.log("Qas gonna practice this shot of cricket 11 time 🏏");
// console.log("Qas gonna practice this shot of cricket 12 time 🏏");

// In the aboce code we want to print a shot in our console 12 times . So we have to put so much extra efforts and time to write that code again and again and at the same time this is gainst the "Dry(Don't repeat yourself" in coding too .So to get rid of this "Loop" has been introduced .

for (let shot = 1; shot <= 12; shot = shot + 1) {
  console.log("Qas gonna practice this shot of cricket 1 time 🏏"); //output => 12 Qas gonna practice this shot of cricket 1 time 🏏
}

// If we see the above code, in the output there is "12" which tells that string has been printed 12 times.So the dev tools will not porint the string 12 times. It will just put like this .The condition of "shot <= 12" will be executed before the iteration(repetation) of string.And for loop will be keep while the condition is true as soon the counter goes to 13 it will stop printing the string or working.

// But how can we increse the number of string that we printing out ?
// We can do this by replacing the number(1) with counter (shot) variable . For that we need to change the string to templete string .

for (let shot = 1; shot <= 12; shot = shot + 1) {
  console.log(`Qas gonna practice this shot of cricket ${shot} time 🏏`);
}
//output => Qas gonna practice this shot of cricket 1 time 🏏
// script.js:29 Qas gonna practice this shot of cricket 2 time 🏏
// script.js:29 Qas gonna practice this shot of cricket 3 time 🏏
// script.js:29 Qas gonna practice this shot of cricket 4 time 🏏
// script.js:29 Qas gonna practice this shot of cricket 5 time 🏏
// script.js:29 Qas gonna practice this shot of cricket 6 time 🏏
// script.js:29 Qas gonna practice this shot of cricket 7 time 🏏
// script.js:29 Qas gonna practice this shot of cricket 8 time 🏏
// script.js:29 Qas gonna practice this shot of cricket 9 time 🏏
// script.js:29 Qas gonna practice this shot of cricket 10 time 🏏
// script.js:29 Qas gonna practice this shot of cricket 11 time 🏏
// script.js:29 Qas gonna practice this shot of cricket 12 time 🏏

// We cal also replace shot=shot+1 => shot++
