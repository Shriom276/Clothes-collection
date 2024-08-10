// const express = require('express');
// const Product = require('../models/product');
// const router = express.Router();

// // GET all products
// router.get('/', async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.json(products);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // GET a product by ID
// router.get('/:id', async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) return res.status(404).json({ message: 'Product not found' });
//         res.json(product);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // POST a new product
// router.post('/', async (req, res) => {
//     const product = new Product({
//         name: req.body.name,
//         description: req.body.description,
//         price: req.body.price,
//         category: req.body.category,
//         imageUrl: req.body.imageUrl
//     });

//     try {
//         const newProduct = await product.save();
//         res.status(201).json(newProduct);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// // PUT to update a product
// router.put('/:id', async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) return res.status(404).json({ message: 'Product not found' });

//         product.name = req.body.name || product.name;
//         product.description = req.body.description || product.description;
//         product.price = req.body.price || product.price;
//         product.category = req.body.category || product.category;
//         product.imageUrl = req.body.imageUrl || product.imageUrl;

//         const updatedProduct = await product.save();
//         res.json(updatedProduct);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// // DELETE a product
// router.delete('/:id', async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) return res.status(404).json({ message: 'Product not found' });

//         await product.remove();
//         res.json({ message: 'Product deleted' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// module.exports = router;






// routes/product.js
const express = require('express');
const Product = require('../models/product');
const router = express.Router();

// POST a new product
router.post('/', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imageUrl: req.body.imageUrl, // Include imageUrl in product data
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
