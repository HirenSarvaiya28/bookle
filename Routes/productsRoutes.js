const express = require('express');

const routes = express.Router();

const { product_Add } = require('../Controllers/productsController');

// ================= file upload =================

const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Math.floor(Math.random() * 10000000)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
const upload = multer({ storage: storage }).single('image')

// ================= file upload =================

routes.post('/product_add',upload, product_Add)

module.exports = routes;