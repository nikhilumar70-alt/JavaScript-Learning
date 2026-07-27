// dates jo h milisec. me declare hoti h 

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate)

// let myCreatedDate = new Date(2029, 0,23) // date ko declare krna 
// console.log(myCreatedDate.toDateString())

// let myCreateDate = new Date(2029 , 0, 31 , 3,7)
// console.log(myCreateDate.toLocaleString());
// console.log(myCreateDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14") //  yy/mm/dd
// let myCreatedDate = new Date("10-14-2023") //  mm/dd/yy
// console.log(myCreatedDate.toLocaleString())

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); 

// console.log(Math.floor(Date.now()/1000));


let newdate = new Date();
// console.log(newdate);
// console.log(newdate.getDay())
// console.log(newdate.getDate())
// console.log(newdate.getMonth());

// `${newdate.getMonth()} and this time is mine `

newdate.toLocaleString('default',{
    weekday : "long",
    year: "2026",

})

console.log(newdate)
