// Exploring Everything related to .reduce() method in js

let phoneDetails = [
     {name:'Iphone', price:120000, quantity:2},
     {name:'Samsung-Galaxy',price:45000, quantity:1},
     {name:'Google-Pixel', price:32000,quantity:2}
]

let showPhoneData = phoneDetails.reduce((prev, cur)=> {
     return prev + cur.price*cur.quantity
},0)

console.log(`The total price of Phones what you have selected = ${showPhoneData}`)

// Q) 1. Given an array of strings , find the longest word and return its length

const word = ['apple','banana','cherry','dragonFruit','elderBerry']

let findLongestLength = word.reduce((maxLength, word) =>{
     const currentLength = word.length;
     return currentLength > maxLength ? currentLength:maxLength
} ,0)
console.log(findLongestLength)

// Q) 2. Given an array of strings . find the longest word

let longestWord = word.reduce((LongWord,words)=> {
     return words.length > LongWord.length ? words:LongWord
},'')

console.log(longestWord)

// Q) 3. Find the factorial of largest number

let myFact = [1,2,3,5,4]

let findFactorial = myFact.reduce((largest , num) => {
     let currentFactorial = num;
     for(let i = 1; i<num.length; i++){
          currentFactorial *= num[i]
     }
     return currentFactorial > largest ? currentFactorial:largest
},0)
console.log(findFactorial)