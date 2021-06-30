const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Speaker = mongoose.model("Speaker");


//add a speaker
router.post('/addSpeaker',(req,res)=>{
    const {name,description,imgURL} = req.body
   // const {imgURL} = req.body
   // console.log(imgURL)
   const speaker = new Speaker ({
     name:name,
     description:description,
     imgURL:imgURL
   })
   speaker.save().then(result=>{
     res.json({speaker:result})
   })
   .catch(err=>{
     console.log(err)
   })
})

//get all added speakers
router.get('/viewSpeaker',(req,res)=>{
    Speaker.find().then(speaker =>{
      res.json({speaker})
    }).catch(err=>{
      console.log(err);
    })
  })


module.exports = router;