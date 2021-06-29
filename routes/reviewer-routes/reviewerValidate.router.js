const express = require('express')
const router = express.Router();
const ResercherModel = require('../../models/reviewer/reviewer')

router.post('/register',async (req, res) => {

    const research = new ResercherModel(req.body);
    await research.save().then((data) =>{
        res.status(200).send({data: data});
    }).catch((err) =>{
        res.status(500).send({err:err.message});
    })
})

router.get('/login/:username/:password', async(req, res)=>{
    await ResercherModel.find({username :req.params.username,password:req.params.password})
    .then((data)=>{
        res.staus(200).send({data: data});
    }).catch((err) =>{
        res.status(500).send({err:err.message});
    })
})

module.exports = router;