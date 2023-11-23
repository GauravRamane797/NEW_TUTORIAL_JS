

let a = 10
const b = 20                    // Global scope
var c = 30

if (true) {
    let a = 10
    const b = 20                // Block scope
    var c = 30
}


// console.log(a);
// console.log(b);
// console.log(c);

// --------------------------------------------------------------------


let Array = 10
for (let i = 0; i < Array.length; i++) {
    const element = array[i]
    console.log(element)
}

// *********************************************************************************************//


// #### Global and Block scope function in javascript

// Many function is under the Function


function one() {
    const username = "Gaurav"

    function two() {
        const website = "Ramane"
        console.log(username + " " + website)            // output ---> Gaurav Ramane
        console.log(website)                              // output ---> ramane
    }
    two()
}
one()



// --------------------------------------------------------------------




if (true) {
    const username = "Gaurav"
    if (username === "Gaurav") {
        const website = " youtube"
        console.log(username + website)                 // output --> Gaurav youtube
    }

}

// --------------------------------------------------------------------


function  addone(num) {
    return num + 1 
}

console.log(addone(5) );              // output --> 6

//  2 type declare a function <------------------------->

const addTwo = function (num){
    return num + 2
}


console.log(addTwo(8) );             // output ---> 10



// --------------------------------------------------------------------


