// do while loop -> It runs once whether the code is correct or not
// let i = 1;
// do{
//      console.log(i);
//      i++;
// }while(i<12)

// 1.Repeat hello until user enter the correct code

// let code = Number(prompt("Enter the code 1234"));

// do{
//      code = Number(prompt("Enter the code 1234"));
// }while(code !== 1234);

// 2. Guess the number

let random = Math.floor(Math.random() * 100 + 1);
let guess = 0;
let attempts = 5;
while (guess !== random && attempts > 0) {
  guess = Number(
    prompt(`Enter the number, and remaining attempts are ${attempts}`)
  );
  if (guess < 0 || isNaN(guess) || guess > 100) {
    console.log("Enter the number btw 1 to 100");
  } else if (guess < random) {
    console.log("Too low, try again");
  } else if (guess > random) {
    console.log("Too high, try again");
  } else {
    console.log("Congrats you guess the number -:", random);
  }
  attempts--;
}

if (attempts === 0 && guess !== random) {
  console.log("Game over, the correct number was", random);
}
