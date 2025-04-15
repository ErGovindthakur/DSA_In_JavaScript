// Sort the color from given array of integer 
/*
"red" => 0
"green" => 1
"blue" => 2

input  => arr = [1,0,2,0,1,1,2,0,2,1];

output => arr = [0,0,0,1,1,1,1,2,2,2];
*/

let sortTheColor = (arr) => {
     let i = 0;
     let j = 0;
     let k = arr.length - 1;

     // traversing array using while loop
     while(i<=k){
          if(arr[i]==0){
               [arr[j],arr[i]] = [arr[i],arr[j]];
               i++;
               j++;
          }else if(arr[i]==2){
               [arr[k],arr[i]] = [arr[i],arr[k]];
               k--;
          }else{
               i++;
          }
     }
     return arr;
}
console.log(sortTheColor([1,0,2,0,1,1,2,0,2,1]));

/*
TMC => O(n)
SPC => O(1)
*/