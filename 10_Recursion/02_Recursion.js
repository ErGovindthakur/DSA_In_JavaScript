// Exploring the important stuff about the recursion

let myFunc = (n) =>{
     // Applying the base condition here
     // if(n == 0){
     //      return
     // }

     // Applying base condition to number in ascending order
     if(n == 11){
          return
     }
     // console.log("My function is running",n)
     myFunc(n + 1)
}

myFunc(1)

// Interview Question 

// Q) 1. Find the factorial of a number using recursion
let factorial = 1;
const myFact = (n) => {
     if(n === 0){
          return
     }
     myFact(n - 1)
     factorial = factorial * n;
     // console.log(factorial, n)
     return factorial
}

console.log(myFact(9)) // Time complexity = O(n)

// Q) 2. Find the sum of all the elements of the given array using recursion

const findSumOfArray = (myArray) => { 
     // Find the sum of array element without using recursion
     let sum = 0
     let counter = 0;
     myArray.map((val) => {
               sum += val;
     })
     return sum;
}
console.log("The sum of array element without using recursion =",findSumOfArray([1,2,3,4,5]))

// Finding the sum of array element by using recursion

const sumOfArrayRec = (myArray) => {
     // Time complexity of this method = 
     if(myArray.length === 0){
          return 0;
     }
     // return  myArray[myArray.length - 1]  + sumOfArrayRec(myArray.slice(0,myArray.length - 1))

     // writing some better code here
     const lastElement = myArray.pop()
     return lastElement + sumOfArrayRec(myArray)
}
console.log("Sum of array element using recursion =",sumOfArrayRec([1,2,3,4,5]))

// ************************************ Let's do it********************
// Find the product of element of the array using recursion
// Find fibonacci Number using recursion