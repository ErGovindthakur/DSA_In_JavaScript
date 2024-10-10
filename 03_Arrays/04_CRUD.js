// Learning How to delete, add and update element from specific index

// Defining an array to perform above operations
let performAction = [1,2,3,4,5,'Hello',{"name":"Govind"},6,7,8,9,10]
// 1) deleting the specific index
console.log(performAction) // Actual Array

/*
 The zero-based location in the array from which to start removing elements.

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 */


console.log(performAction.indexOf(8))
performAction.splice(7,3) // Deleting the value from 1 to 3 index
console.log(performAction) // Array after applying splice method

performAction.splice(1,0,5,5,5,5,5) // Deleting nothing but adding 5 times 5
console.log(performAction)

performAction.splice(1,3,6,7,8,9) // Deleting 1 to 3 index and adding 6,7,8,9
console.log(performAction)



/*
Interview Question -:
1) What is difference between splice and slice
Ans-: splice -: a) It is used to delete , add, and update the element at specific index. 
b) It change the original array as resultant

slice -: It provides us subArray but doesn't change original array
*/


let myArray = [1,2,3,4,5,6,7,8,9];
let slicedArray = myArray.slice(1,3) // Here last index is not included
console.log(slicedArray)
console.log(myArray)

// But splice 
let splicedArray = myArray.splice(1,3)
console.log(splicedArray)
console.log(myArray)






