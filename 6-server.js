const express = require("express");
const app = express();

const db = require("./5-db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.send("Hello World!!");
});

const personRoutes = require("./6-routes/personRoutes");
const menuItemRoutes = require("./6-routes/menuItemRoutes");

app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);


app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});