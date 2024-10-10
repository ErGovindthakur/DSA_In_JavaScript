// Strings in javaScript

let firstName = 'Govinda';
let lastName = 'Govindas'

// length of the above string
console.log(firstName.length)

// Accessing string elements 
console.log(firstName.indexOf('a')) // It's Generally returns index of particular index , -1 otherwise.
console.log(firstName.charAt(4)) // It's returns which elements is available at index no 4 or any particular index.
console.log(firstName.charCodeAt(1)) // It's returns the ski values of the letter available at particular index
console.log(firstName.charCodeAt(0))
let myName = 'Govind_g'
console.log(myName.charCodeAt(7), myName.charCodeAt(1))
console.log(firstName.charCodeAt(6))

console.log(firstName.indexOf('g')) // It's return the index of particular element available in the strings otherwise -1

// Checking if 'i' is present in string or not
console.log('checking the character is available or not')
console.log(firstName.includes('G'))  // It always returns true if the element available in the string otherwise false
console.log(firstName.indexOf('g'))
console.log(firstName.lastIndexOf('o')) // It returns the last index where the elements is present

// comparing two strings
console.log('The Result is ',firstName.localeCompare(lastName)) // If element matched it returns 0, otherwise -1

// Replace method 
let mySentence = 'Hey Ajay, How are you ajay ?';
let newSentence = mySentence.replace(/Ajay/gi, 'Vijay');
console.log(newSentence);


// substring of a string

console.log(mySentence.slice(3,9)) // output = Ajay,(3 is starting index, and 9 is end index both are included)
console.log(mySentence.substring(3,9)) // output = Ajay,(3 is starting index, and 9 is end index both are included)

// return substring array
console.log(mySentence.split('')) // split whole string as an individual value
console.log(mySentence.split(' ')) // split whole string according to space count
console.log(mySentence.split(',')) // split whole string according to comma(,)


// Again joining the splitted array into a string
let individual = mySentence.split('')
let strings = individual.join('')
console.log(strings)

let name = new String('Govind')
console.log(typeof(name))

let myArray = ['Govind',99,'is',true]
console.log(typeof(myArray))

// Exploring trim() method 
let mySentences = '  Hey, I\'m  Genius  '
console.log(mySentences)
console.log(mySentences.trim())
console.log(mySentences.trimEnd())

// Let's Explore trim method more
let trimSentence = mySentences.split(' ')
console.log(trimSentence)

let sorted = trimSentence.sort()
console.log(sorted)
console.log(sorted.splice(0,5))

sorted.shift()
console.log(sorted)

sorted.push('Genius')
console.log(sorted)

let intoString = sorted.join(' ')
console.log(intoString)
// Short way to doing above work

let str = '   Hey , I,m     Genius      ';
let cleanedStr = str.trim().replace(/\s+/g, ' ');
console.log(cleanedStr); 

let test = 'Hey,     Govind'
console.log(test)
let testing = test.trim().replace(/\s+/g,' ')
console.log(testing)

let revString = 'atta';
let show = '';
for(let i =revString.length - 1; i>=0; i--){
     show += revString[i]
}
console.log(show)
let check = 'AttA'
let normalizedWord = check.toLowerCase()
let isPalinDrome = show === normalizedWord ? 'True':'False';
console.log(isPalinDrome)