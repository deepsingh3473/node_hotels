const express = require("express");
const app = express();

const db = require("./5-db");

app.get("/",(req,res)=>{
    console.log("Base route is available");
});

app.listen(3000,()=>{
    console.log("listening on port 3000");
})