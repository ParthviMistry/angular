const express = require('express');
const Router = express.Router();

const todoController = require('./controller/todos');
const userController = require('./controller/signup');

Router.use(express.json());

Router.post('/', todoController.postTodo);
Router.get('/', todoController.getTodo);
Router.get('/:id', todoController.getByIdTodo);
Router.delete('/:id', todoController.deleteTodo);
Router.put('/:id', todoController.updateTodo);

Router.post('/user', userController.postUser);
Router.get('/user', userController.getUser);
Router.get('/user/:id', userController.getUserById);
Router.delete('/user/:id', userController.deleteUser);
Router.put('/user/:id', userController.updateUser);

module.exports = Router;
