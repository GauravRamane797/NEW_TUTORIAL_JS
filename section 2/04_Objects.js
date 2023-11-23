<<<<<<< HEAD



const tinderUser = new Object ()                                 // singleton Object         output {}
                                                                                            // same output but different name
const tinderUse = {}                                             // Non-singleton Object     output {}


// console.log(tinderUser);



tinderUser.id = "1234abc"
tinderUser.name = "gorya"
tinderUser.isLoggedIn = false



console.log(tinderUser)                         // { id: '1234abc', name: 'gorya', isLoggedIn: false }


const regularUser = {
    email: "gaurav@gmail.com",
    fullname: {
        userfullname: {
            firstname:"gaurav",
            lastname: "ramane"
    
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstname)               // gaurav



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.addign(target, source)
// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3);


// const obj3 = object.assign ({}, obj1, obj2. obj4)

const obj3 = {...obj1, ...obj2}
console.log(obj3);                              // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const users = [
    {
        id : 1,
        email:"g@gmail.com"
    },
    {
        id : 2,
        email:"ga@gmail.com"
    },
    {
        id : 3,
        email:"gu@gmail.com"
    },
    {
        id : 4,
        email:"gr@gmail.com"
    },
]


users[1].email
console.log(tinderUser);                      // { id: '1234abc', name: 'gorya', isLoggedIn: false }


console.log(Object.keys(tinderUser));         // [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));       // [ '1234abc', 'gorya', false ]

console.log(Object.entries(tinderUser));      // [ [ 'id', '1234abc' ], [ 'name', 'gorya' ], [ 'isLoggedIn', false ] ]




// # Destructring in objects

const course = {
    coursename:"js in hindi",
    price: "999",
    courseInstructor:"gaurav"
}



const {courseInstructor} = course

gaurav
console.log(courseInstructor);              // output is ---> gaurav

const {courseInstructor: Instructor} = course
//console.log(courseInstructor)
console.log(Instructor);                    // output is ---> gaurav





//        ----> OBJECT DESTRUCTURING <---                   //

//let bioData1 = {
//               name:'gaurav ramane', 
//              address:'kolhapur',
//              age:'24'}

// let age = bioData1.name;
// console.log(age);


// let {name,address,age,Degree ='MCA'} = myBioData;
// console.log(Degree);









// # Destructring in React.js only one example

const navbar = ({company}) => {

}

navbar (company = "gaurav")
=======



const tinderUser = new Object ()                                 // singleton Object         output {}
                                                                                            // same output but different name
const tinderUse = {}                                             // Non-singleton Object     output {}


// console.log(tinderUser);



tinderUser.id = "1234abc"
tinderUser.name = "gorya"
tinderUser.isLoggedIn = false



console.log(tinderUser)                         // { id: '1234abc', name: 'gorya', isLoggedIn: false }


const regularUser = {
    email: "gaurav@gmail.com",
    fullname: {
        userfullname: {
            firstname:"gaurav",
            lastname: "ramane"
    
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstname)               // gaurav



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.addign(target, source)
// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3);


// const obj3 = object.assign ({}, obj1, obj2. obj4)

const obj3 = {...obj1, ...obj2}
console.log(obj3);                              // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const users = [
    {
        id : 1,
        email:"g@gmail.com"
    },
    {
        id : 2,
        email:"ga@gmail.com"
    },
    {
        id : 3,
        email:"gu@gmail.com"
    },
    {
        id : 4,
        email:"gr@gmail.com"
    },
]


users[1].email
console.log(tinderUser);                      // { id: '1234abc', name: 'gorya', isLoggedIn: false }


console.log(Object.keys(tinderUser));         // [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));       // [ '1234abc', 'gorya', false ]

console.log(Object.entries(tinderUser));      // [ [ 'id', '1234abc' ], [ 'name', 'gorya' ], [ 'isLoggedIn', false ] ]




// # Destructring in objects

const course = {
    coursename:"js in hindi",
    price: "999",
    courseInstructor:"gaurav"
}



const {courseInstructor} = course

gaurav
console.log(courseInstructor);              // output is ---> gaurav

const {courseInstructor: Instructor} = course
//console.log(courseInstructor)
console.log(Instructor);                    // output is ---> gaurav

// # Destructring in React.js only one example

const navbar = ({company}) => {

}

navbar (company = "gaurav")
>>>>>>> a86a812f097875402d91f1a086b5abb4ba6c48c4
