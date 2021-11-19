const express = require("express");
const productRouter = express.Router();
//
const Product = require("../models/product.model.js");

productRouter.get("/", async (req, res) => {
  console.log("sending bus data");
  const temp = await Product.find().lean().exec();
  res.send({ data: temp });
});

module.exports = productRouter;
