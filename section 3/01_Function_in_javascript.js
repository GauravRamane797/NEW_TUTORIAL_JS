function myNameIs() {
    //     console.log("G");
    //     console.log("A");
    //     console.log("U");
    //     console.log("R");
    //     console.log("A");
    //     console.log("V");
    // 
}


myNameIs();    // output is ---> GAURAV


// --------------------------------------------------------------------


function addTwoNumber(num1, num2) {
    // console.log(num1 + num2);
}

addTwoNumber(5, 6);          // output is ---> 11

// --------------------------------------------------------------------


//  Adding two numbers using one variable with return syntax

function addTwoNumber1(num1, num2) {
    // let results = num1 + num2
    // return result

    return (num1 + num2);          // after return process does not print any values or results
}


// --------------------------------------------------------------------


// those both results are different variable using different format

const result = addTwoNumber1(3, 7)
// console.log(result);


function loginUserMessage(username) {
    return `${username} just logged in`
}

// console.log(loginUserMessage("Gaurav"))          // Gaurav just logged in
// console.log(loginUserMessage(""))                //just logged in 
// console.log(loginUserMessage())                  // undefined just logged in



// --------------------------------------------------------------------


//    #### without value pass in parameter then result show below down

function loginUserMessage1(username1) {
    if (!username1) {
        console.log("Please enter a username");
        return
    }
    return `${username1} just logged in`
}

console.log(loginUserMessage1("gorya"))




// --------------------------------------------------------------------



//      #### value pass in parameter then result show below down

function loginUserMessage1(username1) {
    if (!username1) {
        console.log("Please enter a username");
        return
    }
    return `${username1} just logged in`
}

console.log(loginUserMessage1())