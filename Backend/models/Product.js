// models/Product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productCode: String,
    productName: String,
    productDate: Date,
    productOriginPrice: Number,
    quantity: Number,
    productStoreCode: String
});

module.exports = mongoose.model('ABC', productSchema);
