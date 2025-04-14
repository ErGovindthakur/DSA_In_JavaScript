// Merge two sorted array

let arr2 = [1,3,5];
let arr1 = [2,4,6,7,8,9];

let i = j = k = 0;
let newArray = new Array(arr1.length + arr2.length);

while(i<arr1.length && j<arr2.length){
     if(arr1[i]<arr2[j]){
          newArray[k] = arr1[i];
          k++;
          i++;
     }else{
          newArray[k] = arr2[j];
          k++;
          j++;
     }
}

// copy remaining value from arr1
while(i<arr1.length){
     newArray[k] = arr1[i]
     i++;
     k++;
}
// copy remaining value from arr2
while(j<arr2.length){
     newArray[k] = arr2[j];
     k++;
     j++;
}
console.log(newArray);

/*
Time Complexity => O(m+n)
and 
Space Complexity => O(m+n)
*/

// Merging two sorted array "in place"

let mergeTwoSortedArrayInPlace = (firstArr,m, secondArr,n) => {
     let i = m - 1;
     let j = n - 1;
     let k = m+n - 1;
     while(i>=0 && j>=0){
          if(firstArr[i]>secondArr[j]){
               firstArr[k] = firstArr[i];
               i--;
               k--;
          }else{
               firstArr[k] = secondArr[j];
               j--;
               k--;
          }
     }

     // Checking remaining value of secondArr
     while(j>=0){
          firstArr[k--] = secondArr[j--];
     };
     // No need to check firstArr value
     return firstArr;
}

console.log(mergeTwoSortedArrayInPlace([4,5,6],3,[1,2,3,0,0,0],3));

/*
TMC => O(m+n)
SPC => O(1); Bcz no extra space is being created
*/