const express = require("express");
const mongoose = require("mongoose");
const indexRoute = require("./routes/index");
const reviewRoute = require("./routes/review");
const Reviews = require("./model/reviewdb");
const Menus = require("./model/menudb");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

// Connecting to mongoose
mongoose.connect(process.env.MONGODB_URI_CLOUD, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

// set template engine
app.set("view engine", "ejs");

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/", indexRoute);
app.use("/review", reviewRoute);

// Feedback after form submission
app.get("/feedback", (req, res) => {
  res.render("feedback", { title: "Feedback" });
});

//  create and save each form details
app.post("/create", async (req, res) => {
  const user_details = {
    fullname: req.body.fullname,
    message: req.body.message,
  };

  let user = await new Reviews(user_details);
  user.save((err) => {
    if (err) throw err;
    res.redirect("/feedback");
  });
});



// fetch one review from input

// app.post('/about', (req, res) => {
//   let search = req.body.search

//   Reviews.find({ fullname: {$eq : search }}, (err, data) => {
//     if (err) throw err;
//     if (data) {
//       res.send(data);
//     }
//   })
// })

// edit reviews posted
app.get("/edit/:_id", (req, res) => {
  let id = new mongoose.Types.ObjectId(req.params._id);
  Reviews.findById( id, (err, comment) => {
    if (err) {
      throw err;
    } else {
      console.log(comment);
      res.render("edit", { title: "edit", comment });
    }
  });
});

// render reviews page
app.get("/about", (req, res) => {
  Reviews.find({}, (err, comments) => {
    if (err) throw err;
    if (comments) {
      res.render("show_reviews", { title: "Testimonials", comments });
    }
  });
});

// get menus
app.get('/menus', (req, res)=> {

})




app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
