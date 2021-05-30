const mongoose = require('mongoose');

const researchApproval = new mongoose.Schema({

    fullName:{
        type :String, 
        required :true
    },

    email:{
        type :String,
        required :true
    },

    phoneNo : {
        type :String, 
        required :true
    },
    
    Content : {
        type :String,
        required :true
    }
})

module.exports =mongoose.model('researchApproval', researchApproval);