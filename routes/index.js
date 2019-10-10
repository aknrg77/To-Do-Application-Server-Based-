const express = require('express');
const route = express.Router();
const homeController = require('../controllers/home_controller');



route.get('/',homeController.home);


module.exports = route;