// Remove Duplicates from the sorted array and give me number of unique elem

let removeDuplicatesAndGiveUnique = (arr) => {
     let j = 1;
     for(let i = 0; i<arr.length - 1; i++){
          if(arr[i] != arr[i+1]){
               arr[j] = arr[i+1];
               j++;
          }
     }
     return arr;
}
console.log(removeDuplicatesAndGiveUnique([0,0,1,1,2,2,3,3]));
