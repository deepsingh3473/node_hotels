const mongoose = require("mongoose");
require("dotenv").config();

// const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURLAtlas = process.env.MONGODB_URL;

// mongoose.connect(mongoURL);
mongoose.connect(mongoURLAtlas);

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