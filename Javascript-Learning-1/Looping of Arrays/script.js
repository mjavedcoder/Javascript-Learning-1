// Looping of Arrays:

const qas = ["Qas", "Jady", "22", "London"];

// We normally retrieve the element from arrays like:
console.log(qas[0]); //output =>"Qas"
console.log(qas[1]); //output => "Jady"

// Here we'll discuss how to loop an array and retrieve the elements at the same time.

for (let i = 0; i < 4; i++) {
  console.log(qas[i]); //output => "Qas" "Jady" "22" "London"
}

// We wanted to log the 4 elements of arrays.So we loop the array.For looping we declared traditional varibale with the name of "i" and assigned the value of 0, As we know that the arrays are 0 based . Then we applied the condition that i should be less than 4 becoz we know that the arrays are 0 based and it will start count from 0 so if we took 5 or 6.. too than it doesn't changed the result too and we got the same output . if we add another element in the array then we have to change the condition too . So to save from this extra effort it's better to replace the i < 4 to i<qas.length. As the length starts from "1" and if we add another value like below .

const qas1 = ["Qas", "Jady", "22", "London", "Ilford"];
for (let i = 0; i < qas1.length; i++) {
  console.log(qas1[i]); //output => "Qas" "Jady" "22" "London" "Ilford"
}
