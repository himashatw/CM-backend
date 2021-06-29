const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const News = mongoose.model("News");

//add news
router.post('/addNews',(req,res)=>{
    const {title,description} = req.body
    if(!title || !body){
      return  res.status(422).json({error:"Add all the fields"});
    }
    const news = new News ({
      title,
      description,
      imageURL
    })
    news.save().then(result=>{
      res.json({news:result})
    })
    .catch(err=>{
      console.log(err)
    })
})

//get all posts
router.get('/viewNews',(req,res)=>{
  News.find().then(news =>{
    res.json({news})
  }).catch(err=>{
    console.log(err);
  })
})


module.exports = router;