// Exploring all about the filter method

let myEmployees = [
     {name:'Ajay', age:21, profession:'Java-Developer'},
     {name:'Vijay',age:23, profession:'js-Developer'},
     {name:'Joe',age:27, profession:'Designer'}
]

// Writing simple filter method 
let showMyEmployeesData = myEmployees.filter((data,i) => {
     return(
          data.age >20
     )
})
console.log(showMyEmployeesData)

// Writing the polyfill of filter method to show the same result

Array.prototype.myFilter = (callback) => {
     const result = []
     for(let i = 0; i<this.length; i++){
          if(callback(this[i], i, this)){
               result.push(this[i])
          }
     }
     return result
}

let showData = myEmployees.myFilter((empAge) => {
     return empAge.age > 23
})
console.log(showData)

// Q) 1. Given an array of objects representing students, calculate the average score of the students who have scored above 90

const students = [
     {name:'john',score:85},
     {name:'Honey',score:92},
     {name:'joe',score:88},
     {name:'Emma',score:95},
     {name:'Daniel',score:90},
]

let findAvgScore = students.filter((high,i) => {
    return high.score >= 90
}).reduce((acc,cur,i,arr) => {
     let showAvg = acc + cur.score/arr.length 
     return showAvg
},0)
console.log(findAvgScore.toFixed(2))
