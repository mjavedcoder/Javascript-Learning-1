// Breaking And Continuing (Loop):

const qas = ["Qas", "Jady", 22, "London"];

for (let i = 0; i < qas.length; i++) {
  console.log(qas[i]); //output => "Qas" "Jady" "22" "London"
}

// Continuing statement :

// In Continuing statement The current iteration(repeatation) of loop is exited and the next one starts immediately.

for (let i = 0; i < qas.length; i++) {
  if (typeof qas[i] !== "string") continue;
  console.log(qas[i]); //output => "Qas" "Jady" "London"
}

// In the above code we put a condition that we need "string" and as soon the number 22 comes it missed or exited and the next one starts "London" immediately.In the current iteration the next element was supposed to come number 22 but continue statement in Loop exits the current iteration and starts it immedietly and in the end the string "London" came.

//<---------------------------------------------------------------->//

//Breaking Statement :

// In the breaking statement the current iteration is get terminated staraight away as soon the condition gets true

for (let i = 0; i < qas.length; i++) {
  if (typeof qas[i] === "number") break;
  console.log(qas[i]); //output => "Qas" "Jady"
}

// In the above code we have seen that as soon the iteration finds the number 22, it gets terminated the loop completely and that's why it doesn't give the last value "London" in an output
