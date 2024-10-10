// Exploring all about Arrays in js

/*
Q) 1. What is an array ?
Ans -: Array is nothing but the collection of items in a single variable.
*/

/*
let arr1 = []; // Way to create array
let arr2 = new Array() // 2nd way to create array
console.log(arr1,arr2)
console.log(typeof(arr1,arr2)) // Array is an object
 */

// Note -: Arrays in js is quite different from array in other programming language. eg -: c, c++, java etc.

// Now time to learn how to declare an array and access it's elements

/*
let arr1 = [1,2,3,4,5,6,7,8,9,[1,2,3]];
console.log(arr1) // Printing all elements of arr1

let firstElem = arr1[0]  // Time complexity = O(1)
console.log(`First Element of arr1 = ${firstElem}`) // Accessing first elem of array

let lenOfArr1 = arr1.length
console.log(`Length of arr1 = ${lenOfArr1}`) // Finding length of array

let lastElem = arr1[lenOfArr1 - 1];
console.log(`Last element of arr1 = ${lastElem}`)
 */


// Now time to learn about pop() and push() operation of array

let arr2 = [1,2,3,{name:'Govind'},4,5,['Govind','thakur'],6,7,true,false,8,9,[0,false]]

console.log(arr2)

// pop() method is used to delete the value from last index of array

let popOperation = arr2.pop() // Time complexity = O(1)
console.log(popOperation)
console.log(arr2)


// push() method is used to add the element at last index of an array

let pushOperation = arr2.push([1,true]) // Time Complexity = O(1)
console.log(arr2)

// unshift() method is used to add element at the first index of an array

let unshiftOperation = arr2.unshift(0) // Time complexity = O(N)
console.log(arr2);

// shift() method is used to remove element from first index of an array

let shiftOperation = arr2.shift() // Time complexity = O(N)
console.log(arr2)

