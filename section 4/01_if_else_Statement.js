const user = true
const temperature = 42


if ( temperature < 50 ){
    console.log("less than 50");
}
console.log("temperature is greater than 50");

// < , > , <=, >=, == , !=, === , !==


const balance = 1000

if (balance > 500) console.log("test");

// if (balance > 500) console.log("test"), console.log("test2");

//  <----------------------------------------------------------------------------------------->


if (balance < 500){
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less thean 750")
} else if (balance < 900){
    console.log("less thean 900")
}
 else {
    console.log("less thean 900")
}

//  <-----------------------------------------------------------------------------------------> 


const userLoggedIn = true 
const debitCard = true


if (userLoggedIn && debitCard) {
    console.log("allow to buy course");
}

//  <----------------------------------------------------------------------------------------->

// ########  Switch Case statement  #########

const month = 5;

switch (month) {
    case 1: 
    console.log("january");
    break;
    case 2: 
    console.log("febuary");
    break;
    case 3: 
    console.log("march");
    break;
    case 4: 
    console.log("april");
    break;
    case 5: 
    console.log("may");
    break;
    case 6: 
    console.log("jun");
    break;
    case 7: 
    console.log("july");
    break;
    case 8: 
    console.log("augast");
    break;
    case 9: 
    console.log("septmber");
    break;
    case 10: 
    console.log("october");
    break;
    case 11: 
    console.log("novmber");
    break;
    case 12: 
    console.log("december");
    break;
}