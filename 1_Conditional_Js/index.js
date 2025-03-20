// conditional statements in js -:  (Base of logic building)

// condition -> Such type of statement which value is either true or false called conditional statement

// Note -> without if, else can't work

// Problem

// 1. valid voter

// let age = Number(prompt("Enter your age -: "));
// if(isNaN(NaN)){
//      console.log("Wrong input")
// }
// if(age>=18){
//      console.log("You can vote")
// }else{
//      console.log("You can't vote")
// }

// 2. shop discount

// discount => (amount * discount)/100

// let price = Number(prompt("Enter your bill or price "));
// let dis = 0;
// if(price > 0 && price<=5000){ shopping -> 0 - 5000 => dis -> 0
//      // console.log(price)
//      dis = 0;
// }
// else if(price > 5001 && price<=7000){ dis => 5
//      // console.log(price - Math.floor((5*price)/100));
//      dis = 5;
// }
// else if(price > 7001 && price<=9000){ dis => 10
//      // console.log(price - Math.floor((10*price)/100));
//      dis = 10;
// }
// else if(price > 9000){ dis => 20
//      // console.log(price - Math.floor((20*price)/100));
//      dis = 20;
// }
// else{
//      console.log("Enter valid price")
// }
// console.log(price - Math.floor((price*dis)/100));

// 3. Bijli bill

// let unit = Number(prompt("Enter your unit -: "));// 7000
// let amount = 0;

// amount = amount + (actual unit - your unit) * rate;

// if(unit>400){
//      700 - 400 -> 300 (used 300 but remaining 400)
//      amount = (unit - 400) * 13; // 3900
//      unit = 400; // Remaining
// }

// if(unit>200 && unit <= 400){
//      amount += (unit - 200) * 8; // 1600
//      unit = 200;
// }

// if(unit>100 && unit <= 200){
//      amount += (unit - 100) * 6; // 600
//      unit = 100;
// }

// // if(unit>0 && unit<=100){
// //      amount += (unit - 0) * 4.2;
// //      unit = 0;
// // }

// amount +=  unit * 4;

// console.log("Your total amount = ", amount);

// 4. INR denomination

// let amount = 4823;

// if(amount >= 500){
//      console.log("500 ka note -: ",Math.floor(amount/500));
//      amount = amount % 500; // 323
//      console.log(amount)
// }
// if(amount >= 200){
//      console.log("200 ka note -: ",Math.floor(amount/200));
//      amount = amount % 200; // 123
//      console.log(amount)
// }
// if(amount >= 100){
//      console.log("100 ka note -: ",Math.floor(amount/100));
//      amount = amount % 100; // 23
//      console.log(amount)
// }
// if(amount >= 50){
//      console.log("50 ka note -: ",Math.floor(amount/50));
//      amount = amount % 50; // not applying condition
// }
// if(amount >= 10){
//      console.log("10 ka note -: ",Math.floor(amount/10));
//      amount = amount % 10; // 3
//      console.log(amount)
// }
// if(amount >= 1){
//      console.log("1 ka note -: ",Math.floor(amount/1));
//      amount = amount % 1; // 0
//      console.log(amount)
// }

// 5. ternary operator (?(tru) :(false))

// console.log(12>11 ? "Sahi hai":"Galat hai");

// 6. Nested ternary operator

// let num = 9;
// let checkIf = num > 0 ? "Positive" : num<0 ? "Negative" : "Zero";
// console.log(checkIf);

// switch case

// let day = 1;
// switch(day){
//      case 1:
//           console.log("Monday");
//           break;
//      case 2:
//           console.log("Tuesday");
//           break;
//      default:
//           console.log("Other day");
// }

// Note ->
// Use if-else when dealing with (boolean expressions),( ranges), or (complex conditions).

// Use switch when checking a (single variable against multiple possible values) for better readability and performance.
