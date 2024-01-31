const express = require("express");
const Products = require("../models/Products");
const router = express.Router();

// /products list
router.get("/", (req, res) => {
  Products.find()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
    });
});

// /products/:id one produts get
router.get("/:id", (req, res) => {
  Products.findById(req.params.id)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      console.log(err);
    });
});

// /products  create
router.post("/", (req, res) => {
  const product = new Products({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });
  product.save();
  res.json(product);
});

// /products/:id products update
router.put("/:id", (req, res) => {
  Products.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  })
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.json(err);
    });
});

// /products/:id products delete
router.delete("/:id", (req, res) => {
  Products.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json("Product deleted");
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
