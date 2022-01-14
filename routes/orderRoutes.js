const express = require("express");
const router = express.Router();
const controller = require("../controllers/ordersController");


router.get('/', controller.index);
router.get('/add/:menu_id', controller.createOrders);
router.post('/add/:menu_id', controller.saveOrders)

module.exports = router;
