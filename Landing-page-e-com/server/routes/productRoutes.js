const express = require('express');
const Product = require('../models/productModel');

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Search products by title
router.get('/search', async (req, res) => {
  const query = req.query.q;
  const products = await Product.find({ title: { $regex: query, $options: 'i' } });
  res.json(products);
});

// Filter products by category
router.get('/category/:category', async (req, res) => {
  const category = req.params.category;
  const products = await Product.find({ category });
  res.json(products);
});

module.exports = router;
