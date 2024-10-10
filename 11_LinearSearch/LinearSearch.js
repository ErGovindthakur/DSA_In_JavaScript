// Exploring linear search in javascript


// Creating a function to find element available in array linearly

const linearSearch = (myArray,target) => {
     // applying loop to iterate whole array
     //myArray.map((val,index) => {
          //      if(val === target){
               //            console.log(val,index)
               //      }
               // })
               
               // Solving the same problem using simple for loop
               for(let val = 0; val<myArray.length; val++){
                    // applying condition  to solve the code
                    if(myArray[val] === target){
                         return ["index = ", val, myArray[val]];
                    }
               }
     return -1;
}
console.log(linearSearch([1,2,3,5,4,6,7,8,9],9))



const myArray = [1,2,3,5,6,4,9,8,7]

// Other inbuilt method to solve the problem

console.log(linearSearch(myArray,5))
// console.log(myArray.includes(5)) // true
// console.log(myArray.find(num => num > 0))
// console.log(myArray.findIndex(num => num>3))