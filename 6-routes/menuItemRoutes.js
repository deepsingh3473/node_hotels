const express = require("express");
const router = express.Router();

const MenuItem = require("../6-models/MenuItem");

router.post("/",async (req,res)=>{
    try{
        const data = req.body;

        const newMenuItem = new MenuItem(data);

        const response = await newMenuItem.save();
        console.log("menu data saved");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server occurred."});
    }
});

router.get("/",async (req,res)=>{
    try{
        const data = await MenuItem.find();

        console.log("menu data fetched.");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server occurred."});
    }
});

router.get("/:tasteType", async (req,res)=>{
    try{
        const tasteType = req.params.tasteType;
        if(tasteType == "sweet" || tasteType == "spicy" || tasteType == "sour"){
            const data = await MenuItem.find({taste: tasteType});
            console.log(`${tasteType} found.`);
            res.status(200).json(data);
        }
        else{
            res.status(404).json({error: "Invalid taste type."});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error."});
    }
});

module.exports = router;