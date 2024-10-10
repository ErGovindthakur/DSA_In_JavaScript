// Initialization and declaration of an object

let myStatus = Symbol('Millionaire')
let myDetails = {
     name:'Govind',
     age:19,
     address:{
          From:"India",
          pin:841233,
     },
     status:{
          value:'Millionaire'
     },
     skills:["JavaScript", 'MERN', 'C++', 'Python', "Django", "Firebase","Flexible FrontEnd Developer"],
     myStatus:[myStatus],
     "is Developer":true,
     "json":"json",
}

// console.log(myDetails)

// let's access all the values saperately (. operator)

console.log(myDetails.name)
console.log(myDetails.myStatus)

// using ( [] )
console.log(myDetails["is Developer"])

// Apply crud operation at the object

// create/add

myDetails.title = "Thakur"
// console.log(myDetails)

// delete
delete(myDetails.json)
// console.log(myDetails)

// read
// console.log(myDetails)

//update
myDetails.name = "Er Govind thakur"
// console.log(myDetails)

// Difference btw .freeze() .seal() method in object in js

let myObj1 = {
     name:'Ajay',
     age:21,
}

// console.log(myObj1)
// Object.freeze(myObj1)
// myObj1.value = 'High';
// console.log(myObj1)
Object.isFrozen(myObj1)

// freeze() -: You can't apply the crud operation at any object after applying freeze method


let myObj2 = {
     name:'vijay',
     age:22,
}
Object.seal(myObj2)
myObj2.value = "High"
myObj2.name = 'Sam',
delete(myObj2.age)
// console.log(myObj2)
Object.isSealed(myObj2)

// seal -: In seal method you can read and update object value but can't delete and add

