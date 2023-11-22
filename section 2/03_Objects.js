// singleton
// Object.create

// Object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "gaurav",
    "full name": "gaurav ramane",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "gauravramane797@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}




console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])


JsUser.email = "gauravramane797@gmail.com"
Object.freeze(JsUser)
JsUser.email = "gauravramane797@gmail.com"
console.log(JsUser)

JsUser.greeting = function () {
    console.log("hello js user")
}
JsUser.greetingTwo = function () {
    console.log(`hello js user, ${this.age}`);
}

console.log(JsUser.greeting)