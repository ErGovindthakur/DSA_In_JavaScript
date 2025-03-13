// Diff btw var and let

// 1) var can be accessed before initialization but let can't be accessed
// console.log("Before = ",a);
// var a = 5;
// let a = 5;
// console.log("After = " , a);

// 2. Relation btw Number and String
// let age = 12; // Number
// let age = "12"; // String

// 3. Sum of two num

// console.log("sum of two num = "+ (2+3));

// console.log(1-"2"); // type coercion

// let age = prompt("Enter your age :- ");
// age = Number(age);
// console.log(age);

// // use case 
// if(age === 18){
//      console.log("Your are 18")
// }else{
//      console.log("You are not 18")
// }

// let a = 12;
// let b = 10;
// let temp ;

// temp = a;
// a = b;
// b = temp;

// a = a+b; // 22

// b = a - b; // 12
// a = a - b; // 10 

// [a,b] = [b,a];
// console.log(a,b);

// operator

// console.log(Math.floor(5/51));
// console.log(1%61);

// let a = 123;
// let sum = 0;
// while(a > 0){
//      let rem = a % 10;
//      // console.log(rem);
//      a = Math.floor(a/10);
//      sum = sum + rem;
// }
// console.log(sum)

// =, ==, ===
// Relational operator (< > ,<= >=, != == ,!== ===)  
// && (All condition should be true) || (Only one should be true)
// console.log(!false);

// unary operator (++, --)

// post => dhaba => use and then change
// pre => domios => change and then use

// let a = 10;
// let b = ++a;
// console.log("a = ",a); // 11
// console.log("b = ", b); // 11

// let i = 11;
// i = i++ + ++i;
// console.log(i);

// let i = 11;
// let j = --(i++); 
// console.log(j);

// let a = 11, b = 22;

// let c = a + b + a++ + b++ + ++a + ++b;
// //11 + 22 + 11 + 22 + 13 + 24 
// console.log("a = ",a);
// console.log("b = ",b);
// console.log("c = ",c);

// let b = true;
// b++;
// console.log(b);

// Math function

// let a = 1.9121;
// console.log(Math.round(a)); // 1
// console.log(Math.ceil(a)); // 2
// console.log(Math.floor(a)); // 1
// console.log(Math.trunc(a)); // removes decimal values 1
// console.log(Math.pow(2,3)); // 2^3 = 8
// console.log(Math.sqrt(16)); // 4
// console.log(Math.cbrt(8)); // 2
// console.log(Math.abs(-12)); // 12
// console.log(Math.max(1,2,3)); // 3
// console.log(Math.min(1,2,3)); // 1
// console.log(Math.floor(Math.random() * 9000)+1000); // opt generator
// console.log(a.toFixed(2)); // give exact value after decimal


// Find area of triangle using hero formula
// let a = 5;
// let b = 4; 
// let c = 3;

// let s = (a+b+c)/2; // 6

// let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
// console.log(area)

// Find area of a circle 
let r = 3;
console.log(Math.floor(Math.PI*Math.pow(r,2)));
