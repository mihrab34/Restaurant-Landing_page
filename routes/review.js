const express = require("express");
const router = express.Router();

// Get review homepage

router.get('/', (req, res, next) => {
    res.render('review', {title: 'Reviews'})
})

module.exports = router;