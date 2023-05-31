const express = require('express');
const Router = express.Router();

const todoController = require('./controller/todos');
Router.use(express.json());

Router.post('/', todoController.postTodo);
Router.get('/', todoController.getTodo);
Router.get('/:id', todoController.getByIdTodo);
Router.delete('/:id', todoController.deleteTodo);
Router.put('/:id', todoController.updateTodo);

module.exports = Router;
