const express= require('express');

const app=express();

require('dotenv').config();

const {db,getSchools,addSchool}=require('./db');

const calculateDistance=require('./utils/HaversineFomula');

//to parse the body to json format
app.use(express.json());


//To add a school
app.post('/addSchool',async(req,res)=>{
    try{
        const {name,address,latitude,longitude}=req.body;

        if(!name || !address || !latitude || !longitude) return res.status(400).json({message:"please provide full data"});
        
        if (typeof name !== "string" || typeof address !== "string") return res.status(400).json({ message: "name and address must be strings"});
        
        if (typeof latitude !== "number" || typeof longitude !== "number") return res.status(400).json({ message: "latitude and longitude must be numbers"});

        const result=await addSchool(name,address,latitude,longitude);
        return res.status(200).json({message:`School added successfully with id ${result[0].insertId}`});

    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({message:"internal server error"});
    }
})

//to get list of schools
app.get('/listSchools',async(req,res)=>{
    
    const {latitude,longitude}=req.query;

    if(!latitude || !longitude) return res.status(400).json({message:'first share your location'});

    let schools=await getSchools();

    schools= schools.map((school)=>{
        return {...school,distance:calculateDistance(latitude,longitude,school.latitude,school.longitude)};
     })

     schools.sort((a,b)=>a.distance - b.distance);

     return res.status(200).json(schools);
})

app.get('/',(req,res)=>{
    res.json({message:"server is live,you can send your send your req"});
})


app.listen(3000,()=>{
    console.log('server is live');
})