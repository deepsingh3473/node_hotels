const fs = require("fs");
const os = require("os");

var user = os.userInfo();
console.log(user);

fs.appendFile("1-greeting.txt", "Hi " + user.username + "!\n", ()=>{
    console.log("File is created!!");
});