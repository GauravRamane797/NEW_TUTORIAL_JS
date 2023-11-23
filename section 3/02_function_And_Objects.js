
//  ------> # using Spread Operator / Rest Operator <----- 
//  --> Spread operator second name is Rest operator both are same name or same working but different type of asking

function calculateCarPrice(...num1){
    return num1
}

console.log(calculateCarPrice(200, 300, 400))




// --------------------------------------------------------------------




// ------# How to pass Rest operator in js function or multiple values are pass ...? ----

function handleObject (anyobject){
    console.log(`username is ${anyobject} and price is ${anyobject.price}`);
}


// handleObject(user)

handleObject({
    username : "sam",
    price : 399
})


// --------------------------------------------------------------------


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
