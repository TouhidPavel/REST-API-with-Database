const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["smartphone", "laptop", "desktop", "camera", "watch", "headphone"]
    },
    active: {
        type: Boolean,
        default: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Product", productSchema)