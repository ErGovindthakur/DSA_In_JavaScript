// Exploring everything about .map() method

let myArrayMap = [1,2,3,4,5,6,7,8,9];

let mappedArray = myArrayMap.map((value,i) => {
     return(
          value*value
     )
})
console.log(mappedArray)

// Applying .map() method at array of objects

let empDetails = [
     {name:'Ajay', position:'Junior-Developer',age:19},
     {name:'Joe', position:'Web-Developer',age:23},
     {name:'Emma', position:'Web-Designer',age:22},
]

let empDetailsMap = empDetails.map((value) => {
     let position = value.position;
     let age = value.age
     return(
          [{age,position}]
     )
})

console.log(empDetailsMap)

// Exploring the polyfills of .map() method

Array.prototype.Mapper = function(callback){
     let result = []
     for(let i=0; i<this.length; i++){
          result.push(callback(this[i],i,this))
     }
     return result
}

let showPollyFillsResult = myArrayMap.Mapper((callback) => {
     return callback*callback
})

console.log(showPollyFillsResult)