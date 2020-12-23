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
app.post('/todos', async(req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todos (description) VALUES($1) RETURNING *",
            [description]
        );
        res.json(newTodo.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//get all todos
app.get('/todos', async(req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todos");
        res.json(allTodos.rows) 
    } catch (err) {
        console.error(err.message)
    }
})

//get a todo
app.get('/todos/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todos WHERE todo_id = $1 ", [id]);
        res.json(todo.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//update a todo
app.put('/todos/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query(
            "UPDATE todos SET description = $1 WHERE todo_id = $2", 
            [description, id]
        )
        res.json('Todo was updated')
    } catch (err) {
        console.error(err.message)
    }
})

//delete a todo
app.delete('/todos/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const delTodo = await pool.query('DELETE FROM todos WHERE todo_id = $1', [id])
        res.json('Todo was successfully deleted')
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(5000, (err) => {
    if (err) {
        return console.error('Error was happend: ', err)
    }
    console.log('server has been started')
})