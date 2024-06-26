const express = require("express");
const {
  createProduct,
  getProducts,
  getProduct,
  getProductsByCategory,
  deleteProduct,
} = require("./controller");
const { upload } = require("../multer.js");
const router = express.Router();
router.post("/create", upload.array("photos"), createProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.get("/update/:id", getProduct);
router.get("/category/:categoryId", getProductsByCategory);
router.delete("/:id", deleteProduct);

module.exports = router;
