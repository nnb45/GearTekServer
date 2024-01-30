const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    productName: { type: String, required: true, unique: true },
    productImages: [{ type: String, required: true }],
    productPrice: { type: Number, required: true },
    productReviews: { type: Number, required: true },
    productRates: { type: Number, min: 1, max: 5, required: true },
},
    // createdAt và updatedAt
    { timestamps: true }
);

exports.Product = mongoose.model("Product", ProductSchema);