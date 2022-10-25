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
app.get('/students/:id',(req,res) =>{
  const id =  parseInt(req.params.id);
  const student =students.find(st => st.id === id);
  res.send(student);
})
app.listen(port, () =>{
    console.log(`assignment server on port, ${port}`)
})