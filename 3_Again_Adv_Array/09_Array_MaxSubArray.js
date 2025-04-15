// Find sum of max sub array (Also called Kadane's Algorithm)

let maxSubArraySum = (arr) => {
     let max = -Infinity;
     let sum = 0;

     for(let i = 0; i<arr.length; i++){
          sum = sum + arr[i];
          max = Math.max(max,sum);

          if(sum<0){
               sum = 0;
          }
     }
     return max;
}
console.log(maxSubArraySum([1,2,-3,4,5,-2,6,7,-1,9]));