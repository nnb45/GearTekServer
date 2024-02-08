const express = require('express');
var router = express.Router();

const { createProduct, getProducts, getProductById, searchProducts } = require('../controllers/product');

//https://geartekserver-production.up.railway.app/api/products
router.post('/', createProduct);

router.get('/search', searchProducts); 

//https://geartekserver-production.up.railway.app/api/products
router.get('/', getProducts);

//https://geartekserver-production.up.railway.app/api/products/65b96061349ed50218bde5c1
router.get('/:id', getProductById);

module.exports = router;