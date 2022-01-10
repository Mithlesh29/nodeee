const express = require('express')
const app = express()
const mongoose = require('mongoose')

const url = 'mongodb+srv://demo:dCMOlcENp7eNC3Bh@sample.uctx6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(url,{useNewUrlParser:true},(err) =>
{
    if(!err)
    console.log("connected")
    else
    console.log("not connected")

})
app.listen(8000,() =>{
    console.log("listen")

})