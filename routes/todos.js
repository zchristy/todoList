var express = require('express');
var router = express.Router();
var db = require('../models');
var helpers = require('../helpers/todos');

router.route('/')
    // Index Route
    .get(helpers.getTodos)
    // Create Route
    .post(helpers.createTodo)

router.route('/:todoId')
    // Show Route
    .get(helpers.showTodo)
    // Edit Route
    .put(helpers.editTodo)
    // Delete Route
    .delete(helpers.deleteTodo)

module.exports = router;