const express = require('express');
const route = express.Router();
const addTaskController = require('../controllers/task_controller');



route.get('/delete-task',addTaskController.deleteTask);


module.exports = route;