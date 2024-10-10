// // Implementing a simple algorithm of binary search

// const binarySearch = (arr, target) => {
//      let left = 0;
//      let right = arr.length ;

//      // Applying while loop
//      while(left <= right){
//           let mid = Math.floor((left + right) /2)

//           if(arr[mid] === target){
//                return mid;
//           }
//           else if(arr[mid] < target){
//                left = mid + 1;
//           }
//           else{
//                right = mid - 1
//           }
//      }
//      return - 1;
// }

// let myArray = [1,2,4,3,9,5,7];
// let target = 7;
// console.log(binarySearch(myArray,target))


// Agin writing the code of binary search

const bSearch = (myArr,trg) => {
     let left = 0;
     let right = myArr.length;
     
     // Applying condition to check the result and print the data
     while(left < right){
          let mid = Math.floor((left + right)/2)

          // Applying condition
          if(myArr[mid] === trg){
               return mid;
          }
          else if(myArr[mid] > left){
               left = mid + 1;
          }
          else{
               right = mid - 1;
          }

     }
     return -1
}

let arr = [1,3,2,5,6,7,9];
let trg = 9;

console.log(bSearch(arr,trg))