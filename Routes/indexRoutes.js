const express = require('express');

const routes = express.Router();

routes.use('/user', require('./AuthRoutes'))

module.exports = routes;