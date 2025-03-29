const accountId = 901685
let accountEmail = "mayur01@gmail.com"
var accountPassword = "12345"
accountCity = "ahmedabad"

// accountId = 2 //not allowed


accountEmail = "mayur007@gmail.com"
accountPassword = "0707070"
accountCity = "dwarka"
let accountState;


console.log(accountId);


/*
prefer not to use var
because of issue in block scope and funtional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
