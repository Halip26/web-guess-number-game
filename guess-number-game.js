const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const number = Math.floor(Math.random() * 99) + 1;

function askguessNumber() {
  rl.question("\nEnter a number from 1 to 99: ", (input) => {
    const guess = parseInt(input);

    if (isNaN(guess) || guess < 1 || guess > 99) {
      console.log("Please enter a valid number between 1 and 99.");
      askguessNumber();
    } else if (guess < number) {
      console.log("Your guess is low");
      askguessNumber();
    } else if (guess > number) {
      console.log("Your guess is high");
      askguessNumber();
    } else {
      console.log("Congrats, you guessed it!");
      rl.close();
    }
  });
}

askguessNumber();
