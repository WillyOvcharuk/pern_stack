const express = require('express');
const app = express();
const cors = require('cors');

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

//middlewares
app.use(cors());
app.use(express.json());

app.listen(5000, (err) => {
    if (err) {
        return console.error('Error was happend: ', err)
    }
    console.log('server has been started')
})