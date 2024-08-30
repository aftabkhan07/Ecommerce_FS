const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Existing route to get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Existing route to add a new product
router.post('/', async (req, res) => {
    const { name, description, price, category, stock, imageUrl } = req.body;
    try {
        const newProduct = new Product({ name, description, price, category, stock, imageUrl });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// New route to add multiple products
router.post('/bulk', async (req, res) => {
    const productsArray = req.body.products;  // Expect an array of products in the request body
    try {
        if (!Array.isArray(productsArray) || productsArray.length === 0) {
            return res.status(400).json({ message: 'Invalid input, please provide an array of products' });
        }
        
        // Insert multiple products in bulk
        const insertedProducts = await Product.insertMany(productsArray);
        res.status(201).json(insertedProducts);  // Return the inserted products
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
