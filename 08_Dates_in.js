// # Dates

let myDate = new Date ()
// console.log(myDate.toString());                    // output--> Wed Nov 22 2023 10:27:16 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());                // ouptut--> Wed Nov 22 2023
// console.log(myDate.toLocaleString());              // output--> 22/11/2023, 10:28:57 am
// console.log(myDate.toLocaleTimeString());           // ouput--> 10:30:14 am


let myCreatedDate = new Date (2023, 0, 23)
// console.log(myCreatedDate.toDateString())               // output --> Mon Jan 23 2023

let myCreatedDate1 = new Date (2023, 0, 23, 5, 3)
// console.log(myCreatedDate1.toLocaleString())              // output --> 23/1/2023, 5:03:00 am


let myCreatedDate2 = new Date (2023, 0, 23, 5, 3)
// console.log(myCreatedDate2.toLocaleTimeString())      // output ---> 5:03:00 am

let myCreatedDate3 = new Date (2023, 0, 23, 5, 3)
// console.log(myCreatedDate3.toISOString())            // 2023-01-22T23:33:00.000Z


let myCreateDate =  new Date ("01-14-2023")
// console.log(myCreateDate.toLocalString());

let myTimeStamp = Date.now ()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// # you can only find the date,week,month,year

// let newDate = new Date()
// console.log(newDate)                               // output --->   2023-11-22T05:25:32.923Z
// console.log(newDate.getTime())                     // output --->   1700630732923
// console.log(newDate.getMonth())                    // output --->   10
// console.log(newDate.getUTCFullYear())              // output --->   2023
// console.log(newDate.getMilliseconds())             // output --->   923
// console.log(newDate.getSeconds())                  // output --->   32
// console.log(newDate.getMinutes())                  // output --->   55
// console.log(newDate.getHours())                    // output --->   10
// console.log(newDate.getUTCDate())                  // output --->   22