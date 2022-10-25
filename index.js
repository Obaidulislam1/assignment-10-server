const express = require('express')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

const students = require('./data/data.json');

app.get('/', (req,res) =>{
    res.send('assignment 10 server is on')
})
app.get('/students', (req,res) =>{
    res.send(students);
})
app.listen(port, () =>{
    console.log(`assignment server on port, ${port}`)
})