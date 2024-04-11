const mongoose = require("mongoose");

const mongoURL = "mongodb://127.0.0.1:27017/mydatabase";

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on("connected", ()=>{
    console.log("MongoDB is connected");
});

db.on("error", (err)=>{
    console.log("Error occurred: "+ err);
});

db.on("disconnected", ()=>{
    console.log("MongoDB got disconnected");
});

module.exports = db;