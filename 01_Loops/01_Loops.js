// Question solving using loops in js

// Q) 1. Print sum of all natural numbers from 1 to 9

/*
let sumOfNaturalNum = () => {
     let sum = 0;
     let n = 9
     for(let i = 1; i<=n; i++){
          sum = sum + i;
     }
     console.log(`Sum of ${n} natural numbers is = ${sum}`)

     // return n*(n+1)/2 (shortcut to find the sum of n natural numbers)
     }
sumOfNaturalNum()
*/

// Q) 2. Find sum of digit 12345

/*
let sumOfRem = () => {
     let digit = 12345;
     let sum = 0;
   
     while(digit > 0){
          let rem = digit % 10;
          sum = sum + rem;
          // This below line is written for satisfying the conditions in while loop
          digit = Math.floor(digit/10)
     }
     console.log(sum)
}
sumOfRem()
*/

// Q) 3. Count the number of digits of the given number

/*
let countDigit = () => {
     let countDigits = 89679;
     let count = 0
     while(countDigits > 0){
          countDigits = Math.floor(countDigits/10)
          count++
     }
     console.log(count)
}
countDigit()
*/

// Convert any "-ve" Number in positive num

/*
let negToPos = -112;
console.log(negToPos)
let pos = Math.abs(negToPos)
console.log(pos)
*/


// Solving above problem using do while loop

/*
let useDoWhileLoop = (digitToCount) => {
     let count = 0
     do{
          digitToCount = Math.floor(digitToCount/10)
          count ++
     }
     while(digitToCount > 0)
          return count
}
console.log(useDoWhileLoop(1234));
*/

// Q) 3. Check the given number of letter is palindrome or not

/*
let checkPalindrome = () => {
     let num = 121;
     let updated = 121;
     let ans ;
     let rev = 0
     while(num > 0){
         let rem = num % 10
         rev = (rev * 10) +rem
         num = Math.floor(num/10)
         ans = (rev === updated)? `Yes, It's a Palindrome`:'NO, not a palindrome'
         }
         return ans;
     }
console.log(checkPalindrome())
*/

// Q) 4. Find the fibonacci Number 

/*
let FindFibonacci = (n) => {
   let prev = 0;
   let cur = 1;
   let next;
   if(n <= 2){
     return n
   }
   for(let i = 2; i<=n; i++ ){
     next = prev + cur;
     prev = cur;  //Assign {prev = 1}
     cur = next; // Assign  {cur = next => 0 + 1}
   }
   return next
}
console.log(FindFibonacci(6))
*/

// Q) 5. Find missing number

/*
let FindMissingNum = () => {
     let myNum = [0,1,2,3,4,5,7,8,9]
     let sumOfI = 0;
     let sumOfMyNum = 0;

     for(let i = 0; i <= myNum.length; i++){
          sumOfI = sumOfI + i
     }

     for(let i = 0; i<myNum.length; i++){
          sumOfMyNum = sumOfMyNum + myNum[i]
     }

     return `The missing number in array = ${sumOfI - sumOfMyNum}`

}
console.log(FindMissingNum())
*/

// Q) 6. Check if the given word is palindrome or not

/*
let isPalindrome = (word) => {
     let normalWord = word.toLowerCase()
     console.log(normalWord)

     let reverseWord = normalWord.split().reverse().join()
     // converting into lowercase and split it into an array to apply the reverse method and joining it convert into an string

     return normalWord === reverseWord ? 'It\'s a palindrome':'Not a palindrome'
}

let showResult = isPalindrome('Arra')
console.log(showResult)
*/

// Learning how to reverse an array
/*
console.log('Array Reversing')
let revArray = () => {
     let arrayToRev = [1,2,3,4,5,6];
     let reversedArray = []
     for(let i = arrayToRev.length - 1; i>=0; i--){
           reversedArray.push(arrayToRev[i])
     }
     return `Actual Array = ${arrayToRev} \nReversed array = ${reversedArray}`
}
console.log(revArray())
*/

