const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReviewSchema = new Schema ({
    name: {type: String, required:true},
    message: {type: String, required:true}
})

module.exports = mongoose.model("Reviews", ReviewSchema);