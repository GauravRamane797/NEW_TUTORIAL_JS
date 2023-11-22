//  # Array : ---> The array object, as with arrays in other programming languages, enables stroring a collection of multiple items under a single variable name, and has memebers for performing common array operations.



const myArr = [ 1, 2, 3, 4, 5, 6, 7] 
// console.log(myArr[0]);
                                // output is 1

const myHeros = ["shaktiman", "naagraj" ]

const myArr2 = new Array (1, 2, 3, 4)



// # Array Methods  -->pop,unshift,shift,join

// myArr.push(6)
// console.log(myArr);

myArr.pop()
myArr.unshift(9)        // unshift method is insert in starting position
myArr.shift(0)
// console.log(myArr)    // shift are remove last one character 

// console.log(myArr.includes(9));    // includes value yes/no for boolean type
 
// console.log(myArr)



const newArr = myArr.join()
// console.log(myArr)
// console.log(typeof newArr)


// #  slice, splice


// original Array
console.log("a", myArr);                        // a [ 1, 2, 3, 4, 5, 6 ]


// 1) slice
const myn1 = myArr.slice(1, 3)
console.log("B", myn1);                             // [ 2, 3 ]

// 2) splice
console.log("c", myArr);                       // b [ 1, 2, 3, 4, 5, 6 ]
const myn2 = myArr.splice(1 , 3);             
console.log(myn2);                             // [ 2, 3, 4 ]
