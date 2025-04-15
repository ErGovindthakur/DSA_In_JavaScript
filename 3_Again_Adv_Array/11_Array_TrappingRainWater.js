// solve the problem of trapping rain water
/*
given => heightArr = [4,2,0,3,2,5];
output = 9

*/

let findTrappedRainWater = (hArr) => {
     let leftElev = new Array(hArr.length);
     let rightElev = new Array(hArr.length);
     let storedWater = 0;

     leftElev[0] = hArr[0]
     for(let i = 1; i<hArr.length; i++){
          leftElev[i] = Math.max(hArr[i],leftElev[i-1]);
     }

     rightElev[hArr.length-1] = hArr[hArr.length-1];
     for(let i = hArr.length-2; i>=0; i--){
          rightElev[i] = Math.max(hArr[i],rightElev[i+1]);
     }

     for(let i = 0; i<hArr.length; i++){
          let water = Math.min(leftElev[i],rightElev[i]) - hArr[i];
          storedWater += water;
     }
     return storedWater;
}
console.log(findTrappedRainWater([4,2,0,3,2,5]));

// TMC => O(n) and SPC => O(n)