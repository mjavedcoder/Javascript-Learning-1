// Loops Include Loops:

for (let player = 1; player < 3; player++) {
  console.log(`Player ${player}`);

  for (let shot = 1; shot < 7; shot++) {
    console.log(
      `Player ${player} This shot has been played by this player ${shot} time 🏏`
    );
  }
}

// The player 1 has started playing and while he's playing the new loop is been created and executed . So "This shot has been played by this player ${shot} time 🏏" has been repeated 6 times and so first iteration is finished. And so the 2nd iteration starts and it comes to player 2 and the whole loop will run again from 1 to 6 and that loop again fineshes and so the player iteration finshes and we go the iteration number 3 (player 3) and then again the whole inner  loop starts  again.
