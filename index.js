const express = require('express')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
const courses = require('./data/courseData.json');
const students = require('./data/data.json');
const category = require('./data/category.json');
const course = require('./data/courseData.json')

app.get('/', (req,res) =>{
    res.send('assignment 10 server is on')
})
app.get('/courses', (req,res) =>{
    res.send(courses)
})
app.get('/students', (req,res) =>{
    res.send(students);
})

app.get('/category/:id', (req,res) =>{
    const id = req.params.id;
    const categoryCourse = course.find(cs => cs.id == id)
    res.send(categoryCourse);
})
app.get('/course', (req,res) =>{
    res.send(course)
})
app.get('/category', (req, res) =>{
    res.send(category)
})
app.listen(port, () =>{
    console.log(`assignment server on port, ${port}`)
})