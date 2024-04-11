const express = require("express");
const app = express();
require("dotenv").config();

const db = require("./5-db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hello World!!");
});

const personRoutes = require("./6-routes/personRoutes");
const menuItemRoutes = require("./6-routes/menuItemRoutes");

app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);


// adding comment for testing purpose
app.listen(PORT,()=>{
    console.log("Server is listening on port 3000");
});