const express = require('express');
const router = express.Router();
const workshopConductor = require('../../models/users/workshopConductor');
const fileValidation = require('../../middlewares/file-upload/validation.js');
const multer = require('multer');

const fileFilter = (req,res,cb)=>{
    cb(null,true)
}
const upload = multer({
    fileFilter:fileFilter
})

router.post('/add',upload.single('uploads'),fileValidation,async(req,res)=>{

    const fullName = req.body.fullName
    const email = req.body.email
    const password = req.body.password
    const phoneNo = req.body.phoneNo
    const workshopTitle = req.body.workshopTitle
    const workshopData = req.body.workshopData
    const workshopTime = req.body.workshopTime
    const approve = req.body.approve
    const uploads = req.file.buffer

    const workshopconductor = new workshopConductor({
        fullName : fullName,
        email : email,
        password : password,
        phoneNo : phoneNo,
        workshopTitle:workshopTitle,
        workshopData:workshopData,
        workshopTime:workshopTime,
        approve:approve,
        uploads : uploads
    });

    await workshopconductor.save((err,workshopconductor)=>{
        if(err){
            return res.status(400).send({
                errors:err.message
            });
        }

        return res.status(201).send({
            message:'Registered successfully',
            workshopconductor
        })
         
    });
    
});

router.get('/all',async(req,res)=>{
    await workshopConductor.find({})
     .then(data =>{
         res.status(200).send({data:data})
     }).catch(error =>{
         res.status(404).send({error:error.message})
     })
})

module.exports = router;