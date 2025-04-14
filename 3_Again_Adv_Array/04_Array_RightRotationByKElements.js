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
// console.log(rightRotationByKElement2([1,2,3],2))

// Third way (By Man made algorithm)

let rightRotationByKElement3 = (arr,k) => {
     let temp = new Array(arr.length);
     k = k % arr.length;

     for(let i = 0; i<arr.length; i++){
          temp[i] = arr[(i+k) % arr.length];
     }
     return temp;
}

// console.log(rightRotationByKElement3([1,2,3],2));

// Right rotation by k element using two pointer approach

let arr = [1,2,3,4,5];
let k = 2;
k = k % arr.length;
let rightRotationByKElement4 = (i , j) => {
  while(i<j){

    // let temp = arr[i];
    // arr[i] = arr[j];
    // arr[j] = temp;

    // Instead of above there line do this
    [arr[i],arr[j]] = [arr[j],arr[i]];
    i++;
    j--;
  }
  return arr;
}

rightRotationByKElement4(0,arr.length-1);
rightRotationByKElement4(0,k-1);
rightRotationByKElement4(k,arr.length - 1);

/*
arr = [1,2,3,4,5];
k = 2; it means have to rotate right twice 
1st time = [5,1,2,3,4];
2nd time = [4,5,1,2,3];

****** understand here a pattern arising ********
1st pattern => reverse whole array firstly
[5,4,3,2,1];
2nd pattern => reverse (0 t0 k - 1) <=> (0,1) 
index =>  [4,5,3,2,1]
3rd pattern => reverse (k,arr.length -1)index <=> (2,4)
index => [4,5,1,2,3];
 ************ Done ***********

 And its' time complexity = O(n);
 and space complexity = O(1);
*/