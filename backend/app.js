const express = require("express");
const path = require("path");
const app = express();
const connect = require("./src/db/conn");
var cors = require("cors");

const productRouter = require("./src/controllers/product.controller");
const Product = require("./src/models/product.model");
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use("/product", productRouter);

app.get("/", async (req, res) => {
  return res.status(201).send({ data: "Hello there," });
});

app.post("/product", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.send({ data: "Hello there," });
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/product/search/:id", async (req, res) => {
  const temp = await Product.find({ source: req.params.id }).lean().exec();
  res.send({ data: temp });
});

app.listen(port, async () => {
  await connect();
  console.log(`server is running at port no ${port}`);
});
