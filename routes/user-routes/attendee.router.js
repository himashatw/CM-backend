const express = require('express');
const router = express.Router(); 
const Attendee = require('../../models/users/attendee.js');

router.post('/add', async(req, res) => {
    const attendee = new Attendee(req.body);
    await attendee.save()
    .then(data =>{
        res.status(201).send({ data: data });
    })
    .catch(error =>{
        res.status(400).send({ error: error.message });
    })    
})  

router.get('/all',async(req,res)=>{
     await Attendee.find({})
     .then(attendees =>{
         res.status(200).send({data:attendees})
     }).catch(error =>{
         res.status(400).send({error:error.message})
     })
     
})


module.exports = router;

