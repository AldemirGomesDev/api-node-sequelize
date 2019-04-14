const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

router.get('/product', ProductController.index);
router.get('/product/:id', ProductController.show);
router.post('/product', ProductController.store);
router.put('/product/:id', ProductController.update);
router.delete('/product/:id', ProductController.destroy);

module.exports = router;