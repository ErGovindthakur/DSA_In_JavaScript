// Exploring the concept of recursion

/*
Note -: A function which call it self again and again called Recursive function and this process is called recursion.

1) Recursion always trust the function
2) Run the function n times
*/

// Example to explore the recursion

function fun(n){
     // It will work in reverse order perfectly
     if(n == 0){
          return
     }
     // console.log('Recursion', n)
     fun(n - 1)
}
fun(10)


// Interviews question

// Q 1) Find the factorial of a number using the recursion

function factorial(n){
     // Applying the base condition to stop the recursive function
     if(n == 1){
          // Here return value is playing important role
          return 1;
     }
     return n*factorial(n-1);
}

let NumFact = factorial(8)
// console.log(NumFact)


// Factorial program using iteration
function factorial(n) {
     let result = 1;
     for (let i = n; i > 0; i--) {
         result *= i;
     }
     return result;
 }

 // fibonacci program solved by recursion
 function fibonacci(n) {
     // Applying base condition 
     if (n <= 1) return n;
     return fibonacci(n - 1) + fibonacci(n - 2);
 }
 // Calling the fibonacci function
 let fibValue = fibonacci(5);
//  console.log('The fibValue of 5 = ' + fibValue);

 // fibonacci program solved by iteration
 function fibonacci(n) {
     let a = 0, b = 1, temp;
     for (let i = 2; i <= n; i++) {
         temp = a + b;
         a = b;
         b = temp;
     }
     return b;
 }
 
// Writing the recursive code to find the sum of all the elements of an array

function sumOfArray(arr,n){
     if(arr.length === 0) return 0;
     return arr[arr.length - 1] + sumOfArray(arr.slice(0,arr.length - 1))
}

console.log(sumOfArray([1,2,3,4,5,6],5))