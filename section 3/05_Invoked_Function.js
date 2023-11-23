

// ##   Immediately Invoked Function Expressions (IIFE)  ---> " ( {} ) (); "


(function chai () {
    console.log(`DB CONNECTED`);
})
();


( (name) => {
    // named IIFE
    console.log(`DB CONNECTED`);
}) (`gaurav`)
