const express = require("express")
const { allProduct, createProduct, updateProduct, deleteProduct } = require("../app/controllers/productController")
const router = express.Router()

router.get("/products", allProduct)
router.post("/add-product", createProduct)
router.put("/edit-product/:id", updateProduct)
router.delete("/delete-product/:id", deleteProduct)

module.exports = router