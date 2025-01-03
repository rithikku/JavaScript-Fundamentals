const accountId = 122568;
let accountEmail = "rithikkumar@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 22; // not allowed

// This is scope in js 
{

}

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

accountEmail = "roshan@gmail.com";
accountPassword = "123";
accountCity = "Varanasi";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState, accountPlace]);

