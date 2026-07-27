"use strict";//treat all JS code aas newer version

// alert(3 + 3) // we are using node js not browser

// console.log(3+3); // code readability should be neat and clean;
// console.log("Nikhil"); 

// let name = "Nikhil"
// let age = 21
// let isLoggedIn = false
// let state;


//number => 2 to power of 53
//bigint
//string => " "
//boolean => true/false
//null => standalone value
// undefined => 
//symbol => use for unique 
//objecct

// console.log(typeof null);// is ka output object hai

// console.log(typeof undefined); // is ka undefined

// Datatype Summary ====>>>

// # Primitive 

// 7 types of primitive : Sting , Number , Boolean , Null, undefined,Symbol , Big int
const run = 100
// const marks = 100.3
// const isLoggedIn = false
const outsideTemp = null;
// let userName ;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 79930888989878678123456789n
// console.log(bigNumber)


// Reference type (Non-primitive) : Arrays , objects , Function

const heros = ["shatkiman" , "nagar" , "akshay kumar"]
 let myobj = {
    name: "Nikhil",
    age: 22,
}
 
const myFunction = function(){
    console.log("hello nikhil umar")
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof run)

console.log(typeof myFunction)



