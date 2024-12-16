const Product = require("../models/productModel")

const allProduct = async (req, res) => {
    try {
        const products = await Product.find().select({ createAt: 0, __v: 0 })
        if (!products) {
            return res.status(404).json({
                message: "No Products Found",
            })
        }
        res.status(200).json({
            message: "All Products Retrieved Successfully",
            data: products
        })
    } catch (err) {
        res.status(500).json({
            error: "There was a Server Side Error",
            reason: err.message
        })
    }
}

const createProduct = async (req, res) => {
    try {
        const productToSave = new Product(req.body)
        await productToSave.save()
        res.status(201).json({
            message: "Product Created Successfully",
            data: productToSave
        })
    } catch (err) {
        res.status(500).json({
            error: "There was a Server Side Error",
            reason: err.message
        })
    }
}

const updateProduct = async (req, res) => {
    try {
        const productToUpdate = await Product.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        ).select({ createAt: 0, __v: 0 })
        res.status(200).json({
            message: "Product Updated Successfully",
            data: productToUpdate
        })
    } catch (err) {
        res.status(500).json({
            error: "There was a Server Side Error",
            reason: err.message
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const productToDelete = await Product.findByIdAndDelete({ _id: req.params.id })
        if (!productToDelete) {
            return res.status(404).json({ 
                message: "Product Not Found" 
            })
        }
        res.status(200).json({
            message: "Product Deleted Successfully",
            data: productToDelete
        })
    } catch (err) {
        res.status(500).json({
            error: "There was a Server Side Error",
            reason: err.message
        })
    }
}

module.exports = {
    allProduct,
    createProduct,
    updateProduct,
    deleteProduct
}