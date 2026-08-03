const accountId = 144553
let accountEmail = "poojita@google.com"
var accountPassword = "12345"
accountCity = "Varanasi"
let accountState;

//accountId = 2 // not allowed

accountEmail = "pc@.com"
accountPassword = "212121"
accountCity = "Delhi"

console.log(accountId);  


/*
prefer not to use var, use let and const instead
because var is function scoped and can lead to unexpected behavior, while let and const are block scoped and provide better control over variable declarations.

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);