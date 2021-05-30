const express = require('express')
bodyParser = require('body-parser');
const mongoose = require('mongoose')
const router = require('./routes/pdfRoute')
const { MONGOURI } = require('./keys')


const app = express()

app.use(express.json());

//app.use(router);


app.use(bodyParser.urlencoded({extended: true}));

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

const PORT = 3090
app.listen(PORT, () => {
    console.log("Server is running on port : " + PORT);
})