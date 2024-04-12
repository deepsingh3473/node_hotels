const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post("/",(req,res)=>{
    console.log(req.body.cityName);
    const location = req.body.cityName;
    const apiKey = "c680f78ba53001038ce4ed4f39963247";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + apiKey + "&units=metric";
    https.get(url, (response)=>{

        response.on("data", (data)=>{
            try{
                    const weatherData = JSON.parse(data);
                const temp = weatherData.main.temp;
                console.log(temp);
                const description = weatherData.weather[0].description;
                console.log(description);

                res.write('<h1>Temperatue of city "' + location + '" is : ' + temp + ' </h1>');
                res.write('<p>Description is : ' + description + ' </p>');
                res.end();
            }
            catch(err){
                console.log(err);
                res.status(500).json({error: "Internal server error"});
            }
        });
    });
})

app.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
});