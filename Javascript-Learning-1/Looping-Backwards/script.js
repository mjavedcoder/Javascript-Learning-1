// Looping-Backwards :

const qas = ["Qas", "Jady", 22, "London"];

// We used to do the array-looping like this :

for (let i = 0; i < qas.length; i++) {
  console.log(qas[i]); //output=> "Qas" "Jady" 22 "London"
}

// What if we want to do looping of our arrays backwards :

for (let i = qas.length - 1; i >= 0; i--) {
  console.log(qas[i]); //output => "London" 22 "Jady" "Qas"
}
