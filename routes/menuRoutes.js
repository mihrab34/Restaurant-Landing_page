const express = require("express");
const router = express.Router();
const controller = require("../controllers/menuController");


router.get("/", controller.index);
router.get("/add", controller.createMenu);
router.post("/addMenu", controller.saveMenu)
router.get("/successful", controller.success)
router.get("/edit/:id", controller.editMenu)
router.post("/edit/:id", controller.updateMenu)

module.exports = router;