// Exploring the concept of nested looping with array

const nestedLoop = () => {
     for(let i = 1; i<=3; i++){
          // let greetRow = 0;
          let greetRow = " ";
          for(let j = 1; j<=3; j++){
               // greetRow += j;
               greetRow += "Hello\t";
          }
          console.log(greetRow);
     }
}

// Find left rotation of an array by k elements

let findLeftRotationByKElem = (arr,k) => {
     if(arr.length < 2){
         return arr;
     }else{
         k = k % arr.length;
         /*
         Above line is very important
         If k = 5 and arr.length = 5, then 5 % 5 = 0 (No need to rotate)
         If k = 6 and arr.length = 5, then 6 % 5 = 1 (Rotate only 1 time)
         If k = 7 and arr.length = 5, then 7 % 5 = 2 (Rotate only 2 times)
         */
         for(let i = 0; i<k; i++){
         let copy = arr[0];
             for(let j = 0; j<arr.length -1; j++){
                 arr[j] = arr[j+1];
             }
         arr[arr.length - 1] = copy;
         }
         return arr;
     }
 }
//  console.log(findLeftRotationByKElem([1,2,3,4,5],5));

 // Left Rotation by k elements with time complexity O(n) using two pointers approach

 let arr = [1,2,3,4,5];
 let k = 3;
 k = k % arr.length;
 let findLeftRotationByKElem2 = (i,j) => {
    while(i<j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
 }
 
 findLeftRotationByKElem2(0,k-1); // zeroth index to k - 1 will reverse

 findLeftRotationByKElem2(k,arr.length-1); // k(2) to length -1 will reverse

 findLeftRotationByKElem2(0,arr.length -1); // Reverse whole arr

 console.log(arr);