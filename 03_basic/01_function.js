// console.log("nikhil")
// console.log("nikhil")
// console.log("nikhil")
// console.log("nikhil")
// console.log("nikhil")
// console.log("nikhil")

// function saymyName() {
//     console.log("nikhil")
//     console.log("nikhil")
//     console.log("nikhil")
//     console.log("nikhil")
//     console.log("nikhil")
//     console.log("nikhil")
// }

// saymyName() 

// function addTwo(number1 , number2) { // dekho jo pararenthesis me likha h usse parameter khteh h 
//     console.log(number1 + number2)

// }
// addTwo(2,"5") // in sab ko ko Argument kehte h h // hum function ko call kr rhe h
// addTwo(2,"u")
// addTwo(7,null)
// addTwo(3,3)

// const result = addTwo(4,5)
// console.log(result);
// console.log("result is: " , result )


// function Name (number1 , number2) {
//     console.log(number1 + number2)
// }

// Name("Nikhil", " Umar")

// function addTwoNumber(number1,number2) {
//     let result = number1 + number2
//     return result
// }

// const result = addTwoNumber(6,6)
// console.log("Mkaee: ", result)

// function addofTwo(num1,num2,num3){
//     //let result = num1+num2+num3
//     // return result
//     // or fir isko  return krdo  // bina let result vaiable me save kiye
//     return num1+num2+num3
// }
// const result = addofTwo(7,6,1)
// console.log("Result oois: ",result); 

// for example company ne ye kaha ki user ne apni id logged krli h ya nhi toh hum ye wala function se alert de skte h 

// function Userlogin(username){
//     return `${username} just Logged in`
// }

// console.log(Userlogin("Rohit sharma"))   

// function CricketAssosiation(username) {
//     if(username === undefined) 

//         {
//         console.log("Please enter you name")
//         return
//     }
//     return `${username} come at BCCI`
// }
// // console.log(CricketAssosiation("Virat kohli"))
// console.log(CricketAssosiation()) 

// duska tarika h if use krne ka ==>
// function CricketAssosiation(username = "Robot") {
//     if(!username) 

//         {
//         console.log("Please enter you name")
//         return
//     }
//     return `${username} come at BCCI`
// }
// // console.log(CricketAssosiation("Virat kohli"))
// console.log(CricketAssosiation())


// // dekho suppose karo ki user ne e commorce aap se ki bhi saman ko add kr ta gya but usko add kaise kiya jata h dekho kyu ki usme koi limit nhi rhta h bhaii
// function calculateCartPrice(...num1) { // dekho num1 ke age h ... usko spread operator and rest operator bola jata but situation pe depend krta h 
//     return num1 // dekho wo ... lagane se sa number call hogya in array form me 
// }

// console.log(calculateCartPrice(3,9,70,88,98,80,0,29))


// function calculateCartPrice(val1,val2,val3,...num1) { // agar hum val ka jo lagaye nhi h uska kaam h ki jitna val lagao utna hi aage ke element ko hatato 
//     return num1
// }
// console.log(calculateCartPrice(3, 9, 70, 88, 98, 80, 0, 29))

const user = {
    username : "Nikhil",
    price :  "8999"
}

function handleObject(anyObject){
    console.log(`Username is sir.${anyObject.username} and your price is ${anyObject.price} thanks`)
}
// handleObject(user)

// poinyt should be noted ki hum aise isko print kr rskite h 

handleObject({
    username : "Sam Altman",
    price : 388
})

// to print the element on array===>

    // const myNewArray = [100,2,200,300]

    // function printElement (getArray) {
    //     return getArray[2]

    // }
    // console.log(printElement(myNewArray))
  

    // const MyNumberArray = [2,3,4,5,6,7]

    // function printElement(getArray) {
    //     return getArray[2]
    // }
    // //console.log(printElement(MyNumberArray))
    // console.log(printElement([2,3,4,5,6,7]))

    

      










