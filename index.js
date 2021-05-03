const express = require('express')
const mongoose = require('mongoose')

const app = express()

const url = 'mongodb://localhost/students'
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
  console.log('connected')
})
app.use(express.json())

const studentRouter = require('./routes/students')
app.use('/students',studentRouter)
app.listen(3000, () => {
    console.log('Listening on port 3000');
})

