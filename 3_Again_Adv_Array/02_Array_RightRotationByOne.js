// Rotate an array using right by one

let findRightRotationByOne = (arr) => {
     if(arr.length < 2){
          return arr;
     }else{
          let copy = arr[arr.length - 1];
          for(let i = arr.length - 1; i>0; i--){
               arr[i] = arr[i - 1];
          }
          arr[0] = copy;
          return arr;
     }
}
console.log(findRightRotationByOne([1,2,3]));