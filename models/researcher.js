const mongoose = require('mongoose');

const ResearcherSchema = new mongoose.Schema({
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    phoneNo: {
      type: String,
      required: true
    }
    //add more
});

const Researcher = mongoose.model('Researcher', ResearcherSchema);
module.exports = Researcher;