/*! SERVER START */
const express = require("express");
const productsRouter = require("./routes/products");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/products", productsRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
