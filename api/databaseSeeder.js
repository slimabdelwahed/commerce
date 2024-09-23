const express = require('express');
const router = express.Router();
const User = require('./models/User');
const users = require('./data/Users'); 
const Product = require('./models/Product');
const products = require('./data/Products'); 
const asyncHandler = require('express-async-handler');

router.post('/users', asyncHandler(async (req, res) => {
    await User.deleteMany({});
    const userSeeder = await User.insertMany(users);
    res.send({ userSeeder });
}));

router.post('/products', asyncHandler(async (req, res) => {
    console.log("9999666622225544")
    await Product.deleteMany({});
    const productSeeder = await Product.insertMany(products);
    res.send({ productSeeder });
}));

module.exports = router;