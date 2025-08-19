// routes/product.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productControllers");

// Routes
router.get("/", productController.getProducts);       // Get all
router.get("/:id", productController.getProductById); // Get one
router.post("/", productController.addProduct);       // Add new

module.exports = router;
