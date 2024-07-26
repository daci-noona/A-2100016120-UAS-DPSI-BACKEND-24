var express = require('express');
var router = express.Router();
var authorizeRole = require('../middleware/auth');
const Product = require('../models/product');

// Get all products
router.get('/', async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
  });

// Get product by ID
router.get('/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    res.json(product);
  });

// Add new product
router.post('/', authorizeRole('admin'), async function(req, res, next) {
  const { name, description, price, stock, image } = req.body;
  try {
    const newProduct = await Product.create({ name, description, price, stock, image });
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
}});

  
// Update product
router.put('/:id', async (req, res) => {
  const updatedProduct = await Product.update(req.body, {
    where: { id: req.params.id },
    returning: true
  });
  res.json(updatedProduct[1][0]);
});

// Delete product
router.delete('/:id', async (req, res) => {
  await Product.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Product deleted' });
});
  
module.exports = router;
