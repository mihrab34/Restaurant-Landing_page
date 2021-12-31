const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReviewSchema = new Schema ({
    fullname: {type: String, required:true},
    message: {type: String, required:true}
})

module.exports = mongoose.model("Reviews", ReviewSchema);