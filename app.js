const express = require('express')
const mongoose = require('mongoose')
const { MONGOURI } = require('./keys')
const app = express()

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log("connected to the mongoDB");
})

mongoose.connection.on('error', () => {
    console.log("error occured! check mongoDB config");
})

const PORT = 8080
app.listen(PORT, () => {
    console.log("Server is running on port : " + PORT);
})