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
