// find Majority element (By Moore's voting algo)
/*
arr = [2,2,1,1,1,1,2,2,2,3];
ans = 2

Bcz = count(2)>n/2 (n is length of array)
*/

let findMajority = (arr) => {
     let ans = arr[0]; // first elem of arr is majority (assume)
     let count = 1; // assuming only is available in array

     for(let i = 1; i<arr.length; i++){
          if(count==0){
               ans = arr[i];
               count = 1;
          }else if(ans == arr[i]){
               count++;
          }else{
               count--;
          }
     }

     // checking for Majority available
     let freq = 0;
     for(let elem of arr){
          if(elem == ans) freq++
     }

     return freq>Math.floor(arr.length/2)?`Majority elem = ${ans}`:"No Majority elem";
}

console.log(findMajority([2,2,1,1,1,1,2,2,2,3,2]));

// TMC = O(n) and SPC = O(1)
