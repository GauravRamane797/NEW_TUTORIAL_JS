

//  ########----- 2) JavaScript For loop------#########


// The JavaScript for loop iterates the elements for the fixed number of times. It should be used if number of iteration is known. The syntax of for loop is given below.

// for (initialization; condition; afterthought)
//   statement

for (let index = 0; index < 5; index++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}

// example 1)

// for (i=1; i<=5; i++)
// {
//   document.write(i + "<br/>")
//   }                                              output is 1, 2, 3, 4, 5

// example 2)

let myArray = ["flash", "batman", "superman"]
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element);
}

//                        output ----->  flash,batman,superman




//  <----------------------------------------------------------------------------------------->


//  ########----- 2) JavaScript While loop------#########



// The JavaScript while loop iterates the elements for the infinite number of times. It should be used if number of iteration is not known. The syntax of while loop is given below.

while (condition) {
  //  code to be executed;  
}

// exmaple 1)


var i = 11;
while (i <= 15) {
  document.write(i + "<br/>");
  i++;
}

//                  output is 11,12,13,14,15





//  <----------------------------------------------------------------------------------------->


//  ########----- 3) JavaScript Do While loop ------#########





//The JavaScript do while loop iterates the elements for the infinite number of times like while loop. But, code is executed at least once whether condition is true or false. The syntax of do while loop is given below.

do {
  //    code to be executed  
} while (condition);

// example 1)

var i = 21;
do {
  document.write(i + "<br/>");
  i++;
} while (i <= 25);

//                          ouput is 21, 22 23, 24 25