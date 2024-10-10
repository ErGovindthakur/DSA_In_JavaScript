// Learning how to sort an array in ascending or descending order

let ArrayToSort = [6,5,4,3,2,1]
ArrayToSort.sort() // O(NlogN)
console.log(ArrayToSort) // ascending order

ArrayToSort.sort((a,b) => b-a) // O(NlogN)
console.log(ArrayToSort)

// How to Reverse an array
ArrayToSort.reverse() // O(NlogN)
console.log(ArrayToSort)

// Exploring .map(), .filter() and .reduce() method in Array

let MixArray = [-3,-2,-1,0,1,2,3]

// Applying .map() method -: It simply copy the array and return the the value

let mappedArray = MixArray.map((elem, i) => {
     return elem * elem
})
console.log(mappedArray)

// Applying .filter() method -: Its simply filter the value 

let filteredArray = MixArray.filter((value, i) => {
     return value > 0
})
console.log(filteredArray)

// Applying .reduce() method -: It simply return a callback function like .map() and .filter (Contains two parameters -:  1) value, 2) accumulator

let reducedArray = MixArray.reduce((value, acc)=> {
     return value + acc
} ,0)

console.log(reducedArray) // output = 0

// Let's know about flat(depth) method -: It generally returns an array in a simply array form as per depth is provided

let array = [1,2,3,[1,2, [3,4],5],6,7,8,9]
console.log(array)
let flattedArray = array.flat(2)
console.log(flattedArray)


// filter() Vs find()

let def = [1,2,3,4,5,6,7,8,9];
// Explanation -: Filtered Array return all the values greater than 4, otherwise empty array
let filteredArray2 = def.filter((value,i) => {
     return value > 4
})
console.log(filteredArray2)

// Explanation -: Returns the value of the first element in the array where predicate is true, and undefined otherwise.
let findArrayValue = def.find((value,i) => {
     return value > 4
})
console.log(findArrayValue)