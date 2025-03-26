// Exploring must of things regarding to js

// String => It is something like group of characters which generally written with either single quotes ('') or double quotes ("") 

// Note => String is not an in js, but it something behave like because it works at indexing concept and they are "immutable"

let arr = [10,20,30,40,50];
arr[2] = 100;
// console.log(arr);

// Strings are immutable bcz once it created can't be change but you can reassign it to change the so that old string will not be impacted instead of that a new string is created .

// let str = "Govind Thakur";
// str + "Ji"; // it will not impact our string bcz it's immutable
// str = str + " Ji"; // Here we are not changing actual values we are assigning new string
// console.log(str);

// console.log(str.length);
// length is just a property not a function


// ****************** String Methods ********************

// 1. .slice (firstIndex,secondIndex) => Give us a substring
// console.log(str.slice(1,6)) // secondIndex is exclusive
// console.log(str.slice(-4,str.length)) // It also allow negative indexing

// 2. .substring(startIndex,endIndex) => similar to .slice but not accept negative index

// console.log(str.substring(2)); // it give us value from index 2 to last index

// 3. .toLowerCase(); and .toUpperCase();

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// 4. .concat() => helps to joint to string

// let a = "ab";
// let b = "c";
// console.log(a.concat(b));

// 5. .trim() 
// 6. .charAt(2)


let str = "Hello World"; 

// 1. Get string length
console.log(str.length); 

// 2. Get character at index
console.log(str.charAt(4)); 

// 3. Get Unicode of character
console.log(str.charCodeAt(0)); 

// 4. Get character at index (supports negative indices)
console.log(str.at(-1)); 

// 5. Concatenate strings
console.log(str.concat("!", " JavaScript")); 

// 6. Check if substring exists
console.log(str.includes("World")); 

// 7. Get first index of substring
console.log(str.indexOf("o")); 

// 8. Get last index of substring
console.log(str.lastIndexOf("o")); 

// 9. Match regex pattern
console.log(str.match(/\w+/g)); 

// 10. Replace first occurrence
console.log(str.replace("World", "JavaScript")); 

// 11. Replace all occurrences
console.log("Apple Apple".replaceAll("Apple", "Banana")); 

// 12. Search using regex
console.log(str.search("World")); 

// 13. Extract part of string (slice)
console.log(str.slice(0, 5)); 

// 14. Extract part of string (substring)
console.log(str.substring(0, 5)); 

// 15. Extract based on length
console.log(str.substr(6, 5)); 

// 16. Split into array
console.log(str.split(" ")); 

// 17. Convert to lowercase
console.log(str.toLowerCase()); 

// 18. Convert to uppercase
console.log(str.toUpperCase()); 

// 19. Remove spaces from both ends
console.log("  Trim me  ".trim()); 

// 20. Remove spaces from start
console.log("  TrimStart".trimStart()); 

// 21. Remove spaces from end
console.log("TrimEnd   ".trimEnd()); 

// 22. Pad string at start
console.log("5".padStart(3, "0")); 

// 23. Pad string at end
console.log("5".padEnd(3, "0")); 

// 24. Repeat string
console.log("Ha".repeat(3)); 

// 25. Check if string starts with
console.log(str.startsWith("Hello")); 

// 26. Check if string ends with
console.log(str.endsWith("World")); 

// 27. Compare two strings lexicographically
console.log("apple".localeCompare("banana")); 

// 28. Convert to string
console.log((100).toString()); 

// 29. Get primitive string value
console.log(new String("Hello").valueOf()); 

// 30. Convert Unicode to characters
console.log(String.fromCharCode(72, 69, 76, 76, 79)); 

// 31. Normalize Unicode characters
console.log("café".normalize("NFC")); 

// 32. Get Unicode code point
console.log("🚀".codePointAt(0)); 

// 33. Find all matches using regex
console.log([...str.matchAll(/\w+/g)]); 

// 34. Raw string literals
console.log(String.raw`Hello\nWorld`); 


