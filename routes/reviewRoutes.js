const express = require("express");
const router = express.Router();
const Reviews = require("../model/Review");
const controller = require("../controllers/reviewsController");


router.get("/about", controller.index);
router.get("/", controller.add);
router.post("/", controller.save);
router.get("/feedback", controller.feedback);
router.get("/edit/:_id", controller.edit);



module.exports = router;
