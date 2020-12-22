const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db')

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

//middlewares
app.use(cors());
app.use(express.json());

//ROUTES

//create todo

//get all todos

//get a todo

//update a todo

//delete a todo

app.listen(5000, (err) => {
    if (err) {
        return console.error('Error was happend: ', err)
    }
    console.log('server has been started')
})