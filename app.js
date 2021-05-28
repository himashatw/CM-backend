const express = require('express')
//const mongoose = require('mongoose')
//const { MONGOURI } = require('./keys')
const app = express()
const DBConnection = require('./db/dbConnection.js');

const router = require('./routes/user-routes/attendee.router.js')

// Connect Database
DBConnection;

// mongoose.connect(MONGOURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// mongoose.connection.on('connected', () => {
//     console.log("connected to the mongoDB");
// })

// mongoose.connection.on('error', () => {
//     console.log("error occured! check mongoDB config");
// })

const PORT = 8080

app.use(express.json());
app.use('/api/users',router);

app.listen(PORT, () => {
    console.log("Server is running on port : " + PORT);
})