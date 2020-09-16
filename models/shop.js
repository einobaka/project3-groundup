const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const shopSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    logo: { type: String, required: true },
    drinks: [
      {
        type: Schema.Types.ObjectId,
        ref: "drink"
      }
    ]
  });

const Shop = mongoose.model("Shop", shopSchema);

module.exports = Shop;