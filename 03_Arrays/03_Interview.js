// Q) 1.Find the element present in array or not

let arrayToFind = [1,2,3,4,5,{name:'Govind'},'Hello', true,6,7,8,9]

let findElement = (arrayToFind,target) => {
for(let x of arrayToFind){
     if(x === target)
     return true
}
return false
}

console.log(findElement(arrayToFind,5))

// Inbuilt method to find the element present in array or not
console.log(arrayToFind.includes('Hello'))

// Q) 2. Check the elements present in array or not, if present return its index

console.log(arrayToFind.indexOf('Hello')) // Inbuilt method to return the index if present , if not return -1 otherwise

// Customize way to find the index of array
console.log('Customized way to return the index of array ----:')
let returnIndex = (arrayToFind,target) => {
     for(let i = 0; i<arrayToFind.length; i++){
         if(arrayToFind[i] === target){
          return true,i
         }
     }
     return false
}
console.log(returnIndex(arrayToFind,'Hello'))