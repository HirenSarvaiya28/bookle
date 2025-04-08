const express = require('express');

const { loginUser } = require('../Controllers/Authcontroller');
const { registerUser } = require('../Controllers/userController');

const routes = express.Router();

routes.post('/registeruser', registerUser)
routes.post('/loginuser', loginUser);

module.exports = routes;