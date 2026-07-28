// //  let a = 10
// // const b = 20;
// // var c = 30;


// // { } // is ko bolte h scope 
// let a = 300;
// if (true) {
//     let a = 10
//     const b = 20;
//     var c = 30;
//     console.log("INNER" , a) 
// }
// //console.log(a)
// //console.log(b)
// console.log(a)


//*******************NEsted Scope ***********************

function one() {
    const username = "Nikhil"
    function Two() {
        const website = "youtube"
        console.log(username);

    }
    // console.log(website)
    Two()
}
//one()

if(true){
    const username = "Nikhil"
    if(username == "Nikhil") {
        const website = "Youtube"
        //console.log(username + website)
    }
    // console.log(website)

}
// console.log(username)

// ************intresting*********
// console.log(bahubali(5))


// ye code ka function format orint jayega butt.....
console.log(bahubali(3))
function bahubali(num) {
    return num + 1
}


//...agar ye function ko kisi variable me store karoge to iss tarike nhi print bho payue ga 
const User = function (num) {
    return num +2 
}
// User(4)
console.log(User(4))


