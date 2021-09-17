var database = [

    {username : "user2", password: "password1"},

    {username : "user3", password: "password2"},
    
    {username : "user4", password: "thispassword"}

];

var userName = prompt ("Username:");
var passWord = prompt ("Password:");

function signIn(user, password){

    if ( user === database[0].username && password === database[0].password)
    {
        alert("SUCCESSFULLY LOGIN")
    } 
    else
    alert("Invalid");
}

signIn(userName, passWord);