const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinksSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String },
  size: { type: Number },
  rating: { type: Number},
  image: { data: Buffer, contentType: String},
  comment: { type: String }
});

const Drinks = mongoose.model("Drinks", drinksSchema);

module.exports = Drinks;