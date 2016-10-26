var router = require('express').Router()
var Message = require('../../models/message')



router.post('/' , function (req , res, next){

    var d= req.body.senderId
    Message.find({ $and:[
        {   $or:[{senderId:req.body.senderId } , {senderId:req.body.recieverId}]   } ,
        {   $or:[{recieverId:req.body.senderId } , {recieverId:req.body.recieverId}]   }
        ]
    })
        .sort('-date')
        .exec(function(err , msgs){
            if(err){return next(err)}
            msgs = msgs.reverse()
            res.json(msgs)
        })
    console.log(d , 'messages.js')
})
module.exports =router