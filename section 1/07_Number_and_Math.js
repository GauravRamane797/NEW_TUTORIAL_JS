const score = 400
// console.log(score)                                  // output is ---> 400


const balance = new Number (100)
// console.log(balance)                                // output is ---> [number: 100]

// console.log(balance.toString().length);             // output is --->   3
// console.log(balance.toFixed(2));                    // output is ---> 100.00
// console.log(balance.toFixed(1));                    // output is ---> 100.0
// console.log(balance.toFixed(3));                    // output is ---> 100.000

const otherNumber = 123.8966                        

// console.log(otherNumber.toPrecision(3));            // output is ---> 123.9 


const hundreds = 1000000
// console.log(hundreds.toLocaleString("en-IN"));      // output is ---> 10,00,000   indian types







//    ````````````````` # Maths    ``````````````````


console.log(Math);
console.log(Math.abs(-4));               //   (abs) -> absolute value ----> only negative value are change in positive value

console.log(Math.round(4.6));           //    output is round figure is 5
console.log(Math.ceil(4.4));            //    output is 4 in lower digit 4
console.log(Math.floar(4.6));           //    output is 5 in upper digit 5

console.log(Math.min(4,5,6,7));
console.log(Math.max(4,5,6,7));



console.log(Math.random());             // Math.random ---> is provide to 0 > and < 1 values  example--- 0.1, 0.2 etc
console.log((Math.random()*10) + 1 );       // but (Math.random()*10) Math.random values then output 0 + 1
console.log(Math.floor(Math.randon()* 10) + 1 );

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)   // max value add because same as the Math.random output hence add this min or max values
