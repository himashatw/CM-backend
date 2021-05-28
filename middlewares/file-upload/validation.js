 module.exports = (req,res,next) =>{

    if(typeof(req.file)==='undefined' || typeof(req.body) === 'undefined'){

        return res.status(400).json({
            errors: 'Problem with sending data'
        })
    }
    
    //check type of file
    if(!(req.file.mimetype).includes('pdf') && !(req.file.mimetype).includes('docx') && !(req.file.mimetype).includes('doc')
     && !(req.file.mimetype).includes('pptx') && !(req.file.mimetype).includes('ppt') && !(req.file.mimetype).includes('png')){
        return res.status(400).json({
            errors:'fle not support'
        })
     }
     
     //check file size 5MB
     if(req.file.size>1024*1024*5){
        return res.status(400).json({
            errors:'fle is too large'
        })
     }
     
     
     next();
}