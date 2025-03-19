// Loop -> Helps in iterating something
// 1. For loop

// for (start; condition; change) {
//   body;
// }

// 1-22 (forward)
// for(let i = 1; i<23; i++){
//      console.log(i);
// }

// 200 - 100 (backward)
// for(let i = 200; i>=100; i--){
//      console.log(i)
// }

// Valid loop syntax (but runs infinite times)

// for(let i = 1; i<=10;){
//      console.log("Valid but runs infinite times")
// }
// for(let i = 1; ;){
//      console.log("Valid but runs infinite times")
// }
// for(; ;){
//      console.log("Valid but runs infinite times")
// }

// Note -> especially for() loop disturb by semicolon(;;) otherwise works but infinite times

// 1. Find the sum of n natural number including all edge case

// 2. Find the factorial of n natural number including all edge case

// 3. Find the factors => (completely divisible by the numbers and reminder should be zero) of given number including all edge cases and must be optimized

// 4. Find the prime => (The number is divisible by 1 and itself, but should not be a prime number) number within the given number including all edge cases and must be optimized

// let pr = prompt("Enter your n value -: ");
let pr = 7;

if (pr === null) {
  console.log("Program cancelled");
} else {
  let n = Number(pr);
  if (isNaN(n)) {
    console.log("Enter valid input of n ");
  } else {
    if (n > 0) {
      //1. sum of n natural num

      // let sum = 0;
      // for(let i = 1; i<=n; i++){
      //      sum += i;
      // }
      // console.log(`sum of ${n} natural num = ${sum}`);

      // 2. factorial of given num

      // let fact = 1;
      // for(let i = 1; i<=n; i++){
      //      fact *= i;
      // }
      // console.log(fact);

      // 3. factors of given num

      // for(let i = 1; i<=Math.floor(n/2); i++){
      //      if(n%i==0){
      //           console.log(i);
      //      }
      // }
      // console.log(n);

      // 4. find the prime num

      // first way (Brute force)
     //  let primeHai = true;
     //  for (let i = 2; i <= Math.floor(n / 2); i++) {
     //    if (n % i == 0) {
     //      primeHai = false;
     //      break;
     //    }
     //  }
     //  console.log(primeHai);

     // second way
//     console.log(isPrime(n));
    } else {
      console.log("Input should positive and more than zero");
    }
  }
}

function isPrime (n){
     if(n<=1) return false;
     if(n==2) return true; // only the prime number which is even
     if(n%2==0) return false;
     for(let i = 3; i<=Math.floor(Math.sqrt(n)); i+=2){
          if(n%i==0) return false;
     }
     return true;
     // Note -: If a number is being not divided by until it's square root it also can't be divided by other number
}

// break and continue
// for(let i = 1; i<=9; i++){
//      // console.log(i);
//      // if(i===5){
//      //      break;
//      // }

//      if(i===5){
//           continue;
//      }
//      console.log(i);
// }