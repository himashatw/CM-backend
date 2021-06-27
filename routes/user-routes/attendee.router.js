const express = require('express');
const router = express.Router(); 
const Attendee = require('../../models/users/attendee.js');

router.post('/add', async(req, res) => {
    const attendee = new Attendee(req.body);
    await attendee.save((err,attendee) =>{
        if(err){
            return res.status(404).send({
                error:err.message
            });
        }

        return res.status(200).send({
            message:'Registered successfully',
            attendee
        })
    })
})  

router.get('/all',async(req,res)=>{
     await Attendee.find({})
     .then(attendees =>{
         res.status(200).send({data:attendees})
     }).catch(error =>{
         res.status(404).send({error:error.message})
     })
     
})


module.exports = router;

