// Learning how to loop an array

// Defining an array

let array = [1,2,3,4,5,{name:'Govind',age:19},6,7,[true,1],8,9]
// Applying for loop on above array

/*
for(let i = 0; i<array.length; i++){
     console.log(array[i])
}
 */

// Applying forEach loop at array
array.forEach((num,index) => {
     console.log(index,num)
})

// Applying for of loop at array
console.log('Applying For of loop')
for(let x of array){
     console.log(x)
}

/*
let detail = {
     name:'Govind',
     age:19,
     course:'B.Tech'
}
for(let x in detail){
     console.log(x)
}
 */