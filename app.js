const express = require('express')
<<<<<<< HEAD
const app = express()
=======
const cors = require('cors');
const app = express();
>>>>>>> master
const DBConnection = require('./db/dbConnection.js');

const researcherRoute = require('./routes/user-routes/reseacher.router.js')
const attendeeRoute = require('./routes/user-routes/attendee.router.js')
const workshopconductorRoute = require('./routes/user-routes/workshopConductor.router')
<<<<<<< HEAD

const reviewerRoute = require('./routes/reviewer-routes/reviewer.router.js')
// Connect Database
DBConnection;
=======
const reviewerRoute = require('./routes/reviewer-routes/reviewer.router')

// Connect Database
DBConnection;


app.use(cors());
app.use(express.json());


app.use('/api/attendee',attendeeRoute);
app.use('/api/reseacher',researcherRoute);
app.use('/api/workshopcon',workshopconductorRoute);
app.use('/api/reviewer',reviewerRoute);
>>>>>>> master

const PORT = 8080

app.use(express.json());
app.use('/api/attendee',attendeeRoute);
app.use('/api/reseacher',researcherRoute);
app.use('/api/workshopcon',workshopconductorRoute);

app.use('/api/reviewer',reviewerRoute);

app.listen(PORT, () => {
    console.log("Server is running on port : " + PORT);
})