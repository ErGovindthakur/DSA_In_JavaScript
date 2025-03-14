// while loop

// let start;
// while(condition){
//      code;
//      change;
// }

// while loop -> It's used when we don't know how many time to code will execute and it can do all the stuff which a for can do

// let ans = prompt("Enter exit to close");

// while(ans !== 'exit'){
//      ans = prompt("Enter exit to close");
// }

// 1. sum of digit (1234 -> 10)
// 2. reverse the digit (1234 -> 4321)
// Note -> Reverse Eqn => ( rem = n%10; rev = rev*10+rem)
// 3. strong number -> They are the number which factorial's sum is equal to the actual number (eg -: 145 -> fact sum = 145)

let pr = prompt("Enter the digit");

if (isNaN(pr)) {
  console.log("Enter valid input");
} else {
  let n = Number(pr);
  if (n > 0) {
    //      // 1. sum of digit
    //     let sum = 0;
    //     while(n>0){
    //      let rem = n%10;
    //      sum += rem;
    //      n = Math.floor(n/10);
    //     }
    //     console.log(`Sum of given number  = ${sum}`)
    // 2. reverse the digit
    // let rev = 0;
    // while(n>0){
    //      let rem = n%10;
    //      rev = rev * 10 + rem;
    //      n = Math.floor(n/10)
    // }
    // console.log(rev);
    // 3. find strong number
    //     let n = 146;
    //     let sum = 0;
    //     let copy = n;
    //     while (n > 0) {
    //       let rem = n % 10;
    //       let fact = 1;
    //       for (let i = 1; i <= rem; i++) {
    //         fact = fact * i;
    //       }
    //       sum = sum + fact;
    //       n = Math.floor(n / 10);
    //     }
    //     if(sum === copy){
    //      console.log("Strong number -:",copy)
    //     }else{
    //      console.log("Not strong number");
    //     }
  } else {
    console.log("Enter the value greater than 0");
  }
}
