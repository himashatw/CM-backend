const mongoose = require('mongoose');

const researchPaperApprovalSchema = new mongoose.Schema({
    researchersfullName: {
      type: String,
      required: true,
      trim:true
    },
    researchersemail: {
      type: String,
      required: true,
      trim:true
    },
    researchersphoneNo: {
      type: String,
      required: true,
      trim:true
    },
    content:{
      type: String,
      require:true
       
   }
});

const researchPaperApproval = mongoose.model('researchPaperApproval', researchPaperApprovalSchema );
module.exports = researchPaperApproval;