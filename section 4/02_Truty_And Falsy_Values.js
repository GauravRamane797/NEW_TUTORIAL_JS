const usermail = []


if (usermail){
    console.log("Goty user mail");
} else{
    console.log("Don't have user mail")
}


//  <----------------------------------------------------------------------------------------->

// ### Falsy values ---> 

// false, 0, -0, Bigint, 0n,  "", null, undefined, NaN


//  <----------------------------------------------------------------------------------------->


// ### Truthy values ---> 

// "0", "false", " ", [], {}, function {}


//  <----------------------------------------------------------------------------------------->


// if (userEmail.length === 0) {
//      console.log(("array  is empty"));
// }


const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}



//  <----------------------------------------------------------------------------------------->


//  ########----- Nulish Coalescing Operator (??): null undefined ------#########

let val1;
val1 = 5 ?? 10
// val1 = null ?? 20
// val1 = undefined ?? 15
// val1 = null ?? undefined ?? 20


console.log(val1);




//  <----------------------------------------------------------------------------------------->


//  ########----- Terniary Operator ------#########

// condition  ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")