// singleton 
// constructor se banega to singleton use hoga
// literals se use krteh toh singleton use nhi hota h 
// object.create yahi h construtor method ke through

//object literals
const mySym = Symbol("key1") // symbol ko declare krna

const JsUser = {
    name: "Nikhil",
    "Nick name" : "Kunal singh",
    [mySym]: "mykey1", // ekho ye symbol show karega jab hum [ ] ke bich likhte h 
    age:55,
    email:"nikhilumar@99gmail.com",
    isLoggedIn: false,
    laastLogininDays : ["Monday" , "Yuuesday"]


}
console.log(JsUser)

// console.log(JsUser.email) // dekho kuch haad tk nhi h but pura nhi 
// console.log(JsUser["email"])// ye bhi shi h 

// console.log(JsUser["Nick name"]) // isme maine . laga ke use kiya but o syntaxx galat h 
// console.log(typeof JsUser.mySym) // hye humko string print krke de rha h but hume toh sysbol me chahiye 
// console.log(JsUser[mySym])


// JsUser.email = "umarsantoshg@jjii.com"
// console.log(JsUser.email)
// console.log(JsUser)
// Object.freeze(JsUser) // hum isko freeze kr diye h issis liye aage ka code change nhi  huaa
// JsUser.email = "Shreathakunj20@gmail.com" // ye bhi nhi hua kyu iske uper freeze wala code lag gya h 
// // console.log(JsUser.email)
// console.log(JsUser)



JsUser.greeting = function(){
    console.log("Hello Bossssssss!" )
}
console.log(JsUser.greeting())

JsUser.greetingTwo = function() {
    console.log(`Hello Boss , ${this["Nick name"]}`)
}
      console.log(JsUser.greetingTwo())