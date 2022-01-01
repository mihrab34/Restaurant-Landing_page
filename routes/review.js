const express = require("express");
const router = express.Router();
const Reviews = require("../model/reviewdb");
// Get review homepage

router.get("/", (req, res, next) => {
  res.render("review", { title: "Reviews" });
});


module.exports = router;
