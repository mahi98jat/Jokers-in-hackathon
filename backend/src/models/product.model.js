const mongoose = require("mongoose");

const Productschema = new mongoose.Schema(
  {
    customer_name: { type: String, required: true },
    product_name: { type: String, required: true },
    mob: [{ type: String, requitred: true }],
    source: { type: String, requitred: true },
    destination: { type: String, requitred: true },
    date: { type: String, requitred: true },
    size: [{ type: String, requitred: true }],
    weight: { type: String, required: true },
    pincode: { type: String, requitred: true },
    house_no: { type: String, requitred: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("product", Productschema);

module.exports = Product;
