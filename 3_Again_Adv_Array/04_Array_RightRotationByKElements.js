// Find Right rotation of an array by "K" elements

let rightRotationByKElement = (arr, k) => {
  // edge case
  if (arr.length < 2) {
    return arr;
  } else {
    k = k % arr.length;
    for (let i = 0; i < k; i++) {
      let copy = arr[arr.length - 1];
      for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
      }
      arr[0] = copy;
    }
    return arr;
  }
};
// console.log(rightRotationByKElement([1, 2, 3], 2));

// Second way

let rightRotationByKElement2 = (arr,k) => {
     k = k % arr.length;
   return ([...arr.slice(-k),...arr.slice(0,-k)]);
}
console.log(rightRotationByKElement2([1,2,3],2))

// Third way (By Man made algorithm)

let rightRotationByKElement3 = (arr,k) => {
     let temp = new Array(arr.length);
     k = k % arr.length;

     for(let i = 0; i<arr.length; i++){
          temp[i] = arr[(i+k) % arr.length];
     }
     return temp;
}

console.log(rightRotationByKElement3([1,2,3],2));