// Diff btw shallow and deep copy in js

// 1) shallow copy -: Here change in one object (either in original object or copied object) affect other Object

let shallowObj1 = {
     name:'Shallow',
}

let shallowObj2 = shallowObj1;

shallowObj2.age = 12 // Here change in one obj affecting other
console.log(shallowObj2)
console.log(shallowObj1)


// Deep copy -: In deep copy change in obj can't affect other obj

let deepObj1 = {
     name:'Deep1',
}

let deepObj2 = Object.assign({}, deepObj1);


deepObj2.name = 'Deep2' // Here can't be affect any obj
deepObj2.age = 12
// deepObj1.hasOwnProperty(age)
console.log(deepObj1)
console.log(deepObj2)


// Key values entries

console.log(Object.keys(deepObj2))
console.log(Object.values(deepObj2))
console.log(Object.entries(deepObj2))