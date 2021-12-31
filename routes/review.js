const express = require("express");
const router = express.Router();
// const Reviews = require('../model/reviewdb')
// Get review homepage

router.get('/', (req, res, next) => {
    res.render('review', {title: 'Reviews'})
})

// router.post('/', (req, res) => {

//     const user_details = {
//         fullname : req.body.fullname,
//         message : req.body.message
//     }

//     let user = new Reviews(user_details);
//     user.save((err) => {
//         if(err) throw err
//        return res.send('<h1>Review sent Successfully</h1>');
//         res.redirect('/');
//     })
// })

router.get('/api', async(req, res) => {
    
})


module.exports = router;