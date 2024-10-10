// Exploring every things about .map() method
// (Use Quokka.js Extension to see the result live without going at terminal)
let myArray = [
     {name:'Ajay', age:21, profession:'Java-Developer'},
     {name:'Vijay',age:23, profession:'js-Developer'},
     {name:'Joe',age:27, profession:'Designer'}
]

let showResult = myArray.map((value,i) => {
     // Note -: .map() can't be applied at array of obj
     return(
          value.age 
     )
})
console.log(showResult)

// Understanding polyfills of .map() method

Array.prototype.myMap = function(callback){
     const result = []
     for(let i = 0; i<this.length; i++){
          result.push(callback(this[i],i,this))
     }
     return result
}

let myEmployees = [
     {name:'Ajay', age:21, profession:'Java-Developer'},
     {name:'Vijay',age:23, profession:'js-Developer'},
     {name:'Joe',age:27, profession:'Designer'}
]

let showMyEmployeesData = myEmployees.myMap(function(employee){
     return employee.name
})
console.log(showMyEmployeesData)


