// Remove Duplicates from the sorted array and give me number of unique elem

let removeDuplicatesAndGiveUnique = (arr) => {
     let j = 1;
     for(let i = 1; i<arr.length; i++){
          if(arr[i] != arr[i-1]){
               arr[j] = arr[i];
               j++;
          }
     }
     return{
          uniqueCount:j,
          uniqueArray:arr.slice(0,j),
     };
}
// console.log(removeDuplicatesAndGiveUnique([0,0,1,1,2,2,3,3]));

let result = removeDuplicatesAndGiveUnique([0,0,1,1,2,2,3,3]);
console.log("uniqueCount -: ",result.uniqueCount);
console.log("uniqueArray -: ", result.uniqueArray);

// TMC => O(n) and SPC => O(1)
