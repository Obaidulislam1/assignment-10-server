const express = require('express')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
const courses = require('./data/courseData.json');
const students = require('./data/data.json');

app.get('/', (req,res) =>{
    res.send('assignment 10 server is on')
})
app.get('/courses', (req,res) =>{
    res.send(courses)
})
app.get('/students', (req,res) =>{
    res.send(students);
})
app.get('/students/:id',(req,res) =>{
  const id =  parseInt(req.params.id);
  const student =students.map(st => st.id === id);
  res.send(student);
})
app.listen(port, () =>{
    console.log(`assignment server on port, ${port}`)
})