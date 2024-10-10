// Here we will learn about the complexity (time complexity)

// 1st program to understand the time complexity

let sumOfArray = (num) => {
     let sum = 0; // Time complexity of sum = 0 => 1
     for(let i = 0; i<=num.length-1; i++){  // Time complexity of for loop => n
          sum = sum + num[i]
     }
     console.log(sum)  // Time complexity of log function = 0 => 1
}
sumOfArray([1,2,3,4,5,6])
/*That's why the time complexity of this problem is O(n + 2) Or O(n) */


// 2nd problem to find time complexity

let sumOfMatrix = (num) => {
     // let sum = [];
     let sum = 0;  // Time complexity of sum = 0 => 1
     for(let i = 0; i<num.length; i++){  // Time complexity of outer loop => n
          for(let j = 0; j<num[i].length; j++){ // Time complexity of inner loop => n
               //  sum.push(num[i][j])
               sum = sum + num[i][j]
          }
     }
     console.log(sum) // Time complexity of log() function => 1
}
sumOfMatrix([[1,2,3],[1,2,3]]) 
// That's why Total time complexity = O(n^2 + 2) Or O(n^2)

// 3rd problem to find the time complexity

// let arrayPush = () => {
//      let myArray = [   [1,2,3],
//                        [4,5,6]
//                    ]
// // let empArray = [];
// let sum = 0
// for(let i = 0; i<myArray.length; i++){
//      for(let j = 0; j<myArray[i].length; j++){
//           // empArray.push(myArray[i]);
//           sum = sum + myArray[i][j]
//      }
// }
// return sum
// }

// console.log(arrayPush())

let arrPush = (originalArray) => {
     let myArray = [];
     for (let i = 1; i <= originalArray; i = i * 2){ // Here Time complexity = log(n)
         myArray.push(i);
     }
     return myArray;
 }
 console.log(arrPush(3));
 

 // 4th problem to find the time complexity
 let sumOfDigit = () => {
     let digit = 123;
     let sum = 0
     while(digit > 0 ){
          let rem = digit % 10 
          sum = sum + rem
          digit = Math.floor(digit/10)
     }
     console.log(sum)
 }
 sumOfDigit() // The time complexity of this problem is also log(n)

 /*Note -: 
 To find the time complexity we must know that the 
 1) constant term (Time complexity => O(1))
 2) Loop (Time complexity => O(logN))
 3) Whenever you see (Multiplication and division in loop must write (0(logN)))
 */

/* Q) 1. Print pattern using js
***
***
***
*/
/*
let printPattern = (entries) => {
for(let i = 1; i<=entries; i++){
     let row = ""
     for(let j = 1; j<=entries; j++){
         row += '*'
     }
     console.log(row)
}
}
printPattern(3)
*/


/*
let digitPrintPattern = (digits) => {
     for(let i = 1; i<=digits; i++){
          let handler = ''
          let digitHandler = i/i + i -1;
          for(let j = 1; j<=digits; j++ ){
               let digitHandler2 = j/j 
               let value = digitHandler * digitHandler2;
               handler += value
          }
          console.log(handler)
     }
}
digitPrintPattern(3)
*/
