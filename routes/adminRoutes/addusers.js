const express = require("express");
const router = express.Router();
const ReviewerSchema = require("../../models/reviewer/reviewer");
const EditorSchema = require("../../models/Editor/Editor");

router.post("/addreviewer", async (req, res) => {
  console.log("called");
  const { fullName, email, phoneNo, password } = req.body;
  console.log(fullName, email, phoneNo, password);
  const reviewer = new ReviewerSchema(req.body);
  await reviewer
    .save()
    .then((data) => {
      res.status(200).send({ data });
    })
    .catch((err) => {
      res.status(422).send({ err });
    });
});

router.post("/addeditor", async (req, res) => {
  console.log("called");
  const { fullName, email, phoneNo, password } = req.body;
  console.log(fullName, email, phoneNo, password);
  const editor = new EditorSchema(req.body);
  await editor
    .save()
    .then((data) => {
      res.status(200).send({ data });
    })
    .catch((err) => {
      res.status(422).send({ err });
    });
});

module.exports = router;
