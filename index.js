const express = require("express");

const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();


// set template engine
app.set("view engine", "ejs");

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// home page route mount
const homepageRoute = require("./routes/homePage");
app.use("/", homepageRoute);

// review route mount
const reviewRoute = require("./routes/reviewRoutes");
app.use("/review", reviewRoute);

// orders routes mount
const orderRoute = require("./routes/orderRoutes");
app.use("/orders", orderRoute);

// menu route mount
const menuRoute = require("./routes/menuRoutes");
app.use("/menus", menuRoute);


// listen to server changes
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
