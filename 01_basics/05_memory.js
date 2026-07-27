// Stack memory is ussed in Primitive and Heap memory is used in Non-primitivee
 // point should be remember this when yhe stack memory were used aapne jo bhi vriaable defined krte h uska ek copy milta h 
 // aur jab bhi ek memory Heap ke andar chala jata h toh waha se milta h Reference (mtlb jo bhi change karengae wo original me change hoga)

//  let myYoutubename = "Nikhilumarvaishyadotcom"
//  let anothername = myYoutubename
//  anothername = "cahi aur codee"
//  console.log(myYoutubename);
//  console.log(anothername);


 let userOne = {
    email: "nikhilumarvaishya@gmaildotcom",
    upi: "inikhikl@hh"
 }


 let userTwo = userOne

 userTwo.email = "umarsantosh"
 
 console.log(userOne.email)
 console.log(userTwo.email)