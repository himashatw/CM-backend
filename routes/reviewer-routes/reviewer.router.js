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
    await Researcher.find({}).then(data=>{
        res.status(200).send({data: data});
    }).catch(err=>{
        res.status(500).send({err: err.message});
    })
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
    await workshopConductor.find({}).then((data)=>{
        res.status(200).send({data: data});
    }).catch((err)=>{
        res.status(500).send({err: err.message});
    })
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
