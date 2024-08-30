const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Existing route to place a new order
router.post('/', async (req, res) => {
    const { userId, products, totalAmount } = req.body;
    try {
        const newOrder = new Order({ user: userId, products, totalAmount });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Existing route to get all orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('user').populate('products.product');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// New route to get orders for a specific user
router.get('/user/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const userOrders = await Order.find({ user: userId }).populate('products.product');
        res.json(userOrders);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
