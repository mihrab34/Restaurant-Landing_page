const express = require("express");
const router = express.Router();

// Get home Page 

router.get('/', (req, res, next) => {
    res.render('homepage', {title: 'Restaurant'});
})


module.exports = router;