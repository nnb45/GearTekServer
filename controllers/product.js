const { Product } = require("../models/Product");

const createProduct = async (req, res, next) => {
    try {
        const products = await Product.insertMany(req.body.products);
        res.status(201).send(products);
    } catch (error) {
        res.status(400).send(error);
    }
};
const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find({});
        // Transform the productImages object into an array of objects for each product
        products.forEach(product => {
            const productImagesArray = Object.entries(product.productImages).map(([key, value]) => ({ key, image: value }));
            product.productImages = productImagesArray;
        });

        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
};
const searchProducts = async (req, res, next) => {
    try {
        const { name } = req.query;
        if (!name) {
            return res.status(400).send({ message: 'Search query is required' });
        }

        const products = await Product.find({
            productName: { $regex: name, $options: 'i' }
        }).exec();

        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
};
const getProductById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send({ message: 'Product not found' });
        }

        // Transform the productImages object into an array of objects
        const productImagesArray = Object.entries(product.productImages).map(([key, value]) => ({ key, image: value }));

        // Add the transformed productImagesArray to the product object
        product.productImages = productImagesArray;

        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
};
module.exports = { createProduct, getProducts, getProductById, searchProducts };