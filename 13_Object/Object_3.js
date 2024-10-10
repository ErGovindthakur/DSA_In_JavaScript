// Loop through an object

// Always run fonIn loop at an object

let myObj1 = {
     name:'Ajay',
     age:21,
     value:true,
}
let myObj2 = {
     name:'Ajay',
     age:21,
     value:true,
}

for(let key in myObj1){
     console.log(key, " : ", myObj1[key])
}

// Let's check if two objects are equal or not

console.log(Object.is(myObj1, myObj2))

