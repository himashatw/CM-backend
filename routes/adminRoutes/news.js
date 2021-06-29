const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const News = mongoose.model("News");
const ApprovedNews = mongoose.model("ApprovedNews");

//get all the pending news
router.get("/pendingnews", async (req, res) => {
  console.log("newspending-GET");
  await News.find({})
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((error) => {
      res.status(422).json({ error });
    });
});

//post approved news
router.post("/addnewsapproved", async (req, res) => {
  console.log("addnewsapproved-POST");
  const { title, description, imgURL } = req.body;
  if (!title || !description || !imgURL) {
    return res.status(422).json({ error: "Fill all the fields" });
  }

  const approvedNews = new ApprovedNews(req.body);
  await approvedNews
    .save()
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((error) => {
      res.status(422).json({ error });
    });
});

module.exports = router;
