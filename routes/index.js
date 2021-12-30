const express = require("express");
const router = express.Router();

// Get home Page 

router.get('/', (req, res, next) => {
    res.render('index', {title: 'Restaurant'});
})


module.exports = router;