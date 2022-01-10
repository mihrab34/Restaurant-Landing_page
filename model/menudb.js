const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  status: { type: String, required: true },
  remarks: { type: String, required: true }
});

module.exports = mongoose.model("Menus", MenuSchema);
