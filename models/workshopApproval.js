const mongoose = require('mongoose');
const workshopApproval = new mongoose.Schema({

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
    
    content : {
        type :String,
        required :true
    }
})

module.exports =mongoose.model('workshoppaperapprovals', workshopApproval);