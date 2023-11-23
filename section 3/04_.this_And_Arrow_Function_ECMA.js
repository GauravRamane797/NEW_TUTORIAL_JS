

const user ={
    username : "gaurav",
    price : 999,

    welcomeMessage : function (){
        console.log(`${this.username}, welcome to website`)         // this. meaing current context
    }

}

// user.welcomeMessage()                           // gaurav, welcome to website
// user.username = "bhagwan"                       
// user.welcomeMessage()                           // bhagwan, welcome to website ..... after change context value of username then result are different

// <----------------------------------------------------------------------------------------->


// # this. function in javascript


function chai (){
    let username = "GAURAV"
    console.log(this.username);   // do not use this.username in function object ------> output is (undefined)
}

chai();


//  <----------------------------------------------------------------------------------------->

const  chaii  = function () {
    let username = "GAURAV"
    console.log(this.username);   // do not use this.username in function object ------> output is (undefined)
}

chai();


//  <----------------------------------------------------------------------------------------->


// ## Fat Arrow Function in Javascript

const  chai1 = () => {
    let username = "GAURAV"
    console.log(this.username);             // Arrow function in object    ------> output is (undefined)
}

chai();

//             ------------

const  chai2 = () => {
    let username = "GAURAV"
    console.log(this);             // Arrow function in object   -----> output is {empty}
}

chai();

// NOTE :-> DO NOT USE (this.) method IN ARROW FUNCTION AND REGULAR FUNCTION BECAUSE HIS NOT SUPPORTED FOR ARROW OR REGULAR FUNCTION
//                 suppose this example  -->(this.username)



//  <----------------------------------------------------------------------------------------->




// #############      PURE ARROW FUNCTION       ################



//      There’s another very simple and concise syntax for creating functions, that’s often better than Function //     Expressions.

//      It’s called “arrow functions”, because it looks like this:

// let func = (arg1, arg2, ..., argN) => expression;


//      This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.

//      In other words, it’s the shorter version of:

let func1 = function(arg1, arg2, ... argN) {
  return expression;
};


// Let’s see a concrete example:

let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

// alert( sum(1, 2) );         // 3


//      As you can see, (a, b) => a + b means a function that accepts two arguments named a and b. Upon the execution, //   it evaluates the expression a + b and returns the result.

//      If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.


//      For example:


let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

alert( double(3) ); // 6
//      If there are no arguments, parentheses are empty, but they must be present:

let sayHi = () => alert("Hello!");

sayHi();
//      Arrow functions can be used in the same way as Function Expressions.

//      For instance, to dynamically create a function:

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();


// ### Explicit function

// Example: 1 

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4))


// ### Emplicit function

// Example: 2   --->( Emplicit Return function by Two types)


// type 1)
const add1 = (num1, num2) =>  num1 + num2
console.log(add1(3, 4))

// type 2)
const add2 = (num1, num2) =>  (num1 + num2)
console.log(add2(43, 14))

// ## fat arrow function using object 
// How to use object in fat arrow function 

// Example 1)

// const add2 = (num1, num2) =>  ({username: "Gaurav"})     // This Objects case are 100% right

//                     NOTE -> do not use only curley brases or parentises 