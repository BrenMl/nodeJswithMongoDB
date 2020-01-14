const userController = require('./controllers/usersController')

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))


app.get('/user',userController.getUsers)
app.get('/user/:userId',userController.getUser)
app.post('/user',userController.postUser)
app.delete('/user/:userId',userController.deleteUser)
app.put('/user/:userId',userController.putUser)

module.exports = app