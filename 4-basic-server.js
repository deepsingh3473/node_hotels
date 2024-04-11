const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Hello World");
});

app.get("/idli", (req,res)=>{
    var customized_idli = {
        name: "rava idli",
        num: 4,
        isChutney: true
    }
    res.send("Your idli order is here : " + JSON.stringify(customized_idli));
});

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})