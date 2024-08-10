const express = require('express');
const User = require('../models/user');
const router = express.Router();

// POST for user login (simple version, no password hashing)
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username, password: req.body.password });
        if (!user) return res.status(401).json({ message: 'Invalid credentials' });

        res.json({ message: 'Login successful', user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST to create a new user
router.post('/register', async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        role: req.body.role || 'user'
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
