// Shallow copy Vs Deep copy

// 1) Shallow copy -: Here change in one array can  apply change in copied array automatically

let testShallow = [1,2,3,4,5,6,7,8,9];
let copyTestShallow = testShallow;
//eg -:
copyTestShallow.splice(1,3,"a","b","c") // Both array will be changed automatically

console.log(testShallow, copyTestShallow)

// 2) Deep copy -: Here change in one array can't apply in copied array

//eg -:
let testDeep = [1,2,3,4,5,{"name":"Govind"},6,7,8,9];
// There are various method to deep copy
let copyTestDeep1 = [...testDeep]; //1st method By using spread operator
let copyTestDeep2 = Array.from(testDeep) // 2nd method By using Array.from() method
let copyTestDeep3 = testDeep.concat() // 3rd method By using .contact() method

// Changing copyTestDeep1 
copyTestDeep1.splice(1,3,{'name':'Govind Thakur'})
// Changing copyTestDeep2
copyTestDeep2.splice(1,3,{'age':19})
// Changing copyTestDeep3
copyTestDeep3.splice(1,3,{'Profession':'Software-Developer'})
console.log(testDeep)
console.log(copyTestDeep1)
console.log(copyTestDeep2)
console.log(copyTestDeep3)

// How to add or concat two or more array together

let arr1 = [1,2,3,4,5];
let arr2 = ['a','b','c','d','e']
let arr3 = ['1a','2b','3c','4d','5e']

// Adding or concating all array together
let newArray = [...arr1,...arr2,...arr3]
console.log(newArray)


// Q) 1. Check if two arrays are equal or not

let isArrayEqual = (arr1, arr2) => {
     // if(arr1.length !== arr2.length){
     //      return false
     // }
     // for(let i = 0; i<arr1.length; i++){
     //      if(arr1[i] !== arr2[i]){
     //           return false
     //      }
     // }
     // // return true

     // 2nd method 
     return arr1.length === arr2.length && arr1.every((elem, i)=>arr1[i] === arr2[i])
}
console.log(isArrayEqual([1,2,3],[1,2,3]))