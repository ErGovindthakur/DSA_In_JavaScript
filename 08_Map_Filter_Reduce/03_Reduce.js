// Exploring everything about the reduce method

let courseDetails = [
     {courseName:'JavaScript',teacher:'Hitesh',price:1299},
     {courseName:'Python',teacher:'Harry',price:999},
     {courseName:'MongoDB',teacher:'Thapa',price:599},
     {courseName:'Backend',teacher:'Harsh',price:1999},
     {courseName:'Git-Hub',teacher:'Hitesh',price:999},
     {courseName:'Django',teacher:'Hitesh',price:2999},   
]

let HiteshTotalCoursePrice = courseDetails.filter((courses) => {
     return courses.teacher === 'Hitesh'
}).reduce((prev,cur,i,arr) => {
     return prev + cur.price
},0)

console.log(HiteshTotalCoursePrice)

// *************************** Problem solving *********************************

// Q) 1. Given an array of strings , find the longest word and return its length

const word = ['apple','banana','cherry','dragonFruit','elderBerry']

// Note -: Firstly i have to iterate loop at whole array

let showLongestWordLength = word.reduce((acc,cur) => {
     let wordLength = cur.length
     return wordLength > acc ? wordLength:acc;
},0)
console.log(showLongestWordLength)

// Q) 2.Given an array of strings , find the longest word 

let showLongestWord = word.reduce((acc,cur) => {
     return cur.length > acc.length ? cur:acc
},'')

console.log(showLongestWord)

// Q) 3. Find the largest number of this given array and also show it's factorial

let largestNum = [1,2,3,7,8]

let showFactorial = largestNum.reduce((prev,cur)=> {
     return prev + cur
},0)
console.log(showFactorial)