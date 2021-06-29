const express = require('express');
const router = express.Router();
const Researcher = require('../../models/users/researcher.js');
const fileValidation = require('../../middlewares/file-upload/validation.js');
const multer = require('multer');

const fileFilter = (req, res, cb) => {
    cb(null, true)
}
const upload = multer({
    fileFilter: fileFilter
})

router.post('/add', upload.single('uploads'), fileValidation, async (req, res) => {

    const fullName = req.body.fullName
    const email = req.body.email
    const password = req.body.password
    const phoneNo = req.body.phoneNo
    const approve = req.body.approve
    const uploads = req.file.buffer

    const reseacher = new Researcher({
        fullName : fullName,
        email :  email,
        password : password,
        phoneNo : phoneNo,
        approve : approve,
        uploads : uploads
    });

    await reseacher.save((err, reseacher) => {
        if (err) {
            return res.status(400).send({
                errors: err.message
            });
        }

        return res.status(201).send({
            message: 'Registered successfully',
            reseacher
        })

    });

});

router.get('/all', async (req, res) => {
    await Researcher.find({})
        .then(reseachers => {
            res.status(200).send({ data: reseachers })
        }).catch(error => {
            res.status(400).send({ error: error.message })
        })
})

router.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    await Researcher.findOne({ email: email, password: password }, (err, researcher) => {
        if (err) {
            console.log(err)
            return res.status(500).send({
                errors: err.message
            });
        }

        if (!researcher) {
            return res.status(404).send({
                message: 'email or password is mismatch!',
            });
        }

        return res.status(200).send({
            message: 'Login successfully'
        })
    })
})

module.exports = router;