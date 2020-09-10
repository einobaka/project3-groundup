const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: { type: String, required: true },
  address: { type: String, required: true },
  image: { data: Buffer, contentType: String},
  // maybe coordinates for map
  // coordinates: [long,lat],
  drinks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Drink"
    }
  ]
});

const Shop = mongoose.model("Shop", shopSchema);

module.exports = Shop;