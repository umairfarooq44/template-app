var router = require('express').Router()
var multer  = require('multer')
var path = require('path')

var storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, file.originalname.replace(path.extname(file.originalname), "") + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })



router.post('/', upload.single('file'), function(req,res,next){
    console.log('Uploade Successful ', req.file, req.body  );
    return res.json(req.file.path);
});
module.exports =router