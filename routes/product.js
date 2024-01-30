const express = require('express');
var router = express.Router();

const { createProduct, getProducts, getProductById } = require('../controllers/product');

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getProductById);

module.exports = router;