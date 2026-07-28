// // this. jo h curresmt contest ko print  krta h 

// const User = {
//     username : "Nikhil",
//     price : 999,

//     welcomeMsg : function() {
//         console.log(`${this.username}, welcome to my shop! you bill is ${this.price}`);
//         console.log(this)
//     }
// }

// User.welcomeMsg()
// // aab hum contest change kr dete h 
// User.username = "|Mr.Santosh kumar"
// User.welcomeMsg()  

// console.log(this)

// function Cheetah() {
//     let username = "Nikhil"
//     console.log(this.username);

// }
// Cheetah()


// const chai = function () {
//     let username = "nikhil umar"
//     console.log(this.username)
// }
// chai()

//************Arrow function*******************
// const chai = ()=>{
//     let username = "Shreeji"
//     console.log(this)
// }
// chai()


// const addTwo = (num1,num2)=>{
//     return num1+num2;

// }
// console.log(addTwo(2,4))

// implicit return===>implicit me  aap ko ye paranthesis use nhi krna hota h aur hum isme maan lete h ki isme return ka use nhi karenge
//point should be noted ki agar curly bracket hua toh return likhna padega upper Ex diya hu 
// aur agar curly na use karo toh return bhi mt karo  niche example diya h isko explicit kehteh


// const SubTwo = (num1,num2)=> num1-num2;

// console.log(SubTwo(999,2))


// jab hum koi object lete h to usse compulsary h ki () bracket me hi lagee
const addTwo = (num1,num2)=>({username:"Nikhil"})
console.log(addTwo(2,2))