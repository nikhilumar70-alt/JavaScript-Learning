// objectsin singleton
// const tinderUser = {} // ye tumhaara non-singleton object h 
const tinderUser = new Object() // aur ye wal singleton object h 
 tinderUser.id="_nikhil_0745"
 tinderUser.name = "Nikhil"
 tinderUser.age= 88
 tinderUser.IsloggedIn =false



// console.log(tinderUser)

// const regularUser = {
//     email:"nikhil@22.com",
//     fullname :{
//         userfullname :{
//             firtname:"Nikhil",
//             lastname:"Umar"

//         }
//     }

// }
//console.log(regularUser.fullname);

// const obj1 = {
//  name : "Nikhil"
// }

// const obj2 = {
//     Surname : "Umar vaishya"
// }

// const obj3 = {obj1 , obj2}
// console.log(obj3)


// const obj1 = {1: "a",2: "b"} 
// const obj2 = {3: "c",4:"d"}

// // const obj3 = {obj1 ,obj2} // krke dekho ge toh dono merge hua but alga h 

// // const obj3 = Object.assign(obj1,obj2)

// const obj3 = {...obj1, ...obj2} // isko hum kahte h spred method 
// //console.log(obj3)

// jab data base se value aati h 

// const users = [
//     {
//         id : 1,
//         email : "nikhil@vvbnv"
//     },
//      {
//         id : 1,
//         email : "nikhil@vvbnv"
//     },
//      {
//         id : 1,
//         email : "nikhil@vvbnv"
//     },
// ]

// users[1].email
// console.log(users)

// console.log(tinderUser)

// console.log(Object.values(tinderUser))
// console.log(Object.keys(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('id'))


// 8********************Destructuring in object*****************

const nitin = {
    name:"Kunal singh",
    price: "899",
    courseInstructor : "nikhil"
}
//course.courseInstructor

const{courseInstructor : rahul } = nitin  // isi o bolte h object ko destructuring krna
console.log(rahul)                 

// API ka ka matalab rhta h ki apna kaam kisi aur ke sir pe dedena 

// JSON me dyuan do ki key amnd value bothbare in string 
// {
//     "name": "nikjil",
//     "coursename" : "java Script sikha do"
// }






