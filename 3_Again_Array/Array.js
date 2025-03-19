// Mastering array in js

// 1. Array -> It's a linear data structure which store multiple value in a continuous manner, and collection of data type which may be similar or not in js

// 2.  it's starts from zeroth index

let arr = [];

let arr1 = new Array(3);
// console.log(arr1)

arr.push(100); // Helps to add value into the array

arr.pop(); // Helps to remove value from end index of value

// console.log(arr) // fetching whole value of array

// console.log(arr[2]) // fetching value of 2nd index

// 1. Take at least five value from a user and store it into an array

// 2. let storeArr = [];
// for(let i = 1; i<=5; i++){
//      let user = Number(prompt("Enter five elements"));
//      storeArr.push(user)
// }
// console.log(storeArr)

// 3. Find sum of all the elements present in the array

// let myArr = [1,2,3,4,5];
// let sum = 0;
// for(let i = 0; i<myArr.length; i++){
//      sum = sum + myArr[i];
// }
// console.log(sum)

// 4. find greatest value from the array

let myArr = [1, 2, 5, 4, 6, 7];

// let greatest = Math.max(); -Infinity
// Note -> Math.min == Infinity and Math.max == -Infinity

// for(let i = 0; i<myArr.length; i++){
//      if(greatest < myArr[i]){
//           greatest = myArr[i];
//      }
// }
// console.log(greatest)

// 5. find min value from the array

// let smallest = Math.min(); // Infinity
// for(let i = 0; i<myArr.length; i++){
//      if(smallest > myArr[i]){
//           smallest = myArr[i];
//      }
// }
// console.log(smallest)

// 6. find second greatest number

// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < myArr.length; i++) {
//   if (myArr.length < 2) {
//     // edge case
//     return null;
//   }

//   if (largest < myArr[i]) {
//     secondLargest = largest;
//     largest = myArr[i];
//     // console.log("SecondLargest -: ",secondLargest,"Largest",largest)
//   } else if (myArr[i] > secondLargest && myArr[i] !== largest) {
//     secondLargest = myArr[i];
//   }

//   // return secondLargest === -Infinity ? null : secondLargest;
// }
// console.log(secondLargest);

// 7. Reverse the array using new space or array

// let newArr = [];

// for(let i = myArr.length -1; i>=0; i--){
//      newArr.push(myArr[i]);
// }
// console.log(newArr)

// 8. Reverse the array without any extra variables

// let start = 0;
// let end = myArr.length - 1;

// while (start < end) {
//   let temp = myArr[start];
//   myArr[start] = myArr[end];
//   myArr[end] = temp;
//   start++;
//   end--;
// }
// console.log(myArr);


// 9. Turn all the zero into left

let binArr = [1,0,1,1,0,1];
let i = 0;
let j = 0;

while(i<binArr.length){
     if(binArr[i]==0){
          let temp = binArr[i];
          binArr[i] = binArr[j];
          binArr[j] = temp;
          j++;
     }
     i++;
}
console.log(binArr)