const express = require('express');

const routes = express.Router();

routes.use('/user', require('./AuthRoutes'))
routes.use('/product', require('./productsRoutes'))

module.exports = routes;