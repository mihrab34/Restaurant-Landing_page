const express = require('express');
 const mongoose = require('mongoose');
const indexRoute = require('./routes/index');
const reviewRoute = require('./routes/review')

const PORT = process.env.PORT || 4001

const app = express();

const mongoDB = 'mongodb://localhost:27017/test';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));


app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use('/', indexRoute);
app.use("/review", reviewRoute);


// app.get('/', (req, res) => {
//     res.render('index');
// })

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));