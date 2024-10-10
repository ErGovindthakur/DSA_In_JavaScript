// Exploring everything about filter method in js

let courseDetails = [
     {courseName:'JavaScript',teacher:'Hitesh',price:1299},
     {courseName:'Python',teacher:'Harry',price:999},
     {courseName:'MongoDB',teacher:'Thapa',price:599},
     {courseName:'Backend',teacher:'Harsh',price:1999},
     {courseName:'Git-Hub',teacher:'Hitesh',price:999},
     {courseName:'Django',teacher:'Hitesh',price:2999},   
]

// Applying filter method at above array of objects

let showResult = courseDetails.filter((value,i) => {
     if(value.teacher === 'Hitesh'){
          return(
               value.price < 1200
          )
     }
})

console.log(showResult)


// Writing pollyFils of .filter() method

Array.prototype.filters = (callback) => {
     let result = []
     for(let i = 0; i<this.length; i++){
          if(callback(this[i],i,this)){
               result.push(this[i])
          }
     }
     return result
}

let filterValue = courseDetails.filters((courseData)=> {
     return courseData.price > 1200
})
console.log(filterValue)

// Q) 1. Given an array of objects representing students, calculate the average score of the students who have scored above 90

const students = [
     {name:'john',score:85},
     {name:'Honey',score:92},
     {name:'joe',score:88},
     {name:'Emma',score:95},
     {name:'Daniel',score:90},
]

// Note-: firstly you have to find the score greater than 90
// After that you have to calculate the avg score

let showAvg = students.filter((students) =>{
     return students.score >= 90
}).reduce((acc,cur,i,arr) => {
     return acc + cur.score/arr.length
},0)
console.log(`The Avg score = ${showAvg.toFixed(2)}`)