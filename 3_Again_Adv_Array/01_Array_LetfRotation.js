// 1. find left rotation by 1 element

let findLeftRotationByOneMethod1 = (arr) => {
     let copy = arr[0];
     for(let i = 0; i<arr.length - 1; i++){
          arr[i] = arr[i+1];
     }
     arr[arr.length - 1] = copy;
     return arr;
}
console.log(findLeftRotationByOneMethod1([1,2,3,4,5]))

// Second Way

let findLeftRotationByOneMethod2 = (arr) => {
     if(arr.length < 2){
          return arr;
     }else{
          arr.push(arr.shift());
          return arr;
     }
}
console.log(findLeftRotationByOneMethod2([1,2,3]));
