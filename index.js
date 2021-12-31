const express = require('express');
 const mongoose = require('mongoose');
const indexRoute = require('./routes/index');
const reviewRoute = require('./routes/review');
const Reviews = require("./model/reviewdb");

const PORT = process.env.PORT || 4001

const app = express();

const mongoDB ="mongodb+srv://mira:mirabel@cluster0.uan1b.mongodb.net/restaurant?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));


app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', indexRoute);
app.use("/review", reviewRoute);


// app.get('/', (req, res) => {
//     res.render('index');
// })

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
    res.redirect("/");
  });
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));