// Again solving the same problem by my own

// Q) 1. Print the sum of all natural numbers

/*
let sumOfNaturalNum = () => {
     let num = 9
     let sum = 0; // Here we store the data
     for(let i = 0; i<=num; i++){
          sum = sum + i
     }
     console.log(`The sum of ${num} natural numbers = ${sum}`)
}
sumOfNaturalNum()
 */

// Q) 2. Find the sum of digit = 12345

/*
let sumOfDigit = () => {
     let digit = 12345;
     let digitCounter = digit;
     let sum = 0;
     while(digit > 0){
          let rem = digit % 10;
          sum = sum + rem;
          digit = Math.floor(digit / 10)
     }
     console.log(`The sum of ${digitCounter} = ${sum}`)
}
sumOfDigit()
 */

// Q) 3. Count the number of digit of a given number

/*
let digitCounter = () => {
     let digit = 8084384;
     let showDigit = digit;
     let counter = 0;
     while(digit > 0){
          counter = counter + 1;
          digit = Math.floor(digit / 10)
     }
     console.log(`The number of digit in ${showDigit} = ${counter}`)
}
digitCounter()
 */

// Q) 4. Check the given number of letter is Palindrome or not

/*
let checkPalindrome = () => {
     let originalLetter = 121;
     let storeOriginalLetter = originalLetter;
     let reverseLetter = 0;
     while(originalLetter > 0){
          let rem = originalLetter % 10;
          reverseLetter = (reverseLetter * 10) + rem;
          originalLetter = Math.floor(originalLetter / 10)
     }
     console.log(storeOriginalLetter === reverseLetter ? `Yes, The given letter ${storeOriginalLetter} is Palindrome`:`${storeOriginalLetter} is Not a Palindrome`)
}
checkPalindrome()
*/

// Q) 5. Find the fibonacci series of 'n'

/*
let FindFibonacci = (n) => {
     let prev = 0;
     let cur = 1;
     let next;
     if(n <= 2){
          return n
     }
     for(let i = 2; i<=n; i++){
          next = prev + cur;
          prev = cur;
          cur = next
     }
     return `The fibonacci series of ${n} = ${next}`
}
console.log(FindFibonacci(6))
 */

// Q) 6. Find the missing number from the given array
/*
let FindMissingNum = () => {
     let missingNum = [1,2,3,4,5,7,8,9];
     let sumOfFirstArray = 0;
     let sumOfTotalNum = 0;
     // Finding the sum of first array
     for(let i = 0; i<missingNum.length; i++){
          sumOfFirstArray = sumOfFirstArray + missingNum[i]
     }
     // Running the second loop to calculate the actual highest value of element present in array
     for(let i = 1; i<=9; i++){
          sumOfTotalNum = sumOfTotalNum + i
     }
     let findMissing = sumOfTotalNum - sumOfFirstArray
     return `The missing number = ${findMissing} `
}
console.log(FindMissingNum())
 */

// Q) 7. Check if the given word is palindrome or not

/*
let checkPalindrome = () => {
     let word = 'LeveL';
     let normalizedWord = word.toLowerCase()
     let reverseWord = normalizedWord.split().reverse().join()

     // Writing condition to check whether it is palindrome or not
     let checker = normalizedWord === reverseWord ? 'Yes, It\'s a Palindrome':'Not a Palindrome'

     console.log(checker)
}
checkPalindrome()
 */


// Find the missing number

const FindNum = () => {
     let myNum = [1,2,3,4,5,7,8,9];
     let sumOfNum = 0;
     let sumOfAvailNum = 0;
     let result ;

     for(let i= 1; i<=9; i++){
          sumOfNum = sumOfNum + i;
     }

     for(let i = 0; i<myNum.length; i++){
          sumOfAvailNum = sumOfAvailNum + myNum[i]
     }
     
     result =  sumOfNum - sumOfAvailNum ;
     console.log(result)

}
FindNum()