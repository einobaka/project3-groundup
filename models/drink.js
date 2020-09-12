const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String },
  size: { type: Number },
  rating: { type: Number },
  logo: { type: String },
  review: { type: String },
  image: { type: String},
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;