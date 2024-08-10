const express = require('express');
const router = express.Router();

// Example categories array
const categories = ["Electronics", "Clothing", "Books", "Home & Kitchen"];

// GET /categories - returns the list of categories
router.get('/', (req, res) => {
    res.json(categories);
});

module.exports = router;
