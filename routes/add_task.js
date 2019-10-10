const express = require('express');
const route = express.Router();
const addTaskController = require('../controllers/task_controller');



route.post('/add-task',addTaskController.addTask);


module.exports = route;