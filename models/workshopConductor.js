const mongoose = require('mongoose');

const workshopConductorSchema = new mongoose.Schema({
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

const workshopConductor = mongoose.model('workshopConductor', workshopConductorSchema);
module.exports = workshopConductor;