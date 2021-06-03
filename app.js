const express = require('express')
const app = express()
const DBConnection = require('./db/dbConnection.js');
const router = require('./routes/user-routes/attendee.router.js')

// Connect Database
DBConnection;
//check
app.use(express.json());
app.use('/api/users', router);

const PORT = 8080
app.listen(PORT, () => {
    console.log("Server is running on port : " + PORT);
})