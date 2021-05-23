const mongoose = require('mongoose');

const AttendeeSchema = new mongoose.Schema({
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
  },
  payment: {
    type: String,
    required: true
  },
});

module.exports = Attendee = mongoose.model('attendee', AttendeeSchema);