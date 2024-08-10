const express = require('express');
const Order = require('../models/order');
const router = express.Router();

// GET all orders for a user
router.get('/:userId', async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new order
router.post('/', async (req, res) => {
    const order = new Order({
        userId: req.body.userId,
        products: req.body.products,
        totalPrice: req.body.totalPrice
    });

    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
