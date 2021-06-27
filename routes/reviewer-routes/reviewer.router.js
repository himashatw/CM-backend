const express = require('express')
const router = express.Router();

const Researcher = require('../../models/users/researcher.js');
const workshopConductor = require('../../models/users/workshopConductor');

const researchApproval = require('../../models/reviewer/researchPaperApproval');
const workShopApproval = require('../../models/reviewer/workshopPaperApproval');
const fileValidation = require('../../middlewares/file-upload/validation.js');
const multer = require('multer');

const fileFilter = (req,res,cb)=>{
    cb(null,true)
}
const upload = multer({
    fileFilter:fileFilter
})

router.get('/getResearchPapers',async(req, res)=>{



})

router.post('/approvedResearchers',async(req,res)=>{
    
    if(req.body){
        const researchPaperApproval = new researchApproval(req.body)
        researchPaperApproval.save().then((data)=>{
            res.status(200).send({data: data});
        }).catch((err)=>{
            res.status(500).send({err: err.message});
        })
    }

})

router.get('/getworkshopPapers',async(req, res)=>{

    

})


router.post('/approvedWorkshops',async(req, res)=>{

    if(req.body){
        const workshopPaperApproval = new workShopApproval(req.body);
        workshopPaperApproval.save().then((data)=>{
            res.status(200).send({data: data});
        }).catch((err)=>{
            res.status(500).send({err: err.message});
        })
    }

})

router.get('/sendNotifications/:id',async(req, res)=>{

})

module.exports = router;

// router.get('/allFiles',async(req,res)=>{
  
//     await Researcher.find({}).populate('fullName')
//     .then(data=>{
//         res.staus(200).send({data:data.uploads})

//     }).catch(err=>{
//         res.status(500).send({error:err.message});
//     })


// })

// router.get('/pdf',upload.single('uploads'),fileValidation,async(req,res)=>{

//     var file= req.file.buffer;
//     var encode_img = file.toString('base64');

//     //defining jason object for file

//     var finalFile = {
//         contentType : req.file.mimetype,
//         path: req.file.buffer,
//         file : new Buffer(encode_img,'base64')
//     }

//     res.contentType(finalFile.contentType)
//     res.send(finalFile.file);

//     if(error){
//         res.send(error.message)
//     }
// })