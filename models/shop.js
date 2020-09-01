const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  image: { data: Buffer, contentType: String},
  // maybe coordinates for map
});

const Shop = mongoose.model("Shop", shopSchema);

module.exports = Shop;