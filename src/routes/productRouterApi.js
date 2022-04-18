const express = require('express');
const ProductController = require('../controllers/ProductController');
const router = express.Router();


router.get('/test-product-api', ProductController.testProduct)



module.exports = router;