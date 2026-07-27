const accountId = 1244356
let accountEmail = "nikhilumar@"
var accountPassword = "6112013"    
accountCity = "Jaipur"
let accountState;

// accountId=66 // not allowed

accountEmail = "umarsantosh@gmail.com"
accountPassword = 87878787878
accountCity = "New York"

/*
Prefer not to use var
because of issue iin block scope and function scope
*/

console.table([accountId , accountEmail,accountPassword,accountCity,accountState ]);
