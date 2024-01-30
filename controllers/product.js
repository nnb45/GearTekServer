const { Product } = require("../models/Product");

const createProduct = async (req, res, next) => {
    try {
        const products = await Product.insertMany(req.body.products);
        res.status(201).send(products);
    } catch (error) {
        res.status(400).send(error);
    }
}
const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find({});
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
}
const getProductById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send({ message: 'Product not found' });
        }
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
};
module.exports = { createProduct, getProducts, getProductById };