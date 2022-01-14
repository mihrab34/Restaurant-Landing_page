 require('./appModel');
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  customer: { type: String, required: true },
  menu: { type: mongoose.Types.ObjectId, ref: "Menu", required: true },
  order_date: { type: Date, required: true },
  cost: { type: Number, required: true },
  paid: { type: Boolean, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model("Order", OrderSchema);