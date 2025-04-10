const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    discription: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    author_img: {
        type: String,
        required: true,
    },
    author_name: {
        type: String,
        required: true,
    },
    product_img: {
        type: String,
        required: true,
    },
})

const product = mongoose.model('product', productSchema);

module.exports = product;