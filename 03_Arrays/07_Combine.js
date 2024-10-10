// Practicing all about array in js

// Array declaration and invocation

// ********************************** First unit ****************************

/*
let myArray = [1,2,3,4,'Govind',5,6,6,7,8,9];
console.log(myArray)
// Accessing the particular index of the array
console.log(myArray[0])
console.log(myArray[4])

// Applying push() and pop() operation at this array

myArray.push(10) // inserting 10 at last index of this array
console.log(myArray)
myArray.pop() // removing the element present at the last index of array
console.log(myArray)

// Applying the shift and unshift operation at the array

myArray.unshift(0) //inserting 0 at first index of this array
console.log(myArray)
myArray.shift() //removing 0 at first index of this array
console.log(myArray)
*/

// **************************** Second unit *******************************

/*
let myArray2 = [1,2,3,4,5,{'name':'Govind', age:19},6,7,8,9,'Hello']

// Applying simple for loop

for(let i = 0; i<myArray2.length; i++){
     console.log(myArray2[i])
}

// Applying forEach loop

myArray2.forEach((value)=> {
     console.log(value)
})

// Applying for of loop

for(let value of myArray2){
     console.log(value)
}
*/

// *************************** Third unit ***********************************

// This unit contains the interviews question about the array

// Q) 1. Find if the elements present in array or not (using custom method and inbuilt method of js)

/*
let myArray3 = [1,2,3,4,5,'Hello','Govind',false,true]

// Iterating for of loop at this array

let findElement = (myArray3,target) => {
     for(let find of myArray3){
          if(find === target)
               return true
     }
     return false
}
console.log(findElement(myArray3,'Govind'))

// Doing the same task using forEach loop

let findElement2 = (myArray3,target) => {
     let found = false
     myArray3.forEach((element) => {
          if(element === target)
               found = true
     })
     return found
}
console.log(findElement2(myArray3,4))

// Doing the same task using normal for loop

let findElement3 = (myArray3,target) => {
     for(let i = 0; i<myArray3.length; i++){
          if(myArray3[i] === target){
               return true
          }
     }
     return false
}
console.log(findElement3(myArray3,'Hello'))

// Performing the same operation using the .some() method

let findElement4 = (myArray3,target) => {
   return myArray3.some((element) => {
          return element === target
     })
}
console.log(findElement4(myArray3,'Hello'))

// Let's explore inbuilt method
let showResult = myArray3.includes('Hello')
console.log(showResult) // Determines whether an array includes a certain element, returning true or false as appropriate.

// Q) 2. Check the elements present in array or not, if present return its index

// using in built method

let showIndex = myArray3.indexOf('Hello')
console.log(showIndex)

// customize way to solve this problem

let showIndexNum = (myArray3,target) => {
     for(let i = 0; i<myArray3.length; i++){
          if(target === myArray3[i]){
               return i
          }
     }
     return -1
}
console.log(showIndexNum(myArray3,'Hello'))
 */

// ******************************* CRUD ******************************

// Exploring all about splice() method

/*
let myArray4 = [1,2,3,4,5,6,7,8,9];
console.log(myArray4)

// Deleting 6 to 8
myArray4.splice(5,3)
console.log(myArray4)

// Again Adding 6 to 8
myArray4.splice(5,0,6,7,8)
console.log(myArray4)
 */

// Exploring the slice method

/*

let myArray5 = [1,2,3,4,5]
let slicedArray = myArray5.slice(1,3)
console.log(myArray5)
console.log(slicedArray)
 */

/*
Interview Question -:
1) What is difference between splice and slice
Ans-: splice -: a) It is used to delete , add, and update the element at specific index. 
b) It change the original array as resultant

slice -: It provides us subArray but doesn't change original array
*/

// ***************** Shallow copy Vs Deep copy ***********************

let myArray6 = [1,2,3,4,5,6];

// Shallow copy -: change in one array can be directly applied at change in other array

/*
let ShallowCopiedArray = myArray6

ShallowCopiedArray.push(7)
console.log(myArray6,ShallowCopiedArray)
 */

// Deep copy Array -: change in one array can not be directly applied at change in other array

/*
let myArray7 = [1,2,3,3,4,5,6,7]
let DeepCopiedArray = [...myArray7]

 DeepCopiedArray.splice(3,1)
console.log(myArray7,DeepCopiedArray)
 */

// ************************* Array sorting and Reversing ****************************
/*
let myArray8 = [1,3,4,6,5,7,9,8,10]

// Inbuilt method to sort array in js
let sortedArray = myArray8.sort() // Time complexity = O(NlogN)
console.log(sortedArray)

// Modification in sorting the array (Sorting in reverse order)

let sortedArray2 = myArray8.sort((a,b) => b-a) // Time complexity = O(NlogN)
console.log(sortedArray2)

// Let reverse the sortedArray2
let reverseSortedArray2 = sortedArray2.reverse()
console.log(reverseSortedArray2)
 */

// ***************************** .map(), .filter(), .reduce() ********************

let myArray9 = [-1,-2,-3,0,1,2,3]

// .map() => It just work like a forEach loop 

let mappedArray = myArray9.map((value,index) => {
     return (
          value * value
     )
})

console.log(mappedArray)

// .filter() => It also a loop or array method

let filteredArray = myArray9.filter((value,index) => {
     return(
          value >= 0
     )
})
console.log(filteredArray)

// .reduce() => It is also a array method 

let reducedArray = myArray9.reduce((prev,curVal) => {
     return(
          prev + curVal
     )
},0)
console.log(reducedArray)

// filter() Vs find()

let def = [1,2,3,4,5,6,7,8,9];
// Explanation -: Filtered Array return all the values greater than 4, otherwise empty array
let filteredArray2 = def.filter((value,i) => {
     return value > 4
})
console.log(filteredArray2) // output = [5,6,7,8,9]

// Explanation -: Returns the value of the first element in the array where predicate is true, and undefined otherwise.
let findArrayValue = def.find((value,i) => {
     return value > 4
})
console.log(findArrayValue) // output = 5