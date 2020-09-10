const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String },
  size: { type: Number },
  rating: { type: Number},
  image: { data: Buffer, contentType: String},
  review: { type: String }
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;