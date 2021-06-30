const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Speakers = mongoose.model("Speakers");
//get all keynotespeakers
router.get("/keynotespeakers", async (req, res) => {
  // await
});

module.exports = router;
