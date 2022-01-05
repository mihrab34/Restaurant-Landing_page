const express = require('express');
const mongoose = require('mongoose');
const indexRoute = require('./routes/index');
const reviewRoute = require('./routes/review');
const Reviews = require("./model/reviewdb");
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 4001

const app = express();

// Connecting to mongoose
const mongoDB = "mongodb+srv://mira:mirabel@cluster0.uan1b.mongodb.net/restaurant?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

// set template engine
app.set('view engine', 'ejs');

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())
app.use('/', indexRoute);
app.use("/review", reviewRoute);


// Feedback after form submission
app.get('/feedback', (req, res) => {
    res.render('feedback', {title: 'Feedback'});
})

//  create and save each form details
app.post("/create", async (req, res) => {
  const user_details = {
    fullname: req.body.fullname,
    message: req.body.message,
  };

  let user = await new Reviews(user_details);
  user.save((err) => {
    if (err) throw err;
    // return;
    //  res.send("<h1>Review sent Successfully</h1>");
    res.redirect("/feedback");
    // res.render("/", (err, html) => {
    //   res.send("<h1>Review sent Successfully</h1>")
    // })
  });
});

// api to fetch all reviews
app.get("/api/reviews", (req, res) => {
  Reviews.find({}, (err, data) => {
    if (err) throw err;
    if (data) {
      res.send(data);
    }
  });
});

// render reviews page
app.get("/about", (req, res) => {
  res.render("show_reviews", { title: "Testimonials" });
});



app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));