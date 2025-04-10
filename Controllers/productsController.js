const productModal = require('../modals/productModal')

const fs = require('fs');

const product_Add = async (req, res) => {
    try {
        const { title, discription, price, author_name } = req.body

        console.log(req.body);
        console.log(req.file.path);

    } catch (err) {
        console.log(err);

        return res.status(400).send({
            success: false,
            message: err
        })
    }
}

module.exports = {
    product_Add
}