const express = require('express');
const router = express.Router(); 
const Attendee = require('../../models/users/attendee.js');

router.post('/addAttendee', async(req, res) => {
    const attendee = new Attendee(req.body);
    await attendee.save((err,attendee) =>{
        if(err){
            return res.status(404).json({
                errors:err.message
            });
        }

        return res.json({
            message:'attendee added successfully',
            attendee
        })
    })
})  

router.get('/allAttendee',async(req,res)=>{
     const attendees = await Attendee.find();
     return res.json({
        message:'data retrived successfully',
        attendees
     })
})

module.exports = router;

