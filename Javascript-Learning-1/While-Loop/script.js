// While Loop :

// While loop produce the same result just like for loop but it doesn't need a counter .While loop is versatile and can be use without the counter variable

// WHEN TO USE WHILE LOOP ?

// When you are not sure about the iteration or repetation use while loop. So whenever you do need a loop without a counter use while loop

//  For Loop:
const qas = ["Qas", "Jady", 22, "London"];
for (let i = 0; i < qas.length; i++) {
  console.log(qas[i]); //output=> "Qas" "Jady" 22 "London"
}

//While Loop:

let i = 0;
while (i < qas.length) {
  console.log(qas[i]);
  i++; //output=> "Qas" "Jady" 22 "London"
}

// The above code or syntex is of while loop in which we'll use while keyword before the condition and before that we have put counter variable. This while loop can be use if we don't need a counter variable.Here we needed that so we used here. The counter increasement (i++)came after the iteration code or  after the code block.

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You have rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1; //if we don't put this loop here then the no keep repeating and browser can be crash by putting this we have got new value of dice everytime and as soon we have got 6 number on dice the loop stops.So we have reassign this value at the end of each iteration
  if (dice === 6) {
    console.log("It's 6 now");
  }
}
